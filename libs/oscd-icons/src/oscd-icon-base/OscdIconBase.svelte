<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<span class="oscd-icon">
  {@render children?.()}
</span>

<style lang="css">
  @import "../style/icon-styles.css";
</style>
