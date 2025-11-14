import {
  DataTypeKind, type DataTypes,
  type ObjectReferenceDetails,
  type SimpleReference, type TypeOption
} from '../../domain';

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

  /**
   * Sets a type as default type that can be then used for applying this default.
   *
   * It stores all referenced types as well.
   *
   * @param typeKind type kind  of the root type to set as default
   * @param id type of the root type to set as default
   */
  setDefaultType(typeKind: DataTypeKind,  id: string): Promise<void>;

  /**
   * Applies the default type to the specified object reference of a data type.
   * @param typeKind
   * @param id
   * @param name
   * @return root-id of the applied default type
   */
  applyDefaultType(typeKind: DataTypeKind, id: string, name: string): Promise<string>;

  /**
   * Inserts all types of the default type into the repository.
   * @param typeKind
   * @param instanceType
   * @param rootId
   */
  createDefaultType(typeKind: DataTypeKind, instanceType: string, rootId?: string): Promise<void>;
}

