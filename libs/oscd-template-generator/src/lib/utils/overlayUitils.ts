import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import NewDataObjectTypeDialog from '../components/dialogs/CreateDialogs/NewDataObjectTypeDialog.svelte';
import {
  DataTypeKind,
  type Mode,
  type ObjectReferenceDetails,
} from '../domain';
import { openDrawer } from '@oscd-transnet-plugins/oscd-services/drawer';
import DoTypeDrawer from '../components/drawers/doTypeDrawer/DoTypeDrawer.svelte';
import NewDataAttributeTypeDialog from '../components/dialogs/CreateDialogs/NewDataAttributeTypeDialog.svelte';
import NewEnumTypeDialog from '../components/dialogs/CreateDialogs/NewEnumTypeDialog.svelte';
import DaTypeDrawer from '../components/drawers/daTypeDrawer/DaTypeDrawer.svelte';
import EnumTypeDetailsDrawer from '../components/drawers/EnumTypeDetailsDrawer.svelte';
import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
import ChooseInstanceTypeDialog from '../components/dialogs/ChooseInstanceTypeDialog.svelte';
import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
import { getDataTypeService } from '../services';
import { AddReferenceDialog, TypeRenameDialog } from '../components';
import { get } from 'svelte/store';
import type { ObjectReferenceStore } from '../stores';

export function openDataObjectTypeDrawer(
  mode: Mode,
  typeId: string,
  cdc?: string,
) {
  openDrawer({
    component: DoTypeDrawer,
    title: `[DO] ${typeId}`,
    props: { mode, typeId, cdc },
  });
}

export type UnsavedChangesResult =
  | { action: 'save' }
  | { action: 'discard' }
  | { action: 'cancel' };

export async function confirmUnsavedChanges(): Promise<UnsavedChangesResult> {
  const result = await openDialog(OscdConfirmDialog, {
    title: 'Unsaved Changes',
    message: 'You have unsaved changes. Do you want to save them?',
    confirmActionText: 'Save',
    cancelActionText: 'Discard',
  });
  if (result.type === 'confirm') {
    return { action: 'save' };
  } else if (result.type === 'cancel') {
    return { action: 'discard' };
  } else {
    return { action: 'cancel' };
  }
}

export async function handleDeleteTypeWorkflow(
  kind: DataTypeKind,
  id: string,
): Promise<boolean> {
  const confirmed = await confirmDeleteType(kind, id);
  if (!confirmed) return false;

  try {
    await getDataTypeService().deleteType(kind, id);
    deleteTypeSuccessNotification(kind, id);
    return true;
  } catch (error) {
    deleteTypeErrorNotification(kind, id);
    return false;
  }
}

export async function handleRenameTypeWorkflow(
  kind: DataTypeKind,
  id: string
): Promise<string | null> {
  const result = await openDialog(TypeRenameDialog, {
    typeId: id,
    typeKind: kind,
  });
  if (result.type !== 'confirm') {
    return null;
  }

  const newId = result.data.newTypeId;

  try {
    await getDataTypeService().renameType(kind, id, newId);
    toastService.success(
      'Renamed',
      `${dataTypeKindToText(kind)} "${id}" was renamed to "${newId}".`,
    );
    return newId;
  } catch (error) {
    toastService.error(
      'Rename Failed',
      `Failed to rename ${dataTypeKindToText(kind)} "${id}" to "${newId}".`,
      8000,
    );
    return null;
  }
}

export async function confirmDeleteType(
  kind: DataTypeKind,
  id: string,
): Promise<boolean> {
  const typeText = dataTypeKindToText(kind);

  const result = await openDialog(OscdConfirmDialog, {
    title: `Confirm Delete ${typeText}`,
    message: `Are you sure you want to delete this type "${id}"? This action cannot be undone. All references to this type will be removed.`,
    confirmActionText: 'Delete',
    cancelActionText: 'Cancel',
    confirmActionColor: 'danger',
  });

  return result.type === 'confirm';
}

export function deleteTypeSuccessNotification(
  typeKind: DataTypeKind,
  id: string,
) {
  const typeText = dataTypeKindToText(typeKind);
  toastService.success(
    'Deleted',
    `${typeText} "${id}" was deleted successfully.`,
  );
}

export function deleteTypeErrorNotification(
  typeKind: DataTypeKind,
  id: string,
) {
  const typeText = dataTypeKindToText(typeKind);
  toastService.error(
    'Delete Failed',
    `Failed to delete ${typeText} "${id}".`,
    8000,
  );
}

export function openDataAttributeTypeDrawer(
  mode: Mode,
  typeId: string,
  instanceType?: string,
) {
  openDrawer({
    component: DaTypeDrawer,
    title: `[DA] ${typeId}`,
    props: { mode, typeId, instanceType },
  });
}

export function openDataEnumTypeDrawer(
  mode: Mode,
  typeId: string,
  instanceType?: string,
) {
  openDrawer({
    component: EnumTypeDetailsDrawer,
    title: `[Enum] ${typeId}`,
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
        result.data.instanceType,
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
  mode: Mode,
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

export async function openSelectInstanceTypeDialog(
  typeKind: DataTypeKind,
  text?: string,
): Promise<string> {
  const result = await openDialog(ChooseInstanceTypeDialog, {
    type: typeKind,
    text: text,
  });
  if (result.type === 'confirm') {
    return result.data.instanceType;
  }
}

export function setDefaultTypeSuccessNotification(
  id: string,
  typeKind: DataTypeKind,
  instanceType: string,
) {
  toastService.success(
    'Default Set',
    `“${id}” has been set as the default for ${typeKind}:${instanceType}.`,
    5000,
  );
}

export function setDefaultTypeErrorNotification(id: string, errMsg?: string) {
  toastService.error(
    'Set Default Failed',
    `Failed to set “${id}” as the default. ${errMsg ?? ''}`,
    8000,
  );
}

export function applyDefaultWarningNotification(errMsg?: string) {
  toastService.warn(
    'Apply Default Failed',
    `Could not apply default type. ${errMsg ?? ''}`,
    6000,
  );
}

function dataTypeKindToText(kind: DataTypeKind): string {
  let typeText: string;
  switch (kind) {
    case DataTypeKind.DOType:
      typeText = 'Data Object Type';
      break;
    case DataTypeKind.DAType:
      typeText = 'Data Attribute Type';
      break;
    case DataTypeKind.EnumType:
      typeText = 'Enum Type';
      break;
    case DataTypeKind.LNodeType:
      typeText = 'Logical Node Type';
      break;
    default:
      typeText = 'Type';
  }
  return typeText;
}

export async function openDataTypeDrawer(
  typeKind: DataTypeKind,
  mode: Mode,
  typeId: string,
  instanceType?: string
) {
  switch (typeKind) {
    case DataTypeKind.DOType:
      openDataObjectTypeDrawer(mode, typeId, instanceType);
      return;
    case DataTypeKind.DAType:
      openDataAttributeTypeDrawer(mode, typeId, instanceType);
      return;
    case DataTypeKind.EnumType:
      openDataEnumTypeDrawer(mode, typeId, instanceType);
      return;
    default:
      console.error("open data type dialog drawer. type kind ", typeKind, " is not supported.")
  }
}

export async function assignOrCreateReference(
  refStore: ObjectReferenceStore,
  srcTypeKind: DataTypeKind,
  srcInstanceType: string,
  targetRefId: string
){

  const ref = get(refStore).find(i => i.name === targetRefId);
  const refTypeKind = ref.meta.refTypeKind
  const instance = ref.meta.objectType
  const res = await openDialog(AddReferenceDialog, {
    typeKind: srcTypeKind,
    instanceType: srcInstanceType,
    objTypeKind: refTypeKind,
    objInstanceType: instance,
    itemId: targetRefId
  });

  if (res.type !== 'confirm') {
    return;
  }

  const data = res.data;

  refStore.setTypeReference(targetRefId, data.id)
  if (data.mode === 'create') {
    openDataTypeDrawer(refTypeKind, 'create', data.id, data.instanceType)
  }
}


/**
 * This utility function that manages the workflow of adding a new type directly for an object reference. 
 * Based on the DataTypeKind and the required instanceType, it opens the create new data type dialog, with the 
 * required instance type already selected. For references that can take any instance the instance type will not be preselected.
 * Open sucessfull creation, the details view for the new type is created and the newly create type is reference to the given 
 * object refence (item id).
 * @param refStore  ObjectReference Store
 * @param itemId  item id of the item in the ObjectReferenceStore, where you want to assign a new type.
 */
export async function createAndAddReference(refStore: ObjectReferenceStore, itemId: string): Promise<void> {
  const ref = get(refStore).find(i => i.name === itemId);
    const refTypeKind = ref.meta.refTypeKind
    const instance = ref.meta.objectType

    if (refTypeKind === DataTypeKind.DOType) {

      const result = await openDialog(NewDataObjectTypeDialog, {defaultInstance: instance})
      if (result.type !== 'confirm') return;

      refStore.setTypeReference(ref.name, result.data.id)
      openDataObjectTypeDrawer('create', result.data.id, result.data.cdc);

    } else if (refTypeKind === DataTypeKind.DAType) {
      
      const result = await openDialog(NewDataAttributeTypeDialog, {defaultInstance: instance})
      if (result.type !== 'confirm') return;

      refStore.setTypeReference(ref.name, result.data.id)
      openDataAttributeTypeDrawer('create', result.data.id, result.data.instanceType);

    } else if (refTypeKind === DataTypeKind.EnumType) {
      const result = await openDialog(NewEnumTypeDialog, {defaultInstance: instance})
      if (result.type !== 'confirm') return;

      refStore.setTypeReference(ref.name, result.data.id)
      openDataEnumTypeDrawer('create', result.data.id, result.data.instanceType);

    } else {
      console.warn("Could not add and create refernce for refTypeKind: ", refTypeKind)
      return;
    }
}