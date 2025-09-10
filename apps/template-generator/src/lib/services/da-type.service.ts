import {
  BasicTypes,
  ChildNameFilter,
  DataTypeKind,
  DataTypeUpdate,
  DAType,
  DATypeDetails,
  ObjectReferenceDetails,
  TypeOption
} from '../domain';
import { IDataTypeRepository } from '../repositories';
import { ITypeSpecificationService } from './type-specification.service';
import { IDataTypeService } from './data-type.service';
import { BasicTypeMapper } from '../mappers';

export interface IDaTypeService {
  /**
   * Fetches the details of a DO type by its ID, including enriched children and meta information.
   * @param id The ID of the DO type.
   * @returns A promise resolving to the details of the DO type.
   */
  getTypeById(id: string): Promise<DATypeDetails>;

  /**
   * Checks if a DO type ID is already taken.
   * @param id The ID to check.
   * @returns A promise resolving to true if the ID is taken, false otherwise.
   */
  isDAIdTaken(id: string): Promise<boolean>;

  /**
   * Creates or updates a DO type with the provided data.
   * @param data The update data for the DO type.
   * @returns A promise resolving to true if successful, false otherwise.
   */
  createOrUpdateType(data: DataTypeUpdate): Promise<boolean>;

  /**
   * Fetches the referenced types for a DO type by its ID.
   * @param id The ID of the DO type.
   * @param childNameFilter
   * @returns A promise resolving to the referenced DataTypes.
   */
  getReferencedTypes(
    id: string,
    childNameFilter?: ChildNameFilter
  ): Promise<BasicTypes>;

  /**
   * Fetches assignable types for a DO type by its cdc and optional child name filter.
   * @param cdc The cdc of the DO type.
   * @param childNameFilter Optional filter for child names.
   * @returns A promise resolving to the assignable DataTypes.
   */
  getAssignableTypes(
    cdc: string,
    childNameFilter?: ChildNameFilter
  ): Promise<BasicTypes>;

  /**
   * Fetches the default logical node type details for a given cdc.
   * @param instanceType The cdc to fetch the default type for.
   * @returns A promise resolving to the default logical node type details.
   */
  getDefaultType(instanceType: string): Promise<DATypeDetails>;

  getTypeOptions(): Promise<TypeOption[]>;
}


export class DaTypeService implements IDaTypeService {
  constructor(
    public typeRepo: IDataTypeRepository,
    public dataTypeService: IDataTypeService,
    public typeSpecificationService: ITypeSpecificationService,
  ) {}

  async getTypeById(id: string): Promise<DATypeDetails> {
    const dataType: DAType = this.typeRepo.findDataTypeById(DataTypeKind.DAType, id) as DAType;
    if (!dataType) throw new Error(`Unable to find DAType with id ${id}`);
    let objRefDetails: ObjectReferenceDetails[];
    try {
      objRefDetails = await this.dataTypeService.getObjectReferenceDetails(DataTypeKind.DAType, dataType.instanceType, dataType.children);
    } catch (e) {
      objRefDetails = this.toDefaultDetails(dataType);
    }

    return {
      ...dataType,
      children: objRefDetails,
    };
  }

  async isDAIdTaken(id: string): Promise<boolean> {
    const existingType = this.typeRepo.findDataTypeById(DataTypeKind.DAType, id);
    return Promise.resolve(!!existingType);
  }

  async createOrUpdateType(data: DataTypeUpdate): Promise<boolean> {
    if (!data) throw new Error('No data provided');
    if (!data.id) throw new Error('No id provided');
    if (!data.instanceType) throw new Error('No instanceType provided');
    const objRefDetails: ObjectReferenceDetails[] = await this.dataTypeService.getConfiguredObjectReferenceDetails(DataTypeKind.DAType, data.instanceType, data.children);
    const newType: DAType = {
      id: data.id,
      instanceType: data.instanceType,
      children: objRefDetails,
    };
    this.typeRepo.upsertDataType(DataTypeKind.DAType, newType);
    return true;
  }

  async getReferencedTypes(id: string, childNameFilter?: ChildNameFilter): Promise<BasicTypes> {
    const dataTypes = await this.dataTypeService.getReferencedTypes(DataTypeKind.DAType, id, childNameFilter);
    return BasicTypeMapper.mapDataTypesToBasicTypes(dataTypes);
  }

  async getDefaultType(instanceType: string): Promise<DATypeDetails> {
    const children: ObjectReferenceDetails[] = await this.dataTypeService.getDefaultObjectReferenceDetails(DataTypeKind.DAType, instanceType);

    return Promise.resolve({
      id: '',
      instanceType: instanceType,
      children,
    });
  }

  async getAssignableTypes(cdc: string, childNameFilter?: ChildNameFilter): Promise<BasicTypes> {
    const dataTypes = await this.dataTypeService.getAssignableTypes(DataTypeKind.DAType, cdc, childNameFilter);
    return BasicTypeMapper.mapDataTypesToBasicTypes(dataTypes)
  }

  async getTypeOptions(): Promise<TypeOption[]> {
    return this.dataTypeService.getTypeOptions(DataTypeKind.DAType);
  }

  private toDefaultDetails(dataType: DAType) {
    const objRefDetails: ObjectReferenceDetails[] = dataType.children.map(child => {

      let refTypeKind: DataTypeKind | undefined = undefined;
      const bType = child.attributes?.bType;
      if(bType && bType === 'Struct') {
        refTypeKind = DataTypeKind.DAType;
      } else if(bType && bType === 'Enum') {
        refTypeKind = DataTypeKind.EnumType;
      }

      return {
        ...child,
        meta: {
          isConfigured: true,
          isMandatory: false,
          objectType: undefined,
          requiresReference: !!refTypeKind,
          refTypeKind: refTypeKind,
        }
      }
    });
    return objRefDetails;
  }
}
