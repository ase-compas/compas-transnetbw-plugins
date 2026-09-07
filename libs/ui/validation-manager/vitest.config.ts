/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// Kept separate from vite.config.ts: that one is an async factory (for the
// dynamic svelte plugin import), which vitest cannot load as a test config -
// without the plugin, .svelte imports are left uncompiled and calling
// `$state()` etc. at runtime blows up with "rune_outside_svelte".
export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/ui/validation-manager',

  // svelteTesting() makes Vite resolve Svelte's browser/client runtime
  // instead of the SSR build under Vitest, and cleans up the DOM between
  // tests - without it vite-plugin-svelte compiles components with
  // `generate: 'server'`, which don't work with @testing-library/svelte.
  plugins: [svelte(), svelteTesting(), nxViteTsPaths()],

  // SMUI ships uncompiled .svelte sources. Vitest externalises node_modules by
  // default, which hands those files to Node's ESM loader instead of the
  // Svelte plugin; noExternal forces them through Vite's transform pipeline.
  ssr: { noExternal: [/@smui\//, /svelte-material-ui/] },

  test: {
    globals: true,
    cache: { dir: '../../../node_modules/.vitest' },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts}'],
    setupFiles: ['./vitest.setup.ts'],
    reporters: ['default'],
    // SMUI ships uncompiled .svelte sources, so Vitest must run them through
    // the Svelte plugin instead of letting Node load them as externals.
    server: { deps: { inline: [/@smui\//, /svelte-material-ui/] } },
    coverage: {
      reportsDirectory: '../../../coverage/libs/ui/validation-manager',
      provider: 'v8',
    },
  },
});
