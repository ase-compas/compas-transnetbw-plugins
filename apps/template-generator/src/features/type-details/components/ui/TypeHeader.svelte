<script lang="ts">
  import { OscdSwitch, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import Button from '@smui/button';
  import { onMount } from 'svelte';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { TypeKind } from '../../../../shared/model';
  import ChooseInstanceTypeDialog from '../dialogs/ChooseInstanceTypeDialog.svelte';
  import SetDefaultButton from './SetDefaultButton.svelte';
  import TypeActionMenu from './TypeActionMenu.svelte';
  import type { DataTypeService } from '../../services/type.service';
  import TypeInfo from 'apps/template-generator/src/shared/ui/TypeInfo.svelte';
  import DefaultTypeInfoPanel from './DefaultTypeInfoPanel.svelte';

  type HeaderDefaultTypeInfo = {
    kind: TypeKind;
    instance: string;
    version: string;
    rootId: string;
  };

  type HeaderDefaultTypeVersionStatus = {
    currentVersion: string;
    latestVersion: string;
    latestSource: 'local' | 'db';
    localLatestVersion: string | null;
    dbLatestVersion: string | null;
    hasUpdate: boolean;
    isDeprecated: boolean;
  };

  interface Props {
    type: TypeKind;
    typeId: string;
    instanceType?: string | null;
    defaultTypeInfo?: HeaderDefaultTypeInfo | null;
    defaultTypeVersionStatus?: HeaderDefaultTypeVersionStatus | null;
    isEditMode?: boolean;
    toggleEditModeSwitchDisabled?: boolean;
    showSetAsDefault?: boolean;
    setAsDefaultDisabled?: boolean;
    actionsDisabled?: boolean;

    onModeChange?: (mode: 'edit' | 'view') => void;
    onInstanceTypeChange?: (instanceType: string) => void;
    onOpenDefaultRootType?: (typeId: string, typeKind: TypeKind) => void;
    onUpdateDefaultTypeToLatest?: () => void;
    onClickDefault?: () => void;
    onDelete?: () => void;
    onRename?: () => void;

    service: DataTypeService
  }

  let {
    type,
    typeId,
    instanceType = null,
    defaultTypeInfo = null,
    defaultTypeVersionStatus = null,
    isEditMode = $bindable(false),
    showSetAsDefault = true,
    setAsDefaultDisabled = false,
    toggleEditModeSwitchDisabled = false,
    actionsDisabled = false,


    onModeChange = (_: 'edit' | 'view') => {},
    onInstanceTypeChange = (_: string) => {},
    onOpenDefaultRootType = (_: string, __: TypeKind) => {},
    onUpdateDefaultTypeToLatest = () => {},
    onClickDefault = () => {},
    onDelete = () => {},
    onRename = () => {},

    service
  }: Props = $props();

  const handleChange = (checked) => onModeChange(checked ? 'edit' : 'view');
  let defaultInfoDetails = $state<HTMLDetailsElement | null>(null);


  async function handleInstanceTypeSelect() {
    const result = await openDialog(ChooseInstanceTypeDialog, {
      typeKind: type,
      service: service
    })

    if (result.type !== 'confirm') {
      return;
    }
    onInstanceTypeChange(result.data.instance);
  }

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

<div class="header-bar">
  <!-- Left side: information -->
  <div class="info-section">
    <TypeInfo kind={type} {typeId} instance={instanceType} />
    {#if defaultTypeInfo}
      <div class="default-info-wrapper">
        <details class="default-info" bind:this={defaultInfoDetails}>
          <summary
            class="default-summary"
            class:is-deprecated={defaultTypeVersionStatus?.isDeprecated}
            aria-label="Show default type details"
          >
            <span class="default-icon" aria-hidden="true">
              {#if defaultTypeVersionStatus?.isDeprecated}⚠{:else}★{/if}
            </span>
            <span class="default-label">Default</span>
            <span class="default-version">v{defaultTypeInfo.version}</span>
            {#if defaultTypeVersionStatus && !defaultTypeVersionStatus.isDeprecated}
              <span class="default-ok-dot" title="Up to date"></span>
            {/if}
            <span class="default-chevron" aria-hidden="true">›</span>
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
          <button type="button" class="default-update-badge" onclick={onUpdateDefaultTypeToLatest}>
            ↑ {defaultTypeVersionStatus.currentVersion} → {defaultTypeVersionStatus.latestVersion}
          </button>
        {/if}
      </div>
    {/if}
  </div>

  <!-- Right side: actions -->
  <div class="actions-section">
    {#if instanceType}
      <OscdSwitch
        bind:checked={isEditMode}
        onChange={e => handleChange(e)}
        preventToggleOnClick={true}
        id={`edit-mode-switch-${typeId}`}
        label="Edit Mode"
        labelStyle="font-weight: bold; text-transform: uppercase; color: var(--mdc-theme-primary);"
        disabled={toggleEditModeSwitchDisabled}
      />
      <!--
      {#if showSetAsDefault}
        {#if setAsDefaultDisabled}
          <OscdTooltip content="Save first to set as default" side="bottom" hoverDelay={300}>
            <SetDefaultButton onClick={onClickDefault} disabled={setAsDefaultDisabled}/>
          </OscdTooltip>
        {:else}
          <SetDefaultButton onClick={onClickDefault} />
        {/if}
      {/if}
      -->
    {:else}
      <Button variant="unelevated" color="primary" onclick={handleInstanceTypeSelect}>Choose Instance Type to Edit</Button>
    {/if}
    <TypeActionMenu
      onDelete={onDelete}
      onRename={onRename}
      actionsDisabled={actionsDisabled}
    />
  </div>
</div>

<style>
  /* Main header container */
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 0;
    gap: 2.5rem;
    margin-bottom: 1rem;
  }

  .info-section {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .default-info-wrapper {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .default-info {
    position: relative;
  }

  .default-summary {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    border: 1px solid var(--mdc-outlined-button-outline-color, #c4cad3);
    border-radius: 999px;
    min-height: 2rem;
    padding: 0.2rem 0.65rem 0.2rem 0.35rem;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--mdc-theme-text-primary-on-background, #1f2933);
    background: var(--mdc-theme-surface, #ffffff);
    cursor: pointer;
    user-select: none;
    list-style: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
  }

  .default-summary:hover {
    border-color: var(--mdc-theme-primary, #3f51b5);
    background: #f8fafe;
  }

  .default-summary.is-deprecated {
    border-color: #e8a020;
    background: #fffbf2;
    color: #7a4a00;
  }

  .default-summary.is-deprecated:hover {
    background: #fff4dc;
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
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
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
  }

  .default-version {
    font-variant-numeric: tabular-nums;
    opacity: 0.75;
    font-size: 0.74rem;
  }

  .default-ok-dot {
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: #2e9e5b;
    flex: 0 0 auto;
  }

  .default-chevron {
    font-size: 0.8rem;
    opacity: 0.5;
    margin-left: 0.05rem;
    display: inline-block;
    transform: rotate(90deg);
    transition: transform 0.15s ease;
  }

  .default-info[open] .default-chevron {
    transform: rotate(270deg);
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

  .default-link {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    text-align: left;
    font: inherit;
    font-size: 0.82rem;
    color: var(--mdc-theme-primary, #3f51b5);
    text-decoration: underline;
    cursor: pointer;
    word-break: break-word;
  }

  .default-link:hover {
    color: var(--mdc-theme-primary, #3f51b5);
  }

  .default-update-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    border: 1px solid #e8a020;
    background: #fff4dc;
    color: #7a4a00;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s ease, border-color 0.15s ease;
  }

  .default-update-badge:hover {
    background: #ffe8a8;
    border-color: #c47b00;
    color: #5a3500;
  }

  /* Right side actions */
  .actions-section {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  :global(.mdc-button) {
    margin-bottom: 0;
  }

</style>
