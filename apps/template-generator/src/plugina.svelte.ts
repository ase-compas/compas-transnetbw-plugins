import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from "svelte";
import { pluginStateStore, pluginStore } from '@oscd-transnet-plugins/oscd-template-generator';

export default class NewOSCDPlugin extends HTMLElement {

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    mount(Plugin, { target: this.shadowRoot! });
    //pluginState.host = this;
    pluginStore.setPluginState({host: this, doc: this._doc})

    const linkElement = createStyleLinkElement();
    this.shadowRoot?.appendChild(linkElement);
  }

  private _doc?: XMLDocument;
  public set doc(newDoc: XMLDocument) {
    console.log("setter plugin.ts", newDoc)

    pluginStore.setDoc(newDoc);
    this._doc = newDoc;
    //setPluginState({ doc: newDoc });
    //console.log("here", pluginState.doc);
    //test.doc = newDoc;
    pluginStateStore.setPluginState({ doc: newDoc, host: this });
  }

  public set editCount(newCount: number) {
    // noop
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
