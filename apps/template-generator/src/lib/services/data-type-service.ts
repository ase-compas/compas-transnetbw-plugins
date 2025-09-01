import { DataTypeKind, DataTypes, ObjectReferenceDetails, SimpleReference } from '../domain/core.model';
import { ObjectSpecification } from '../domain/type-specification.model';
import { IDataTypeRepository } from '../repositories/data-type.repository';
import { ITypeSpecificationService } from './type-specification.service';

export interface IDataTypeService {
  getObjectReferenceDetails(
    typeKind: DataTypeKind,
    instanceType: string,
    reference: SimpleReference[]
  ): Promise<ObjectReferenceDetails[]>;
  getDefaultObjectReferenceDetails(
    typeKind: DataTypeKind,
    instanceType: string
  ): Promise<ObjectReferenceDetails[]>;
  getConfiguredObjectReferenceDetails(
    typeKind: DataTypeKind,
    instanceType: string,
    references: SimpleReference[]
  ): Promise<ObjectReferenceDetails[]>;
  getReferencedTypes(
    typeKind: DataTypeKind,
    typeId: string,
    childNameFilter?: string[]
  ): Promise<DataTypes>;
  getAssignableTypes(
    typeKind: DataTypeKind,
    instanceType: string,
    childNameFilter?: string[]
  ): Promise<DataTypes>;
}

function groupObjectTypeByTypeKind(requiredSpecs: ObjectSpecification[]): Map<DataTypeKind, Set<string>> {
  return requiredSpecs.reduce((acc, spec) => {
    if (!spec.refTypeKind || !spec.objectType) return acc;

    if (!acc.has(spec.refTypeKind)) {
      acc.set(spec.refTypeKind, new Set<string>());
    }

    acc.get(spec.refTypeKind)?.add(spec.objectType);

    return acc;
  }, new Map<DataTypeKind, Set<string>>());
}

export class DataTypeService implements IDataTypeService {

  constructor(
    public typeRepo: IDataTypeRepository,
    public typeSpecificationService: ITypeSpecificationService) {}



  async getObjectReferenceDetails(typeKind: DataTypeKind, instanceType: string, reference: SimpleReference[]): Promise<ObjectReferenceDetails[]> {
    const typeSpec = this.typeSpecificationService.getTypeSpecification(typeKind, instanceType)
    if(!typeSpec) throw new Error(`No type specification found for type ${typeKind} with id ${instanceType}`);
    return this.specsToObjectReferenceDetails(typeSpec, reference) as ObjectReferenceDetails[];
  }

  async getConfiguredObjectReferenceDetails(typeKind: DataTypeKind, instanceType: string, references: SimpleReference[]): Promise<ObjectReferenceDetails[]> {
    const allDetails = await this.getObjectReferenceDetails(typeKind, instanceType, references);
    return allDetails.filter(detail => detail.meta.isConfigured) as ObjectReferenceDetails[];
  }

  async getDefaultObjectReferenceDetails(typeKind: DataTypeKind, instanceType: string): Promise<ObjectReferenceDetails[]> {
    return this.getObjectReferenceDetails(typeKind, instanceType, []);
  }

  async getReferencedTypes(typeKind: DataTypeKind, typeId: string, childNameFilter?: string[]): Promise<DataTypes> {
    const existingType = this.typeRepo.findDataTypeById(typeKind, typeId);
    if (!existingType) {
      throw new Error(`Unable to find data type of kind ${typeKind} with id ${typeId}`);
    }
    const referencedTypes = this.typeRepo.findReferencedTypesById(typeKind, typeId, childNameFilter);
    return Promise.resolve(referencedTypes);
  }

  async getAssignableTypes(typeKind: DataTypeKind, instanceType: string, childNameFilter?: string[]): Promise<DataTypes> {
    const typeSpec = this.typeSpecificationService.getTypeSpecification(typeKind, instanceType);
    if(!typeSpec) throw new Error(`No type specification found for type ${typeKind} with id ${instanceType}`);

    const requiredSpecs = typeSpec
      .filter(spec => spec.requiresReference && (childNameFilter.length === 0 || childNameFilter.includes(spec.name))) // only those that require a reference and are in the filter
      .filter(spec => spec.requiresReference && !!spec.refTypeKind); // only those that require a reference and have a refTypeKind

    const objectTypeByTypeKind = groupObjectTypeByTypeKind(requiredSpecs);

    return {
      lNodeTypes: Array.from(objectTypeByTypeKind.get(DataTypeKind.LNodeType) ?? []).flatMap(ot =>
        this.typeRepo.findAllDataTypesByKind(DataTypeKind.LNodeType, ot)
      ),
      dataObjectTypes: Array.from(objectTypeByTypeKind.get(DataTypeKind.DOType) ?? []).flatMap(ot =>
        this.typeRepo.findAllDataTypesByKind(DataTypeKind.DOType, ot)
      ),
      dataAttributeTypes: objectTypeByTypeKind.has(DataTypeKind.DAType)
        ? this.typeRepo.findAllDataTypesByKind(DataTypeKind.DAType)
        : [],
      enumTypes: objectTypeByTypeKind.has(DataTypeKind.EnumType)
        ? this.typeRepo.findAllDataTypesByKind(DataTypeKind.EnumType)
        : []
    };
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
          requiresReference: !!spec.requiresReference,
          objectType: spec.objectType,
          refTypeKind: spec.refTypeKind
        }
      } as ObjectReferenceDetails;
    });
  }

}
