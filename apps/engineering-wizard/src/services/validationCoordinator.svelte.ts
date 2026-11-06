import type {
  Plugin,
  Process,
  XPathValidation,
} from '@oscd-transnet-plugins/shared';
import { getPluginsForProcess } from '../features/processes/selectors';
import { WORKFLOW_STATE_PRIVATE_TYPES } from '../features/workflow/document-state';
import {
  describeValidationError,
  validateRulesWithContent,
  type ValidationError,
  type RuleOutcome,
  type RuleDiagnostic,
  type RuleStatus,
} from './validationService';

const VALIDATION_DEBOUNCE_MS = 1000;

export type RuleResult = {
  title: string;
  description?: string;
  context?: string;
  assertion?: string;
  status: RuleStatus | 'REQUEST_ERROR';
  errors: ValidationError[];
  diagnostics: RuleDiagnostic[];
  rejectReason?: string;
};

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
let inFlight: AbortController | undefined;

function buildRequest(
  process: Process,
  document: XMLDocument,
): ValidationRequest {
  const processSnapshot = $state.snapshot(process) as Process;
  const plugins = getPluginsForProcess(processSnapshot).map((plugin) => ({
    id: plugin.id,
    rules: plugin.validations ?? [],
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
  clone.documentElement
    .querySelectorAll(selector)
    .forEach((element) => element.remove());
  return clone;
}

function toRuleResult(rule: XPathValidation, result: RuleOutcome): RuleResult {
  return {
    title: rule.title,
    description: rule.description,
    context: rule.context,
    assertion: rule.assert,
    status: result.status,
    errors: result.errors,
    diagnostics: result.diagnostics,
  };
}

async function validateRules(
  rules: XPathValidation[],
  sclContent: string,
  signal: AbortSignal,
): Promise<RuleResult[]> {
  if (rules.length === 0) return [];
  try {
    const response = await validateRulesWithContent(rules, sclContent, signal);
    const results = [...response.results].sort(
      (a, b) => a.ruleIndex - b.ruleIndex,
    );
    return rules.map((rule, index) => toRuleResult(rule, results[index]));
  } catch (error) {
    const rejectReason = describeValidationError(error);
    return rules.map((rule) => ({
      title: rule.title,
      description: rule.description,
      context: rule.context,
      assertion: rule.assert,
      status: 'REQUEST_ERROR',
      errors: [],
      diagnostics: [],
      rejectReason,
    }));
  }
}

async function execute(
  request: ValidationRequest,
  runGeneration: number,
): Promise<void> {
  const controller = new AbortController();
  inFlight = controller;
  try {
    const rules = request.plugins.flatMap((plugin) => plugin.rules);
    const results = await validateRules(
      rules,
      request.sclContent,
      controller.signal,
    );

    if (runGeneration !== generation) return;

    let offset = 0;
    state.resultsByPluginId = Object.fromEntries(
      request.plugins.map((plugin) => {
        const pluginResults = results.slice(
          offset,
          offset + plugin.rules.length,
        );
        offset += plugin.rules.length;
        return [plugin.id, pluginResults];
      }),
    );
    state.status = 'ready';
  } catch (error) {
    if (runGeneration !== generation) return;
    console.error(
      '[ValidationCoordinator] Unexpected validation failure',
      error,
    );
    state.resultsByPluginId = {};
    state.status = 'error';
  } finally {
    if (runGeneration === generation) inFlight = undefined;
  }
}

function schedule(
  request: ValidationRequest,
  delay = VALIDATION_DEBOUNCE_MS,
): void {
  clearTimeout(debounceTimer);
  inFlight?.abort();
  currentRequest = request;
  const runGeneration = ++generation;

  state.status = 'loading';
  state.resultsByPluginId = {};

  debounceTimer = setTimeout(() => void execute(request, runGeneration), delay);
}

function reset(): void {
  clearTimeout(debounceTimer);
  inFlight?.abort();
  inFlight = undefined;
  currentRequest = null;
  generation += 1;
  state.status = 'idle';
  state.resultsByPluginId = {};
}

function request(process: Process | null, document: XMLDocument | null): void {
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
    rules.some((rule) => rule.status === 'REQUEST_ERROR'),
  );
  if (currentRequest && (state.status === 'error' || hasRejectedRule)) {
    schedule(currentRequest, 0);
  }
}

function cancel(): void {
  reset();
}

function getPluginView(plugin: Plugin): PluginValidationView {
  const hasValidations = (plugin.validations?.length ?? 0) > 0;
  const rules = state.resultsByPluginId[plugin.id] ?? [];
  const erroredRules = rules.filter(
    (rule) =>
      rule.status === 'INVALID_RULE' ||
      rule.status === 'EVALUATION_ERROR' ||
      rule.status === 'REQUEST_ERROR',
  );
  const failedRules = rules.filter((rule) => rule.status === 'FAILED');
  const passedRules = rules.filter((rule) => rule.status === 'PASSED');

  let viewState: PluginValidationState;
  if (!hasValidations) viewState = 'no-validations';
  else if (state.status === 'loading') viewState = 'loading';
  else if (state.status === 'error' || erroredRules.length > 0)
    viewState = 'error';
  else if (rules.length !== plugin.validations?.length) viewState = 'loading';
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
