import {
  type RuleUiState,
  type ConditionKey,
  type ElementCheckType,
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

function editableEntry(existing: XPathValidation): XPathValidation {
  return {
    title: existing.title,
    description: existing.description,
    context: existing.context,
    assert: existing.assert,
    message: existing.message,
    processId: existing.processId,
    pluginId: existing.pluginId,
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
    validationEditor.entry = editableEntry(existing);
    const message = existing.message ?? '';
    const parsedRuleUi = parseAssertionToRuleUi(existing.assert, message);
    if (parsedRuleUi) {
      validationEditor.ruleUi = parsedRuleUi;
    } else {
      validationEditor.ruleUi = expertRuleUi(existing.assert, message);
    }
  } else {
    validationEditor.entry = defaultEntry(processId, pluginId);
    validationEditor.ruleUi = defaultRuleUi();
  }
}

export function enterExpertMode(): void {
  validationEditor.ruleUi.expertXPath = buildAssertionExpression(validationEditor.ruleUi);
  validationEditor.ruleUi.expertMode = true;
}

export function exitExpertMode(): boolean {
  const expertXPath = validationEditor.ruleUi.expertXPath;
  const parsedRuleUi = parseAssertionToRuleUi(
    expertXPath,
    validationEditor.ruleUi.message,
  );
  if (!parsedRuleUi) return false;

  validationEditor.ruleUi = {
    ...parsedRuleUi,
    expertMode: false,
    expertXPath,
  };
  return true;
}

type AttributeMatch = {
  attribute: string;
  condition: ConditionKey;
  literal: string;
};

function parseXPathStringLiteral(expression: string): string | null {
  const singleQuoted = expression.match(/^'([^']*)'$/);
  if (singleQuoted) return singleQuoted[1];

  const concat = expression.match(/^concat\((.*)\)$/);
  if (!concat) return null;

  let remaining = concat[1];
  let value = '';
  let apostropheCount = 0;
  while (remaining) {
    const segment = remaining.match(/^'([^']*)'/);
    if (!segment) return null;
    value += segment[1];
    remaining = remaining.slice(segment[0].length);
    if (!remaining) break;
    if (!remaining.startsWith(`, "'", `)) return null;
    value += "'";
    apostropheCount += 1;
    remaining = remaining.slice(7);
  }
  return apostropheCount > 0 ? value : null;
}

function attributeRule(
  attribute: string,
  condition: ConditionKey,
  literalExpression: string,
): AttributeMatch | null {
  const literal = parseXPathStringLiteral(literalExpression);
  return literal === null ? null : { attribute, condition, literal };
}

function parseAttributeAssertion(assert: string): AttributeMatch | null {
  let match = assert.match(/^contains\(normalize-space\((@[\w:.-]+)\), (.+)\)$/);
  if (match) return attributeRule(match[1], 'contains', match[2]);

  match = assert.match(/^not\(contains\(normalize-space\((@[\w:.-]+)\), (.+)\)\)$/);
  if (match) return attributeRule(match[1], 'notContains', match[2]);

  match = assert.match(/^normalize-space\((@[\w:.-]+)\) = (.+)$/);
  if (match) return attributeRule(match[1], 'equals', match[2]);

  match = assert.match(/^not\(normalize-space\((@[\w:.-]+)\) = (.+)\)$/);
  if (match) return attributeRule(match[1], 'notEquals', match[2]);

  match = assert.match(/^starts-with\(normalize-space\((@[\w:.-]+)\), (.+)\)$/);
  if (match) return attributeRule(match[1], 'startsWith', match[2]);

  match = assert.match(
    /^substring\(normalize-space\((@[\w:.-]+)\), string-length\(normalize-space\(\1\)\) - string-length\((.+)\) \+ 1\) = (.+)$/,
  );
  if (match && match[2] === match[3]) {
    return attributeRule(match[1], 'endsWith', match[2]);
  }

  match = assert.match(/^matches\(normalize-space\((@[\w:.-]+)\), (.+)\)$/);
  if (match) return attributeRule(match[1], 'matches', match[2]);

  match = assert.match(/^not\(matches\(normalize-space\((@[\w:.-]+)\), (.+)\)\)$/);
  if (match) return attributeRule(match[1], 'notMatches', match[2]);

  match = assert.match(/^normalize-space\((@[\w:.-]+)\)$/);
  if (match) {
    return { attribute: match[1], condition: 'notContains', literal: '' };
  }

  return null;
}

function builderRuleUi(
  ruleUi: RuleUiState,
  assert: string,
): RuleUiState | null {
  return buildAssertionExpression(ruleUi) === assert ? ruleUi : null;
}

export function parseAssertionToRuleUi(
  assert: string,
  message: string,
): RuleUiState | null {
  const a = assert.trim();
  if (!a) return { ...defaultRuleUi(), message };

  const elM = a.match(/^count\(([\w:.-]+)\) (>=|<=|>|=) (-?(?:\d+(?:\.\d+)?|\.\d+))$/);
  if (elM) {
    const [, elementName, op] = elM;
    const n = Number(elM[3]);
    const elementCheckType: ElementCheckType =
      op === '>' && n === 0 ? 'exists'    :
      op === '=' && n === 0 ? 'notExists' :
      op === '='             ? 'exactly'  :
      op === '>='            ? 'atLeast'  : 'atMost';
    return builderRuleUi({
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
    }, a);
  }

  const attributeMatch = parseAttributeAssertion(a);
  if (!attributeMatch) return null;

  return builderRuleUi({
    mode: 'attribute',
    condition: attributeMatch.condition,
    specificText: attributeMatch.literal,
    attribute: attributeMatch.attribute.replace(/^@/, ''),
    elementCheckType: 'exists',
    elementName: '',
    elementCount: 1,
    message,
    expertMode: false,
    expertXPath: '',
  }, a);
}
