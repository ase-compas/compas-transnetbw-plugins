import { runningEngineeringProcess } from '../features/processes/stores.svelte';
import { getPluginsForProcess } from '../features/processes/selectors';
import { validateWithContent, describeValidationError, type ValidationResult } from './validationService';
import { documentStore } from '../documentStore.svelte';
import { beginPluginValidation, completePluginValidation, type RuleResult } from './validationStatusStore.svelte';
import type { Plugin, XPathValidation } from '@oscd-transnet-plugins/shared';

const VALIDATION_DEBOUNCE_MS = 1000;

const xmlSerializer = new XMLSerializer();

let debounceTimer: ReturnType<typeof setTimeout> | undefined;

/**
 * Schedules a debounced validation run.
 * Call this whenever an `oscd-edit-v2` event is received.
 */
export function scheduleEditValidation(): void {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => runEditValidation(), VALIDATION_DEBOUNCE_MS);
}

/**
 * Cancels any pending debounced validation (e.g. on disconnect).
 */
export function cancelPendingValidation(): void {
  clearTimeout(debounceTimer);
}

async function runEditValidation(): Promise<void> {
  const { process } = runningEngineeringProcess;
  if (!process) return;

  const doc = documentStore.doc;
  if (!doc) return;

  const sclContent = xmlSerializer.serializeToString(doc);
  const allPlugins = getPluginsForProcess(process);

  await Promise.allSettled(
    allPlugins.map((plugin) => validatePlugin(plugin, process.id, sclContent)),
  );
}

function toRuleResult(rule: XPathValidation, result: PromiseSettledResult<ValidationResult>): RuleResult {
  const base = {
    title: rule.title,
    description: rule.description,
    context: rule.context,
    assertion: rule.assert,
  };

  if (result.status === 'rejected') {
    return { ...base, passed: false, errors: [], rejected: true, rejectReason: describeValidationError(result.reason) };
  }
  return { ...base, passed: result.value.valid, errors: result.value.errors, rejected: false };
}

async function validatePlugin(
  plugin: Plugin,
  processId: string,
  sclContent: string,
): Promise<void> {
  const validations: XPathValidation[] = (plugin.validations ?? []).filter(
    (v) => v.processId === processId,
  );

  if (validations.length === 0) {
    completePluginValidation(processId, plugin.id, []);
    return;
  }

  beginPluginValidation(processId, plugin.id);

  try {
    const results = await Promise.allSettled(
      validations.map((rule) => validateWithContent(rule, sclContent)),
    );
    const ruleResults = results.map((result, i) => toRuleResult(validations[i], result));

    completePluginValidation(processId, plugin.id, ruleResults);
  } catch (e) {
    completePluginValidation(processId, plugin.id, []);
    throw e;
  }
}
