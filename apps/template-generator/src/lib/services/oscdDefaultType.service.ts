import { cdcData, lnClassData } from '../../data/nsdToJson/testNsdJson';
import { DA, DO, DOType, EnumType, LNodeType, SDO } from '../domain';

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
