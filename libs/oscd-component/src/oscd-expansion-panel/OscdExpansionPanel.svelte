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
    background: white;
  }

  details summary {
    cursor: pointer;
  }

  .expandable-content {
    margin-top: 1.5rem;
  }
</style>
