import type { Plugin, Process } from '@oscd-transnet-plugins/shared';
import { parseValidationImport } from '../plugins/validation/validationJson';

export const MAX_PROCESS_IMPORT_BYTES = 5 * 1024 * 1024;
const FORMAT_VERSION = 1;

function record(value: unknown): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error('Expected a JSON object.');
  }
  return value as Record<string, unknown>;
}

function string(value: unknown, key: string, required = true): string {
  if (!required && value === undefined) return '';
  if (typeof value !== 'string' || (required && !value.trim())) {
    throw new Error(`"${key}" must be ${required ? 'a non-empty' : 'a'} string.`);
  }
  return value;
}

function array(value: unknown, key: string): unknown[] {
  if (!Array.isArray(value)) throw new Error(`"${key}" must be an array.`);
  return value;
}

function parsePlugin(value: unknown): Plugin {
  const plugin = record(value);
  if (plugin.type !== 'internal' && plugin.type !== 'external') {
    throw new Error('Plugin "type" must be "internal" or "external".');
  }
  const result: Plugin = {
    id: string(plugin.id, 'id'),
    name: string(plugin.name, 'name'),
    type: plugin.type,
  };
  for (const key of ['catalogId', 'icon', 'src', 'sourceUrl'] as const) {
    if (plugin[key] !== undefined) result[key] = string(plugin[key], key, false);
  }
  if (plugin.validations !== undefined) {
    result.validations = parseValidationImport(array(plugin.validations, 'validations'));
  }
  return result;
}

function parseProcess(value: unknown): Process {
  const process = record(value);
  const pluginIds = new Set<string>();
  return {
    id: string(process.id, 'id'),
    name: string(process.name, 'name'),
    version: string(process.version, 'version'),
    description: string(process.description, 'description', false),
    pluginGroups: array(process.pluginGroups, 'pluginGroups').map((value) => {
      const group = record(value);
      return {
        title: string(group.title, 'title'),
        plugins: array(group.plugins, 'plugins').map((value) => {
          const plugin = parsePlugin(value);
          if (pluginIds.has(plugin.id)) {
            throw new Error(`Duplicate plugin id "${plugin.id}".`);
          }
          pluginIds.add(plugin.id);
          return plugin;
        }),
      };
    }),
  };
}

export function parseProcessImportJson(content: string): Process[] {
  let value: unknown;
  try {
    value = JSON.parse(content);
  } catch {
    throw new Error('The selected file does not contain valid JSON.');
  }
  if (Array.isArray(value)) return value.map(parseProcess);
  const exported = record(value);
  if (exported.formatVersion !== FORMAT_VERSION) {
    throw new Error(`Unsupported process export format version "${String(exported.formatVersion)}".`);
  }
  return array(exported.processes, 'processes').map(parseProcess);
}

export function createProcessExport(processes: readonly Process[]) {
  return {
    formatVersion: FORMAT_VERSION,
    processes: processes.map(parseProcess),
  };
}

export async function importProcessFiles(
  files: readonly Pick<File, 'name' | 'size' | 'text'>[],
) {
  const processes: Process[] = [];
  const failures: { name: string; reason: string }[] = [];
  let importedFiles = 0;
  let readBytes = 0;
  for (const file of files) {
    try {
      if (file.size > MAX_PROCESS_IMPORT_BYTES - readBytes) {
        throw new Error('The file exceeds the remaining combined 5 MB import limit.');
      }
      readBytes += file.size;
      const parsed = parseProcessImportJson(await file.text());
      processes.push(...parsed);
      importedFiles++;
    } catch (error) {
      failures.push({
        name: file.name,
        reason: error instanceof Error ? error.message : String(error),
      });
    }
  }
  return { processes, importedFiles, failures };
}

export function downloadProcessExport(processes: readonly Process[]): void {
  const content = JSON.stringify(createProcessExport(processes), null, 2);
  const url = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'engineering-processes.json';
  link.hidden = true;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}
