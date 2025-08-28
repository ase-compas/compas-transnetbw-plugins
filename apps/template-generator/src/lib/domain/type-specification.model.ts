
export interface ObjectSpecification {
  name: string;
  tagName: string;
  isMandatory: boolean;
  requiredRefType?: string;
  attributes?: Record<string, string>;
}

export type LNodeTypeSpecification = ObjectSpecification[]
