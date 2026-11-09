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
    padding: 0 2.5rem 0 0.75rem;
    border: 1px solid #b2c7cb;
    border-radius: 4px;
    appearance: none;
    background-color: var(--oscd-plugin-surface);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5l5 5 5-5' fill='none' stroke='%2393a1a1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    color: var(--base03);
    font: inherit;
  }

  .select-field__control:focus {
    border-color: var(--oscd-plugin-brand);
    outline: 1px solid var(--oscd-plugin-brand);
  }

  .select-field__control[aria-invalid='true'] {
    border-color: var(--red);
  }

  .select-field__error {
    color: var(--red);
    font-size: var(--ew-font-size-small, 0.75rem);
  }
</style>
