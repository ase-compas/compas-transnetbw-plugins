import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from "svelte";

type Props = {
  doc?: XMLDocument;
  editCount?: number;
}

export default class NewOSCDPlugin extends HTMLElement {

  private readonly props: Props;

  constructor() {
    super();
    this.props = $state({
      doc: undefined,
      editCount: undefined,
    })
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.props.doc = this._doc;
    this.props.editCount = this.editCount;

    mount(Plugin, {
          target: this.shadowRoot!,
          props: this.props,
        });

    const linkElement = createStyleLinkElement();
    this.shadowRoot?.appendChild(linkElement);
  }

  private _doc?: XMLDocument;
  public set doc(newDoc: XMLDocument) {
    this._doc = newDoc;
    this.props.doc = newDoc
  }

  public set editCount(newCount: number) {
    this.props.editCount = newCount;
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
