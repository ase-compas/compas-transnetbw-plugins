/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

const devPort = Number(process.env.TSLD_DEV_PORT ?? 5173);
const previewPort = Number(process.env.TSLD_PREVIEW_PORT ?? 4300);

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/tsld',

  server: {
    port: devPort,
    host: 'localhost',
  },

  preview: {
    port: previewPort,
    host: 'localhost',
  },

  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      outDir: '../../dist/apps/tsld',
    }),
  ],

  build: {
    outDir: '../../dist/apps/tsld',
    emptyOutDir: true,
    reportCompressedSize: false,
    lib: {
      entry: path.resolve(__dirname, 'src/OscdTsldEditor.ts'), // use your actual entry file
      name: 'OscdTsldEditor',
      fileName: () => 'index.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
