import { openDialog } from "@oscd-transnet-plugins/oscd-services/dialog";
import { toastService } from "@oscd-transnet-plugins/oscd-services/toast";
import { OscdConfirmDialog } from "@oscd-transnet-plugins/oscd-component";
import { TypeKind, type SimpleDataType } from "../../shared/model";
import { getDataTypeService, type DataTypeService } from "./services/type.service";
import CreateTypeDialog from "./components/dialogs/CreateTypeDialog.svelte";
import TypeDetails from "./components/TypeDetails.svelte";
import { openDrawer, setHomeTitle } from "@oscd-transnet-plugins/oscd-services/drawer";
import TypeRenameDialog from './components/dialogs/TypeRenameDialog.svelte';


export async function createDataTypeWorkflow(
    typeKind: TypeKind,
    instanceType?: string
): Promise<{ id: string, instanceType: string, createFromDefault: boolean } | null> {
    const result = await openDialog(CreateTypeDialog, {
        typeKind,
        instanceType,
    });

    if (result.type !== 'confirm') {
        return null;
    }


    try {
        setHomeTitle('Type ' + result.data.id);
        getDataTypeService().create(
            typeKind,
            result.data.instanceType,
            result.data.id
        );
        toastService.success(
            'Created',
            `${TypeKind.toTypeKindLabel(typeKind)} "${result.data.id}" was created successfully.`,
        );
    } catch (err) {
        console.error(err);
        toastService.error(
            'Create Failed',
            `Failed to create ${TypeKind.toTypeKindLabel(typeKind)} "${result.data.id}".`,
            8000,
        );
    }

    openDrawer({
        component: TypeDetails,
        title: `Create ${TypeKind.toTypeKindLabel(typeKind)}`,
        props: {
            typeId: result.data.id,
            mode: 'edit'
        },
    });

    return result.data;
}

export async function renameDataTypeWorkflow(
    dataType: SimpleDataType,
    service: DataTypeService = getDataTypeService(),
): Promise<string | null> {
    const result = await openDialog(TypeRenameDialog, {
        typeId: dataType.id,
    });

    if (result.type !== 'confirm') {
        return null;
    }

    const newId = result.data.value;

    try {
        service.rename(dataType.id, newId);
        toastService.success(
            'Renamed',
            `${TypeKind.toTypeKindLabel(dataType.typeKind)} "${dataType.id}" was renamed to "${newId}" successfully.`,
        );
        return newId;
    } catch (error) {
        toastService.error(
            'Rename Failed',
            `Failed to rename ${TypeKind.toTypeKindLabel(dataType.typeKind)} "${dataType.id}" to "${newId}".`,
            8000,
        );
        return null;
    }
}

export async function deleteDataTypeWorkflow(
    dataType: SimpleDataType,
    service: DataTypeService = getDataTypeService(),
): Promise<boolean> {
    const result = await openDialog(OscdConfirmDialog, {
        title: `Confirm Delete ${TypeKind.toTypeKindLabel(dataType.typeKind)}`,
        message: `Are you sure you want to delete "${dataType.id}"? This action cannot be undone. All references to this type will be removed.`,
        confirmActionText: 'Delete',
        cancelActionText: 'Cancel',
        confirmActionColor: 'danger',
    });

    if (result.type !== 'confirm') {
        return false;
    }

    try {
        service.delete(dataType.id);
        toastService.success(
            'Deleted',
            `${TypeKind.toTypeKindLabel(dataType.typeKind)} "${dataType.id}" was deleted successfully.`,
        );
        return true;
    } catch (error) {
        toastService.error(
            'Delete Failed',
            `Failed to delete ${TypeKind.toTypeKindLabel(dataType.typeKind)} "${dataType.id}".`,
            8000,
        );
        return false;
    }
}

export function duplicateDataType(
    dataType: SimpleDataType,
    service: DataTypeService = getDataTypeService(),
): void {
    try {
        service.duplicate(dataType.id);
        toastService.success(
            'Duplicated',
            `${TypeKind.toTypeKindLabel(dataType.typeKind)} "${dataType.id}" was duplicated successfully.`,
        );
    } catch (error) {
        toastService.error(
            'Duplicate Failed',
            `Failed to duplicate ${TypeKind.toTypeKindLabel(dataType.typeKind)} "${dataType.id}".`,
            8000,
        );
    }
}
