/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/engineering-wizard',

    server: {
      port: 4201,
      host: 'localhost',
      fs: {
        allow: ['..'],
      },
    },

    preview: {
      port: 4301,
      host: 'localhost'
    },

    plugins: [svelte(), nxViteTsPaths()],

    build: {
      outDir: '../../dist/apps/engineering-wizard',
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
        entry: 'src/plugin.ts',
        formats: ['es'],
        fileName: 'index',
      },
    },
  };
});
