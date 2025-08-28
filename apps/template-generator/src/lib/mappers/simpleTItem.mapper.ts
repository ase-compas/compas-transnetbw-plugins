import { TBoardItemContext, TItem } from '../components/tboard/types';
import { DataType } from '../domain/core.model';
import { ObjectReferenceState } from '../stores';

export function mapObjectReferenceStateToTItem(objRef: ObjectReferenceState, isEditMode: boolean, acceptDropFn?: (item: TBoardItemContext, objRef: ObjectReferenceState) => boolean): TItem {
  return {
    id: objRef.name,
    title: objRef.name,
    subtitle: objRef.typeRef,
    references: null,
    badgeText: objRef.meta?.requiredRefType ? objRef.meta.requiredRefType : undefined,
    marked: objRef.isMarked,
    isMandatory: objRef.meta.isMandatory,
    selected: objRef.meta.isConfigured,
    canEdit: false,
    canMark: true,
    canSelect: isEditMode,
    canUnlink: isEditMode && !!objRef.typeRef && !objRef.meta.isMandatory,
    error: (objRef.meta?.requiredRefType && objRef.meta.isConfigured && !objRef.typeRef) || false,
    errorMessage: 'Reference is required',
    acceptDrop: acceptDropFn
      ? (item: TBoardItemContext) => acceptDropFn(item, objRef)
      : undefined,
  };
}


export function mapDataTypeToItem(type: DataType, canEdit = false, badgeText?: string): TItem {
  return {
    id: type.id,
    title: type.id,
    references: 0,
    badgeText: badgeText,
    canEdit: canEdit,
  };
}


