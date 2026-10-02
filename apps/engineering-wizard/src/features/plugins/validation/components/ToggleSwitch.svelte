<script lang="ts">
  interface Props {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    onclick?: () => void;
  }

  let { checked = false, disabled = false, label, onclick }: Props = $props();
</script>

<button
  type="button"
  role="switch"
  aria-checked={checked}
  aria-label={label}
  class="switch"
  class:switch--on={checked}
  {disabled}
  {onclick}
>
  <span class="switch__thumb"></span>
</button>

<style>
  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 2.75rem;
    height: 1.5rem;
    border-radius: 9999px;
    background: var(--base1);
    border: none;
    padding: 0;
    cursor: pointer;
    flex-shrink: 0;
    outline: none;
    transition: background-color 0.2s ease;
    margin: 0;
  }

  .switch:focus-visible {
    box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--primary-base);
  }

  .switch--on {
    background: var(--primary-base);
  }

  .switch:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    background: var(--white);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease;
  }

  .switch--on .switch__thumb {
    transform: translateX(1.25rem);
  }
</style>
