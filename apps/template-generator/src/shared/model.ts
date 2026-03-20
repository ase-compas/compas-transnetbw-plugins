export enum TypeKind {
    LNodeType = 'LNodeType',
    DOType = 'DOType',
    DAType = 'DAType',
    EnumType = 'EnumType'
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TypeKind {
    export function abbreviation(typeKind: TypeKind): string {
        switch (typeKind) {
            case TypeKind.LNodeType:
                return 'LN';
            case TypeKind.DOType:
                return 'DO';
            case TypeKind.DAType:
                return 'DA';
            case TypeKind.EnumType:
                return 'Enum';
            default:
                return '';
        }
    }

    export function toTypeKindLabel(typeKind: TypeKind): string {
        switch (typeKind) {
            case TypeKind.LNodeType:
                return "Logical Node Type";
            case TypeKind.DOType:
                return "Data Object Type";
            case TypeKind.DAType:
                return "Data Attribute Type";
            case TypeKind.EnumType:
                return "Enumeration Type";
            default:
                return "Data Type";
        }
    }
}

export interface SimpleDataType {
    id: string;
    typeKind: TypeKind;
    instanceType?: string;
    references: number;
}

export interface DataTypeDetails {
    id: string;
    instanceType?: string;
    typeKind: TypeKind;
    members: DataTypeMember[];
    private?: Record<string, string>;
}

export interface DataTypeMember {
    tagName: string;
    name: string;

    isMandatory: boolean;
    isConfigured: boolean;

    // attributes of the referencing object
    requiresReference: boolean;
    reference?: string;
    refKind: TypeKind;
    refInstance?: string,
    refUnderlyingType?: string;

    attributes?: Record<string, string>;
}

export interface DataTypeFilter {
    query?: string; // search query, search by name, type kind or instance typek
    typeKind?: TypeKind;
    instanceType?: string;
}

export type ViewMode = 'view' | 'edit';

// Represents the details of a type instance, used for showing details of a type in the UI.
export interface InstanceDetails {
    instance: string;
    description?: string;
}
