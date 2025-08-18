import { cdcData, lnClassData } from '../../data/nsdToJson/testNsdJson';
import { BDA, DA, DAType, DO, DOType, EnumType, LNodeType, SDO } from '../domain';

export class OscdDefaultTypeService {

  public createLogicalNodeTypeWithDefaults(id: string, lnClass: string, desc: string | null = null): LNodeType {
    const lnDefinition = this.getLogicalNodeDefinition(lnClass);
    if (!lnDefinition) {
      console.warn("No logical node definition found for LN class:", lnClass);
      return { id, lnClass, desc, dataObjects: []};
      // does desc work if its null? it should not be included?
    }

    const dataObjects: DO[] = Object.values(lnDefinition)
      .filter((obj: any) => obj && obj.tagName === 'DataObject')
      .map((obj: any) => ({
        name: obj.name || '',
        type: ''
      }));

    return { id, lnClass, desc, dataObjects};
  }

  public enumTypeMatchesStandard(enumTemplate, enumType: EnumType): boolean {
    if (!enumTemplate || !enumType) return false;
    if(!enumTemplate?.typeKind || enumTemplate?.typeKind !== "ENUMERATED") return false;

    const templateChildren = enumTemplate.children;
    const templateKeys = Object.keys(templateChildren);

    // Check if every child in template exists in enumType
    if (templateKeys.length !== enumType.values.length) return false;

    for (const key of templateKeys) {
      const templateChild = templateChildren[key];
      const matchingEnumVal = enumType.values.find(
        ev => ev.ord.toString() === templateChild.literalVal && ev.value === templateChild.name
      );
      if (!matchingEnumVal) return false; // no matching enum value
    }

    return true;
  }

  public dataAttributeTypeMatchesStandard(dataAttributeTemplate, dataAttribute: DAType): boolean {
    if (!dataAttributeTemplate || !dataAttribute) return false;
    if (!dataAttributeTemplate?.typeKind || dataAttributeTemplate?.typeKind !== "CONSTRUCTED") return false;

    const templateChildren = dataAttributeTemplate.children;
    const templateKeys = Object.keys(templateChildren);

    const attributesToCheck = new Map<string, BDA>();
    dataAttribute.basicDataAttributes.forEach(attr => attributesToCheck.set(attr.name, attr))

    // check if DA has mandatory attributes
    const mandatoryAttributes = templateKeys.filter(key => templateChildren[key].mandatory);
    for (const attr of mandatoryAttributes) {
      if (!attributesToCheck.has(attr)) {
        return false;
      } else {
        const isDAValid = this.dataAttributeMatchesStandard(templateChildren[attr], attributesToCheck.get(attr));
        if(!isDAValid) return false;
      }
      attributesToCheck.delete(attr);
    }

    // check if standard defines the optional attributes
    for (const attr of attributesToCheck.keys()) {
      const templateAttr = templateChildren[attr];
      if (templateAttr) {
        const isDAValid = this.dataAttributeMatchesStandard(templateAttr, attributesToCheck.get(attr));
        if (!isDAValid) {
          return false;
        }
      }
    }

    return true;
  }

  public dataAttributeMatchesStandard(dataAttributeTemplate, dataAttribute: BDA): boolean {
    if (!dataAttributeTemplate || !dataAttribute) return false;
    if( !dataAttributeTemplate?.typeKind) return dataAttributeTemplate.name === dataAttribute.name && dataAttributeTemplate.type === dataAttribute.bType;
    else if (dataAttributeTemplate?.typeKind === "ENUMERATED") return dataAttribute.bType === "Enum";
    else if (dataAttributeTemplate?.typeKind === "CONSTRUCTED") return dataAttribute.bType === "Struct";
    return false;
  }

  public createDataObjectWithDefaults(id: string, cdc: string): DOType {
    const dataDefinition = this.getDataObjectDefinition(cdc);

    if (!dataDefinition) {
      console.warn(`No data object definition found for CDC: ${cdc}`);
      return { id, cdc, dataAttributes: [], subDataObjects: [] };
    }

    const dataAttributes: DA[] = this.extractDataAttributes(dataDefinition);
    const subDataObjects: SDO[] = this.extractSubDataObjects(dataDefinition);

    return { id, cdc, dataAttributes, subDataObjects };
  }

  private extractDataAttributes(dataDefinition: Record<string, any>): DA[] {
    return Object.values(dataDefinition)
      .filter(obj => obj?.tagName === "DataAttribute")
      .map(obj => {
        const bType = this.mapBType(obj.typeKind, obj.type);
        return {
          name: obj.name || "",
          fc: obj.fc || "",
          ...(obj.typeKind !== undefined && { type: '' }),
          ...(obj.qchg !== undefined && { qchg: obj.qchg }),
          ...(obj.dupd !== undefined && { dupd: obj.dupd }),
          ...(obj.dchg !== undefined && { dchg: obj.dchg }),
          ...(bType && { bType })
        };
      });
  }

  private extractSubDataObjects(dataDefinition: Record<string, any>): SDO[] {
    return Object.values(dataDefinition)
      .filter(obj => obj?.tagName === "SubDataObject")
      .map(obj => ({
        name: obj.name || "",
        type: ""
      }));
  }

  private mapBType(typeKind: string, type: string): string {
    if(typeKind === undefined) {
      return type;
    }
    switch (typeKind) {
      case "ENUMERATED":
        return "Enum";
      case "CONSTRUCTED":
        return "Struct";
      default:
        return "";
    }
  }

  public getLogicalNodeDefinition(lnClass: string) {
    return lnClassData[lnClass] || null;
  }

  public getDataObjectDefinition(cdc: string) {
    return cdcData[cdc] || null;
  }
}
