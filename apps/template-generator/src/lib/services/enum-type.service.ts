import {
  DataTypeKind, DataTypeUpdate, DAType,
  EnumType,
  EnumTypeDetails,
  ObjectReferenceDetails,
  TypeOption
} from '../domain';
import { IDataTypeRepository } from '../repositories';
import { IDataTypeService } from './data-type.service';

export interface IEnumTypeService {
  /**
   * Fetches the details of a DO type by its ID, including enriched children and meta information.
   * @param id The ID of the DO type.
   * @returns A promise resolving to the details of the DO type.
   */
  getTypeById(id: string): Promise<EnumTypeDetails>;

  /**
   * Checks if a DO type ID is already taken.
   * @param id The ID to check.
   * @returns A promise resolving to true if the ID is taken, false otherwise.
   */
  isEnumIdTaken(id: string): Promise<boolean>;

  /**
   * Fetches the default enum type details for a given instanceType.
   * @param instanceType The instanceType to fetch the default type for.
   * @returns A promise resolving to the default logical node type details.
   */
  getDefaultType(instanceType: string): Promise<EnumTypeDetails>;

  createOrUpdateType(data: DataTypeUpdate): Promise<boolean>;

  getTypeOptions(): Promise<TypeOption[]>;
}


export class EnumTypeService implements IEnumTypeService {

  constructor(
    private typeRepo: IDataTypeRepository,
    private dataTypeService: IDataTypeService,
  ) {}

  async getTypeById(id: string): Promise<EnumTypeDetails> {
    const dataType: EnumType = this.typeRepo.findDataTypeById(DataTypeKind.EnumType, id) as EnumType;
    if (!dataType) throw new Error(`Unable to find DOType with id ${id}`);

    const objRefDetails: ObjectReferenceDetails[] = dataType.children.map(child => ({
      ...child,
      meta: {
        isConfigured: true,
        isMandatory: false,
        requiresReference: false,
        objectType: ''
      },
    }));

    return {
      ...dataType,
      children: objRefDetails,
    };
  }


  async isEnumIdTaken(id: string): Promise<boolean> {
    const dataType: EnumType | null = this.typeRepo.findDataTypeById(DataTypeKind.EnumType, id) as EnumType;
    return dataType !== null;
  }

  async createOrUpdateType(data: DataTypeUpdate): Promise<boolean> {
    if (!data) throw new Error('No data provided');
    if (!data.id) throw new Error('No id provided');
    if (!data.instanceType) throw new Error('No instanceType provided');
    const objRefDetails: ObjectReferenceDetails[] = await this.dataTypeService.getConfiguredObjectReferenceDetails(DataTypeKind.EnumType, data.instanceType, data.children);
    const newType: DAType = {
      id: data.id,
      instanceType: data.instanceType,
      children: objRefDetails,
    };
    this.typeRepo.upsertDataType(DataTypeKind.EnumType, newType);
    return true;
  }

  async getDefaultType(instanceType: string): Promise<EnumTypeDetails> {
    const objectReferences =  await this.dataTypeService.getDefaultObjectReferenceDetails(DataTypeKind.EnumType, instanceType);
    console.log(objectReferences)
    return Promise.resolve({
      id: '',
      children: objectReferences
    })
  }

  getTypeOptions(): Promise<TypeOption[]> {
    return this.dataTypeService.getTypeOptions(DataTypeKind.EnumType);
  }
}
