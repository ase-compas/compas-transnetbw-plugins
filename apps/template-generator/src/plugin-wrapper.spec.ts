import { afterEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { mount } from 'svelte';
import { installPluginFonts } from '@oscd-transnet-plugins/theme';
import TemplateGenerator from './plugin-wrapper.svelte';
// eslint-disable-next-line @nx/enforce-module-boundaries -- Exercise both plugin entry points together.
import EngineeringWizard from '../../engineering-wizard/src/plugin-wrapper.svelte';

vi.mock('svelte', async (importOriginal) => ({
  ...(await importOriginal<typeof import('svelte')>()),
  mount: vi.fn(),
}));
vi.mock('./plugin.svelte', () => ({ default: vi.fn() }));
vi.mock('../../engineering-wizard/src/plugin.svelte', () => ({
  default: vi.fn(),
}));
vi.mock(
  '../../engineering-wizard/src/features/processes/mutations.svelte',
  () => ({
    setInternalPlugins: vi.fn(),
  }),
);
vi.mock(
  '../../engineering-wizard/src/services/validationCoordinator.svelte',
  () => ({
    validationCoordinator: { retryFailed: vi.fn(), cancel: vi.fn() },
  }),
);

afterEach(() => {
  document.body.replaceChildren();
  document.getElementById('oscd-plugin-fonts')?.remove();
  vi.clearAllMocks();
});

describe.each([
  ['template-generator', TemplateGenerator],
  ['engineering-wizard', EngineeringWizard],
] as const)('%s self-contained wrapper', (name, Plugin) => {
  customElements.define(`test-${name}`, Plugin);

  it('mounts immediately with embedded shadow styles and no stylesheet request', () => {
    const plugin = new Plugin();
    const doc = document.implementation.createDocument(null, 'SCL');
    plugin.doc = doc;
    plugin.editCount = 3;

    document.body.appendChild(plugin);

    const root = plugin.shadowRoot!;
    expect(root.querySelector('link')).toBeNull();
    const styles = root.querySelector('style')?.textContent;
    expect(styles).toContain('.mdc-button');
    expect(styles).toContain('.material-icons');
    expect(styles).toContain('--oscd-plugin-text');
    const fonts = document.head.querySelector('#oscd-plugin-fonts');
    expect(fonts?.textContent).toContain('@font-face');
    expect(fonts?.textContent).toContain('Inter');
    expect(fonts?.textContent).toContain('Material Icons Outlined');
    expect(fonts?.textContent?.includes('.material-icons')).toBe(false);
    expect(mount).toHaveBeenCalledOnce();
    expect(mount).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        target: root,
        props: expect.objectContaining({ doc, editCount: 3, host: plugin }),
      }),
    );
  });

  it('replays doc assigned before the setters were visible', () => {
    const plugin = new Plugin();
    const doc = document.implementation.createDocument(null, 'SCL');
    Object.defineProperty(plugin, 'doc', {
      value: doc,
      writable: true,
      configurable: true,
      enumerable: true,
    });

    document.body.appendChild(plugin);

    expect(Object.hasOwn(plugin, 'doc')).toBe(false);
    expect(mount).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        target: plugin.shadowRoot,
        props: expect.objectContaining({ doc, editCount: -1, host: plugin }),
      }),
    );
  });

  it('does not duplicate styles or mount again when reconnected', () => {
    const plugin = new Plugin();
    document.body.appendChild(plugin);
    plugin.remove();
    document.body.appendChild(plugin);

    expect(plugin.shadowRoot?.querySelectorAll('style')).toHaveLength(1);
    expect(mount).toHaveBeenCalledOnce();
  });
});

it('shares font declarations between both plugins', () => {
  document.body.append(new TemplateGenerator(), new EngineeringWizard());

  expect(document.head.querySelectorAll('#oscd-plugin-fonts')).toHaveLength(1);
});

it('embeds Wizard-specific color declarations in the shadow root', () => {
  const plugin = new EngineeringWizard();
  document.body.appendChild(plugin);

  const styles = plugin.shadowRoot?.querySelector('style')?.textContent;
  expect(/--oscd-plugin-ew-primary-bg\s*:/.test(styles ?? '')).toBe(true);
  expect(/--oscd-plugin-ew-info-bg\s*:/.test(styles ?? '')).toBe(true);
});

it('embeds only WOFF2 while preserving all Inter weights and glyph ranges', () => {
  const require = createRequire(import.meta.url);
  const original = new CSSStyleSheet();
  original.replaceSync(
    [400, 500, 600, 700]
      .map((weight) =>
        readFileSync(
          require.resolve(`@fontsource/inter/${weight}.css`),
          'utf8',
        ),
      )
      .join('\n'),
  );
  const optimized = new CSSStyleSheet();
  installPluginFonts('');
  optimized.replaceSync(
    document.getElementById('oscd-plugin-fonts')?.textContent ?? '',
  );
  const descriptors = (sheet: CSSStyleSheet) =>
    Array.from(sheet.cssRules, (rule) => {
      const { style } = rule as CSSFontFaceRule;
      return [
        'font-family',
        'font-style',
        'font-display',
        'font-weight',
        'unicode-range',
      ].map((property) => style.getPropertyValue(property).replace(/\s/g, ''));
    });

  expect(descriptors(optimized)).toEqual(descriptors(original));
  for (const rule of optimized.cssRules) {
    const src = (rule as CSSFontFaceRule).style.getPropertyValue('src');
    expect(src.match(/url\(/g)).toHaveLength(1);
    expect(src).toMatch(/format\(['"]?woff2['"]?\)/);
  }
});
