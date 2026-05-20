import type { ElementCheckType, RuleUiState } from './validationRuleUi';

/** Returns the last element name from a path like `//SCL/Substation/VoltageLevel` → `VoltageLevel`. */
export function lastNodeOfPath(path: string): string {
  const clean = (path ?? '').replace(/^\/\/SCL(\/|$)/, '');
  if (!clean) return '';
  const parts = clean.split('/').filter(Boolean);
  return parts[parts.length - 1] ?? '';
}

/** Returns the parent path: `//SCL/Substation/VoltageLevel` → `//SCL/Substation`. */
export function parentOfPath(path: string): string {
  const clean = (path ?? '').replace(/^\/\/SCL(\/|$)/, '');
  if (!clean) return '//SCL';
  const parts = clean.split('/').filter(Boolean);
  if (parts.length <= 1) return '//SCL';
  return `//SCL/${parts.slice(0, -1).join('/')}`;
}

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
  if (attr && !expectedText && ui.condition !== 'matches' && ui.condition !== 'notMatches') {
    return valueExpr;
  }

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
    case 'matches':
      return `matches(${valueExpr}, ${expectedLit})`;
    case 'notMatches':
      return `not(matches(${valueExpr}, ${expectedLit}))`;
    default:
      return '';
  }
}

function buildElementAssertion(ui: RuleUiState): string {
  const el = (ui.elementPath ? lastNodeOfPath(ui.elementPath) : (ui.elementName ?? '')).trim();
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
