import type {
  PolicyRuleSetBinding,
  PolicyScope,
  SeverityLevel,
  ValidationPolicyContent,
  ValidationRuleContent,
  ValidationRuleSetContent,
} from '../generated/models';
import { ContentParseError, UnsupportedSchemaVersionError } from './content';
import { ResourceNotFoundError, type ValidationLibraryService } from './service';

/** Schema version this client writes. Bump on a breaking content-shape change. */
export const MANAGEMENT_SCHEMA_VERSION = '1.0.0';

/** All resource references are at `latest`; version pinning is not supported. */
const LATEST = 'latest';

/**
 * The shape a rule editor works on.
 *
 * Deliberately not the stored format: it is flat and is what a form binds to.
 * Converted to and from {@link ValidationRuleContent} at the library boundary.
 */
export interface RuleDraft {
  /** Library resource name. Absent while creating a rule. */
  name?: string;
  title: string;
  description: string;
  context: string;
  assertion: string;
  message?: string;
  severity: SeverityLevel;
  /**
   * Opaque form builder state. Persisted verbatim so a rule can be reopened in
   * the visual editor; never interpreted during validation.
   */
  ruleUi?: Record<string, unknown>;
}

export function emptyRuleDraft(): RuleDraft {
  return { title: '', description: '', context: '//SCL', assertion: '', message: '', severity: 'ERROR' };
}

export function toRuleContent(draft: RuleDraft, name: string): ValidationRuleContent {
  const message = draft.message?.trim();
  const description = draft.description?.trim();

  return {
    schemaVersion: MANAGEMENT_SCHEMA_VERSION,
    name,
    title: draft.title.trim(),
    ...(description ? { description } : {}),
    kind: 'XPATH',
    defaultSeverity: draft.severity,
    ...(message ? { message } : {}),
    definition: {
      context: draft.context.trim(),
      assertion: draft.assertion.trim(),
    },
    ...(draft.ruleUi ? { ui: draft.ruleUi } : {}),
  };
}

export function toRuleDraft(content: ValidationRuleContent): RuleDraft {
  return {
    name: content.name,
    title: content.title,
    description: content.description ?? '',
    context: content.definition.context,
    assertion: content.definition.assertion,
    message: content.message ?? '',
    severity: content.defaultSeverity,
    ...(content.ui ? { ruleUi: content.ui } : {}),
  };
}

/**
 * Loads a resource, returning `undefined` if it does not exist or its blob is
 * unreadable. A single corrupt blob should not lock the editor out of the whole
 * catalogue; transport/auth errors still propagate.
 */
async function loadOptional<T>(load: () => Promise<T>): Promise<T | undefined> {
  try {
    return await load();
  } catch (error) {
    if (error instanceof ResourceNotFoundError) return undefined;
    if (error instanceof ContentParseError || error instanceof UnsupportedSchemaVersionError) {
      console.warn('[validation-library] skipping unreadable resource:', error);
      return undefined;
    }
    throw error;
  }
}

/** Metadata used only the first time a rule set or policy is created on demand. */
export interface ResourceMetadata {
  title: string;
  description?: string;
}

/**
 * CRUD orchestration for one rule set: publishing rule versions and keeping
 * the rule set's `rules` array in sync.
 *
 * Every write publishes a new (patch) version of the resource; there is no
 * "unchanged, skip" branch - the backend copes with redundant patch versions
 * fine and this keeps the client simple.
 */
export class RuleSetManager {
  constructor(private readonly service: ValidationLibraryService) {}

  async listRules(ruleSetName: string): Promise<RuleDraft[]> {
    const ruleSet = await loadOptional(() => this.service.loadRuleSet(ruleSetName));
    if (!ruleSet) return [];

    const loaded = await Promise.all(
      ruleSet.content.rules.map((ref) => loadOptional(() => this.service.loadRule(ref.name))),
    );

    // A missing rule means the blob was deleted behind our back; skipping it
    // keeps the editor usable instead of failing the whole list.
    return loaded
      .filter((entry): entry is NonNullable<typeof entry> => entry !== undefined)
      .map((entry) => toRuleDraft(entry.content));
  }

  /**
   * Publishes a rule and makes sure the rule set references it.
   *
   * @param ruleName resource name to publish/update. Required when editing an
   *   existing rule (pass `draft.name`); for a new rule, callers derive one
   *   (e.g. from the title) and pass it here.
   * @param ruleSetMeta used only if the rule set does not exist yet.
   */
  async saveRule(
    ruleSetName: string,
    ruleName: string,
    draft: RuleDraft,
    ruleSetMeta: ResourceMetadata,
  ): Promise<RuleDraft> {
    await this.service.publishRule(toRuleContent(draft, ruleName));
    await this.ensureRuleSetContains(ruleSetName, ruleName, ruleSetMeta);
    return { ...draft, name: ruleName };
  }

  /**
   * Removes a rule reference from the rule set. The underlying rule resource
   * is left alone, so a rule shared by several rule sets stays intact.
   * A no-op if the rule set doesn't exist or doesn't reference the rule.
   */
  async detachRule(ruleSetName: string, ruleName: string): Promise<void> {
    const ruleSet = await loadOptional(() => this.service.loadRuleSet(ruleSetName));
    if (!ruleSet) return;

    const rules = ruleSet.content.rules.filter((ref) => ref.name !== ruleName);
    if (rules.length === ruleSet.content.rules.length) return;

    await this.service.publishRuleSet({ ...ruleSet.content, rules });
  }

  /**
   * Removes a rule from the rule set **and** deletes the underlying rule
   * resource. Intended for "owning" rule sets (one rule set per consumer,
   * rules are private) - do not use in a shared catalogue where other rule
   * sets or policy overrides may still reference the rule.
   *
   * The rule set is republished *before* the rule is deleted so a concurrent
   * resolution never observes a dangling reference.
   */
  async removeRule(ruleSetName: string, ruleName: string): Promise<void> {
    await this.detachRule(ruleSetName, ruleName);
    await this.service.deleteRule(ruleName);
  }

  private async ensureRuleSetContains(
    ruleSetName: string,
    ruleName: string,
    meta: ResourceMetadata,
  ): Promise<void> {
    const ref = { name: ruleName, version: LATEST };
    const existing = await loadOptional(() => this.service.loadRuleSet(ruleSetName));

    if (!existing) {
      await this.service.publishRuleSet({
        schemaVersion: MANAGEMENT_SCHEMA_VERSION,
        name: ruleSetName,
        title: meta.title,
        ...(meta.description ? { description: meta.description } : {}),
        rules: [ref],
      });
      return;
    }

    if (existing.content.rules.some((entry) => entry.name === ruleName)) return;

    await this.service.publishRuleSet({
      ...existing.content,
      rules: [...existing.content.rules, ref],
    });
  }
}

/** A rule set binding as edited in a policy UI, before it is written back. */
export interface RuleSetBindingDraft {
  ruleSetName: string;
  appliesTo?: PolicyScope;
  overrides?: Array<{ rule: string; enabled?: boolean; severity?: SeverityLevel }>;
}

/**
 * Compares bindings by name **and** scope: a rule set can legitimately be
 * bound multiple times to the same policy under different `appliesTo` scopes
 * (e.g. one binding per plugin).
 */
function bindingKey(ruleSetName: string, appliesTo: PolicyScope | undefined): string {
  const pluginIds = [...(appliesTo?.pluginIds ?? [])].sort();
  const sclFileTypes = [...(appliesTo?.sclFileTypes ?? [])].sort();
  return JSON.stringify([ruleSetName, pluginIds, sclFileTypes]);
}

/**
 * CRUD orchestration for a policy's rule-set bindings.
 *
 * Kept separate from {@link RuleSetManager}: a policy binds *existing* rule
 * sets (by reference, always at `latest`) and does not know about individual
 * rules.
 */
export class PolicyManager {
  constructor(private readonly service: ValidationLibraryService) {}

  async load(policyName: string): Promise<ValidationPolicyContent | undefined> {
    const loaded = await loadOptional(() => this.service.loadPolicy(policyName));
    return loaded?.content;
  }

  /** Creates the policy if it does not exist yet, otherwise a no-op. */
  async ensureExists(policyName: string, meta: ResourceMetadata): Promise<void> {
    const existing = await this.load(policyName);
    if (existing) return;

    await this.service.publishPolicy({
      schemaVersion: MANAGEMENT_SCHEMA_VERSION,
      name: policyName,
      title: meta.title,
      ...(meta.description ? { description: meta.description } : {}),
      ruleSets: [],
    });
  }

  /**
   * Adds or replaces a rule set binding on a policy, creating the policy on
   * demand. A binding is matched by rule set name *and* `appliesTo` scope, so
   * the same rule set can be bound multiple times under different scopes.
   */
  async bindRuleSet(
    policyName: string,
    binding: RuleSetBindingDraft,
    policyMeta: ResourceMetadata,
  ): Promise<void> {
    await this.ensureExists(policyName, policyMeta);
    const existing = await this.load(policyName);
    if (!existing) throw new Error(`Policy "${policyName}" could not be loaded after creation`);

    const next: PolicyRuleSetBinding = {
      ref: { name: binding.ruleSetName, version: LATEST },
      ...(binding.appliesTo ? { appliesTo: binding.appliesTo } : {}),
      ...(binding.overrides ? { overrides: binding.overrides } : {}),
    };
    const key = bindingKey(binding.ruleSetName, binding.appliesTo);

    const ruleSets = [
      ...existing.ruleSets.filter((entry) => bindingKey(entry.ref.name, entry.appliesTo) !== key),
      next,
    ];
    await this.service.publishPolicy({ ...existing, ruleSets });
  }

  /**
   * Removes a rule set binding from a policy. A no-op if it isn't bound.
   *
   * When `appliesTo` is given, only the binding under that exact scope is
   * removed. When omitted, *all* bindings of that rule set name are removed,
   * regardless of scope.
   */
  async unbindRuleSet(
    policyName: string,
    ruleSetName: string,
    appliesTo?: PolicyScope,
  ): Promise<void> {
    const existing = await this.load(policyName);
    if (!existing) return;

    const ruleSets =
      appliesTo === undefined
        ? existing.ruleSets.filter((entry) => entry.ref.name !== ruleSetName)
        : existing.ruleSets.filter(
            (entry) =>
              bindingKey(entry.ref.name, entry.appliesTo) !== bindingKey(ruleSetName, appliesTo),
          );
    if (ruleSets.length === existing.ruleSets.length) return;

    await this.service.publishPolicy({ ...existing, ruleSets });
  }
}

/** Creates a new, empty rule set in the catalogue. */
export async function createRuleSet(
  service: ValidationLibraryService,
  name: string,
  meta: ResourceMetadata,
): Promise<void> {
  await service.publishRuleSet({
    schemaVersion: MANAGEMENT_SCHEMA_VERSION,
    name,
    title: meta.title,
    ...(meta.description ? { description: meta.description } : {}),
    rules: [],
  });
}

/** Creates a new, empty policy in the catalogue. */
export async function createPolicy(
  service: ValidationLibraryService,
  name: string,
  meta: ResourceMetadata,
): Promise<void> {
  await service.publishPolicy({
    schemaVersion: MANAGEMENT_SCHEMA_VERSION,
    name,
    title: meta.title,
    ...(meta.description ? { description: meta.description } : {}),
    ruleSets: [],
  });
}
