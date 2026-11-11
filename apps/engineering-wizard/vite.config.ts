/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { failUnresolvedFontUrls } from '../../libs/theme/vite/fail-unresolved-font-urls';

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
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'production',
      ),
    },

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

    plugins: [
      svelte({ emitCss: false }),
      failUnresolvedFontUrls(),
      // Nx 19 otherwise copies package.json into the single-file build.
      { ...nxViteTsPaths(), writeBundle: undefined },
    ],

    resolve: {
      conditions: ['browser'],
    },

    test: {
      server: {
        deps: {
          inline: [/@smui\//, /@smui-extra\//, /@testing-library\//],
        },
      },
    },

    build: {
      outDir: '../../dist/apps/engineering-wizard',
      emptyOutDir: true,
      copyPublicDir: false,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          entryFileNames: 'index.js',
          inlineDynamicImports: true,
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
