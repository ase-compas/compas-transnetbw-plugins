import type { Plugin, Process, CoMPASPlugin } from '@oscd-transnet-plugins/shared';
/* eslint-disable @nx/enforce-module-boundaries */
import processesUrl from '../assets/processes.xml?url';
const SOURCE_URL = processesUrl;

type PluginFromXml = {
  name: string;
}

type PluginGroupFromXml = {
  title: string;
  plugins: PluginFromXml[];
}

type ProcessFromXML = {
  id: string;
  version: string;
  name: string;
  description: string;
  pluginGroups: PluginGroupFromXml[];
}

export const compasPluginsStore = $state<{ compasPlugins: CoMPASPlugin[] }>({
  compasPlugins: []
});

export const processesFromXmlStore = $state<{ processes: ProcessFromXML[] }>({
  processes: [],
})

export const processesLoadingStore = $state<{ loading: boolean }>({
  loading: false,
});

export const processesErrorStore = $state<{ error: string }>({
  error: '',
});

export const processesStore = $state<{ processes: Process[] }>({
  processes: [],
});

export const selectedProcessState = $state<{ process: Process }>({
  process: null,
});

export const processEditModeState = $state<{ isEditing: boolean }>({
  isEditing: false,
});

const text = (el: Element | null) => el?.textContent?.trim() ?? '';
const all = (root: ParentNode, selector: string) =>
  Array.from(root.querySelectorAll(selector));

const parsePlugin = (el: Element): PluginFromXml => ({
  name:      text(el.querySelector('name')),
});

const parseProcessesXml = (xml: XMLDocument): ProcessFromXML[] =>
  all(xml, 'process').map((procEl) => {
    const groupEls = all(procEl, ':scope > plugins-sequence > group');

    const pluginGroups: PluginGroupFromXml[] = groupEls.length
      ? groupEls.map((g) => ({
        title:   text(g.querySelector(':scope > title')) || 'Untitled',
        plugins: all(g, ':scope > plugin').map(parsePlugin),
      }))
      : [
        {
          title: 'Ungrouped',
          plugins: all(procEl, ':scope > plugins-sequence > plugin').map(parsePlugin),
        },
      ];

    return {
      id:          text(procEl.querySelector(':scope > id')),
      version:     text(procEl.querySelector(':scope > version')),
      name:        text(procEl.querySelector(':scope > name')),
      description: text(procEl.querySelector(':scope > description')),
      pluginGroups,
    };
  });

export async function getProcesses(): Promise<ProcessFromXML[]> {
  try {
    const res = await fetch(SOURCE_URL, { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error(
        `HTTP ${res.status}${res.statusText ? `: ${res.statusText}` : ''}`
      );
    }

    const xmlText = await res.text();

    if (typeof DOMParser === 'undefined') {
      throw new Error('DOMParser is not available in this environment.');
    }

    const xml = new DOMParser().parseFromString(xmlText, 'application/xml');
    if (xml.getElementsByTagName('parsererror').length) {
      throw new Error('Invalid XML file format.');
    }

    const parsed = parseProcessesXml(xml);
    processesFromXmlStore.processes = parsed;
    return parsed;
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Failed to load processes.';
    processesErrorStore.error = message;
    throw err;
  } finally {
    processesLoadingStore.loading = false;
  }
}

/**
 * Add a plugin to the given process, creating the group if necessary.
 * If groupTitle is not provided/blank, falls back to "Ungrouped".
 */
export function addPluginToProcessStore(
  procId: string,
  plugin: Plugin,
  groupTitle?: string
): void {
  const title = (groupTitle && groupTitle.trim()) || 'Ungrouped';

  const process = processesStore.processes.find((p) => p.id === procId);
  if (!process) return;

  const groups = process.pluginGroups ?? (process.pluginGroups = []);

  let group = groups.find((g) => g.title === title);

  if (!group) {
    group = { title, plugins: [] };
    groups.push(group);
  }

  if (!group.plugins) {
    group.plugins = [];
  }

  group.plugins.push(plugin);
}

export function removePluginFromProcessStore(
  procId: string,
  pluginId: string
): boolean {
  const process = processesStore.processes.find((p) => p.id === procId);
  if (!process || !process.pluginGroups) return false;

  for (const group of process.pluginGroups) {
    if (!group?.plugins) continue;

    const index = group.plugins.findIndex((pl) => pl.id === pluginId);
    if (index === -1) continue;

    group.plugins.splice(index, 1);

    if (group.plugins.length === 0) {
      const groupIndex = process.pluginGroups.indexOf(group);
      if (groupIndex !== -1) {
        process.pluginGroups.splice(groupIndex, 1);
      }
    }

    return true;
  }

  return false;
}

export function removeAllPluginsFromProcessStore(procId: string): void {
  const process = processesStore.processes.find((p) => p.id === procId);
  if (!process || !process.pluginGroups) return;

  for (const group of process.pluginGroups) {
    if (group.plugins) {
      group.plugins.length = 0;
    }
  }
}

export function addGroupToProcessStore(
  procId: string,
  groupTitle: string
): void {
  const process = processesStore.processes.find((p) => p.id === procId);
  if (!process) return;

  const groups = process.pluginGroups ?? (process.pluginGroups = []);
  if (!groups.find((g) => g.title === groupTitle)) {
    groups.push({ title: groupTitle, plugins: [] });
  }
}

export function getPluginsForProcess(process: Process): Plugin[] {
  return (process.pluginGroups ?? []).flatMap((group) => group.plugins ?? []);
}
