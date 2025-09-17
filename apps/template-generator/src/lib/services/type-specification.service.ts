import {
  LNodeTypeSpecification,
  TypeSpecification,
} from '../domain';
import { DataTypeKind } from '../domain';
import { nsd72, nsd73, nsd74, nsd7420 } from '../../data/nsdData';
import { TypeSpecifications } from '../utils/type-specification-parser/i-type-specification-parser';
import { XMLTypeSpecificationParser } from '../utils/type-specification-parser/xml-type-specification-parser';

export interface ITypeSpecificationService {
  /**
   * Retrieves the type specification for a given data type and ID.
   * @param typeKind The type of data to search for.
   * @param instanceType The ID of type of the data type, e.g. cdc of DataObject Types and lnClass for LNodeTypes.
   * @returns The type specification or null if not found.
   */
  getTypeSpecification(
    typeKind: DataTypeKind,
    instanceType: string
  ): TypeSpecification | null;

  /**
   * Retrieves the LNodeType specification for a given lnClass.
   * @param lnClass The lnClass of the LNodeType.
   * @returns The LNodeType specification or null if not found.
   */
  getLNodeTypeSpecification(lnClass: string): LNodeTypeSpecification | null;

  /**
   * Retrieves the DOType specification for a given cdc.
   * @param cdc common data class
   */
  getDOTypeSpecification?(cdc: string): TypeSpecification | null;

  /**
   * Retrieves all specifications for a given type kind.
   * @param typeKind The type kind.
   */
  getSpecificationsForType(typeKind: DataTypeKind): Record<string, TypeSpecification>;
}

export class NsdSpecificationService implements ITypeSpecificationService {

  private readonly specs: TypeSpecifications;
  private static typeKindToSpecKey = {
    [DataTypeKind.LNodeType]: 'lNodeType',
    [DataTypeKind.DOType]: 'doType',
    [DataTypeKind.DAType]: 'daType',
    [DataTypeKind.EnumType]: 'enumType',
  }

  constructor() {
    this.specs = new XMLTypeSpecificationParser().parseFromStrings([nsd72, nsd73, nsd74, nsd7420])
  }

  getTypeSpecification(typeKind: DataTypeKind, instanceType: string): TypeSpecification | null {
    const specKey = NsdSpecificationService.typeKindToSpecKey[typeKind];
    if (!specKey) return null;

    const typeSpec = this.specs[specKey][instanceType];
    return typeSpec ? Object.values(typeSpec) : null;
  }

  getLNodeTypeSpecification(lnClass: string): LNodeTypeSpecification | null {
    const lNodeSpecs = this.specs.lNodeType[lnClass];
    return lNodeSpecs ? Object.values(lNodeSpecs) : null;
  }

  getSpecificationsForType(typeKind: DataTypeKind): Record<string, TypeSpecification> {
    const specKey = NsdSpecificationService.typeKindToSpecKey[typeKind];
    if (!specKey) return {};

    return this.specs[specKey];
  }
}
