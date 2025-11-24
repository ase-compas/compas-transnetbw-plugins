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

/**
 * Ensures that an external plugin is defined as an custom element.
 * 
 * This function checks if a custom element with the ID of the plugin
 * has already been registered in the browser's `customElements` registry.
 * If not, and if the plugin type is `'external'`, it dynamically imports
 * the plugin's module and defines the custom element using the module's default export.
 */
export async function ensureCustomElementDefined(plugin: ViewPlugin) {
  if (!customElements.get(plugin.id) && plugin.type === 'external') {
    const mod = await import(/* @vite-ignore */ plugin.src);
    customElements.define(plugin.id, (mod as any).default);
  }
}

export async function preloadAllPlugins(plugins: ViewPlugin[]) {
  await Promise.all(
    plugins
    .filter(p => p.type === 'external')
    .map(async (p) => {
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

