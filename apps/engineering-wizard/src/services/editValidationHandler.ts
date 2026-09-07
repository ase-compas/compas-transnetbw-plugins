import { runningEngineeringProcess } from '../features/processes/stores.svelte';
import { getPluginsForProcess } from '../features/processes/selectors';
import {
  describeValidationError,
  type ValidationError,
} from '@oscd-transnet-plugins/api-compas-validation-service';
import { documentStore } from '../documentStore.svelte';
import {
  beginPluginValidation,
  completePluginValidation,
  setPluginRuleCount,
  resetPluginRuleCounts,
  type RuleResult,
} from './validationStatusStore.svelte';
import { WORKFLOW_STATE_PRIVATE_TYPES } from '../features/workflow/document-state';
import { engineeringWizardValidationLibrary, validationServiceClient } from '../bootstrap';
import type { ResolvedValidationRule } from '@oscd-transnet-plugins/api-compas-validation-library';
import { createSerializedRunner } from '@oscd-transnet-plugins/shared';

const VALIDATION_DEBOUNCE_MS = 1000;

const xmlSerializer = new XMLSerializer();

let debounceTimer: ReturnType<typeof setTimeout> | undefined;

let lastValidatedKey: string | null = null;

/**
 * Cache of resolved rules per plugin. The Engineering Wizard resolves one
 * fixed, global policy (not bound to any process), but a rule set binding
 * is only visible to the resolver when the right plugin scope is given
 * (see `resolvePolicy`'s `pluginId` option), so every plugin still needs
 * its own resolution call.
 */
let cachedRulesByPlugin = new Map<string, ResolvedValidationRule[]>();

/**
 * Drops the cached policy resolution. Must be called whenever rules are
 * created, changed or removed, otherwise edits do not take effect until
 * the process is restarted.
 */
export function invalidateValidationRules(): void {
  cachedRulesByPlugin = new Map();
  lastValidatedKey = null;
  resetPluginRuleCounts();
}

const runEditValidation = createSerializedRunner(validateIfChanged);

/** Call whenever an `oscd-edit-v2` event is received. */
export function scheduleEditValidation(): void {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(
    () => void runEditValidation(),
    VALIDATION_DEBOUNCE_MS,
  );
}

export function cancelPendingValidation(): void {
  clearTimeout(debounceTimer);
}

async function resolveRulesByPlugin(
  pluginIds: string[],
): Promise<Map<string, ResolvedValidationRule[]>> {
  const missing = pluginIds.filter((pluginId) => !cachedRulesByPlugin.has(pluginId));

  await Promise.all(
    missing.map(async (pluginId) => {
      const resolved = await engineeringWizardValidationLibrary.resolvePolicy(pluginId);
      for (const problem of resolved.problems ?? []) {
        console.warn(
          `[engineering-wizard] validation policy problem ${problem.code}: ${problem.message}`,
        );
      }
      cachedRulesByPlugin.set(pluginId, resolved.rules);
    }),
  );

  const rulesByPlugin = new Map<string, ResolvedValidationRule[]>();
  for (const pluginId of pluginIds) {
    rulesByPlugin.set(pluginId, cachedRulesByPlugin.get(pluginId) ?? []);
  }
  return rulesByPlugin;
}

async function validateIfChanged(): Promise<void> {
  const { process } = runningEngineeringProcess;
  if (!process) return;

  const doc = documentStore.doc;
  if (!doc) return;

  const sclContent = xmlSerializer.serializeToString(stripWorkflowBookkeeping(doc));
  const key = `${process.id}:${sclContent}`;
  if (key === lastValidatedKey) return;
  lastValidatedKey = key;

  const plugins = getPluginsForProcess(process);

  let rulesByPlugin: Map<string, ResolvedValidationRule[]>;
  try {
    rulesByPlugin = await resolveRulesByPlugin(
      plugins.map((plugin) => plugin.id),
    );
  } catch (error) {
    // Library unreachable: surface it on every plugin so users don't see
    // a silent "no validations".
    const reason = describeValidationError(error);
    for (const plugin of plugins) {
      setPluginRuleCount(process.id, plugin.id, 1);
      completePluginValidation(process.id, plugin.id, [
        {
          name: 'validation-library',
          title: 'Validation rules could not be loaded',
          passed: false,
          errors: [],
          rejected: true,
          rejectReason: reason,
        },
      ]);
    }
    lastValidatedKey = null;
    return;
  }

  for (const plugin of plugins) {
    setPluginRuleCount(process.id, plugin.id, (rulesByPlugin.get(plugin.id) ?? []).length);
  }

  const pluginsWithRules = plugins.filter(
    (plugin) => (rulesByPlugin.get(plugin.id) ?? []).length > 0,
  );

  for (const plugin of plugins) {
    if ((rulesByPlugin.get(plugin.id) ?? []).length === 0) {
      completePluginValidation(process.id, plugin.id, []);
    } else {
      beginPluginValidation(process.id, plugin.id);
    }
  }

  if (pluginsWithRules.length === 0) return;

  // One request for every rule of the whole process; errors carry the
  // rule name so results can be attributed back per plugin.
  const batch = pluginsWithRules.flatMap(
    (plugin) => rulesByPlugin.get(plugin.id) ?? [],
  );

  try {
    const result = await validationServiceClient.validateResolvedRules(batch, sclContent);
    const errorsByRule = groupErrorsByRule(result.errors);

    for (const plugin of pluginsWithRules) {
      const rules = rulesByPlugin.get(plugin.id) ?? [];
      completePluginValidation(
        process.id,
        plugin.id,
        rules.map((rule) => toRuleResult(rule, errorsByRule.get(rule.name) ?? [])),
      );
    }
  } catch (error) {
    const reason = describeValidationError(error);
    for (const plugin of pluginsWithRules) {
      const rules = rulesByPlugin.get(plugin.id) ?? [];
      completePluginValidation(
        process.id,
        plugin.id,
        rules.map((rule) => toRejectedResult(rule, reason)),
      );
    }
    // Let the next edit retry rather than short-circuiting on the key.
    lastValidatedKey = null;
  }
}

function groupErrorsByRule(errors: ValidationError[]): Map<string, ValidationError[]> {
  const grouped = new Map<string, ValidationError[]>();
  for (const error of errors) {
    const bucket = grouped.get(error.ruleName);
    if (bucket) bucket.push(error);
    else grouped.set(error.ruleName, [error]);
  }
  return grouped;
}

function baseResult(rule: ResolvedValidationRule) {
  return {
    name: rule.name,
    title: rule.title,
    context: rule.definition.context,
    assertion: rule.definition.assertion,
    severity: rule.severity,
  };
}

function toRuleResult(
  rule: ResolvedValidationRule,
  errors: ValidationError[],
): RuleResult {
  return { ...baseResult(rule), passed: errors.length === 0, errors, rejected: false };
}

function toRejectedResult(rule: ResolvedValidationRule, reason: string): RuleResult {
  return {
    ...baseResult(rule),
    passed: false,
    errors: [],
    rejected: true,
    rejectReason: reason,
  };
}

function stripWorkflowBookkeeping(doc: XMLDocument): XMLDocument {
  const clone = doc.cloneNode(true) as XMLDocument;
  const selector = WORKFLOW_STATE_PRIVATE_TYPES.map(
    (type) => `:scope > Private[type="${type}"]`,
  ).join(', ');
  clone.documentElement.querySelectorAll(selector).forEach((el) => el.remove());
  return clone;
}
