<script lang="ts">
  interface Props {
    value?: string;
    label?: string;
  }

  let { value = $bindable(''), label = 'Search' }: Props = $props();
</script>

<div class="search-input-wrapper">
  <input
    type="search"
    class="search-input"
    bind:value
    placeholder={label}
    aria-label={label}
  />
</div>

<style>
  .search-input-wrapper {
    display: flex;
    align-items: center;
  }

  .search-input {
    height: 36px;
    padding: 0 12px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    color: var(--primary-base, #1a3c54);
    background: white;
    border: 1.5px solid var(--primary-base, #1a3c54);
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    min-width: 180px;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    -webkit-appearance: none;
    appearance: none;
  }

  .search-input::placeholder {
    color: #6b9197;
    font-size: 14px;
  }

  .search-input:focus {
    box-shadow: 0 0 0 2px rgba(26, 60, 84, 0.15);
  }
</style>
