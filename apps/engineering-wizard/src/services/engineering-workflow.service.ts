import type { ViewPlugin } from '../types/view-plugin';

// Cache to track constructors that have already been registered to avoid
// "this constructor has already been used with this registry" errors.
const definedConstructors = new WeakSet<CustomElementConstructor>();

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
    const ctor = (mod as any).default as CustomElementConstructor;

    // Avoid defining the same constructor twice under different tags.
    if (!definedConstructors.has(ctor)) {
      customElements.define(plugin.id, ctor);
      definedConstructors.add(ctor);
    }
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
          const ctor = (mod as any).default as CustomElementConstructor;

          if (!definedConstructors.has(ctor)) {
            customElements.define(p.id, ctor);
            definedConstructors.add(ctor);
          }
        }
      } catch (e) {
        console.error('Failed to preload plugin', p.id, e);
      }
    }),
  );
}
