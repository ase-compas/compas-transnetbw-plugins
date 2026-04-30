<script lang="ts">
  import { DataTypeDetailsState } from '../state/type.state.svelte';
  import { onMount } from 'svelte';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { TypeKind, type ViewMode } from '../../../shared/model';
  import { createDataTypeWorkflow } from '../type.workflows';
  import { openTypeDetailsDrawer } from '../type-details.drawer';
  import AddReferenceDialog from './dialogs/AddReferenceDialog.svelte';
  import { DataTypeService } from '../services/type.service';
  import TypeDetailsLayout from './TypeDetailsLayout.svelte';
  import TBoardTypeDetailsView from './TBoardTypeDetailsView.svelte';
  import EnumTypeDetails from './EnumTypeDetails.svelte';
  import { closeDrawer } from '@oscd-transnet-plugins/oscd-services/drawer';
  import TypeRenameDialog from './dialogs/TypeRenameDialog.svelte';
  import type { DocState } from 'apps/template-generator/src/shared/states/doc.state.svelte';
  import type { DetailsConfig } from '../types';
  import ApplyDefaultPreviewConfirmDialog from './dialogs/ApplyDefaultPreviewConfirmDialog.svelte';
  import ConfirmCascadeDeleteDefaultTypeDialog from './dialogs/ConfirmCascadeDeleteDefaultTypeDialog.svelte';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';

  interface Props {
    typeId: string;
    mode?: ViewMode
    service: DataTypeService
    docState: DocState
    config?: DetailsConfig
  }

  let { typeId, mode = 'view', service, docState, config }: Props = $props();
  const typeDetailsState = new DataTypeDetailsState(service);
  let suspendedReloadDepth = 0;
  let hasPendingReload = false;
  let mounted: boolean = false;

  function getPropagatedConfig(): DetailsConfig | undefined {
    const propagated = config?.propagateToChildren;
    if (!propagated) {
      return undefined;
    }

    return {
      ...propagated,
      // Keep propagation active for all descendants opened from this details view.
      propagateToChildren: propagated,
    };
  }

  async function renameType() {
    if (!typeId) {
      return;
    }

    const result = await openDialog(TypeRenameDialog, {
      typeId: typeDetailsState.loadedType?.id || '',
      service,
    });
    if (result.type !== 'confirm') {
      return null;
    }

    const newId = result.data.value;
    typeDetailsState.renameType(newId);
    typeId = newId;
  }

  async function createNewDataType(columnId: string) {
    await createDataTypeWorkflow(columnId as TypeKind, service, docState);
  }

  /**
   * Opens the reference if the member id in details drawer.
   * @param memberId the member id of the reference to open
   * @param mode the mode to open the reference in, if not specified it will be opened in the current view mode of the details drawer
   */
  async function openTypeDetails(memberId: string, mode: ViewMode = 'view') {
    const referenceType = typeDetailsState.getMemberReference(memberId);

    await openTypeById(referenceType.id, referenceType.typeKind, mode);
  }

  async function openTypeById(typeIdToOpen: string, typeKind: TypeKind, mode: ViewMode = 'view') {
    suspendedReloadDepth += 1;

    try {
      await openTypeDetailsDrawer(typeIdToOpen, typeKind, service, docState, mode, getPropagatedConfig());
    } finally {
      suspendedReloadDepth = Math.max(0, suspendedReloadDepth - 1);
      if (hasPendingReload || suspendedReloadDepth === 0) {
        hasPendingReload = false;
        if (typeId) {
          typeDetailsState.loadById(typeId);
        }
      }
    }
  }

  async function createDataTypeFromReference(memberId: string) {
    if(!typeDetailsState.isEditMode) {
      return;
    }

    const member = typeDetailsState.getMember(memberId);
    if (!member) return;

    const result = await openDialog(AddReferenceDialog, {
      typeId: typeId,
      memberName: memberId,
      service
    });

    if (result.type !== 'confirm') {
      return;
    }

    let targetTypeId = result.data.id;

    if (result.data.mode === 'create') {
      if (result.data.createFromDefault) {
        const effectiveRootId = await service.applySingleDefaultType(member.refKind, result.data.instanceType);
        if (!effectiveRootId) {
          toastService.error('No default available', 'Could not resolve a default type for this reference.');
          return;
        }

        targetTypeId = effectiveRootId;
        await openTypeById(targetTypeId, member.refKind, 'view');
      } else {
        service.create(member.refKind, result.data.instanceType, result.data.id)
        targetTypeId = result.data.id;
        await openTypeById(targetTypeId, member.refKind, 'edit');
      }
    }

    typeDetailsState.setRefernence(memberId, targetTypeId);
  }


  function handleClickItem(columnId: string, itemId: string) {
    if (columnId === "refs") {
      typeDetailsState.markMember(itemId);
    } else {
      // assign reference to marked member
      typeDetailsState.setReferenceToMarkedMember(itemId);
    }
  }

  /**
   * Unmaks the current marked member if clicked outside of a reference item in the details drawer.
   * @param e the click event
   */
  function handleUnMakenWhenClickedOutside(e: MouseEvent) {
    const isInside = e.composedPath().some(
        el => el instanceof HTMLElement && el.classList.contains('oscd-card-item')
      );

      if (!isInside) {
        typeDetailsState.clearMarkedMember();
      }
  }
  
  function hanldeColumnActionClick(columnId: string) {
    if (columnId === 'refs') {
      applyDefaults();
    } else {
      createNewDataType(columnId);
    }
  }

  $effect(() => {
    if(docState && docState.editCount >= -1 && mounted) {
      if (suspendedReloadDepth > 0) {
        hasPendingReload = true;
        return;
      }

      if (typeId) {
        typeDetailsState.loadById(typeId);
      }
    }
  });

  onMount(() => {
    document.addEventListener('click', handleUnMakenWhenClickedOutside);
    typeDetailsState.setViewMode(mode);
    typeDetailsState.setConfig(config);
    typeDetailsState.loadById(typeId);
    mounted = true;
    return () => {
      document.removeEventListener('click', handleUnMakenWhenClickedOutside);
    };
  });

  async function applyDefaults(members: string[]  | undefined = undefined) {
    try {
      const preview = await typeDetailsState.getApplyDefaultTypesPreview(members);
      const result = await openDialog(ApplyDefaultPreviewConfirmDialog, {
        applyDefaultPreview: preview,
      });
    if(result.type === 'confirm') {
      typeDetailsState.applyDefaultTypesFromPreview(preview);
    }
    } catch (e) {
      console.error('Failed to get apply default types preview', e);
      toastService.error('Apply default failed', 'Failed to get apply default types. Please try again.');
      return;
    }
  }

  async function updateDefaultTypeToLatest() {
    try {
      const newRootId = await typeDetailsState.updateDefaultTypeToLatest();
      if (!newRootId) {
        toastService.info('Already latest', 'This default type already uses the latest available version.');
        return;
      }

      typeId = newRootId;
      typeDetailsState.loadById(newRootId);
      toastService.success('Default updated', 'Updated default type to latest and refreshed references.');
    } catch (e) {
      console.error('Failed to update default type to latest', e);
      toastService.error('Update failed', 'Failed to update default type to latest. Please try again.');
    }
  }

  function detachDefaultType() {
    try {
      typeDetailsState.detachDefaultType();
      toastService.success('Default customized', 'This type is now a local editable type and will no longer receive default updates.');
    } catch (e) {
      console.error('Failed to detach default type', e);
      toastService.error('Customize failed', 'Could not customize this default type. Please try again.');
    }
  }

  async function handleDelete() {
    const typeIdToDelete = typeDetailsState.loadedType?.id;
    if (!typeIdToDelete) {
      return;
    }

    try {
      // Get the delete plan to check for cascade deletions
      const deletePlan = service.getDeletePlan(typeIdToDelete);

      // If this is a root of a default group, show confirmation dialog
      if (deletePlan.hasDefaultMetadata && deletePlan.trackedSubTypeIds.length > 0) {
        const result = await openDialog(ConfirmCascadeDeleteDefaultTypeDialog, {
          rootTypeId: typeIdToDelete,
          subTypeIds: deletePlan.trackedSubTypeIds,
        });

        if (result.type !== 'confirm') {
          return;
        }

        toastService.info('Deleting...', `Removing ${typeIdToDelete} and ${deletePlan.trackedSubTypeIds.length} sub-type(s).`);
      }

      closeDrawer();
      typeDetailsState.deleteType();
      toastService.success('Type deleted', `${typeIdToDelete} has been successfully deleted.`);
    } catch (e) {
      console.error(`Failed to delete type ${typeDetailsState.loadedType?.id}:`, e);
      toastService.error('Delete failed', 'Failed to delete type. Please try again.');
    }
  }

</script>

<TypeDetailsLayout
  loading={typeDetailsState.loading}
  error={typeDetailsState.error}
  typeKind={typeDetailsState.loadedType?.typeKind ?? TypeKind.LNodeType}
  typeId={typeDetailsState.loadedType?.id || ''}
  instanceType={typeDetailsState.loadedType?.instanceType}
  defaultTypeInfo={typeDetailsState.loadedType?.defaultTypeInfo}
  defaultTypeVersionStatus={typeDetailsState.loadedType?.defaultTypeVersionStatus}
  isEditMode={typeDetailsState.isEditMode}
  onModeChange={(nextMode) => typeDetailsState.setViewMode(nextMode)}
  onRename={renameType}
  onDelete={handleDelete}
  onInstanceTypeChange={(instanceType) => typeDetailsState.updateInstanceType(instanceType)}
  onOpenDefaultRootType={(rootTypeId, rootTypeKind) => openTypeById(rootTypeId, rootTypeKind, typeDetailsState.viewMode)}
  onUpdateDefaultTypeToLatest={updateDefaultTypeToLatest}
  onDetachDefault={detachDefaultType}
  service={service}
  config={typeDetailsState.config}
>
  {#if typeDetailsState.loadedType?.typeKind === TypeKind.EnumType}
    <EnumTypeDetails
      members={typeDetailsState.loadedType.members}
      isEditMode={typeDetailsState.isEditMode}
      onMemberChange={(selected) => typeDetailsState.setConfiguredMembers(selected)}
    />
  {:else}
    <TBoardTypeDetailsView
      columns={typeDetailsState.columns}
      data={typeDetailsState.data}
      onItemClick={handleClickItem}
      onItemUnlink={(itemId) => typeDetailsState.clearReference(itemId)}
      onItemDrop={(targetItemId, sourceItemId) => typeDetailsState.setRefernence(targetItemId, sourceItemId)}
      onItemSelectChange={(itemId) => typeDetailsState.toggleMember(itemId)}
      onItemReferenceClick={(itemId) => openTypeDetails(itemId, typeDetailsState.viewMode)}
      onItemAddReferenceClick={(itemId) => createDataTypeFromReference(itemId)}
      onColumnActionClick={(columnId) => hanldeColumnActionClick(columnId)}
      onItemApplyDefaults={(itemId) => applyDefaults([itemId])}
      onItemEditClick={(itemId) => {
        const typeKind = typeDetailsState.getType(itemId)?.typeKind;
        openTypeById(itemId, typeKind, typeDetailsState.viewMode)
      }}
    />
  {/if}
</TypeDetailsLayout>
