import { describe, expect, it, vi } from 'vitest';
import { createRouter } from './router-core.svelte';

const A = (() => {}) as any;
const B = (() => {}) as any;
const C = (() => {}) as any;

describe('Router', () => {
  it('starts on the initial route with the given params', () => {
    const router = createRouter([{ name: 'a', component: A }], 'a', { foo: 1 });

    expect(router.current.name).toBe('a');
    expect(router.current.params).toEqual({ foo: 1 });
    expect(router.component).toBe(A);
    expect(router.canGoBack).toBe(false);
  });

  it('navigate() pushes a new entry and enables back()', async () => {
    const router = createRouter(
      [
        { name: 'a', component: A },
        { name: 'b', component: B },
      ],
      'a',
    );

    await router.navigate('b', { id: 42 });

    expect(router.current.name).toBe('b');
    expect(router.current.params).toEqual({ id: 42 });
    expect(router.canGoBack).toBe(true);

    router.back();

    expect(router.current.name).toBe('a');
    expect(router.canGoBack).toBe(false);
  });

  it('replace() swaps the top entry without growing history', async () => {
    const router = createRouter(
      [
        { name: 'a', component: A },
        { name: 'b', component: B },
        { name: 'c', component: C },
      ],
      'a',
    );

    await router.navigate('b');
    await router.replace('c');

    expect(router.current.name).toBe('c');
    expect(router.stack.length).toBe(2);

    router.back();
    expect(router.current.name).toBe('a');
  });

  it('warns and no-ops on navigation to an unknown route', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const router = createRouter([{ name: 'a', component: A }], 'a');

    await router.navigate('missing' as any);

    expect(router.current.name).toBe('a');
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  it('blocks navigation when a guard returns false', async () => {
    const router = createRouter(
      [
        { name: 'a', component: A },
        { name: 'b', component: B, guard: () => false },
      ],
      'a',
    );

    await router.navigate('b');

    expect(router.current.name).toBe('a');
  });

  it('redirects when a guard returns another route name', async () => {
    const router = createRouter(
      [
        { name: 'a', component: A },
        { name: 'b', component: B, guard: () => 'c' as any },
        { name: 'c', component: C },
      ],
      'a',
    );

    await router.navigate('b');

    expect(router.current.name).toBe('c');
  });

  it('reset() collapses the stack back to a single root route', async () => {
    const router = createRouter(
      [
        { name: 'a', component: A },
        { name: 'b', component: B },
      ],
      'a',
    );

    await router.navigate('b');
    router.reset('a');

    expect(router.current.name).toBe('a');
    expect(router.canGoBack).toBe(false);
  });

  it('restores state from a persistence adapter on creation and saves on navigation', async () => {
    const saved: any[] = [];
    const persist = {
      load: () => ({ name: 'b' as const, params: { id: 7 } }),
      save: (entry: any) => saved.push(entry),
    };

    const router = createRouter(
      [
        { name: 'a', component: A },
        { name: 'b', component: B },
      ],
      'a',
      {},
      { persist },
    );

    expect(router.current.name).toBe('b');
    expect(router.current.params).toEqual({ id: 7 });

    await router.navigate('a');
    expect(saved).toEqual([{ name: 'a', params: {} }]);
  });
});
