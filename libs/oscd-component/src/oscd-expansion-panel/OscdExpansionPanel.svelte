<script>
  import Paper from '@smui/paper';

  /**
   * @typedef {Object} Props
   * @property {string} [title]
   * @property {boolean} [open]
   * @property {import('svelte').Snippet} [content]
   */

  /** @type {Props} */
  let { title = '', open = false, content } = $props();
</script>

<Paper>
  <details {open}>
    <summary>{title}</summary>
    <div class="expandable-content">
      {@render content?.()}
    </div>
  </details>
</Paper>

<style type="text/css">
  details {
    width: 100%;
    background: transparent;
    font-family: var(--mdc-typography-font-family, Roboto, sans-serif), serif;
  }

  details summary {
    cursor: pointer;
    padding: 10px 0;
    background: transparent;
  }

  .expandable-content {
    margin-top: 1.5rem;
  }
</style>
