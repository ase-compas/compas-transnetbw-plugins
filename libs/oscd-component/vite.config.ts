import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/libs/oscd-component',

    server: {
      port: 4200,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },
    plugins: [svelte(), nxViteTsPaths()],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
      outDir: '../../dist/libs/oscd-component',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    }
  };
});
