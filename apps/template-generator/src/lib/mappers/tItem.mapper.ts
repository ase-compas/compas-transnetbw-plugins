import { TBoardItemContext, TItem } from '../components/tboard/types';
import { BDA, DA, DAType, DO, DOType, EnumType } from '../domain';

export type TItemMapperConfig = {
  marked?: boolean;
  canEdit?: boolean;
  canMark?: boolean;
  canSelect?: boolean;
  acceptDrop?: (target: TBoardItemContext) => boolean;
};

function buildTItemBase(
  id: string,
  title: string,
  subtitle?: string,
  references?: number,
  config: TItemMapperConfig = {}
): TItem {
  return {
    id,
    title,
    subtitle,
    references,
    marked: config.marked ?? false,
    selected: false,
    canEdit: config.canEdit ?? false,
    canMark: config.canMark ?? false,
    canSelect: config.canSelect ?? false,
    acceptDrop: config.acceptDrop ?? null,
  };
}

export class TItemMapper {
  static fromDataObject(id: string, { name, type }: DO, config?: TItemMapperConfig): TItem {
    return buildTItemBase(id, name, type, undefined, config);
  }

  static fromSubDataObject(id: string, { name, type }: DO, config?: TItemMapperConfig): TItem {
    return buildTItemBase(id, name, type, undefined, config);
  }

  static fromDataAttribute(id: string, { name, type }: DA, config?: TItemMapperConfig): TItem {
    return buildTItemBase(id, name, type, undefined, config);
  }

  static fromDataBasicAttribute(id: string, { name, type }: BDA, config?: TItemMapperConfig): TItem {
    return buildTItemBase(id, name, type, undefined, config);
  }

  static fromDataObjectType(id: string, { id: title, cdc, dataAttributes, subDataObjects }: DOType, config?: TItemMapperConfig): TItem {
    return buildTItemBase(id, title, cdc, dataAttributes?.length + subDataObjects?.length, config);
  }

  static fromDataAttributeType(id: string, { id: title, basicDataAttributes }: DAType, config?: TItemMapperConfig): TItem {
    return buildTItemBase(id, title, undefined, basicDataAttributes?.length, config);
  }

  static fromEnumType(id: string, { id: title, values }: EnumType, config?: TItemMapperConfig): TItem {
    return buildTItemBase(id, title, undefined, values?.length, config);
  }
}
