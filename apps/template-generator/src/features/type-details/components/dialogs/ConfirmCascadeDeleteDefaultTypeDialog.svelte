<script lang="ts">
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import { OscdWarningIcon } from '@oscd-transnet-plugins/oscd-icons';

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
      <div class="warning-container">
        <div class="warning-text">
          <OscdWarningIcon fill="#B45309;" />
          <p>This action cannot be undone.</p>
        </div>
      </div>
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
