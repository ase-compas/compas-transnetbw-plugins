import Plugin from './plugin.svelte'; import * as pkg from '../package.json';
import { mount, unmount } from 'svelte';
import { initializeDataTypeService } from './features/type-details/services/type.service';
import { pluginStore } from './shared/states/plugin.state.svelte';

export default class NewOSCDPlugin extends HTMLElement {

  private app;

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.addEventListener('oscd-edit-v2', (event: CustomEvent) => {
      console.log("Received edit event in plugin wrapper", event.detail);
    });

    const linkElement = createStyleLinkElement();
    this.shadowRoot!.appendChild(linkElement);

    const themeEl = document.createElement('style');
    themeEl.textContent = `:host { --primary-base: var(--primary); --white: #ffffff; --danger: var(--red); }`;
    this.shadowRoot!.appendChild(themeEl);

    initializeDataTypeService(this._doc!, this);
    pluginStore.setPluginState({host: this, doc: this._doc});

    linkElement.addEventListener(
      'load',
      () => {
        this.app = mount(Plugin, { target: this.shadowRoot! });
      },
      { once: true },
    );

    linkElement.addEventListener(
      'error',
      () => {
        this.app = mount(Plugin, { target: this.shadowRoot! });
      },
      { once: true },
    );
  }

  disconnectedCallback() {
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

function createStyleLinkElement(): HTMLLinkElement {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = new URL(/* @vite-ignore */ './style.css', import.meta.url).href;
  link.id = `${pkg.name}-v${pkg.version}-style`;
  return link;
}
