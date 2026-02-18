import type { RuleUiState } from './validationRuleUi';

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

export function buildAssertionExpression(ui: RuleUiState): string {
  const valueExpr = buildValueExpression(ui.attribute);

  const expectedText = (ui.specificText ?? '').trim();
  if (!expectedText) return 'true()';

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
      return 'true()';
  }
}
