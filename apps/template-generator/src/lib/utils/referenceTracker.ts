import type { ReferencedTypes } from '../domain';
import { DATypeMapper, DOTypeMapper, EnumTypeMapper } from '../mappers';

export class ReferenceTracker {
  private doTypeIds = new Set<string>();
  private daTypeIds = new Set<string>();
  private enumTypeIds = new Set<string>();

  public result: ReferencedTypes = {
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: [],
  };

  addDO(id: string, element: Element) {
    if (this.doTypeIds.has(id)) return false;
    this.doTypeIds.add(id);
    this.result.dataObjectTypes.push(DOTypeMapper.fromElement(element));
    return true;
  }

  addDA(id: string, element: Element) {
    if (this.daTypeIds.has(id)) return false;
    this.daTypeIds.add(id);
    this.result.dataAttributeTypes.push(DATypeMapper.fromElement(element));
    return true;
  }

  addEnum(id: string, element: Element) {
    if (this.enumTypeIds.has(id)) return false;
    this.enumTypeIds.add(id);
    this.result.enumTypes.push(EnumTypeMapper.fromElement(element));
    return true;
  }
}
