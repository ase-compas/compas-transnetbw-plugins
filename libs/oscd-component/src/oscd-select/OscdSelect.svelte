<script>
  import Select, { Option } from '@smui/select';

  /**
   * @typedef {Object} Props
   * @property {any} [data]
   * @property {string} [placeholder]
   * @property {string} [label]
   * @property {string} [description]
   * @property {string} [value]
   * @property {boolean} [required]
   * @property {string} [size]
   * @property {any} [selectedOptionIndex]
   * @property {boolean} [disabled]
   */

  /** @type {Props} */
  let {
    data = [],
    placeholder = '',
    label = '',
    description = '',
    value = $bindable(''),
    required = false,
    size = 'sm',
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
  required={required}>
  {#each data as d, index}
    <Option on:click={setSelectedIndex(index)} value={d.value}>{d.label}</Option>
  {/each}
</Select>
