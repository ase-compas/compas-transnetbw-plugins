import { TItem } from '../components/tboard/types';
import { TItemMapper, TItemMapperConfig } from '../mappers/tItem.mapper';
import { BDA, DA, DAType, DO, DOType, EnumType } from '../domain';

type ConfigOverrideOrFn<T> =
  | Partial<TItemMapperConfig>
  | ((item: T) => Partial<TItemMapperConfig>);

function buildConfig<T>(item: T, overrides: ConfigOverrideOrFn<T> = {}): TItemMapperConfig {
  return {
    canEdit: false,
    canMark: false,
    canSelect: false,
    marked: false,
    acceptDrop: null,
    ...(typeof overrides === 'function' ? overrides(item) : overrides),
  };
}

function buildItems<T>(
  list: T[],
  mapper: (id: string, item: T, config: TItemMapperConfig) => TItem,
  getId: (item: T) => string,
  markedSet?: Set<string>,
  overrides?: ConfigOverrideOrFn<T>
): TItem[] {
  return list?.map(item => {
    const baseOverrides: Partial<TItemMapperConfig> = markedSet
      ? { marked: markedSet.has(getId(item)), canMark: true }
      : {};

    return mapper(
      getId(item),
      item,
      buildConfig(item, { ...baseOverrides, ...(typeof overrides === 'function' ? overrides(item) : overrides) })
    );
  }) ?? [];
}

export const buildDOItems = (list: DO[], markedSet: Set<string>, overrides?: ConfigOverrideOrFn<DO>) =>
  buildItems(list, TItemMapper.fromDataObject, obj => obj.name, markedSet, overrides);

export const buildDAItems = (list: DA[], markedSet: Set<string>, overrides?: ConfigOverrideOrFn<DA>) =>
  buildItems(list, TItemMapper.fromDataAttribute, attr => attr.name, markedSet, overrides);

export const buildDBAItems = (list: BDA[], markedSet: Set<string>, overrides?: ConfigOverrideOrFn<BDA>) =>
  buildItems(list, TItemMapper.fromDataBasicAttribute, attr => attr.name, markedSet, item => ({
    acceptDrop: () => true,
    ...(typeof overrides === 'function' ? overrides(item) : overrides),
  }));

export const buildDOTypeItems = (list: DOType[], overrides?: ConfigOverrideOrFn<DOType>) =>
  buildItems(list, TItemMapper.fromDataObjectType, type => type.id, undefined, overrides);

export const buildDATypeItems = (list: DAType[], overrides?: ConfigOverrideOrFn<DAType>) =>
  buildItems(list, TItemMapper.fromDataAttributeType, type => type.id, undefined, overrides);

export const buildEnumTypeItems = (list: EnumType[], overrides?: ConfigOverrideOrFn<EnumType>) =>
  buildItems(list, TItemMapper.fromEnumType, type => type.id, undefined, overrides);
