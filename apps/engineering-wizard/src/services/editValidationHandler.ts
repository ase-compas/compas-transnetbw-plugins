import { runningEngineeringProcess } from '../features/processes/stores.svelte';
import { getPluginsForProcess } from '../features/processes/selectors';
import { validateWithContent } from './validationService';
import { documentStore } from '../documentStore.svelte';
import { setPluginValidationStatus, type RuleResult } from './validationStatusStore.svelte';
import type { Plugin, XPathValidation } from '@oscd-transnet-plugins/shared';

const VALIDATION_DEBOUNCE_MS = 1000;

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

  const sclContent = new XMLSerializer().serializeToString(doc);
  const allPlugins = getPluginsForProcess(process);

  await Promise.allSettled(
    allPlugins.map((plugin) => validatePlugin(plugin, process.id, sclContent)),
  );
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
    setPluginValidationStatus(processId, plugin.id, []);
    return;
  }

  const results = await Promise.allSettled(
    validations.map((rule) => validateWithContent(rule, sclContent)),
  );

  const ruleResults: RuleResult[] = results.map((result, i) => {
    const rule = validations[i];
    const base = {
      title: rule.title,
      description: rule.description,
      context: rule.context,
      assertion: rule.assert,
    };
    if (result.status === 'rejected') {
      return { ...base, passed: false, errors: [], rejected: true, rejectReason: String(result.reason) };
    }
    return { ...base, passed: result.value.valid, errors: result.value.errors, rejected: false };
  });

  setPluginValidationStatus(processId, plugin.id, ruleResults);
}
