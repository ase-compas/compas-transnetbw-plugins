import { type EditDetailV2, type EditEventOptionsV2, type EditV2 } from './types';

/**
 * Creates a new 'oscd-edit-v2' CustomEvent with given edits.
 */
export function newEditEventV2<E extends EditV2>(
  edit: E,
  options?: EditEventOptionsV2
): CustomEvent<EditDetailV2<E>> {
  return new CustomEvent<EditDetailV2<E>>('oscd-edit-v2', {
    composed: true,
    bubbles: true,
    detail: { ...options, edit },
  });
}

/**
 * Dispatches the 'oscd-edit-v2' event on the given host element.
 */
export function dispatchEditEvent<E extends EditV2>(
  host: HTMLElement,
  edits: E[]
): boolean {
  if (!host) {
    console.warn('Host element is undefined, cannot dispatch event');
    return false;
  }
  const event = newEditEventV2(edits);
  return host.dispatchEvent(event);
}

/**
 * Create and dispatch an 'oscd-edit-v2' event with a single edit.
 * @param host
 * @param edit
 * @param options
 */
export function createAndDispatchEditEvent<E extends EditV2>(
  host: HTMLElement,
  edit: E,
  options?: EditEventOptionsV2
): boolean {
  if (!host) {
    console.warn('Host element is undefined, cannot dispatch event');
    return false;
  }
  const event = newEditEventV2(edit, options);
  return host.dispatchEvent(event);
}
