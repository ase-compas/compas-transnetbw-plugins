import App from './App.svelte';
import { mount } from "svelte";

const app = mount(App, {
  target: document.body,
  props: {
    name: 'location-manager',
  },
});

export default app;
