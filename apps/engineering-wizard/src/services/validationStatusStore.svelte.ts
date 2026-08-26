import type { Plugin } from '@oscd-transnet-plugins/shared';
import type { ValidationError } from './validationService';
import { createKeyedAsyncStore } from '../utils/keyed-async-store.svelte';

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

/** Internal, low-level state: one entry per "processId:pluginId" pair. */
const store = createKeyedAsyncStore<RuleResult[]>();

function key(processId: string, pluginId: string): string {
  return `${processId}:${pluginId}`;
}

/** Call when a validation run starts for a plugin. */
export function beginPluginValidation(processId: string, pluginId: string): void {
  store.begin(key(processId, pluginId));
}

/** Call when a validation run finishes (successfully or not) with its results. */
export function completePluginValidation(processId: string, pluginId: string, rules: RuleResult[]): void {
  store.succeed(key(processId, pluginId), rules);
}

export function getPluginValidationView(processId: string, plugin: Plugin): PluginValidationView {
  const hasValidations = (plugin.validations ?? []).some((v) => v.processId === processId);
  const entry = store.get(key(processId, plugin.id));
  const rules = entry.data ?? [];

  const erroredRules = rules.filter((r) => r.rejected);
  const failedRules = rules.filter((r) => !r.passed && !r.rejected);
  const passedRules = rules.filter((r) => r.passed);

  // Spinner only before the first result. Re-validation keeps the previous
  // pass/fail/error; `begin()` already preserves `entry.data`.
  const loading = hasValidations && entry.data === undefined;

  let state: PluginValidationState;
  if (!hasValidations) state = 'no-validations';
  else if (loading) state = 'loading';
  else if (failedRules.length > 0) state = 'failed';
  else if (erroredRules.length > 0) state = 'error';
  else state = 'passed';

  return { state, rules, failedRules, passedRules, erroredRules };
}
