/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// Cast defineConfig to any so TS stops complaining about the async config function
export default (defineConfig as any)(async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  const backendProxy = {
    '/compas-scl-data-service': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      // No rewrite: backend expects the full /compas-scl-data-service/... path
    },
  };

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/engineering-wizard',

    server: {
      port: 4201,
      host: 'localhost',
      fs: {
        allow: ['..'],
      },
      proxy: backendProxy,
    },

    preview: {
      port: 4301,
      host: 'localhost',
      proxy: backendProxy,
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
        entry: 'src/plugin-wrapper.svelte.ts',
        formats: ['es'],
        fileName: 'index',
      },
    },
  };
});
