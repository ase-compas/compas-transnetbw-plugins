/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// Kept separate from vite.config.ts: that one is an async factory (for the
// dynamic svelte plugin import), which vitest cannot load as a test config.
export default defineConfig({
  root: __dirname,

  plugins: [nxViteTsPaths()],

  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/engineering-wizard',
      provider: 'v8',
    },
  },
});
