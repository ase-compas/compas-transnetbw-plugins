<script lang="ts">
  /**
   * Dialog for creating a new default type.
   * Allows the user to select the kind and instance of the default type,
   * and checks if a default type with the same kind and instance already exists.
   * If it does, the user can choose to open the existing default type instead of creating a new one.
   */
  import Select, { Option } from '@smui/select';
  import OscdBaseDialog from '../../../../../../libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
  import { TypeKind, type InstanceDetails } from '../../../shared/model';
  import InstanceAutocomplete from '../../type-details/components/ui/InstanceAutocomplete.svelte';
  import { DataTypeService } from '../../type-details/services/type.service';
  import Button from '@smui/button';
  import OscdWarningIcon from 'libs/oscd-icons/src/oscd-warning-icon/OscdWarningIcon.svelte';
  import Textfield from '@smui/textfield';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import HelperText from '@smui/textfield/helper-text';
  import { defaultTypeService } from '../../../bootstrap';
  import type { DefaultType } from '../types';
  import type { CreateDefaultTypeDialogResult } from '../types';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import CircularProgress from '@smui/circular-progress';

  const DEFAULT_INITIAL_VERSION = '1.0.0';

  interface Props {
    open?: boolean;
  }

  let { open = $bindable(false) }: Props = $props();

  let kind: TypeKind | undefined = $state(undefined);
  let instance: string | undefined = $state(undefined);
  let initialVersion: string = $state(DEFAULT_INITIAL_VERSION);
  let initialVersionInvalid: boolean = $state(false);

  let existingDefaultType: DefaultType | null = $state(null); // latest version of existing default type with same kind and instance
  let loading: boolean = $state(false);
  let error: string | null = $state(null);

  function handleConfirm() {
    let result: CreateDefaultTypeDialogResult;
    if (existingDefaultType) {
      result = {
        action: 'open-existing',
        existingDefaultTypeId: existingDefaultType.id,
      };
    } else {
      result = {
        action: 'create',
        kind: kind!,
        instance: instance!,
        initialVersion: initialVersion,
      };
    }
    closeDialog('confirm', result);
  }

  function handleClose() {
    closeDialog('cancel');
  }

  async function handleInstanceChange(details: InstanceDetails) {
    instance = details.instance;
    initialVersion = DEFAULT_INITIAL_VERSION;
    initialVersionInvalid = false;
    checkDefaultTypeExists();
  }

  async function checkDefaultTypeExists() {
    error = null;
    existingDefaultType = null;
    loading = true;

    const snapshotKind = $state.snapshot(kind);
    const snapshotInstance = $state.snapshot(instance);
    if (!snapshotKind || !snapshotInstance) {
      loading = false;
      return;
    }

    try {
      const result = await defaultTypeService.getLatestByKindAndInstance(
        snapshotKind,
        snapshotInstance,
      );
      if (result !== null) {
        existingDefaultType = result;
        initialVersion = result.version;
      } else {
        existingDefaultType = null;
      }
    } catch (caughtError) {
      console.error('Error checking for existing default type:', caughtError);
      existingDefaultType = null;
      error = 'Failed to check for existing default type. Please try again.';
      toastService.error(
        'Default Type Check Failed',
        'Failed to check for existing default type. Please try again.',
      );
    } finally {
      loading = false;
    }
  }

  const valid = $derived(
    !loading &&
      error === null &&
      (!!existingDefaultType ||
        (!initialVersionInvalid && !!kind && !!instance)),
  );
</script>

<OscdBaseDialog
  title="Create new default type"
  confirmActionText={!!existingDefaultType ? 'Open existing' : 'Create'}
  maxWidth="700px"
  maxHeight="800px"
  bind:open
  onConfirm={handleConfirm}
  onCancel={handleClose}
  onClose={handleClose}
  confirmDisabled={!valid}
>
  {#snippet content()}
    <div class="content">
      <Select
        bind:value={kind}
        label="Type"
        required={true}
        style="width: 100%;"
      >
        <Option value={TypeKind.LNodeType}>LNodeType</Option>
        <Option value={TypeKind.DOType}>DOType</Option>
        <Option value={TypeKind.DAType}>DAType</Option>
        <Option value={TypeKind.EnumType}>EnumType</Option>
      </Select>
      <InstanceAutocomplete
        label="Instance"
        typeKind={kind}
        onChange={handleInstanceChange}
        disabled={!kind}
        required={true}
        service={new DataTypeService(null, null)}
      />

      <Textfield
        label="Initial Version"
        disabled={instance === undefined || !!existingDefaultType}
        input$placeholder={DEFAULT_INITIAL_VERSION}
        bind:value={initialVersion}
        bind:invalid={initialVersionInvalid}
        updateInvalid
        input$pattern="[1-9]\d*\.[0-9]+\.[0-9]+"
      >
        {#snippet helper()}
          <HelperText validationMsg>
            Enter a version in the format Major.Minor.Patch (e.g. 1.0.0). Major must be 1 or higher.
          </HelperText>
        {/snippet}
      </Textfield>

      {#if loading}
        <div class="loading-container">
          <CircularProgress style="height: 32px; width: 32px;" indeterminate />
          <p>Checking for existing default type...</p>
        </div>
      {/if}

      {#if error}
        <div class="warning-container">
          <div class="warning-text">
            <OscdWarningIcon fill="#B45309;" />
            <p>{error}</p>
          </div>
        </div>
      {/if}

      {#if !!existingDefaultType}
        <div class="warning-container">
          <div class="warning-text">
            <OscdWarningIcon fill="#B45309;" />
            <p>A defafult type with this kind and instance already exists.</p>
          </div>
          <Button variant="unelevated" onclick={handleConfirm}
            >Open existing default type</Button
          >
        </div>
      {/if}
    </div>
  {/snippet}
</OscdBaseDialog>

<style>
  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .warning-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    background-color: #fffbeb;
    border: 1px solid #fcd34d;
    padding: 1rem;
    border-radius: 4px;
  }

  .warning-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
