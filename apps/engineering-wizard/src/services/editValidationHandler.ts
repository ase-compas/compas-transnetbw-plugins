import { runningEngineeringProcess } from '../features/processes/stores.svelte';
import { getPluginsForProcess } from '../features/processes/selectors';
import { validateWithContent } from './validationService';
import { formatToastDetail } from './validationMessages';
import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
import { documentStore } from '../documentStore.svelte';

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
  const { process, lastSelectedPluginId } = runningEngineeringProcess;
  if (!process || !lastSelectedPluginId) return;

  const plugin = getPluginsForProcess(process).find((p) => p.id === lastSelectedPluginId);
  const allValidations = plugin?.validations ?? [];

  // Only run validations that belong to the current process
  const validations = allValidations.filter((v) => v.processId === process.id);

  if (validations.length === 0) return;

  const doc = documentStore.doc;
  if (!doc) return;

  const sclContent = new XMLSerializer().serializeToString(doc);

  const results = await Promise.allSettled(
    validations.map((rule) => validateWithContent(rule, sclContent)),
  );

  let hasFailures = false;

  results.forEach((result, i) => {
    const rule = validations[i];

    if (result.status === 'fulfilled') {
      if (!result.value.valid) {
        hasFailures = true;
        const detail = formatToastDetail(result.value.errors, rule.message ?? '');
        toastService.error('Validation failed', detail || `"${rule.title}" failed`);
      }
    } else {
      hasFailures = true;
      toastService.error('Validation error', `"${rule.title}": ${String(result.reason)}`);
    }
  });

  if (!hasFailures) {
    toastService.success('Validation passed', `All ${validations.length} rule(s) passed`);
  }
}
