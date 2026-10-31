import App from './App.svelte';
import '../public/global.css';
import '../public/material-icon.css';
import 'svelte-material-ui/bare.css';
import '../../../libs/theme/src/lib/plugin-theme.css';
import '../public/custom-theme-tokens.css';
import { mount } from "svelte";

const app = mount(App, {
  target: document.body,
  props: {},
});

export default app;
