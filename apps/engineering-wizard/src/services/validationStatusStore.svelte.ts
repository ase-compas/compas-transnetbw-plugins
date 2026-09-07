import type { ValidationError } from '@oscd-transnet-plugins/api-compas-validation-service';
import { createKeyedAsyncStore } from '../utils/keyed-async-store.svelte';

export type { ValidationError };

export type RuleResult = {
  name: string;
  title: string;
  description?: string;
  context?: string;
  assertion?: string;
  severity?: string;
  passed: boolean;
  errors: ValidationError[];
  rejected: boolean;
  rejectReason?: string;
};

/** Lifecycle state of a plugin's validation, ready to drive UI directly. */
export type PluginValidationState =
  | 'no-validations'
  | 'loading'
  | 'passed'
  | 'failed'
  | 'error';

export interface PluginValidationView {
  state: PluginValidationState;
  rules: RuleResult[];
  failedRules: RuleResult[];
  passedRules: RuleResult[];
  erroredRules: RuleResult[];
}

/** Internal, low-level state: one entry per "processId:pluginId" pair. */
const store = createKeyedAsyncStore<RuleResult[]>();

/**
 * How many rules the validation library currently holds per plugin.
 *
 * Rules live in the backend now, so this is only known once the process policy
 * has been resolved. `undefined` therefore means "not resolved yet" and is
 * rendered as loading rather than as "no validations".
 */
const ruleCounts = $state<Record<string, number>>({});

function key(processId: string, pluginId: string): string {
  return `${processId}:${pluginId}`;
}

/** Records how many rules a plugin has, as resolved from the process policy. */
export function setPluginRuleCount(
  processId: string,
  pluginId: string,
  count: number,
): void {
  ruleCounts[key(processId, pluginId)] = count;
}

/** Drops all cached rule counts, e.g. when the running process changes. */
export function resetPluginRuleCounts(): void {
  for (const entry of Object.keys(ruleCounts)) delete ruleCounts[entry];
}

/** Call when a validation run starts for a plugin. */
export function beginPluginValidation(processId: string, pluginId: string): void {
  store.begin(key(processId, pluginId));
}

/** Call when a validation run finishes (successfully or not) with its results. */
export function completePluginValidation(
  processId: string,
  pluginId: string,
  rules: RuleResult[],
): void {
  store.succeed(key(processId, pluginId), rules);
}

export function getPluginValidationView(
  processId: string,
  pluginId: string,
): PluginValidationView {
  const entryKey = key(processId, pluginId);
  const ruleCount = ruleCounts[entryKey];
  const entry = store.get(entryKey);
  const rules = entry.data ?? [];

  const erroredRules = rules.filter((r) => r.rejected);
  const failedRules = rules.filter((r) => !r.passed && !r.rejected);
  const passedRules = rules.filter((r) => r.passed);

  // Loading covers "policy not resolved yet", "never evaluated yet" and
  // "currently re-validating".
  const loading =
    ruleCount === undefined ||
    (ruleCount > 0 && (entry.status === 'idle' || entry.status === 'loading'));

  let state: PluginValidationState;
  if (loading) state = 'loading';
  else if (ruleCount === 0) state = 'no-validations';
  else if (failedRules.length > 0) state = 'failed';
  else if (erroredRules.length > 0) state = 'error';
  else state = 'passed';

  return { state, rules, failedRules, passedRules, erroredRules };
}
