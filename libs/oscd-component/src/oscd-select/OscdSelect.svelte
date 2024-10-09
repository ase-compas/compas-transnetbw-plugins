<script>
  import Select, { Option } from '@smui/select';

  export let data = [];
  export let placeholder = '';
  export let label = '';
  export let description = '';
  export let value = '';
  export let required = false;
  export let size = 'sm';
</script>

<Select bind:value label={label} style="width: 100%;" required={required}>
  {#each data as d}
    <Option value={d.value}>{d.label}</Option>
  {/each}
</Select>
