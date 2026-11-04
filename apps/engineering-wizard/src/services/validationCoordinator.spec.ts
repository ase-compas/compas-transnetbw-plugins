// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type {
  Plugin,
  Process,
  XPathValidation,
} from '@oscd-transnet-plugins/shared';
import {
  validateRulesWithContent,
  type BatchValidationResult,
} from './validationService';
import { validationCoordinator } from './validationCoordinator.svelte';

vi.mock('./validationService', () => ({
  validateRulesWithContent: vi.fn(),
  describeValidationError: (error: Error) => error.message,
}));

const rule: XPathValidation = {
  title: 'Duplicate title',
  description: '',
  context: '//SCL',
  assert: 'true()',
};
const plugin = (id: string, count: number): Plugin => ({
  id,
  name: id,
  type: 'internal',
  validations: Array.from({ length: count }, () => ({ ...rule })),
});
const process = (plugins: Plugin[]): Process => ({
  id: 'process',
  name: 'Process',
  description: '',
  version: '1.0.0',
  pluginGroups: [{ id: 'group', name: 'Group', plugins }],
});
const document = () =>
  new DOMParser().parseFromString('<SCL/>', 'application/xml');
const passed = (count: number): BatchValidationResult => ({
  valid: true,
  complete: true,
  results: Array.from({ length: count }, (_, ruleIndex) => ({
    ruleIndex,
    status: 'PASSED',
    errors: [],
    diagnostics: [],
  })),
});

beforeEach(() => {
  vi.useFakeTimers();
  vi.mocked(validateRulesWithContent).mockReset();
});
afterEach(() => {
  validationCoordinator.cancel();
  vi.useRealTimers();
});

describe('plugin ruleset batching', () => {
  it('uploads once for ten rules, once per plugin, and skips empty rulesets', async () => {
    const plugins = [
      plugin('first', 10),
      plugin('second', 2),
      plugin('empty', 0),
    ];
    vi.mocked(validateRulesWithContent).mockImplementation(async (rules) =>
      passed(rules.length),
    );
    validationCoordinator.runNow(process(plugins), document());
    await vi.advanceTimersByTimeAsync(0);
    expect(validateRulesWithContent).toHaveBeenCalledTimes(2);
    expect(
      vi
        .mocked(validateRulesWithContent)
        .mock.calls.map(([rules]) => rules.length),
    ).toEqual([10, 2]);
    expect(
      validationCoordinator.getPluginView(plugins[0]).passedRules,
    ).toHaveLength(10);
    expect(validationCoordinator.getPluginView(plugins[2]).state).toBe(
      'no-validations',
    );
  });

  it('maps reordered outcomes by index, preserving mixed rule and plugin states', async () => {
    const plugins = [plugin('first', 3), plugin('second', 1)];
    vi.mocked(validateRulesWithContent)
      .mockResolvedValueOnce({
        valid: false,
        complete: false,
        results: [
          { ruleIndex: 2, status: 'PASSED', errors: [], diagnostics: [] },
          {
            ruleIndex: 0,
            status: 'INVALID_RULE',
            errors: [],
            diagnostics: [
              {
                field: 'assert',
                code: 'INVALID_XPATH',
                message: 'Invalid syntax',
              },
            ],
          },
          {
            ruleIndex: 1,
            status: 'FAILED',
            errors: [{ ruleName: 'xpath rule', message: 'Violation' }],
            diagnostics: [],
          },
        ],
      })
      .mockResolvedValueOnce(passed(1));
    validationCoordinator.runNow(process(plugins), document());
    await vi.advanceTimersByTimeAsync(0);
    const view = validationCoordinator.getPluginView(plugins[0]);
    expect(view.state).toBe('error');
    expect(view.rules.map((rule) => rule.status)).toEqual([
      'INVALID_RULE',
      'FAILED',
      'PASSED',
    ]);
    expect(view.passedRules).toHaveLength(1);
    expect(view.failedRules).toHaveLength(1);
    expect(view.erroredRules[0].diagnostics[0].message).toBe('Invalid syntax');
    expect(validationCoordinator.getPluginView(plugins[1]).state).toBe(
      'passed',
    );
  });

  it('aborts old requests and does not publish results after a process switch', async () => {
    const first = plugin('first', 1);
    const second = plugin('second', 1);
    let resolveOld!: (result: BatchValidationResult) => void;
    vi.mocked(validateRulesWithContent)
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolveOld = resolve;
          }),
      )
      .mockResolvedValueOnce(passed(1));
    validationCoordinator.runNow(process([first]), document());
    await vi.advanceTimersByTimeAsync(0);
    const signal = vi.mocked(validateRulesWithContent).mock.calls[0][2];
    validationCoordinator.runNow(process([second]), document());
    expect(signal?.aborted).toBe(true);
    await vi.advanceTimersByTimeAsync(0);
    resolveOld(passed(1));
    await Promise.resolve();
    expect(validationCoordinator.getPluginView(second).state).toBe('passed');
    expect(validationCoordinator.getPluginView(first).passedRules).toHaveLength(
      0,
    );
  });

  it('isolates request failures and retries connectivity failures rather than invalid rules', async () => {
    const plugins = [plugin('first', 1), plugin('second', 1)];
    vi.mocked(validateRulesWithContent)
      .mockRejectedValueOnce(new Error('Offline'))
      .mockResolvedValue(passed(1));
    validationCoordinator.runNow(process(plugins), document());
    await vi.advanceTimersByTimeAsync(0);
    expect(
      validationCoordinator.getPluginView(plugins[0]).erroredRules[0].status,
    ).toBe('REQUEST_ERROR');
    expect(validationCoordinator.getPluginView(plugins[1]).state).toBe(
      'passed',
    );
    validationCoordinator.retryFailed();
    await vi.advanceTimersByTimeAsync(0);
    expect(validationCoordinator.getPluginView(plugins[0]).state).toBe(
      'passed',
    );
  });
});
