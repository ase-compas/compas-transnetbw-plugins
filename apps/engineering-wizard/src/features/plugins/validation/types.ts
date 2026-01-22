export type ValidationSeverity = 'error' | 'warning' | 'info';

export type ValidationEntry = {
  severity: ValidationSeverity;
  title: string;
  context: string;
  assert: string;
  message: string;

  processId: string;
  pluginId: string;
};
