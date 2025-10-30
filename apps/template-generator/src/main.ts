import App from './App.svelte';
import '../public/global.css';
import '../public/material-icon.css';
import '../public/smui.css';
import { mount } from "svelte";

const app = mount(App, {
  target: document.body,
  props: {
    name: 'template-generator',
    devMode: true,
    host: this
  },
});

export default app;
