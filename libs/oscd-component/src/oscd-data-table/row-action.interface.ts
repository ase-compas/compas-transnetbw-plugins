export interface RowAction {
  icon: string;
  callback: (row: any) => void;
  disabled: (row: any) => boolean;
  tooltip?: string;
  ariaLabel?: string;
  name?: string;
  action?: (row: any) => void;
  iconComponent?: any;
  iconStyles?: string;
}
