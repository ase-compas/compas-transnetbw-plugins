export type PropagatedDetailsConfig = Omit<DetailsConfig, 'propagateToChildren'>;

export interface DetailsConfig {
  includeHeader?: boolean;
  toggleEditModeSwitchDisabled?: boolean;
  defaultTypeFeatureEnabled?: boolean;
  actionsDisabled?: boolean;
  
  propagateToChildren?: PropagatedDetailsConfig;
}