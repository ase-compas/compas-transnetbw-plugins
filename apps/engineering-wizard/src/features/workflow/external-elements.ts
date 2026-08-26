import type { ViewPlugin } from './viewPlugin';
import { describePluginLoadError, getPluginLoadState, setPluginLoadState } from './plugin-load-status.svelte';

const inFlight = new Map<string, Promise<void>>();

function isDefined(tag: string) {
  return !!customElements.get(tag);
}

function assertValidCustomElementName(tag: string) {
  if (!tag.includes('-')) {
    throw new Error(
      `Invalid custom element name "${tag}". Custom element names must contain a dash.`,
    );
  }
}

const ALLOWED_SRC_PROTOCOLS = new Set(['http:', 'https:']);

function assertSafePluginSrc(src: string): URL {
  let resolved: URL;
  try {
    resolved = new URL(src, window.location.origin);
  } catch {
    throw new Error(`Invalid plugin URL "${src}".`);
  }
  if (!ALLOWED_SRC_PROTOCOLS.has(resolved.protocol)) {
    throw new Error(`Refusing to load plugin from unsupported URL scheme "${resolved.protocol}".`);
  }
  return resolved;
}

function cacheBustedHref(url: URL): string {
  const next = new URL(url.href);
  next.searchParams.set('retry', String(Date.now()));
  return next.href;
}

export async function ensureCustomElementDefined(
  plugin: ViewPlugin,
): Promise<void> {
  if (plugin.type !== 'external') return;

  const tag = plugin.id;
  assertValidCustomElementName(tag);

  if (isDefined(tag)) {
    setPluginLoadState(tag, { status: 'loaded' });
    return;
  }

  const existing = inFlight.get(tag);
  if (existing) return existing;

  const retry = getPluginLoadState(tag).status === 'error';
  setPluginLoadState(tag, { status: 'loading' });

  const p = (async () => {
    try {
      const srcUrl = assertSafePluginSrc(plugin.src);
      const href = retry ? cacheBustedHref(srcUrl) : srcUrl.href;
      const mod = await import(/* @vite-ignore */ href);
      const ctor = (mod?.default ?? mod?.element) as
        | CustomElementConstructor
        | undefined;

      if (!ctor) {
        throw new Error(
          `Plugin "${plugin.id}" did not export a custom element constructor.`,
        );
      }

      const Base = ctor as unknown as { new (): HTMLElement };
      const Wrapped: CustomElementConstructor = class extends Base {};

      if (!isDefined(tag)) {
        try {
          customElements.define(tag, Wrapped);
        } catch (e) {
          if (!isDefined(tag)) throw e; // tolerate races
        }
      }

      await customElements.whenDefined(tag);
      setPluginLoadState(tag, { status: 'loaded' });
    } catch (e) {
      setPluginLoadState(tag, { status: 'error', error: describePluginLoadError(e) });
      throw e;
    }
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
