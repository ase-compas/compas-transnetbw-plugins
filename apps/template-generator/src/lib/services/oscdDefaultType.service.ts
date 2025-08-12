import { cdcData, lnClassData } from '../../data/nsdToJson/testNsdJson';
import { DA, DO, DOType, LNodeType, SDO } from '../domain';

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

  public createDataObjectWithDefaults(id: string, cdc: string): DOType {
    const dataDefinition = this.getDataObjectDefinition(cdc);
    if (!dataDefinition) {
      console.warn("No data object definition found for CDC:", cdc);
      return { id, cdc, dataAttributes: [], subDataObjects: [] };
    }

    const dataAttributes: DA[] = Object.values(dataDefinition)
      .filter((obj: any) => obj && obj.tagName === 'DataAttribute')
      .map((obj: any) => ({
        name: obj.name || '',
        fc: obj.fc || '',
        bType: obj.bType || '',
        type: '',
        qchg: obj.qchg || false,
        dupd: obj.dupd || false,
        dchg: obj.dchg || false
      }));

    const subDataObjects: SDO[] = Object.values(dataDefinition)
      .filter((obj: any) => obj && obj.tagName === 'SubDataObject')
      .map((obj: any) => ({
        name: obj.name || '',
        type: '',
      }));

    return { id, cdc, dataAttributes, subDataObjects };
  }

  public getLogicalNodeDefinition(lnClass: string) {
    return lnClassData[lnClass] || null;
  }

  public getDataObjectDefinition(cdc: string) {
    return cdcData[cdc] || null;
  }
}
