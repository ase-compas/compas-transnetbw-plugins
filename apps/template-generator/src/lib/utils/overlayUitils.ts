import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import NewDataObjectType from '../components/dialogs/CreateDialogs/NewDataObjectType.svelte';
import { DataTypeKind, Mode, ObjectReferenceDetails } from '../domain';
import { openDrawer } from '../stores/drawerStackStore';
import DoTypeDrawer from '../components/drawers/doTypeDrawer/DoTypeDrawer.svelte';
import NewDataAttributeTypeDialog from '../components/dialogs/CreateDialogs/NewDataAttributeTypeDialog.svelte';
import NewEnumTypeDialog from '../components/dialogs/CreateDialogs/NewEnumTypeDialog.svelte';
import DaTypeDrawer from '../components/drawers/daTypeDrawer/DaTypeDrawer.svelte';
import EnumTypeDetailsDrawer from '../components/drawers/EnumTypeDetailsDrawer.svelte';
import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';

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
  openDialog(NewDataObjectType).then((result) => {
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
