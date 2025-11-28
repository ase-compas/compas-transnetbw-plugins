import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import NewDataObjectTypeDialog from '../components/dialogs/CreateDialogs/NewDataObjectTypeDialog.svelte';
import { DataTypeKind, type Mode, type ObjectReferenceDetails } from '../domain';
import { openDrawer } from '@oscd-transnet-plugins/oscd-services/drawer';
import DoTypeDrawer from '../components/drawers/doTypeDrawer/DoTypeDrawer.svelte';
import NewDataAttributeTypeDialog from '../components/dialogs/CreateDialogs/NewDataAttributeTypeDialog.svelte';
import NewEnumTypeDialog from '../components/dialogs/CreateDialogs/NewEnumTypeDialog.svelte';
import DaTypeDrawer from '../components/drawers/daTypeDrawer/DaTypeDrawer.svelte';
import EnumTypeDetailsDrawer from '../components/drawers/EnumTypeDetailsDrawer.svelte';
import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
import ChooseInstanceTypeDialog from '../components/dialogs/ChooseInstanceTypeDialog.svelte';
import { toastService } from '@oscd-transnet-plugins/oscd-services/toast'

export function openDataObjectTypeDrawer(
  mode: Mode,
  typeId: string,
  cdc?: string
) {
  openDrawer({
    component: DoTypeDrawer,
    title: 'DO Details',
    props: { mode, typeId, cdc },
  });
}


export type UnsavedChangesResult =
  | { action: 'save' }
  | { action: 'discard' }
  | { action: 'cancel' }

export async function confirmUnsavedChanges(): Promise<UnsavedChangesResult> {
  const result = await openDialog(OscdConfirmDialog, {
    title: 'Unsaved Changes',
    message: 'You have unsaved changes. Do you want to save them?',
    confirmActionText: 'Save',
    cancelActionText: 'Discard'
  })
  if (result.type === 'confirm') {
    return { action: 'save' };
  } else if (result.type === 'cancel') {
    return { action: 'discard' };
  } else {
    return { action: 'cancel' };
  }
}

export function openDataAttributeTypeDrawer(
  mode: Mode,
  typeId: string,
  instanceType?: string
) {
  openDrawer({
    component: DaTypeDrawer,
    title: 'DA Details',
    props: { mode, typeId, instanceType },
  });
}

export function openDataEnumTypeDrawer(
  mode: Mode,
  typeId: string,
  instanceType?: string
) {
  openDrawer({
    component: EnumTypeDetailsDrawer,
    title: 'Enum Details',
    props: { mode, typeId, instanceTypeId: instanceType },
  });
}

export function openCreateDataObjectTypeDialog() {
  openDialog(NewDataObjectTypeDialog).then((result) => {
    if (result.type === 'confirm') {
      openDataObjectTypeDrawer('create', result.data.id, result.data.cdc);
    }
  });
}

export function openCreateDataAttributeTypeDialog() {
  openDialog(NewDataAttributeTypeDialog).then((result) => {
    if (result.type === 'confirm') {
      openDataAttributeTypeDrawer(
        'create',
        result.data.id,
        result.data.instanceType
      );
    }
  });
}

export function openCreateEnumTypeDialog() {
  openDialog(NewEnumTypeDialog).then((result) => {
    if (result.type === 'confirm') {
      openDataEnumTypeDrawer(
        'create',
        result.data.id,
        result.data.instanceType,
      );
    }
  });
}

export function openReferencedTypeDrawer(
  objRef: ObjectReferenceDetails,
  mode: Mode
) {
  if (!objRef || !objRef.typeRef || objRef.typeRef === '') return;
  const refId = objRef.typeRef;

  if (objRef.meta.refTypeKind === DataTypeKind.DOType) {
    openDataObjectTypeDrawer(mode, refId);
  } else if (objRef.meta.refTypeKind === DataTypeKind.DAType) {
    openDataAttributeTypeDrawer(mode, refId);
  } else if (objRef.meta.refTypeKind === DataTypeKind.EnumType) {
    openDataEnumTypeDrawer(mode, refId);
  }
}

export async function openSelectInstanceTypeDialog(typeKind: DataTypeKind, text?: string): Promise<string> {
  const result = await openDialog(ChooseInstanceTypeDialog, {type: typeKind, text: text});
  if(result.type === 'confirm') {
    return result.data.instanceType;
  }
}


export function setDefaultTypeSuccessNotification(id: string, typeKind: DataTypeKind, instanceType: string) {
  toastService.success(
        "Default Set",
        `“${id}” has been set as the default for ${typeKind}:${instanceType}.`,
         5000
      );
}

export function setDefaultTypeErrorNotification(id: string, errMsg?: string) {
  toastService.error(
    "Set Default Failed",
    `Failed to set “${id}” as the default. ${errMsg ?? ""}`,
    8000
  );
}

export function applyDefaultWarningNotification(errMsg?: string) {
  toastService.warn(
    "Apply Default Failed",
    `Could not apply default type. ${errMsg ?? ""}`,
    6000
  );
}
