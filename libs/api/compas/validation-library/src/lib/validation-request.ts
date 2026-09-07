import {
  ValidationRuleKind,
  type ResolvedValidationRule,
  type SeverityLevel,
} from '../generated/models';
import type { RuleDraft } from './management';

/**
 * Wire format of a single rule as accepted by the compas-validation-service
 * XPath endpoint (`rulesJson` payload).
 *
 * `name`, `title`, `message` and `severity` are optional on the service side;
 * when omitted it falls back to its legacy defaults.
 */
export interface XPathValidationServiceRule {
  name: string;
  title: string;
  message?: string;
  severity: SeverityLevel;
  context: string;
  assertion: string;
}

/**
 * Maps resolved rules to the validation-service payload.
 *
 * Non-XPath rules are skipped rather than throwing, so a policy that mixes rule
 * kinds can still be partially executed. Use `supportedRuleKinds` during
 * resolution if you need those rules reported as problems instead.
 */
export function toXPathValidationServiceRules(
  rules: readonly ResolvedValidationRule[],
): XPathValidationServiceRule[] {
  return rules
    .filter((rule) => rule.kind === ValidationRuleKind.Xpath)
    .map((rule) => ({
      name: rule.name,
      title: rule.title,
      ...(rule.message !== undefined ? { message: rule.message } : {}),
      severity: rule.severity,
      context: rule.definition.context,
      assertion: rule.definition.assertion,
    }));
}

/** Serialises resolved rules into the `rulesJson` string the service expects. */
export function toRulesJson(rules: readonly ResolvedValidationRule[]): string {
  return JSON.stringify(toXPathValidationServiceRules(rules));
}

/**
 * Maps an *unsaved* editor draft onto the validation-service payload.
 *
 * Lets the rule editor test-run a rule before it has ever been published, so
 * the draft has no resolved name yet and falls back to its title.
 */
export function draftToServiceRule(draft: RuleDraft): XPathValidationServiceRule {
  return {
    name: draft.name ?? draft.title,
    title: draft.title,
    ...(draft.message ? { message: draft.message } : {}),
    severity: draft.severity,
    context: draft.context,
    assertion: draft.assertion,
  };
}
