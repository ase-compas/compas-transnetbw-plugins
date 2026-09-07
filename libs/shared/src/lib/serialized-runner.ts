/**
 * Serialises overlapping calls to an async function.
 *
 * If `trigger` is called while a previous call is running, one re-run is
 * queued and executes once the current call finishes. Further triggers
 * while a re-run is already queued collapse into it.
 *
 * Errors from the in-flight call propagate to that caller's promise.
 * Errors from queued re-runs have no caller and are swallowed - pass an
 * `fn` that handles its own errors.
 */
export function createSerializedRunner(
  fn: () => Promise<void>,
): () => Promise<void> {
  let running = false;
  let rerun = false;

  async function trigger(): Promise<void> {
    if (running) {
      rerun = true;
      return;
    }
    running = true;
    try {
      await fn();
    } finally {
      running = false;
      if (rerun) {
        rerun = false;
        void trigger().catch(() => {
          /* no caller to propagate to */
        });
      }
    }
  }

  return trigger;
}
