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

const inFlight = new Map<string, Promise<string>>();
const tagBySrc = new Map<string, string>();

function normalizeTagName(raw: string) {
  const s = String(raw).toLowerCase().replace(/[^a-z0-9-]/g, '-');
  return s.includes('-') ? s : `plg-${s}`;
}

function stableTagFor(plugin: ViewPlugin) {
  const srcKey = plugin.src.split('?')[0];
  const existing = tagBySrc.get(srcKey);
  if (existing) return existing;

  const tag = normalizeTagName((plugin as any).tagName ?? plugin.id);
  tagBySrc.set(srcKey, tag);
  return tag;
}

function isDefined(tagName: string) {
  return !!customElements.get(tagName);
}

async function defineFromModule(tagName: string, mod: any) {
  const ctor = (mod?.default ?? mod?.element) as CustomElementConstructor | undefined;
  if (!ctor) throw new Error(`Plugin module did not export a custom element constructor for "${tagName}".`);

  if (isDefined(tagName)) return tagName;

  try {
    customElements.define(tagName, ctor);
  } catch (e) {
    if (isDefined(tagName)) return tagName;

    // ctor already used under another tag -> wrap to create a fresh constructor
    const Base = ctor as unknown as { new (): HTMLElement };
    const Wrapped: CustomElementConstructor = class extends Base {};
    customElements.define(tagName, Wrapped);
  }

  await customElements.whenDefined(tagName);
  return tagName;
}

export async function ensureCustomElementDefined(plugin: ViewPlugin): Promise<string | null> {
  if (plugin.type !== 'external') return null;

  const tagName = stableTagFor(plugin);
  if (isDefined(tagName)) return tagName;

  const existing = inFlight.get(tagName);
  if (existing) return existing;

  const p = (async () => {
    const mod = await import(/* @vite-ignore */ plugin.src);

    if (!isDefined(tagName)) {
      await defineFromModule(tagName, mod);
    } else {
      await customElements.whenDefined(tagName);
    }

    return tagName;
  })().finally(() => {
    inFlight.delete(tagName);
  });

  inFlight.set(tagName, p);
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
