import { nsd72, nsd73, nsd74, nsd7420 } from '../../../../libs/oscd-template-generator/src/lib/data/nsdData'
import { TypeKind } from './model';
import { NsdParser } from './nsd-parser';

/**
 * Represents a definition from an NSD file for a logical node, data object, or attribute.
 */
export interface NsdTypeDefinition {
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
  refTypeKind?: TypeKind;

  /** Underlying type for enumerations (e.g. BehaviorModelKind for ENC) */
  underlyingType?: string;

  /** Additional metadata attributes. */
  attributes?: Record<string, string>;
}

/**
 * Lookup table for NSD schema definitions: TypeKind -> CDC -> NSD element -> definition
 */
export type NsdSchemaTable = Record<TypeKind, Record<string, Record<string, NsdTypeDefinition>>>;

/**
 * Registry for parsed NSD schema definitions, supporting lookup by type and instance.
 */

export class NsdSchemaRegistry {
    private schemaTable: NsdSchemaTable;

    constructor() {
        // Loads and merges all NSD files into a single schema table
        this.schemaTable = new NsdParser().parseFromStrings([nsd72, nsd73, nsd74, nsd7420]);
    }

    getTypeDefinition(kind: TypeKind, instanceType: string): Record<string, NsdTypeDefinition> | null {
        const kindTable = this.schemaTable[kind];
        if (!kindTable) return null;
        const instanceTypeTable = kindTable[instanceType];
        return instanceTypeTable || null;
    }

    listInstanceTypes(kind: TypeKind): string[] {
        const kindTable = this.schemaTable[kind];
        if (!kindTable) {
            return [];
        }

        return Object.keys(kindTable);
    }
}