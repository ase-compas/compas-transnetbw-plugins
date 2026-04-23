<script lang="ts">
  const { onClick } = $props();
</script>

<button class="btn-engineering-wizard_title" onclick={onClick}>Engineering Wizard</button>

<style>
  .btn-engineering-wizard_title  {
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    color: white;
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-heading, 1.125rem);
    font-weight: var(--ew-font-weight-heading, 600);
  }
</style>
