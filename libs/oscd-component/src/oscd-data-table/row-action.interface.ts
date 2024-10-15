export interface RowAction {
  name: string;
  icon: string;
  action: (row: any) => void;
}
