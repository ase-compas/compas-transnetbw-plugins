export interface InputType {
  id: number;
  type: 'string' | 'select' | 'timepicker';
  validatorFn: () => boolean;
  options?: { label: string; value: string }[];
}
