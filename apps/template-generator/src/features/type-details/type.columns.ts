import { TypeKind } from "../../shared/model";
import type { TColumnConfig } from './components/tboard/types';
import type { DetailsConfig } from "./types";

type TypeColumnDefinition = {
    id: TypeKind;
    title: string;
    searchPlaceholder: string;
    draggableInEdit: boolean;
};

type ColumnLayoutDefinition = {
    refsTitle: string;
    refsSearchPlaceholder: string;
    columns: TypeColumnDefinition[];
};

const COLUMN_LAYOUT_BY_TYPE: Record<TypeKind, ColumnLayoutDefinition> = {
    [TypeKind.LNodeType]: {
        refsTitle: 'Referenced Data Types',
        refsSearchPlaceholder: 'Search Referenced Types...',
        columns: [
            {
                id: TypeKind.DOType,
                title: 'Data Object Types',
                searchPlaceholder: 'Search Object Types...',
                draggableInEdit: true,
            },
            {
                id: TypeKind.DAType,
                title: 'Data Attribute Types',
                searchPlaceholder: 'Search Attribute Types...',
                draggableInEdit: false,
            },
            {
                id: TypeKind.EnumType,
                title: 'Enum Types',
                searchPlaceholder: 'Search Enum Types...',
                draggableInEdit: false,
            },
        ],
    },
    [TypeKind.DOType]: {
        refsTitle: 'Data Object Structure',
        refsSearchPlaceholder: 'Search Object Structures...',
        columns: [
            {
                id: TypeKind.DOType,
                title: 'Data Object Types (SDO)',
                searchPlaceholder: 'Search Object Types...',
                draggableInEdit: true,
            },
            {
                id: TypeKind.DAType,
                title: 'Data Attribute Types',
                searchPlaceholder: 'Search Attribute Types...',
                draggableInEdit: true,
            },
            {
                id: TypeKind.EnumType,
                title: 'Enum Types',
                searchPlaceholder: 'Search Enum Types...',
                draggableInEdit: true,
            },
        ],
    },
    [TypeKind.DAType]: {
        refsTitle: 'Data Object Structure',
        refsSearchPlaceholder: 'Search Object Structures...',
        columns: [
            {
                id: TypeKind.DAType,
                title: 'Data Attribute Types (BDA)',
                searchPlaceholder: 'Search Attribute Types...',
                draggableInEdit: true,
            },
            {
                id: TypeKind.EnumType,
                title: 'Enum Types',
                searchPlaceholder: 'Search Enum Types...',
                draggableInEdit: true,
            },
        ],
    },
    [TypeKind.EnumType]: {
        refsTitle: 'Referenced Data Types',
        refsSearchPlaceholder: 'Search Referenced Types...',
        columns: [],
    },
};

export function buildColumns(typeKind: TypeKind, isEditMode: boolean, config: DetailsConfig): TColumnConfig[] {
    const layout = COLUMN_LAYOUT_BY_TYPE[typeKind];

    const refsColumn: TColumnConfig = {
        id: 'refs',
        title: layout.refsTitle,
        searchPlaceholder: layout.refsSearchPlaceholder,
        hasSearch: true,
        highlighted: true,
        dragAndDropBorder: isEditMode,
        canSelectItems: true,
        showSelectionIndicator: isEditMode,
        itemsDraggable: false,
        hasAction: config?.defaultTypeFeatureEnabled ?? false,
        actionDisabled: !isEditMode,
        actionLabel: 'Apply All Default Types',
        actionIcon: 'wand-stars',
    };

    const typeColumns: TColumnConfig[] = layout.columns.map((column) => ({
        id: column.id,
        title: column.title,
        actionDisabled: !isEditMode,
        searchPlaceholder: column.searchPlaceholder,
        actionLabel: 'Create',
        hasSearch: true,
        hasAction: true,
        itemsDraggable: column.draggableInEdit ? isEditMode : false,
        dragAndDropBorder: column.draggableInEdit ? isEditMode : false,
    }));

    return [refsColumn, ...typeColumns];
}
