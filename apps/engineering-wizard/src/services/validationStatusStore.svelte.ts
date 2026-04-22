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

export const pluginValidationStatuses = $state<{ statuses: Record<string, RuleResult[]> }>({
  statuses: {},
});

/** Build a composite key that scopes validation results to a specific process + plugin. */
export function validationKey(processId: string, pluginId: string): string {
  return `${processId}:${pluginId}`;
}

export function setPluginValidationStatus(processId: string, pluginId: string, rules: RuleResult[]): void {
  pluginValidationStatuses.statuses[validationKey(processId, pluginId)] = rules;
}

/** Get validation results for a specific plugin within a process. */
export function getPluginValidationStatus(processId: string, pluginId: string): RuleResult[] {
  return pluginValidationStatuses.statuses[validationKey(processId, pluginId)] ?? [];
}
