<script lang="ts">
  import { OscdConfirmDialog, OscdWarningBox } from '@oscd-transnet-plugins/oscd-component';

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

<OscdConfirmDialog
  title="Delete Type"
  confirmActionText="Delete All"
  cancelActionText="Cancel"
  maxWidth="760px"
  height="auto"
  bind:open
>
  {#snippet content()}
    <div class="content">
      <p>
        <strong>{rootTypeId}</strong> is part of a default type group. Deleting it will also remove all types of that default type:
      </p>
      <ul class="sub-type-list">
        {#each subTypeIds as subTypeId}
          <li>{subTypeId}</li>
        {/each}
      </ul>
      <OscdWarningBox message="This action cannot be undone." />
    </div>
  {/snippet}
</OscdConfirmDialog>

<style>
  .content {
    padding: 0;
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
