export type FilterType =
  | 'text'
  | 'number'
  | 'date'
  | 'datetime'
  | 'select'
  | 'multiselect';

export interface FilterOption {
    label: string;
    value: any;
}

export interface FilterDefinition<T = any> {
    key: keyof T;             // unique identifier for the filter
    type: FilterType;         // Display label
    label: string;            // display label
    placeholder?: string;     // placeholder text for input fields
    options?: FilterOption[]; // Required for select / multiselect
    value?: any;              // current value (for multiselect it is an array of the selected values)
}

