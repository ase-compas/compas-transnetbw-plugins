import {
  type DataType,
  DataTypeKind,
  type DataTypeMap,
  type DataTypes,
  type DAType,
  type DOType,
  type EnumType,
  type LNodeType,
  type ObjectReferenceDetails,
  type SimpleReference,
  type TypeOption
} from '../../domain';
import { type IDataTypeRepository } from '../../repositories';
import { type ITypeSpecificationService } from '../type-specification.service';
import { lnClassDescriptions } from '../../data/lnClassDescriptions';
import { cdcDescriptions } from '../../data/cdcDescriptions';
import type { DefaultConfig, DefaultKey, DefaultType } from '../../domain/default.model';
import type { IDefaultService } from '../default.service';
import { DefaultTypeMapper } from '../../mappers/default-type.mapper';
import { MAX_ID_LENGTH } from '../../constants';
import type { IDataTypeService } from './data-type.service.interfance';
import { groupObjectTypeByTypeKind,
  specsToObjectReferenceDetails } from './data-type.utils';

type DataTypeWithKind = { kind: DataTypeKind; dataType: LNodeType | DOType | DAType | EnumType };

export class DataTypeService implements IDataTypeService {

  constructor(
    public typeRepo: IDataTypeRepository,
    public typeSpecificationService: ITypeSpecificationService,
    public defaultService: IDefaultService,
    ) {}

  async getObjectReferenceDetails(typeKind: DataTypeKind, instanceType: string, reference: SimpleReference[]): Promise<ObjectReferenceDetails[]> {
    const typeSpec = this.typeSpecificationService.getTypeSpecification(typeKind, instanceType)
    if(!typeSpec) throw new Error(`No type specification found for type ${typeKind} with instanceType ${instanceType}`);
    return specsToObjectReferenceDetails(typeSpec, reference) as ObjectReferenceDetails[];
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
    if(!typeSpec) throw new Error(`No type specification found for type ${typeKind} with instanceType ${instanceType}`);

    const requiredSpecs = typeSpec
      .filter(spec => spec.requiresReference && (childNameFilter.length === 0 || childNameFilter.includes(spec.name))) // only those that require a reference and are in the filter
      .filter(spec => spec.requiresReference && !!spec.refTypeKind); // only those that require a reference and have a refTypeKind

    const objectTypeByTypeKind = groupObjectTypeByTypeKind(requiredSpecs);

    const getTypes = <K extends DataTypeKind>(kind: K): DataTypeMap[K][] => {
      // if instanceType is parametrized (objectType is null), load all data types of that kind
      // otherwise only those that match the required object types
      // always include those without instanceType as well
      if(objectTypeByTypeKind.get(kind)?.has(null)) {
        return this.typeRepo.findAllDataTypesByKind(kind);
      }

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

  getInstanceType(typeKind: DataTypeKind, id: string): string | undefined {
    const type = this.typeRepo.findDataTypeById(typeKind, id);
    if (!type) return undefined;
    if (typeKind === DataTypeKind.LNodeType) {
      return (type as LNodeType).lnClass;
    } else if (typeKind === DataTypeKind.DOType) {
      return (type as DOType).cdc;
    } else if (typeKind === DataTypeKind.DAType) {
      return (type as DAType).instanceType;
    } else if (typeKind === DataTypeKind.EnumType) {
      return (type as EnumType).instanceType;
    }
  }

  async setDefaultType(typeKind: DataTypeKind, id: string): Promise<void> {
    const rootType = this.typeRepo.findDataTypeById(typeKind, id);
    const referencedTypes = await this.getReferencedTypes(typeKind, id);

    const defaultConfig = this.toDefaultConfig(rootType, typeKind, referencedTypes);
    const defaultConfigWithVersion = await this.defaultService.setDefault(defaultConfig);
    if (!rootType.privates) rootType.privates = {};
    rootType.privates.defaultVersion = defaultConfigWithVersion.version;
    this.typeRepo.upsertDataType(typeKind, rootType);
  }

  async applyDefaultType(typeKind: DataTypeKind, id: string, name: string): Promise<string> {
    // Load the current type and its specification
    const dataType = this.typeRepo.findDataTypeById(typeKind, id);
    if (!dataType) throw new Error(`Data type ${typeKind} with id ${id} not found`);

    const instanceType = this.getInstanceType(typeKind, id);
    if (!instanceType) throw new Error(`Cannot determine instance type for ${typeKind} with id ${id}`);

    // Get object reference details to get expected reference type and instance
    const objectRefs = await this.getObjectReferenceDetails(typeKind, instanceType, dataType.children);

    // Locate the target object reference
    const targetRef = objectRefs.find(ref => ref.name === name);
    if (!targetRef) {
      throw new Error(`Reference '${name}' not found on ${typeKind} ${id}`);
    }

    // Apply default only works for references that require a reference and have a defined type
    if (!targetRef.meta.requiresReference || !targetRef.meta.refTypeKind || !targetRef.meta.objectType) {
      throw new Error(`Reference '${name}' on ${typeKind} ${id} does not require a valid reference`);
    }

    // Retrieve the stored default for that reference type
    const defaultKey: DefaultKey = {
      kind: targetRef.meta.refTypeKind,
      instanceType: targetRef.meta.objectType
    };

    const defaultType = await this.defaultService.getDefault(defaultKey);
    if (!defaultType) {
      throw new Error(`No default type configured for kind=${defaultKey.kind}, instanceType=${defaultKey.instanceType}`);
    }

    const existingDefault = this.getExistingDefaultTypeForKindAndInstance(defaultKey.kind, defaultKey.instanceType);

    let creates: { kind: DataTypeKind; dataType: LNodeType | DOType | DAType | EnumType }[] = [];
    const updates: { kind: DataTypeKind; dataType: LNodeType | DOType | DAType | EnumType }[] = [];
    let refId: string;

    const isSameVersion =
      existingDefault &&
      existingDefault.id === defaultType.rootType.id &&
      existingDefault.privates?.defaultVersion === defaultType.version;

    if (isSameVersion) {
        // If the existing default type matches the stored default (by id and version), reuse it
        // Update the target object reference to point to the existing default root type
        refId = existingDefault.id;
        // no need to insert defaults, just update existing reference
      } else {
        // There is a newer version of the default, so we need to update the existing default type
        // to the new version by replacing its content with the new default root type and referenced types
        // Delete the private defaultVersion of the existing type and update
        if(existingDefault) {
          delete existingDefault.privates?.defaultVersion;
          updates.push({ kind: defaultType.rootType.kind, dataType: existingDefault });
        }

        const defaultDataTypes = await this.defaultConfigToDataTypes(defaultType);
        creates = [defaultDataTypes.root, ...defaultDataTypes.references];
        refId = defaultType.rootType.id;
    }

    // Update the target object reference id to the new default type id
    dataType.children = await this.getConfiguredObjectReferenceDetails(typeKind, instanceType, [...dataType.children.filter(c => c.name !== name), { name, typeRef: refId }]);
    updates.push({ kind: typeKind, dataType: dataType });

    //  Apply all changes atomically (dispatch event once)
    this.typeRepo.applyDataTypeChanges({
      creates,
      updates,
    });

    return refId
  }

  async createDefaultType(typeKind: DataTypeKind, instanceType: string, rootId?: string): Promise<void> {
    const defaultKey: DefaultKey = { kind: typeKind, instanceType };
    const existingDefault = await this.defaultService.getDefault(defaultKey);
    if (!existingDefault) {
      throw new Error(`No default type configured for kind=${typeKind}, instanceType=${instanceType}`);
    }
    // Create a default types and resolve ID conflicts
    const defaultDataTypes = await this.defaultConfigToDataTypes(existingDefault);

    if (rootId) {
      // Check for ID conflicts
      const idConflictInDefaults = defaultDataTypes.references.some(dt => dt.dataType.id === rootId);
      const idConflictInRepo = this.typeRepo.findDataTypeById(typeKind, rootId);
      if (idConflictInDefaults || idConflictInRepo) {
        throw new Error(`The provided rootId '${rootId}' conflicts with existing type IDs.`);
      }

      // Override the root ID if provided
      defaultDataTypes.root.dataType.id = rootId;
    }

    // Write all types to the repository
    this.typeRepo.applyDataTypeChanges({creates: [defaultDataTypes.root, ...defaultDataTypes.references]})
  }

  /**
   * Converts a DefaultConfig into DataTypeWithKind objects for root and referenced types.
   * Resolves ID conflicts before conversion.
   * @param defaultConfig default config
   */
  private async defaultConfigToDataTypes(defaultConfig: DefaultConfig): Promise<{ root: DataTypeWithKind; references: DataTypeWithKind[] }> {
    // Update the target object reference to point to the existing default root type
    this.resolveDefaultTypeIDConflicts(defaultConfig.rootType, defaultConfig.referencedTypes);

    // the rootDefaultCreate should have te prop with kind and dataType
    const rootDefault = await this.defaultToDataType(defaultConfig.rootType);
    const root = { kind: defaultConfig.rootType.kind, dataType: rootDefault };
    root.dataType.privates = { defaultVersion: defaultConfig.version }; // sets the new default version
    // set the private defaultVersion
    const referencedDefaults = await Promise.all(
      defaultConfig.referencedTypes.map(async t => ({
        kind: t.kind,
        dataType: await this.defaultToDataType(t),
      }))
    );
    return { root, references: referencedDefaults };
  }

  /**
   * Checks if there is an existing default type for the given kind and instance type.
   * @param kind kind of the data type
   * @param instanceType instance type of the data type
   */
  private getExistingDefaultTypeForKindAndInstance(kind: DataTypeKind, instanceType: string): LNodeType | DOType | DAType | EnumType | undefined {
    const types = this.typeRepo.findAllDataTypesByKind(kind, instanceType);
    return types.find(t => t?.privates?.defaultVersion !== undefined);
  }

  private resolveDefaultTypeIDConflicts(rootType: DefaultType, referencedTypes: DefaultType[]): void {
    const oldToNewIdMap = new Map<string, string>();

    // Combine all types to check
    const allTypes = [...referencedTypes, rootType];

    for (const type of allTypes) {
      const existing = this.typeRepo.findDataTypeById(type.kind, type.id);

      if (existing) {
        // Conflict detected — need new ID
        const baseId = type.id.slice(0, MAX_ID_LENGTH); // truncate if too long
        let newId = baseId;
        let counter = 1;

        // Ensure uniqueness for this kind
        while (this.typeRepo.findDataTypeById(type.kind, newId)) {
          // Remove any existing _D[number] suffix before adding a new one
          const baseIdWithoutSuffix = baseId.replace(/_D\d+$/, '');
          const suffix = `_D${counter++}`;
          const truncatedBase = baseIdWithoutSuffix.slice(0, MAX_ID_LENGTH - suffix.length);
          newId = truncatedBase + suffix;
        }

        // Record the remapping
        oldToNewIdMap.set(type.id, newId);
        type.id = newId;
      }
    }

    // Update all internal references in referenced types
    for (const type of referencedTypes) {
      for (const child of type.children) {
        if (child.typeRef && oldToNewIdMap.has(child.typeRef)) {
          child.typeRef = oldToNewIdMap.get(child.typeRef);
        }
      }
    }

    // Update references in root type as well
    for (const child of rootType.children) {
      if (child.typeRef && oldToNewIdMap.has(child.typeRef)) {
        child.typeRef = oldToNewIdMap.get(child.typeRef);
      }
    }
  }

  private async defaultToDataType(defaultType: DefaultType): Promise<LNodeType | DOType | DAType | EnumType> {
    const objRefDetails = await this.getConfiguredObjectReferenceDetails(defaultType.kind, defaultType.instanceType, defaultType.children);
    return DefaultTypeMapper.mapDefaultTypeToDataType(defaultType, objRefDetails)
  }

  private toDefaultConfig(rootType: DataType, typeKind: DataTypeKind, referencedTypes: DataTypes): DefaultConfig {
    const rootDefaultType = DefaultTypeMapper.mapDataTypeToDefaultType(rootType, typeKind);
    const referencedDefaultTypes = DefaultTypeMapper.mapDataTypesToDefaultTypes(referencedTypes);

    return {
      key: { kind: rootDefaultType.kind, instanceType: rootDefaultType.instanceType },
      rootType: rootDefaultType,
      referencedTypes: referencedDefaultTypes
    }
  }
}
