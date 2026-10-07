/**
 * Flat UI model representing a type that has a default applied.
 */
export interface DefaultTypeInfo {
    kind: TypeKind;
    instance: string;
    version: string;
    rootId: string;
}

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

  export function toTypeKind(value: string): TypeKind | undefined {
    return (Object.values(TypeKind) as string[]).includes(value)
      ? (value as TypeKind)
      : undefined;
  }

}

export interface SimpleDataType {
    id: string;
    typeKind: TypeKind;
    instanceType?: string;
    references: number;
    defaultTypeInfo?: DefaultTypeInfo;
}

/**
 * Represents the latest status of a default type
 */
export interface DefaultStatus {
    isLocalLatest: boolean;
    isAvailable: boolean;
    latestVersion?: string;
}

export interface DefaultTypeVersionStatus {
    isCurrent: boolean;
    latestVersion: string;
}

export interface DataTypeDetails {
    id: string;
    instanceType?: string;
    typeKind: TypeKind;
    members: DataTypeMember[];
    private?: Record<string, string>;
    defaultTypeInfo?: DefaultTypeInfo;
    defaultTypeVersionStatus?: DefaultTypeVersionStatus;
}

export interface DataTypeMember {
    tagName: string;
    name: string;

    isMandatory: boolean;
    isConfigured: boolean;

    requiresReference: boolean;
    reference?: string;
    refKind: TypeKind;
    refInstance?: string,
    refUnderlyingType?: string;

    attributes?: Record<string, string>;
}

export interface DataTypeFilter {
    query?: string;
    typeKind?: TypeKind;
    instanceType?: string;
}

export type ViewMode = 'view' | 'edit';

export interface InstanceDetails {
    instance: string;
    description?: string;
}
