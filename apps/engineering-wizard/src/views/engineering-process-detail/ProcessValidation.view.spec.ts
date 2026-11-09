// @vitest-environment jsdom

import { cleanup, fireEvent, render } from '@testing-library/svelte';
import type { Plugin, XPathValidation } from '@oscd-transnet-plugins/shared';
import { afterEach, expect, it, vi } from 'vitest';
import ProcessValidation from './ProcessValidation.view.svelte';

afterEach(cleanup);

it.each(['short', 'long'])(
  'keeps full %s cell values in tooltips and edit callbacks',
  async (length) => {
    const repeat = length === 'long' ? 30 : 1;
    const entry: XPathValidation = {
      title: 'Check bay '.repeat(repeat).trim(),
      description: '',
      context: Array(repeat).fill('scl:Bay').join('//'),
      assert: Array(repeat).fill('@desc = "<Bay> & equipment"').join(' or '),
    };
    const selectedPlugin: Plugin = {
      id: 'validation',
      name: 'Validation',
      type: 'internal',
      validations: [entry],
    };
    const onEditEntry = vi.fn();
    const { getByTitle, getByRole } = render(ProcessValidation, {
      selectedPlugin,
      onEditEntry,
    });

    for (const value of [entry.title, entry.context, entry.assert]) {
      const cell = getByTitle(value);
      expect(cell.textContent).toBe(value);
      expect(cell.children).toHaveLength(0);
    }

    await fireEvent.click(getByRole('button', { name: 'Edit validation' }));
    expect(onEditEntry).toHaveBeenCalledWith(entry, 0);
  },
);
