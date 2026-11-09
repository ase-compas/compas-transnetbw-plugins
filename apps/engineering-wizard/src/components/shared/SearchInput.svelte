<script lang="ts">
  import { OscdSearchIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    value?: string;
    label?: string;
  }

  let { value = $bindable(''), label = 'Search' }: Props = $props();
</script>

<div class="search-input-wrapper">
  <span class="search-input-icon" aria-hidden="true">
    <OscdSearchIcon svgStyles="fill: currentColor; width: 20px; height: 20px;" />
  </span>
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
    position: relative;
    display: flex;
    align-items: center;
    width: var(--ew-search-width, auto);
    max-width: 100%;
    margin: 0;
  }

  .search-input-icon {
    position: absolute;
    left: 12px;
    display: flex;
    color: var(--oscd-plugin-text-muted, #6b9197);
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    height: 36px;
    padding: 0 12px 0 40px;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--oscd-plugin-text, #1a3c54);
    background: var(--oscd-plugin-surface, white);
    border: none;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    min-width: 0;
    margin: 0;
    transition: box-shadow 0.15s ease;
    -webkit-appearance: none;
    appearance: none;
  }

  .search-input::placeholder {
    color: #6b9197;
    font-size: var(--ew-font-size-body, 0.875rem);
  }

  .search-input:focus {
    box-shadow: 0 0 0 2px rgba(26, 60, 84, 0.15);
  }
</style>
