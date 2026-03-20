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

export function setPluginValidationStatus(pluginId: string, rules: RuleResult[]): void {
  pluginValidationStatuses.statuses[pluginId] = rules;
}
