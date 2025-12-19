export interface RowAction {
  name: string;
  icon: string;
  tooltip?: string;
  disabled: (row: any) => boolean;
  action: (row: any) => void;
}
