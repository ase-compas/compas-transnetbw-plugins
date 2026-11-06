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
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe('process ruleset batching', () => {
  it('uploads once for all plugins and preserves their rule order', async () => {
    const plugins = [
      plugin('first', 10),
      plugin('empty', 0),
      plugin('second', 2),
    ];
    plugins[2].validations = [
      { ...rule, assert: 'false()' },
      { ...rule, context: '/' },
    ];
    vi.mocked(validateRulesWithContent).mockImplementation(async (rules) =>
      passed(rules.length),
    );
    validationCoordinator.runNow(process(plugins), document());
    await vi.advanceTimersByTimeAsync(0);
    expect(validateRulesWithContent).toHaveBeenCalledOnce();
    expect(vi.mocked(validateRulesWithContent).mock.calls[0][0]).toEqual([
      ...(plugins[0].validations ?? []),
      ...(plugins[2].validations ?? []),
    ]);
    expect(
      validationCoordinator.getPluginView(plugins[0]).passedRules,
    ).toHaveLength(10);
    expect(validationCoordinator.getPluginView(plugins[1]).state).toBe(
      'no-validations',
    );
    expect(
      validationCoordinator
        .getPluginView(plugins[2])
        .rules.map((result) => [result.context, result.assertion]),
    ).toEqual([
      ['//SCL', 'false()'],
      ['/', 'true()'],
    ]);
  });

  it('sends 1000 rules across plugin groups in one request', async () => {
    vi.useRealTimers();
    const plugins = Array.from({ length: 20 }, (_, index) =>
      plugin(`plugin-${index}`, 50),
    );
    const configuration = process([]);
    configuration.pluginGroups = [
      { id: 'first', name: 'First', plugins: plugins.slice(0, 10) },
      { id: 'second', name: 'Second', plugins: plugins.slice(10) },
    ];
    const client = await vi.importActual<typeof import('./validationService')>(
      './validationService',
    );
    vi.mocked(validateRulesWithContent).mockImplementation(
      client.validateRulesWithContent,
    );
    const fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(passed(1000)), {
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    vi.stubGlobal('fetch', fetch);

    validationCoordinator.runNow(configuration, document());
    await vi.waitFor(() =>
      expect(validationCoordinator.getPluginView(plugins[19]).state).toBe(
        'passed',
      ),
    );

    expect(validateRulesWithContent).toHaveBeenCalledOnce();
    const [rules, content] = vi.mocked(validateRulesWithContent).mock.calls[0];
    expect(rules).toHaveLength(1000);
    expect(content).toBe('<SCL/>');
    expect(fetch).toHaveBeenCalledOnce();
    const form: FormData = fetch.mock.calls[0][1].body;
    expect([...form.keys()]).toEqual(['sclFile', 'rules', 'sclFileExtension']);
    expect(form.getAll('sclFile')).toHaveLength(1);
    expect(form.get('sclFile')).toBeInstanceOf(File);
    const rulesPart = form.get('rules');
    if (!(rulesPart instanceof Blob)) throw new Error('Missing rules part');
    expect(rulesPart.type).toBe('application/json');
    const payload = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsText(rulesPart);
    });
    expect(JSON.parse(payload)).toEqual(
      rules.map(({ context, assert }) => ({ type: 'XPATH', context, assert })),
    );
    for (const entry of plugins) {
      expect(
        validationCoordinator.getPluginView(entry).passedRules,
      ).toHaveLength(50);
    }
  });

  it.each([
    { name: 'no plugins', plugins: [] },
    { name: 'empty plugin', plugins: [plugin('empty', 0)] },
  ])('does not send a request for $name', async ({ plugins }) => {
    vi.mocked(validateRulesWithContent).mockResolvedValue(passed(0));
    validationCoordinator.runNow(process(plugins), document());
    await vi.advanceTimersByTimeAsync(0);
    expect(validateRulesWithContent).not.toHaveBeenCalled();
    for (const entry of plugins) {
      expect(validationCoordinator.getPluginView(entry).state).toBe(
        'no-validations',
      );
    }
  });

  it('maps reordered outcomes by index, preserving mixed rule and plugin states', async () => {
    const plugins = [plugin('first', 3), plugin('second', 1)];
    vi.mocked(validateRulesWithContent).mockResolvedValueOnce({
      valid: false,
      complete: false,
      results: [
        { ruleIndex: 3, status: 'PASSED', errors: [], diagnostics: [] },
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
    });
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
    validationCoordinator.retryFailed();
    await vi.advanceTimersByTimeAsync(0);
    expect(validateRulesWithContent).toHaveBeenCalledOnce();
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

  it('marks all plugins on request failure and retries the full process', async () => {
    const plugins = [plugin('first', 1), plugin('second', 1)];
    vi.mocked(validateRulesWithContent)
      .mockRejectedValueOnce(new Error('Offline'))
      .mockResolvedValue(passed(2));
    validationCoordinator.runNow(process(plugins), document());
    await vi.advanceTimersByTimeAsync(0);
    for (const entry of plugins) {
      const view = validationCoordinator.getPluginView(entry);
      expect(view.state).toBe('error');
      expect(view.erroredRules[0]).toMatchObject({
        status: 'REQUEST_ERROR',
        rejectReason: 'Offline',
      });
    }
    validationCoordinator.retryFailed();
    await vi.advanceTimersByTimeAsync(0);
    expect(validateRulesWithContent).toHaveBeenCalledTimes(2);
    expect(
      vi
        .mocked(validateRulesWithContent)
        .mock.calls.map(([rules]) => rules.length),
    ).toEqual([2, 2]);
    for (const entry of plugins) {
      expect(validationCoordinator.getPluginView(entry).state).toBe('passed');
    }
  });

  it('debounces document changes into one current process request', async () => {
    const plugins = [plugin('first', 1), plugin('second', 1)];
    const configuration = process(plugins);
    vi.mocked(validateRulesWithContent).mockResolvedValue(passed(2));
    validationCoordinator.runNow(configuration, document());
    await vi.advanceTimersByTimeAsync(0);

    const changed = document();
    changed.documentElement.setAttribute('revision', '1');
    validationCoordinator.request(configuration, changed);
    expect(validationCoordinator.getPluginView(plugins[0]).state).toBe(
      'loading',
    );
    await vi.advanceTimersByTimeAsync(500);
    changed.documentElement.setAttribute('revision', '2');
    validationCoordinator.request(configuration, changed);
    await vi.advanceTimersByTimeAsync(999);
    expect(validateRulesWithContent).toHaveBeenCalledOnce();
    await vi.advanceTimersByTimeAsync(1);
    expect(validateRulesWithContent).toHaveBeenCalledTimes(2);
    expect(vi.mocked(validateRulesWithContent).mock.calls[1][1]).toContain(
      'revision="2"',
    );

    validationCoordinator.request(configuration, changed);
    validationCoordinator.retryFailed();
    await vi.advanceTimersByTimeAsync(1000);
    expect(validateRulesWithContent).toHaveBeenCalledTimes(2);
  });
});
