import { StateEffect, StateField, RangeSet } from '@codemirror/state';
import { Decoration, EditorView, type DecorationSet } from '@codemirror/view';

/**
 * StateEffect that carries the set of line numbers to highlight.
 * Defined at module level so every XmlViewer instance shares the same type identity,
 * which is required for effect.is() checks to work correctly across instances.
 */
export const setHighlightLinesEffect = StateEffect.define<number[]>();

/**
 * StateField that maintains the current error-line decoration set.
 * Updated whenever a setHighlightLinesEffect is dispatched.
 */
export const highlightField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none;
  },
  update(deco, tr) {
    deco = deco.map(tr.changes);
    for (const effect of tr.effects) {
      if (effect.is(setHighlightLinesEffect)) {
        if (effect.value.length === 0) {
          deco = Decoration.none;
        } else {
          const ranges = effect.value
            .filter((l) => l >= 1 && l <= tr.state.doc.lines)
            .map((l) =>
              Decoration.line({ class: 'cm-error-line' }).range(tr.state.doc.line(l).from),
            )
            .sort((a, b) => a.from - b.from);
          deco = RangeSet.of(ranges);
        }
      }
    }
    return deco;
  },
  provide: (f) => EditorView.decorations.from(f),
});
