import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';
import type { CoMPASPlugin } from '@oscd-transnet-plugins/shared';
import { setInternalPlugins } from './features/processes/mutations.svelte';

export default class NewOSCDPlugin extends HTMLElement {
  private _doc?: XMLDocument;
  private _props: {
    doc?: XMLDocument;
    editCount: number;
    host: NewOSCDPlugin;
    plugins: any[];
    docId?: string;
    pluginId?: string;
    docName?: string;
    nsdoc?: any;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: any;
  };

  constructor() {
    super();

    this._props = $state({
      doc: this._doc,
      editCount: -1,
      host: this as NewOSCDPlugin,
      plugins: [],
      docId: null,
      pluginId: null,
      docName: null,
      nsdoc: null,
      docs: {},
      locale: navigator.language ?? 'en-US',
      oscdApi: null,
    });
  }

  connectedCallback() {
    if (this.shadowRoot) return;

    this.attachShadow({ mode: 'open' });

    mount(Plugin, {
      target: this.shadowRoot!,
      props: this._props,
    });

    const linkElement = createStyleLinkElement();
    this.shadowRoot!.appendChild(linkElement);
  }

  set doc(newDoc: XMLDocument) {
    this._doc = newDoc;
    this._props.doc = newDoc;
  }
  get doc(): XMLDocument | undefined {
    return this._doc;
  }

  set plugins(newPlugins: unknown[]) {
    this._props.plugins = newPlugins as any[];

    const editorPlugins = (newPlugins as CoMPASPlugin[])
      .filter(p => p.kind === 'editor');

    setInternalPlugins(editorPlugins)
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

  set nsdoc(v: any) {
    this._props.nsdoc = v;
  }

  set docs(v: Record<string, XMLDocument>) {
    this._props.docs = v;
  }

  set locale(v: string) {
    this._props.locale = v;
  }

  set oscdApi(v: any) {
    this._props.oscdApi = v;
  }
}

function createStyleLinkElement(): HTMLElement {
  const id = `${pkg.name}-v${pkg.version}-style`;
  const stylePath = generateStylePath();

  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.type = 'text/css';
  linkElement.href = stylePath;
  linkElement.id = id;
  return linkElement;
}

function generateStylePath(): string {
  const srcUrl = new URL(import.meta.url);
  const origin = srcUrl.origin;
  const path = srcUrl.pathname
    .split('/')
    .slice(0, -1)
    .filter(Boolean)
    .join('/');
  return [origin, path, 'style.css'].filter(Boolean).join('/');
}
