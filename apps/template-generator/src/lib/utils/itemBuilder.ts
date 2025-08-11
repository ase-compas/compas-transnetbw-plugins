import { TItem } from '../components/tboard/types';
import { TItemMapper, TItemMapperConfig } from '../mappers/tItem.mapper';
import { BDA, DA, DAType, DO, DOType, EnumType } from '../domain';

function buildConfig(overrides: Partial<TItemMapperConfig> = {}): TItemMapperConfig {
  return {
    canEdit: false,
    canMark: false,
    canSelect: false,
    marked: false,
    acceptDrop: null,
    ...overrides,
  };
}

export function buildDOItems(
  list: DO[],
  markedSet: Set<string>,
  configOverrides: Partial<TItemMapperConfig> = {}
): TItem[] {
  return list?.map(obj =>
    TItemMapper.fromDataObject(obj.name, obj, buildConfig({
      ...configOverrides,
      marked: markedSet.has(obj.name),
      canMark: true,
    }))
  ) ?? [];
}

export function buildDAItems(
  list: DA[],
  markedSet: Set<string>,
  configOverrides: Partial<TItemMapperConfig> = {}
): TItem[] {
  return list?.map(attr =>
    TItemMapper.fromDataAttribute(attr.name, attr, buildConfig({
      ...configOverrides,
      marked: markedSet.has(attr.name),
      canMark: true,
      acceptDrop: () => true,
    }))
  ) ?? [];
}

export function buildDBAItems(
  list: BDA[],
  markedSet: Set<string>,
  configOverrides: Partial<TItemMapperConfig> = {}
): TItem[] {
  return list?.map(attr =>
    TItemMapper.fromDataBasicAttribute(attr.name, attr, buildConfig({
      ...configOverrides,
      marked: markedSet.has(attr.name),
      canMark: true,
      acceptDrop: () => true,
    }))
  ) ?? [];
}

export function buildDOTypeItems(
  list: DOType[],
  configOverrides: Partial<TItemMapperConfig> = {}
): TItem[] {
  return list?.map(type =>
    TItemMapper.fromDataObjectType(type.id, type, buildConfig(configOverrides))
  ) ?? [];
}

export function buildDATypeItems(
  list: DAType[],
  configOverrides: Partial<TItemMapperConfig> = {}
): TItem[] {
  return list?.map(type =>
    TItemMapper.fromDataAttributeType(type.id, type, buildConfig(configOverrides))
  ) ?? [];
}

export function buildEnumTypeItems(
  list: EnumType[],
  configOverrides: Partial<TItemMapperConfig> = {}
): TItem[] {
  return list?.map(type =>
    TItemMapper.fromEnumType(type.id, type, buildConfig(configOverrides))
  ) ?? [];
}
