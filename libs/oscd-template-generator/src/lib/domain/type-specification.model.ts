import { DataTypeKind } from './core.model';

export interface ObjectSpecification {
  /** Identifier of the object, e.g., 'Mod', 'PhyEq', 'Beh'. */
  name: string;

  /** XML/Model tag name, e.g., 'DO', 'DA', 'EnumVal'. */
  tagName: string;

  /** Whether the object is mandatory. */
  isMandatory: boolean;

  /** Whether this object can be referenced by others. */
  requiresReference: boolean;

  /** Base type of the object (e.g., BOOLEAN, INT32, or cdc for DOType). */
  objectType: string;

  /** Reference type kind, required if requiresReference is true. */
  refTypeKind?: DataTypeKind;

  /** Underlying type for enumerations (e.g. BehaviorModelKind for ENC) */
  underlyingType?: string;

  /** Additional metadata attributes. */
  attributes?: Record<string, string>;
}

export type TypeSpecification = ObjectSpecification[]
export type LNodeTypeSpecification = ObjectSpecification[]
