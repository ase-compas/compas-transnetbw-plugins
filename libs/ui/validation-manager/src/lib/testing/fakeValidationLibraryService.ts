import {
  ResourceNotFoundError,
  ValidationLibraryResourceType,
  type LoadedResource,
  type ValidationLibraryEntry,
  type ValidationLibraryService,
  type ValidationPolicyContent,
  type ValidationRuleContent,
  type ValidationRuleSetContent,
} from '@oscd-transnet-plugins/api-compas-validation-library';

type AnyContent = ValidationRuleContent | ValidationRuleSetContent | ValidationPolicyContent;

/**
 * In-memory stand-in for the backend used across the UI component tests,
 * storing only the newest version of each resource.
 */
export class FakeLibraryService implements ValidationLibraryService {
  private readonly store = new Map<string, AnyContent>();

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

  private list(type: ValidationLibraryResourceType): Promise<ValidationLibraryEntry[]> {
    const entries = [...this.store.entries()]
      .filter(([key]) => key.startsWith(`${type}:`))
      .map(([, content]) =>
        ({
          name: content.name,
          version: '1.0.0',
          description: 'description' in content ? content.description : undefined,
          uploadedAt: new Date(),
        }) as ValidationLibraryEntry,
      );
    return Promise.resolve(entries);
  }

  private publish(type: ValidationLibraryResourceType, content: AnyContent) {
    // Content can originate from Svelte's reactive `$props()`/`$state()` (a
    // Proxy), which `structuredClone` cannot clone. A JSON round-trip is a
    // safe substitute here since the resource content is always plain,
    // serialisable data.
    this.store.set(this.key(type, content.name), JSON.parse(JSON.stringify(content)) as AnyContent);
    return Promise.resolve({ id: 'id', name: content.name, version: '1.0.0' } as never);
  }

  listLatestRules() {
    return this.list(ValidationLibraryResourceType.Rule);
  }
  listLatestRuleSets() {
    return this.list(ValidationLibraryResourceType.Ruleset);
  }
  listLatestPolicies() {
    return this.list(ValidationLibraryResourceType.Policy);
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
    this.store.delete(this.key(ValidationLibraryResourceType.Rule, name));
    return Promise.resolve();
  }
  deleteRuleSet(name: string) {
    this.store.delete(this.key(ValidationLibraryResourceType.Ruleset, name));
    return Promise.resolve();
  }
  deletePolicy(name: string) {
    this.store.delete(this.key(ValidationLibraryResourceType.Policy, name));
    return Promise.resolve();
  }

  // Test-only helpers, not part of ValidationLibraryService.
  seedRuleSet(content: ValidationRuleSetContent) {
    this.store.set(this.key(ValidationLibraryResourceType.Ruleset, content.name), content);
  }
  seedPolicy(content: ValidationPolicyContent) {
    this.store.set(this.key(ValidationLibraryResourceType.Policy, content.name), content);
  }
  ruleSet(name: string): ValidationRuleSetContent | undefined {
    return this.store.get(this.key(ValidationLibraryResourceType.Ruleset, name)) as
      | ValidationRuleSetContent
      | undefined;
  }
  rule(name: string): ValidationRuleContent | undefined {
    return this.store.get(this.key(ValidationLibraryResourceType.Rule, name)) as
      | ValidationRuleContent
      | undefined;
  }
  policy(name: string): ValidationPolicyContent | undefined {
    return this.store.get(this.key(ValidationLibraryResourceType.Policy, name)) as
      | ValidationPolicyContent
      | undefined;
  }
}
