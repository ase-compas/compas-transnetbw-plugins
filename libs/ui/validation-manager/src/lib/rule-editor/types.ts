import type { RuleDraft } from '@oscd-transnet-plugins/api-compas-validation-library';

/** A single violation reported while test-running a rule. */
export interface RuleTestError {
  ruleName: string;
  message: string;
  xpath: string;
  severity: string;
  lineNumber: number | null;
}

/** Outcome of test-running a single draft rule against a document. */
export interface RuleTestResult {
  valid: boolean;
  errors: RuleTestError[];
}

/**
 * Runs an unsaved draft against an SCL document.
 *
 * Supplied by the host application because the validation service endpoint and
 * its authentication differ per plugin. Omitting it disables the test step.
 */
export type RuleTestRunner = (
  draft: RuleDraft,
  sclContent: string,
) => Promise<RuleTestResult>;

/**
 * Live navigation state of the wizard, published so a host application can
 * render the step buttons in its own dialog footer.
 */
export interface RuleEditorController {
  isAtFirstStep: boolean;
  isAtLastStep: boolean;
  isNextDisabled: boolean;
  isValid: boolean;
  /** True when an existing rule is being edited rather than created. */
  isEditing: boolean;
  goToPreviousStep(): void;
  goToNextStep(): void;
  save(): Promise<void>;
}
