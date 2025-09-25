import {
  DataTypeKind,
  type BasicTypes,
  type ChildNameFilter,
  type DataTypeUpdate,
  type DOType,
  type DOTypeDetails,
  type ObjectReferenceDetails,
  type TypeOption
} from '../domain';
import { type IDataTypeRepository } from '../repositories';
import { type ITypeSpecificationService } from './type-specification.service';
import { type IDataTypeService } from './data-type.service';
import { BasicTypeMapper } from '../mappers';

export interface IDoTypeService {
  /**
   * Fetches the details of a DO type by its ID, including enriched children and meta information.
   * @param id The ID of the DO type.
   * @returns A promise resolving to the details of the DO type.
   */
  getTypeById(id: string): Promise<DOTypeDetails>;

  /**
   * Checks if a DO type ID is already taken.
   * @param id The ID to check.
   * @returns A promise resolving to true if the ID is taken, false otherwise.
   */
  isDOIdTaken(id: string): Promise<boolean>;

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
   * @param cdc The cdc to fetch the default type for.
   * @returns A promise resolving to the default logical node type details.
   */
  getDefaultType(cdc: string): Promise<DOTypeDetails>;

  getTypeOptions(): Promise<TypeOption[]>;
}


export class DoTypeService implements IDoTypeService {
  constructor(
    public typeRepo: IDataTypeRepository,
    public dataTypeService: IDataTypeService,
    public typeSpecificationService: ITypeSpecificationService,
  ) {}

  async getTypeById(id: string): Promise<DOTypeDetails> {
    const dataType: DOType = this.typeRepo.findDataTypeById(DataTypeKind.DOType, id) as DOType;
    if (!dataType) throw new Error(`Unable to find DOType with id ${id}`);
    const objRefDetails: ObjectReferenceDetails[] = await this.dataTypeService.getObjectReferenceDetails(DataTypeKind.DOType, dataType.cdc, dataType.children);
    return {
      ...dataType,
      children: objRefDetails,
    };
  }

  async isDOIdTaken(id: string): Promise<boolean> {
    const existingType = this.typeRepo.findDataTypeById(DataTypeKind.DOType, id);
    return Promise.resolve(!!existingType);
  }

  async createOrUpdateType(data: DataTypeUpdate): Promise<boolean> {
    if (!data) throw new Error('No data provided');
    if (!data.id) throw new Error('No id provided');
    if (!data.instanceType) throw new Error('No instanceType (cdc) provided');
    const objRefDetails: ObjectReferenceDetails[] = await this.dataTypeService.getConfiguredObjectReferenceDetails(DataTypeKind.DOType, data.instanceType, data.children);
    const newType: DOType = {
      id: data.id,
      cdc: data.instanceType,
      children: objRefDetails,
    };
    this.typeRepo.upsertDataType(DataTypeKind.DOType, newType);
    return true;
  }

  async getReferencedTypes(id: string, childNameFilter?: ChildNameFilter): Promise<BasicTypes> {
    const dataTypes = await this.dataTypeService.getReferencedTypes(DataTypeKind.DOType, id, childNameFilter);
    return BasicTypeMapper.mapDataTypesToBasicTypes(dataTypes);
  }

  async getDefaultType(cdc: string): Promise<DOTypeDetails> {
    const children: ObjectReferenceDetails[] = await this.dataTypeService.getDefaultObjectReferenceDetails(DataTypeKind.DOType, cdc);

    return Promise.resolve({
      id: '',
      cdc,
      children,
    });
  }

  async getAssignableTypes(cdc: string, childNameFilter?: ChildNameFilter): Promise<BasicTypes> {
    const dataTypes = await this.dataTypeService.getAssignableTypes(DataTypeKind.DOType, cdc, childNameFilter);
    return BasicTypeMapper.mapDataTypesToBasicTypes(dataTypes);
  }

  async getTypeOptions(): Promise<TypeOption[]> {
    return this.dataTypeService.getTypeOptions(DataTypeKind.DOType);
  }
}
