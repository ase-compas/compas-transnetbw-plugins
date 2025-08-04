import { TItem } from '../components/tboard/types';
import { DAType, DO, DOType, EnumType } from '../domain';

export type TItemMapperConfig = {
  marked?: boolean;
  canEdit?: boolean;
  canMark?: boolean;
  canSelect?: boolean;
  acceptDrop?: (target: TItem) => boolean;
};

export class TItemMapper {
  static fromDataObject(id: string, dataObject: DO, config: TItemMapperConfig = {}): TItem {
    return {
      id,
      title: dataObject.name,
      subtitle: dataObject.type,
      marked: config?.marked ?? false,
      selected: false,
      canEdit: config?.canEdit ?? false,
      canMark: config?.canMark ?? false,
      canSelect: config?.canSelect ?? false,
      acceptDrop: config?.acceptDrop ?? null,
    }
  }

  static fromDataObjectType(id: string, dataObjectType: DOType, config: TItemMapperConfig = {}): TItem {
    return {
      id,
      title: dataObjectType.id,
      subtitle: dataObjectType.cdc,
      references: dataObjectType.dataAttributes?.length ?? 0,
      marked: false,
      selected: false,
      canEdit: config?.canEdit ?? false,
      canMark: config?.canMark ?? false,
      canSelect: config?.canSelect ?? false,
      acceptDrop: config?.acceptDrop ?? null,
    }
  }

  static fromDataAttributeType(id: string, dataAttributeType: DAType, config: TItemMapperConfig = {}): TItem {
    return {
      id,
      title: dataAttributeType.id,
      references: dataAttributeType.basicDataAttributes?.length ?? 0,
      marked: false,
      selected: false,
      canEdit: config?.canEdit ?? false,
      canMark: config?.canMark ?? false,
      canSelect: config?.canSelect ?? false,
      acceptDrop: config?.acceptDrop ?? null,
    }
  }

  static fromEnumType(id: string, enumType: EnumType, config: TItemMapperConfig = {}): TItem {
   return {
     id,
     title: enumType.id,
     references: enumType.values?.length ?? 0,
     marked: false,
     selected: false,
     canEdit: config?.canEdit ?? false,
     canMark: config?.canMark ?? false,
     canSelect: config?.canSelect ?? false,
     acceptDrop: config?.acceptDrop ?? null,
   }
  }
}
