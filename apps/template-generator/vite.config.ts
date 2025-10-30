/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { resolve as pathResolve } from 'node:path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  return {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/template-generator',

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

  plugins: [
    svelte({
      compilerOptions: { runes: false },
      prebundleSvelteLibraries: false
    }),
    nxViteTsPaths()
  ],

  resolve: {
    alias: [
      {
        find: /(^|\/)svelte\/internal$/,
        replacement: pathResolve(__dirname, '../../libs/shared/src/shims/svelte-internal.ts')
      }
    ]
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/template-generator',
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

  // Vite 5.1+: optimizeDeps.disabled removed. Disable discovery explicitly if needed.
  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/template-generator',
      provider: 'v8',
    },
  },
  };
});
