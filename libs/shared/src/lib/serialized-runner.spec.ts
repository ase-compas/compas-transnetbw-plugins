import { describe, expect, it, vi } from 'vitest';
import { createSerializedRunner } from './serialized-runner';

function deferred<T = void>() {
  let resolve!: (v: T) => void;
  let reject!: (e: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

describe('createSerializedRunner', () => {
  it('runs the function when idle', async () => {
    const fn = vi.fn().mockResolvedValue(undefined);
    const trigger = createSerializedRunner(fn);
    await trigger();
    expect(fn).toHaveBeenCalledOnce();
  });

  it('queues one re-run when triggered during a run', async () => {
    const gate = deferred();
    const fn = vi
      .fn()
      // First call: waits until the gate is released.
      .mockImplementationOnce(async () => {
        await gate.promise;
      })
      // Second call: the queued re-run resolves immediately.
      .mockResolvedValue(undefined);

    const trigger = createSerializedRunner(fn);
    const first = trigger();
    // While the first call is in flight, three more triggers should
    // collapse into a single queued re-run.
    void trigger();
    void trigger();
    void trigger();
    gate.resolve();
    await first;
    // A microtask tick for the queued re-run to complete.
    await new Promise((r) => setTimeout(r, 0));
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('propagates errors from the in-flight call', async () => {
    const fn = vi.fn().mockRejectedValueOnce(new Error('boom'));
    const trigger = createSerializedRunner(fn);
    await expect(trigger()).rejects.toThrow('boom');
  });

  it('still runs the queued re-run after an error', async () => {
    const gate = deferred();
    const fn = vi
      .fn()
      .mockImplementationOnce(async () => {
        await gate.promise;
        throw new Error('boom');
      })
      .mockResolvedValue(undefined);

    const trigger = createSerializedRunner(fn);
    const first = trigger();
    void trigger();
    gate.resolve();
    await expect(first).rejects.toThrow('boom');
    await new Promise((r) => setTimeout(r, 0));
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
