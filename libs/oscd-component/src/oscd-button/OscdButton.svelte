<script>
  import Button, { Icon, Label } from '@smui/button';

  /**
   * @typedef {Object} Props
   * @property {any} [callback]
   * @property {boolean} [disabled]
   * @property {string} [variant]
   * @property {boolean} [isAbortAction]
   * @property {any} [backgroundColor]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
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
  on:click={callback()}
  {variant}
  disabled="{disabled}"
  style={isAbortAction ? "background-color: #ff3e00;" : "background-color: " + backgroundColor}
>
  {@render children?.()}
</Button>
