<script>
  import Button, { Icon, Label } from '@smui/button';

  export let callback = () => {};
  export let disabled = false;
  export let variant = 'default'
</script>

<Button on:click={callback()} variant={variant}>
  <slot></slot>
</Button>
