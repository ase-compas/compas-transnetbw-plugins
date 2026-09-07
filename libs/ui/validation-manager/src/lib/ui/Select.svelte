<script lang="ts">
  /**
   * Minimal outlined select. Replaces `@smui/select` inside the library for
   * the same reasons as `TextField.svelte` (no SMUI = no shadow-DOM theming
   * friction, no `bare.css` requirement, ~600 KB less shipped CSS).
   *
   * Uses a native <select> under the hood: much smaller, keyboard-accessible
   * for free, and rendered by the browser at the same visual weight as the
   * TextField wrapper next to it. Custom rendering of Option contents (icons,
   * chips, etc.) is intentionally not supported — the library only ever puts
   * plain text in options.
   */
  interface Option<T> {
    value: T;
    label: string;
  }

  interface Props<T> {
    value: T;
    label: string;
    options: readonly Option<T>[];
    invalid?: boolean;
    disabled?: boolean;
    /** Extra CSS class on the wrapper; used by callers for width overrides. */
    class?: string;
  }

  let {
    value = $bindable(),
    label,
    options,
    invalid = false,
    disabled = false,
    class: className = '',
  }: Props<any> = $props();

  let focused = $state(false);
  const floating = $derived(
    focused || (value !== undefined && value !== null && value !== ''),
  );
</script>

<label
  class="vlm-sel {className}"
  class:vlm-sel--invalid={invalid}
  class:vlm-sel--disabled={disabled}
  class:vlm-sel--floating={floating}
  class:vlm-sel--focused={focused}
>
  <span class="vlm-sel__label">{label}</span>
  <select
    class="vlm-sel__control"
    bind:value
    {disabled}
    aria-label={label}
    aria-invalid={invalid}
    onfocus={() => (focused = true)}
    onblur={() => (focused = false)}
  >
    {#each options as opt (String(opt.value))}
      <option value={opt.value}>{opt.label}</option>
    {/each}
  </select>
  <svg class="vlm-sel__chevron" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</label>

<style>
  .vlm-sel {
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 1rem;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }

  .vlm-sel__label {
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

  .vlm-sel--floating .vlm-sel__label {
    top: 0;
    transform: translateY(-50%);
    font-size: 0.75rem;
    color: var(--primary-base, #37474f);
  }

  .vlm-sel--focused .vlm-sel__label,
  .vlm-sel--invalid:not(.vlm-sel--disabled) .vlm-sel__label {
    color: var(--primary-base, #37474f);
  }

  .vlm-sel__control {
    /* Zero out the browser default styling so this matches the TextField
     * wrapper visually. `appearance: none` is well-supported now; the
     * chevron below replaces the native dropdown arrow. */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;
    width: 100%;
    padding: 0.9rem 2.25rem 0.6rem 0.75rem;
    font: inherit;
    font-family: inherit;
    font-size: 0.9375rem;
    color: var(--base03, #263238);
    background: var(--white, #ffffff);
    border: 1px solid #b0bec5;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    cursor: pointer;
  }

  .vlm-sel__control:hover:not(:disabled) {
    border-color: #78909c;
  }

  .vlm-sel__control:focus {
    border-color: var(--primary-base, #37474f);
    box-shadow: 0 0 0 1px var(--primary-base, #37474f);
  }

  .vlm-sel--invalid .vlm-sel__control {
    border-color: var(--primary-base, #37474f);
  }

  .vlm-sel__control:disabled {
    background: #f5f7f8;
    color: #90a4ae;
    cursor: not-allowed;
  }

  .vlm-sel__chevron {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: var(--base01, #607d8b);
    pointer-events: none;
  }
</style>
