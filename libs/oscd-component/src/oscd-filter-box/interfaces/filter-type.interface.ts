import type { InputType } from './input-type.interface';

export interface FilterType {
    id: number;
    label: string;
    inputType: InputType;
    allowedOperations: string[];
}
