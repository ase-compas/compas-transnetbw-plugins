<script>
  import Button, { Icon, Label } from '@smui/button';

  /** @type {{callback?: any, disabled?: boolean, variant?: string, isAbortAction?: boolean, backgroundColor?: any, children?: import('svelte').Snippet}} */
  let {
    callback = () => {},
    disabled = false,
    variant = 'default',
    isAbortAction = false,
    backgroundColor = undefined,
    children
  } = $props();

</script>

<Button
  onclick={callback}
  {variant}
  disabled={disabled}
  style={isAbortAction ? "background-color: #ff3e00;" : "background-color: " + backgroundColor}
>
  {@render children?.()}
</Button>
