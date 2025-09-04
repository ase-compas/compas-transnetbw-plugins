import {
  DataTypeKind,
  EnumType,
  EnumTypeDetails,
  ObjectReferenceDetails,
  TypeOption,
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

  getTypeOptions(): Promise<TypeOption[]> {
    return this.dataTypeService.getTypeOptions(DataTypeKind.EnumType);
  }
}
