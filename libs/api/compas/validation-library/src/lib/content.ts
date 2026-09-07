import {
  ValidationLibraryResourceType,
  type ValidationPolicyContent,
  type ValidationRuleContent,
  type ValidationRuleSetContent,
} from '../generated/models';

/**
 * The major schema version this library implementation understands. Content
 * with a different major version is rejected, content with a higher minor or
 * patch version is accepted (additive changes only).
 */
export const SUPPORTED_SCHEMA_MAJOR = 1;

/**
 * Raised when a stored blob cannot be interpreted as the expected content type.
 *
 * The backend stores validation library resources as opaque blobs and performs
 * no schema validation, so every read has to be treated as untrusted input.
 */
export class ContentParseError extends Error {
  constructor(
    readonly resourceType: ValidationLibraryResourceType,
    readonly reason: string,
    readonly resourceName?: string,
  ) {
    super(`Invalid ${resourceType} content${resourceName ? ` for "${resourceName}"` : ''}: ${reason}`);
    this.name = 'ContentParseError';
  }
}

/** Raised when content declares a schema version this implementation cannot read. */
export class UnsupportedSchemaVersionError extends Error {
  constructor(
    readonly resourceType: ValidationLibraryResourceType,
    readonly schemaVersion: string,
    readonly resourceName?: string,
  ) {
    super(
      `Unsupported schemaVersion "${schemaVersion}" for ${resourceType}${
        resourceName ? ` "${resourceName}"` : ''
      }; this client supports ${SUPPORTED_SCHEMA_MAJOR}.x`,
    );
    this.name = 'UnsupportedSchemaVersionError';
  }
}

/** Full `MAJOR.MINOR.PATCH` triple; anything else is rejected. */
export function isSupportedSchemaVersion(schemaVersion: string): boolean {
  const match = /^(\d+)\.\d+\.\d+/.exec(schemaVersion);
  return !!match && Number.parseInt(match[1], 10) === SUPPORTED_SCHEMA_MAJOR;
}

function parseBlob<T>(
  raw: string,
  resourceType: ValidationLibraryResourceType,
  name: string | undefined,
  requiredField: keyof T,
): T {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (cause) {
    throw new ContentParseError(
      resourceType,
      `content is not valid JSON (${(cause as Error).message})`,
      name,
    );
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new ContentParseError(resourceType, 'content is not a JSON object', name);
  }

  const value = parsed as Partial<T> & { schemaVersion?: string; name?: string };

  if (typeof value.schemaVersion !== 'string' || !isSupportedSchemaVersion(value.schemaVersion)) {
    throw new UnsupportedSchemaVersionError(
      resourceType,
      String(value.schemaVersion ?? ''),
      name,
    );
  }
  if (typeof value.name !== 'string' || value.name === '') {
    throw new ContentParseError(resourceType, '"name" must be a non-empty string', name);
  }
  if (value[requiredField] === undefined) {
    throw new ContentParseError(
      resourceType,
      `"${String(requiredField)}" is required`,
      name,
    );
  }

  return value as T;
}

/** Parses a `validation_rule` blob. Validates the essential shape only. */
export function parseValidationRuleContent(
  raw: string,
  name?: string,
): ValidationRuleContent {
  return parseBlob<ValidationRuleContent>(
    raw,
    ValidationLibraryResourceType.Rule,
    name,
    'definition',
  );
}

/** Parses a `validation_ruleset` blob. */
export function parseValidationRuleSetContent(
  raw: string,
  name?: string,
): ValidationRuleSetContent {
  return parseBlob<ValidationRuleSetContent>(
    raw,
    ValidationLibraryResourceType.Ruleset,
    name,
    'rules',
  );
}

/** Parses a `validation_policy` blob. */
export function parseValidationPolicyContent(
  raw: string,
  name?: string,
): ValidationPolicyContent {
  return parseBlob<ValidationPolicyContent>(
    raw,
    ValidationLibraryResourceType.Policy,
    name,
    'ruleSets',
  );
}
