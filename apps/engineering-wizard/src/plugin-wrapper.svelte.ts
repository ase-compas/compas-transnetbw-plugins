import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';
import { installPluginFonts, pluginTheme } from '@oscd-transnet-plugins/theme';
import materialStyles from 'svelte-material-ui/bare.css?inline';
import iconStyles from '../public/material-icon.css?inline';
import smuiStyles from '../public/smui.css?inline';
import globalStyles from '../public/global.css?inline';
import '../public/custom-theme-tokens.css';
import type { CoMPASPlugin } from '@oscd-transnet-plugins/shared';
import { setInternalPlugins } from './features/processes/mutations.svelte';
import { validationCoordinator } from './services/validationCoordinator.svelte';

interface PluginProps {
  doc?: XMLDocument;
  editCount: number;
  host: NewOSCDPlugin;
  plugins: CoMPASPlugin[];
  docId?: string;
  pluginId?: string;
  docName?: string;
  nsdoc?: unknown;
  docs?: Record<string, XMLDocument>;
  locale?: string;
  oscdApi?: unknown;
}

export default class NewOSCDPlugin extends HTMLElement {
  private _doc?: XMLDocument;

  private _props: PluginProps;

  private _onOnline = () => validationCoordinator.retryFailed();

  constructor() {
    super();

    this._props = $state({
      doc: this._doc,
      editCount: -1,
      host: this as NewOSCDPlugin,
      plugins: [],
      docs: {},
      locale: navigator.language ?? 'en-US',
    });
  }

  connectedCallback() {
    window.addEventListener('online', this._onOnline);

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

  disconnectedCallback() {
    window.removeEventListener('online', this._onOnline);
    validationCoordinator.cancel();
  }

  set doc(newDoc: XMLDocument) {
    this._doc = newDoc;
    this._props.doc = newDoc;
  }
  get doc(): XMLDocument | undefined {
    return this._doc;
  }

  set plugins(newPlugins: unknown[]) {
    const typedPlugins = newPlugins as CoMPASPlugin[];
    this._props.plugins = typedPlugins;
    setInternalPlugins(typedPlugins.filter((p) => p.kind === 'editor'));
  }

  set editCount(newCount: number) {
    this._props.editCount = newCount;
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
