/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/version-editor',

    server: {
      port: 4200,
      host: 'localhost',
      fs: {
        allow: ['..']
      },
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [svelte(), nxViteTsPaths()],

    build: {
      outDir: '../../dist/apps/version-editor',
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
    optimizeDeps: {
      exclude: ['@smui/select'],
    }
  };
});
