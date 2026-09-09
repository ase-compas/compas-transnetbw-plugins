<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

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
</script>

{#snippet requiredHelperText()}{requiredMessage}{/snippet}
{#snippet requiredHelper()}<HelperText validationMsg>{requiredMessage}</HelperText>{/snippet}

{#if options.length > 0}
  <div class="field-wrap">
    <Select
      bind:value
      label={label}
      variant="outlined"
      invalid={isEmpty}
      helperText$validationMsg
      helperText={isEmpty ? requiredHelperText : undefined}
    >
      {#each options as opt (opt)}
        <Option value={opt}>{opt}</Option>
      {/each}
    </Select>
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
