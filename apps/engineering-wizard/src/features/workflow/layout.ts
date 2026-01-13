export function getLayoutContainer(): HTMLElement | null {
  const openScd = document.querySelector('open-scd');
  return (openScd as any)?.shadowRoot?.querySelector('compas-layout') ?? null;
}

export function setEditorTabsVisibility(visible: boolean) {
  getLayoutContainer()?.dispatchEvent(
    new CustomEvent('toggle-editor-tabs', {
      detail: { visible },
      bubbles: true,
      composed: true,
    }),
  );
}
