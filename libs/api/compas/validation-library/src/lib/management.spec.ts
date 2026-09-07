import { beforeEach, describe, expect, it } from 'vitest';
import { ValidationLibraryResourceType } from '../generated/models';
import {
  ResourceNotFoundError,
  type LoadedResource,
  type ValidationLibraryService,
  type ValidationPolicyContent,
  type ValidationRuleContent,
  type ValidationRuleSetContent,
} from './service';
import {
  createPolicy,
  createRuleSet,
  PolicyManager,
  RuleSetManager,
  type RuleDraft,
} from './management';

type AnyContent = ValidationRuleContent | ValidationRuleSetContent | ValidationPolicyContent;

interface PublishCall {
  type: ValidationLibraryResourceType;
  name: string;
}

/** In-memory stand-in for the backend, storing only the newest version. */
class FakeLibrary implements ValidationLibraryService {
  readonly store = new Map<string, AnyContent>();
  readonly publishes: PublishCall[] = [];
  readonly deletes: string[] = [];

  private key(type: ValidationLibraryResourceType, name: string) {
    return `${type}:${name}`;
  }

  private load<T extends AnyContent>(
    type: ValidationLibraryResourceType,
    name: string,
  ): Promise<LoadedResource<T>> {
    const content = this.store.get(this.key(type, name));
    if (!content) return Promise.reject(new ResourceNotFoundError(type, name));
    return Promise.resolve({
      name,
      version: '1.0.0',
      entry: {} as LoadedResource<T>['entry'],
      content: content as T,
    });
  }

  private publish(type: ValidationLibraryResourceType, content: AnyContent) {
    this.publishes.push({ type, name: content.name });
    this.store.set(this.key(type, content.name), structuredClone(content));
    return Promise.resolve({ id: 'id', name: content.name, version: '1.0.0' } as never);
  }

  listLatestRules() {
    return Promise.resolve([]);
  }
  listLatestRuleSets() {
    return Promise.resolve([]);
  }
  listLatestPolicies() {
    return Promise.resolve([]);
  }

  loadRule(name: string) {
    return this.load<ValidationRuleContent>(ValidationLibraryResourceType.Rule, name);
  }
  loadRuleSet(name: string) {
    return this.load<ValidationRuleSetContent>(ValidationLibraryResourceType.Ruleset, name);
  }
  loadPolicy(name: string) {
    return this.load<ValidationPolicyContent>(ValidationLibraryResourceType.Policy, name);
  }

  publishRule(content: ValidationRuleContent) {
    return this.publish(ValidationLibraryResourceType.Rule, content);
  }
  publishRuleSet(content: ValidationRuleSetContent) {
    return this.publish(ValidationLibraryResourceType.Ruleset, content);
  }
  publishPolicy(content: ValidationPolicyContent) {
    return this.publish(ValidationLibraryResourceType.Policy, content);
  }

  deleteRule(name: string) {
    this.deletes.push(name);
    this.store.delete(this.key(ValidationLibraryResourceType.Rule, name));
    return Promise.resolve();
  }
  deleteRuleSet(name: string) {
    this.deletes.push(name);
    return Promise.resolve();
  }
  deletePolicy(name: string) {
    this.deletes.push(name);
    return Promise.resolve();
  }

  ruleSet(name: string): ValidationRuleSetContent | undefined {
    return this.store.get(this.key(ValidationLibraryResourceType.Ruleset, name)) as
      | ValidationRuleSetContent
      | undefined;
  }
  policy(name: string): ValidationPolicyContent | undefined {
    return this.store.get(this.key(ValidationLibraryResourceType.Policy, name)) as
      | ValidationPolicyContent
      | undefined;
  }
}

function draft(title: string, overrides: Partial<RuleDraft> = {}): RuleDraft {
  return {
    title,
    description: '',
    context: '//IED',
    assertion: 'count(*) > 0',
    severity: 'ERROR',
    ...overrides,
  };
}

describe('RuleSetManager', () => {
  let fake: FakeLibrary;
  let manager: RuleSetManager;

  beforeEach(() => {
    fake = new FakeLibrary();
    manager = new RuleSetManager(fake);
  });

  it('returns no rules when the rule set does not exist yet', async () => {
    await expect(manager.listRules('rs')).resolves.toEqual([]);
  });

  it('creates the rule and the rule set on first save', async () => {
    const saved = await manager.saveRule('rs', 'rule-a', draft('A'), { title: 'RS' });

    expect(saved.name).toBe('rule-a');
    expect(fake.publishes.map((p) => p.type)).toEqual([
      ValidationLibraryResourceType.Rule,
      ValidationLibraryResourceType.Ruleset,
    ]);
    expect(fake.ruleSet('rs')?.rules).toEqual([{ name: 'rule-a', version: 'latest' }]);
    expect(fake.ruleSet('rs')?.title).toBe('RS');
  });

  it('editing a rule publishes only a new rule version, not the rule set', async () => {
    await manager.saveRule('rs', 'rule-a', draft('A'), { title: 'RS' });
    fake.publishes.length = 0;

    await manager.saveRule('rs', 'rule-a', draft('A', { assertion: 'true()' }), { title: 'RS' });

    expect(fake.publishes).toEqual([
      { type: ValidationLibraryResourceType.Rule, name: 'rule-a' },
    ]);
    const rules = await manager.listRules('rs');
    expect(rules[0]?.assertion).toBe('true()');
  });

  it('adds a second rule without duplicating the first reference', async () => {
    await manager.saveRule('rs', 'rule-a', draft('A'), { title: 'RS' });
    await manager.saveRule('rs', 'rule-b', draft('B'), { title: 'RS' });

    expect(fake.ruleSet('rs')?.rules).toEqual([
      { name: 'rule-a', version: 'latest' },
      { name: 'rule-b', version: 'latest' },
    ]);
  });

  it('removes the reference before deleting the rule', async () => {
    await manager.saveRule('rs', 'rule-a', draft('A'), { title: 'RS' });
    fake.publishes.length = 0;

    await manager.removeRule('rs', 'rule-a');

    expect(fake.publishes).toEqual([
      { type: ValidationLibraryResourceType.Ruleset, name: 'rs' },
    ]);
    expect(fake.deletes).toEqual(['rule-a']);
    await expect(manager.listRules('rs')).resolves.toEqual([]);
  });

  it('does not republish the rule set when the rule was not referenced', async () => {
    await manager.saveRule('rs', 'rule-a', draft('A'), { title: 'RS' });
    fake.publishes.length = 0;

    await manager.removeRule('rs', 'rule-x');

    expect(fake.publishes).toEqual([]);
    expect(fake.deletes).toEqual(['rule-x']);
  });

  it('detachRule removes the reference without deleting the rule resource', async () => {
    await manager.saveRule('rs', 'rule-a', draft('A'), { title: 'RS' });
    fake.publishes.length = 0;

    await manager.detachRule('rs', 'rule-a');

    expect(fake.publishes).toEqual([
      { type: ValidationLibraryResourceType.Ruleset, name: 'rs' },
    ]);
    expect(fake.deletes).toEqual([]);
    expect(fake.ruleSet('rs')?.rules).toEqual([]);
  });

  it('skips rules whose blob disappeared instead of failing the whole list', async () => {
    await manager.saveRule('rs', 'alive', draft('Alive'), { title: 'RS' });
    await manager.saveRule('rs', 'dead', draft('Dead'), { title: 'RS' });
    await fake.deleteRule('dead');

    const rules = await manager.listRules('rs');
    expect(rules.map((r) => r.name)).toEqual(['alive']);
  });
});

describe('PolicyManager', () => {
  let fake: FakeLibrary;
  let manager: PolicyManager;

  beforeEach(() => {
    fake = new FakeLibrary();
    manager = new PolicyManager(fake);
  });

  it('returns undefined for a policy that does not exist', async () => {
    await expect(manager.load('p')).resolves.toBeUndefined();
  });

  it('creates a policy on first bind', async () => {
    await manager.bindRuleSet('p', { ruleSetName: 'rs' }, { title: 'Policy' });

    const policy = fake.policy('p');
    expect(policy?.title).toBe('Policy');
    expect(policy?.ruleSets).toEqual([{ ref: { name: 'rs', version: 'latest' } }]);
  });

  it('does not recreate an existing policy', async () => {
    await manager.ensureExists('p', { title: 'Policy' });
    fake.publishes.length = 0;

    await manager.ensureExists('p', { title: 'Policy (ignored)' });
    expect(fake.publishes).toEqual([]);
  });

  it('adds a second binding when the same rule set is bound again under a different scope (e.g. per-plugin)', async () => {
    await manager.bindRuleSet('p', { ruleSetName: 'rs' }, { title: 'Policy' });
    await manager.bindRuleSet(
      'p',
      { ruleSetName: 'rs', appliesTo: { pluginIds: ['ew'] } },
      { title: 'Policy' },
    );

    expect(fake.policy('p')?.ruleSets).toEqual([
      { ref: { name: 'rs', version: 'latest' } },
      { ref: { name: 'rs', version: 'latest' }, appliesTo: { pluginIds: ['ew'] } },
    ]);
  });

  it('replaces overrides when binding the same rule set again under the exact same scope', async () => {
    await manager.bindRuleSet('p', { ruleSetName: 'rs', appliesTo: { pluginIds: ['ew'] } }, { title: 'Policy' });
    await manager.bindRuleSet(
      'p',
      { ruleSetName: 'rs', appliesTo: { pluginIds: ['ew'] }, overrides: [{ rule: 'r1', enabled: false }] },
      { title: 'Policy' },
    );

    expect(fake.policy('p')?.ruleSets).toEqual([
      {
        ref: { name: 'rs', version: 'latest' },
        appliesTo: { pluginIds: ['ew'] },
        overrides: [{ rule: 'r1', enabled: false }],
      },
    ]);
  });

  it('binds a second rule set alongside the first', async () => {
    await manager.bindRuleSet('p', { ruleSetName: 'rs1' }, { title: 'Policy' });
    await manager.bindRuleSet('p', { ruleSetName: 'rs2' }, { title: 'Policy' });

    expect(fake.policy('p')?.ruleSets.map((b) => b.ref.name)).toEqual(['rs1', 'rs2']);
  });

  it('unbinds a rule set', async () => {
    await manager.bindRuleSet('p', { ruleSetName: 'rs1' }, { title: 'Policy' });
    await manager.bindRuleSet('p', { ruleSetName: 'rs2' }, { title: 'Policy' });
    fake.publishes.length = 0;

    await manager.unbindRuleSet('p', 'rs1');

    expect(fake.policy('p')?.ruleSets.map((b) => b.ref.name)).toEqual(['rs2']);
    expect(fake.publishes).toEqual([
      { type: ValidationLibraryResourceType.Policy, name: 'p' },
    ]);
  });

  it('unbinding a non-bound rule set is a no-op', async () => {
    await manager.bindRuleSet('p', { ruleSetName: 'rs1' }, { title: 'Policy' });
    fake.publishes.length = 0;

    await manager.unbindRuleSet('p', 'unknown');
    expect(fake.publishes).toEqual([]);
  });

  it('unbinding from a policy that does not exist is a no-op', async () => {
    await expect(manager.unbindRuleSet('nope', 'rs')).resolves.toBeUndefined();
  });

  it('unbinds only the scoped binding when appliesTo is given, leaving other scopes of the same rule set intact', async () => {
    await manager.bindRuleSet('p', { ruleSetName: 'rs', appliesTo: { pluginIds: ['ew'] } }, { title: 'Policy' });
    await manager.bindRuleSet('p', { ruleSetName: 'rs', appliesTo: { pluginIds: ['qg'] } }, { title: 'Policy' });

    await manager.unbindRuleSet('p', 'rs', { pluginIds: ['ew'] });

    expect(fake.policy('p')?.ruleSets).toEqual([
      { ref: { name: 'rs', version: 'latest' }, appliesTo: { pluginIds: ['qg'] } },
    ]);
  });

  it('unbinds all scopes of a rule set when appliesTo is omitted', async () => {
    await manager.bindRuleSet('p', { ruleSetName: 'rs', appliesTo: { pluginIds: ['ew'] } }, { title: 'Policy' });
    await manager.bindRuleSet('p', { ruleSetName: 'rs', appliesTo: { pluginIds: ['qg'] } }, { title: 'Policy' });

    await manager.unbindRuleSet('p', 'rs');

    expect(fake.policy('p')?.ruleSets).toEqual([]);
  });
});

describe('createRuleSet / createPolicy', () => {
  it('creates an empty rule set', async () => {
    const fake = new FakeLibrary();
    await createRuleSet(fake, 'rs', { title: 'RS', description: 'desc' });

    expect(fake.ruleSet('rs')).toEqual({
      schemaVersion: '1.0.0',
      name: 'rs',
      title: 'RS',
      description: 'desc',
      rules: [],
    });
  });

  it('creates an empty policy', async () => {
    const fake = new FakeLibrary();
    await createPolicy(fake, 'p', { title: 'Policy' });

    expect(fake.policy('p')).toEqual({
      schemaVersion: '1.0.0',
      name: 'p',
      title: 'Policy',
      ruleSets: [],
    });
  });
});
