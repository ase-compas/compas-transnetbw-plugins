import type { Plugin } from '@oscd-transnet-plugins/shared';
import type { ValidationError } from './validationService';

export type { ValidationError };

export type RuleResult = {
  title: string;
  description?: string;
  context?: string;
  assertion?: string;
  passed: boolean;
  errors: ValidationError[];
  rejected: boolean;
  rejectReason?: string;
};

/** Lifecycle state of a plugin's validation, ready to drive UI directly. */
export type PluginValidationState = 'no-validations' | 'loading' | 'passed' | 'failed' | 'error';

export interface PluginValidationView {
  state: PluginValidationState;
  rules: RuleResult[];
  failedRules: RuleResult[];
  passedRules: RuleResult[];
  erroredRules: RuleResult[];
}

/** One result list per "processId:pluginId". Missing key = not yet validated. */
const results = $state<Record<string, RuleResult[]>>({});

function key(processId: string, pluginId: string): string {
  return `${processId}:${pluginId}`;
}

export function completePluginValidation(processId: string, pluginId: string, rules: RuleResult[]): void {
  results[key(processId, pluginId)] = rules;
}

export function getPluginValidationView(processId: string, plugin: Plugin): PluginValidationView {
  const hasValidations = (plugin.validations ?? []).some((v) => v.processId === processId);
  const rules = results[key(processId, plugin.id)];

  const list = rules ?? [];
  const erroredRules = list.filter((r) => r.rejected);
  const failedRules = list.filter((r) => !r.passed && !r.rejected);
  const passedRules = list.filter((r) => r.passed);

  const loading = hasValidations && rules === undefined;

  let state: PluginValidationState;
  if (!hasValidations) state = 'no-validations';
  else if (loading) state = 'loading';
  else if (failedRules.length > 0) state = 'failed';
  else if (erroredRules.length > 0) state = 'error';
  else state = 'passed';

  return { state, rules: list, failedRules, passedRules, erroredRules };
}
