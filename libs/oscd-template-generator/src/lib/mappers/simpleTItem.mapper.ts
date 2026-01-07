import type { TBoardItemContext, TItem } from '../components/tboard/types';
import { type BasicType, DataTypeKind } from '../domain';
import { type ObjectReferenceState } from '../stores';

function getTypeKindAbbreviation(typeKind: DataTypeKind) {
  switch (typeKind) {
    case DataTypeKind.DOType:
      return 'DO';
    case DataTypeKind.LNodeType:
      return 'LN';
    case DataTypeKind.EnumType:
      return 'Enum';
    case DataTypeKind.DAType:
      return 'DA';
    default:
      return '';
  }
}

export function mapObjectReferenceStateToTItem(objRef: ObjectReferenceState, isEditMode: boolean, acceptDropFn?: (item: TBoardItemContext, objRef: ObjectReferenceState) => boolean): TItem {
  const badgeText = [
    objRef.meta.refTypeKind ? getTypeKindAbbreviation(objRef.meta.refTypeKind) : null,
    objRef.meta?.objectType ?? 'ANY',
  ]
    .filter(Boolean)
    .join(" • ");

  return {
    id: objRef.name,
    title: objRef.name,
    subtitle: objRef.typeRef,
    references: null,
    badgeText: badgeText,
    marked: objRef.isMarked,
    isMandatory: objRef.meta.isMandatory,
    selected: objRef.meta.isConfigured,
    canEdit: false,
    canMark: false,
    canClick: true,
    canSelect: isEditMode,
    canUnlink: isEditMode && !!objRef.typeRef && !objRef.meta.isMandatory,
    canApplyDefaults: isEditMode && objRef.meta.requiresReference,
    referencable: objRef.meta.requiresReference,
    acceptDrop: acceptDropFn
      ? (item: TBoardItemContext) => acceptDropFn(item, objRef)
      : undefined,
  };
}


export function mapDataTypeToItem(type: BasicType, canEdit = false): TItem {
  return {
    id: type.id,
    title: type.id,
    references: type.references,
    badgeText: type?.instanceType ?? 'Unknown Type',
    canEdit: true,
    canUnlink: false,
    canSetDefault: true
  };
}


