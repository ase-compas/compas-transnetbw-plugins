<script lang="ts">
  import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';

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

<OscdConfirmDialog
  title="Customize Default"
  confirmActionText="Customize"
  maxWidth="760px"
  height="auto"
  bind:open
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
</style>
