// @vitest-environment jsdom

import { cleanup, fireEvent, render, waitFor } from '@testing-library/svelte';
import { afterEach, expect, it, vi } from 'vitest';
import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

vi.mock('@oscd-transnet-plugins/oscd-services/dialog', () => ({
  closeDialog: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

it('preserves long confirmation text in tooltips and keeps deletion available', async () => {
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe = vi.fn();
      disconnect = vi.fn();
    },
  );
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 100, 30),
  );
  const title = `Delete ${'Process'.repeat(100)}`;
  const message = `Are you sure you want to delete "${'Name'.repeat(200)}"? This action cannot be undone.`;
  const { getByTitle, getByRole } = render(OscdConfirmDialog, {
    open: true,
    title,
    message,
    confirmActionText: 'Delete',
    confirmActionColor: 'danger',
  });

  expect(getByTitle(title).textContent).toBe(title);
  expect(getByTitle(message).textContent?.trim()).toBe(message);
  await fireEvent.click(getByRole('button', { name: 'Delete', hidden: true }));
  await waitFor(() => expect(closeDialog).toHaveBeenCalledWith('confirm'));
});
