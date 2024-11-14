<script>
  import Select, { Option } from '@smui/select';

  export let data = [];
  export let placeholder = '';
  export let label = '';
  export let description = '';
  export let value = '';
  export let required = false;
  export let size = 'sm';
  export let selectedOptionIndex = -1;
  export let disabled = false;

  function asd(index) {
    return () => selectedOptionIndex = index;
  }
</script>

<Select
  {disabled}
  key={(value) => `${value == null ? '' : value}`}
  bind:value
  {label}
  style="width: 100%;"
  required={required}>
  {#each data as d, index}
    <Option on:click={asd(index)} value={d.value}>{d.label}</Option>
  {/each}
</Select>
