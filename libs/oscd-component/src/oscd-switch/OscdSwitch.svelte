<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';

  interface Props {
    checked?: boolean;
    label?: string;
    id?: string;
    labelStyle?: string;
    switchClass?: string;
    formFieldClass?: string;
    icons?: boolean;
    preventToggleOnClick?: boolean;

    onChange?: (newChecked: boolean) => void;
  }

  let {
    checked = $bindable(false),
    label = 'Toggle',
    id = 'toggle-switch',
    labelStyle = '',
    switchClass = '',
    formFieldClass = '',
    icons = false,
    preventToggleOnClick = false,

    onChange = (_) => {},
  }: Props = $props();

  function handleChange(newChecked: boolean) {

    if(preventToggleOnClick) {
      checked = !newChecked;
    }

    onChange(newChecked);
  }
</script>

<FormField class={formFieldClass}>
  <Switch
    id={id}
    class={switchClass}
    bind:checked
    {icons}
    onSMUISwitchChange={e => handleChange(e.detail.selected)}
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
