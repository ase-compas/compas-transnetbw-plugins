import type { XPathValidation } from '@oscd-transnet-plugins/shared';

export type ValidationResult = {
  validation: XPathValidation;
  ok: boolean;
  details?: string;
};

function evalBoolean(
  doc: XMLDocument,
  contextNode: Node,
  expr: string,
): boolean {
  const res = doc.evaluate(expr, contextNode, null, XPathResult.ANY_TYPE, null);

  // Handle common XPath return types
  switch (res.resultType) {
    case XPathResult.BOOLEAN_TYPE:
      return res.booleanValue;

    case XPathResult.NUMBER_TYPE:
      return Number.isFinite(res.numberValue) && res.numberValue !== 0;

    case XPathResult.STRING_TYPE:
      return res.stringValue.length > 0;

    default: {
      // Node-set / iterator: true if at least one node
      const it = doc.evaluate(
        expr,
        contextNode,
        null,
        XPathResult.ANY_UNORDERED_NODE_TYPE,
        null,
      );
      return it.singleNodeValue != null;
    }
  }
}

export function validateXPath(
  doc: XMLDocument,
  validations: XPathValidation[],
): ValidationResult[] {
  return validations.map((v) => {
    const ctxSnapshot = doc.evaluate(
      v.context,
      doc,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null,
    );

    if (ctxSnapshot.snapshotLength === 0) {
      return {
        validation: v,
        ok: false,
        details: `Context matched 0 nodes for context XPath: ${v.context}`,
      };
    }

    for (let i = 0; i < ctxSnapshot.snapshotLength; i++) {
      const node = ctxSnapshot.snapshotItem(i)!;
      const ok = evalBoolean(doc, node, v.assert);
      if (!ok) {
        return {
          validation: v,
          ok: false,
          details: v.message ?? `Assert failed: ${v.assert}`,
        };
      }
    }

    return {
      validation: v,
      ok: true,
      details: `Passed (${ctxSnapshot.snapshotLength} context node(s))`,
    };
  });
}
