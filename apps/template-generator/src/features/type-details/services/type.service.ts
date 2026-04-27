import type { EditV2, RemoveV2, SetAttributesV2 } from "@oscd-transnet-plugins/oscd-event-api";
import { createAndDispatchEditEvent } from '@oscd-transnet-plugins/oscd-event-api';
import { TypeKind, type DataTypeDetails, type DataTypeFilter, type DataTypeMember, type InstanceDetails, type SimpleDataType } from "../../../shared/model";
import { NsdSchemaRegistry, type NsdTypeDefinition } from "./nsd-schema-registry";
import { findDataTypeElement, listDataTypeElements, getDataTypeBaseInfo, elementToSimpleDataType, createElementInDefaultNS, DATA_TYPE_KIND_ORDER, DATA_TYPE_TEMPLATES_TAG, findDataTypeTemplatesElement, findDataTypeInsertReferenceElement, insertTypeElements } from "../../../shared/utils/scl.utils";
import { SCL_PRIVATE_TYPE_INSTANCE_TYPE } from "../../../shared/constants";
import { INSTANCE_DESCRIPTIONS } from "../../../assets/instance-descriptions";
import { isTypeAssignable } from "../../../shared/utils/data-type.utils";
import { DefaultTypeManagerService, type ResolveDefaultPlan } from "./default-type-manager-service";

export interface ApplyDefaultTypesPreviewEntry {
    refTypeKey: string;
    refTypeKind: TypeKind;
    objectType: string;
    memberNames: string[];
    plan: ResolveDefaultPlan;
}

export interface ApplyDefaultTypesPreview {
    dataTypeId: string;
    entries: ApplyDefaultTypesPreviewEntry[];
}

export interface ApplySingleDefaultTypePreview {
    refTypeKey: string;
    refTypeKind: TypeKind;
    objectType: string;
    plan: ResolveDefaultPlan;
}



export class DataTypeService {

    private readonly nsdSchemaRegistry: NsdSchemaRegistry;
    private readonly defaultTypeManagerService: DefaultTypeManagerService;

    constructor(
        private doc: XMLDocument,
        private readonly hostElement: HTMLElement,
    ) {
        this.nsdSchemaRegistry = new NsdSchemaRegistry();
        this.defaultTypeManagerService = new DefaultTypeManagerService(doc);
    }

    setDoc(doc: XMLDocument): void {
        this.doc = doc;
        this.defaultTypeManagerService.setDocument(doc);
    }


    /**
     * Gets detailed information about a data type, including its members and their reference details.
     * @param id The ID of the data type to retrieve.
     * @returns DataTypeDetails object with enriched member information.
     * @throws Error if the data type is not found or if its instance type is invalid according to the NSD schema registry.
     */
    getById(id: string): DataTypeDetails {
        const element = findDataTypeElement(this.doc, id);
        const { typeKind, instanceType } = getDataTypeBaseInfo(element);

        if (!id) {
            throw new Error(`DataType element is missing required attributes: ${element.outerHTML}`);
        }

        const defaultTypeInfo = this.defaultTypeManagerService.getDefaultInfoByTypeId(id) || undefined;

        if (!instanceType) {
            return {
                id,
                typeKind,
                instanceType: '',
                members: this.mapMembersFromElementWithoutNsd(element),
                defaultTypeInfo: defaultTypeInfo,
                defaultTypeVersionStatus: undefined,
            };
        }

        const nsdDefs = this.nsdSchemaRegistry.getTypeDefinition(typeKind, instanceType);

        const members = Object.values(nsdDefs).map(def => {
            const childElement = this.findConfiguredMemberElement(element, def);
            const isConfigured = !!childElement;
            const resolvedName =
                def.tagName === 'EnumVal'
                    ? (childElement?.textContent?.trim() || def.name)
                    : def.name;

            const resolvedAttributes = { ...(def.attributes ?? {}) };
            if (def.tagName === 'EnumVal' && childElement) {
                const ord = childElement.getAttribute('ord');
                if (ord !== null) {
                    resolvedAttributes.literalValue = ord;
                }
            }

            return {
                tagName: def.tagName,
                name: resolvedName,

                reference: childElement ? childElement.getAttribute('type') : undefined,

                isMandatory: def.isMandatory,
                isConfigured: isConfigured,

                requiresReference: def.requiresReference,
                refKind: def.refTypeKind,
                refInstance: def.objectType,
                refUnderlyingType: def.underlyingType,

                attributes: resolvedAttributes
            };
        });

        return {
            id,
            typeKind,
            instanceType,
            members,
            defaultTypeInfo: defaultTypeInfo,
            defaultTypeVersionStatus: undefined,
        };
    }

    async getDefaultTypeVersionStatusByTypeId(typeId: string) {
        return this.defaultTypeManagerService.getVersionStatusByTypeId(typeId);
    }

    async updateDefaultTypeToLatestByTypeId(typeId: string): Promise<string | null> {
        const { edits, newRootId } = await this.defaultTypeManagerService.buildUpdateToLatestEditsByTypeId(typeId);
        if (edits.length === 0) {
            return null;
        }

        createAndDispatchEditEvent(this.hostElement, edits, {
            title: `Update default type to latest for ${typeId}`,
            createHistoryEntry: true,
        });

        return newRootId;
    }

    detachDefault(typeId: string): void {
        const edits = this.defaultTypeManagerService.buildDeleteLocalDefaultEditsByTypeId(typeId);
        if (edits.length === 0) {
            throw new Error(`No local default metadata found for type ${typeId}`);
        }

        createAndDispatchEditEvent(this.hostElement, edits, {
            title: `Detach default type ${typeId}`,
            createHistoryEntry: true,
        });
    }

    /**
     * Gets a delete plan for a type, including info about cascade deletions
     * if the type is a root of a local default group.
     * @param typeId The ID of the type to analyze for deletion
     * @returns Object with hasDefaultMetadata if its part of a default type,
     *          and trackedSubTypeIds (array of sub-type IDs that will also be deleted)
     */
    getDeletePlan(typeId: string): { hasDefaultMetadata: boolean; trackedSubTypeIds: string[] } {
        const defaultInfo = this.defaultTypeManagerService.getDefaultInfoByTypeId(typeId);
        
        const hasDefaultMetadata = !!defaultInfo;
        
        const trackedSubTypeIds = hasDefaultMetadata
            ? this.defaultTypeManagerService.getTrackedSubTypeIdsByRootId(defaultInfo.rootId)
            : [];

        return {
            hasDefaultMetadata: hasDefaultMetadata,
            trackedSubTypeIds,
        };
    }

    /**
     * Lists all simple data types, optionally filtered by type kind and instance type.
     * @param filter Optional filter criteria to narrow down the list of data types.
     * @returns An array of SimpleDataType objects that match the filter criteria.
     */
    list(filter?: DataTypeFilter): SimpleDataType[] {
        const elements = listDataTypeElements(this.doc);
        return elements.map(el => elementToSimpleDataType(el)).filter(dt => {
            const normalizedQuery = filter?.query?.trim().toLowerCase();
            if (normalizedQuery) {
                const normalizedId = (dt.id ?? '').toLowerCase();
                const normalizedTypeKind = String(dt.typeKind ?? '').toLowerCase();
                const normalizedInstanceType = (dt.instanceType ?? '').toLowerCase();
                const matchesQuery =
                    normalizedId.includes(normalizedQuery) ||
                    normalizedTypeKind.includes(normalizedQuery) ||
                    normalizedInstanceType.includes(normalizedQuery);
                if (!matchesQuery) {
                    return false;
                }
            }

            if (filter?.typeKind && dt.typeKind !== filter.typeKind) {
                return false;
            }
            if (filter?.instanceType && dt.instanceType !== filter.instanceType) {
                return false;
            }
            return true;
        });
    }

    /**
     * Checks whether a data type with the given ID exists.
     * @param id Data type ID to check.
     * @returns true if a data type with this ID exists, otherwise false.
     */
    exists(id: string): boolean {
        if (!id || !id.trim()) {
            return false;
        }

        return !!this.doc.querySelector(`${DATA_TYPE_TEMPLATES_TAG} > [id="${id}"]`);
    }

    /**
     * Gets all data types that can be assigned to a specific member of a data type.
     * Filters out non-root default types and adds default type version information.
     * @param id The ID of the data type to check.
     * @param focusMemberName Optional name of the member to focus on.
     * @returns An array of SimpleDataType objects that can be assigned to the specified member.
     */
    getAssignableTypes(id: string, focusMemberName?: string): SimpleDataType[] {

        const element = findDataTypeElement(this.doc, id);
        const { typeKind, instanceType } = getDataTypeBaseInfo(element);

        const nsdTypeDefinitions = this.nsdSchemaRegistry.getTypeDefinition(typeKind, instanceType);

        const requiredReferences = Object.values(nsdTypeDefinitions)
            .filter(def => !focusMemberName || def.name === focusMemberName)
            .filter(def => def.requiresReference && def.refTypeKind)
            .map(def => ({
                typeKind: def.refTypeKind,
                instanceType: def.objectType
            }));

        if (requiredReferences.length === 0) return [];

        const allTypes = listDataTypeElements(this.doc)
            .map(el => elementToSimpleDataType(el))
            .filter(dt => dt.id && dt.typeKind);

        const assignableTypes: SimpleDataType[] = [];
        for (const dt of allTypes) {
            if (!requiredReferences.some(ref => isTypeAssignable(ref.typeKind, ref.instanceType, dt))) {
                continue;
            }

            if (this.enrichTypeWithDefaultInfo(dt)) {
                assignableTypes.push(dt);
            }
        }
        return assignableTypes;
    }

    /**
     * Enriches a SimpleDataType with default type information.
     * If the type is a default type root ID, adds isDefaultType and defaultTypeVersion.
     * Filters out non-root default type IDs.
     * @param dt The SimpleDataType to enrich
     * @returns true if the type should be included, false if it should be filtered out (non-root default)
     */
    private enrichTypeWithDefaultInfo(dt: SimpleDataType): boolean {
        const defaultInfo = this.defaultTypeManagerService.getDefaultInfoByTypeId(dt.id);
        if (defaultInfo) {
            if (dt.id !== defaultInfo.rootId) {
                return false;
            }
            dt.isDefaultType = true;
            dt.defaultTypeVersion = defaultInfo.version;
            dt.defaultTypeRootId = defaultInfo.rootId;
            dt.defaultTypeInstance = defaultInfo.instance;
        }
        return true;
    }

    /**
     * Enriches a SimpleDataType with default type information without filtering.
     * Adds metadata for both root and non-root default type IDs.
     * @param dt The SimpleDataType to enrich
     */
    private enrichTypeWithDefaultInfoNoFilter(dt: SimpleDataType): void {
        const defaultInfo = this.defaultTypeManagerService.getDefaultInfoByTypeId(dt.id);
        if (defaultInfo) {
            dt.isDefaultType = true;
            dt.defaultTypeVersion = defaultInfo.version;
            dt.defaultTypeRootId = defaultInfo.rootId;
            dt.defaultTypeInstance = defaultInfo.instance;
        }
    }

    /**
     * Gets all data types that are referenced by a specific member of a data type.
     * @param id The ID of the data type to check.
     * @param focusMemberName Optional name of the member to focus on.
     * @returns An array of SimpleDataType objects that are referenced by the specified member.
     */
    getReferencedTypes(id: string, focusMemberName?: string): SimpleDataType[] {
        const visited = new Set<string>();
        const result: SimpleDataType[] = [];
        const startElement = findDataTypeElement(this.doc, id);

        function traverse(element: Element, isRoot = false) {
            const { id: elId } = getDataTypeBaseInfo(element);
            if (!elId || visited.has(elId)) return;
            // Only exclude the root element from result, not from traversal
            if (!isRoot) {
                visited.add(elId);
            }
            const shouldIncludeChild = (child: Element) => {
                if (child.tagName === 'Private') {
                    return false;
                }
                if (!isRoot || !focusMemberName) {
                    return true;
                }
                return child.getAttribute('name') === focusMemberName;
            };
            // Traverse children (excluding Private)
            Array.from(element.children)
                .filter(shouldIncludeChild)
                .forEach(child => {
                    const refId = child.getAttribute('type');
                    if (refId && refId !== id && !visited.has(refId)) {
                        try {
                            const refElement = findDataTypeElement(element.ownerDocument as XMLDocument, refId);
                            const simple = elementToSimpleDataType(refElement);
                            result.push(simple);
                            traverse(refElement);
                        } catch (e) {
                            // skip invalid references
                        }
                    }
                });
        }

        traverse(startElement, true);

        // Remove duplicates by id and enrich with default info
        const unique = new Map<string, SimpleDataType>();
        for (const dt of result) {
            if (!unique.has(dt.id)) {
                // Enrich with default type info but don't filter
                this.enrichTypeWithDefaultInfoNoFilter(dt);
                unique.set(dt.id, dt);
            }
        }
        return Array.from(unique.values());
    }

    /**
     * Deletes a data type and updates all references to it.
     * If the type is a root of a local default group, also deletes the metadata
     * and all tracked sub-types.
     * @param id The ID of the data type to delete.
     */
    delete(id: string): void {
        const element = this.doc.querySelector(`DataTypeTemplates > [id="${id}"]`);
        if (!element) {
            throw new Error(`DataType with id ${id} not found`);
        }

        const editEvents: EditV2[] = []
        
        // Get delete plan to check for cascading deletions
        const plan = this.getDeletePlan(id);
        
        // If this is a root of a default group, also add edits to delete sub-types and metadata
        if (plan.hasDefaultMetadata) {
            // Delete all tracked sub-types and their references
            for (const subTypeId of plan.trackedSubTypeIds) {
                const subTypeElement = this.doc.querySelector(`DataTypeTemplates > [id="${subTypeId}"]`);
                if (subTypeElement) {
                    // Clear references to sub-type
                    const subTypeRefEls = this.doc.querySelectorAll(`[type="${subTypeId}"]`);
                    subTypeRefEls.forEach(refEl => {
                        editEvents.push({
                            element: refEl,
                            attributes: { type: '' },
                            attributesNS: {},
                        } as SetAttributesV2);
                    });
                    // Remove sub-type element
                    editEvents.push({ node: subTypeElement } as RemoveV2);
                }
            }

            // Delete metadata for the default group
            const metadataEdits = this.defaultTypeManagerService.buildDeleteLocalDefaultEditsByTypeId(id);
            editEvents.push(...metadataEdits);
        }
        
        // Clear references to the root type
        const refEls = this.doc.querySelectorAll(`[type="${id}"]`);
        refEls.forEach(refEl => {
            const edit: SetAttributesV2 = {
                element: refEl,
                attributes: { type: '' },
                attributesNS: {},
            };
            editEvents.push(edit);
        });

        // Remove the root type element itself
        const removeEvent: RemoveV2 = { node: element };
        editEvents.push(removeEvent);

        createAndDispatchEditEvent(this.hostElement, editEvents, {
            title: `Delete DataType ${id}`,
            createHistoryEntry: true
        });
    }

    /**
     * Renames a data type and updates all references to it.
     * @param id The ID of the data type to rename.
     * @param newId The new ID for the data type.
     * @returns void
     */
    rename(id: string, newId: string): void {
        if (id === newId) {
            return;
        }

        if (this.isIdTaken(newId)) {
            throw new Error(`DataType with id ${newId} already exists`);
        }

        const element = findDataTypeElement(this.doc, id);
        const editEvents: EditV2[] = [];

        const typeElementRenameEvent: SetAttributesV2 = {
            element,
            attributes: { id: newId },
            attributesNS: {},
        };
        editEvents.push(typeElementRenameEvent);

        const refEls = this.doc.querySelectorAll(`[type="${id}"]`);
        refEls.forEach(refEl => {
            const edit: SetAttributesV2 = {
                element: refEl,
                attributes: { type: newId },
                attributesNS: {},
            };
            editEvents.push(edit);
        });

        editEvents.push(...this.defaultTypeManagerService.buildRenameTypeIdEdits(id, newId));

        createAndDispatchEditEvent(this.hostElement, editEvents, {
            title: `Rename DataType ${id} to ${newId}`,
            createHistoryEntry: true,
        });
    }

    /**
     * Duplicates a data type with a new ID.
     * The new ID can be provided or auto-generated by appending "_copy" and a counter to the original ID.
     * @param id The ID of the data type to duplicate.
     * @param newId Optional new ID for the duplicated data type. If not provided, a new ID is generated.
     */
    duplicate(id: string, newId?: string): void {
        const element = findDataTypeElement(this.doc, id);
        const duplicateId = newId ?? this.generateDuplicateId(id);

        const parent = element.parentNode;
        if (!parent) {
            throw new Error(`Unable to duplicate DataType ${id}: parent node not found`);
        }

        const duplicateElement = element.cloneNode(true) as Element;
        duplicateElement.setAttribute('id', duplicateId);

        const edit: EditV2 = {
            parent,
            node: duplicateElement,
            reference: element.nextSibling,
        };

        createAndDispatchEditEvent(this.hostElement, [edit], {
            title: `Duplicate DataType ${id}`,
            createHistoryEntry: true
        });
    }

    /**
     * Creates a new data type with the given kind, instance type and id.
     *
     * If `DataTypeTemplates` does not exist, it is created first and inserted into
     * the SCL root element with the new type as its first child.
     *
     * If `DataTypeTemplates` already exists, the new type is inserted in kind order:
     * `LNodeType -> DOType -> DAType -> EnumType`.
     *
     * @param typeKind Data type kind to create.
     * @param instanceType Instance type value (`lnClass`, `cdc`, or `Private[type="oscd:instance-type"]`).
     * @param id Unique data type id.
     * @throws Error when `id` is already taken or the XML document has no root element.
     */
    create(typeKind: TypeKind, instanceType: string, id: string): void {
        this.validateInstanceTypeForKind(typeKind, instanceType);

        if (this.isIdTaken(id)) {
            throw new Error(`DataType with id ${id} already exists`);
        }

        const newTypeElement = this.createDataTypeElement(typeKind, instanceType, id);
        const title = `Create DataType ${id}`;

        const dataTypeTemplates = findDataTypeTemplatesElement(this.doc);
        if (!dataTypeTemplates) {
            this.createDataTypeTemplatesWithFirstType(newTypeElement, title);
            return;
        }

        const insertTypeEdit: EditV2 = {
            parent: dataTypeTemplates,
            node: newTypeElement,
            reference: findDataTypeInsertReferenceElement(this.doc, typeKind),
        };

        createAndDispatchEditEvent(this.hostElement, [insertTypeEdit], {
            title,
            createHistoryEntry: true,
        });
    }

    /**
     * Updates the instance type of an existing data type by replacing the type element in place.
     *
     * The replacement keeps the same `id`, preserves non-instance `Private` child elements,
     * and resets configured members according to the new instance type.
     */
    updateInstanceType(id: string, newInstanceType: string): void {
        const element = findDataTypeElement(this.doc, id);
        const { typeKind, instanceType } = getDataTypeBaseInfo(element);

        if (instanceType === newInstanceType) {
            return;
        }

        this.validateInstanceTypeForKind(typeKind, newInstanceType);

        const replacementElement = this.createDataTypeElement(typeKind, newInstanceType, id);
        this.copyPrivateChildrenExcludingInstanceType(element, replacementElement);

        const parent = element.parentNode;
        if (!parent) {
            throw new Error(`Unable to update instance type for DataType ${id}: parent node not found`);
        }

        const edits: EditV2[] = [
            { node: element } as RemoveV2,
            {
                parent,
                node: replacementElement,
                reference: element.nextSibling,
            },
        ];

        createAndDispatchEditEvent(this.hostElement, edits, {
            title: `Update instance type of DataType ${id} to ${newInstanceType}`,
            createHistoryEntry: true,
        });
    }

    setReference(id: string, memberName: string, referenceId: string): void {
        const { element, memberDefinition } = this.getMemberContext(id, memberName);

        this.assertReferenceAssignable(
            referenceId,
            memberDefinition.refTypeKind,
            memberDefinition.objectType,
            memberName,
            id,
        );

        const edits = this.buildSetMemberTypeEdits(element, memberName, memberDefinition, referenceId);
        createAndDispatchEditEvent(this.hostElement, edits, {
            title: `Set reference of member ${memberName} in DataType ${id} to ${referenceId}`,
            createHistoryEntry: true,
        });
    }

    /**
     * Clears the reference of a member by setting its 'type' attribute to an empty string.
     * @param id The ID of the DataType containing the member.
     * @param memberName The name of the member whose reference should be cleared.
     */
    clearReference(id: string, memberName: string): void {
        const element = findDataTypeElement(this.doc, id);
        if (!element) {
            throw new Error(`DataType with id ${id} not found`);
        }
        const memberEl = element.querySelector(`[name="${memberName}"]`);
        if (!memberEl) {
            throw new Error(`Member with name ${memberName} not found in DataType ${id}`);
        }

        const edit: SetAttributesV2 = {
            element: memberEl,
            attributes: { type: '' },
            attributesNS: {},
        };
        createAndDispatchEditEvent(this.hostElement, [edit], {
            title: `Clear reference of member ${memberName} in DataType ${id}`,
            createHistoryEntry: true,
        });
    }

    /**
     * Replaces the configured members of a data type in a single edit event.
     *
     * The provided member names become the complete configured set.
     * Existing configured members not in the list are removed, and missing
     * members in the list are created. Existing configured members that remain
     * selected are kept unchanged (including their references/attributes).
     *
     * Private fields and unrelated children are preserved.
     *
     * @param id The ID of the DataType containing the members.
     * @param configuredMemberNames The full target list of configured member names.
     * @returns Number of applied edits.
     */
    setConfiguredMembers(id: string, configuredMemberNames: string[]): number {
        const element = findDataTypeElement(this.doc, id);
        const { typeKind, instanceType } = getDataTypeBaseInfo(element);

        if (!instanceType) {
            throw new Error(`DataType ${id} has no instance type`);
        }

        const nsdDefinitions = this.nsdSchemaRegistry.getTypeDefinition(typeKind, instanceType);
        const requestedNames = this.normalizeMemberNames(configuredMemberNames);
        this.assertKnownMemberNames(id, requestedNames, nsdDefinitions);

        const existingManagedNames = this.collectManagedMemberNames(element, nsdDefinitions);

        const requestedSet = new Set(requestedNames);
        const existingSet = new Set(existingManagedNames);
        const isUnchanged = this.haveSameMemberSet(requestedNames, existingSet);

        const removedCount = existingManagedNames.filter(name => !requestedSet.has(name)).length;
        const addedCount = requestedNames.filter(name => !existingSet.has(name)).length;
        const changedMemberCount = removedCount + addedCount;

        if (isUnchanged) {
            return 0;
        }

        const updatedElement = this.buildUpdatedElementWithConfiguredMembers(
            element,
            requestedNames,
            requestedSet,
            nsdDefinitions,
        );
        const edits = this.buildReplaceElementEdits(id, element, updatedElement);

        createAndDispatchEditEvent(this.hostElement, edits, {
            title: `Set configured members in DataType ${id}`,
            createHistoryEntry: true,
        });

        return changedMemberCount;
    }

    /**
     * Lists all instance types for a given type kind.
     * @param typeKind type kind to list instance types for, if empty, lists all instance types for all type kinds
     * @returns An array of instance type strings for the given type kind.
     */
    listInstanceTypes(typeKind?: TypeKind): string[] {
        if (typeKind) {
            return this.nsdSchemaRegistry.listInstanceTypes(typeKind);
        }

        const uniqueInstanceTypes = new Set<string>();
        DATA_TYPE_KIND_ORDER.forEach(kind => {
            this.nsdSchemaRegistry.listInstanceTypes(kind).forEach(instanceType => {
                uniqueInstanceTypes.add(instanceType);
            });
        });

        return Array.from(uniqueInstanceTypes);
    }

    /**
     * Lists all instance types for a given type kind.
     * @param typeKind type kind to list instance types for
     * @returns An array of InstanceDetails objects containing instance type and description for the given type kind.
     */
    listInstanceTypeDetails(typeKind: TypeKind): InstanceDetails[] {
        const availableInstanceTpes = this.nsdSchemaRegistry.listInstanceTypes(typeKind);
        return availableInstanceTpes.map(instanceType => INSTANCE_DESCRIPTIONS[typeKind][instanceType] ?? { instance: instanceType });
    }

    /**
     * This applies the default types to the given member names of the given data type.
     * Collect members with the same (typeKind, instanceType) and applies the default type for this combination.
     * Look up if an existing default type exists in the document (specified in private field)
     * fetch the current default type from the service
     * validate if the local default type version is valid
     * if latest use existing, if not use the new one
     * set reference of the member to the default type
     * @param id The ID of the DataType to apply default types to.
     * @param memberNames The names of the members to apply default types to.
     */
    async applyDefaultTypes(id: string, memberNames: string[]): Promise<void> {
        const preview = await this.getApplyDefaultTypesPreview(id, memberNames);
        this.applyDefaultTypesFromPreview(preview);
    }

    /**
     * Builds a default apply preview for a single target type (kind + instance)
     * without binding it to member names.
     */
    async getApplySingleDefaultTypePreview(refTypeKind: TypeKind, objectType: string): Promise<ApplySingleDefaultTypePreview> {
        const refTypeKey = `${refTypeKind}:${objectType}`;
        const plan = await this.defaultTypeManagerService.resolve({ kind: refTypeKind, instance: objectType });

        return {
            refTypeKey,
            refTypeKind,
            objectType,
            plan,
        };
    }

    /**
     * Applies a single-target default preview and returns the effective root ID.
     */
    applySingleDefaultTypeFromPreview(preview: ApplySingleDefaultTypePreview): string | null {
        const { edits, effectiveRootIds } = this.defaultTypeManagerService.applyPlans([preview.plan]);
        const effectiveRootId = effectiveRootIds.get(preview.refTypeKey) ?? null;

        if (edits.length > 0) {
            createAndDispatchEditEvent(this.hostElement, edits, {
                title: `Apply default type for ${preview.refTypeKind}/${preview.objectType}`,
                createHistoryEntry: true,
            });
        }

        return effectiveRootId;
    }

    /**
     * Resolves and applies a default for a single target type (kind + instance).
     */
    async applySingleDefaultType(refTypeKind: TypeKind, objectType: string): Promise<string | null> {
        const preview = await this.getApplySingleDefaultTypePreview(refTypeKind, objectType);
        return this.applySingleDefaultTypeFromPreview(preview);
    }

    /**
     * Step 1 of default application workflow.
     * Builds preview entries that can be shown to the user for confirmation.
     */
    async getApplyDefaultTypesPreview(id: string, memberNames: string[]): Promise<ApplyDefaultTypesPreview> {
        const memberByRefType = this.getMembersByRefType(id, memberNames);
        if (memberByRefType.size === 0) {
            return { dataTypeId: id, entries: [] };
        }

        const plansByRefType = await this.resolveDefaultTypePlans(memberByRefType);
        const entries: ApplyDefaultTypesPreviewEntry[] = Array.from(memberByRefType.entries())
            .map(([refTypeKey, memberInfo]) => {
                const plan = plansByRefType.get(refTypeKey);
                if (!plan) {
                    return null;
                }

                return {
                    refTypeKey,
                    refTypeKind: memberInfo.refTypeKind,
                    objectType: memberInfo.objectType,
                    memberNames: [...memberInfo.memberNames],
                    plan,
                };
            })
            .filter((entry): entry is ApplyDefaultTypesPreviewEntry => !!entry);

        return { dataTypeId: id, entries };
    }

    /**
     * Step 2 of default application workflow.
     * Applies a previously built preview.
     */
    applyDefaultTypesFromPreview(preview: ApplyDefaultTypesPreview): void {
        if (preview.entries.length === 0) {
            console.warn(`No members with reference types found for DataType ${preview.dataTypeId}`);
            return;
        }

        const members = new Map<string, { refTypeKind: TypeKind; objectType: string; memberNames: string[] }>();
        const plans = new Map<string, ResolveDefaultPlan>();

        preview.entries.forEach(entry => {
            members.set(entry.refTypeKey, {
                refTypeKind: entry.refTypeKind,
                objectType: entry.objectType,
                memberNames: [...entry.memberNames],
            });
            plans.set(entry.refTypeKey, entry.plan);
        });

        const edits = this.buildApplyDefaultEditsFromPlans(preview.dataTypeId, members, plans);
        if (edits.length === 0) {
            console.warn(`No edits to apply default types for DataType ${preview.dataTypeId}`);
            return;
        }

        createAndDispatchEditEvent(this.hostElement, edits, {
            title: `Apply default types to members of DataType ${preview.dataTypeId}`,
            createHistoryEntry: true,
        });
    }

    /**
     * Resolves default type plans for each reference type key.
     * Returns a map keyed by reference type key (e.g., "DOType:Measurement").
     */
    private async resolveDefaultTypePlans(
        memberByRefType: Map<string, { refTypeKind: TypeKind; objectType: string; memberNames: string[] }>,
    ): Promise<Map<string, ResolveDefaultPlan>> {
        const plans = new Map<string, ResolveDefaultPlan>();

        await Promise.all(
            Array.from(memberByRefType.entries()).map(async ([refTypeKey, { refTypeKind, objectType }]) => {
                const plan = await this.defaultTypeManagerService.resolve({ kind: refTypeKind, instance: objectType });
                plans.set(refTypeKey, plan);
            })
        );

        return plans;
    }

    private buildApplyDefaultEditsFromPlans(
        id: string,
        members: Map<string, { refTypeKind: TypeKind; objectType: string; memberNames: string[] }>,
        plans: Map<string, ResolveDefaultPlan>,
    ): EditV2[] {
        const allEdits: EditV2[] = [];

        // 1: Apply all plans in batch (type elements inserted once, respecting order)
        const plansArray = Array.from(plans.values());
        const { edits: planEdits, effectiveRootIds } = this.defaultTypeManagerService.applyPlans(plansArray);
        allEdits.push(...planEdits);

        // 2: Build and add member reference edits
        const parentElement = findDataTypeElement(this.doc, id);
        const { typeKind, instanceType } = getDataTypeBaseInfo(parentElement);
        const nsdDefinitions = instanceType ? this.nsdSchemaRegistry.getTypeDefinition(typeKind, instanceType) : null;

        for (const [refTypeKey, { memberNames }] of members) {
            const effectiveRootId = effectiveRootIds.get(refTypeKey);
            if (!effectiveRootId) {
                console.warn(`No effective root ID for ${refTypeKey}, skipping members: ${memberNames.join(', ')}`);
                continue;
            }

            for (const memberName of memberNames) {
                const memberDefinition = nsdDefinitions?.[memberName];
                if (!memberDefinition) {
                    console.warn(`No NSD definition found for member ${memberName} in DataType ${id}, skipping`);
                    continue;
                }
                allEdits.push(...this.buildSetMemberTypeEdits(parentElement, memberName, memberDefinition, effectiveRootId));
            }
        }

        return allEdits;
    }

    private buildSetMemberTypeEdits(
        parentElement: Element,
        memberName: string,
        memberDefinition: NsdTypeDefinition,
        referenceId: string,
    ): EditV2[] {
        const existingMemberElement = parentElement.querySelector(`[name="${memberName}"]`);
        if (existingMemberElement) {
            return [{
                element: existingMemberElement,
                attributes: { type: referenceId },
                attributesNS: {},
            } as SetAttributesV2];
        }
        const newMemberElement = this.createMemberElement(memberName, memberDefinition, referenceId);
        return [{
            parent: parentElement,
            node: newMemberElement,
            reference: null,
        }];
    }

    /**
     * For the given member names, groups them by their required reference type key (refTypeKind, objectType).
     * Members that don't require a reference or are missing type info are skipped.
     * The map key is "${refTypeKind}:${objectType}" for reliable equality lookups.
     */
    private getMembersByRefType(
        id: string,
        memberNames: string[],
    ): Map<string, { refTypeKind: TypeKind; objectType: string; memberNames: string[] }> {
        const map = new Map<string, { refTypeKind: TypeKind; objectType: string; memberNames: string[] }>();

        const element = findDataTypeElement(this.doc, id);
        const { typeKind, instanceType } = getDataTypeBaseInfo(element);
        if (!instanceType) {
            return map;
        }

        const nsdDefinitions = this.nsdSchemaRegistry.getTypeDefinition(typeKind, instanceType);
        if (!nsdDefinitions) {
            console.warn(`No NSD definitions found for type kind ${typeKind} and instance type ${instanceType}`);
            return map;
        }

        for (const memberName of memberNames) {
            const memberDefinition: NsdTypeDefinition = nsdDefinitions[memberName];
            if (!memberDefinition?.requiresReference) {
                continue;
            }

            if (!memberDefinition.refTypeKind || !memberDefinition.objectType) {
                console.warn(`Member definition for ${memberName} of DataType ${id} is missing required reference type information`);
                continue;
            }

            const key = `${memberDefinition.refTypeKind}:${memberDefinition.objectType}`;
            const existing = map.get(key);
            if (existing) {
                existing.memberNames.push(memberName);
            } else {
                map.set(key, {
                    refTypeKind: memberDefinition.refTypeKind,
                    objectType: memberDefinition.objectType,
                    memberNames: [memberName],
                });
            }
        }

        return map;
    }


    private validateInstanceTypeForKind(typeKind: TypeKind, instanceType: string): void {
        const instanceTypeDefinition = this.nsdSchemaRegistry.getTypeDefinition(typeKind, instanceType);
        if (instanceTypeDefinition) {
            return;
        }

        throw new Error(`Invalid instance type \"${instanceType}\" for ${typeKind}. No matching definition found in NSD schema registry.`);
    }

    private assertReferenceAssignable(
        referenceId: string,
        expectedTypeKind: TypeKind,
        expectedInstanceType: string,
        memberName: string,
        dataTypeId: string,
    ): void {
        const referencedType = findDataTypeElement(this.doc, referenceId);
        const referencedTypeInfo = getDataTypeBaseInfo(referencedType);

        const isAssignable = isTypeAssignable(expectedTypeKind, expectedInstanceType, {
            id: referencedTypeInfo.id,
            typeKind: referencedTypeInfo.typeKind,
            instanceType: referencedTypeInfo.instanceType,
            references: 0,
        });

        if (!isAssignable) {
            throw new Error(
                `Invalid reference ${referenceId} for member ${memberName} of DataType ${dataTypeId}. ` +
                `Expected ${expectedTypeKind} with instance type ${expectedInstanceType}`
            );
        }
    }

    private getMemberContext(id: string, memberName: string): { element: Element, memberDefinition: NsdTypeDefinition } {
        const element = findDataTypeElement(this.doc, id);
        const { typeKind, instanceType } = getDataTypeBaseInfo(element);

        if (!instanceType) {
            throw new Error(`DataType ${id} has no instance type`);
        }

        const nsdDefinitions = this.nsdSchemaRegistry.getTypeDefinition(typeKind, instanceType);
        if (!nsdDefinitions) {
            throw new Error(`No NSD definition found for ${typeKind} ${instanceType}`);
        }

        const memberDefinition = nsdDefinitions[memberName];
        if (!memberDefinition) {
            throw new Error(`Member with name ${memberName} not found in NSD definition of DataType ${id}`);
        }

        return { element, memberDefinition };
    }

    private createMemberElement(memberName: string, memberDefinition: NsdTypeDefinition, referenceId?: string): Element {
        const memberElement = createElementInDefaultNS(this.doc, memberDefinition.tagName);
        const isEnumVal = memberDefinition.tagName === 'EnumVal';

        if (isEnumVal) {
            memberElement.textContent = memberName;

            const literalValue = memberDefinition.attributes?.literalValue ?? memberDefinition.attributes?.ord;
            if (literalValue !== undefined && literalValue !== null) {
                memberElement.setAttribute('ord', String(literalValue));
            }
        } else {
            memberElement.setAttribute('name', memberName);
        }

        if (referenceId) {
            memberElement.setAttribute('type', referenceId);
        }

        Object.entries(memberDefinition.attributes ?? {}).forEach(([attributeName, attributeValue]) => {
            if (isEnumVal && (attributeName === 'literalValue' || attributeName === 'ord')) {
                return;
            }

            if (attributeValue !== undefined && attributeValue !== null) {
                memberElement.setAttribute(attributeName, String(attributeValue));
            }
        });

        return memberElement;
    }

    private findConfiguredMemberElement(parent: Element, memberDefinition: NsdTypeDefinition): Element | null {
        if (memberDefinition.tagName === 'EnumVal') {
            return Array.from(parent.children).find(child => {
                if (child.tagName !== 'EnumVal') {
                    return false;
                }

                return (child.textContent ?? '').trim() === memberDefinition.name;
            }) ?? null;
        }

        return parent.querySelector(`[name="${memberDefinition.name}"]`);
    }

    private copyPrivateChildrenExcludingInstanceType(source: Element, target: Element): void {
        Array.from(source.children)
            .filter(child => child.tagName === 'Private')
            .filter(child => child.getAttribute('type') !== SCL_PRIVATE_TYPE_INSTANCE_TYPE)
            .forEach(child => target.appendChild(child.cloneNode(true)));
    }

    private normalizeMemberNames(memberNames: string[]): string[] {
        return Array.from(new Set(memberNames.map(name => name?.trim()).filter(Boolean) as string[]));
    }

    private assertKnownMemberNames(
        dataTypeId: string,
        memberNames: string[],
        nsdDefinitions: Record<string, NsdTypeDefinition>,
    ): void {
        memberNames.forEach(memberName => {
            if (!nsdDefinitions[memberName]) {
                throw new Error(`Member with name ${memberName} not found in NSD definition of DataType ${dataTypeId}`);
            }
        });
    }

    private collectManagedMemberNames(
        element: Element,
        nsdDefinitions: Record<string, NsdTypeDefinition>,
    ): string[] {
        return Array.from(element.children)
            .map(child => this.getManagedMemberName(child, nsdDefinitions))
            .filter((name): name is string => !!name);
    }

    private haveSameMemberSet(requestedNames: string[], existingSet: Set<string>): boolean {
        return existingSet.size === requestedNames.length &&
            requestedNames.every(name => existingSet.has(name));
    }

    private buildUpdatedElementWithConfiguredMembers(
        element: Element,
        requestedNames: string[],
        requestedSet: Set<string>,
        nsdDefinitions: Record<string, NsdTypeDefinition>,
    ): Element {
        const updatedElement = element.cloneNode(true) as Element;

        Array.from(updatedElement.children)
            .filter(child => !!this.getManagedMemberName(child, nsdDefinitions))
            .forEach(child => {
                const memberName = this.getManagedMemberName(child, nsdDefinitions);
                if (!memberName || !requestedSet.has(memberName)) {
                    child.remove();
                }
            });

        const namesStillPresent = new Set(this.collectManagedMemberNames(updatedElement, nsdDefinitions));
        requestedNames.forEach(memberName => {
            if (namesStillPresent.has(memberName)) {
                return;
            }

            const memberDefinition = nsdDefinitions[memberName];
            updatedElement.appendChild(this.createMemberElement(memberName, memberDefinition));
        });

        return updatedElement;
    }

    private buildReplaceElementEdits(id: string, element: Element, updatedElement: Element): EditV2[] {
        const parent = element.parentNode;
        if (!parent) {
            throw new Error(`Unable to set configured members for DataType ${id}: parent node not found`);
        }

        return [
            { node: element } as RemoveV2,
            {
                parent,
                node: updatedElement,
                reference: element.nextSibling,
            },
        ];
    }

    private getManagedMemberName(child: Element, nsdDefinitions: Record<string, NsdTypeDefinition>): string | null {
        if (child.tagName === 'Private') {
            return null;
        }

        const nameAttribute = child.getAttribute('name');
        if (nameAttribute && nsdDefinitions[nameAttribute]) {
            return nameAttribute;
        }

        if (child.tagName === 'EnumVal') {
            const enumName = (child.textContent ?? '').trim();
            if (enumName && nsdDefinitions[enumName]) {
                return enumName;
            }
        }

        return null;
    }

    private mapMembersFromElementWithoutNsd(element: Element): DataTypeMember[] {
        return Array.from(element.children)
            .filter(child => child.tagName !== 'Private')
            .map(child => {
                const isEnumVal = child.tagName === 'EnumVal';
                const memberName = isEnumVal
                    ? (child.textContent ?? '').trim()
                    : (child.getAttribute('name') ?? '');

                const attributes: Record<string, string> = {};
                Array.from(child.attributes).forEach(attribute => {
                    if (attribute.name === 'name' || attribute.name === 'type') {
                        return;
                    }
                    attributes[attribute.name] = attribute.value;
                });

                if (isEnumVal) {
                    const ord = child.getAttribute('ord');
                    if (ord !== null) {
                        attributes.literalValue = ord;
                    }
                }

                const reference = child.getAttribute('type') ?? undefined;

                return {
                    tagName: child.tagName,
                    name: memberName,
                    isMandatory: false,
                    isConfigured: true,
                    requiresReference: !!reference,
                    reference,
                    refKind: this.inferRefKindFromTagName(child.tagName),
                    refInstance: undefined,
                    refUnderlyingType: undefined,
                    attributes,
                };
            })
            .filter(member => !!member.name);
    }

    private inferRefKindFromTagName(tagName: string): TypeKind {
        if (tagName === 'DO' || tagName === 'SDO') {
            return TypeKind.DOType;
        }
        if (tagName === 'EnumVal') {
            return TypeKind.EnumType;
        }
        return TypeKind.DAType;
    }

    private createDataTypeTemplatesWithFirstType(firstType: Element, title: string): void {
        const sclRoot = this.doc.documentElement;
        if (!sclRoot) {
            throw new Error('SCL root element not found in document');
        }

        const dataTypeTemplates = createElementInDefaultNS(this.doc, DATA_TYPE_TEMPLATES_TAG);
        dataTypeTemplates.appendChild(firstType);

        const insertTemplatesEdit: EditV2 = {
            parent: sclRoot,
            node: dataTypeTemplates,
            reference: null,
        };

        createAndDispatchEditEvent(this.hostElement, [insertTemplatesEdit], {
            title,
            createHistoryEntry: true,
        });
    }


    private isIdTaken(id: string): boolean {
        return !!this.doc.querySelector(`${DATA_TYPE_TEMPLATES_TAG} > [id="${id}"]`);
    }

    private generateDuplicateId(baseId: string): string {
        const copySuffixPattern = /^(.*)_copy_(\d+)$/;
        const match = baseId.match(copySuffixPattern);

        const rootId = match ? match[1] : baseId;
        let counter = match ? Number(match[2]) + 1 : 1;
        let candidate = `${rootId}_copy_${counter}`;

        while (this.isIdTaken(candidate)) {
            counter++;
            candidate = `${rootId}_copy_${counter}`;
        }

        return candidate;
    }


    /**
     * Creates a new data type element.
     * Adds instnace type information according to the data type kind:
     * - LNodeType: `lnClass` attribute
     * - DOType: `cdc` attribute
     * - DAType and EnumType: `Private` child element with `type="oscd:instance-type"`
     *
     * @param typeKind The kind of data type to create.
     * @param instanceType The instance type of the data type.
     * @param id The ID of the data type.
     * @returns The created data type element.
     */
    private createDataTypeElement(typeKind: TypeKind, instanceType: string, id: string): Element {
        const typeElement = createElementInDefaultNS(this.doc, typeKind);
        typeElement.setAttribute('id', id);

        if (typeKind === TypeKind.LNodeType) {
            typeElement.setAttribute('lnClass', instanceType);
        } else if (typeKind === TypeKind.DOType) {
            typeElement.setAttribute('cdc', instanceType);
        } else {
            const privateElement = createElementInDefaultNS(this.doc, 'Private');
            privateElement.setAttribute('type', SCL_PRIVATE_TYPE_INSTANCE_TYPE);
            privateElement.textContent = instanceType;
            typeElement.appendChild(privateElement);
        }

        return typeElement;
    }
}

let dataTypeService: DataTypeService | null = null;

export function initializeDataTypeService(doc: XMLDocument, hostElement: HTMLElement) {
    dataTypeService = new DataTypeService(doc, hostElement);
    return dataTypeService;
}

export function getDataTypeService(): DataTypeService {
    if (!dataTypeService) {
        throw new Error('DataTypeService is not initialized. Call initializeDataTypeService(doc, hostElement) first.');
    }
    return dataTypeService;
}
