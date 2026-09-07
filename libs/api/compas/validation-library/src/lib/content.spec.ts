import { describe, expect, it } from 'vitest';
import {
  ContentParseError,
  UnsupportedSchemaVersionError,
  isSupportedSchemaVersion,
  parseValidationPolicyContent,
  parseValidationRuleContent,
  parseValidationRuleSetContent,
} from './content';

const validRule = {
  schemaVersion: '1.0.0',
  name: 'substation-name-prefix',
  title: 'Substation name must be prefixed',
  kind: 'XPATH',
  defaultSeverity: 'ERROR',
  definition: { context: 'SCL', assertion: 'count(//Substation) > 0' },
};

describe('isSupportedSchemaVersion', () => {
  it('accepts additive minor and patch bumps', () => {
    expect(isSupportedSchemaVersion('1.0.0')).toBe(true);
    expect(isSupportedSchemaVersion('1.7.3')).toBe(true);
  });

  it('rejects other majors and garbage', () => {
    expect(isSupportedSchemaVersion('2.0.0')).toBe(false);
    expect(isSupportedSchemaVersion('0.9.0')).toBe(false);
    expect(isSupportedSchemaVersion('nonsense')).toBe(false);
    // Not a full MAJOR.MINOR.PATCH triple - reject rather than accept partial headers.
    expect(isSupportedSchemaVersion('1')).toBe(false);
    expect(isSupportedSchemaVersion('1.0')).toBe(false);
  });
});

describe('parseValidationRuleContent', () => {
  it('parses a valid rule', () => {
    expect(parseValidationRuleContent(JSON.stringify(validRule))).toMatchObject({
      name: 'substation-name-prefix',
      kind: 'XPATH',
    });
  });

  it('rejects non-JSON content', () => {
    expect(() => parseValidationRuleContent('<xml/>')).toThrow(ContentParseError);
  });

  it('rejects a JSON array', () => {
    expect(() => parseValidationRuleContent('[]')).toThrow(ContentParseError);
  });

  it('rejects an unsupported schema version', () => {
    const content = JSON.stringify({ ...validRule, schemaVersion: '2.0.0' });
    expect(() => parseValidationRuleContent(content)).toThrow(UnsupportedSchemaVersionError);
  });

  it('rejects a rule without definition', () => {
    const content = JSON.stringify({
      schemaVersion: '1.0.0',
      name: 'r',
      title: 'r',
      kind: 'XPATH',
      defaultSeverity: 'ERROR',
    });
    expect(() => parseValidationRuleContent(content)).toThrow(/definition/);
  });

  it('mentions the name in the error message', () => {
    expect(() => parseValidationRuleContent('{}', 'r')).toThrow(/"r"/);
  });
});

describe('parseValidationRuleSetContent', () => {
  it('parses a valid rule set', () => {
    const content = JSON.stringify({
      schemaVersion: '1.0.0',
      name: 'naming',
      title: 'Naming rules',
      rules: [{ name: 'substation-name-prefix', version: 'latest' }],
    });
    expect(parseValidationRuleSetContent(content).rules).toHaveLength(1);
  });

  it('rejects a rule set without rules array', () => {
    const content = JSON.stringify({
      schemaVersion: '1.0.0',
      name: 'naming',
      title: 'Naming rules',
    });
    expect(() => parseValidationRuleSetContent(content)).toThrow(/rules/);
  });
});

describe('parseValidationPolicyContent', () => {
  it('parses a policy with scope and overrides', () => {
    const content = JSON.stringify({
      schemaVersion: '1.0.0',
      name: 'process-policy',
      title: 'Process policy',
      ruleSets: [
        {
          ref: { name: 'naming', version: 'latest' },
          appliesTo: { pluginIds: ['engineering-wizard'], sclFileTypes: ['SCD'] },
          overrides: [{ rule: 'substation-name-prefix', severity: 'WARNING' }],
        },
      ],
    });
    expect(parseValidationPolicyContent(content).ruleSets).toHaveLength(1);
  });

  it('rejects a missing ruleSets array', () => {
    const content = JSON.stringify({
      schemaVersion: '1.0.0',
      name: 'process-policy',
      title: 'Process policy',
    });
    expect(() => parseValidationPolicyContent(content)).toThrow(/ruleSets/);
  });
});
