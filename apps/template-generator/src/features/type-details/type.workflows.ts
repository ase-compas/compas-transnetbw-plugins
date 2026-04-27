import { openDialog } from "@oscd-transnet-plugins/oscd-services/dialog";
import { toastService } from "@oscd-transnet-plugins/oscd-services/toast";
import { OscdConfirmDialog } from "@oscd-transnet-plugins/oscd-component";
import { TypeKind, type SimpleDataType } from "../../shared/model";
import { type DataTypeService } from "./services/type.service";
import CreateTypeDialog from "./components/dialogs/CreateTypeDialog.svelte";
import TypeRenameDialog from './components/dialogs/TypeRenameDialog.svelte';
import { openTypeDetailsDrawer } from "./type-details.drawer";
import { DocState } from "../../shared/states/doc.state.svelte";


export async function createDataTypeWorkflow(
    typeKind: TypeKind,
    service: DataTypeService,
    docState: DocState,
    instanceType?: string,
    enableCreateFromDefault: boolean = false,
): Promise<{ id: string, instanceType: string, createFromDefault: boolean } | null> {
    const result = await openDialog(CreateTypeDialog, {
        typeKind,
        instanceType,
        service,
        enableCreateFromDefault,
    });

    if (result.type !== 'confirm') {
        return null;
    }


    let createdTypeId = result.data.id;

    try {
        if (result.data.createFromDefault) {
            const effectiveRootId = await service.applySingleDefaultType(typeKind, result.data.instanceType);
            if (!effectiveRootId) {
                toastService.error(
                    'Create Failed',
                    `No default exists for ${TypeKind.toTypeKindLabel(typeKind)} "${result.data.instanceType}".`,
                    8000,
                );
                return null;
            }

            createdTypeId = effectiveRootId;
        } else {
            service.create(
                typeKind,
                result.data.instanceType,
                result.data.id
            );
            createdTypeId = result.data.id;
        }
    } catch (err) {
        console.error(err);
        toastService.error(
            'Create Failed',
            `Failed to create ${TypeKind.toTypeKindLabel(typeKind)} "${result.data.id}".`,
            8000,
        );
        return null;
    }

    openTypeDetailsDrawer(createdTypeId, typeKind, service, docState, result.data.createFromDefault ? 'view' : 'edit', {
        defaultTypeFeatureEnabled: true,
        propagateToChildren: {
            defaultTypeFeatureEnabled: true
        }
    });

    return {
        ...result.data,
        id: createdTypeId,
    };
}

export async function renameDataTypeWorkflow(
    dataType: SimpleDataType,
    service: DataTypeService,
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
    service: DataTypeService,
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
    service: DataTypeService,
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
