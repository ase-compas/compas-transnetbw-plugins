<script lang="ts">
  import { onMount } from 'svelte';

  import { DataTypeService } from '../../type-details/services/type.service';
  import Button, { Icon } from '@smui/button';
  import TypeDetails from '../../type-details/components/TypeDetails.svelte';
  import { DocState } from '../../../shared/states/doc.state.svelte';
  import {
    DefaultTypeDetailsState,
    type ApiCallResult,
  } from '../state/default-type-details.state.svelte';
  import { handleEditV2 } from '@oscd-transnet-plugins/oscd-event-api';
  import TypeInfo from 'apps/template-generator/src/shared/ui/TypeInfo.svelte';
  import VersionSelector from '../../../shared/ui/version-selector/VersionSelector.svelte';
  import OscdTooltip from 'libs/oscd-component/src/oscd-tooltip/OscdTooltip.svelte';
  import type { CreateDefaultTypeInfo, DefaulteTypeSaveInfo } from '../types';
  import Textfield from '@smui/textfield';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import SaveDefaultTypeDialog from './SaveDefaultTypeDialog.svelte';
  import LinearProgress from '@smui/linear-progress';
  import type { DetailsConfig } from '../../type-details/types';
  import CircularProgress from '@smui/circular-progress';

  /**
   * Component contract:
   * - Edit flow: pass `id`
   * - Create flow: pass `createInfo`
   * Exactly one of the two must be provided.
   */
  type Props = {
    id?: string;
    createInfo?: CreateDefaultTypeInfo;
    onBack?: () => void;
  };

  let { id, createInfo, onBack = () => {} }: Props = $props();

  const docState = new DocState();
  let service = $state<DataTypeService | undefined>(undefined);
  let host: HTMLDivElement | undefined = undefined;

  const detailsState = new DefaultTypeDetailsState();

  function isApiCallError<T>(
    result: ApiCallResult<T>,
  ): result is { ok: false; message: string; cause?: unknown } {
    return !result.ok;
  }

  async function saveDefaultType() {
    if (detailsState.isViewMode) {
      return;
    }

    const mode = detailsState.isCreateMode ? 'create' : 'update';

    const result = await openDialog(SaveDefaultTypeDialog, {
      mode: mode,
      initialVersion: detailsState.isCreateMode
        ? detailsState.info.version
        : undefined,
    });

    if (result.type !== 'confirm') {
      return;
    }

    const saveInfo = result.data as DefaulteTypeSaveInfo;
    const saveResult = await detailsState.saveAsNewVersion(saveInfo);
    if (isApiCallError(saveResult)) {
      toastService.error('Save Failed', saveResult.message, 8000);
      return;
    }

    syncDocToRuntime();

    toastService.success(
      detailsState.isCreateMode ? 'Default Type Created' : 'Default Type Saved',
      `Saved ${detailsState.info?.kind ?? 'default type'} "${detailsState.info?.rootId ?? ''}" successfully.`,
    );
  }

  /**
   * Creates the host used by oscd-edit-v2 and wires service event handling.
   * Must run before loading/creating docs so service can process edits.
   */
  function registerDocHanlder() {
    host = document.createElement('div');
    host.addEventListener('oscd-edit-v2', (event: CustomEvent) => {
      handleEditV2(event.detail.edit);
      docState.editCount++;
      detailsState.dirty = true;
    });
    service = new DataTypeService(null, host);
  }

  function syncDocToRuntime() {
    if (!detailsState.doc || !service) {
      return;
    }
    service.setDoc(detailsState.doc);
    docState.setDoc(detailsState.doc);
    docState.setEditCount(-1);
  }

  function setupCreateMode() {
    // initialize state for new default type
    detailsState.createEmpty({
      kind: createInfo.kind,
      instance: createInfo.instance,
      version: createInfo.version,
    });

    syncDocToRuntime();

    // create root type
    service.create(createInfo.kind, createInfo.instance, 'default-root-id');
  }

  async function loadVersion(version: Version) {
    detailsState.docIsReady = false;
    const loadResult = await detailsState.loadByVersion(version.version);
    if (isApiCallError(loadResult)) {
      toastService.error('Load Version Failed', loadResult.message, 8000);
      detailsState.docIsReady = true;
      return;
    }

    syncDocToRuntime();
    detailsState.docIsReady = true;
  }

  let typeDetailsConfig: DetailsConfig = $derived.by(() => {
    return {
      includeHeader: false,
      // Direct details can differ from all nested details opened from references.
      defaultTypeFeatureEnabled: false,
      propagateToChildren: {
        includeHeader: true,
        toggleEditModeSwitchDisabled: detailsState.isViewMode,
        defaultTypeFeatureEnabled: false,
      },
    } as DetailsConfig;
  });

  onMount(async () => {
    registerDocHanlder();

    if (id) {
      // load existing default type
      const loadResult = await detailsState.loadById(id);
      if (isApiCallError(loadResult)) {
        toastService.error('Load Failed', loadResult.message, 8000);
        detailsState.docIsReady = true;
        return;
      }
      syncDocToRuntime();
    } else if (createInfo) {
      setupCreateMode();
    } else {
      // should never happen due to runtime and compile-time checks
      throw new Error(
        "Invalid props: either 'id' or 'createInfo' must be provided.",
      );
    }

    detailsState.docIsReady = true;
  });
</script>

{#if detailsState.error}
  <p>{detailsState.error}</p>
{:else if detailsState.loading}
  <LinearProgress indeterminate />
{:else if detailsState.info}
  <div class="default-type">
    <div class="default-type__header">
      <div class="default-type__header-left">
        <TypeInfo
          kind={detailsState.info.kind}
          bind:typeId={detailsState.info.rootId}
          instance={detailsState.info.instance}
          canEditId={detailsState.isEditMode || detailsState.isCreateMode}
          onIdChange={() => (detailsState.dirty = true)}
        />

        <div class="default-type__version_info">
          <span class="default-type__version-info-label">Version</span>

          {#if detailsState.currentVersion && !detailsState.loading && detailsState.currentVersion.locked}
            <OscdTooltip
              content="This version is locked and cannot be edited."
              hoverDelay={250}
            >
              <Icon class="material-icons">lock</Icon>
            </OscdTooltip>
          {/if}

          <VersionSelector
            loadingCurrentVersion={detailsState.loading}
            versions={detailsState.versions}
            currentVersion={detailsState.currentVersion}
            onVersionChange={async (version) => await loadVersion(version)}
          />
        </div>

        <div class="default-type__version_info description">
          <span class="default-type__version-info-label">Description</span>
          <Textfield
            value={detailsState.info.description
              ? detailsState.info.description
              : 'No description'}
            disabled
            variant="outlined"
          />
        </div>
      </div>

      <div class="default-type__header-actions">
        <OscdTooltip
          content="This version is read-only. Switch to the latest version to make changes."
          hoverDelay={250}
          disabled={!detailsState.isViewMode}
          side="left"
        >
          <Button
            variant="unelevated"
            disabled={!detailsState.canSave}
            onclick={saveDefaultType}
          >
            {#if detailsState.saving}
              <CircularProgress
                style="height: 25px; width: 25px;"
                indeterminate
              />
              Saving...
            {:else}
              {detailsState.isCreateMode
                ? 'Create Default Type'
                : 'Save as New Version'}
            {/if}
          </Button>
        </OscdTooltip>
      </div>
    </div>

    <div class="default-type__content">
      {#if detailsState.docIsReady && service}
        <TypeDetails
          typeId={detailsState.loadedDocRootId}
          mode={detailsState.isViewMode ? 'view' : 'edit'}
          {service}
          {docState}
          config={typeDetailsConfig}
        />
      {/if}
    </div>
  </div>
{/if}

<style>
  .default-type__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .default-type__header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 0;
  }

  .default-type__version_info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .default-type__version-info-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #555;
  }

  .default-type__header-actions {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }
</style>
