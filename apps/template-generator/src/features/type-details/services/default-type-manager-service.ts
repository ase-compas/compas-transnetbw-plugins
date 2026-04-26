import type { DefaultTypeService } from "../../default-types/service/default-type.service";
import { defaultTypeService as bootstrapDefaultTypeService } from "../../../bootstrap";
import type { DefaultTypeKey } from "../../default-types/types";
import { SCL_PRIVATE_DEFAULT_TYPEINFO } from "../../../shared/constants";
import type { DefaultTypeDetails } from "../../default-types/types";
import { listDataTypeElements, insertTypeElements, createElementInDefaultNS, createElementInNS } from "../../../shared/utils/scl.utils";
import type { EditV2, RemoveV2, SetAttributesV2 } from "@oscd-transnet-plugins/oscd-event-api";
import { compareVersions } from "../../default-types/utils/version.utils";

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

export interface DefaultTypeVersionStatus {
    key: DefaultTypeKey;
    currentVersion: string;
    currentRootId: string;
    latestVersion: string;
    latestRootId: string;
    latestSource: 'local' | 'db';
    localLatestVersion: string | null;
    dbLatestVersion: string | null;
    hasUpdate: boolean;
    isDeprecated: boolean;
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
            const compareResult = compareVersions(localDefault.version, dbDefault.version);
            if (compareResult >= 0) {
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

        // Only local default exists
        if (localDefault) {
            return {
                key,
                scenario: "USE_LOCAL_DEFAULT",
                effectiveRootId: localDefault.rootId,
                localBefore: localDefault,
                dbBefore: null,
                typeElementsToImport: [],
            };
        }

        // Neither local nor DB default exists
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
                        if (!this.getDefaultTypeElement(plan.key, plan.dbBefore.version)) {
                            edits.push(...this.buildAddDefaultTypePrivateEdits(defaultTypeInfo, plan.key, plan.dbBefore, effectiveRootId, typeElementIds));
                        }
                    }
                    break;

                case "UPGRADE_TO_DB_DEFAULT":
                    if (plan.dbBefore && defaultTypeInfo) {
                        if (!this.getDefaultTypeElement(plan.key, plan.dbBefore.version)) {
                            edits.push(...this.buildAddDefaultTypePrivateEdits(defaultTypeInfo, plan.key, plan.dbBefore, effectiveRootId, typeElementIds));
                        }
                    }
                    break;

                case "REMOVE_LOCAL_DEFAULT":
                    const privateToRemove = this.getDefaultTypeElement(plan.key);
                    if (privateToRemove) {
                        edits.push({ node: privateToRemove } as RemoveV2);
                    }
                    break;
            }
        }

        return { edits, effectiveRootIds };
    }

    public async getVersionStatusByTypeId(typeId: string): Promise<DefaultTypeVersionStatus | null> {
        const current = this.getDefaultInfoByTypeId(typeId);
        if (!current) {
            return null;
        }

        const key: DefaultTypeKey = { kind: current.kind, instance: current.instance };
        const localDefaults = this.getLocalDefaults(key);
        const latestLocal = localDefaults[0] ?? null;
        const latestDb = await this.getNewestDefaultMeta(key);

        const localLatestVersion = latestLocal?.version ?? null;
        const dbLatestVersion = latestDb?.version ?? null;

        let latestVersion = current.version;
        let latestRootId = current.rootId;
        let latestSource: 'local' | 'db' = 'local';

        if (latestLocal && compareVersions(latestLocal.version, latestVersion) >= 0) {
            latestVersion = latestLocal.version;
            latestRootId = latestLocal.rootId;
            latestSource = 'local';
        }

        if (latestDb && compareVersions(latestDb.version, latestVersion) > 0) {
            latestVersion = latestDb.version;
            latestRootId = latestDb.rootId;
            latestSource = 'db';
        }

        const hasUpdate = compareVersions(current.version, latestVersion) < 0;

        return {
            key,
            currentVersion: current.version,
            currentRootId: current.rootId,
            latestVersion,
            latestRootId,
            latestSource,
            localLatestVersion,
            dbLatestVersion,
            hasUpdate,
            isDeprecated: hasUpdate,
        };
    }

    public async buildUpdateToLatestEditsByTypeId(typeId: string): Promise<{ edits: EditV2[], newRootId: string | null }> {
        const current = this.getDefaultInfoByTypeId(typeId);
        if (!current) {
            return { edits: [], newRootId: null };
        }

        const status = await this.getVersionStatusByTypeId(typeId);
        if (!status || !status.hasUpdate) {
            return { edits: [], newRootId: null };
        }

        const edits: EditV2[] = [];
        let targetRootId = status.latestRootId;

        if (status.latestSource === 'db') {
            const plan = await this.resolve(status.key);
            const { edits: planEdits, effectiveRootIds } = this.applyPlans([plan]);
            edits.push(...planEdits);
            const key = `${status.key.kind}:${status.key.instance}`;
            targetRootId = effectiveRootIds.get(key) ?? targetRootId;
        }

        if (targetRootId && targetRootId !== current.rootId) {
            edits.push(...this.buildReplaceTypeReferenceEdits(current.rootId, targetRootId));
        }

        // Clean up old version: remove old Private entry and old type elements
        const oldPrivateEntry = this.getDefaultTypeElement(current, current.version);
        if (oldPrivateEntry) {
            edits.push({ node: oldPrivateEntry } as RemoveV2);
        }

        for (const oldTypeElementId of current.typeElementIds) {
            const escapedId = oldTypeElementId.replace(/"/g, '\\"');
            const oldElements = Array.from(this.doc.querySelectorAll(`[id="${escapedId}"]`));
            for (const oldElement of oldElements) {
                edits.push({ node: oldElement } as RemoveV2);
            }
        }

        return { edits, newRootId: targetRootId };
    }
    /**
     * Gets the local default info for a given type reference key by searching the Private section of the document.
     * @param key default type key
     * @returns local default info if found, otherwise null
     */
    public getLocalDefault(key: DefaultTypeKey): LocalDefaultInfo | null {
        return this.getLocalDefaults(key)[0] ?? null;
    }

    public getLocalDefaults(key: DefaultTypeKey): LocalDefaultInfo[] {
        if (!this.doc) {
            throw new Error("Document not set");
        }

        const matchingDefaultTypes = this.getDefaultTypeElements(key);
        return matchingDefaultTypes
            .map((element) => this.parseDefaultTypeElement(element))
            .filter((defaultInfo): defaultInfo is LocalDefaultInfo => !!defaultInfo)
            .sort((a, b) => compareVersions(b.version, a.version));
    }

    /**
     * Gets the newest default meta for a given type reference key by querying the default type service.
     * @param key default type key
     * @returns newest default meta if found, otherwise null
     */
    public getNewestDefaultMeta(key: DefaultTypeKey) {
        return this.defaultTypeService.getLatestByKindAndInstance(key.kind, key.instance);
    }

    /**
     * Finds the local default info for a given type element ID by searching through the default-type Private section.
     * @param typeId The ID of the type element to find default info for
     * @returns default info if a default-type contains a type-element with the given ID, otherwise null
     */
    public getDefaultInfoByTypeId(typeId: string): LocalDefaultInfo | null {
        const defaultTypeInfo = this.getDefaultTypeSectionPrivateElement();
        if (!defaultTypeInfo) {
            return null;
        }

        const defaultTypeElements = Array.from(defaultTypeInfo.children).filter((child) => {
            const localName = (child.localName || child.tagName).toLowerCase();
            return localName === "default-type";
        });

        // for each defaultType element look inside their children (type-elemnt) and check if the id matchs this is the if it matches. use the parent element to get the default info
        const matchingDefaultTypes = defaultTypeElements.filter((defaultTypeElement) => {
            return Array.from(defaultTypeElement.children).some((child) => {
                const localName = (child.localName || child.tagName).toLowerCase();
                return localName === "type-element" && child.getAttribute("id") === typeId;
            });
        });

        const parsed = matchingDefaultTypes
            .map((element) => this.parseDefaultTypeElement(element))
            .filter((defaultInfo): defaultInfo is LocalDefaultInfo => !!defaultInfo)
            .sort((a, b) => compareVersions(b.version, a.version));

        return parsed[0] ?? null;
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

    private getDefaultTypeElement(key: DefaultTypeKey, version?: string): Element | null {
        return this.getDefaultTypeElements(key, version)[0] ?? null;
    }

    private getDefaultTypeElements(key: DefaultTypeKey, version?: string): Element[] {
        const defaultTypeInfo = this.getDefaultTypeSectionPrivateElement();
        if (!defaultTypeInfo) {
            return [];
        }

        return Array.from(defaultTypeInfo.children).filter((child) => {
            const localName = (child.localName || child.tagName).toLowerCase();
            return (
                localName === "default-type" &&
                child.getAttribute("kind") === key.kind &&
                child.getAttribute("instance") === key.instance &&
                (!version || child.getAttribute("version") === version)
            );
        });
    }


    private getDefaultTypeSectionPrivateElement(): Element | null {
        return this.doc.querySelector(`SCL > Private[type="${SCL_PRIVATE_DEFAULT_TYPEINFO}"]`);
    }

    private parseDefaultTypeElement(element: Element): LocalDefaultInfo | null {
        const kind = element.getAttribute("kind");
        const instance = element.getAttribute("instance");
        const resourceId = element.getAttribute("resourceId") ?? element.getAttribute("id");
        const rootId = element.getAttribute("rootId");
        const version = element.getAttribute("version");

        if (!kind || !instance || !resourceId || !rootId || !version) {
            console.warn("Invalid default type element, missing attributes", element);
            return null;
        }

        const typeElementIds = Array.from(element.children)
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

    private buildReplaceTypeReferenceEdits(oldTypeId: string, newTypeId: string): SetAttributesV2[] {
        return Array.from(this.doc.querySelectorAll(`[type="${oldTypeId}"]`)).map((element) => ({
            element,
            attributes: { type: newTypeId },
            attributesNS: {},
        } as SetAttributesV2));
    }

    /**
     * Builds edit events to rename a type ID within the default type metadata Private section.
     *
     * If the given `oldId` appears as a `type-element` id inside any `compas:default-type` entry,
     * the corresponding `compas:type-element` id attribute is updated to `newId`.
     * If `oldId` is also the `rootId` of that `compas:default-type` entry, the `rootId` attribute
     * is updated to `newId` as well.
     *
     * Returns an empty array when `oldId` is not tracked in the metadata.
     */
    public buildRenameTypeIdEdits(oldId: string, newId: string): SetAttributesV2[] {
        const edits: SetAttributesV2[] = [];
        const defaultTypeInfo = this.getDefaultTypeSectionPrivateElement();
        if (!defaultTypeInfo) {
            return edits;
        }

        const defaultTypeElements = Array.from(defaultTypeInfo.children).filter((child) => {
            const localName = (child.localName || child.tagName).toLowerCase();
            return localName === 'default-type';
        });

        for (const defaultTypeEl of defaultTypeElements) {
            const typeElementChild = Array.from(defaultTypeEl.children).find((child) => {
                const localName = (child.localName || child.tagName).toLowerCase();
                return localName === 'type-element' && child.getAttribute('id') === oldId;
            });

            if (!typeElementChild) {
                continue;
            }

            // Update the type-element id
            edits.push({
                element: typeElementChild,
                attributes: { id: newId },
                attributesNS: {},
            } as SetAttributesV2);

            // If oldId is also the rootId of the parent default-type, update rootId too
            if (defaultTypeEl.getAttribute('rootId') === oldId) {
                edits.push({
                    element: defaultTypeEl,
                    attributes: { rootId: newId },
                    attributesNS: {},
                } as SetAttributesV2);
            }
        }

        return edits;
    }

    /**
     * Builds edit events that delete local default metadata for the tracked
     * default group of a type.
     *
     * A type is considered tracked when it appears as a root type or nested
     * type-element in local compas:default-type metadata.
     */
    public buildDeleteLocalDefaultEditsByTypeId(typeId: string): RemoveV2[] {
        const defaultInfo = this.getDefaultInfoByTypeId(typeId);
        if (!defaultInfo) {
            throw new Error(`Type ${typeId} is not part of a local default type`);
        }

        const defaultTypeElements = this.getDefaultTypeElements({
            kind: defaultInfo.kind,
            instance: defaultInfo.instance,
        });

        if (defaultTypeElements.length === 0) {
            throw new Error(`No local default metadata found for type ${typeId}`);
        }

        return defaultTypeElements.map((element) => ({ node: element } as RemoveV2));
    }

}
