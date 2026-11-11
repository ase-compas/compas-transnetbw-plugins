import {
  toStoredValidation,
  type Process,
} from '@oscd-transnet-plugins/shared';

export type ProcessImportDecision =
  | { status: 'new' | 'already-present' }
  | { status: 'conflict'; reason: string };

function comparableProcess(process: Process, other: Process): Process {
  return {
    id: process.id,
    version: process.version,
    name: process.name,
    description: process.description ?? '',
    pluginGroups: process.pluginGroups.map((group, groupIndex) => ({
      title: group.title,
      plugins: group.plugins.map((plugin, pluginIndex) => ({
        id: plugin.id,
        name: plugin.name,
        type: plugin.type,
        catalogId: plugin.catalogId ?? '',
        icon: plugin.icon ?? '',
        src: plugin.src ?? '',
        sourceUrl: plugin.sourceUrl ?? '',
        validations: (plugin.validations ?? []).map((validation, index) => {
          const { id, ...content } = toStoredValidation(validation);
          const otherId =
            other.pluginGroups[groupIndex]?.plugins[pluginIndex]?.validations?.[
              index
            ]?.id;
          return {
            ...content,
            description: content.description ?? '',
            message: content.message ?? '',
            // Legacy exports lack rule IDs; migration alone is not a content change.
            ...(id !== undefined && otherId !== undefined ? { id } : {}),
          };
        }),
      })),
    })),
  };
}

export function classifyProcessImport(
  incoming: Process,
  existing: readonly Process[],
): ProcessImportDecision {
  const matching = existing.filter(({ id }) => id === incoming.id);
  if (matching.length === 0) return { status: 'new' };

  for (const process of matching) {
    if (
      JSON.stringify(comparableProcess(incoming, process)) !==
      JSON.stringify(comparableProcess(process, incoming))
    ) {
      return {
        status: 'conflict',
        reason:
          process.version !== incoming.version
            ? `Existing version "${process.version}" differs from imported version "${incoming.version}".`
            : `Version "${incoming.version}" already exists with different content.`,
      };
    }
  }

  return { status: 'already-present' };
}
