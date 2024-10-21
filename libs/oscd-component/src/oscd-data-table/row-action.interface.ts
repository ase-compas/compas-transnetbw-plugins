export interface RowAction {
  name: string;
  icon: string;
  disabled: (row: any) => boolean;
  action: (row: any) => void;
}
