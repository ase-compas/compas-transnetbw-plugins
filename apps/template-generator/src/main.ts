import App from './App.svelte';
import 'svelte-material-ui/bare.css';
import '../public/global.css';
import '../public/material-icon.css';
import '../public/smui.css';
import '@oscd-transnet-plugins/theme/plugin-fonts.css';
import '@oscd-transnet-plugins/theme/plugin-theme.css';
import { mount } from 'svelte';

const app = mount(App, {
  target: document.body,
  props: {},
});

export default app;
