import type { DefaultTypeKey } from "../../default-types/types";
import type { EditV2, RemoveV2, SetAttributesV2 } from "@oscd-transnet-plugins/oscd-event-api";
import { compareVersions } from "../../default-types/utils/version.utils";
import { SCL_PRIVATE_DEFAULT_TYPEINFO } from "../../../shared/constants";
import { createElementInDefaultNS, createElementInNS } from "../../../shared/utils/scl.utils";

export type DefaultTypeMetadata = {
    id: string;
    key: DefaultTypeKey;
    version: string;
    rootId: string;
    subTypeIds: string[];
}

const COMPAS_EXTENSION_NS = "https://www.lfenergy.org/compas/extension/v1";

/**
 * Stores and retrieves default type metadata inside an SCL document's Private element.
 * Each metadata entry tracks the key, version, root element ID, and all associated type element IDs
 * for a locally imported default type group.
 *
 * Metadata is stored as a `<Private type="compas:default-type-info">` element directly under
 * the SCL root. Each imported default is a `<compas:default-type>` child with its type element
 * IDs listed as `<compas:type-element>` children:
 *
 * ```xml
 * <Private type="compas:default-type-info">
 *   <compas:default-type kind="DOType" instance="Measurement"
 *                        rootId="root-1" version="1.0.0" id="db-1">
 *     <compas:type-element id="root-1"/>
 *     <compas:type-element id="sub-1"/>
 *   </compas:default-type>
 * </Private>
 * ```
 *
 * `subTypeIds` includes all type element IDs in the group, including the `rootId` itself.
 */
export class DefaultMetadataService {

    public getLatestByKey(doc: XMLDocument, key: DefaultTypeKey): DefaultTypeMetadata | undefined {
        return this.getAllVersionsByKey(doc, key)[0];
    }

    public getAll(doc: XMLDocument): DefaultTypeMetadata[] {
        const defaultTypeInfo = this.getDefaultTypeSectionPrivateElement(doc);
        if (!defaultTypeInfo) {
            return [];
        }

        return Array.from(defaultTypeInfo.children)
            .filter((child) => this.getLocalName(child) === 'default-type')
            .map((element) => this.parseDefaultTypeElement(element))
            .filter((metadata): metadata is DefaultTypeMetadata => !!metadata)
            .sort((a, b) => {
                if (a.key.kind !== b.key.kind) {
                    return a.key.kind.localeCompare(b.key.kind);
                }

                if (a.key.instance !== b.key.instance) {
                    return a.key.instance.localeCompare(b.key.instance);
                }

                return compareVersions(b.version, a.version);
            });
    }

    public getAllVersionsByKey(doc: XMLDocument, key: DefaultTypeKey): DefaultTypeMetadata[] {
        const { byKey } = this.buildIndex(doc);
        return byKey.get(this.getKeyString(key)) ?? [];
    }

    public getByTypeId(doc: XMLDocument, typeId: string): DefaultTypeMetadata | undefined {
        return this.getAll(doc)
            .filter((metadata) => metadata.subTypeIds.includes(typeId))
            .sort((a, b) => compareVersions(b.version, a.version))[0];
    }

    public add(doc: XMLDocument, metadata: DefaultTypeMetadata, existingContainer?: Element): EditV2[] {
        this.validateMetadata(metadata);

        if (this.getDefaultTypeElements(doc, metadata.key, metadata.version).length > 0) {
            return [];
        }

        let defaultTypeInfo: Element;
        let edits: EditV2[];

        if (existingContainer) {
            // Reuse provided container, no new edits needed
            defaultTypeInfo = existingContainer;
            edits = [];
        } else {
            // Create container as before (backward compatibility for single-add flows)
            const result = this.ensureMetadataContainer(doc);
            defaultTypeInfo = result.defaultTypeInfo;
            edits = result.edits;
        }

        const defaultTypeElement = createElementInNS(doc, COMPAS_EXTENSION_NS, 'compas:default-type');
        defaultTypeElement.setAttribute('kind', metadata.key.kind);
        defaultTypeElement.setAttribute('instance', metadata.key.instance);
        defaultTypeElement.setAttribute('rootId', metadata.rootId);
        defaultTypeElement.setAttribute('version', metadata.version);
        defaultTypeElement.setAttribute('id', metadata.id);

        for (const subTypeId of metadata.subTypeIds) {
            const typeElement = createElementInNS(doc, COMPAS_EXTENSION_NS, 'compas:type-element');
            typeElement.setAttribute('id', subTypeId);
            defaultTypeElement.appendChild(typeElement);
        }

        edits.push({
            parent: defaultTypeInfo,
            node: defaultTypeElement,
            reference: null,
        } as EditV2);

        return edits;
    }

    public delete(doc: XMLDocument, key: DefaultTypeKey, version: string): RemoveV2[] {
        return this.getDefaultTypeElements(doc, key, version)
            .map((element) => ({ node: element } as RemoveV2));
    }

    public deleteAllOfKey(doc: XMLDocument, key: DefaultTypeKey): RemoveV2[] {
        return this.getDefaultTypeElements(doc, key)
            .map((element) => ({ node: element } as RemoveV2));
    }

    /**
     * Ensures the metadata container (Private element with type "compas:default-type-info") exists
     * and returns both the container element and any edits needed to create it.
     * Useful for batch operations where multiple items need to be added to the same container.
     * @param doc The XML document
     * @returns Object with the container element and edits (empty if container already existed)
     */
    public ensureMetadataContainerWithEdits(doc: XMLDocument): { container: Element, edits: EditV2[] } {
        const { defaultTypeInfo, edits } = this.ensureMetadataContainer(doc);
        return { container: defaultTypeInfo, edits };
    }

    public rename(doc: XMLDocument, oldId: string, newId: string): SetAttributesV2[] {
        const edits: SetAttributesV2[] = [];
        const defaultTypeInfo = this.getDefaultTypeSectionPrivateElement(doc);
        if (!defaultTypeInfo) {
            return edits;
        }

        const defaultTypeElements = Array.from(defaultTypeInfo.children).filter((child) => this.getLocalName(child) === 'default-type');
        for (const defaultTypeEl of defaultTypeElements) {
            const typeElementChild = Array.from(defaultTypeEl.children).find((child) => {
                return this.getLocalName(child) === 'type-element' && child.getAttribute('id') === oldId;
            });

            if (!typeElementChild) {
                continue;
            }

            edits.push({
                element: typeElementChild,
                attributes: { id: newId },
                attributesNS: {},
            } as SetAttributesV2);

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

    private ensureMetadataContainer(doc: XMLDocument): { defaultTypeInfo: Element, edits: EditV2[] } {
        const existing = this.getDefaultTypeSectionPrivateElement(doc);
        if (existing) {
            return { defaultTypeInfo: existing, edits: [] };
        }

        const sclRoot = doc.documentElement;
        if (!sclRoot) {
            throw new Error('SCL root element not found in document');
        }

        const defaultTypeInfo = createElementInDefaultNS(doc, 'Private');
        defaultTypeInfo.setAttribute('type', SCL_PRIVATE_DEFAULT_TYPEINFO);

        return {
            defaultTypeInfo,
            edits: [{
                parent: sclRoot,
                node: defaultTypeInfo,
                reference: sclRoot.firstElementChild,
            } as EditV2],
        };
    }

    private getDefaultTypeElements(doc: XMLDocument, key: DefaultTypeKey, version?: string): Element[] {
        const defaultTypeInfo = this.getDefaultTypeSectionPrivateElement(doc);
        if (!defaultTypeInfo) {
            return [];
        }

        return Array.from(defaultTypeInfo.children).filter((child) => {
            return (
                this.getLocalName(child) === 'default-type' &&
                child.getAttribute('kind') === key.kind &&
                child.getAttribute('instance') === key.instance &&
                (!version || child.getAttribute('version') === version)
            );
        });
    }

    private getDefaultTypeSectionPrivateElement(doc: XMLDocument): Element | null {
        return doc.querySelector(`SCL > Private[type="${SCL_PRIVATE_DEFAULT_TYPEINFO}"]`);
    }

    private buildIndex(doc: XMLDocument): { byKey: Map<string, DefaultTypeMetadata[]> } {
        const byKey = new Map<string, DefaultTypeMetadata[]>();
        for (const metadata of this.getAll(doc)) {
            const keyString = this.getKeyString(metadata.key);
            const versions = byKey.get(keyString) ?? [];
            versions.push(metadata);
            byKey.set(keyString, versions);
        }

        for (const versions of byKey.values()) {
            versions.sort((a, b) => compareVersions(b.version, a.version));
        }

        return { byKey };
    }

    private parseDefaultTypeElement(element: Element): DefaultTypeMetadata | null {
        const kind = element.getAttribute('kind');
        const instance = element.getAttribute('instance');
        const id = element.getAttribute('resourceId') ?? element.getAttribute('id');
        const rootId = element.getAttribute('rootId');
        const version = element.getAttribute('version');

        if (!kind || !instance || !id || !rootId || !version) {
            return null;
        }

        const subTypeIds = Array.from(element.children)
            .filter((child) => this.getLocalName(child) === 'type-element')
            .map((el) => el.getAttribute('id'))
            .filter((subTypeId): subTypeId is string => !!subTypeId);

        return {
            id,
            key: { kind, instance },
            version,
            rootId,
            subTypeIds,
        };
    }

    private getLocalName(element: Element): string {
        return (element.localName || element.tagName).toLowerCase();
    }

    private getKeyString(key: DefaultTypeKey): string {
        return `${key.kind}:${key.instance}`;
    }

    private validateMetadata(metadata: DefaultTypeMetadata): void {
        if (!metadata.id || !metadata.key.kind || !metadata.key.instance || !metadata.version || !metadata.rootId) {
            throw new Error('Invalid default type metadata, missing required fields');
        }
    }

}