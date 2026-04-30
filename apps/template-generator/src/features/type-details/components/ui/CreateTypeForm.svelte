<script lang="ts">
  import { onMount } from 'svelte';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';
  import { OscdWarningBox } from '@oscd-transnet-plugins/oscd-component';
  import InstanceAutocomplete from './InstanceAutocomplete.svelte';
  import type { InstanceDetails, TypeKind } from '../../../../shared/model';
  import TypeIdInput from './TypeIdInput.svelte';
  import DefaultTypePreview from './DefaultTypePreview.svelte';
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
    canChooseInstanceType?: boolean;

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
    canChooseInstanceType = true,

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
    if (!canChooseInstanceType) {
      canChooseInstanceType = selectedInstance && canChooseInstanceType;
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

  function handleInstanceChange(details: InstanceDetails | null | undefined) {
    selectedInstance = details ?? undefined;

    if(!!selectedInstance && showCreateFromDefaultOption && mode === 'load-default') {
      fetchDefaultPreviewData(details.instance);
    } else {
      loadDefaultPreview = null;
      loadDefaultError = '';
      loadingDefaultPreview = false;
    }
  }

  async function fetchDefaultPreviewData(instance: string) {
    loadDefaultError = '';
    loadDefaultPreview = null;
    loadingDefaultPreview = true;

    try {
      const preview = await service.getApplySingleDefaultTypePreview(typeKind, instance);
      loadDefaultPreview = preview;
    } catch (error) {
      loadDefaultError = error instanceof Error ? error.message : String(error);
    } finally {
      loadingDefaultPreview = false;
    }
  }

  $effect(() => {
    if (selectedInstance && (!showCreateFromDefaultOption || mode === 'create')) {
      autoGenerateId(selectedInstance.instance);
    }
  });
</script>

{#if !loading}
  <form onsubmit={handleSubmit}>
    <InstanceAutocomplete
      bind:this={instanceTypeSelectEl}
      {typeKind}
      initialInstanceType={instanceType}
      bind:value={selectedInstance}
      onChange={(value) => handleInstanceChange(value)}
      required
      disabled={!canChooseInstanceType && !!instanceType}
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
      <DefaultTypePreview
        preview={loadDefaultPreview}
        loading={loadingDefaultPreview}
        error={loadDefaultError}
        {allowUseExistingDefault}
      />
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
</style>

