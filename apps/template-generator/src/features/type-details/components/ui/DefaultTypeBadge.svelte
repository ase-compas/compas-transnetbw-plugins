<script lang="ts">
  import CircularProgress from '@smui/circular-progress';
  import { onMount } from 'svelte';
  import { TypeKind } from '../../../../shared/model';
  import DefaultTypeInfoPanel from './DefaultTypeInfoPanel.svelte';
  import OscdBadge from 'libs/oscd-component/src/oscd-badge/OscdBadge.svelte';
  import OscdIconActionButton from 'libs/oscd-component/src/oscd-icon-action-button/OscdIconActionButton.svelte';

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
    defaultTypeInfo?: DefaultTypeInfo;
    defaultTypeVersionStatus?: DefaultTypeVersionStatus | null;
    onOpenDefaultRootType?: (typeId: string, typeKind: TypeKind) => void;
    onUpdateDefaultTypeToLatest?: () => void;
    onCustomizeDefault?: () => void;
  }

  let {
    typeId,
    defaultTypeInfo = null,
    defaultTypeVersionStatus = null,
    onOpenDefaultRootType = (_: string, __: TypeKind) => {},
    onUpdateDefaultTypeToLatest = () => {},
    onCustomizeDefault = () => {},
  }: Props = $props();

  let defaultInfoWrapper = $state<HTMLDivElement | null>(null);
  let isInfoPanelOpen = $state(false);

  const hasVersionStatus = $derived(!!defaultTypeVersionStatus);
  const isOutdated = $derived(
    !!defaultTypeVersionStatus &&
      (defaultTypeVersionStatus.hasUpdate || defaultTypeVersionStatus.isDeprecated),
  );
    const isCurrent = $derived(!!defaultTypeVersionStatus && !isOutdated);

    function openInfoPanel() {
      isInfoPanelOpen = !isInfoPanelOpen;
    }

    onMount(() => {
      const closeDefaultInfoOnOutsideClick = (event: MouseEvent) => {
        if (!isInfoPanelOpen || !defaultInfoWrapper) {
          return;
        }

        const target = event.target;
        if (target instanceof Node && !defaultInfoWrapper.contains(target)) {
          isInfoPanelOpen = false;
        }
      };

      document.addEventListener('click', closeDefaultInfoOnOutsideClick);
      return () => {
        document.removeEventListener('click', closeDefaultInfoOnOutsideClick);
      };
    });
  </script>

    <div class="default-info-wrapper" bind:this={defaultInfoWrapper}>
      {#if defaultTypeInfo}
        <span>v{defaultTypeInfo.version}</span>
      {:else}
        <span>—</span>
      {/if}

      {#if hasVersionStatus}
        {#if isCurrent}
        <OscdBadge type="success" label="current" size="small" />
      {/if}
      {#if isOutdated}
        <OscdBadge type="error" label="outdated" size="small" />
      {/if}
    {:else}
      <CircularProgress style="height: 16px; width: 16px;" indeterminate />
    {/if}

    {#if isOutdated}
      <OscdIconActionButton
        type="input-circle"
        tooltip={`Update to latest version (v${defaultTypeVersionStatus.currentVersion} → v${defaultTypeVersionStatus?.latestVersion})`}
        tooltipSide="top"
        onClick={onUpdateDefaultTypeToLatest}
        fillColor="var(--mdc-theme-error, #d32f2f)"
        />
    {/if}

    <OscdIconActionButton 
      type="info"
      tooltip="Info"
      tooltipSide="top" 
      onClick={() => openInfoPanel()}/>
    <OscdIconActionButton
      type="edit"
      tooltip="Convert this default type into a normal editable type. It will no longer be managed as a default."
      tooltipSide="top" 
      onClick={onCustomizeDefault}/>



    {#if isInfoPanelOpen}
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
    {/if}

  </div>

<style>
  .default-info-wrapper {
    display: flex;
    align-items: center;
    gap: 0.25em;
    position: relative;
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
</style>
