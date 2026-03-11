<script lang="ts">
  import { onMount } from 'svelte';
  import Autocomplete from '@smui-extra/autocomplete';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';
  import OscdBaseDialog from 'libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import CreateTypeForm, { type CreateTypeFormSubmitDetails } from './CreateTypeForm.svelte';
  import { getDataTypeService } from './type.service';
  import type { SimpleDataType, TypeKind } from './model';

  type Mode = 'select' | 'create';

  interface Props {
    open?: boolean;
    typeId: string;
    memberName: string;
  }

  let {
    open = $bindable(false),
    typeId,
    memberName,
  }: Props = $props();

  const service = getDataTypeService();

  let mode = $state<Mode>('select');
  let loading = $state<boolean>(true);
  let error = $state<string | null>(null);

  let assignableTypes = $state<SimpleDataType[]>([]);
  let selectedReferenceType = $state<SimpleDataType | undefined>(undefined);

  let createFormDetails = $state<CreateTypeFormSubmitDetails | null>(null);

  let refTypeKind = $state<TypeKind | null>(null);
  let refInstanceType = $state<string | null>(null);

  const selectNotAvailable = $derived(assignableTypes.length === 0);
  const isCreateValid = $derived(!!createFormDetails?.valid);

  let selectAutocompleteEl;

  const confirmDisabled = $derived(
    mode === 'select' ? !selectedReferenceType : !isCreateValid,
  );

  const getOptionLabel = (option: SimpleDataType) => option?.id ?? '';

  function loadDialogData(): void {
    loading = true;
    error = null;

    try {
      const sourceType = service.getById(typeId);
      const member = sourceType.members.find((item) => item.name === memberName);
      refTypeKind = member?.refKind ?? null;
      refInstanceType = member?.refInstance ?? null;

      assignableTypes = service.getAssignableTypes(typeId, memberName);

      if (assignableTypes.length === 0) {
        mode = 'create';
      }
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadDialogData();
    if(mode === 'select') {
      setTimeout(() => {
        selectAutocompleteEl?.focus?.();
      }, 200);
    }
  });

  function handleFormChange(details: CreateTypeFormSubmitDetails): void {
    createFormDetails = details;
  }

  function handleFormSubmit(details: CreateTypeFormSubmitDetails): void {
    handleFormChange(details);
    if (details.valid && details.instanceType === refInstanceType) {
      handleConfirm();
    }
  }

  function handleConfirm(): void {
    if (mode === 'select') {
      if (!selectedReferenceType?.id || !refInstanceType) {
        return;
      }

      closeDialog('confirm', {
        id: selectedReferenceType.id,
        instanceType: refInstanceType,
        mode,
      });
      return;
    }

    if (!isCreateValid || !createFormDetails?.instanceType) {
      return;
    }

    closeDialog('confirm', {
      id: createFormDetails.id,
      instanceType: createFormDetails.instanceType,
      createFromDefault: createFormDetails.createFromDefault,
      mode,
    });
  }
</script>

<OscdBaseDialog
  title="Add Reference"
  confirmActionText="ok"
  maxWidth="800px"
  bind:open
  onCancel={() => closeDialog('cancel')}
  onClose={() => closeDialog('exit')}
  onConfirm={handleConfirm}
  {confirmDisabled}
>
  {#snippet content()}
    <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
      {#if loading}
        <p>Loading references…</p>
      {:else if error}
        <p>{error}</p>
      {:else}
        <div style="display: flex; gap: 1rem; align-items: center;">
          <FormField>
            <Radio bind:group={mode} value="select" touch disabled={selectNotAvailable} />
            {#snippet label()}
              Select
            {/snippet}
          </FormField>
          <FormField>
            <Radio bind:group={mode} value="create" touch />
            {#snippet label()}
              Create
            {/snippet}
          </FormField>
        </div>

        {#if selectNotAvailable}
          <p>No compatible DataTypes are available. Create a new DataType to continue.</p>
        {/if}

        {#if mode === 'select'}
          <Autocomplete
            bind:this={selectAutocompleteEl}
            label="Select Type"
            bind:value={selectedReferenceType}
            options={assignableTypes}
            showMenuWithNoInput={true}
            {getOptionLabel}
            onkeydown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                if (selectedReferenceType) {
                  handleConfirm();
                }
              }
            }}
          >
            {#snippet match(item: SimpleDataType)}
              <div>{item.id}</div>
            {/snippet}
          </Autocomplete>
        {:else if refTypeKind}
          <CreateTypeForm
            typeKind={refTypeKind}
            instanceType={refInstanceType}
            canChooseInstaceType={false}
            onChange={handleFormChange}
            onSubmit={handleFormSubmit}
          />
        {/if}
      {/if}
    </div>
  {/snippet}
</OscdBaseDialog>
