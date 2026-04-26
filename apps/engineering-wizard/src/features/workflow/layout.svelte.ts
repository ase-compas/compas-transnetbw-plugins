export function getLayoutContainer(): HTMLElement | null {
  const openScd = document.querySelector('open-scd');
  return (openScd as any)?.shadowRoot?.querySelector('compas-layout') ?? null;
}

function setEditorTabsVisibility(visible: boolean) {
  getLayoutContainer()?.dispatchEvent(
    new CustomEvent('toggle-editor-tabs', {
      detail: { visible },
      bubbles: true,
      composed: true,
    }),
  );
}

export const editorTabs = $state<{ visible: boolean }>({
  visible: true,
});

/**
 * Call in onMount to hide editor tabs for the duration of a full-screen view.
 * Returns a cleanup function that restores tab visibility on unmount.
 *
 * Usage: `onMount(() => enterFullscreenView())`
 */
export function enterFullscreenView(): () => void {
  editorTabs.visible = false;
  return () => {
    editorTabs.visible = true;
  };
}

// Side-effect: propagate changes to host layout
$effect.root(() => {
  $effect(() => {
    setEditorTabsVisibility(editorTabs.visible);
  });
});
