import { cdcData, lnClassData } from '../../data/nsdToJson/testNsdJson';
import type { DOType, DataTypes } from '../domain';
import { DataObjectTypeRepository } from '../repositories';

export class DataObjectTypeService {
  constructor(private repo: DataObjectTypeRepository) {}

  findAll(): DOType[] {
    return this.repo.findAll();
  }

  findAllByCdc(cdcs: string | string[]): DOType[] {
    if (Array.isArray(cdcs)) {
      // If an array, fetch all and flatten results
      return cdcs.flatMap(cdc => this.repo.findAllByCdc(cdc));
    } else {
      // Single string case
      return this.repo.findAllByCdc(cdcs);
    }
  }

  canReferenceToType(lnClass: string, name: string, targetCdc: string) {
    const lnClassObj = lnClassData[lnClass];
    const dataObject = lnClassObj?.[name];

    if (!dataObject) {
      return false;
    }

    const dataObjectCDC = dataObject.type;
    return dataObjectCDC === targetCdc;
  }

  canSdoReferenceToType(cdc: string, name: string, targetDOTypeId: string) {
    const cdcObj = cdcData[cdc];
    if(!cdcObj) return false;
    const dataObject = cdcObj[name];

    if (!dataObject || !dataObject.type || dataObject.tagName !== 'SubDataObject') return false;

    const targetDOType = this.findById(targetDOTypeId);
    return dataObject.type === targetDOType.cdc;
  }

  createOrUpdate(doType: DOType): void {
    const existing = this.repo.findById(doType.id);

    if (existing) {
      // Merge to preserve existing fields
      const merged = { ...existing, ...doType };
      this.repo.update(merged);
    } else {
      this.repo.insert(doType);
    }
  }

  findById(id: string): DOType | null {
    return this.repo.findById(id);
  }

  isIdTaken(id: string): boolean {
    return this.findById(id) !== null;
  }

  public findReferencedTypesById(id: string, childNameFilter: string[] = []): DataTypes | null {
    return this.repo.findReferencedTypesById(id, childNameFilter);
  }

    create(node: DOType): void {
    this.repo.insert(node);
  }

  update(id: string, updated: Partial<DOType>): void {
    const existing = this.repo.findById(id);
    if (!existing) throw new Error(`DataObjectType with id ${id} not found`);

    const merged = { ...existing, ...updated };
    this.repo.update(merged);
  }

  delete(id: string): void {
    this.repo.delete(id);
  }
}
