export interface InputType {
  id: number;
  type: string;
  validatorFn: () => boolean;
  options?: { label: string; value: string }[];
}
