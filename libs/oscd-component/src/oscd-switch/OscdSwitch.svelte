<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import { createEventDispatcher } from 'svelte';


  interface Props {
    checked?: boolean;
    label?: string;
    id?: string;
    labelStyle?: string;
    switchClass?: string;
    formFieldClass?: string;
    icons?: boolean;
    preventToggleOnClick?: boolean;
  }

  let {
    checked = $bindable(false),
    label = 'Toggle',
    id = 'toggle-switch',
    labelStyle = '',
    switchClass = '',
    formFieldClass = '',
    icons = false,
    preventToggleOnClick = false
  }: Props = $props();

  const dispatch = createEventDispatcher();

  function handleChange(newChecked: boolean) {

    if(preventToggleOnClick) {
      checked = !newChecked;
    }

    dispatch('change', newChecked);
  }
</script>

<FormField class={formFieldClass}>
  <Switch
    id={id}
    class={switchClass}
    bind:checked
    {icons}
    on:SMUISwitch:change={e => handleChange(e.detail.selected)}
  />
  {#if label}
  <label for={id} style={labelStyle} class="oscd-switch-label">
    {label}
  </label>
  {/if}
</FormField>

<style>
  .oscd-switch-label {
    cursor: pointer
  }
</style>
