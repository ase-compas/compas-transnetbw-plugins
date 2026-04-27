<script lang="ts">
  import { onMount } from 'svelte';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';
  import CircularProgress from '@smui/circular-progress';
  import { OscdWarningBox } from '@oscd-transnet-plugins/oscd-component';
  import InstanceAutocomplete from './InstanceAutocomplete.svelte';
  import type { InstanceDetails, TypeKind } from '../../../../shared/model';
  import TypeIdInput from './TypeIdInput.svelte';
  import type {
    ApplySingleDefaultTypePreview,
    DataTypeService,
  } from '../../services/type.service';
  import type { ApplyScenario } from '../../services/default-type-manager-service';

  export type CreateTypeFormMode = 'create' | 'load-default';

  export interface CreateTypeFormSubmitDetails {
    id: string;
    instanceType?: string;
    mode: CreateTypeFormMode;
    createFromDefault: boolean;
    defaultScenario?: ApplyScenario;
    valid: boolean;
  }

  export interface GenerateIdResult {
    id?: string;
    message?: string;
  }

  interface Props {
    typeKind: TypeKind;

    instanceType?: string;
    canChooseInstaceType?: boolean;

    showCreateFromDefaultOption?: boolean;
    allowUseExistingDefault?: boolean;
    onChange?: (event: CreateTypeFormSubmitDetails) => void;
    onSubmit?: (event: CreateTypeFormSubmitDetails) => void;
    generateId?: (instance: string) => GenerateIdResult;

    service: DataTypeService;
  }

  let {
    typeKind,

    instanceType,
    canChooseInstaceType = true,

    showCreateFromDefaultOption = false,
    allowUseExistingDefault = false,
    onChange = (_event: CreateTypeFormSubmitDetails) => {},
    onSubmit = (_event: CreateTypeFormSubmitDetails) => {},
    generateId = (_instance: string) => ({ }),
    service,
  }: Props = $props();

  let selectedInstance = $state<InstanceDetails | undefined>(undefined);
  let typeId = $state<string>('');
  let mode = $state<CreateTypeFormMode>('create');

  let idInputEl = $state(undefined);
  let instanceTypeSelectEl = $state(undefined);

  let isTypeIdValid = $state<boolean>(false);
  let generateFeedback = $state<string>('');

  let loadDefaultPreview = $state<ApplySingleDefaultTypePreview | null>(null);
  let loadDefaultError = $state<string>('');
  let loadingDefaultPreview = $state<boolean>(false);
  let loadDefaultRequestId = 0;

  let loading = $state<boolean>(false);

  let createFromDefault = $derived<boolean>(mode === 'load-default');
  let canApplyLoadDefault = $derived.by(() => {
    if (!loadDefaultPreview?.plan) {
      return false;
    }

    if (loadDefaultPreview.plan.scenario === 'REMOVE_LOCAL_DEFAULT') {
      return false;
    }

    if (!allowUseExistingDefault && loadDefaultPreview.plan.scenario === 'USE_LOCAL_DEFAULT') {
      return false;
    }

    return true;
  });

  let isFormValid = $derived.by(() => {
    if (!selectedInstance) {
      return false;
    }

    if (!showCreateFromDefaultOption || mode === 'create') {
      return isTypeIdValid;
    }

    return !loadingDefaultPreview && canApplyLoadDefault;
  });

  let effectiveId = $derived.by(() => {
    if (mode === 'load-default') {
      return loadDefaultPreview?.plan.effectiveRootId ?? '';
    }

    return typeId;
  });

  const formEvent = $derived<CreateTypeFormSubmitDetails>({
    id: effectiveId,
    instanceType: selectedInstance?.instance,
    mode,
    createFromDefault,
    defaultScenario: loadDefaultPreview?.plan.scenario,
    valid: isFormValid,
  });

  function handleSubmit(e: Event) {
    e.preventDefault();
    onSubmit(formEvent);
  }

  $effect(() => {
    onChange(formEvent);
  });

  function focusInput() {
    idInputEl?.focus?.();
  }

  function focusSelect() {
    instanceTypeSelectEl?.focus?.();
  }

  function focusElement() {
    setTimeout(() => {
      if (selectedInstance && (!showCreateFromDefaultOption || mode === 'create')) {
        focusInput();
      } else {
        focusSelect();
      }
    }, 350);
  }

  onMount(() => {
    loading = true;
    if (!canChooseInstaceType) {
      canChooseInstaceType = selectedInstance && canChooseInstaceType;
    }
    loading = false;
    focusElement();
    if (!showCreateFromDefaultOption || mode === 'create') {
      autoGenerateId(selectedInstance?.instance);
    }
  });

  function autoGenerateId(instance: string | undefined, fromUserClick = false) {
    generateFeedback = '';
    if (!generateId || !instance) {
      return;
    }

    const generationResult = generateId(instance);

    if (generationResult.id) {
      typeId = generationResult.id;
      return;
    }

    if (fromUserClick) {
      generateFeedback = generationResult.message ?? 'Unable to auto-generate an ID.';
    }
  }

  $effect(() => {
    if (selectedInstance && (!showCreateFromDefaultOption || mode === 'create')) {
      autoGenerateId(selectedInstance.instance);
    }
  });

  $effect(() => {
    if (!showCreateFromDefaultOption || mode !== 'load-default') {
      loadDefaultPreview = null;
      loadDefaultError = '';
      loadingDefaultPreview = false;
      return;
    }

    const selected = selectedInstance?.instance;
    if (!selected) {
      loadDefaultPreview = null;
      loadDefaultError = '';
      loadingDefaultPreview = false;
      return;
    }

    const currentRequestId = ++loadDefaultRequestId;
    loadDefaultError = '';
    loadDefaultPreview = null;
    loadingDefaultPreview = true;

    service
      .getApplySingleDefaultTypePreview(typeKind, selected)
      .then((preview) => {
        if (currentRequestId !== loadDefaultRequestId) {
          return;
        }
        loadDefaultPreview = preview;
      })
      .catch((error) => {
        if (currentRequestId !== loadDefaultRequestId) {
          return;
        }
        loadDefaultError = error instanceof Error ? error.message : String(error);
      })
      .finally(() => {
        if (currentRequestId !== loadDefaultRequestId) {
          return;
        }
        loadingDefaultPreview = false;
      });
  });

  function getLatestVersion(preview: ApplySingleDefaultTypePreview): string {
    let version = '-';

    if (preview.plan.scenario === 'ADD_DB_DEFAULT' || preview.plan.scenario === 'UPGRADE_TO_DB_DEFAULT') {
      version = preview.plan.dbBefore?.version ?? '-';
    } else if (preview.plan.scenario === 'USE_LOCAL_DEFAULT') {
      version = preview.plan.localBefore?.version ?? '-';
    }

    return version;
  }
</script>

{#if !loading}
  <form onsubmit={handleSubmit}>
    <InstanceAutocomplete
      bind:this={instanceTypeSelectEl}
      {typeKind}
      initialInstanceType={instanceType}
      bind:value={selectedInstance}
      required
      disabled={!canChooseInstaceType && !!instanceType}
      {service}
    />

    {#if showCreateFromDefaultOption && !!selectedInstance}
      <div class="default-mode-option">
        <FormField>
          <Radio bind:group={mode} value="create" touch />
          {#snippet label()}
            Create new type
          {/snippet}
        </FormField>
        <FormField>
          <Radio bind:group={mode} value="load-default" touch />
          {#snippet label()}
            Load default
          {/snippet}
        </FormField>
      </div>
    {/if}

    {#if !showCreateFromDefaultOption || mode === 'create'}
      <TypeIdInput
        bind:this={idInputEl}
        bind:typeId
        bind:valid={isTypeIdValid}
        {generateFeedback}
        onIdInput={() => {
          generateFeedback = '';
        }}
        onIdBlur={() => {
          generateFeedback = '';
        }}
        showErrorsOnInput
        disabled={!selectedInstance}
        generateId={generateId
          ? () => autoGenerateId(selectedInstance?.instance, true)
          : undefined}
        {service}
      />
    {:else}
      {#if loadingDefaultPreview}
        <div class="loading-default-container">
          <CircularProgress style="height: 18px; width: 18px;" indeterminate />
          <span>Loading latest default...</span>
        </div>
      {/if}

      {#if loadDefaultError}
        <OscdWarningBox message={loadDefaultError} />
      {/if}

      {#if loadDefaultPreview && !loadDefaultError}
        <p class="latest-version-line">
          <span class="latest-version-label">Latest Version:</span>
          <span class="latest-version-value">{getLatestVersion(loadDefaultPreview)}</span>
        </p>

        {#if loadDefaultPreview.plan.scenario === 'REMOVE_LOCAL_DEFAULT'}
          <OscdWarningBox message="No default exists for this type." />
        {:else if loadDefaultPreview.plan.scenario === 'USE_LOCAL_DEFAULT' && !allowUseExistingDefault}
          <OscdWarningBox message="Latest default is already loaded. A default type can only be added once." />
        {/if}
      {/if}
    {/if}

    <button type="submit" style="display: none" aria-label="submit button"
    ></button>
  </form>
{/if}

<style>
  form {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }

  .default-mode-option {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 0.5rem;
  }

  .loading-default-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #475569;
    font-size: 0.9rem;
  }

  .latest-version-line {
    margin: 0;
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
  }

  .latest-version-label {
    color: #475569;
    font-weight: 500;
  }

  .latest-version-value {
    color: #1e293b;
    font-weight: 600;
  }
</style>
