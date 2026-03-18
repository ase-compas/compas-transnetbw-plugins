export type RuleMode = 'attribute' | 'element';

export type ElementCheckType = 'exists' | 'notExists' | 'exactly' | 'atLeast' | 'atMost';

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
  mode: RuleMode;
  condition: ConditionKey;
  checks: Record<CheckKey, boolean>;
  specificText: string;
  attribute: string;
  elementCheckType: ElementCheckType;
  elementName: string;
  elementCount: number;
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

export const CONDITIONS = [
  { key: 'contains',    label: 'Contains' },
  { key: 'notContains', label: 'Does not contain' },
  { key: 'startsWith',  label: 'Starts with' },
  { key: 'endsWith',    label: 'Ends with' },
  { key: 'equals',      label: 'Equals' },
  { key: 'notEquals',   label: 'Does not equal' },
] as const;

export const ELEMENT_CHECK_TYPES: { key: ElementCheckType; label: string; hasCount: boolean }[] = [
  { key: 'exists',    label: 'Must exist',     hasCount: false },
  { key: 'notExists', label: 'Must not exist', hasCount: false },
  { key: 'exactly',   label: 'Exactly N',      hasCount: true  },
  { key: 'atLeast',   label: 'At least N',     hasCount: true  },
  { key: 'atMost',    label: 'At most N',      hasCount: true  },
];

export { ALL_SCL_ELEMENTS as ELEMENT_OPTIONS } from './scl-schema';

/** Returns `//SCL` as a safe default context for element-count checks. */
export function getElementContext(_elementName: string): string {
  return '//SCL';
}

export const CHECK_DEFS: Record<CheckKey, string> = {
  noSpecial:    'No special characters',
  noSpaces:     'No blank spaces',
  noLetters:    'No letters',
  noNumbers:    'No numbers',
  noAccented:   'No accented characters',
  noXmlCritical:`No XML critical characters (<, >, &, ", ')`,
  hasLetters:   'Must contain letters',
  hasNumbers:   'Must contain numbers',
};

export const DEFAULT_PALETTE: Record<ConditionKey, CheckKey[]> = {
  notContains: ['noSpecial', 'noSpaces', 'noLetters', 'noNumbers', 'noAccented', 'noXmlCritical'],
  contains:    ['hasLetters', 'hasNumbers', 'noXmlCritical'],
  equals:      ['noXmlCritical'],
  notEquals:   ['noXmlCritical'],
  startsWith:  ['noXmlCritical'],
  endsWith:    ['noXmlCritical'],
};

