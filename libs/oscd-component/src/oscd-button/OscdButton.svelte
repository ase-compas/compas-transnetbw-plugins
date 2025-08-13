<script>
  import Button, { Icon, Label } from '@smui/button';

  export let callback = () => {};
  export let disabled = false;
  export let variant = 'default';
  export let isAbortAction = false;
  export let backgroundColor = undefined;

</script>

<Button
  on:click={callback()}
  {variant}
  disabled="{disabled}"
  style={isAbortAction ? "background-color: #ff3e00;" : "background-color: " + backgroundColor}
>
  <slot></slot>
</Button>
