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

  const dispatch = createEventDispatcher();

  function handleChange(event: Event) {
    dispatch('change', (event.target as HTMLInputElement).checked);
  }
</script>

<FormField class={formFieldClass}>
  <Switch
    id={id}
    class={switchClass}
    bind:checked
    {icons}
    on:change={handleChange}
  />
  <label for={id} style={labelStyle}>
    {label}
  </label>
</FormField>
