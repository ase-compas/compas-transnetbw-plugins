import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';
import { installPluginFonts, pluginTheme } from '@oscd-transnet-plugins/theme';
import materialStyles from 'svelte-material-ui/bare.css?inline';
import iconStyles from '../public/material-icon.css?inline';
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
    if (this.shadowRoot) return;

    this.attachShadow({ mode: 'open' });
    const shadowRoot = this.shadowRoot!;

    installPluginFonts(iconStyles);

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
