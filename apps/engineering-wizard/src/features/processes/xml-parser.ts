import type {
  Plugin,
  PluginGroup,
  PluginType,
  Process,
} from '@oscd-transnet-plugins/shared';
import { DEFAULT_PLUGIN_SRC_TYPE } from './config';

const text = (el: Element | null) => el?.textContent?.trim() ?? '';
const attr = (el: Element | null, key: string) =>
  el?.getAttribute(key) ?? undefined;

const all = (root: ParentNode, selector: string) =>
  Array.from(root.querySelectorAll(selector));

function parseSrcType(processEl: Element): PluginType {
  const value = attr(processEl.querySelector('src'), 'type') ?? '';
  return value === 'internal' || value === 'external'
    ? value
    : DEFAULT_PLUGIN_SRC_TYPE;
}

function parsePlugin(el: Element): Plugin {
  return {
    id: text(el.querySelector('id')),
    name: text(el.querySelector('name')),
    src: text(el.querySelector('src')) || undefined,
    sourceUrl: text(el.querySelector('sourceUrl')) || undefined,
    type: parseSrcType(el),
  };
}

/** Always returns Process objects with concrete `pluginGroups: PluginGroup[]`. */
export function parseProcessesXml(xml: XMLDocument): Process[] {
  return all(xml, 'process').map((procEl) => {
    const groupEls = all(procEl, ':scope > plugins-sequence > group');

    const pluginGroups: PluginGroup[] = groupEls.length
      ? groupEls.map((g) => ({
          title: text(g.querySelector(':scope > title')) || 'Untitled',
          plugins: all(g, ':scope > plugin').map(parsePlugin),
        }))
      : [
          {
            title: 'Ungrouped',
            plugins: all(procEl, ':scope > plugins-sequence > plugin').map(
              parsePlugin,
            ),
          },
        ];

    return {
      id: text(procEl.querySelector(':scope > id')),
      version: text(procEl.querySelector(':scope > version')),
      name: text(procEl.querySelector(':scope > name')),
      description: text(procEl.querySelector(':scope > description')),
      pluginGroups,
    };
  });
}

export function parseXmlString(xmlText: string): XMLDocument {
  if (typeof DOMParser === 'undefined') {
    throw new Error('DOMParser is not available in this environment.');
  }

  const xml = new DOMParser().parseFromString(xmlText, 'application/xml');
  if (xml.getElementsByTagName('parsererror').length) {
    throw new Error('Invalid XML file format.');
  }
  return xml;
}
