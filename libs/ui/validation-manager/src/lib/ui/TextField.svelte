<script lang="ts">
  /**
   * Minimal outlined text field / textarea. Replaces `@smui/textfield` inside
   * the validation-manager library so the library no longer drags SMUI's ~600 KB
   * theme into every consumer, and so its look no longer depends on which
   * `--mdc-theme-*` tokens the host happens to have declared (see the SCL
   * Quality Guard shadow-DOM debugging for the full story).
   *
   * Feature parity used by the library:
   *  - outlined variant with a floating label
   *  - single-line and multiline (`textarea`) modes
   *  - `invalid` visual + optional `helper` slot
   *  - two-way binding via $bindable()
   *  - `type="number"` for element-count fields
   *
   * Colours come from the theme contract in `../theme.css` (`--primary-base`,
   * `--white`, `--base01`), so hosts rebrand with a single CSS variable.
   */
  import type { Snippet } from 'svelte';

  interface Props {
    value: string | number;
    label: string;
    placeholder?: string;
    /** Marks the field as invalid; also flips the helper slot to error-red styling. */
    invalid?: boolean;
    /** Renders <textarea> instead of <input>. */
    textarea?: boolean;
    /** Rows for the textarea. */
    rows?: number;
    /** `type` for the native <input>. */
    type?: 'text' | 'number';
    /** Additional CSS class on the wrapper — needed for width overrides. */
    class?: string;
    disabled?: boolean;
    ariaLabel?: string;
    helper?: Snippet;
  }

  let {
    value = $bindable(''),
    label,
    placeholder = '',
    invalid = false,
    textarea = false,
    rows = 3,
    type = 'text',
    class: className = '',
    disabled = false,
    ariaLabel,
    helper,
  }: Props = $props();

  let focused = $state(false);

  // The label floats when the field is focused or non-empty. Wrapping in a
  // derived rather than reading `value` inline in the template keeps the
  // dependency legible for future maintainers.
  const floating = $derived(focused || value !== '' && value !== null && value !== undefined);
</script>

<label class="vlm-tf {className}" class:vlm-tf--invalid={invalid} class:vlm-tf--disabled={disabled} class:vlm-tf--floating={floating} class:vlm-tf--focused={focused}>
  <span class="vlm-tf__label">{label}</span>
  {#if textarea}
    <textarea
      class="vlm-tf__control vlm-tf__control--textarea"
      bind:value
      {placeholder}
      {rows}
      {disabled}
      aria-label={ariaLabel ?? label}
      aria-invalid={invalid}
      onfocus={() => (focused = true)}
      onblur={() => (focused = false)}
    ></textarea>
  {:else}
    <input
      class="vlm-tf__control"
      {type}
      bind:value
      {placeholder}
      {disabled}
      aria-label={ariaLabel ?? label}
      aria-invalid={invalid}
      onfocus={() => (focused = true)}
      onblur={() => (focused = false)}
    />
  {/if}
</label>
{#if helper}
  <div class="vlm-tf__helper" class:vlm-tf__helper--invalid={invalid}>
    {@render helper()}
  </div>
{/if}

<style>
  .vlm-tf {
    /* Wrapper is the click-target *and* the floating-label positioning
     * context. Kept as a <label> so hitting the border focuses the input
     * without additional JavaScript. */
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 1rem;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }

  .vlm-tf__label {
    /* Sits inside the outlined box; slides up on focus / non-empty. All
     * animatable transforms are on a single element so the label movement
     * stays cheap. */
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 0.25rem;
    color: var(--base01, #607d8b);
    background: var(--white, #ffffff);
    font-size: 1rem;
    line-height: 1;
    pointer-events: none;
    transition: transform 0.15s ease, font-size 0.15s ease, color 0.15s ease;
  }

  .vlm-tf--floating .vlm-tf__label {
    /* Move the label into the border notch. `top: 0` + translateY(-50%) puts
     * the mid-line of the shrunken label on top of the top border. */
    top: 0;
    transform: translateY(-50%);
    font-size: 0.75rem;
    color: var(--primary-base, #37474f);
  }

  .vlm-tf--focused .vlm-tf__label {
    color: var(--primary-base, #37474f);
  }

  .vlm-tf--invalid:not(.vlm-tf--disabled) .vlm-tf__label {
    /* Explicitly not switching to red - the whole library uses the primary
     * colour for invalid inputs (matches the Engineering Wizard behaviour). */
    color: var(--primary-base, #37474f);
  }

  .vlm-tf__control {
    box-sizing: border-box;
    width: 100%;
    padding: 0.9rem 0.75rem 0.6rem;
    font: inherit;
    font-family: inherit;
    font-size: 0.9375rem;
    color: var(--base03, #263238);
    background: var(--white, #ffffff);
    border: 1px solid #b0bec5;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .vlm-tf__control--textarea {
    padding-top: 1.1rem;
    line-height: 1.4;
    resize: vertical;
    min-height: 5rem;
  }

  .vlm-tf__control:hover:not(:disabled) {
    border-color: #78909c;
  }

  .vlm-tf__control:focus {
    border-color: var(--primary-base, #37474f);
    box-shadow: 0 0 0 1px var(--primary-base, #37474f);
  }

  .vlm-tf--invalid .vlm-tf__control {
    border-color: var(--primary-base, #37474f);
  }

  .vlm-tf__control:disabled {
    background: #f5f7f8;
    color: #90a4ae;
    cursor: not-allowed;
  }

  .vlm-tf__helper {
    font-size: 0.75rem;
    line-height: 1.2;
    margin: -0.75rem 0 1rem 0.75rem;
    color: var(--base01, #607d8b);
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }

  .vlm-tf__helper--invalid {
    color: var(--primary-base, #37474f);
  }
</style>
