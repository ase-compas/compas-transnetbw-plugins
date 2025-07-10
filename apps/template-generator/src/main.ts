import App from './App.svelte';
import '../public/global.css';
import '../public/material-icon.css';
import '../public/smui.css';


const app = new App({
  target: document.body,
  props: {
    name: 'template-generator',
  },
});

export default app;
