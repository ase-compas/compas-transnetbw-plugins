import { DataTypeKind } from './core.model';

export interface DefaultKey {
  kind: DataTypeKind,
  instanceType: string,
}

export interface DefaultType {
  id: string;
  kind: DataTypeKind,
  instanceType?: string;
  children: DefaultReference[];
}

export interface DefaultReference {
  name: string;
  typeRef?: string;
}

// DefaultConfig is the structure for default configurations.
export interface DefaultConfig {
  // Version identifier, updates when rootType or referencedTypes changed
  version?: string;
  key: DefaultKey
  description?: string;
  rootType: DefaultType;
  referencedTypes: DefaultType[];
}
