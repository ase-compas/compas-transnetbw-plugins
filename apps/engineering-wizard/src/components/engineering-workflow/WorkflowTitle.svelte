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
    font-size: 1rem;
    font-weight: 600;
    font-family: Arial, sans-serif;
  }
</style>
