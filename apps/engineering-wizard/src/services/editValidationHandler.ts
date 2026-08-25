import { runningEngineeringProcess } from '../features/processes/stores.svelte';
import { getPluginsForProcess } from '../features/processes/selectors';
import { validateWithContent, describeValidationError, type ValidationResult } from './validationService';
import { documentStore } from '../documentStore.svelte';
import { beginPluginValidation, completePluginValidation, type RuleResult } from './validationStatusStore.svelte';
import { WORKFLOW_STATE_PRIVATE_TYPES } from '../features/workflow/document-state';
import type { Plugin, XPathValidation } from '@oscd-transnet-plugins/shared';

const VALIDATION_DEBOUNCE_MS = 1000;

const xmlSerializer = new XMLSerializer();

let debounceTimer: ReturnType<typeof setTimeout> | undefined;

let lastValidatedKey: string | null = null;

let isRunning = false;
let rerunRequested = false;

/**
 * Schedules a debounced validation run.
 * Call this whenever an `oscd-edit-v2` event is received.
 */
export function scheduleEditValidation(): void {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => void runEditValidation(), VALIDATION_DEBOUNCE_MS);
}

/**
 * Cancels any pending debounced validation (e.g. on disconnect).
 */
export function cancelPendingValidation(): void {
  clearTimeout(debounceTimer);
}

async function runEditValidation(): Promise<void> {
  if (isRunning) {
    rerunRequested = true;
    return;
  }

  isRunning = true;
  try {
    await validateIfChanged();
  } finally {
    isRunning = false;
    if (rerunRequested) {
      rerunRequested = false;
      void runEditValidation();
    }
  }
}

async function validateIfChanged(): Promise<void> {
  const { process } = runningEngineeringProcess;
  if (!process) return;

  const doc = documentStore.doc;
  if (!doc) return;

  const sclContent = xmlSerializer.serializeToString(stripWorkflowBookkeeping(doc));
  const key = `${process.id}:${sclContent}`;
  if (key === lastValidatedKey) return;

  const allPlugins = getPluginsForProcess(process);

  const results = await Promise.allSettled(
    allPlugins.map((plugin) => validatePlugin(plugin, process.id, sclContent)),
  );

  const allExecuted = results.every((r) => r.status === 'fulfilled' && r.value);
  if (allExecuted) lastValidatedKey = key;
}

function stripWorkflowBookkeeping(doc: XMLDocument): XMLDocument {
  const clone = doc.cloneNode(true) as XMLDocument;
  const selector = WORKFLOW_STATE_PRIVATE_TYPES.map((type) => `:scope > Private[type="${type}"]`).join(', ');
  clone.documentElement.querySelectorAll(selector).forEach((el) => el.remove());
  return clone;
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
): Promise<boolean> {
  const validations: XPathValidation[] = (plugin.validations ?? []).filter(
    (v) => v.processId === processId,
  );

  if (validations.length === 0) {
    completePluginValidation(processId, plugin.id, []);
    return true;
  }

  beginPluginValidation(processId, plugin.id);

  const results = await Promise.allSettled(
    validations.map((rule) => validateWithContent(rule, sclContent)),
  );
  const ruleResults = results.map((result, i) => toRuleResult(validations[i], result));

  completePluginValidation(processId, plugin.id, ruleResults);
  return ruleResults.every((r) => !r.rejected);
}
