/// <reference types='vitest' />
import { defineConfig } from 'vite';
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

    plugins: [svelte(), nxViteTsPaths()],

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
        entry: 'src/plugin-wrapper.svelte.ts',
        formats: ['es'],
        fileName: 'index',
      },
    },

    optimizeDeps: {
      exclude: ['@smui/select'],
    },

    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'happy-dom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/apps/template-generator',
        provider: 'v8',
      },
    },
  };
});
