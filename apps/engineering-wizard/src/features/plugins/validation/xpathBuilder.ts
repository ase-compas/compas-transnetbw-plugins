import type { ElementCheckType, RuleUiState } from './validationRuleUi';

function toAttributeSelector(input: string | null | undefined): string | null {
  const raw = (input ?? '').trim();
  if (!raw) return null;
  return raw.startsWith('@') ? raw : `@${raw}`;
}

function toXPathStringLiteral(text: string): string {
  if (!text.includes("'")) return `'${text}'`;
  return `concat(${text
    .split("'")
    .map((p) => `'${p}'`)
    .join(`, "'", `)})`;
}

export function buildValueExpression(attributeInput: string): string {
  const attrSelector = toAttributeSelector(attributeInput);
  return attrSelector
    ? `normalize-space(${attrSelector})`
    : 'normalize-space(.)';
}

function buildAttributeAssertion(ui: RuleUiState): string {
  const attr = (ui.attribute ?? '').trim();
  const valueExpr = buildValueExpression(ui.attribute);
  const expectedText = (ui.specificText ?? '').trim();

  if (!attr && !expectedText) return '';
  if (attr && !expectedText) return valueExpr;

  const expectedLit = toXPathStringLiteral(expectedText);

  switch (ui.condition) {
    case 'contains':
      return `contains(${valueExpr}, ${expectedLit})`;
    case 'notContains':
      return `not(contains(${valueExpr}, ${expectedLit}))`;
    case 'equals':
      return `${valueExpr} = ${expectedLit}`;
    case 'notEquals':
      return `not(${valueExpr} = ${expectedLit})`;
    case 'startsWith':
      return `starts-with(${valueExpr}, ${expectedLit})`;
    case 'endsWith':
      return `substring(${valueExpr}, string-length(${valueExpr}) - string-length(${expectedLit}) + 1) = ${expectedLit}`;
    default:
      return '';
  }
}

function buildElementAssertion(ui: RuleUiState): string {
  const el = (ui.elementName ?? '').trim();
  if (!el) return '';

  const n = ui.elementCount ?? 1;

  switch (ui.elementCheckType as ElementCheckType) {
    case 'exists':    return `count(${el}) > 0`;
    case 'notExists': return `count(${el}) = 0`;
    case 'exactly':   return `count(${el}) = ${n}`;
    case 'atLeast':   return `count(${el}) >= ${n}`;
    case 'atMost':    return `count(${el}) <= ${n}`;
    default:          return '';
  }
}

export function buildAssertionExpression(ui: RuleUiState): string {
  return ui.mode === 'element'
    ? buildElementAssertion(ui)
    : buildAttributeAssertion(ui);
}
