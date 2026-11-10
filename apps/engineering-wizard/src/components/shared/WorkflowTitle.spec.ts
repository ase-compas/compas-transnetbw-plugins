// @vitest-environment jsdom

import { cleanup, fireEvent, render } from '@testing-library/svelte';
import { tick } from 'svelte';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import WorkflowTitle from './WorkflowTitle.svelte';

let updateSize: () => void;
const disconnect = vi.fn();

beforeEach(() => {
  vi.stubGlobal(
    'ResizeObserver',
    class {
      constructor(callback: () => void) {
        updateSize = callback;
      }
      observe = vi.fn();
      disconnect = disconnect;
    },
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

it('shows the process name beside the wizard title and preserves the exit action', async () => {
  const onClick = vi.fn();
  const { getByRole, rerender } = render(WorkflowTitle, {
    processName: 'Substation engineering',
    onClick,
  });

  await fireEvent.click(
    getByRole('button', {
      name: 'Engineering Wizard / Substation engineering',
    }),
  );
  expect(onClick).toHaveBeenCalledOnce();

  await rerender({ processName: 'Bay engineering' });
  expect(
    getByRole('button', { name: 'Engineering Wizard / Bay engineering' }),
  ).toBeTruthy();
});

it.each([undefined, ''])(
  'keeps the plain wizard title when the process name is %s',
  (processName) => {
    const { getByRole } = render(WorkflowTitle, { processName });

    expect(getByRole('button', { name: 'Engineering Wizard' })).toBeTruthy();
  },
);

it('shows only the process name when space is limited and restores the full title when it fits', async () => {
  const { getByRole, container, unmount } = render(WorkflowTitle, {
    processName: 'Substation engineering',
  });
  const button = getByRole('button');
  const fullTitle = container.querySelector('.full-title');
  let availableWidth = 180;
  Object.defineProperty(button, 'clientWidth', {
    get: () => availableWidth,
  });
  Object.defineProperty(fullTitle, 'offsetWidth', { value: 350 });

  updateSize();
  await tick();
  expect(getByRole('button', { name: 'Substation engineering' })).toBeTruthy();

  updateSize();
  await tick();
  expect(getByRole('button', { name: 'Substation engineering' })).toBeTruthy();

  availableWidth = 350;
  updateSize();
  await tick();
  expect(
    getByRole('button', {
      name: 'Engineering Wizard / Substation engineering',
    }),
  ).toBeTruthy();

  unmount();
  expect(disconnect).toHaveBeenCalledOnce();
});
