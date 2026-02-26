export type XPathValidation = {
  title: string;
  description: string;
  context: string;
  assert: string;
  message?: string;

  processId: string;
  pluginId: string;

  /** Persisted UI builder state — used to pre-fill the dialog when editing. */
  ruleUi?: Record<string, unknown>;
};
