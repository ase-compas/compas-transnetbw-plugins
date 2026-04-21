import { TypeKind, type DataTypeDetails, type DataTypeMember, type SimpleDataType, type ViewMode } from "../../../shared/model";
import { type ApplyDefaultTypesPreview, type DataTypeService } from "../services/type.service";
import { buildColumns } from "../type.columns";
import { isTypeAssignable } from "../../../shared/utils/data-type.utils";
import type {
  TBoardItemContext,
  TData,
  TItem,
} from '../components/tboard/types';
import type { DetailsConfig } from "../types";

/**
 * State management for DataType details view.
 * Handles loading of type details, managing view/edit mode, and preparing data for display.
 */
export class DataTypeDetailsState {

    private readonly dataTypeService: DataTypeService;

    constructor(dataTypeService: DataTypeService) {
        this.dataTypeService = dataTypeService;
    }

    // ==================
    // state
    // ==================

    // State to track the currently marked member.
    // Dependent on which assignable/referenced types we want to show.
    private markedMemberId: string | null = null;
    private simpleTypesMap: Map<string, SimpleDataType> = new Map();

    loadedType = $state<DataTypeDetails | null>(null);

    viewMode = $state<ViewMode>('view');

    data = $state<TData>({ refs: [], DOType: [], DAType: [], EnumType: [] });
    config: DetailsConfig = $state({});

    error = $state<string | null>(null);
    loading = $state<boolean>(true);


    // ==================
    // derived state
    // ==================

    // Columns depend on the loaded type's kind and the current view mode (edit/view)
    columns = $derived.by(() => buildColumns(this.loadedType?.typeKind ?? TypeKind.LNodeType, this.isEditMode, this.config));

    isEditMode = $derived<boolean>(this.viewMode === 'edit');

    // ==================
    // actions
    // ==================

    /**
     * Load type details by ID. Prepares data for display in TBoard and handles errors.
     * @param id The ID of the type to load.
     */
    public loadById(id: string) {
        this.loading = true;
        try {
            const typeDetails = this.dataTypeService.getById(id);
            this.loadedType = typeDetails;

            if (!typeDetails.instanceType && this.viewMode !== 'view') {
                this.viewMode = 'view';
            }

            if(typeDetails.defaultTypeInfo) {
                this.viewMode = 'view';
                this.config.toggleEditModeSwitchDisabled = true;
            }

            const otherTypesByKind = this.getOtherTypesByKind(id);

            // Cache all simple types for quick lookup when mapping members to TItems
            this.simpleTypesMap.clear();
            Object.values(otherTypesByKind).forEach(types => {
                types.forEach(type => this.simpleTypesMap.set(type.id, type));
            });

            // build data and map it to TTIems for UI
            this.data = {
                refs: this.getDisplayMemberItems(typeDetails.members),
                DOType: otherTypesByKind[TypeKind.DOType]
                    ? otherTypesByKind[TypeKind.DOType].map((type) => this.mapSimpleDataTypeToTItem(type))
                    : [],
                DAType: otherTypesByKind[TypeKind.DAType]
                    ? otherTypesByKind[TypeKind.DAType].map((type) => this.mapSimpleDataTypeToTItem(type))
                    : [],
                EnumType: otherTypesByKind[TypeKind.EnumType]
                    ? otherTypesByKind[TypeKind.EnumType].map((type) => this.mapSimpleDataTypeToTItem(type))
                    : [],
            };
            this.error = null;
        } catch (err) {
            this.error = err instanceof Error ? err.message : String(err);
            console.error(`Error loading type with id ${id}:`, this.error);
            this.data = this.emptyData();
        } finally {
            this.loading = false;
        }
    }

    public async applyDefaultType(memberName: string) {
        try {
            const preview = await this.getApplyDefaultTypesPreview([memberName]);
            if (!preview) return;
            this.applyDefaultTypesFromPreview(preview);
        } catch (err) {
            console.error(`Error applying default type for member ${memberName} in type ${this.loadedType?.id}:`, err instanceof Error ? err.message : String(err));
        }
    }

    public async applyAllDefaultTypes() {
        try {
            const preview = await this.getApplyDefaultTypesPreview();
            if (!preview) return;
            this.applyDefaultTypesFromPreview(preview);
        } catch (err) {
            console.error(`Error applying default types for type ${this.loadedType?.id}:`, err instanceof Error ? err.message : String(err));
        }
    }

    /**
     * Build preview for applying default types.
     * If memberNames is omitted, preview includes all members of the loaded type.
     */
    public async getApplyDefaultTypesPreview(memberNames?: string[]): Promise<ApplyDefaultTypesPreview | null> {
        if (!this.loadedType) {
            return null;
        }

        const targetMemberNames = memberNames ?? this.loadedType.members.map(member => member.name);
        return this.dataTypeService.getApplyDefaultTypesPreview(this.loadedType.id, targetMemberNames);
    }

    /**
     * Apply a previously built preview.
     */
    public applyDefaultTypesFromPreview(preview: ApplyDefaultTypesPreview): void {
        this.dataTypeService.applyDefaultTypesFromPreview(preview);
    }

    public setReferenceToMarkedMember(typeId: string) {
        if (!this.markedMemberId) {
            console.warn('No member is marked to set reference');
            return;
        }
        this.setRefernence(this.markedMemberId, typeId);
        this.markedMemberId = null;
    }

    public setRefernence(memberName: string, typeId: string) {
        if (!this.loadedType) return;
        try {
            this.dataTypeService.setReference(this.loadedType.id, memberName, typeId);
            this.markedMemberId = null;
        } catch (err) {
            console.error(`Error setting reference for member ${memberName} in type ${this.loadedType.id} to type ${typeId}:`, err instanceof Error ? err.message : String(err));
        }
    }

    public clearReference(memberName: string) {
        if (!this.loadedType) return;
        try {
            this.dataTypeService.clearReference(this.loadedType.id, memberName);
        } catch (err) {
            console.error(`Error clearing reference for member ${memberName} in type ${this.loadedType.id}:`, err instanceof Error ? err.message : String(err));
        }
    }

    public getType(typeId: string): SimpleDataType | null {
        return this.simpleTypesMap.get(typeId) ?? null;
    }

    public toggleMember(memberId: string) {
        if (!this.loadedType) return;

        const member = this.getMember(memberId);
        if (!member) return;

        const configuredMemberIds = this.loadedType.members
            .filter(loadedMember => loadedMember.isConfigured)
            .map(loadedMember => loadedMember.name);

        const nextConfiguredMemberIds = new Set(configuredMemberIds);
        if (member.isConfigured) {
            nextConfiguredMemberIds.delete(memberId);
        } else {
            nextConfiguredMemberIds.add(memberId);
        }

        this.setConfiguredMembers(Array.from(nextConfiguredMemberIds));
    }

    public setConfiguredMembers(memberIds: string[]) {
        if (!this.loadedType || !this.loadedType.instanceType) return;

        try {
            this.dataTypeService.setConfiguredMembers(this.loadedType.id, memberIds);
        } catch (err) {
            console.error(
                `Error setting configured members ${memberIds.join(', ')} in type ${this.loadedType.id}:`,
                err instanceof Error ? err.message : String(err)
            );
        }
    }

    public deleteType() {
        if (!this.loadedType) return;
        try {
            this.dataTypeService.delete(this.loadedType.id);
            this.loadedType = null;
        } catch (err) {
            console.error(`Error deleting type ${this.loadedType?.id}:`, err instanceof Error ? err.message : String(err));
        }
    }

    public renameType(newId: string) {
        if (!this.loadedType) return;
        try {
            this.dataTypeService.rename(this.loadedType.id, newId);
        } catch (err) {
            console.error(`Error renaming type ${this.loadedType.id} to ${newId}:`, err instanceof Error ? err.message : String(err));
        }
    }

    public updateInstanceType(newInstanceType: string) {
        if (!this.loadedType) return;

        try {
            this.dataTypeService.updateInstanceType(this.loadedType.id, newInstanceType);
            this.viewMode = 'edit';
        } catch (err) {
            console.error(`Error updating instance type for ${this.loadedType.id} to ${newInstanceType}:`, err instanceof Error ? err.message : String(err));
        }
    }

    public toggleViewMode() {
        if (!this.loadedType?.instanceType) {
            this.viewMode = 'view';
            return;
        }

        this.viewMode = this.isEditMode ? 'view' : 'edit';
        this.data = this.data; // trigger update
    }

    public setViewMode(mode: ViewMode) {
        this.viewMode = mode;
        this.data = this.data; // trigger update
    }

    public markMember(memberId: string) {
        console.debug(`markMember ${memberId}`);
        this.markedMemberId = this.markedMemberId === memberId ? null : memberId;
        this.refreshData()
    }

    public clearMarkedMember() {
        this.markedMemberId = null;
        this.refreshData();
    }

    public getMember(memberName: string): DataTypeMember  | null {
        if (!this.loadedType) return null;
        const member = this.loadedType.members.find(m => m.name === memberName);
        return member ?? null;
    }

    public getMemberReference(memberName: string): SimpleDataType | null {
        const member = this.getMember(memberName);
        if (!member || !member.reference) return null;
        return this.simpleTypesMap.get(member.reference) ?? null;
    }

    public setConfig(config: DetailsConfig) {
        this.config = config;
        console.log("setting config from set", config);
    }

    // ==================
    // helper functions
    // ==================

    private refreshData() {
        if (!this.loadedType) return;
        this.loadById(this.loadedType.id);
    }

    private getOtherTypesByKind(id: string): Record<TypeKind, SimpleDataType[]> {
        const otherTyps = this.viewMode === 'edit'
            ? this.dataTypeService.getAssignableTypes(id, this.markedMemberId ?? undefined)
            : this.dataTypeService.getReferencedTypes(id, this.markedMemberId ?? undefined);
        return this.reduceTypesByKind(otherTyps);
    }

    private reduceTypesByKind(types: SimpleDataType[]): Record<TypeKind, SimpleDataType[]> {
        return types.reduce((acc, type) => {
            const kind = type.typeKind;
            acc[kind].push(type);
            return acc;
        }, {
            [TypeKind.LNodeType]: [],
            [TypeKind.DOType]: [],
            [TypeKind.DAType]: [],
            [TypeKind.EnumType]: [],
        } as Record<TypeKind, SimpleDataType[]>);
    }

    // ==================
    // Mapping functions
    // ==================

    private getDisplayMemberItems(members: DataTypeMember[]): TItem[] {
        return [...members]
            .filter((member) => (this.isEditMode ? true : member.isConfigured || member.isMandatory))
            .sort((a, b) => {
                if (a.isMandatory !== b.isMandatory) return a.isMandatory ? -1 : 1;
                if (a.isConfigured !== b.isConfigured) return a.isConfigured ? -1 : 1;
                return a.name.localeCompare(b.name);
            })
            .map((member) => this.mapReferenceToTItem(member));
    }

    private emptyData(): TData {
        return {
            refs: [],
            DOType: [],
            DAType: [],
            EnumType: []
        };
    }

    private mapReferenceToTItem(ref: DataTypeMember): TItem {
        return {
            id: ref.name,
            title: ref.name,
            subtitle: ref.reference,
            badgeText: [
                TypeKind.abbreviation(ref.refKind),
                ref.refInstance,
                ref.refUnderlyingType,
            ]
                .filter(Boolean)
                .join(' > '),
            isMandatory: ref.isMandatory,
            marked: ref.name === this.markedMemberId,
            selected: ref.isConfigured,
            canEdit: false,
            canMark: false,
            canClick: true,
            canSelect: this.isEditMode,
            canUnlink: this.isEditMode && ref.requiresReference && ref.isConfigured && !!ref.reference, // can only unlink if there is a reference to clear
            referencable: ref.requiresReference,
            canApplyDefaults: this.isEditMode && (this.config?.defaultTypeFeatureEnabled ?? true) && ref.requiresReference,
            acceptDrop: (target: TBoardItemContext) => {
                const targetType = this.simpleTypesMap.get(target.itemId);
                if (!targetType) return false;
                return isTypeAssignable(ref.refKind, ref.refInstance, targetType);
            }
        }
    }

    private mapSimpleDataTypeToTItem(type: SimpleDataType): TItem {
        return {
            id: type.id,
            title: type.id,
            subtitle: type.typeKind,
            badgeText: type.instanceType || 'unknown',
            canClick: this.isEditMode,
            canUnlink: false,
            canEdit: true,
            canSetDefault: this.isEditMode && (this.config?.defaultTypeFeatureEnabled ?? true),
        };
    }
}
