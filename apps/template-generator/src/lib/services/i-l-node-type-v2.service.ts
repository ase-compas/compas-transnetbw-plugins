import {
  BasicType,
  ChildNameFilter,
  DataTypeKind,
  DataTypes,
  DataTypeUpdate,
  LNodeType,
  LNodeTypeDetailsV2,
  ObjectReferenceDetails,
} from '../domain/core.model';
import { IDataTypeRepository } from '../repositories/data-type.repository';
import { IDataTypeService } from './data-type-service';
import { ITypeSpecificationService } from './type-specification.service';

export interface ILNodeTypeV2Service {
  /**
   * Fetches the details of a logical node type by its ID, including enriched children and meta information.
   * @param id The ID of the logical node type.
   * @returns A promise resolving to the details of the logical node type.
   */
  getTypeById(id: string): Promise<LNodeTypeDetailsV2>;

  /**
   * Checks if a logical node type ID is already taken.
   * @param id The ID to check.
   * @returns A promise resolving to true if the ID is taken, false otherwise.
   */
  isLNodeIdTaken(id: string): Promise<boolean>;

  /**
   * Creates or updates a logical node type with the provided data.
   * @param data The update data for the logical node type.
   * @returns A promise resolving to true if successful, false otherwise.
   */
  createOrUpdateType(data: DataTypeUpdate): Promise<boolean>;

  /**
   * Duplicates an existing logical node type with a new ID.
   * @param id The ID of the logical node type to duplicate.
   * @param newId The new ID for the duplicated logical node type. If not provided, a new ID will be generated.
   *
   */
  duplicateType(id: string, newId?: string): Promise<LNodeTypeDetailsV2>;

  /**
   * Deletes a logical node type by its ID.
   * @param id The ID of the logical node type to delete.
   * @returns A promise resolving to true if deleted, false otherwise.
   */
  deleteTypeById(id: string): Promise<boolean>;

  /**
   * Fetches the referenced types for a logical node type by its ID.
   * @param id The ID of the logical node type.
   * @param childNameFilter
   * @returns A promise resolving to the referenced DataTypes.
   */
  getReferencedTypes(
    id: string,
    childNameFilter?: ChildNameFilter
  ): Promise<DataTypes>;

  /**
   * Fetches assignable types for a logical node type by its lnClass and optional child name filter.
   * @param lnClass The lnClass of the logical node type.
   * @param childNameFilter Optional filter for child names.
   * @returns A promise resolving to the assignable DataTypes.
   */
  getAssignableTypes(
    lnClass: string,
    childNameFilter?: ChildNameFilter
  ): Promise<DataTypes>;

  /**
   * Fetches the default logical node type details for a given lnClass.
   * @param lnClass The lnClass to fetch the default type for.
   * @returns A promise resolving to the default logical node type details.
   */
  getDefaultType(lnClass: string): Promise<LNodeTypeDetailsV2>;

  /**
   * Fetches all basic logical node types.
   * @returns A promise resolving to an array of basic types.
   */
  getAllTypes(): Promise<BasicType[]>;
}

export class LNodeTypeV2ServiceImpl implements ILNodeTypeV2Service {
  constructor(
    public typeRepo: IDataTypeRepository,
    public dataTypeService: IDataTypeService,
    public typeSpecificationService: ITypeSpecificationService,
  ) {}

  async getTypeById(id: string): Promise<LNodeTypeDetailsV2> {
    const dataType: LNodeType = this.typeRepo.findDataTypeById(DataTypeKind.LNodeType, id) as LNodeType;
    if (!dataType) throw new Error(`Unable to find logical node type with id ${id}`);

    const objRefDetails: ObjectReferenceDetails[] = await this.dataTypeService.getObjectReferenceDetails(DataTypeKind.LNodeType, dataType.lnClass, dataType.children);

    return {
      id: dataType.id,
      lnClass: dataType.lnClass,
      children: objRefDetails,
    };
  }

  async isLNodeIdTaken(id: string): Promise<boolean> {
    const existingType = this.typeRepo.findDataTypeById(DataTypeKind.LNodeType, id);
    return Promise.resolve(!!existingType);
  }

  async createOrUpdateType(data: DataTypeUpdate): Promise<boolean> {
    if (!data) throw new Error('No data provided');
    if (!data.id) throw new Error('No id provided');
    if (!data.instanceType) throw new Error('No innstance type provided');

    const configuredObjRefDetails = await this.dataTypeService.getConfiguredObjectReferenceDetails(DataTypeKind.LNodeType, data.instanceType, data.children)

    const node: LNodeType = { id: data.id, lnClass: data.instanceType, children: configuredObjRefDetails };
    this.typeRepo.upsertDataType(DataTypeKind.LNodeType, node);

    return Promise.resolve(true);
  }

  async duplicateType(id: string, newId?: string): Promise<LNodeTypeDetailsV2> {
    const existingType = this.typeRepo.findDataTypeById(DataTypeKind.LNodeType, id);
    if (!existingType)
      throw new Error(`Unable to find logical node type with id ${id}`);

    const duplicateId = newId ? newId : this.generateUniqueId(existingType.id);
    const duplicate: LNodeType = {
      ...existingType,
      id: duplicateId,
    };

    this.typeRepo.upsertDataType(DataTypeKind.LNodeType, duplicate);
    return this.getTypeById(duplicateId)
  }

  async deleteTypeById(id: string): Promise<boolean> {
    return Promise.resolve(
      this.typeRepo.deleteDataTypeById(DataTypeKind.LNodeType, id)
    );
  }

  async getReferencedTypes(id: string, childNameFilter: ChildNameFilter): Promise<DataTypes> {
    return this.dataTypeService.getReferencedTypes(DataTypeKind.LNodeType, id, childNameFilter)
  }

  async getAssignableTypes(lnClass: string, childNameFilter: string[] = []): Promise<DataTypes> {
    return this.dataTypeService.getAssignableTypes(DataTypeKind.LNodeType, lnClass, childNameFilter);
  }

  async getDefaultType(lnClass: string): Promise<LNodeTypeDetailsV2> {
    const children: ObjectReferenceDetails[] = await this.dataTypeService.getDefaultObjectReferenceDetails(DataTypeKind.LNodeType, lnClass)

    return Promise.resolve({
      id: '',
      lnClass,
      children,
    });
  }

  async getAllTypes(): Promise<BasicType[]> {
    const types = this.typeRepo.findAllDataTypesByKind(DataTypeKind.LNodeType) as LNodeType[];
    return Promise.resolve(
      types.map((t) => ({
        id: t.id,
        instanceType: t.lnClass,
        references: t?.children.length ?? 0,
      }))
    );
  }

  private generateUniqueId(baseId: string): string {
    let newId = `${baseId}_copy`;
    let counter = 2;

    while (this.typeRepo.findDataTypeById(DataTypeKind.LNodeType, newId)) {
      newId = `${baseId}_copy${counter}`;
      counter++;
    }

    return newId;
  }
}
