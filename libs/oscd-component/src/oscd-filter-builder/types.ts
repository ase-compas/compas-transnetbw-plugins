export type FilterType = 'text' | 'number' | 'date' | 'datetime' | 'select';

export interface FilterOption {
    label: string;
    value: any;
}

export interface FilterDefinition<T = any> {
    key: keyof T;
    type: FilterType;
    label: string;
    placeholder?: string;
    options?: FilterOption[];
    value?: any;
}

