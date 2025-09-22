<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import { createEventDispatcher } from 'svelte';

  export let checked = false;
  export let label = 'Toggle';
  export let id = 'toggle-switch';
  export let labelStyle = '';
  export let switchClass = '';
  export let formFieldClass = '';
  export let icons = false;

  export let preventToggleOnClick = false;

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
