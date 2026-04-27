<script lang="ts">
  import { OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import { OscdArrowForwardIcon, OscdInfoIcon, OscdWarningIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { onMount } from 'svelte';
  import { TypeKind } from '../../../../shared/model';
  import DefaultTypeInfoPanel from './DefaultTypeInfoPanel.svelte';

  type DefaultTypeInfo = {
    kind: TypeKind;
    instance: string;
    version: string;
    rootId: string;
  };

  type DefaultTypeVersionStatus = {
    currentVersion: string;
    latestVersion: string;
    latestSource: 'local' | 'db';
    localLatestVersion: string | null;
    dbLatestVersion: string | null;
    hasUpdate: boolean;
    isDeprecated: boolean;
  };

  interface Props {
    typeId: string;
    defaultTypeInfo?: DefaultTypeInfo | null;
    defaultTypeVersionStatus?: DefaultTypeVersionStatus | null;
    onOpenDefaultRootType?: (typeId: string, typeKind: TypeKind) => void;
    onUpdateDefaultTypeToLatest?: () => void;
  }

  let {
    typeId,
    defaultTypeInfo = null,
    defaultTypeVersionStatus = null,
    onOpenDefaultRootType = (_: string, __: TypeKind) => {},
    onUpdateDefaultTypeToLatest = () => {},
  }: Props = $props();

  let defaultInfoDetails = $state<HTMLDetailsElement | null>(null);

  onMount(() => {
    const closeDefaultInfoOnOutsideClick = (event: MouseEvent) => {
      if (!defaultInfoDetails?.open) {
        return;
      }

      const target = event.target;
      if (target instanceof Node && !defaultInfoDetails.contains(target)) {
        defaultInfoDetails.open = false;
      }
    };

    document.addEventListener('click', closeDefaultInfoOnOutsideClick);
    return () => {
      document.removeEventListener('click', closeDefaultInfoOnOutsideClick);
    };
  });
</script>

{#if defaultTypeInfo}
  <div class="default-info-wrapper">
    <details class="default-info" bind:this={defaultInfoDetails}>
      <summary
        class="default-summary"
        class:is-deprecated={defaultTypeVersionStatus?.isDeprecated}
        aria-label="Show default type details"
      >
        <span class="default-icon" aria-hidden="true">
          {#if defaultTypeVersionStatus?.isDeprecated}
            <OscdWarningIcon size="12px" fill="currentColor" />
          {:else}
            ★
          {/if}
        </span>
        <span class="default-label">Default</span>
        <span class="default-version">v{defaultTypeInfo.version}</span>
        <span class="default-status-slot" aria-hidden="true">
          {#if !defaultTypeVersionStatus}
            <span class="default-status-pending" title="Checking status"></span>
          {:else if !defaultTypeVersionStatus.isDeprecated}
            <span class="default-ok-dot" title="Up to date"></span>
          {/if}
        </span>
        <OscdTooltip content="Show default type details" side="bottom" hoverDelay={250}>
          <span class="default-info-icon" aria-hidden="true">
            <OscdInfoIcon svgStyles="width: 14px; height: 14px; fill: currentColor;" />
          </span>
        </OscdTooltip>
      </summary>
      <div class="default-panel">
        <DefaultTypeInfoPanel
          version={defaultTypeInfo.version}
          rootId={defaultTypeInfo.rootId}
          kind={defaultTypeInfo.kind}
          instance={defaultTypeInfo.instance}
          currentTypeId={typeId}
          onOpenRootType={onOpenDefaultRootType}
        />
        {#if defaultTypeVersionStatus?.isDeprecated}
          <div class="default-row">
            <span class="default-row-label">Latest</span>
            <span class="default-row-value default-latest-version">
              {defaultTypeVersionStatus.latestVersion}
            </span>
          </div>
        {/if}
      </div>
    </details>

    {#if defaultTypeVersionStatus?.isDeprecated}
      <OscdTooltip content="Update this default type to the latest available version" side="bottom" hoverDelay={250}>
        <button type="button" class="default-upgrade-button" onclick={onUpdateDefaultTypeToLatest}>
          <span class="default-upgrade-icon" aria-hidden="true">
            <OscdWarningIcon size="14px" fill="currentColor" />
          </span>
          <span class="default-upgrade-content">
            <span class="default-upgrade-versions">
              <span class="default-upgrade-title">Update</span>
              v{defaultTypeVersionStatus.currentVersion}
              <span class="default-upgrade-arrow" aria-hidden="true">
                <OscdArrowForwardIcon svgStyles="width: 12px; height: 12px; fill: currentColor;" />
              </span>
              v{defaultTypeVersionStatus.latestVersion}
            </span>
          </span>
        </button>
      </OscdTooltip>
    {/if}
  </div>
{/if}

<style>
  .default-info-wrapper {
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }

  .default-info {
    position: relative;
    align-self: center;
  }

  .default-summary {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    border: 1px solid var(--mdc-outlined-button-outline-color, #c4cad3);
    border-radius: 999px;
    min-height: 2rem;
    padding: 0.2rem 0.7rem 0.2rem 0.38rem;
    font-size: 0.77rem;
    font-weight: 600;
    color: var(--mdc-theme-text-primary-on-background, #1f2933);
    background: var(--mdc-theme-surface, #ffffff);
    cursor: pointer;
    user-select: none;
    list-style: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
  }

  .default-summary:hover {
    border-color: var(--mdc-theme-primary, #3f51b5);
    background: #f7faff;
  }

  .default-summary.is-deprecated {
    border-color: #db9a1e;
    background: #fff9ef;
    color: #7a4a00;
  }

  .default-summary.is-deprecated:hover {
    background: #fff3dd;
  }

  .default-info[open] .default-summary:not(.is-deprecated) {
    border-color: var(--mdc-theme-primary, #3f51b5);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--mdc-theme-primary, #3f51b5) 18%, transparent);
  }

  .default-info[open] .default-summary.is-deprecated {
    box-shadow: 0 0 0 3px color-mix(in srgb, #e8a020 20%, transparent);
  }

  .default-summary::-webkit-details-marker {
    display: none;
  }

  .default-icon {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.68rem;
    line-height: 1;
    background: color-mix(in srgb, var(--mdc-theme-primary, #3f51b5) 14%, #ffffff);
    color: var(--mdc-theme-primary, #3f51b5);
    flex: 0 0 auto;
  }

  .is-deprecated .default-icon {
    background: #fff0cc;
    color: #c17600;
  }

  .default-label {
    line-height: 1.1;
    letter-spacing: 0.01em;
  }

  .default-version {
    font-variant-numeric: tabular-nums;
    opacity: 0.7;
    font-size: 0.73rem;
  }

  .default-ok-dot {
    width: 0.42rem;
    height: 0.42rem;
    border-radius: 50%;
    background: #2e9e5b;
    box-shadow: 0 0 0 2px #eaf7ef;
    flex: 0 0 auto;
  }

  .default-status-slot {
    width: 0.62rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 0.62rem;
  }

  .default-status-pending {
    width: 0.42rem;
    height: 0.42rem;
    border-radius: 50%;
    border: 1px solid #bdc7d3;
    background: #f2f5f8;
    box-sizing: border-box;
  }

  .default-info-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    margin-left: 0.12rem;
  }

  .default-panel {
    position: absolute;
    top: calc(100% + 0.4rem);
    left: 0;
    min-width: 260px;
    border: 1px solid #d9dde4;
    border-radius: 10px;
    background: var(--mdc-theme-surface, #fff);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
    padding: 0.65rem;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .default-row {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 0.4rem;
    align-items: start;
  }

  .default-row-label {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.045em;
    color: #677383;
    font-weight: 600;
    padding-top: 0.1rem;
  }

  .default-row-value {
    font-size: 0.82rem;
    color: #1f2933;
    word-break: break-word;
  }

  .default-latest-version {
    color: #2e7d32;
    font-weight: 600;
  }

  .default-upgrade-button {
    margin: 0;
    display: inline-flex;
    align-items: center;
    align-self: center;
    gap: 0.4rem;
    border: 1px solid #d79a2f;
    background: #fff5dd;
    color: #5a3600;
    border-radius: 999px;
    padding: 0.26rem 0.58rem;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    min-height: 2rem;
    font: inherit;
  }

  .default-upgrade-button:hover {
    background: #ffedc2;
    border-color: #b86e00;
    box-shadow: 0 0 0 3px color-mix(in srgb, #d99000 18%, transparent);
  }

  .default-upgrade-button:focus-visible {
    outline: 2px solid #b86e00;
    outline-offset: 1px;
  }

  .default-upgrade-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #a85e00;
  }

  .default-upgrade-content {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    line-height: 1;
  }

  .default-upgrade-title {
    font-size: 0.66rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    font-weight: 700;
    opacity: 0.84;
    margin-right: 0.24rem;
  }

  .default-upgrade-versions {
    display: inline-flex;
    align-items: center;
    gap: 0.18rem;
    font-size: 0.73rem;
    font-variant-numeric: tabular-nums;
    font-weight: 700;
  }

  .default-upgrade-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.85;
  }
</style>
