import Plugin from './plugin.svelte'; import * as pkg from '../package.json';
import { mount, unmount } from 'svelte';
import { docState } from './shared/states/doc.state.svelte';

export default class NewOSCDPlugin extends HTMLElement {

  private app;
  private _doc?: XMLDocument;
  private _editCount?: number;

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    const linkElement = createStyleLinkElement();
    this.shadowRoot?.appendChild(linkElement);

    const themeEl = document.createElement('style');
    themeEl.textContent = `:host { --primary-base: var(--primary); --white: #ffffff; --danger: var(--red); }`;
    this.shadowRoot!.appendChild(themeEl);

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

  public set doc(newDoc: XMLDocument) {
    docState.setDoc(newDoc);
    this._doc = newDoc;
  }

  public set editCount(newCount: number) {
    docState.setEditCount(newCount);
    this._editCount = newCount;
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
