import {
  checkRuleSyntax,
  describeValidationError,
  type RuleExpressions,
  type SyntaxDiagnostic,
} from '../../../services/validationService';

const REQUEST_TIMEOUT_MS = 30_000;

export type SyntaxCheckState = {
  status: 'unchecked' | 'checking' | 'valid' | 'invalid' | 'error';
  key: string;
  diagnostics: SyntaxDiagnostic[];
  error: string | null;
};

function keyFor(rule: RuleExpressions): string {
  return JSON.stringify([rule.context, rule.assert]);
}

export function createRuleSyntaxCheck() {
  const state = $state<SyntaxCheckState>({
    status: 'unchecked',
    key: '',
    diagnostics: [],
    error: null,
  });
  let pending: RuleExpressions | null = null;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let controller: AbortController | undefined;
  let generation = 0;

  function cancel() {
    clearTimeout(timer);
    controller?.abort();
    controller = undefined;
    generation += 1;
  }

  async function run(rule: RuleExpressions, token: number) {
    const request = new AbortController();
    controller = request;
    const deadline = setTimeout(
      () =>
        request.abort(
          new Error('Rule syntax check timed out. Please try again.'),
        ),
      REQUEST_TIMEOUT_MS,
    );
    try {
      const result = await checkRuleSyntax([rule], request.signal);
      if (token !== generation) return;
      state.status = result.valid ? 'valid' : 'invalid';
      state.diagnostics = result.errors;
    } catch (error) {
      if (token !== generation) return;
      state.status = 'error';
      state.error = describeValidationError(error);
    } finally {
      clearTimeout(deadline);
      if (token === generation) controller = undefined;
    }
  }

  function schedule(rule: RuleExpressions, delay: number) {
    cancel();
    pending = { ...rule };
    state.key = keyFor(rule);
    state.diagnostics = [];
    state.error = null;
    if (!rule.context.trim() || !rule.assert.trim()) {
      state.status = 'unchecked';
      return;
    }
    state.status = 'checking';
    const token = generation;
    timer = setTimeout(() => void run({ ...rule }, token), delay);
  }

  return {
    state,
    update(rule: RuleExpressions) {
      if (state.key !== keyFor(rule)) schedule(rule, 500);
    },
    retry() {
      if (pending) schedule(pending, 0);
    },
    isValidFor(rule: RuleExpressions) {
      return state.status === 'valid' && state.key === keyFor(rule);
    },
    reset() {
      cancel();
      pending = null;
      state.key = '';
      state.status = 'unchecked';
      state.diagnostics = [];
      state.error = null;
    },
    dispose: cancel,
  };
}
