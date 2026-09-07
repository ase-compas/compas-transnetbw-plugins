<script lang="ts">
  /**
   * Minimal button primitive with three visual variants — enough to cover
   * every button the rule editor renders (Back, Next, Done, "Run Validation"
   * on the test page). Replaces `@smui/button` inside the library.
   *
   * All colours flow from CSS custom properties on the *button element*, so
   * `WorkflowActions` can still tint each button per-slot by passing an
   * inline `style="--vlm-btn-bg: …; --vlm-btn-fg: …"` prop just like it did
   * with SMUI's `--mdc-theme-primary` trick.
   */
  import type { Snippet } from 'svelte';

  type Variant = 'unelevated' | 'outlined' | 'text';

  interface Props {
    variant?: Variant;
    disabled?: boolean;
    /** Accessible label; also propagated to `aria-label`. */
    ariaLabel?: string;
    /** Inline style forwarded to the underlying <button>. Callers use this
     * to override `--vlm-btn-bg` / `--vlm-btn-fg` / `--vlm-btn-border` per
     * usage (see WorkflowActions.svelte). */
    style?: string;
    /** Additional CSS classes. */
    class?: string;
    /** Extra `type` attribute; defaults to "button" so it never accidentally
     * submits a wrapping <form>. */
    type?: 'button' | 'submit' | 'reset';
    onclick?: (e: MouseEvent) => void;
    children?: Snippet;
  }

  let {
    variant = 'unelevated',
    disabled = false,
    ariaLabel,
    style = '',
    class: className = '',
    type = 'button',
    onclick,
    children,
  }: Props = $props();
</script>

<button
  class="vlm-btn vlm-btn--{variant} {className}"
  {type}
  {disabled}
  aria-label={ariaLabel}
  {style}
  onclick={(e) => onclick?.(e)}
>
  {@render children?.()}
</button>

<style>
  .vlm-btn {
    /* Colour tokens are consumed as `var(--vlm-btn-*, <fallback>)` so a
     * caller can override any of them per-button via inline style. */
    --_bg: var(--vlm-btn-bg, var(--primary-base, #37474f));
    --_fg: var(--vlm-btn-fg, var(--white, #ffffff));
    /* Lighter than the primary colour on purpose: an outlined button's
     * border is a subtle affordance, not a second accent colour - a border
     * as dark as the text/icon reads as heavier emphasis than the action
     * deserves. Still overridable per-button via --vlm-btn-border. */
    --_border: var(--vlm-btn-border, var(--base1, #b0bec5));

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-sizing: border-box;
    min-height: 36px;
    padding: 0 1rem;
    font: inherit;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
    /* Remove default browser focus outline; a custom one is drawn below so
     * it can respect the button's variant colours. */
    outline: none;
    /* Reset the generic form-element `margin: 0 0 0.5em 0` that page-level
     * styles like SCL Quality Guard's global.css add to all <button>s. */
    margin: 0;
  }

  .vlm-btn--unelevated {
    background: var(--_bg);
    color: var(--_fg);
    border: 1px solid var(--_bg);
  }

  .vlm-btn--outlined {
    /* Unlike --unelevated, these two variants have a transparent
     * background, so `--_fg`'s white-on-dark default (meant for the
     * unelevated bg) would render invisible white-on-white text here.
     * Default to the dark primary colour instead; callers that still want
     * a custom colour (e.g. WorkflowActions' Back/Next) simply set
     * --vlm-btn-fg, which continues to win either way. */
    background: transparent;
    color: var(--vlm-btn-fg, var(--primary-base, #37474f));
    border: 1px solid var(--_border);
  }

  .vlm-btn--text {
    background: transparent;
    color: var(--vlm-btn-fg, var(--primary-base, #37474f));
    border: 1px solid transparent;
    padding: 0 0.5rem;
  }

  .vlm-btn:hover:not(:disabled) {
    /* Subtle darken via color-mix keeps the accent tint but adds a hover
     * signal without needing separate --hover tokens. */
    filter: brightness(0.94);
  }

  .vlm-btn:focus-visible {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-base, #37474f) 25%, transparent);
  }

  .vlm-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
