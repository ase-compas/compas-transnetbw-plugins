<script lang="ts">
  import { DataTypeDetailsState } from './type.state.svelte';
  import { onMount } from 'svelte';
  import { pluginStore } from '@oscd-transnet-plugins/oscd-template-generator';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import TypeRenameDialog from 'libs/oscd-template-generator/src/lib/components/dialogs/TypeRenameDialog.svelte';
  import { TypeKind, type ViewMode } from './model';
  import { createDataTypeWorkflow } from './type.workflows';
  import { openTypeDetailsDrawer } from './type-details.drawer';
  import AddReferenceDialog from './AddReferenceDialog.svelte';
  import { getDataTypeService } from './type.service';
  import TypeDetailsLayout from './TypeDetailsLayout.svelte';
  import TBoardTypeDetailsView from './TBoardTypeDetailsView.svelte';
  import EnumTypeDetails from './EnumTypeDetails.svelte';
  import { closeDrawer } from '@oscd-transnet-plugins/oscd-services/drawer';

  interface Props {
    typeId: string;
    mode?: ViewMode
  }

  let { typeId, mode = 'view' }: Props = $props();
  const typeDetailsState = new DataTypeDetailsState();
  let suspendedReloadDepth = 0;
  let hasPendingReload = false;

  async function renameType() {
    if (!typeId) {
      return;
    }

    const result = await openDialog(TypeRenameDialog, {
      typeId: typeDetailsState.loadedType?.id || '',
      typeKind: TypeKind.toDataTypeKind(typeDetailsState.loadedType?.typeKind),
    });
    if (result.type !== 'confirm') {
      return null;
    }

    const newId = result.data.newTypeId;
    typeDetailsState.renameType(newId);
    typeId = newId;
  }

  async function createNewDataType(columnId: string) {
    await createDataTypeWorkflow(columnId as TypeKind);
  }

  /**
   * Opens the reference if the member id in details drawer. 
   * @param memberId the member id of the reference to open
   * @param mode the mode to open the reference in, if not specified it will be opened in the current view mode of the details drawer
   */
  async function openTypeDetails(memberId: string, mode: ViewMode = 'view') {
    const referenceType = typeDetailsState.getMemberReference(memberId);
    if (!referenceType) return;
    console.log('Opening type details for member:', memberId, 'in mode:', mode, 'with reference type:', referenceType);

    await openTypeById(referenceType.id, mode);
  }

  async function openTypeById(typeIdToOpen: string, mode: ViewMode = 'view') {
    suspendedReloadDepth += 1;
    try {
      await openTypeDetailsDrawer(typeIdToOpen, mode, 'Type Details');
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
    const member = typeDetailsState.getMember(memberId);
    if (!member) return;

    const result = await openDialog(AddReferenceDialog, {
      typeId: typeId,
      memberName: memberId,
    });

    if (result.type !== 'confirm') {
      return;
    }

    if (result.data.mode === 'create') {
      getDataTypeService().create(member.refKind, result.data.instanceType, result.data.id)
      await openTypeById(result.data.id, 'edit');
    }
    typeDetailsState.setRefernence(memberId, result.data.id);
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

  $effect(() => {
    if (typeId) {
      console.debug('loading form effect', typeId)
      typeDetailsState.loadById(typeId);
    }
  });

  onMount(() => {

    document.addEventListener('click', handleUnMakenWhenClickedOutside);


    typeDetailsState.setViewMode(mode);
    const unsubscribe = pluginStore.updates.subscribe(() => {
      if (suspendedReloadDepth > 0) {
        hasPendingReload = true;
        return;
      }

      if (typeId) {
        typeDetailsState.loadById(typeId);
      }
    });
    return () => {
      document.removeEventListener('click', handleUnMakenWhenClickedOutside);
      unsubscribe();
    };
  });

</script>

<TypeDetailsLayout
  loading={typeDetailsState.loading}
  error={typeDetailsState.error}
  typeKind={typeDetailsState.loadedType?.typeKind ?? TypeKind.LNodeType}
  typeId={typeDetailsState.loadedType?.id || ''}
  instanceType={typeDetailsState.loadedType?.instanceType}
  isEditMode={typeDetailsState.isEditMode}
  onModeChange={(nextMode) => typeDetailsState.setViewMode(nextMode)}
  onRename={renameType}
  onDelete={() => {
    closeDrawer();
    typeDetailsState.deleteType();
  }}
  onInstanceTypeChange={(instanceType) => typeDetailsState.updateInstanceType(instanceType)}
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
      onColumnActionClick={createNewDataType}
      onItemEditClick={(itemId) => openTypeById(itemId, typeDetailsState.viewMode)}
    />
  {/if}
</TypeDetailsLayout>