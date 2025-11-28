import type { ViewPlugin } from '../types/view-plugin';

// ---- layout helpers (kept) ----

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

const inFlight = new Map<string, Promise<void>>();

function isDefined(tag: string) {
  return !!customElements.get(tag);
}

function assertValidCustomElementName(tag: string) {
  if (!tag.includes('-')) {
    throw new Error(`Invalid custom element name "${tag}". Custom element names must contain a dash.`);
  }
}

export async function ensureCustomElementDefined(plugin: ViewPlugin): Promise<void> {
  if (plugin.type !== 'external') return;

  const tag = plugin.id;
  assertValidCustomElementName(tag);

  if (isDefined(tag)) return;

  const existing = inFlight.get(tag);
  if (existing) return existing;

  const p = (async () => {
    const mod = await import(/* @vite-ignore */ plugin.src);
    const ctor = (mod?.default ?? mod?.element) as CustomElementConstructor | undefined;

    if (!ctor) {
      throw new Error(`Plugin "${plugin.id}" did not export a custom element constructor.`);
    }

    // Always wrap => always a fresh constructor
    const Base = ctor as unknown as { new (): HTMLElement };
    const Wrapped: CustomElementConstructor = class extends Base {};

    if (!isDefined(tag)) {
      try {
        customElements.define(tag, Wrapped);
      } catch (e) {
        // tolerate races where it was defined between check and define
        if (!isDefined(tag)) throw e;
      }
    }

    await customElements.whenDefined(tag);
  })().finally(() => {
    inFlight.delete(tag);
  });

  inFlight.set(tag, p);
  return p;
}

export async function preloadAllPlugins(plugins: ViewPlugin[]) {
  await Promise.all(
    plugins
      .filter((p) => p.type === 'external')
      .map(async (p) => {
        try {
          await ensureCustomElementDefined(p);
        } catch (e) {
          console.error('Failed to preload plugin', p.id, e);
        }
      }),
  );
}
