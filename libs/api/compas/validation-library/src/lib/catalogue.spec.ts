import { describe, expect, it, vi } from 'vitest';
import {
  ResolutionProblemCodeEnum,
  ValidationLibraryResourceType,
  type ValidationLibraryEntry,
  type ValidationPolicyContent,
  type ValidationRuleContent,
  type ValidationRuleSetContent,
} from '../generated/models';
import { resolvePolicies } from './resolver';
import { listPolicies, listRuleSets } from './catalogue';
import {
  ResourceNotFoundError,
  type LoadedResource,
  type ValidationLibraryService,
} from './service';

function rule(name: string, severity = 'ERROR'): ValidationRuleContent {
  return {
    schemaVersion: '1.0.0',
    name,
    title: `Title of ${name}`,
    kind: 'XPATH',
    defaultSeverity: severity,
    definition: { context: 'SCL', assertion: `count(//${name}) > 0` },
  } as ValidationRuleContent;
}

const latest = (name: string) => ({ name, version: 'latest' as const });

function ruleSet(name: string, ruleNames: string[]): ValidationRuleSetContent {
  return {
    schemaVersion: '1.0.0',
    name,
    title: name,
    rules: ruleNames.map(latest),
  };
}

function policy(
  name: string,
  ruleSets: ValidationPolicyContent['ruleSets'],
): ValidationPolicyContent {
  return { schemaVersion: '1.0.0', name, title: name, ruleSets };
}

function fakeService(data: {
  rules?: Record<string, ValidationRuleContent>;
  ruleSets?: Record<string, ValidationRuleSetContent>;
  policies?: Record<string, ValidationPolicyContent>;
  latestPolicies?: ValidationLibraryEntry[];
  latestRuleSets?: ValidationLibraryEntry[];
}): ValidationLibraryService {
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

  return {
    listLatestRules: vi.fn().mockResolvedValue([]),
    listLatestRuleSets: vi.fn().mockResolvedValue(data.latestRuleSets ?? []),
    listLatestPolicies: vi.fn().mockResolvedValue(data.latestPolicies ?? []),
    loadRule: (name) => make(ValidationLibraryResourceType.Rule, data.rules, name),
    loadRuleSet: (name) => make(ValidationLibraryResourceType.Ruleset, data.ruleSets, name),
    loadPolicy: (name) => make(ValidationLibraryResourceType.Policy, data.policies, name),
    publishRule: vi.fn(),
    publishRuleSet: vi.fn(),
    publishPolicy: vi.fn(),
    deleteRule: vi.fn(),
    deleteRuleSet: vi.fn(),
    deletePolicy: vi.fn(),
  };
}

describe('resolvePolicies', () => {
  const service = () =>
    fakeService({
      rules: { a: rule('a'), b: rule('b'), c: rule('c') },
      ruleSets: { rs1: ruleSet('rs1', ['a', 'b']), rs2: ruleSet('rs2', ['b', 'c']) },
      policies: {
        p1: policy('p1', [{ ref: latest('rs1') }]),
        p2: policy('p2', [{ ref: latest('rs2') }]),
      },
    });

  it('merges the rules of several policies', async () => {
    const result = await resolvePolicies(service(), ['p1', 'p2']);

    expect(result.rules.map((r) => r.name)).toEqual(['a', 'b', 'c']);
    expect(result.policies.map((p) => p.name)).toEqual(['p1', 'p2']);
  });

  it('keeps the first occurrence of a rule and reports the later one', async () => {
    const result = await resolvePolicies(service(), ['p1', 'p2']);

    const duplicates = result.problems.filter(
      (p) => p.code === ResolutionProblemCodeEnum.DuplicateRule,
    );
    expect(duplicates).toHaveLength(1);
    expect(duplicates[0]?.message).toContain('"b"');
    expect(duplicates[0]?.message).toContain('p1');
  });

  it('lets policy order decide precedence', async () => {
    const svc = fakeService({
      rules: { a: rule('a') },
      ruleSets: { rs1: ruleSet('rs1', ['a']), rs2: ruleSet('rs2', ['a']) },
      policies: {
        strict: policy('strict', [{ ref: latest('rs1') }]),
        // The same rule, downgraded to a warning.
        lax: policy('lax', [
          { ref: latest('rs2'), overrides: [{ rule: 'a', severity: 'WARNING' }] },
        ]),
      },
    });

    const laxFirst = await resolvePolicies(svc, ['lax', 'strict']);
    const strictFirst = await resolvePolicies(svc, ['strict', 'lax']);

    expect(laxFirst.rules[0]?.severity).toBe('WARNING');
    expect(strictFirst.rules[0]?.severity).toBe('ERROR');
  });

  it('ignores a repeated policy reference instead of resolving it twice', async () => {
    const result = await resolvePolicies(service(), ['p1', 'p1']);

    expect(result.policies).toHaveLength(1);
    expect(result.problems).toEqual([]);
    expect(result.rules.map((r) => r.name)).toEqual(['a', 'b']);
  });

  it('degrades a missing policy into a problem and still runs the others', async () => {
    const result = await resolvePolicies(service(), ['nope', 'p1']);

    expect(result.rules.map((r) => r.name)).toEqual(['a', 'b']);
    expect(result.problems).toHaveLength(1);
    expect(result.problems[0]?.message).toContain('Policy could not be resolved');
  });

  it('returns nothing for an empty policy selection without calling the backend', async () => {
    const svc = service();
    const spy = vi.spyOn(svc, 'loadPolicy');

    const result = await resolvePolicies(svc, []);

    expect(result).toEqual({ policies: [], rules: [], problems: [] });
    expect(spy).not.toHaveBeenCalled();
  });

  it('passes the resolution context through to scope filtering', async () => {
    const svc = fakeService({
      rules: { a: rule('a'), b: rule('b') },
      ruleSets: { rs1: ruleSet('rs1', ['a']), rs2: ruleSet('rs2', ['b']) },
      policies: {
        p: policy('p', [
          { ref: latest('rs1'), appliesTo: { pluginIds: ['scl-quality-guard'] } },
          { ref: latest('rs2'), appliesTo: { pluginIds: ['engineering-wizard'] } },
        ]),
      },
    });

    const result = await resolvePolicies(svc, ['p'], {
      pluginId: 'scl-quality-guard',
    });

    expect(result.rules.map((r) => r.name)).toEqual(['a']);
  });
});

function entry(name: string, version: string, uploaded = '2024-01-01'): ValidationLibraryEntry {
  return {
    id: `${name}-${version}`,
    type: ValidationLibraryResourceType.Policy,
    tenant: 'default',
    name,
    contentType: 'application/json',
    version,
    dataCompatibilityVersion: '1.0.0',
    uploadedAt: new Date(uploaded),
  } as ValidationLibraryEntry;
}

describe('listPolicies', () => {
  it('sorts by name and forwards backend metadata', async () => {
    const svc = fakeService({
      latestPolicies: [entry('b-policy', '1.0.0'), entry('a-policy', '2.0.0')],
    });

    const result = await listPolicies(svc);

    expect(result).toEqual([
      expect.objectContaining({ name: 'a-policy', version: '2.0.0' }),
      expect.objectContaining({ name: 'b-policy', version: '1.0.0' }),
    ]);
    expect(svc.listLatestPolicies).toHaveBeenCalledTimes(1);
  });

  it('returns an empty array when the backend has no policies', async () => {
    await expect(listPolicies(fakeService({}))).resolves.toEqual([]);
  });
});

describe('listRuleSets', () => {
  it('queries the ruleset resource type', async () => {
    const svc = fakeService({ latestRuleSets: [entry('rs', '1.0.0')] });

    const result = await listRuleSets(svc);

    expect(result).toEqual([expect.objectContaining({ name: 'rs', version: '1.0.0' })]);
    expect(svc.listLatestRuleSets).toHaveBeenCalledTimes(1);
  });
});
