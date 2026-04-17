import type { DefaultTypeService } from "../../default-types/service/default-type.service";
import { defaultTypeService as bootstrapDefaultTypeService } from "../../../bootstrap";
import type { DefaultTypeKey } from "../../default-types/types";
import { SCL_PRIVATE_DEFAULT_TYPEINFO } from "../../../shared/constants";
import type { DefaultTypeDetails } from "../../default-types/types";
import { listDataTypeElements, insertTypeElements, createElementInDefaultNS, createElementInNS } from "../../../shared/utils/scl.utils";
import type { EditV2, RemoveV2 } from "@oscd-transnet-plugins/oscd-event-api";

const COMPAS_EXTENSION_NS = "https://www.lfenergy.org/compas/extension/v1";
const IMPORTED_DEFAULT_SUFFIX = "imported-default";
const MAX_TYPE_ID_LENGTH = 64;

export type ApplyScenario =
    | "ADD_DB_DEFAULT"
    | "USE_LOCAL_DEFAULT"
    | "UPGRADE_TO_DB_DEFAULT"
    | "REMOVE_LOCAL_DEFAULT";


export interface LocalDefaultInfo extends DefaultTypeKey {
    resourceId: string,
    rootId: string,
    version: string,
    typeElementIds: string[]
}

export interface ResolveDefaultPlan {
    key: DefaultTypeKey

    scenario: ApplyScenario;

    /**
     * Root ID that members MUST reference after apply.
     * - null only if scenario "REMOVE_LOCAL_DEFAULT"
     */
    effectiveRootId: string | null;

    localBefore: LocalDefaultInfo | null;
    dbBefore: DefaultTypeDetails | null;

    /**
     * Type elements that must be present in the document
     * AFTER applying this plan.
     *
     * - empty: nothing to import
     * - non-empty:  must be inserted by TypeService
     */
    typeElementsToImport: Element[];
}

export class DefaultTypeManagerService {

    constructor(
        private doc: XMLDocument,
        private defaultTypeService: DefaultTypeService = bootstrapDefaultTypeService
    ) {
    }

    setDocument(doc: XMLDocument) {
        this.doc = doc;
    }

    public async resolve(key: DefaultTypeKey): Promise<ResolveDefaultPlan> {
        const localDefault = this.getLocalDefault(key);
        const dbDefault = await this.getNewestDefaultMeta(key);

        // Both exist: compare versions
        if (localDefault && dbDefault) {
            if (localDefault.version === dbDefault.version) {
                return {
                    key,
                    scenario: "USE_LOCAL_DEFAULT",
                    effectiveRootId: localDefault.rootId,
                    localBefore: localDefault,
                    dbBefore: dbDefault,
                    typeElementsToImport: [],
                };
            } else {
                // DB default is newer than local default
                return {
                    key,
                    scenario: "UPGRADE_TO_DB_DEFAULT",
                    effectiveRootId: dbDefault.rootId,
                    localBefore: localDefault,
                    dbBefore: dbDefault,
                    typeElementsToImport: listDataTypeElements(dbDefault.doc),
                };
            }
        }

        // Only DB default exists
        if (!localDefault && dbDefault) {
            return {
                key,
                scenario: "ADD_DB_DEFAULT",
                effectiveRootId: dbDefault.rootId,
                localBefore: null,
                dbBefore: dbDefault,
                typeElementsToImport: listDataTypeElements(dbDefault.doc),
            };
        }

        // Only local default exists or neither exists
        return {
            key,
            scenario: "REMOVE_LOCAL_DEFAULT",
            effectiveRootId: null,
            localBefore: localDefault,
            dbBefore: null,
            typeElementsToImport: [],
        };
    }

    /**
     * Applies a list of resolve plans in batch.
     * All type elements are inserted once respecting kind order (via insertTypeElements),
     * and all Private elements are managed.
     * 
     * Returns all edits needed to apply the plans and a map of effective root IDs
     * keyed by "kind:instance" (e.g., "DOType:Measurement").
     * 
     * @param plans The resolve plans to apply
     * @returns Edits and effective root IDs for each reference type key
     */
    public applyPlans(
        plans: ResolveDefaultPlan[],
    ): { edits: EditV2[], effectiveRootIds: Map<string, string | null> } {
        const edits: EditV2[] = [];
        const effectiveRootIds = new Map<string, string | null>();
        const reservedIds = new Set(
            listDataTypeElements(this.doc)
                .map(el => el.getAttribute('id'))
                .filter((id): id is string => !!id),
        );

        // Collect all type elements and resolve ID conflicts upfront
        const allTypeElements: Element[] = [];
        const planResults: Array<{ plan: ResolveDefaultPlan, effectiveRootId: string | null, typeElementIds: string[] }> = [];

        for (const plan of plans) {
            const refTypeKey = `${plan.key.kind}:${plan.key.instance}`;

            if (plan.scenario === "USE_LOCAL_DEFAULT") {
                effectiveRootIds.set(refTypeKey, plan.localBefore?.rootId ?? null);
                continue;
            }

            const typeElements = [...plan.typeElementsToImport];
            const conflictScope = `${plan.key.kind}-${plan.key.instance}`;
            const { effectiveRootId } = this.resolveIdConflicts(typeElements, plan.effectiveRootId, conflictScope, reservedIds);
            const typeElementIds = this.getTypeElementIds(typeElements);

            allTypeElements.push(...typeElements);
            planResults.push({ plan, effectiveRootId, typeElementIds });
            effectiveRootIds.set(refTypeKey, effectiveRootId);
        }

        // Insert all type elements at once (respects kind ordering)
        if (allTypeElements.length > 0) {
            edits.push(...insertTypeElements(this.doc, allTypeElements));
        }

        // Create the default-type info container once per batch (if needed)
        let defaultTypeInfo = this.doc.querySelector(`SCL > Private[type="${SCL_PRIVATE_DEFAULT_TYPEINFO}"]`);
        const needsDefaultTypeInfo = planResults.some(({ plan }) =>
            (plan.scenario === "ADD_DB_DEFAULT" || plan.scenario === "UPGRADE_TO_DB_DEFAULT") && !!plan.dbBefore,
        );

        if (needsDefaultTypeInfo && !defaultTypeInfo) {
            const sclRoot = this.doc.documentElement;
            if (sclRoot) {
                defaultTypeInfo = createElementInDefaultNS(this.doc, 'Private');
                defaultTypeInfo.setAttribute('type', SCL_PRIVATE_DEFAULT_TYPEINFO);
                edits.push({
                    parent: sclRoot,
                    node: defaultTypeInfo,
                    reference: sclRoot.firstElementChild,
                } as EditV2);
            }
        }

        // Manage Private elements for each plan
        for (const { plan, effectiveRootId, typeElementIds } of planResults) {
            switch (plan.scenario) {
                case "ADD_DB_DEFAULT":
                    if (plan.dbBefore && defaultTypeInfo) {
                        edits.push(...this.buildAddDefaultTypePrivateEdits(defaultTypeInfo, plan.key, plan.dbBefore, effectiveRootId, typeElementIds));
                    }
                    break;

                case "UPGRADE_TO_DB_DEFAULT":
                    // Remove old Private element
                    const oldPrivate = this.getDefaultTypePrivateElement(plan.key);
                    if (oldPrivate) {
                        edits.push({ node: oldPrivate } as RemoveV2);
                    }
                    // Add new Private element
                    if (plan.dbBefore && defaultTypeInfo) {
                        edits.push(...this.buildAddDefaultTypePrivateEdits(defaultTypeInfo, plan.key, plan.dbBefore, effectiveRootId, typeElementIds));
                    }
                    break;

                case "REMOVE_LOCAL_DEFAULT":
                    const privateToRemove = this.getDefaultTypePrivateElement(plan.key);
                    if (privateToRemove) {
                        edits.push({ node: privateToRemove } as RemoveV2);
                    }
                    break;
            }
        }

        return { edits, effectiveRootIds };
    }

    /**
     * Resolves ID conflicts in imported type elements.
     * Renames elements if their IDs already exist in the document,
     * but preserves the rootId as-is.
     * 
     * Returns a mapping of old IDs to new IDs and the effective root ID to use.
     */
    private resolveIdConflicts(
        typeElements: Element[],
        rootId: string | null,
        conflictScope: string,
        reservedIds: Set<string>,
    ): { idMapping: Map<string, string>, effectiveRootId: string | null } {
        const idMapping = new Map<string, string>();

        let effectiveRootId = rootId;

        for (const element of typeElements) {
            const oldId = element.getAttribute('id');
            if (!oldId) continue;

            if (reservedIds.has(oldId)) {
                // ID conflict: rename this element
                const newId = this.generateConflictId(oldId, conflictScope, reservedIds);
                element.setAttribute('id', newId);
                idMapping.set(oldId, newId);
                reservedIds.add(newId);

                // If this is the root element, update effectiveRootId
                if (oldId === rootId) {
                    effectiveRootId = newId;
                }
            } else {
                reservedIds.add(oldId);
            }
        }

        return { idMapping, effectiveRootId };
    }

    private generateConflictId(baseId: string, conflictScope: string, reservedIds: Set<string>): string {
        const normalizedScope = conflictScope.replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase() || 'unknown';
        const shortScope = normalizedScope.slice(0, 16);
        let counter = 1;

        let candidate = '';
        do {
            const suffix = `__${IMPORTED_DEFAULT_SUFFIX}-${shortScope}-${counter}`;
            const maxBaseLength = Math.max(0, MAX_TYPE_ID_LENGTH - suffix.length);
            const trimmedBaseId = baseId.slice(0, maxBaseLength);
            candidate = `${trimmedBaseId}${suffix}`;
            counter++;
        } while (reservedIds.has(candidate));

        return candidate;
    }

    private buildAddDefaultTypePrivateEdits(
        defaultTypeInfo: Element,
        key: DefaultTypeKey,
        dbDefault: DefaultTypeDetails,
        rootId: string | null,
        typeElementIds: string[],
    ): EditV2[] {
        const edits: EditV2[] = [];

        // Create the default-type element
        const defaultTypeElement = createElementInNS(this.doc, COMPAS_EXTENSION_NS, 'compas:default-type');
        defaultTypeElement.setAttribute('kind', key.kind);
        defaultTypeElement.setAttribute('instance', key.instance);
        defaultTypeElement.setAttribute('rootId', rootId || '');
        defaultTypeElement.setAttribute('version', dbDefault.version);
        defaultTypeElement.setAttribute('id', dbDefault.id);

        for (const typeElementId of typeElementIds) {
            const typeElement = createElementInNS(this.doc, COMPAS_EXTENSION_NS, 'compas:type-element');
            typeElement.setAttribute('id', typeElementId);
            defaultTypeElement.appendChild(typeElement);
        }

        edits.push({
            parent: defaultTypeInfo,
            node: defaultTypeElement,
            reference: null,
        } as EditV2);

        return edits;
    }

    private getTypeElementIds(typeElements: Element[]): string[] {
        return typeElements
            .map(element => element.getAttribute('id'))
            .filter((id): id is string => !!id);
    }

    private getDefaultTypePrivateElement(key: DefaultTypeKey): Element | null {
        const defaultTypeInfo = this.doc.querySelector(`SCL > Private[type="${SCL_PRIVATE_DEFAULT_TYPEINFO}"]`);
        if (!defaultTypeInfo) {
            return null;
        }

        return Array.from(defaultTypeInfo.children).find((child) => {
            const localName = (child.localName || child.tagName).toLowerCase();
            return (
                localName === "default-type" &&
                child.getAttribute("kind") === key.kind &&
                child.getAttribute("instance") === key.instance
            );
        }) ?? null;
    }

    public getLocalDefault(key: DefaultTypeKey): LocalDefaultInfo | null {
        if (!this.doc) {
            throw new Error("Document not set");
        }

        const defaultTypeInfo = this.doc.querySelector(`SCL > Private[type="${SCL_PRIVATE_DEFAULT_TYPEINFO}"]`);
        if (!defaultTypeInfo) {
            return null;
        }

        const matchingDefaultType = Array.from(defaultTypeInfo.children).find((child) => {
            const localName = (child.localName || child.tagName).toLowerCase();
            if (localName !== "default-type") {
                return false;
            }

            return child.getAttribute("kind") === key.kind && child.getAttribute("instance") === key.instance;
        });

        if (!matchingDefaultType) {
            return null;
        }

        const kind = matchingDefaultType.getAttribute("kind");
        const instance = matchingDefaultType.getAttribute("instance");
        const resourceId = matchingDefaultType.getAttribute("resourceId") ?? matchingDefaultType.getAttribute("id");
        const rootId = matchingDefaultType.getAttribute("rootId");
        const version = matchingDefaultType.getAttribute("version");

        if (!kind || !instance || !resourceId || !rootId || !version) {
            console.warn("Invalid default type element, missing attributes", matchingDefaultType);
            return null;
        }

        const typeElementIds = Array.from(matchingDefaultType.children)
            .filter((child) => {
                const localName = (child.localName || child.tagName).toLowerCase();
                return localName === "type-element";
            })
            .map((el) => el.getAttribute("id"))
            .filter((id): id is string => !!id);

        return {
            kind,
            instance,
            resourceId,
            rootId,
            version,
            typeElementIds,
        };
    }

    public getNewestDefaultMeta(key: DefaultTypeKey) {
        return this.defaultTypeService.getLatestByKindAndInstance(key.kind, key.instance);
    }
}