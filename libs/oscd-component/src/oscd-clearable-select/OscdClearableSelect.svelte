<script lang="ts">
  import { tick } from 'svelte';
  import { OscdCloseIcon } from '@oscd-transnet-plugins/oscd-icons';

  let {
    options = [] as readonly string[],
    placeholder = 'Select option',
    clearable = true,
    value = $bindable<string | null>(null),
  } = $props<{
    options?: readonly string[];
    placeholder?: string;
    clearable?: boolean;
    value?: string | null;
  }>();

  const hasValue = $derived(value !== null);

  let box!: HTMLDivElement;
  let selectEl!: HTMLSelectElement;
  let probe!: HTMLSpanElement;

  const clear = () => (value = null);

  let selectValue = $state('');

  function handleChange(e: Event) {
    const target = e.currentTarget as HTMLSelectElement | null;
    const v = target?.value ?? '';
    value = v === '' ? null : v;
  }

  function px(v: string) {
    return Number.parseFloat(v) || 0;
  }

  function extraWidthFromSelect() {
    const cs = getComputedStyle(selectEl);

    const paddingLeft = px(cs.paddingLeft);
    const paddingRight = px(cs.paddingRight);
    const borderLeft = px(cs.borderLeftWidth);
    const borderRight = px(cs.borderRightWidth);

    const safety = 2;
    return paddingLeft + paddingRight + borderLeft + borderRight + safety;
  }

  async function syncWidth() {
    await tick();
    if (!box || !selectEl || !probe) return;

    if (!hasValue) {
      box.style.width = '100%';
      return;
    }

    probe.textContent = value ?? '';
    const textWidth = Math.ceil(probe.getBoundingClientRect().width);
    box.style.width = `${textWidth + extraWidthFromSelect()}px`;
  }

  $effect(() => {
    selectValue = value ?? '';
    void syncWidth();
  });
</script>

<div class="field">
  <div class="box" bind:this={box} data-has-value={hasValue}>
    <select class="select" bind:this={selectEl} bind:value={selectValue} onchange={handleChange}>
      <option value="" disabled>{placeholder}</option>

      {#each options as option (option)}
        <option value={option}>{option}</option>
      {/each}
    </select>

    {#if hasValue && clearable}
      <button class="icon clear" type="button" aria-label="Clear selection" onclick={clear}>
        <OscdCloseIcon svgStyles="fill: var(--primary-base)" />
      </button>
    {:else}
      <span class="icon caret" aria-hidden="true">
        <svg viewBox="0 0 20 20" width="16" height="16">
          <path
            d="M5.5 7.5 10 12l4.5-4.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    {/if}

    <span class="probe" bind:this={probe} aria-hidden="true"></span>
  </div>
</div>

<style>
  .field {
    max-width: 22rem;
    display: grid;
    gap: 0.4rem;
    font-family: "Roboto", sans-serif;
  }

  .box {
    position: relative;
    width: 100%;
    justify-self: start;
  }

  .select {
    appearance: none;
    width: 100%;
    height: 2.5rem;

    padding: 0 2.6rem 0 0.75rem;

    border-radius: 5px;
    border: 1px solid #b2c7cb;

    background: var(--base3);
    font: inherit;
    font-size: 0.95rem;
    line-height: 1;

    outline: none;
    transition: border-color 120ms ease;

    color: #6b7280;
    font-weight: 400;
    margin: 0;
  }

  .box[data-has-value="true"] .select {
    white-space: nowrap;
    color: var(--primary-base);
    font-weight: 600;

    padding-right: 2.2rem;
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 0.35rem;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
  }

  .caret {
    pointer-events: none;
    color: var(--primary-base);
  }

  .clear {
    border: 0;
    background: transparent;
    border-radius: 0.6rem;
    cursor: pointer;
  }

  .probe {
    position: absolute;
    left: -99999px;
    top: -99999px;
    white-space: nowrap;

    font-family: "Roboto", sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
  }
</style>
