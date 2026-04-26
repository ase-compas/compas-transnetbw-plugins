<script lang="ts">
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { OscdBaseDialog, OscdWarningBox } from '@oscd-transnet-plugins/oscd-component';

  interface Props {
    open?: boolean;
    rootTypeId: string;
    subTypeIds: string[];
  }

  let {
    open = $bindable(false),
    rootTypeId,
    subTypeIds,
  }: Props = $props();
</script>

<OscdBaseDialog
  title="Delete Type"
  confirmActionText="Delete All"
  cancelActionText="Cancel"
  maxWidth="760px"
  height="auto"
  bind:open
  onConfirm={() => closeDialog('confirm')}
  onCancel={() => closeDialog('cancel')}
  onClose={() => closeDialog('exit')}
>
  {#snippet content()}
    <div class="content">
      <p>
        <strong>{rootTypeId}</strong> is part of a default type group. Deleting it will also remove the following related types:
      </p>
      <ul class="sub-type-list">
        {#each subTypeIds as subTypeId}
          <li>{subTypeId}</li>
        {/each}
      </ul>
      <OscdWarningBox message="This action cannot be undone." />
    </div>
  {/snippet}
</OscdBaseDialog>

<style>
  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    line-height: 1.45;
  }

  p {
    margin: 0;
  }

  .sub-type-list {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    list-style: disc;
  }

  .sub-type-list li {
    margin: 0.25rem 0;
    font-family: monospace;
    font-size: 0.9em;
  }
</style>
