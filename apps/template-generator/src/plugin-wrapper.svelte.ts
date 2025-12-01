import Plugin from './plugin.svelte'; import * as pkg from '../package.json';
import { mount, unmount } from 'svelte';
import { pluginStore } from '@oscd-transnet-plugins/oscd-template-generator';

export default class NewOSCDPlugin extends HTMLElement {

  private app;

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.app = mount(Plugin, { target: this.shadowRoot! });
    pluginStore.setPluginState({host: this, doc: this._doc})
    const linkElement = createStyleLinkElement();
    this.shadowRoot?.appendChild(linkElement);
  }

  disconnectedCallback() {
    console.log("unmounting plugin");
    if (this.app) unmount(this.app);
  }

  private _doc?: XMLDocument;
  public set doc(newDoc: XMLDocument) {
    this._doc = newDoc;
  }

  private _editCount?: number;
  public set editCount(newCount: number) {
    this._editCount = newCount;
    pluginStore.setPluginState({ doc: this._doc, host: this });
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
