import { cdcData, lnClassData } from '../../data/nsdToJson/testNsdJson';
import { DA, DO } from '../domain';

export class OscdDefaultTypeService {

  getDefaultLogicalNodeType(lnClass: string): DO[] {
    const dataObjectTemplate = lnClassData[lnClass];
    if (!dataObjectTemplate || typeof dataObjectTemplate !== 'object') {
      console.warn("No default data object template found for LN class:", lnClass);
      return [];
    }

    return Object.values(dataObjectTemplate || {})
      .filter((obj: any) => obj && obj.tagName === 'DataObject')
      .map((obj: any) => ({
        name: obj.name || '',
        type: ''
      }));
  }

  getDefaultDataObjectType(cdc: string): DA[] {
    const data = cdcData[cdc]
    if (!data || typeof data !== 'object') {
      console.warn("No default data found for CDC:", cdc);
      return [];
    }

    return Object.values(data || {})
      .filter((obj: any) => obj && obj.tagName === 'DataAttribute')
      .map((obj: any) => ({
        name: obj.name || '',
        fc: obj.fc || '',
        bType: obj.bType || '',
        type: obj.type || '',
        qchg: obj.qchg || false,
        dupd: obj.dupd || false,
        dchg: obj.dchg || false
      }));

  }
}
