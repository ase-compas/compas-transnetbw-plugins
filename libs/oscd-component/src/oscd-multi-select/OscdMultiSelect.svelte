<script lang="ts">

  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  interface Option {
    label: string;
    value: any;
  }

  interface Props {
    data: Option[];
    values: any[];
  }

  let { data = [], values = $bindable([]) }: Props = $props();
</script>

<div style="display: flex; flex-direction: column;">
{#each data as option, index}
  <FormField>
        <Checkbox
          bind:group={values}
          value={option.value}
        />

        {#snippet label()}
          {option.label}
        {/snippet}
  </FormField>
{/each}
</div>
