import * as client from 'svelte/internal/client';

// Re-export all named exports from Svelte 5 internal client
export * from 'svelte/internal/client';

// Provide a default export object for code that does `import internal from 'svelte/internal'`
export default client;

// Explicit named shims for legacy code that expects specific exports that may not be
// surfaced as named exports by the client module type mapping.
// If they exist on the client namespace, expose them as named exports.
// (Avoids runtime import errors like "does not provide an export named 'get_current_component'")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ns: any = client as any;
export const get_current_component = ns.get_current_component;



