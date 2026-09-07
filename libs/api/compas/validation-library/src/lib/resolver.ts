import {
  ResolutionProblemCodeEnum,
  ValidationRuleKind,
  type PolicyScope,
  type PolicyScopeSclFileTypesEnum,
  type ResolutionProblem,
  type ResolvedValidationPolicy,
  type ResolvedValidationRule,
  type ResourceRef,
  type RuleOverride,
  type ValidationPolicyContent,
  type ValidationRuleContent,
  type ValidationRuleSetContent,
} from '../generated/models';
import { UnsupportedSchemaVersionError } from './content';
import {
  ResourceNotFoundError,
  type LoadedResource,
  type ValidationLibraryService,
} from './service';

/** Latest version selector; always used since pinned versions aren't supported. */
const LATEST_REF = (name: string): ResourceRef => ({ name, version: 'latest' });

/** Context the policy is being resolved for; drives `appliesTo` filtering. */
export interface ResolutionContext {
  /** Id of the consuming plugin, e.g. `engineering-wizard` or `scl-quality-guard`. */
  pluginId?: string;
  /** SCL file type of the document about to be validated. */
  sclFileType?: PolicyScopeSclFileTypesEnum;
}

export interface ResolveOptions extends ResolutionContext {
  /** Rule kinds the caller can execute. Defaults to every kind this client knows. */
  supportedRuleKinds?: readonly ValidationRuleKind[];
}

function matchesScope(scope: PolicyScope | undefined, context: ResolutionContext): boolean {
  if (!scope) return true;

  // An empty array is treated as "no constraint" so that a half-filled scope
  // does not silently disable an entire rule set.
  const pluginIds = scope.pluginIds ?? [];
  if (pluginIds.length > 0 && (!context.pluginId || !pluginIds.includes(context.pluginId))) {
    return false;
  }

  const sclFileTypes = scope.sclFileTypes ?? [];
  if (
    sclFileTypes.length > 0 &&
    (!context.sclFileType || !sclFileTypes.includes(context.sclFileType))
  ) {
    return false;
  }
  return true;
}

function problem(
  code: ResolutionProblemCodeEnum,
  message: string,
  ref?: ResourceRef,
): ResolutionProblem {
  return ref ? { code, message, ref } : { code, message };
}

function describeLoadFailure(
  error: unknown,
  ref: ResourceRef,
  notFoundCode: ResolutionProblemCodeEnum,
): ResolutionProblem | undefined {
  if (error instanceof ResourceNotFoundError) {
    return problem(notFoundCode, error.message, ref);
  }
  if (error instanceof UnsupportedSchemaVersionError) {
    return problem(ResolutionProblemCodeEnum.UnsupportedSchemaVersion, error.message, ref);
  }
  // ContentParseError and transport/auth failures are not resolution problems -
  // a malformed blob is data corruption and must surface to the caller, not be
  // silently reported as "not found".
  return undefined;
}

function applyOverride(
  rule: ResolvedValidationRule,
  override: RuleOverride | undefined,
): ResolvedValidationRule | undefined {
  if (!override) return rule;
  if (override.enabled === false) return undefined;
  return override.severity ? { ...rule, severity: override.severity } : rule;
}

function toResolvedRule(
  content: ValidationRuleContent,
  version: string,
  origin: { policy: ResourceRef; ruleSet: ResourceRef },
): ResolvedValidationRule {
  return {
    name: content.name,
    version,
    title: content.title,
    ...(content.message !== undefined ? { message: content.message } : {}),
    kind: content.kind,
    severity: content.defaultSeverity,
    definition: content.definition,
    origin,
  };
}

/**
 * Resolves a policy into the flat list of rules a plugin should execute.
 *
 * Always resolves the newest version of each referenced resource; version
 * pinning is not supported. Resolution is deliberately fault tolerant: a
 * dangling reference or an unreadable blob degrades a single rule (set) into
 * a {@link ResolutionProblem} instead of failing the whole run. Transport,
 * authentication and content-parse errors are *not* swallowed and propagate
 * to the caller.
 */
export async function resolvePolicy(
  service: ValidationLibraryService,
  policyName: string,
  options: ResolveOptions = {},
): Promise<ResolvedValidationPolicy> {
  const supportedKinds = new Set<string>(
    options.supportedRuleKinds ?? Object.values(ValidationRuleKind),
  );
  const problems: ResolutionProblem[] = [];
  const policyRef = LATEST_REF(policyName);

  let policy: LoadedResource<ValidationPolicyContent>;
  try {
    policy = await service.loadPolicy(policyName);
  } catch (error) {
    const described = describeLoadFailure(
      error,
      policyRef,
      ResolutionProblemCodeEnum.RulesetNotFound,
    );
    if (!described) throw error;
    return {
      policy: policyRef,
      rules: [],
      problems: [problem(described.code, `Policy could not be resolved: ${described.message}`, policyRef)],
    };
  }

  const resolvedPolicyRef: ResourceRef = { name: policy.name, version: policy.version };
  const rules: ResolvedValidationRule[] = [];
  const rulesByName = new Map<string, ResolvedValidationRule>();
  // A rule referenced by several rule sets must only be fetched once.
  const ruleCache = new Map<string, Promise<LoadedResource<ValidationRuleContent>>>();

  for (const binding of policy.content.ruleSets) {
    if (!matchesScope(binding.appliesTo, options)) continue;

    let ruleSet: LoadedResource<ValidationRuleSetContent>;
    try {
      ruleSet = await service.loadRuleSet(binding.ref.name);
    } catch (error) {
      const described = describeLoadFailure(
        error,
        binding.ref,
        ResolutionProblemCodeEnum.RulesetNotFound,
      );
      if (!described) throw error;
      problems.push(described);
      continue;
    }

    const overrides = new Map<string, RuleOverride>(
      (binding.overrides ?? []).map((override) => [override.rule, override]),
    );
    const usedOverrides = new Set<string>();
    const ruleSetRef: ResourceRef = { name: ruleSet.name, version: ruleSet.version };

    for (const ruleRef of ruleSet.content.rules) {
      let loaded: LoadedResource<ValidationRuleContent>;
      try {
        let pending = ruleCache.get(ruleRef.name);
        if (!pending) {
          pending = service.loadRule(ruleRef.name);
          ruleCache.set(ruleRef.name, pending);
        }
        loaded = await pending;
      } catch (error) {
        // Do not cache failures: a later retry of the same resolution may succeed.
        ruleCache.delete(ruleRef.name);
        const described = describeLoadFailure(
          error,
          ruleRef,
          ResolutionProblemCodeEnum.RuleNotFound,
        );
        if (!described) throw error;
        problems.push(described);
        continue;
      }

      if (!supportedKinds.has(loaded.content.kind)) {
        problems.push(
          problem(
            ResolutionProblemCodeEnum.UnsupportedRuleKind,
            `Rule "${loaded.content.name}" has unsupported kind "${loaded.content.kind}"`,
            { name: loaded.name, version: loaded.version },
          ),
        );
        continue;
      }

      const override = overrides.get(loaded.content.name);
      if (override) usedOverrides.add(override.rule);

      const resolved = applyOverride(
        toResolvedRule(loaded.content, loaded.version, {
          policy: resolvedPolicyRef,
          ruleSet: ruleSetRef,
        }),
        override,
      );
      if (!resolved) continue;

      const existing = rulesByName.get(resolved.name);
      if (existing) {
        problems.push(
          problem(
            ResolutionProblemCodeEnum.DuplicateRule,
            `Rule "${resolved.name}" is already contributed by rule set "${
              existing.origin?.ruleSet.name ?? 'unknown'
            }"; the occurrence from "${ruleSetRef.name}" is ignored`,
            { name: loaded.name, version: loaded.version },
          ),
        );
        continue;
      }
      rulesByName.set(resolved.name, resolved);
      rules.push(resolved);
    }

    for (const override of overrides.values()) {
      if (usedOverrides.has(override.rule)) continue;
      problems.push(
        problem(
          ResolutionProblemCodeEnum.UnknownOverride,
          `Override targets rule "${override.rule}" which is not part of rule set "${ruleSetRef.name}"`,
          ruleSetRef,
        ),
      );
    }
  }

  return { policy: resolvedPolicyRef, rules, problems };
}

/** Result of resolving several policies into one executable rule list. */
export interface ResolvedValidationPolicySet {
  /** The concrete policy versions that were resolved, in input order. */
  policies: ResourceRef[];
  rules: ResolvedValidationRule[];
  problems: ResolutionProblem[];
}

/**
 * Resolves several policies and merges them into a single rule list.
 *
 * Policies are resolved in the given order and rules are deduplicated by name
 * across *all* of them - the first occurrence wins, every later one is
 * reported as `DUPLICATE_RULE`. Duplicate policy names are ignored rather
 * than resolved twice.
 */
export async function resolvePolicies(
  service: ValidationLibraryService,
  policyNames: readonly string[],
  options: ResolveOptions = {},
): Promise<ResolvedValidationPolicySet> {
  const policies: ResourceRef[] = [];
  const rules: ResolvedValidationRule[] = [];
  const problems: ResolutionProblem[] = [];
  const seenRules = new Map<string, ResolvedValidationRule>();
  const seenPolicies = new Set<string>();

  for (const name of policyNames) {
    if (seenPolicies.has(name)) continue;
    seenPolicies.add(name);

    const resolved = await resolvePolicy(service, name, options);
    policies.push(resolved.policy);
    problems.push(...(resolved.problems ?? []));

    for (const rule of resolved.rules) {
      const existing = seenRules.get(rule.name);
      if (existing) {
        problems.push(
          problem(
            ResolutionProblemCodeEnum.DuplicateRule,
            `Rule "${rule.name}" is already contributed by policy "${
              existing.origin?.policy.name ?? 'unknown'
            }"; the occurrence from "${resolved.policy.name}" is ignored`,
            { name: rule.name, version: rule.version },
          ),
        );
        continue;
      }
      seenRules.set(rule.name, rule);
      rules.push(rule);
    }
  }

  return { policies, rules, problems };
}
