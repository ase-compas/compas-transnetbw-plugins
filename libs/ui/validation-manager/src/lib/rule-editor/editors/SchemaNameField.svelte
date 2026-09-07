<script lang="ts">
  import Select from '../../ui/Select.svelte';
  import TextField from '../../ui/TextField.svelte';

  interface Props {
    value: string;
    options: string[];
    label: string;
    placeholder: string;
    requiredMessage: string;
  }

  let { value = $bindable(), options, label, placeholder, requiredMessage }: Props = $props();

  const isEmpty = $derived(!value?.trim());

  $effect(() => {
    if (options.length > 0 && (!value || !options.includes(value))) {
      value = options[0];
    }
  });

  // Local Select takes {value, label} tuples.
  const selectOptions = $derived(options.map((o) => ({ value: o, label: o })));
</script>

{#if options.length > 0}
  <Select bind:value {label} options={selectOptions} invalid={isEmpty} />
  {#if isEmpty}
    <p class="required-msg">{requiredMessage}</p>
  {/if}
{:else}
  <TextField bind:value {label} {placeholder} invalid={isEmpty}>
    {#snippet helper()}
      {#if isEmpty}{requiredMessage}{/if}
    {/snippet}
  </TextField>
{/if}

<style>
  .required-msg {
    margin: -0.75rem 0 1rem 0.75rem;
    font-size: 0.75rem;
    color: var(--primary-base, #37474f);
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }
</style>
