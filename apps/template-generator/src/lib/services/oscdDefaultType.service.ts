import { lnClassData } from '../../data/nsdToJson/testNsdJson';
import { DO } from '../domain';

export class OscdDefaultTypeService {

  getDefaultLogicalNodeType(lnClass: string): DO[] {
    const dataObjectTemplate = lnClassData[lnClass];
    if (!dataObjectTemplate || typeof dataObjectTemplate !== 'object') {
      return [];
    }

    return Object.values(dataObjectTemplate || {})
      .filter((obj: any) => obj && obj.tagName === 'DataObject')
      .map((obj: any) => ({
        name: obj.name || '',
        type: ''
      }));
  }
}
