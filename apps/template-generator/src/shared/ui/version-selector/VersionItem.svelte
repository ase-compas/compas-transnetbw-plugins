<script lang="ts">
  import { Icon } from '@smui/button';

  interface Props {
    version: Version;
  }

  let { version }: Props = $props();
</script>

<div class="version-item">
  <div class="version-item__icon">
    {#if version.locked}
      <Icon class="material-icons">lock</Icon>
    {/if}
  </div>
  <div class="version-item__version-container">
    <span class="version-item__version">{version.version}</span>
  </div>
  <div class="version-item__meta">
    {#if version.secondaryText}
      <span class="version-item__secondary">{version.secondaryText}</span>
    {/if}
  </div>
  {#if version.latest}
    <div class="version-item__latest">
      <span class="badge">latest</span>
    </div>
  {/if}
</div>

<style>
  .version-item {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.75em;
  }

  .version-item__icon {
    min-width: 24px;
  }

  .version-item__version-container {
    min-width: 80px;
  }

  .version-item__meta {
    flex: 1;
    min-width: 0;
  }

  .version-item__latest {
    margin-left: auto;
  }

  .version-item__version {
    font-weight: 500;
  }

  .version-item__secondary {
    white-space: nowrap;
    font-size: 0.875em;
    color: var(--smui-text-secondary-on-background);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    height: 1.8rem;
    padding: 0 0.5rem;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    font-size: 0.8rem;
    background: var(--mdc-theme-primary, #ff3e00);
    color: #fff;
  }
</style>
