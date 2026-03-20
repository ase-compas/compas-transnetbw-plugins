import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';
import type { CoMPASPlugin } from '@oscd-transnet-plugins/shared';
import { setInternalPlugins } from './features/processes/mutations.svelte';
import { scheduleEditValidation, cancelPendingValidation } from './services/editValidationHandler';

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
    if (this.shadowRoot) return;

    this.attachShadow({ mode: 'open' });
    const shadowRoot = this.shadowRoot!;

    mount(Plugin, { target: shadowRoot, props: this._props });
    shadowRoot.appendChild(createStyleLinkElement());
  }

  disconnectedCallback() {
    cancelPendingValidation();
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
    if (newCount >= 0) scheduleEditValidation();
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

function createStyleLinkElement(): HTMLLinkElement {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = new URL('./style.css', import.meta.url).href;
  link.id = `${pkg.name}-v${pkg.version}-style`;
  return link;
}
