import {
  type RuleUiState,
  type ConditionKey,
  type ElementCheckType,
} from './validationRuleUi';
import type { XPathValidation } from '@oscd-transnet-plugins/shared';

function defaultEntry(processId = '', pluginId = ''): XPathValidation {
  return {
    title: '',
    description: '',
    context: '//SCL',
    assert: '',
    message: '',
    processId,
    pluginId,
  };
}

function defaultRuleUi(): RuleUiState {
  return {
    mode: 'attribute',
    condition: 'notContains',
    specificText: '',
    attribute: '',
    elementCheckType: 'exists',
    elementName: '',
    elementCount: 1,
    message: '',
  };
}

export const validationEditor = $state({
  entry: defaultEntry(),
  ruleUi: defaultRuleUi(),
});

export function initValidationEditor(
  processId: string,
  pluginId: string,
  existing?: XPathValidation,
): void {
  if (existing) {
    validationEditor.entry = { ...existing };
    validationEditor.ruleUi = existing.ruleUi
      ? restoreRuleUi(existing.ruleUi)
      : parseAssertionToRuleUi(existing.assert, existing.message ?? '');
  } else {
    validationEditor.entry = defaultEntry(processId, pluginId);
    validationEditor.ruleUi = defaultRuleUi();
  }
}

// ---------------------------------------------------------------------------
// Restore ruleUi from a previously-persisted snapshot.
// ---------------------------------------------------------------------------

function restoreRuleUi(stored: Record<string, unknown>): RuleUiState {
  return {
    mode: (stored.mode as RuleUiState['mode']) ?? 'attribute',
    condition: (stored.condition as RuleUiState['condition']) ?? 'notContains',
    specificText: (stored.specificText as string) ?? '',
    attribute: (stored.attribute as string) ?? '',
    elementCheckType:
      (stored.elementCheckType as RuleUiState['elementCheckType']) ?? 'exists',
    elementName: (stored.elementName as string) ?? '',
    elementCount: (stored.elementCount as number) ?? 1,
    message: (stored.message as string) ?? '',
  };
}

// ---------------------------------------------------------------------------
// Parse an XPath assertion back into RuleUiState — covers all patterns that
// xpathBuilder.ts can produce so that entries created before ruleUi was
// persisted can still be edited with the full UI.
// ---------------------------------------------------------------------------

const ATTR_PATTERNS: Array<[RegExp, ConditionKey]> = [
  [/^contains\(normalize-space\((@\w+)\),\s*'([^']*)'\)$/,           'contains'   ],
  [/^not\(contains\(normalize-space\((@\w+)\),\s*'([^']*)'\)\)$/,    'notContains'],
  [/^normalize-space\((@\w+)\)\s*=\s*'([^']*)'$/,                    'equals'     ],
  [/^not\(normalize-space\((@\w+)\)\s*=\s*'([^']*)'\)$/,             'notEquals'  ],
  [/^starts-with\(normalize-space\((@\w+)\),\s*'([^']*)'\)$/,        'startsWith' ],
  [/^substring\(normalize-space\((@\w+)\),.+\)\s*=\s*'([^']*)'$/,    'endsWith'   ],
];

function parseAssertionToRuleUi(assert: string, message: string): RuleUiState {
  const a = assert.trim();

  // Element check: count(El) op N
  const elM = a.match(/^count\((\w+)\)\s*(>=|<=|>|=)\s*(\d+)$/);
  if (elM) {
    const [, elementName, op] = elM;
    const n = parseInt(elM[3], 10);
    const elementCheckType: ElementCheckType =
      op === '>' && n === 0 ? 'exists'    :
      op === '=' && n === 0 ? 'notExists' :
      op === '='             ? 'exactly'  :
      op === '>='            ? 'atLeast'  : 'atMost';
    return {
      mode: 'element',
      condition: 'notContains',
      specificText: '',
      attribute: '',
      elementCheckType,
      elementName,
      elementCount: op === '>' ? 1 : n,
      message,
    };
  }

  for (const [pattern, condition] of ATTR_PATTERNS) {
    const m = a.match(pattern);
    if (m) {
      return {
        mode: 'attribute',
        condition,
        specificText: m[2],
        attribute: m[1].replace(/^@/, ''),
        elementCheckType: 'exists',
        elementName: '',
        elementCount: 1,
        message,
      };
    }
  }

  return { ...defaultRuleUi(), message };
}
