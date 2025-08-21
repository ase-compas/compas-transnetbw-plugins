import type { LNodeType, DataTypes, DODetails, DO, LNodeTypeDetails, DOType } from '../domain';
import { DataObjectTypeRepository, LNodeTypeRepository } from '../repositories';
import { IStandardProviderService } from './standardProvider.service';
import { IDefaultGeneratorService } from './defaultGenerator.service';

export interface ILNodeTypeService {
  // --- Lifecycle ---
  createDraftLNodeType(lnClass: string): LNodeTypeDetails;  // not persisted
  saveLNodeType(payload: LNodeType): boolean

  // --- CRUD ---
  findAll(): LNodeType[];
  getLNodeType(id: string, filter?: { isConfigured?: boolean }): LNodeTypeDetails;
  duplicateLNodeType(id: string): LNodeType | null;
  deleteLNodeType(id: string): void;

  // --- References ---
  getReferencedTypes(lNodeTypeId: string, includeChildren: string[]): DataTypes;

  // --- DOTypes ---
  getAssignableDOTypes(lNodeTypeId: string, includeChildren: string[]): DOType[];

  isLNodeIdTaken(id: string): boolean;
}

export class LNodeTypeServiceImpl implements ILNodeTypeService {

  constructor(
    private readonly repo: LNodeTypeRepository,
    private readonly standardProvider: IStandardProviderService,
    private readonly defaultGenerator: IDefaultGeneratorService,
    private readonly doTypeRepo: DataObjectTypeRepository,
  ) {}

  findAll(): LNodeType[] {
    return this.repo.findAll();
  }

  getLNodeType(id: string, filter?: { isConfigured?: boolean }): LNodeTypeDetails {
    const lNodeType = this.repo.findById(id);
    if (!lNodeType) return null;

    const lnClassDefinition = this.standardProvider.getLNodeTypeStandard(lNodeType.lnClass);
    // If no lnClassDefinition or filter is not configured, return existing dataObjects as DODetails
    if (!lnClassDefinition) {
      return {
        ...lNodeType,
        dataObjects: lNodeType.dataObjects.map(doObj => this.mapExistingDOToDetails(doObj)),
      };
    }

    // If lnClassDefinition exists, enrich with standard definitions
    const dataObjects: DODetails[] = Object.entries(lnClassDefinition)
      .map(([name, doDefinition]) => {
        const existingDO = lNodeType.dataObjects.find(doObj => doObj.name === name);
        if (existingDO) {
          return this.mapExistingDOToDetails(existingDO, doDefinition?.mandatory ?? false, doDefinition.type);
        } else {
          return this.createDefaultDOWithDetails(lNodeType.lnClass, name);
        }
      })
      .filter(doDetails => !filter?.isConfigured || doDetails.metadata.isConfigured);


    return {
      ...lNodeType,
      dataObjects: dataObjects
    }
  }

  getAssignableDOTypes(lnClass: string, includeChildren: string[]): DOType[] {
    const cdcs: string[] = Object.entries(this.standardProvider.getLNodeTypeStandard(lnClass))
      .filter(([name, _]) => includeChildren.length === 0 || includeChildren.includes(name))
      .map(([_, doDefinition]) => doDefinition.type)
      .filter((cdc, index, self) => cdc && self.indexOf(cdc) === index);
    return cdcs.flatMap(cdc => this.doTypeRepo.findAllByCdc(cdc));
  }

  getReferencedTypes(lNodeTypeId: string, includeChildren: string[]): DataTypes {
    return this.repo.findReferencedTypesById(lNodeTypeId, includeChildren);
  }

  isLNodeIdTaken(id: string): boolean {
    return this.repo.findById(id) !== null;
  }

  createDraftLNodeType(lnClass: string): LNodeTypeDetails {
    return this.defaultGenerator.generateDefaultLNodeType(lnClass, undefined);
  }

  deleteLNodeType(id: string): void {
    this.repo.delete(id);
  }

  saveLNodeType(node: LNodeType): boolean {
    const existing = this.repo.findById(node.id);

    if (existing) {
      // Merge to preserve existing fields
      const merged = { ...existing, ...node };
      this.repo.update(merged);
    } else {
      this.repo.insert(node);
    }
    return true;
  }

  duplicateLNodeType(id: string): LNodeType | null {
    const existing = this.repo.findById(id);
    if (!existing) return null;

    const newId = this.generateUniqueId(existing.id);
    const duplicate: LNodeType = {
      ...existing,
      id: newId,
    };

    this.repo.insert(duplicate);
    return duplicate;
  }

  private generateUniqueId(baseId: string): string {
    let newId = `${baseId}_copy`;
    let counter = 2;

    while (this.repo.findById(newId)) {
      newId = `${baseId}_copy${counter}`;
      counter++;
    }

    return newId;
  }

  /**
   * Maps an existing DO to DODetails, optionally setting mandatory flag.
   */
  private mapExistingDOToDetails(doObj: DO, isMandatory = false, cdc?: string): DODetails {
    return this.toDODetails(doObj, isMandatory, true, cdc);
  }

  /**
   * Creates a default DO and maps it to DODetails.
   */
  private createDefaultDOWithDetails(lnClass: string, name: string): DODetails {
    const newDO: DODetails = this.defaultGenerator.generateDefaultDO(lnClass, name);
    newDO.metadata.isConfigured = newDO.metadata.isMandatory;
    return newDO;
  }

  private toDODetails(basicDataObject: DO, isMandatory: boolean, isConfigured: boolean, cdc?: string): DODetails {
    return {
      ...basicDataObject,
      cdc,
      metadata: {
        isMandatory,
        isConfigured,
      },
    };
  }
}
