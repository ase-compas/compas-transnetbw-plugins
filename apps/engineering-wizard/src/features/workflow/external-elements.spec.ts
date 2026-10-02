import { afterEach, describe, expect, it, vi } from 'vitest';
import type { ViewPlugin } from './viewPlugin';
import {
  getPluginElementTag,
  resolvePluginModuleUrl,
} from './external-elements';
import { describePluginLoadError } from './plugin-load-status.svelte';

afterEach(() => {
  vi.unstubAllGlobals();
});

const plugin = (overrides: Partial<ViewPlugin> = {}): ViewPlugin => ({
  id: 'plugin-ied',
  catalogId: 'org.openscd.ied',
  name: 'IED',
  src: '/external-plugins/IedEditor.js',
  type: 'internal',
  ...overrides,
});

describe('plugin element loading', () => {
  it('uses a host-provided tag when the host already registered the plugin', () => {
    expect(getPluginElementTag(plugin({ tag: 'oscd-plugin-host' }))).toBe(
      'oscd-plugin-host',
    );
  });

  it('creates deterministic Wizard-owned tags without copying host hashing', () => {
    const first = getPluginElementTag(plugin());
    const second = getPluginElementTag(
      plugin({ src: '/new/location/IedEditor.js' }),
    );

    expect(first).toBe(second);
    expect(first).toMatch(/^engineering-wizard-plugin-[a-f0-9]{16}$/);
  });

  it('isolates external plugins with reused process IDs but different URLs', () => {
    const first = getPluginElementTag(
      plugin({
        catalogId: undefined,
        type: 'external',
        src: 'https://one.example/plugin.js',
      }),
    );
    const second = getPluginElementTag(
      plugin({
        catalogId: undefined,
        type: 'external',
        src: 'https://two.example/plugin.js',
      }),
    );

    expect(first).not.toBe(second);
  });

  it('allows HTTPS and same-origin development modules', () => {
    expect(
      resolvePluginModuleUrl(
        'https://plugins.example/plugin.js',
        'https://compas.example',
      ).href,
    ).toBe('https://plugins.example/plugin.js');
    expect(resolvePluginModuleUrl('/plugin.js', 'http://127.0.0.1').href).toBe(
      'http://127.0.0.1/plugin.js',
    );
  });

  it('rejects executable URL schemes and insecure cross-origin HTTP', () => {
    expect(() =>
      resolvePluginModuleUrl('javascript:alert(1)', 'https://compas.example'),
    ).toThrow('unsupported URL scheme');
    expect(() =>
      resolvePluginModuleUrl(
        'http://plugins.example/plugin.js',
        'https://compas.example',
      ),
    ).toThrow('insecure cross-origin plugin');
  });

  it('does not present plugin failures as connection failures', () => {
    vi.stubGlobal('navigator', { onLine: true });

    expect(
      describePluginLoadError(new TypeError('Invalid plugin configuration')),
    ).toEqual({
      error: 'The plugin could not be loaded. Invalid plugin configuration',
      errorKind: 'plugin',
    });
  });

  it('uses connection guidance only when the browser is offline', () => {
    vi.stubGlobal('navigator', { onLine: false });

    expect(describePluginLoadError(new TypeError('Failed to fetch'))).toEqual({
      error:
        'You are offline. Restore your network connection and try loading the plugin again.',
      errorKind: 'offline',
    });
  });
});
