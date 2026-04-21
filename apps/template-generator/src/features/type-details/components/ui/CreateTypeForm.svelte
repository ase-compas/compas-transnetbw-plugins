<script lang="ts">
  import { onMount } from 'svelte';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import InstanceAutocomplete from './InstanceAutocomplete.svelte';
  import type { InstanceDetails, TypeKind } from '../../../../shared/model';
  import TypeIdInput from './TypeIdInput.svelte';
  import type { DataTypeService } from '../../services/type.service';

  export interface CreateTypeFormSubmitDetails {
    id: string;
    instanceType?: string;
    createFromDefault: boolean;
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
    createFromDefault?: boolean;
    onChange?: (event: CreateTypeFormSubmitDetails) => void;
    onSubmit?: (event: CreateTypeFormSubmitDetails) => void;
    generateId?: (instance: string) => string | GenerateIdResult | undefined;

    service: DataTypeService;
  }

  let {
    typeKind,

    instanceType,
    canChooseInstaceType = true,

    showCreateFromDefaultOption = false,
    createFromDefault = $bindable(false),
    onChange = (_event: CreateTypeFormSubmitDetails) => {},
    onSubmit = (_event: CreateTypeFormSubmitDetails) => {},
    generateId = (_instance: string) => '',
    service,
  }: Props = $props();

  let selectedInstance = $state<InstanceDetails | undefined>(undefined);
  let typeId = $state<string>('');
  let idInputEl = $state(undefined);
  let instanceTypeSelectEl = $state(undefined);

  let isTypeIdValid = $state<boolean>(false);
  let isFormValid = $derived<boolean>(!!selectedInstance && isTypeIdValid);
  let generateFeedback = $state<string>('');

  let loading = $state<boolean>(false);

  const formEvent = $derived<CreateTypeFormSubmitDetails>({
    id: typeId,
    instanceType: selectedInstance?.instance,
    createFromDefault,
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
      if (selectedInstance) {
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
    autoGenerateId(selectedInstance?.instance);
  });

  function autoGenerateId(instance: string | undefined, fromUserClick = false) {
    generateFeedback = '';
    if (!generateId || !instance) {
      return;
    }

    const generationResult = generateId(instance);
    const normalizedResult = typeof generationResult === 'string'
      ? { id: generationResult }
      : (generationResult ?? {});

    if (normalizedResult.id) {
      typeId = normalizedResult.id;
      return;
    }

    if (fromUserClick) {
      generateFeedback = normalizedResult.message ?? 'Unable to auto-generate an ID.';
    }
  }

  $effect(() => {
    if (selectedInstance) {
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
      required
      disabled={!canChooseInstaceType && !!instanceType}
      {service}
    />

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

    {#if showCreateFromDefaultOption && !!selectedInstance}
      <div class="create-from-default-option">
        <FormField align="start">
          <Checkbox bind:checked={createFromDefault} />
          {#snippet label()}
            <span>Create from Default</span>
          {/snippet}
        </FormField>
      </div>
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

  .create-from-default-option {
    margin-top: 0.5rem;
  }
</style>
