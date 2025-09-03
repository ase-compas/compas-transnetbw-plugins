import type { ViewPlugin } from '../types/view-plugin';

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

export async function ensureCustomElementDefined(plugin: ViewPlugin) {
  if (!customElements.get(plugin.id)) {
    const mod = await import(/* @vite-ignore */ plugin.src);
    customElements.define(plugin.id, (mod as any).default);
  }
}

export async function preloadAllPlugins(plugins: ViewPlugin[]) {
  await Promise.all(
    plugins.map(async (p) => {
      try {
        if (!customElements.get(p.id)) {
          const mod = await import(/* @vite-ignore */ p.src);
          customElements.define(p.id, (mod as any).default);
        }
      } catch (e) {
        console.error('Failed to preload plugin', p.id, e);
      }
    }),
  );
}

