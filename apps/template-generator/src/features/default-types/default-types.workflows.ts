import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
import type { DefaultType } from './types';
import { type DefaultTypesState } from './state/default-types.state.svelte';

export async function deleteDefaultTypeWorkflow(
  defaultType: DefaultType,
  state: DefaultTypesState,
): Promise<boolean> {
  const result = await openDialog(OscdConfirmDialog, {
    title: 'Confirm Delete Default Type',
    message: `Are you sure you want to delete default type "${defaultType.kind}:${defaultType.instance}"? This action cannot be undone. All versions will be deleted.`,
    confirmActionText: 'Delete',
    cancelActionText: 'Cancel',
    confirmActionColor: 'danger',
  });

  if (result.type !== 'confirm') {
    return false;
  }

  try {
    await state.delete(defaultType.kind, defaultType.instance);
    toastService.success(
      'Deleted',
      `Default type "${defaultType.kind}:${defaultType.instance}" was deleted successfully.`,
    );
    return true;
  } catch {
    const message =
      state.deleteError ??
      `Failed to delete default type "${defaultType.kind}:${defaultType.instance}".`;
    toastService.error('Delete Failed', message, 8000);
    return false;
  }
}
