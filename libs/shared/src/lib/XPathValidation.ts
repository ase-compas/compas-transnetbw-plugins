export type ValidationSeverity = 'info' | 'warning' | 'error';

export type XPathValidation = {
  severity: ValidationSeverity;
  title: string;
  context: string;
  assert: string;
  message?: string;

  processId: string;
  pluginId: string;
};
