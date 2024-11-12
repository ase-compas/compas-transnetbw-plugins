<script>
  import Paper from '@smui/paper';

  export let title = '';
  export let open = false;
</script>

<Paper>
  <details {open}>
    <summary>{title}</summary>
    <div class="expandable-content">
      <slot name="content" />
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
