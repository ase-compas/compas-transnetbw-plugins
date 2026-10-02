<script lang="ts">
  interface SelectOption {
    value: string;
    label: string;
  }

  interface Props {
    value: string;
    label: string;
    options: SelectOption[];
    placeholder?: string;
    invalidMessage?: string;
    class?: string;
  }

  let {
    value = $bindable(),
    label,
    options,
    placeholder,
    invalidMessage,
    class: className = '',
  }: Props = $props();
</script>

<label class="select-field {className}">
  <span class="select-field__label">{label}</span>
  <select
    class="select-field__control"
    bind:value
    aria-invalid={invalidMessage ? 'true' : undefined}
  >
    {#if placeholder}
      <option value="" disabled>{placeholder}</option>
    {/if}
    {#each options as option (option.value)}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  {#if invalidMessage}
    <span class="select-field__error">{invalidMessage}</span>
  {/if}
</label>

<style>
  .select-field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    min-width: 0;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }

  .select-field__label {
    color: var(--base01);
    font-size: var(--ew-font-size-small, 0.75rem);
  }

  .select-field__control {
    width: 100%;
    min-height: 3.5rem;
    box-sizing: border-box;
    padding: 0 0.75rem;
    border: 1px solid #b2c7cb;
    border-radius: 4px;
    background: var(--white);
    color: var(--base03);
    font: inherit;
  }

  .select-field__control:focus {
    border-color: var(--primary-base);
    outline: 1px solid var(--primary-base);
  }

  .select-field__control[aria-invalid='true'] {
    border-color: var(--red);
  }

  .select-field__error {
    color: var(--red);
    font-size: var(--ew-font-size-small, 0.75rem);
  }
</style>
