import type { CoMPASPlugin, Plugin } from '@oscd-transnet-plugins/shared';
import type { ViewPlugin } from '../workflow/viewPlugin';
import { getLegacyHostPluginElementTag } from '../workflow/plugin-element-tag';

export type HostPlugin = CoMPASPlugin;

function normalize(value: string): string {
  return value.trim().toLocaleLowerCase('en-US');
}

function slug(value: string): string {
  return normalize(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getHostPluginCatalogId(plugin: HostPlugin): string {
  return plugin.catalogId?.trim() || `${plugin.kind}:${slug(plugin.name)}`;
}

function unresolved(plugin: Plugin, reason: string): ViewPlugin {
  return {
    ...plugin,
    src: plugin.src ?? '',
    resolutionError: `Cannot resolve internal plugin "${plugin.name}": ${reason}`,
  };
}

function resolved(plugin: Plugin, hostPlugin: HostPlugin): ViewPlugin {
  return {
    ...plugin,
    catalogId: getHostPluginCatalogId(hostPlugin),
    sourceUrl: plugin.sourceUrl ?? plugin.src,
    src: hostPlugin.src,
    tag:
      hostPlugin.content?.tag ??
      getLegacyHostPluginElementTag(hostPlugin.src),
  };
}

export function resolveWorkflowPlugin(
  plugin: Plugin,
  hostPlugins: HostPlugin[],
): ViewPlugin {
  if (plugin.type === 'external') {
    if (!plugin.src) {
      return {
        ...plugin,
        src: '',
        resolutionError: `External plugin "${plugin.name}" has no module URL.`,
      };
    }

    return { ...plugin, src: plugin.src };
  }

  const catalogMatches = plugin.catalogId
    ? hostPlugins.filter(
        (hostPlugin) => getHostPluginCatalogId(hostPlugin) === plugin.catalogId,
      )
    : [];

  if (catalogMatches.length > 1) {
    return unresolved(
      plugin,
      `the host catalog contains multiple plugins with catalog ID "${plugin.catalogId}".`,
    );
  }
  if (catalogMatches.length === 1) {
    return resolved(plugin, catalogMatches[0]);
  }

  const sourceMatches = hostPlugins.filter(
    (hostPlugin) =>
      hostPlugin.src === plugin.src || hostPlugin.src === plugin.sourceUrl,
  );

  if (sourceMatches.length > 1) {
    return unresolved(
      plugin,
      'the host catalog contains multiple plugins with that module URL.',
    );
  }
  if (sourceMatches.length === 1) {
    return resolved(plugin, sourceMatches[0]);
  }

  const nameMatches = hostPlugins.filter(
    (hostPlugin) => normalize(hostPlugin.name) === normalize(plugin.name),
  );
  if (nameMatches.length > 1) {
    return unresolved(
      plugin,
      'the host catalog contains multiple plugins with that name.',
    );
  }

  if (nameMatches.length === 1) {
    return resolved(plugin, nameMatches[0]);
  }

  return unresolved(plugin, 'it is not available in the host catalog.');
}
