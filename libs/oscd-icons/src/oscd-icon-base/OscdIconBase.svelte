<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<span class="oscd-icon">
  {@render children?.()}
</span>

<style>
  :global(.oscd-icon svg) {
    width: 18px;
    height: 18px;
    fill: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(button[disabled] .oscd-icon svg) {
    fill: rgba(0, 0, 0, 0.38);
  }
</style>
