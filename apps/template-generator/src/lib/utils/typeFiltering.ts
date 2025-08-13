import type { DAType, DO, DOType, EnumType } from '../domain';

export function getReferences<T>(markedSet: Set<T>, fallback: T[]): T[] {
  return markedSet?.size > 0 ? Array.from(markedSet) : fallback;
}

export function filterDOTypes(rawDOTypes: DOType[], dataObjects: DO[]): DOType[] {
  return rawDOTypes.filter(doType =>
    dataObjects.some(doItem => doItem.type === doType.id)
  );
}

export function filterDATypes(rawDATypes: DAType[], doTypes: DOType[]): DAType[] {
  const referencedIds = doTypes
    .flatMap(doType => doType.dataAttributes ?? [])
    .filter(attr => attr.bType === 'Struct' || attr.bType === 'Enum')
    .map(attr => attr.type);

  return rawDATypes.filter(da => referencedIds.includes(da.id));
}

export function filterEnumTypes(rawEnums: EnumType[], doTypes: DOType[]): EnumType[] {
  const referencedIds = doTypes
    .flatMap(doType => doType.dataAttributes ?? [])
    .filter(attr => attr.bType === 'Enum')
    .map(attr => attr.type);

  return rawEnums.filter(en => referencedIds.includes(en.id));
}
