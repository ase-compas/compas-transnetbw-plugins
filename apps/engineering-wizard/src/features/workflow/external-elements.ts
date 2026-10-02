import type { ViewPlugin } from './viewPlugin';
import {
  describePluginLoadError,
  getPluginLoadState,
  setPluginLoadState,
} from './plugin-load-status.svelte';
import { getPluginElementTag } from './plugin-element-tag';

export { getPluginElementTag } from './plugin-element-tag';

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

function isLocalHostname(hostname: string): boolean {
  return (
    hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]'
  );
}

export function resolvePluginModuleUrl(
  src: string,
  origin = window.location.origin,
): URL {
  let resolved: URL;
  try {
    resolved = new URL(src, origin);
  } catch {
    throw new Error(`Invalid plugin URL "${src}".`);
  }

  if (!ALLOWED_SRC_PROTOCOLS.has(resolved.protocol)) {
    throw new Error(
      `Refusing to load plugin from unsupported URL scheme "${resolved.protocol}".`,
    );
  }

  const hostOrigin = new URL(origin);
  const isSameOrigin = resolved.origin === hostOrigin.origin;
  const isSecure = resolved.protocol === 'https:';
  const isLocalDevelopment =
    resolved.protocol === 'http:' &&
    isLocalHostname(resolved.hostname) &&
    isLocalHostname(hostOrigin.hostname);

  if (!isSecure && !isSameOrigin && !isLocalDevelopment) {
    throw new Error(
      `Refusing to load insecure cross-origin plugin "${resolved.href}".`,
    );
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
  const tag = getPluginElementTag(plugin);
  assertValidCustomElementName(tag);

  if (plugin.resolutionError) {
    const error = new Error(plugin.resolutionError);
    setPluginLoadState(tag, {
      status: 'error',
      error: plugin.resolutionError,
      errorKind: 'plugin',
    });
    throw error;
  }

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
      const srcUrl = resolvePluginModuleUrl(plugin.src);
      const href = retry ? cacheBustedHref(srcUrl) : srcUrl.href;
      const mod = await import(/* @vite-ignore */ href);
      const ctor = (mod?.default ?? mod?.element) as
        CustomElementConstructor | undefined;

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
      setPluginLoadState(tag, {
        status: 'error',
        ...describePluginLoadError(e),
      });
      throw e;
    }
  })().finally(() => {
    inFlight.delete(tag);
  });

  inFlight.set(tag, p);
  return p;
}
