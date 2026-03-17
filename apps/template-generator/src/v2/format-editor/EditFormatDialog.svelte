<script lang="ts">
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import OscdBaseDialog from 'libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
  import IdFormatEditor from './IdFormatEditor.svelte';
  import type { IdComponent } from './types';
  import type { IdFormat } from '@oscd-transnet-plugins/oscd-services/id-generator';
  import { setIdFormatEditorState } from './format-editor.state.svelte';
  import { onMount } from 'svelte';

  const state = setIdFormatEditorState();

  interface Props {
    open?: boolean;
    components: IdComponent[];
    format: IdFormat;
    context: any[];
  }

  let {
    open = $bindable(false),
    components,
    format,
    context,
  }: Props = $props();

  onMount(() => {
    state.initState(components, format, context);
  });
</script>

<OscdBaseDialog
  title="Edit ID Format"
  width="95vw"
  maxWidth="95vw"
  height="95vh"
  maxHeight="95vh"
  confirmActionText="Ok"
  bind:open
  onConfirm={() => {
    closeDialog('confirm', { format: state.idFormat });
  }}
  onCancel={() => closeDialog('cancel')}
  onClose={() => closeDialog('exit')}
>
  {#snippet content()}
    <div style="padding: 1rem 0;">
      <IdFormatEditor />
    </div>
  {/snippet}
</OscdBaseDialog>
