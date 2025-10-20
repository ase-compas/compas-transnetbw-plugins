import App from './App.svelte';
import { mount } from 'svelte';
import '../public/global.css';
import '../public/material-icon.css';
import '../public/smui.css';

export default mount(App, {
  target: document.body,
  props: {
    name: 'template-generator',
    devMode: true,
    host: globalThis
  }
});
