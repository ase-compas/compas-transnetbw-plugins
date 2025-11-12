export interface Option {
  id: string;
  description?: string;
}

export interface ChangeEventDetails {
  id: string;
  selectedItem: Option | null;
  createFromDefault: boolean;
  valid: boolean;
}
