import {
  type RuleUiState,
  type ConditionKey,
  type ElementCheckType,
  type RuleMode,
  CONDITIONS,
  ELEMENT_CHECK_TYPES,
} from './validationRuleUi';
import type { XPathValidation } from '@oscd-transnet-plugins/shared';
import { buildAssertionExpression } from './xpathBuilder';

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
    expertMode: false,
    expertXPath: '',
  };
}

function expertRuleUi(assert: string, message: string): RuleUiState {
  return {
    ...defaultRuleUi(),
    message,
    expertMode: true,
    expertXPath: assert,
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
    const message = existing.message ?? '';
    const restoredRuleUi = existing.ruleUi
      ? restoreRuleUi(existing.ruleUi, message)
      : null;
    if (
      restoredRuleUi &&
      ruleUiMatchesAssertion(restoredRuleUi, existing.assert)
    ) {
      validationEditor.ruleUi = restoredRuleUi;
    } else if (isExpertXPathParseable(existing.assert, message)) {
      validationEditor.ruleUi = parseAssertionToRuleUi(existing.assert, message);
    } else {
      validationEditor.ruleUi = expertRuleUi(existing.assert, message);
    }
  } else {
    validationEditor.entry = defaultEntry(processId, pluginId);
    validationEditor.ruleUi = defaultRuleUi();
  }
}

// ---------------------------------------------------------------------------
// Restore ruleUi from a previously-persisted snapshot.
// ---------------------------------------------------------------------------

const ruleModes = new Set<RuleMode>(['attribute', 'element']);
const conditions = new Set<ConditionKey>(
  CONDITIONS.map((condition) => condition.key),
);
const elementCheckTypes = new Set<ElementCheckType>(
  ELEMENT_CHECK_TYPES.map((check) => check.key),
);

function restoreRuleUi(
  stored: Record<string, unknown>,
  message: string,
): RuleUiState | null {
  if (
    !ruleModes.has(stored.mode as RuleMode) ||
    !conditions.has(stored.condition as ConditionKey) ||
    typeof stored.specificText !== 'string' ||
    typeof stored.attribute !== 'string' ||
    !elementCheckTypes.has(stored.elementCheckType as ElementCheckType) ||
    typeof stored.elementName !== 'string' ||
    typeof stored.elementCount !== 'number' ||
    !Number.isFinite(stored.elementCount) ||
    typeof stored.expertMode !== 'boolean' ||
    typeof stored.expertXPath !== 'string'
  ) {
    return null;
  }

  return {
    mode: stored.mode as RuleMode,
    condition: stored.condition as ConditionKey,
    specificText: stored.specificText,
    attribute: stored.attribute,
    elementCheckType: stored.elementCheckType as ElementCheckType,
    elementName: stored.elementName,
    elementCount: stored.elementCount,
    message,
    expertMode: stored.expertMode,
    expertXPath: stored.expertXPath,
  };
}

function ruleUiMatchesAssertion(ruleUi: RuleUiState, assert: string): boolean {
  const restoredAssert = ruleUi.expertMode
    ? ruleUi.expertXPath
    : buildAssertionExpression(ruleUi);
  return restoredAssert.trim() === assert.trim();
}

// ---------------------------------------------------------------------------
// Parse an XPath assertion back into RuleUiState — covers all patterns that
// xpathBuilder.ts can produce so that entries created before ruleUi was
// persisted can still be edited with the full UI.
// ---------------------------------------------------------------------------

const ATTR_PATTERNS: Array<[RegExp, ConditionKey]> = [
  [/^contains\(normalize-space\((@[\w:.-]+)\),\s*'([^']*)'\)$/,           'contains'   ],
  [/^not\(contains\(normalize-space\((@[\w:.-]+)\),\s*'([^']*)'\)\)$/,    'notContains'],
  [/^normalize-space\((@[\w:.-]+)\)\s*=\s*'([^']*)'$/,                    'equals'     ],
  [/^not\(normalize-space\((@[\w:.-]+)\)\s*=\s*'([^']*)'\)$/,             'notEquals'  ],
  [/^starts-with\(normalize-space\((@[\w:.-]+)\),\s*'([^']*)'\)$/,        'startsWith' ],
  [/^substring\(normalize-space\((@[\w:.-]+)\),.+\)\s*=\s*'([^']*)'$/,    'endsWith'   ],
  [/^matches\(normalize-space\((@[\w:.-]+)\),\s*'([^']*)'\)$/,            'matches'    ],
  [/^not\(matches\(normalize-space\((@[\w:.-]+)\),\s*'([^']*)'\)\)$/,     'notMatches' ],
];

export function parseAssertionToRuleUi(assert: string, message: string): RuleUiState {
  const a = assert.trim();

  // Element check: count(El) op N
  const elM = a.match(/^count\(([\w:.-]+)\)\s*(>=|<=|>|=)\s*(\d+)$/);
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
      expertMode: false,
      expertXPath: '',
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
        expertMode: false,
        expertXPath: '',
      };
    }
  }

  return { ...defaultRuleUi(), message };
}

/**
 * Returns true if the given XPath assertion string can be round-tripped back
 * into the form builder UI (i.e. it matches a known pattern).
 * An empty string is considered parseable (reverts to default UI state).
 */
export function isExpertXPathParseable(xpath: string, message: string): boolean {
  if (!xpath.trim()) return true;
  const state = parseAssertionToRuleUi(xpath, message);
  return state.attribute !== '' || state.elementName !== '';
}
