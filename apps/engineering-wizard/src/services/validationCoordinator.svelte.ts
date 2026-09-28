import type { Plugin, Process, XPathValidation } from '@oscd-transnet-plugins/shared';
import { getPluginsForProcess } from '../features/processes/selectors';
import { WORKFLOW_STATE_PRIVATE_TYPES } from '../features/workflow/document-state';
import {
  describeValidationError,
  validateWithContent,
  type ValidationError,
  type ValidationResult,
} from './validationService';

const VALIDATION_DEBOUNCE_MS = 1000;

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

export type PluginValidationState =
  'no-validations' | 'loading' | 'passed' | 'failed' | 'error';

export interface PluginValidationView {
  state: PluginValidationState;
  rules: RuleResult[];
  failedRules: RuleResult[];
  passedRules: RuleResult[];
  erroredRules: RuleResult[];
}

type ValidationRequest = {
  configurationKey: string;
  plugins: Array<{ id: string; rules: XPathValidation[] }>;
  sclContent: string;
};

const state = $state<{
  status: 'idle' | 'loading' | 'ready' | 'error';
  resultsByPluginId: Record<string, RuleResult[]>;
}>({
  status: 'idle',
  resultsByPluginId: {},
});

const xmlSerializer = new XMLSerializer();

let currentRequest: ValidationRequest | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let generation = 0;

function buildRequest(
  process: Process,
  document: XMLDocument,
): ValidationRequest {
  const processSnapshot = $state.snapshot(process) as Process;
  const plugins = getPluginsForProcess(processSnapshot).map((plugin) => ({
    id: plugin.id,
    rules: (plugin.validations ?? []).filter(
      (validation) => validation.processId === processSnapshot.id,
    ),
  }));
  const sclContent = xmlSerializer.serializeToString(
    stripWorkflowBookkeeping(document),
  );
  const configurationKey = JSON.stringify({
    processId: processSnapshot.id,
    plugins,
  });

  return {
    configurationKey,
    plugins,
    sclContent,
  };
}

function stripWorkflowBookkeeping(document: XMLDocument): XMLDocument {
  const clone = document.cloneNode(true) as XMLDocument;
  const selector = WORKFLOW_STATE_PRIVATE_TYPES.map(
    (type) => `:scope > Private[type="${type}"]`,
  ).join(', ');
  clone.documentElement.querySelectorAll(selector).forEach((element) => element.remove());
  return clone;
}

function toRuleResult(
  rule: XPathValidation,
  result: PromiseSettledResult<ValidationResult>,
): RuleResult {
  const base = {
    title: rule.title,
    description: rule.description,
    context: rule.context,
    assertion: rule.assert,
  };

  if (result.status === 'rejected') {
    return {
      ...base,
      passed: false,
      errors: [],
      rejected: true,
      rejectReason: describeValidationError(result.reason),
    };
  }

  return {
    ...base,
    passed: result.value.valid,
    errors: result.value.errors,
    rejected: false,
  };
}

async function validatePlugin(
  rules: XPathValidation[],
  sclContent: string,
): Promise<RuleResult[]> {
  const results = await Promise.allSettled(
    rules.map((rule) => validateWithContent(rule, sclContent)),
  );

  return results.map((result, index) => toRuleResult(rules[index], result));
}

async function execute(request: ValidationRequest, runGeneration: number): Promise<void> {
  try {
    const pluginResults = await Promise.all(
      request.plugins.map(async (plugin) => [
        plugin.id,
        await validatePlugin(plugin.rules, request.sclContent),
      ] as const),
    );

    if (runGeneration !== generation) return;

    state.resultsByPluginId = Object.fromEntries(pluginResults);
    state.status = 'ready';
  } catch {
    if (runGeneration !== generation) return;

    state.resultsByPluginId = {};
    state.status = 'error';
  }
}

function schedule(request: ValidationRequest, delay = VALIDATION_DEBOUNCE_MS): void {
  clearTimeout(debounceTimer);
  currentRequest = request;
  const runGeneration = ++generation;

  state.status = 'loading';
  state.resultsByPluginId = {};

  debounceTimer = setTimeout(() => void execute(request, runGeneration), delay);
}

function reset(): void {
  clearTimeout(debounceTimer);
  currentRequest = null;
  generation += 1;
  state.status = 'idle';
  state.resultsByPluginId = {};
}

function request(
  process: Process | null,
  document: XMLDocument | null,
): void {
  if (!process || !document) {
    if (state.status !== 'idle') reset();
    return;
  }

  const nextRequest = buildRequest(process, document);
  if (
    nextRequest.configurationKey === currentRequest?.configurationKey &&
    nextRequest.sclContent === currentRequest.sclContent
  ) {
    return;
  }

  schedule(nextRequest);
}

function runNow(process: Process, document: XMLDocument): void {
  schedule(buildRequest(process, document), 0);
}

function retryFailed(): void {
  const hasRejectedRule = Object.values(state.resultsByPluginId).some((rules) =>
    rules.some((rule) => rule.rejected),
  );
  if (currentRequest && (state.status === 'error' || hasRejectedRule)) {
    schedule(currentRequest, 0);
  }
}

function cancel(): void {
  reset();
}

function getPluginView(processId: string, plugin: Plugin): PluginValidationView {
  const hasValidations = (plugin.validations ?? []).some(
    (validation) => validation.processId === processId,
  );
  const rules = state.resultsByPluginId[plugin.id] ?? [];
  const erroredRules = rules.filter((rule) => rule.rejected);
  const failedRules = rules.filter((rule) => !rule.passed && !rule.rejected);
  const passedRules = rules.filter((rule) => rule.passed);

  let viewState: PluginValidationState;
  if (!hasValidations) viewState = 'no-validations';
  else if (state.status === 'loading') viewState = 'loading';
  else if (state.status === 'error' || erroredRules.length > 0) viewState = 'error';
  else if (failedRules.length > 0) viewState = 'failed';
  else viewState = 'passed';

  return {
    state: viewState,
    rules,
    failedRules,
    passedRules,
    erroredRules,
  };
}

export const validationCoordinator = {
  request,
  runNow,
  retryFailed,
  cancel,
  getPluginView,
};
