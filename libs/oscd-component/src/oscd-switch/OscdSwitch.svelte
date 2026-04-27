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
    disabled?: boolean;

    onChange?: (newChecked: boolean) => void;
  }

  let {
    checked = $bindable(false),
    label: labelText = 'Toggle',
    id = 'toggle-switch',
    labelStyle = '',
    switchClass = '',
    formFieldClass = '',
    icons = false,
    preventToggleOnClick = false,
    disabled = false,

    onChange = (_) => {},
  }: Props = $props();

  function handleChange(newChecked: boolean) {
    if(disabled) {
      return;
    }

    if(preventToggleOnClick) {
      checked = !newChecked;
    }

    onChange(newChecked);
  }
</script>

<FormField class={formFieldClass}>
  <Switch
    id={id}
    disabled={disabled}
    class={switchClass}
    bind:checked
    {icons}
    onSMUISwitchChange={e => handleChange(e.detail.selected)}/>
    {#snippet label()}
      {#if labelText}
        <label
          for={id}
          style={labelStyle}
          class="oscd-switch-label"
          class:oscd-switch-label-disabled={disabled}
        >
          {labelText}
        </label>
      {/if}
    {/snippet}
</FormField>

<style>
  .oscd-switch-label-disabled {
    color: #8a8f98 !important;
  }
</style>