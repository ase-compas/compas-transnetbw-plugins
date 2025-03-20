export interface InputType {
  id: number;
  type: 'string' | 'select' | 'timepicker' | 'datepicker';
  validatorFn: () => boolean;
  options?: { label: string; value: string }[];
}
