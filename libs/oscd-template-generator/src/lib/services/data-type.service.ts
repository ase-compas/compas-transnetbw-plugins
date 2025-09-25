import {
  DataTypeKind,
  type DataTypeMap,
  type DataTypes,
  type DAType,
  type DOType,
  type EnumType,
  type LNodeType,
  type ObjectReferenceDetails,
  type ObjectSpecification,
  type SimpleReference,
  type TypeOption
} from '../domain';
import { type IDataTypeRepository } from '../repositories';
import { type ITypeSpecificationService } from './type-specification.service';
import { lnClassDescriptions } from '../data/lnClassDescriptions';
import { cdcDescriptions } from '../data/cdcDescriptions';

/**
 * Defines operations for working with data types and their specifications.
 *
 * The `IDataTypeService` provides methods to:
 * - Resolve object references and enrich them with metadata from specifications.
 * - Retrieve configured and default reference details.
 * - Query referenced and assignable types for a given type kind and instance.
 */
export interface IDataTypeService {
  /**
   * Retrieves detailed reference information (metadata from specification) for a set of object references of a specific type kind and instance type.
   * References are set to isConfigured = true and if available the typeRef.
   * @param typeKind The kind of data type (e.g., LNodeType, DOType, etc.)
   * @param instanceType The instance type identifier.
   * @param reference Array of simple references to resolve.
   * @returns Promise resolving to an array of ObjectReferenceDetails.
   */
  getObjectReferenceDetails(
    typeKind: DataTypeKind,
    instanceType: string,
    reference: SimpleReference[]
  ): Promise<ObjectReferenceDetails[]>;

  /**
   * Retrieves default reference details (metadata from specification) for all references of a specific type kind and instance type.
   * @param typeKind The kind of data type.
   * @param instanceType The instance type identifier.
   * @returns Promise resolving to an array of ObjectReferenceDetails representing defaults.
   */
  getDefaultObjectReferenceDetails(
    typeKind: DataTypeKind,
    instanceType: string
  ): Promise<ObjectReferenceDetails[]>;

  /**
   * Retrieves reference details for configured references of a specific type kind and instance type.
   * @param typeKind The kind of data type.
   * @param instanceType The instance type identifier.
   * @param references Array of references to resolve.
   * @returns Promise resolving to an array of ObjectReferenceDetails for configured references.
   */
  getConfiguredObjectReferenceDetails(
    typeKind: DataTypeKind,
    instanceType: string,
    references: SimpleReference[]
  ): Promise<ObjectReferenceDetails[]>;

  /**
   * Retrieves all referenced types for a given type kind and type ID, optionally filtered by child names.
   * @param typeKind The kind of data type.
   * @param typeId The identifier of the type.
   * @param childNameFilter Optional array of child names to filter results.
   * @returns Promise resolving to DataTypes containing referenced types.
   */
  getReferencedTypes(
    typeKind: DataTypeKind,
    typeId: string,
    childNameFilter?: string[]
  ): Promise<DataTypes>;

  /**
   * Retrieves all assignable types for a given type kind and instance type, optionally filtered by child names.
   * @param typeKind The kind of data type.
   * @param instanceType The instance type identifier.
   * @param childNameFilter Optional array of child names to filter results.
   * @returns Promise resolving to DataTypes containing assignable types.
   */
  getAssignableTypes(
    typeKind: DataTypeKind,
    instanceType: string,
    childNameFilter?: string[]
  ): Promise<DataTypes>;

  /**
   * Retrieves type options for a given data type kind, including if available.
   * @param typeKind The kind of data type.
   * @returns Promise resolving to an array of TypeOption objects.
   */
  getTypeOptions(typeKind: DataTypeKind): Promise<TypeOption[]>;
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

    const getTypes = <K extends DataTypeKind>(kind: K): DataTypeMap[K][] => {
      const specificType = Array.from(objectTypeByTypeKind.get(kind) ?? []).flatMap(type =>
        this.typeRepo.findAllDataTypesByKind(kind, type));

      const unknownTypes = objectTypeByTypeKind.has(kind) ? this.typeRepo.findAllDataTypesWithoutInstanceType(kind) : [];

      return [...specificType, ...unknownTypes];
    }

    return {
      lNodeTypes: getTypes(DataTypeKind.LNodeType) as LNodeType[],
      dataObjectTypes: getTypes(DataTypeKind.DOType) as DOType[],
      dataAttributeTypes: getTypes(DataTypeKind.DAType) as DAType[],
      enumTypes: getTypes(DataTypeKind.EnumType) as EnumType[],
    };
  }

  getTypeOptions(typeKind: DataTypeKind): Promise<TypeOption[]> {
   const typeSpecs = this.typeSpecificationService.getSpecificationsForType(typeKind);
    const options: TypeOption[] = Object.keys(typeSpecs).map(typeSpec => {
      let description = '';
      if (typeKind === DataTypeKind.LNodeType) {
        description = lnClassDescriptions.find(i => i.lnClass === typeSpec)?.description ?? '';
      } else if (typeKind === DataTypeKind.DOType) {
        description = cdcDescriptions.find(i => i.name === typeSpec)?.description ?? '';
      }
      return { id: typeSpec, description: description };
    });

    return Promise.resolve(options);
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
