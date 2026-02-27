<script lang="ts">
  import { onMount, untrack } from 'svelte';
  import { EditorState, type StateEffect } from '@codemirror/state';
  import { EditorView, lineNumbers } from '@codemirror/view';
  import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';
  import { xml } from '@codemirror/lang-xml';
  import { setHighlightLinesEffect, highlightField } from './xmlViewerExtensions';

  interface Props {
    value: string;
    highlightLines?: number[];
  }

  let { value, highlightLines = [] }: Props = $props();

  let container: HTMLDivElement;
  let view: EditorView | undefined;

  function createState(doc: string): EditorState {
    return EditorState.create({
      doc,
      extensions: [
        EditorState.readOnly.of(true),
        EditorView.editable.of(false),
        xml(),
        syntaxHighlighting(defaultHighlightStyle),
        lineNumbers(),
        highlightField,
        EditorView.theme({
          '&': {
            fontSize: '0.875rem',
            border: '1px solid #b2c7cb',
            borderRadius: '4px',
          },
          '.cm-scroller': {
            fontFamily: 'monospace',
            overflow: 'auto',
            maxHeight: '320px',
          },
          '.cm-gutters': {
            borderRadius: '4px 0 0 4px',
          },
        }),
      ],
    });
  }

  function applyHighlights(lines: number[]) {
    if (!view) return;
    const validLines = lines.filter((l) => l >= 1 && l <= view!.state.doc.lines);
    const effects: StateEffect<unknown>[] = [setHighlightLinesEffect.of(validLines)];
    if (validLines.length > 0) {
      const first = Math.min(...validLines);
      effects.push(EditorView.scrollIntoView(view.state.doc.line(first).from, { y: 'center' }));
    }
    view.dispatch({ effects });
  }

  onMount(() => {
    view = new EditorView({ state: createState(value), parent: container });
    applyHighlights(highlightLines);
    return () => view?.destroy();
  });

  $effect(() => {
    const currentValue = value;
    if (!view) return;
    view.setState(createState(currentValue));
    untrack(() => applyHighlights(highlightLines));
  });

  $effect(() => {
    const currentLines = highlightLines;
    if (!view) return;
    applyHighlights(currentLines);
  });
</script>

<div bind:this={container} class="xml-viewer"></div>

<style>
  .xml-viewer {
    width: 100%;
  }

  .xml-viewer :global(.cm-error-line) {
    background-color: #fde8e8;
    box-shadow: inset 3px 0 0 #e08080;
  }
</style>
