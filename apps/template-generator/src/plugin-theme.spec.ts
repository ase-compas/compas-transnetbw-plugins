import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import OscdBaseDialog from '../../../libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
import OscdConfirmDialog from '../../../libs/oscd-component/src/oscd-dialog/OscdConfirmDialog.svelte';
import TCard from './features/type-details/components/tboard/TCard.svelte';
import PluginHost from '../../engineering-wizard/src/features/workflow/components/plugins/PluginHost.svelte';
import theme from '../../../libs/theme/src/lib/plugin-theme.css?inline';

vi.mock('../../engineering-wizard/src/features/workflow/external-elements', () => ({
  getPluginElementTag: () => 'test-host-plugin',
  ensureCustomElementDefined: vi.fn(async () => {}),
}));
vi.mock('../../engineering-wizard/src/features/workflow/plugin-load-status.svelte', () => ({
  getPluginLoadState: () => ({ status: 'loaded' }),
}));

beforeEach(() => vi.useFakeTimers());
afterEach(async () => {
  await vi.runOnlyPendingTimersAsync();
  await cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe('plugin color roles', () => {
  it('prefers resolved host colors and keeps standalone fallbacks', () => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(theme);
    const rule = sheet.cssRules[0] as CSSStyleRule;
    expect(rule.selectorText).toContain(':host');
    expect(rule.selectorText).toContain(':root');
    expect(rule.style.getPropertyValue('--oscd-plugin-action').trim())
      .toBe('var(--oscd-secondary, var(--oscd-theme-secondary, light-dark(#004552, #8ac6ce)))');
    expect(rule.style.getPropertyValue('--oscd-plugin-brand').trim())
      .toBe('var(--oscd-primary, var(--oscd-theme-primary, light-dark(#004552, #8ac6ce)))');
    expect(rule.style.getPropertyValue('--oscd-plugin-text').trim())
      .toBe('var(--oscd-base03, var(--oscd-theme-base03, light-dark(#002b36, #fdf6e3)))');
    expect(rule.style.getPropertyValue('--oscd-plugin-surface-muted').trim())
      .toBe('var(--oscd-base2, var(--oscd-theme-base2, light-dark(#eee8d5, #073642)))');
    expect(rule.style.getPropertyValue('--primary-base').trim())
      .toBe('var(--oscd-plugin-brand)');
    expect(rule.style.getPropertyValue('--mdc-theme-primary').trim())
      .toBe('var(--oscd-plugin-action)');
    expect(theme).not.toMatch(/--oscd-(?:internal-)?nav-/);
    expect(rule.style.getPropertyValue('--primary')).toBe('');
    expect(rule.style.getPropertyValue('--oscd-error')).toBe('');
  });

  it('uses the surface role for ink on action and brand fills', () => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(theme);
    const rule = sheet.cssRules[0] as CSSStyleRule;
    expect(rule.style.getPropertyValue('--oscd-plugin-on-action').trim())
      .toBe('var(--oscd-plugin-surface)');
    expect(rule.style.getPropertyValue('--oscd-plugin-on-brand').trim())
      .toBe('var(--oscd-plugin-surface)');
    expect(rule.style.getPropertyValue('--mdc-theme-on-primary').trim())
      .toBe('var(--oscd-plugin-on-action)');
  });

  it('keeps Material state layers component-local and provides visible keyboard focus', () => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(theme);
    const rule = sheet.cssRules[0] as CSSStyleRule;
    for (const variant of ['filled', 'protected']) {
      expect(rule.style.getPropertyValue(`--mdc-${variant}-button-hover-state-layer-color`).trim())
        .toBe('');
    }
    expect(rule.style.getPropertyValue('--mdc-text-button-hover-state-layer-color')).toBe('');
    expect(rule.style.getPropertyValue('--mdc-ripple-color')).toBe('');
    const focusRule = sheet.cssRules[1] as CSSStyleRule;
    expect(focusRule.selectorText).toBe('.mdc-button:focus-visible');
    expect(focusRule.style.getPropertyValue('outline-color')).toBe('var(--oscd-plugin-text)');
    expect(focusRule.style.getPropertyValue('outline-style')).toBe('solid');
    expect(focusRule.style.getPropertyValue('outline-width')).toBe('2px');
    expect(focusRule.style.getPropertyValue('outline-offset')).toBe('2px');
  });
});

describe('embedded plugin boundary', () => {
  it('keeps the external element in a separate palette boundary and forwards document props', () => {
    const doc = document.implementation.createDocument(null, 'SCL');
    const { container } = render(PluginHost, {
      props: {
        plugin: { id: 'external', name: 'External plugin', type: 'external', src: '/external.js' },
        doc,
        editCount: 3,
      },
    });
    const plugin = container.querySelector<HTMLElement & { doc: XMLDocument; editCount: number }>(
      '.external-plugin > test-host-plugin'
    );
    expect(plugin).not.toBeNull();
    expect(plugin?.doc).toBe(doc);
    expect(plugin?.editCount).toBe(3);
  });
});

describe('reference color separation', () => {
  it.each([
    { selected: false, ink: 'var(--oscd-plugin-brand)' },
    { selected: true, ink: 'var(--oscd-plugin-on-brand)' },
  ])('keeps existing-reference ink independent of action ink (selected: $selected)', ({ selected, ink }) => {
    const { container } = render(TCard, {
      props: {
        title: 'Referenced type',
        subtitle: 'Target type',
        referencable: true,
        selectionEnabled: true,
        showSelectionIndicator: false,
        selected,
      },
    });
    const button = container.querySelector<HTMLButtonElement>('button.has-reference');
    expect(button?.style.getPropertyValue('--oscd-reference-ink').trim()).toBe(ink);
  });
});

describe('dialog color separation', () => {
  it('accepts independent semantic roles for the header and confirmation', () => {
    const { container } = render(OscdBaseDialog, {
      props: {
        open: false,
        title: 'Create',
        headerColor: 'var(--oscd-plugin-brand)',
        confirmButtonColor: 'var(--oscd-plugin-action)',
      },
    });
    const body = container.innerHTML;
    expect(body).toContain('background-color: var(--oscd-plugin-brand);');
    expect(body).toContain('background-color: var(--oscd-plugin-action);');
  });

  it('allows independent header and confirmation overrides', () => {
    const { container } = render(OscdConfirmDialog, {
      props: { open: false, headerColor: '#123456', confirmButtonColor: '#abcdef' },
    });
    const body = container.innerHTML;
    expect(body).toContain('background-color: #123456;');
    expect(body).toContain('background-color: #abcdef;');
  });

  it('preserves the explicit legacy color prop for both regions', () => {
    const { container } = render(OscdBaseDialog, {
      props: { open: false, color: '#123456' },
    });
    const body = container.innerHTML;
    expect(body.match(/background-color: #123456;/g)).toHaveLength(2);
    expect(container.querySelector<HTMLElement>('.dialog__title')?.style.color).toBe('white');
    expect(container.querySelector<HTMLButtonElement>('button[data-mdc-dialog-action="confirm"]')?.style.color)
      .toBe('white');
  });

  it('keeps white ink for independent explicit colors, including the close icon', () => {
    const { container } = render(OscdConfirmDialog, {
      props: { open: false, headerColor: '#123456', confirmButtonColor: '#654321' },
    });
    expect(container.querySelector<HTMLElement>('.dialog__title')?.style.color).toBe('white');
    expect(container.querySelector<HTMLButtonElement>('button[data-mdc-dialog-action="confirm"]')?.style.color)
      .toBe('white');
    expect(container.querySelector('.dialog__title')?.innerHTML).toContain('fill: white');
  });

  it('lets independent overrides take precedence over the legacy color', () => {
    const { container } = render(OscdBaseDialog, {
      props: {
        open: false,
        color: '#123456',
        headerColor: '#abcdef',
        confirmButtonColor: '#fedcba',
      },
    });
    const body = container.innerHTML;
    expect(body).toContain('background-color: #abcdef;');
    expect(body).toContain('background-color: #fedcba;');
    expect(body).not.toContain('background-color: #123456;');
  });

  it('keeps destructive actions red without recoloring the header', () => {
    const { container } = render(OscdBaseDialog, {
      props: { open: false, headerColor: '#004552', confirmActionColor: 'danger' },
    });
    const body = container.innerHTML;
    expect(body).toContain('background-color: #004552;');
    expect(body).toContain('background-color: #FF203A; color: white;');
  });

  it('does not apply active action colors to disabled confirmations', () => {
    const { container } = render(OscdBaseDialog, {
      props: { open: false, confirmDisabled: true },
    });
    const body = container.innerHTML;
    expect(body).not.toContain('background-color: var(--oscd-plugin-action,');
  });
});
