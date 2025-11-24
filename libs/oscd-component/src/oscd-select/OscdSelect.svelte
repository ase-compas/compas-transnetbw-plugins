<script>
  import Select, { Option } from '@smui/select';

  /** @type {{data?: any, placeholder?: string, label?: string, description?: string, value?: string, required?: boolean, size?: string, selectedOptionIndex?: any, disabled?: boolean, variant?: string}} */
  let {
    data = [],
    placeholder = '',
    label = '',
    description = '',
    value = $bindable(),
    required = false,
    size = 'sm',
    variant = 'standard',
    selectedOptionIndex = $bindable(-1),
    disabled = false
  } = $props();

  function setSelectedIndex(index) {
    return () => selectedOptionIndex = index;
  }
</script>

<Select
  {disabled}
  key={(value) => `${value == null ? '' : value}`}
  bind:value
  {label}
  style="width: 100%;"
  {variant}
  required={required}>
  {#each data as d, index}
    <Option onclick={setSelectedIndex(index)} value={d.value}>{d.label}</Option>
  {/each}
</Select>
