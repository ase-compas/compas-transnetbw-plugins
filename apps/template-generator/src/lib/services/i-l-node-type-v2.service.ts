import {
  BasicType,
  ChildNameFilter,
  DataTypeKind,
  DataTypes,
  DAType,
  DOType,
  EnumType,
  LNodeType,
  LNodeTypeDetailsV2,
  LNodeTypeUpdate,
  ObjectReferenceDetails,
  SimpleReference,
} from '../domain/core.model';
import { IDataTypeRepository } from '../repositories/data-type.repository';
import { ITypeSpecificationService } from './type-specification.service';
import { ObjectSpecification } from '../domain/type-specification.model';

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
  createOrUpdateType(data: LNodeTypeUpdate): Promise<boolean>;

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
    public typeSpecificationService: ITypeSpecificationService,
  ) {}

  async getTypeById(id: string): Promise<LNodeTypeDetailsV2> {
    const dataType: LNodeType = this.typeRepo.findDataTypeById(DataTypeKind.LNodeType, id) as LNodeType;
    if (!dataType) throw new Error(`Unable to find logical node type with id ${id}`);

    const typeSpecification= this.typeSpecificationService.getLNodeTypeSpecification(dataType.lnClass);
    if (!typeSpecification) throw new Error(`Unable to find specification types for logical node type with id ${id}`);

    const objRefDetails: ObjectReferenceDetails[] = this.specsToObjectReferenceDetails(typeSpecification, dataType.children);

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

  async createOrUpdateType(data: LNodeTypeUpdate): Promise<boolean> {
    if (!data) throw new Error('No data provided');
    if (!data.id) throw new Error('No id provided');
    if (!data.lnClass) throw new Error('No lnClass provided');

    const typeSpecification = this.typeSpecificationService.getLNodeTypeSpecification(data.lnClass);
    if (!typeSpecification){
      throw new Error(`Unable to find specification types for logical node type`);
    }


    const configuredObjRefDetails = this.specsToObjectReferenceDetails(typeSpecification, data.children)
      .filter(obj => obj.meta.isConfigured);

    const node: LNodeType = { id: data.id, lnClass: data.lnClass, children: configuredObjRefDetails };
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
    const existingType = this.typeRepo.findDataTypeById(DataTypeKind.LNodeType, id);
    if (!existingType) {
      throw new Error(`Unable to find logical node type with id ${id}`);
    }
    const referencedTypes = this.typeRepo.findReferencedTypesById(DataTypeKind.LNodeType, id, childNameFilter);
    return Promise.resolve(referencedTypes);
  }

  async getAssignableTypes(lnClass: string, childNameFilter: string[] = []): Promise<DataTypes> {
    const typeSpecification = this.typeSpecificationService.getLNodeTypeSpecification(lnClass);
    if (!typeSpecification) {
      throw new Error(`Unable to find logical node type with id ${lnClass}`);
    }

    const cdcs = typeSpecification.filter((c) =>
            !childNameFilter ||
            childNameFilter.length === 0 ||
            childNameFilter.includes(c.name)
        )
        .map((c) => c.requiredRefType)
        .filter(Boolean) ?? [];

    const uniqueCdcs = [...new Set(cdcs)];

    const assignableDOTypes = uniqueCdcs.flatMap((cdc) =>
      this.typeRepo.findAllDataTypesByKind(DataTypeKind.DOType, cdc)
    );

    return Promise.resolve({
      lNodeTypes: [] as LNodeType[],
      dataObjectTypes: assignableDOTypes as DOType[],
      dataAttributeTypes: [] as DAType[],
      enumTypes: [] as EnumType[],
    });
  }

  async getDefaultType(lnClass: string): Promise<LNodeTypeDetailsV2> {
    const typeSpecification =
      this.typeSpecificationService.getLNodeTypeSpecification(lnClass);
    if (!typeSpecification)
      throw new Error(
        `Unable to find specification types for logical node type`
      );

    const children: ObjectReferenceDetails[] = this.specsToObjectReferenceDetails(typeSpecification, []);

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

  private specsToObjectReferenceDetails(typeSpecification: ObjectSpecification[], references: SimpleReference[]): ObjectReferenceDetails[] {
    return typeSpecification.map(spec => {
      const existingRefObj = references.find(objRef => objRef.name === spec.name);
      return {
        name: spec.name,
        tagName: spec.tagName,
        typeRef: existingRefObj?.typeRef,
        attributes: spec.attributes,
        meta: {
          isMandatory: !!spec.isMandatory,
          isConfigured: !!spec.isMandatory || !!existingRefObj,
          isReferencable: !!spec.requiredRefType,
          requiredRefType: spec.requiredRefType,
        }
      } as ObjectReferenceDetails;
    });
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
