/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default (defineConfig as any)(async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/type-distributor',

    server: {
      port: 4208,
      host: 'localhost',
      fs: {
        allow: ['..'],
      },
    },

    preview: {
      port: 4308,
      host: 'localhost',
    },

    plugins: [svelte(), nxViteTsPaths()],

    build: {
      outDir: '../../dist/apps/type-distributor',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          entryFileNames: 'index.js',
        },
      },
      lib: {
        entry: 'src/pluginwrapper.svelte.ts',
        formats: ['es'],
        fileName: 'index',
      },
    },
  };
});
