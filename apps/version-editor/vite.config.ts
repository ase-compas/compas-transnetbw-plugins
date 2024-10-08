/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/version-editor',

  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      allow: ['..']
    }
  },

  preview: {
    port: 4300,
    host: 'localhost'
  },

  plugins: [svelte(), nxViteTsPaths()],

  build: {
    outDir: '../../dist/apps/version-editor',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.js'
      }
    },
    lib: {
      entry: 'src/plugin.ts',
      formats: ['es'],
      fileName: 'index'
    }
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/version-editor',
      provider: 'v8'
    }
  }
});
