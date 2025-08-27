import { DAType, DODetails, DOType, EnumType } from '../domain';
import { TBoardItemContext, TItem } from '../components/tboard/types';

export function mapDODetailsToTItem(doDetails: DODetails, isEditMode: boolean, acceptDropFn?: (item: TBoardItemContext, doDetails: DODetails) => boolean): TItem {
  return {
    id: doDetails.name,
    title: doDetails.name,
    subtitle: doDetails.type,
    references: null,
    badgeText: doDetails.cdc,
    marked: false,
    isMandatory: doDetails.metadata.isMandatory,
    selected: doDetails.metadata.isConfigured || doDetails.metadata.isMandatory,
    canEdit: false,
    canMark: true,
    canSelect: isEditMode,
    canUnlink: isEditMode,
    error: (doDetails.metadata.isMandatory && !doDetails.type) || false,
    errorMessage: doDetails.metadata.isMandatory && !doDetails.type ? 'Reference is mandatory' : undefined,
    acceptDrop: acceptDropFn
      ? (item: TBoardItemContext) => acceptDropFn(item, doDetails)
      : undefined,
  };
}

export function mapDOTypeToTItem(doType: DOType, canEdit = false): TItem {
  return {
    id: doType.id,
    title: doType.id,
    references: doType.subDataObjects.length + doType.dataAttributes.length,
    badgeText: doType.cdc,
    canEdit: canEdit,
  };
}

export function mapDATypeToTItem(daType: DAType, canEdit = false): TItem {
  return {
    id: daType.id,
    title: daType.id,
    references: daType.basicDataAttributes.length,
    canEdit: canEdit,
  };
}

export function mapEnumTypeToTItem(enumType: EnumType, canEdit = false): TItem {
  return {
    id: enumType.id,
    title: enumType.id,
    references: enumType.values.length,
    canEdit: canEdit,
  };
}

