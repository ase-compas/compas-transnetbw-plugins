import { describe, expect, it, vi } from 'vitest';
import type {
  ResourceRef,
  ValidationPolicyContent,
  ValidationRuleContent,
  ValidationRuleSetContent,
} from '../generated/models';
import { ContentParseError } from './content';
import { resolvePolicy } from './resolver';
import {
  ResourceNotFoundError,
  type LoadedResource,
  type ValidationLibraryService,
} from './service';
import { ValidationLibraryResourceType } from '../generated/models';
import { toXPathValidationServiceRules } from './validation-request';

function rule(
  name: string,
  overrides: Partial<ValidationRuleContent> = {},
): ValidationRuleContent {
  return {
    schemaVersion: '1.0.0',
    name,
    title: `Title of ${name}`,
    kind: 'XPATH',
    defaultSeverity: 'ERROR',
    definition: { context: 'SCL', assertion: `count(//${name}) > 0` },
    ...overrides,
  } as ValidationRuleContent;
}

interface FakeData {
  rules?: Record<string, ValidationRuleContent>;
  ruleSets?: Record<string, ValidationRuleSetContent>;
  policies?: Record<string, ValidationPolicyContent>;
}

/** In-memory stand-in for the backend. Every stored resource is at version `1.0.0`. */
function fakeService(data: FakeData) {
  const loadCounts = { rule: 0, ruleSet: 0, policy: 0 };

  function make<T extends { name: string }>(
    type: ValidationLibraryResourceType,
    store: Record<string, T> | undefined,
    name: string,
  ): Promise<LoadedResource<T>> {
    const content = store?.[name];
    if (!content) return Promise.reject(new ResourceNotFoundError(type, name));
    return Promise.resolve({
      name,
      version: '1.0.0',
      entry: {} as LoadedResource<T>['entry'],
      content,
    });
  }

  const service: ValidationLibraryService = {
    listLatestRules: vi.fn(),
    listLatestRuleSets: vi.fn(),
    listLatestPolicies: vi.fn(),
    loadRule: (name) => {
      loadCounts.rule++;
      return make(ValidationLibraryResourceType.Rule, data.rules, name);
    },
    loadRuleSet: (name) => {
      loadCounts.ruleSet++;
      return make(ValidationLibraryResourceType.Ruleset, data.ruleSets, name);
    },
    loadPolicy: (name) => {
      loadCounts.policy++;
      return make(ValidationLibraryResourceType.Policy, data.policies, name);
    },
    publishRule: vi.fn(),
    publishRuleSet: vi.fn(),
    publishPolicy: vi.fn(),
    deleteRule: vi.fn(),
    deleteRuleSet: vi.fn(),
    deletePolicy: vi.fn(),
  };
  return { service, loadCounts };
}

const latest = (name: string): ResourceRef => ({ name, version: 'latest' });

function policyWith(
  ruleSets: ValidationPolicyContent['ruleSets'],
): ValidationPolicyContent {
  return {
    schemaVersion: '1.0.0',
    name: 'process-policy',
    title: 'Process policy',
    ruleSets,
  };
}

function ruleSetWith(name: string, ruleNames: string[]): ValidationRuleSetContent {
  return {
    schemaVersion: '1.0.0',
    name,
    title: `Title of ${name}`,
    rules: ruleNames.map(latest),
  };
}

describe('resolvePolicy', () => {
  it('flattens rule sets into rules and records the origin', async () => {
    const { service } = fakeService({
      rules: { a: rule('a'), b: rule('b') },
      ruleSets: { naming: ruleSetWith('naming', ['a', 'b']) },
      policies: { 'process-policy': policyWith([{ ref: latest('naming') }]) },
    });

    const result = await resolvePolicy(service, 'process-policy');

    expect(result.problems).toEqual([]);
    expect(result.rules.map((r) => r.name)).toEqual(['a', 'b']);
    expect(result.rules[0].origin).toEqual({
      policy: { name: 'process-policy', version: '1.0.0' },
      ruleSet: { name: 'naming', version: '1.0.0' },
    });
    // `latest` must be reported as the concrete version it resolved to.
    expect(result.policy.version).toBe('1.0.0');
    expect(result.rules[0].version).toBe('1.0.0');
  });

  it('applies a severity override without touching the stored rule', async () => {
    const { service } = fakeService({
      rules: { a: rule('a'), b: rule('b') },
      ruleSets: { naming: ruleSetWith('naming', ['a', 'b']) },
      policies: {
        'process-policy': policyWith([
          { ref: latest('naming'), overrides: [{ rule: 'a', severity: 'WARNING' }] },
        ]),
      },
    });

    const result = await resolvePolicy(service, 'process-policy');

    expect(result.rules.find((r) => r.name === 'a')?.severity).toBe('WARNING');
    expect(result.rules.find((r) => r.name === 'b')?.severity).toBe('ERROR');
    expect(result.problems).toEqual([]);
  });

  it('removes a rule disabled by an override', async () => {
    const { service } = fakeService({
      rules: { a: rule('a'), b: rule('b') },
      ruleSets: { naming: ruleSetWith('naming', ['a', 'b']) },
      policies: {
        'process-policy': policyWith([
          { ref: latest('naming'), overrides: [{ rule: 'a', enabled: false }] },
        ]),
      },
    });

    const result = await resolvePolicy(service, 'process-policy');

    expect(result.rules.map((r) => r.name)).toEqual(['b']);
    // A disabled rule is an intentional configuration, not a problem.
    expect(result.problems).toEqual([]);
  });

  it('reports UNKNOWN_OVERRIDE for an override that matches no rule', async () => {
    const { service } = fakeService({
      rules: { a: rule('a') },
      ruleSets: { naming: ruleSetWith('naming', ['a']) },
      policies: {
        'process-policy': policyWith([
          { ref: latest('naming'), overrides: [{ rule: 'ghost', severity: 'INFO' }] },
        ]),
      },
    });

    const result = await resolvePolicy(service, 'process-policy');

    expect(result.rules).toHaveLength(1);
    expect(result.problems).toEqual([
      expect.objectContaining({ code: 'UNKNOWN_OVERRIDE' }),
    ]);
  });

  it('filters rule sets by pluginId scope', async () => {
    const { service } = fakeService({
      rules: { a: rule('a'), b: rule('b') },
      ruleSets: {
        ew: ruleSetWith('ew', ['a']),
        qg: ruleSetWith('qg', ['b']),
      },
      policies: {
        'process-policy': policyWith([
          { ref: latest('ew'), appliesTo: { pluginIds: ['engineering-wizard'] } },
          { ref: latest('qg'), appliesTo: { pluginIds: ['scl-quality-guard'] } },
        ]),
      },
    });

    const result = await resolvePolicy(service, 'process-policy', {
      pluginId: 'engineering-wizard',
    });

    expect(result.rules.map((r) => r.name)).toEqual(['a']);
  });

  it('filters rule sets by sclFileType scope', async () => {
    const { service } = fakeService({
      rules: { a: rule('a') },
      ruleSets: { naming: ruleSetWith('naming', ['a']) },
      policies: {
        'process-policy': policyWith([
          { ref: latest('naming'), appliesTo: { sclFileTypes: ['ICD'] } },
        ]),
      },
    });

    expect(
      (await resolvePolicy(service, 'process-policy', { sclFileType: 'SCD' }))
        .rules,
    ).toHaveLength(0);
    expect(
      (await resolvePolicy(service, 'process-policy', { sclFileType: 'ICD' }))
        .rules,
    ).toHaveLength(1);
  });

  it('treats an empty scope array as no constraint', async () => {
    const { service } = fakeService({
      rules: { a: rule('a') },
      ruleSets: { naming: ruleSetWith('naming', ['a']) },
      policies: {
        'process-policy': policyWith([{ ref: latest('naming'), appliesTo: {} }]),
      },
    });

    const result = await resolvePolicy(service, 'process-policy', {
      pluginId: 'anything',
    });
    expect(result.rules).toHaveLength(1);
  });

  it('reports RULESET_NOT_FOUND and keeps resolving the remaining rule sets', async () => {
    const { service } = fakeService({
      rules: { a: rule('a') },
      ruleSets: { naming: ruleSetWith('naming', ['a']) },
      policies: {
        'process-policy': policyWith([
          { ref: latest('gone') },
          { ref: latest('naming') },
        ]),
      },
    });

    const result = await resolvePolicy(service, 'process-policy');

    expect(result.rules.map((r) => r.name)).toEqual(['a']);
    expect(result.problems).toEqual([
      expect.objectContaining({ code: 'RULESET_NOT_FOUND' }),
    ]);
  });

  it('reports RULE_NOT_FOUND and keeps resolving the remaining rules', async () => {
    const { service } = fakeService({
      rules: { a: rule('a') },
      ruleSets: { naming: ruleSetWith('naming', ['gone', 'a']) },
      policies: { 'process-policy': policyWith([{ ref: latest('naming') }]) },
    });

    const result = await resolvePolicy(service, 'process-policy');

    expect(result.rules.map((r) => r.name)).toEqual(['a']);
    expect(result.problems).toEqual([
      expect.objectContaining({ code: 'RULE_NOT_FOUND' }),
    ]);
  });

  it('reports DUPLICATE_RULE and keeps the first occurrence', async () => {
    const { service } = fakeService({
      rules: { a: rule('a') },
      ruleSets: {
        first: ruleSetWith('first', ['a']),
        second: ruleSetWith('second', ['a']),
      },
      policies: {
        'process-policy': policyWith([
          { ref: latest('first') },
          { ref: latest('second'), overrides: [{ rule: 'a', severity: 'INFO' }] },
        ]),
      },
    });

    const result = await resolvePolicy(service, 'process-policy');

    expect(result.rules).toHaveLength(1);
    expect(result.rules[0].severity).toBe('ERROR');
    expect(result.rules[0].origin?.ruleSet.name).toBe('first');
    expect(result.problems).toEqual([
      expect.objectContaining({ code: 'DUPLICATE_RULE' }),
    ]);
  });

  it('reports UNSUPPORTED_RULE_KIND when the caller cannot execute a kind', async () => {
    const { service } = fakeService({
      rules: { a: rule('a') },
      ruleSets: { naming: ruleSetWith('naming', ['a']) },
      policies: { 'process-policy': policyWith([{ ref: latest('naming') }]) },
    });

    const result = await resolvePolicy(service, 'process-policy', {
      supportedRuleKinds: [],
    });

    expect(result.rules).toHaveLength(0);
    expect(result.problems).toEqual([
      expect.objectContaining({ code: 'UNSUPPORTED_RULE_KIND' }),
    ]);
  });

  it('returns an empty result with a problem when the policy itself is missing', async () => {
    const { service } = fakeService({});

    const result = await resolvePolicy(service, 'process-policy');

    expect(result.rules).toEqual([]);
    expect(result.problems).toEqual([
      expect.objectContaining({
        message: expect.stringMatching(/Policy could not be resolved/),
      }),
    ]);
  });

  it('propagates parse errors instead of degrading them to NOT_FOUND', async () => {
    const { service } = fakeService({
      ruleSets: { naming: ruleSetWith('naming', ['a']) },
      policies: { 'process-policy': policyWith([{ ref: latest('naming') }]) },
    });
    service.loadRule = () =>
      Promise.reject(
        new ContentParseError(ValidationLibraryResourceType.Rule, 'not JSON', latest('a')),
      );

    await expect(resolvePolicy(service, 'process-policy')).rejects.toThrow(
      ContentParseError,
    );
  });

  it('propagates transport errors instead of masking them as problems', async () => {
    const { service } = fakeService({
      ruleSets: { naming: ruleSetWith('naming', []) },
      policies: { 'process-policy': policyWith([{ ref: latest('naming') }]) },
    });
    service.loadRuleSet = () => Promise.reject(new TypeError('network down'));

    await expect(resolvePolicy(service, 'process-policy')).rejects.toThrow(
      'network down',
    );
  });

  it('fetches a rule shared by two rule sets only once', async () => {
    const { service, loadCounts } = fakeService({
      rules: { a: rule('a'), b: rule('b') },
      ruleSets: {
        first: ruleSetWith('first', ['a']),
        second: ruleSetWith('second', ['a', 'b']),
      },
      policies: {
        'process-policy': policyWith([{ ref: latest('first') }, { ref: latest('second') }]),
      },
    });

    await resolvePolicy(service, 'process-policy');

    expect(loadCounts.rule).toBe(2);
  });
});

describe('toXPathValidationServiceRules', () => {
  it('maps resolved rules to the validation-service payload', async () => {
    const { service } = fakeService({
      rules: { a: rule('a', { message: 'boom' }) },
      ruleSets: { naming: ruleSetWith('naming', ['a']) },
      policies: { 'process-policy': policyWith([{ ref: latest('naming') }]) },
    });

    const { rules } = await resolvePolicy(service, 'process-policy');

    expect(toXPathValidationServiceRules(rules)).toEqual([
      {
        name: 'a',
        title: 'Title of a',
        message: 'boom',
        severity: 'ERROR',
        context: 'SCL',
        assertion: 'count(//a) > 0',
      },
    ]);
  });
});
