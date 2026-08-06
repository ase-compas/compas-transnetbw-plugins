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

  $effect(() => {
    if (options.length > 0 && (!value || !options.includes(value))) {
      value = options[0];
    }
  });
</script>

{#if options.length > 0}
  <div class="field-wrap">
    <Select bind:value label={label} variant="outlined" invalid={!value?.trim()} helperText$validationMsg>
      {#each options as opt (opt)}
        <Option value={opt}>{opt}</Option>
      {/each}
      {#snippet helperText()}{requiredMessage}{/snippet}
    </Select>
  </div>
{:else}
  <div class="field-wrap">
    <Textfield
      bind:value
      label={label}
      variant="outlined"
      placeholder={placeholder}
      invalid={!value?.trim()}
      class="rule-editor__full"
    >
      {#snippet helper()}<HelperText validationMsg>{requiredMessage}</HelperText>{/snippet}
    </Textfield>
  </div>
{/if}

<style>
  .field-wrap {
    display: flex;
    flex-direction: column;
  }
</style>
