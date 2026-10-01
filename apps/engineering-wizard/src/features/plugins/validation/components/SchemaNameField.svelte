<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import ValidationSelectField from './ValidationSelectField.svelte';

  interface Props {
    value: string;
    options: string[];
    label: string;
    placeholder: string;
    requiredMessage: string;
  }

  let { value = $bindable(), options, label, placeholder, requiredMessage }: Props = $props();

  const isEmpty = $derived(!value?.trim());
  const selectOptions = $derived(
    options.map((option) => ({ value: option, label: option })),
  );

  $effect(() => {
    if (options.length > 0 && (!value || !options.includes(value))) {
      value = options[0];
    }
  });
</script>

{#snippet requiredHelper()}<HelperText validationMsg>{requiredMessage}</HelperText>{/snippet}

{#if options.length > 0}
  <div class="field-wrap">
    <ValidationSelectField
      bind:value
      label={label}
      options={selectOptions}
      placeholder={placeholder}
      invalidMessage={isEmpty ? requiredMessage : undefined}
    />
  </div>
{:else}
  <div class="field-wrap">
    <Textfield
      bind:value
      label={label}
      variant="outlined"
      placeholder={placeholder}
      invalid={isEmpty}
      class="rule-editor__full"
      helper={isEmpty ? requiredHelper : undefined}
    />
  </div>
{/if}

<style>
  .field-wrap {
    display: flex;
    flex-direction: column;
  }
</style>
