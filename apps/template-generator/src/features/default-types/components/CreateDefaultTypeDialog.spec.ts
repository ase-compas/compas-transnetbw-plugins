import { cleanup, fireEvent, render } from '@testing-library/svelte';
import { afterEach, expect, it } from 'vitest';
import CreateDefaultTypeDialog from './CreateDefaultTypeDialog.svelte';

afterEach(cleanup);

it('can destroy the dialog with a selected type without reading a destroyed list item', async () => {
  const { getByRole, container, unmount } = render(CreateDefaultTypeDialog);

  await fireEvent(
    getByRole('option', { name: 'DOType', hidden: true }),
    new CustomEvent('SMUIListAction', { bubbles: true, detail: { index: 1 } }),
  );

  expect(
    container.querySelector('.mdc-select__selected-text')?.textContent,
  ).toBe('DOType');
  await unmount();
});
