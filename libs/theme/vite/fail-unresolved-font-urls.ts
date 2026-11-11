import type { Plugin } from 'vite';

/** Bare or relative @fontsource urls that Vite did not inline. */
const UNRESOLVED_FONTSOURCE_URL =
  /url\(\s*['"]?[^)'"]*@fontsource\/[^)'"]+/;

/**
 * Fail the lib build when an Inter face is still a file URL.
 * OpenSCD loads only index.js, so a leftover @fontsource path 404s on the host.
 */
export function failUnresolvedFontUrls(): Plugin {
  return {
    name: 'fail-unresolved-font-urls',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      for (const [fileName, item] of Object.entries(bundle)) {
        if (item.type !== 'chunk' && !fileName.endsWith('.css')) continue;
        const code =
          item.type === 'chunk'
            ? item.code
            : typeof item.source === 'string'
              ? item.source
              : new TextDecoder().decode(item.source);
        if (UNRESOLVED_FONTSOURCE_URL.test(code)) {
          this.error(
            `${fileName} still contains an unresolved @fontsource url. The font file was not embedded.`,
          );
        }
      }
    },
  };
}
