import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';

interface PluginProps {
  doc?: XMLDocument;
  editCount: number;
  host: NewOSCDPlugin;
  docName?: string;
  docId?: string;
  locale?: string;
}

export default class NewOSCDPlugin extends HTMLElement {
  private _props: PluginProps;

  constructor() {
    super();
    this._props = $state({
      doc: undefined,
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

    const mountPlugin = () => mount(Plugin, { target: shadowRoot, props: this._props });
    linkElement.addEventListener('load', mountPlugin, { once: true });
    linkElement.addEventListener('error', mountPlugin, { once: true });
  }

  set doc(newDoc: XMLDocument) {
    this._props.doc = newDoc;
  }

  set editCount(newCount: number) {
    this._props.editCount = newCount;
  }

  set docName(v: string) {
    this._props.docName = v;
  }

  set docId(v: string) {
    this._props.docId = v;
  }

  set locale(v: string) {
    this._props.locale = v;
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
