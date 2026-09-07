import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../../node_modules/.vite/libs/api/compas/validation-library',

  plugins: [nxViteTsPaths()],

  test: {
    globals: true,
    cache: { dir: '../../../../node_modules/.vitest' },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../../../coverage/libs/api/compas/validation-library',
      provider: 'v8',
    },
  },
});
