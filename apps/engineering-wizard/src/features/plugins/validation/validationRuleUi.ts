export type ConditionKey =
  | 'contains'
  | 'notContains'
  | 'equals'
  | 'notEquals'
  | 'startsWith'
  | 'endsWith';

export type CheckKey =
  | 'noSpecial'
  | 'noSpaces'
  | 'noLetters'
  | 'noNumbers'
  | 'noAccented'
  | 'noXmlCritical'
  | 'hasLetters'
  | 'hasNumbers';

export type RuleUiState = {
  condition: ConditionKey;
  checks: Record<CheckKey, boolean>;
  specificText: string;
  message: string;
};

export const ALL_CHECKS = [
  'noSpecial',
  'noSpaces',
  'noLetters',
  'noNumbers',
  'noAccented',
  'noXmlCritical',
  'hasLetters',
  'hasNumbers',
] as const satisfies readonly CheckKey[];

export function makeChecks(
  init: Partial<Record<CheckKey, boolean>> = {},
): Record<CheckKey, boolean> {
  return Object.fromEntries(ALL_CHECKS.map((k) => [k, !!init[k]])) as Record<
    CheckKey,
    boolean
  >;
}
