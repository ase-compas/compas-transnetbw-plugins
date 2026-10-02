import { describe, expect, it } from 'vitest';
import type { CoMPASPlugin, Plugin } from '@oscd-transnet-plugins/shared';
import {
  getHostPluginCatalogId,
  resolveWorkflowPlugin,
} from './plugin-catalog';

const hostPlugin = (overrides: Partial<CoMPASPlugin> = {}): CoMPASPlugin => ({
  active: false,
  activeByDefault: false,
  icon: 'developer_board',
  kind: 'editor',
  name: 'IED',
  requiresDoc: true,
  src: '/external-plugins/IedEditor.js',
  ...overrides,
});

const processPlugin = (overrides: Partial<Plugin> = {}): Plugin => ({
  id: 'plugin-ied',
  name: 'IED',
  src: '/plugins/src/editors/IED.js',
  type: 'internal',
  ...overrides,
});

describe('plugin catalog', () => {
  it('assigns a deterministic fallback identity to legacy host entries', () => {
    expect(getHostPluginCatalogId(hostPlugin())).toBe('editor:ied');
    expect(
      getHostPluginCatalogId(hostPlugin({ catalogId: 'org.openscd.ied' })),
    ).toBe('org.openscd.ied');
  });

  it('migrates a legacy process reference to the current host descriptor', () => {
    expect(
      resolveWorkflowPlugin(processPlugin(), [hostPlugin()]),
    ).toMatchObject({
      catalogId: 'editor:ied',
      icon: 'developer_board',
      sourceUrl: '/plugins/src/editors/IED.js',
      src: '/external-plugins/IedEditor.js',
      tag: expect.stringMatching(/^oscd-plugin[a-f0-9]{16}$/),
    });
  });

  it('uses a host-provided element tag instead of the legacy fallback', () => {
    const resolved = resolveWorkflowPlugin(processPlugin(), [
      hostPlugin({ content: { tag: 'oscd-plugin-host' } }),
    ]);

    expect(resolved.tag).toBe('oscd-plugin-host');
  });

  it('prefers an explicit stable catalog ID over stale names and URLs', () => {
    const resolved = resolveWorkflowPlugin(
      processPlugin({
        catalogId: 'org.openscd.ied',
        name: 'Old IED name',
      }),
      [hostPlugin({ catalogId: 'org.openscd.ied' })],
    );

    expect(resolved.src).toBe('/external-plugins/IedEditor.js');
    expect(resolved.resolutionError).toBeUndefined();
  });

  it('does not let lower-priority URL ambiguity override a catalog match', () => {
    const resolved = resolveWorkflowPlugin(
      processPlugin({ catalogId: 'org.openscd.ied' }),
      [
        hostPlugin({ catalogId: 'org.openscd.ied' }),
        hostPlugin({ name: 'Other', catalogId: 'org.openscd.other' }),
      ],
    );

    expect(resolved.catalogId).toBe('org.openscd.ied');
    expect(resolved.resolutionError).toBeUndefined();
  });

  it('rejects ambiguous name migration instead of choosing arbitrarily', () => {
    const resolved = resolveWorkflowPlugin(processPlugin(), [
      hostPlugin(),
      hostPlugin({ src: '/other-ied.js' }),
    ]);

    expect(resolved.resolutionError).toContain(
      'multiple plugins with that name',
    );
  });

  it('does not import an unresolved internal legacy URL', () => {
    const resolved = resolveWorkflowPlugin(processPlugin(), []);

    expect(resolved.resolutionError).toContain(
      'not available in the host catalog',
    );
  });

  it('keeps external plugin URLs independent from the host catalog', () => {
    const external = processPlugin({
      type: 'external',
      src: 'https://plugins.example/plugin.js',
    });

    expect(resolveWorkflowPlugin(external, [])).toEqual(external);
  });
});
