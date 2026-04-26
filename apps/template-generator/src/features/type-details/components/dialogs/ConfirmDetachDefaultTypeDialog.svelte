<script lang="ts">
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';

  interface Props {
    open?: boolean;
    typeId: string;
    defaultRootId: string;
    defaultVersion: string;
  }

  let {
    open = $bindable(false),
    typeId,
    defaultRootId,
    defaultVersion,
  }: Props = $props();
</script>

<OscdBaseDialog
  title="Customize Default"
  confirmActionText="Customize"
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
        <strong>{typeId}</strong> is currently a read-only default type (v{defaultVersion}).
      </p>
      <p>
        Customizing it converts it into a regular local type that you can freely edit. It will no longer receive default updates.
      </p>
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
</style>
