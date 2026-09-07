import { PublishValidationLibraryResourceContentTypeEnum } from '../generated';
import {
  ValidationLibraryResourceType,
  type PublishValidationLibraryResourceResponse,
  type ValidationLibraryEntry,
  type ValidationLibraryEntryWithContent,
  type ValidationPolicyContent,
  type ValidationRuleContent,
  type ValidationRuleSetContent,
} from '../generated/models';
import type { ValidationLibraryApis } from './client';
import {
  parseValidationPolicyContent,
  parseValidationRuleContent,
  parseValidationRuleSetContent,
} from './content';

/** Raised when a resource does not exist. */
export class ResourceNotFoundError extends Error {
  constructor(
    readonly resourceType: ValidationLibraryResourceType,
    readonly name: string,
  ) {
    super(`${resourceType} "${name}" not found`);
    this.name = 'ResourceNotFoundError';
  }
}

/** A parsed resource together with the concrete version it resolved to. */
export interface LoadedResource<T> {
  name: string;
  version: string;
  entry: ValidationLibraryEntryWithContent;
  content: T;
}

/**
 * Thin wrapper around the generated API clients. Every read fetches the
 * newest published version - version pinning is intentionally not supported
 * to keep the client simple.
 */
export interface ValidationLibraryService {
  /** Returns metadata (no content) for every resource of one type. */
  listLatestRules(): Promise<ValidationLibraryEntry[]>;
  listLatestRuleSets(): Promise<ValidationLibraryEntry[]>;
  listLatestPolicies(): Promise<ValidationLibraryEntry[]>;

  /** Loads the newest published version of a resource. */
  loadRule(name: string): Promise<LoadedResource<ValidationRuleContent>>;
  loadRuleSet(name: string): Promise<LoadedResource<ValidationRuleSetContent>>;
  loadPolicy(name: string): Promise<LoadedResource<ValidationPolicyContent>>;

  /**
   * Publishes a resource. The backend increments the patch version on every
   * write; callers do not choose the version explicitly.
   */
  publishRule(content: ValidationRuleContent): Promise<PublishValidationLibraryResourceResponse>;
  publishRuleSet(
    content: ValidationRuleSetContent,
  ): Promise<PublishValidationLibraryResourceResponse>;
  publishPolicy(
    content: ValidationPolicyContent,
  ): Promise<PublishValidationLibraryResourceResponse>;

  /** Deletes *all* versions of a resource. There is no delete-single-version. */
  deleteRule(name: string): Promise<void>;
  deleteRuleSet(name: string): Promise<void>;
  deletePolicy(name: string): Promise<void>;
}

interface ContentWithHeader {
  schemaVersion: string;
  name: string;
}

function isNotFound(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error &&
    (error as { response?: { status?: number } }).response?.status === 404
  );
}

async function loadLatest<T>(
  type: ValidationLibraryResourceType,
  name: string,
  getLatest: () => Promise<ValidationLibraryEntryWithContent>,
  parse: (raw: string, name: string) => T,
): Promise<LoadedResource<T>> {
  let entry: ValidationLibraryEntryWithContent;
  try {
    entry = await getLatest();
  } catch (error) {
    if (isNotFound(error)) throw new ResourceNotFoundError(type, name);
    throw error;
  }
  return { name: entry.name, version: entry.version, entry, content: parse(entry.content, name) };
}

export function createValidationLibraryService(
  apis: ValidationLibraryApis,
): ValidationLibraryService {
  function publish(
    type: ValidationLibraryResourceType,
    content: ContentWithHeader,
  ): Promise<PublishValidationLibraryResourceResponse> {
    return apis.common.publishValidationLibraryResource({
      type,
      name: content.name,
      contentType: PublishValidationLibraryResourceContentTypeEnum.ApplicationJson,
      content: new Blob([JSON.stringify(content)], { type: 'application/json' }),
      // Keeping these in sync is the client's job; the backend stores blobs
      // opaquely and cannot derive the compatibility version itself.
      dataCompatibilityVersion: content.schemaVersion,
      nextVersionType: 'patch',
    });
  }

  return {
    listLatestRules: () => apis.rules.listLatestValidationRules(),
    listLatestRuleSets: () => apis.ruleSets.listLatestValidationRuleSets(),
    listLatestPolicies: () => apis.policies.listLatestValidationPolicies(),

    loadRule: (name) =>
      loadLatest(
        ValidationLibraryResourceType.Rule,
        name,
        () => apis.rules.getLatestValidationRule({ name }),
        parseValidationRuleContent,
      ),

    loadRuleSet: (name) =>
      loadLatest(
        ValidationLibraryResourceType.Ruleset,
        name,
        () => apis.ruleSets.getLatestValidationRuleSet({ name }),
        parseValidationRuleSetContent,
      ),

    loadPolicy: (name) =>
      loadLatest(
        ValidationLibraryResourceType.Policy,
        name,
        () => apis.policies.getLatestValidationPolicy({ name }),
        parseValidationPolicyContent,
      ),

    publishRule: (content) => publish(ValidationLibraryResourceType.Rule, content),
    publishRuleSet: (content) => publish(ValidationLibraryResourceType.Ruleset, content),
    publishPolicy: (content) => publish(ValidationLibraryResourceType.Policy, content),

    deleteRule: (name) => apis.rules.deleteValidationRule({ name }),
    deleteRuleSet: (name) => apis.ruleSets.deleteValidationRuleSet({ name }),
    deletePolicy: (name) => apis.policies.deleteValidationPolicy({ name }),
  };
}
