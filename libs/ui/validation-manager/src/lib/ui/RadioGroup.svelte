<script lang="ts">
  /**
   * Minimal horizontal radio group. Replaces `@smui/radio` + `@smui/form-field`
   * pairs inside the library. Uses native `<input type="radio">` for
   * keyboard and screen reader semantics; the visual swatch is layered on top
   * with pure CSS.
   */
  interface Option<T> {
    value: T;
    label: string;
  }

  interface Props<T> {
    value: T;
    options: readonly Option<T>[];
    /** Same `name` on every radio so the browser groups them. Defaults to a
     * fresh id per instance so multiple groups on the same page do not clash. */
    name?: string;
    disabled?: boolean;
  }

  const uid = `vlm-rg-${Math.random().toString(36).slice(2, 9)}`;
  let {
    value = $bindable(),
    options,
    name = uid,
    disabled = false,
  }: Props<any> = $props();
</script>

<div class="vlm-rg" role="radiogroup">
  {#each options as opt (String(opt.value))}
    <label class="vlm-rg__item" class:vlm-rg__item--checked={value === opt.value} class:vlm-rg__item--disabled={disabled}>
      <input
        class="vlm-rg__input"
        type="radio"
        {name}
        {disabled}
        value={opt.value}
        checked={value === opt.value}
        onchange={() => (value = opt.value)}
      />
      <span class="vlm-rg__swatch" aria-hidden="true">
        <span class="vlm-rg__dot"></span>
      </span>
      <span class="vlm-rg__label">{opt.label}</span>
    </label>
  {/each}
</div>

<style>
  .vlm-rg {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
  }

  .vlm-rg__item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    user-select: none;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: 0.9375rem;
    color: var(--base03, #263238);
  }

  .vlm-rg__item--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Hide the native radio; the swatch below is the visible control. Keeping
   * the input focusable via keyboard is critical for accessibility. */
  .vlm-rg__input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 0;
    height: 0;
  }

  .vlm-rg__swatch {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px solid var(--base01, #607d8b);
    border-radius: 50%;
    background: var(--white, #ffffff);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .vlm-rg__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary-base, #37474f);
    transform: scale(0);
    transition: transform 0.15s ease;
  }

  .vlm-rg__item--checked .vlm-rg__swatch {
    border-color: var(--primary-base, #37474f);
  }

  .vlm-rg__item--checked .vlm-rg__dot {
    transform: scale(1);
  }

  /* Focus ring on the visible swatch, driven by the invisible input. Selecting
   * the following-sibling swatch keeps the native focus behaviour intact. */
  .vlm-rg__input:focus-visible + .vlm-rg__swatch {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-base, #37474f) 25%, transparent);
  }
</style>
