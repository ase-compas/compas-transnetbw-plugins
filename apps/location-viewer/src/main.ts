import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'location-viewer',
  },
});

export default app;
