import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';

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
      editCount: -1,
      host: this as NewOSCDPlugin,
      locale: navigator.language ?? 'en-US',
    });
  }

  connectedCallback() {
    if (this.shadowRoot) return;

    this.attachShadow({ mode: 'open' });
    const shadowRoot = this.shadowRoot!;

    const linkElement = createStyleLinkElement();
    shadowRoot.appendChild(linkElement);

    const themeEl = document.createElement('style');
    themeEl.textContent = `:host { --primary-base: var(--primary); --white: #ffffff; --danger: var(--red); }`;
    shadowRoot.appendChild(themeEl);

    linkElement.addEventListener(
      'load',
      () => mount(Plugin, { target: shadowRoot, props: this._props }),
      { once: true },
    );

    linkElement.addEventListener(
      'error',
      () => mount(Plugin, { target: shadowRoot, props: this._props }),
      { once: true },
    );
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

function createStyleLinkElement(): HTMLLinkElement {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = new URL('./style.css', import.meta.url).href;
  link.id = `${pkg.name}-v${pkg.version}-style`;
  return link;
}
