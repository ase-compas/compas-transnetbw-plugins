export type ChildMetadata = {
  isMandatory: boolean;
  isConfigured: boolean;
  [key: string]: any; // Additional metadata properties can be added as needed
}

export interface BaseType {
  id: string;
}

export interface BaseChild {
  name: string;
  type?: string;
}

