import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';
import { installPluginFonts, pluginTheme } from '@oscd-transnet-plugins/theme';
import materialStyles from 'svelte-material-ui/bare.css?inline';
import iconStyles from '../public/material-icon.css?inline';
import iconFontStyles from '../public/material-icon-font.css?inline';
import smuiStyles from '../public/smui.css?inline';
import globalStyles from '../public/global.css?inline';

interface PluginProps {
  doc?: XMLDocument;
  editCount: number;
  host: NewOSCDPlugin;
  plugins?: unknown[];
  docId?: string;
  pluginId?: string;
  docName?: string;
  nsdoc?: unknown;
  docs?: Record<string, XMLDocument>;
  locale?: string;
  oscdApi?: unknown;
}

export default class NewOSCDPlugin extends HTMLElement {
  private _props: PluginProps;

  constructor() {
    super();

    this._props = $state({
      doc: undefined as XMLDocument | undefined,
      editCount: -1,
      host: this as NewOSCDPlugin,
      locale: navigator.language ?? 'en-US',
    });
  }

  connectedCallback() {
    // A value assigned before upgrade is an own property and hides the setter,
    // so _props stays empty. Replay only values that were actually assigned and
    // that still have a setter. Hosts may omit properties such as editCount.
    adoptPropertiesSetBeforeUpgrade(this);

    if (this.shadowRoot) return;

    this.attachShadow({ mode: 'open' });
    const shadowRoot = this.shadowRoot!;

    installPluginFonts(iconFontStyles);

    const styleElement = document.createElement('style');
    styleElement.id = `${pkg.name}-v${pkg.version}-style`;
    styleElement.textContent = [
      materialStyles,
      iconStyles,
      smuiStyles,
      globalStyles,
      pluginTheme,
    ].join('\n');
    shadowRoot.appendChild(styleElement);

    mount(Plugin, { target: shadowRoot, props: this._props });
  }

  set doc(newDoc: XMLDocument) {
    this._props.doc = newDoc;
  }

  set editCount(newCount: number) {
    this._props.editCount = newCount;
  }

  set plugins(newPlugins: unknown[]) {
    this._props.plugins = newPlugins;
  }

  set docId(v: string) {
    this._props.docId = v;
  }

  set pluginId(v: string) {
    this._props.pluginId = v;
  }

  set docName(v: string) {
    this._props.docName = v;
  }

  set nsdoc(v: unknown) {
    this._props.nsdoc = v;
  }

  set docs(v: Record<string, XMLDocument>) {
    this._props.docs = v;
  }

  set locale(v: string) {
    this._props.locale = v;
  }

  set oscdApi(v: unknown) {
    this._props.oscdApi = v;
  }
}
/**
 * Replays values that were assigned before the custom element upgraded.
 *
 * Only an own property whose setter still exists is deleted and assigned again.
 * A property the host never set stays at its constructor value.
 *
 * @example
 * // Before: element.doc is an own property, element.editCount was never set.
 * adoptPropertiesSetBeforeUpgrade(element);
 * // After: the doc setter ran and _props.doc is that document.
 * // editCount is unchanged.
 */
function adoptPropertiesSetBeforeUpgrade(host: NewOSCDPlugin): void {
  const record = host as unknown as Record<string, unknown>;
  for (const name of setterNames(host)) {
    if (!Object.hasOwn(record, name)) continue;
    const value = record[name];
    delete record[name];
    record[name] = value;
  }
}

/**
 * Names of setters on the prototype chain, stopping before `HTMLElement`.
 *
 * A removed setter is absent. The host does not have to provide every name.
 *
 * @example
 * // Class declares set doc, set docName, and set editCount.
 * setterNames(element);
 * // ['doc', 'docName', 'editCount']
 */
function setterNames(host: object): string[] {
  const names: string[] = [];
  let prototype = Object.getPrototypeOf(host) as object | null;
  while (prototype && prototype !== HTMLElement.prototype) {
    for (const name of Object.getOwnPropertyNames(prototype)) {
      if (Object.getOwnPropertyDescriptor(prototype, name)?.set) {
        names.push(name);
      }
    }
    prototype = Object.getPrototypeOf(prototype) as object | null;
  }
  return names;
}

