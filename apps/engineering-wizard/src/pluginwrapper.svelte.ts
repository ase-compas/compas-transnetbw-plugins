import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';

export default class NewOSCDPlugin extends HTMLElement {
  private _doc?: XMLDocument;
  private _props: {
    doc?: XMLDocument;
    editCount: number;
    host: NewOSCDPlugin;
  }

  constructor() {
    super();

    this._props = $state({
      doc: this._doc,
      editCount: -1,
      host: this as NewOSCDPlugin,
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

  set editCount(newCount: number) {
    this._props.editCount = newCount;
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
