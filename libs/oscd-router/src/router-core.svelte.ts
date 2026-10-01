import type { Component } from 'svelte';

/**
 * A single route definition: maps a route `name` to the Svelte component
 * that should be rendered when that route is active.
 *
 * `name` is intentionally a plain string discriminator (not a URL path) —
 * these plugins run embedded inside the OSCD/compas host as custom elements,
 * so there is no real browser address bar to route against. The router below
 * gives you route *semantics* (navigate/back/replace, params, history stack,
 * guards, deep-link persistence) without touching `window.location`.
 *
 * Convention: `RouterOutlet` always injects a canonical `onExit` prop into
 * every routed component (`() => router.back()`). A view that wants a "go
 * back" affordance should declare `onExit: () => void` in its own props and
 * call it — it never needs to be wired up by the parent that owns the
 * router. Anything more specific than "go back" (e.g. `handleEdit(process)`)
 * is a genuine app/business action and should stay as an explicit prop
 * passed via `RouterOutlet`'s `props` bag.
 */
export interface RouteDefinition<RouteName extends string = string, Params = any> {
  name: RouteName;
  component: Component<Params>;
  /**
   * Optional guard evaluated before navigating *to* this route.
   * Return `false` (or a redirect route name) to block/redirect the navigation.
   */
  guard?: (params: Params) => boolean | RouteName | Promise<boolean | RouteName>;
}

export interface RouteEntry<RouteName extends string = string> {
  name: RouteName;
  params: Record<string, unknown>;
}

/**
 * Pluggable persistence so a plugin can remember "where the user was" across
 * remounts/reloads — e.g. engineering-wizard already does this by writing
 * `{processId, lastPluginId}` into the SCL document itself. Implement this
 * interface once per storage strategy (document custom state, sessionStorage,
 * localStorage, ...) and pass it to `createRouter`.
 */
export interface RouteStateAdapter<RouteName extends string = string> {
  load(): RouteEntry<RouteName> | null;
  save(entry: RouteEntry<RouteName>): void;
}

export interface RouterOptions<RouteName extends string = string> {
  persist?: RouteStateAdapter<RouteName>;
}

/**
 * A small, framework-native (Svelte 5 runes) router with an in-memory
 * navigation stack. Use one instance per "screen area" of a plugin —
 * nest routers for wizards-within-wizards (e.g. engineering-wizard's
 * top-level app router vs. its workflow-step router).
 *
 * ```ts
 * const router = createRouter([
 *   { name: 'list', component: ProcessesListView },
 *   { name: 'add', component: AddProcessView },
 *   { name: 'edit', component: ProcessEditView, guard: () => !!selectedEngineeringProcess.process },
 *   { name: 'rules', component: ValidationRulesListView },
 * ], 'list');
 *
 * router.navigate('edit', { process });
 * router.back();
 * ```
 */
export class Router<RouteName extends string = string> {
  #routes: Map<RouteName, RouteDefinition<RouteName>>;
  #persist?: RouteStateAdapter<RouteName>;

  #stack = $state<RouteEntry<RouteName>[]>([]);

  constructor(
    routes: RouteDefinition<RouteName>[],
    initial: RouteName,
    initialParams: Record<string, unknown> = {},
    options: RouterOptions<RouteName> = {},
  ) {
    this.#routes = new Map(routes.map((r) => [r.name, r]));
    this.#persist = options.persist;

    const restored = this.#persist?.load();
    const startEntry =
      restored && this.#routes.has(restored.name) ? restored : { name: initial, params: initialParams };

    this.#stack = [startEntry];
  }

  /** The active route entry (name + params). */
  get current(): RouteEntry<RouteName> {
    return this.#stack[this.#stack.length - 1];
  }

  /** The Svelte component for the active route, or `undefined` if unknown. */
  get component(): Component | undefined {
    return this.#routes.get(this.current.name)?.component;
  }

  /** Whether `back()` has anywhere to go. */
  get canGoBack(): boolean {
    return this.#stack.length > 1;
  }

  /** Read-only snapshot of the navigation stack (for breadcrumbs, debugging, etc.). */
  get stack(): readonly RouteEntry<RouteName>[] {
    return this.#stack;
  }

  /** Push a new route onto the stack. */
  async navigate(name: RouteName, params: Record<string, unknown> = {}): Promise<void> {
    const resolved = await this.#applyGuard(name, params);
    if (!resolved) return;
    this.#stack = [...this.#stack, resolved];
    this.#persist?.save(resolved);
  }

  /** Replace the current top of the stack without growing history. */
  async replace(name: RouteName, params: Record<string, unknown> = {}): Promise<void> {
    const resolved = await this.#applyGuard(name, params);
    if (!resolved) return;
    this.#stack = [...this.#stack.slice(0, -1), resolved];
    this.#persist?.save(resolved);
  }

  /** Pop the stack, returning to the previous route. No-op if already at the root. */
  back(): void {
    if (!this.canGoBack) return;
    this.#stack = this.#stack.slice(0, -1);
    this.#persist?.save(this.current);
  }

  /** Reset the stack back to a single root route. */
  reset(name: RouteName, params: Record<string, unknown> = {}): void {
    this.#stack = [{ name, params }];
    this.#persist?.save(this.current);
  }

  async #applyGuard(
    name: RouteName,
    params: Record<string, unknown>,
  ): Promise<RouteEntry<RouteName> | null> {
    const route = this.#routes.get(name);
    if (!route) {
      console.warn(`[oscd-router] Unknown route "${name}"`);
      return null;
    }

    if (!route.guard) return { name, params };

    const result = await route.guard(params);
    if (result === true) return { name, params };
    if (result === false) return null;
    // guard returned a redirect route name
    return this.#applyGuard(result, params);
  }
}

export function createRouter<RouteName extends string = string>(
  routes: RouteDefinition<RouteName>[],
  initial: RouteName,
  initialParams: Record<string, unknown> = {},
  options: RouterOptions<RouteName> = {},
): Router<RouteName> {
  return new Router(routes, initial, initialParams, options);
}
