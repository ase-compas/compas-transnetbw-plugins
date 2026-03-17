<script lang="ts">
  import TBoard from './tboard/TBoard.svelte';
  import type { TColumnConfig, TData } from '@oscd-transnet-plugins/oscd-template-generator';

  interface Props {
    columns: TColumnConfig[];
    data: TData;
    onItemClick: (columnId: string, itemId: string) => void;
    onItemUnlink: (itemId: string) => void;
    onItemDrop: (targetItemId: string, sourceItemId: string) => void;
    onItemSelectChange: (itemId: string) => void;
    onItemReferenceClick: (itemId: string) => void;
    onItemAddReferenceClick: (itemId: string) => void;
    onColumnActionClick: (columnId: string) => void;
    onItemEditClick: (itemId: string) => void;
  }

  let {
    columns,
    data,
    onItemClick,
    onItemUnlink,
    onItemDrop,
    onItemSelectChange,
    onItemReferenceClick,
    onItemAddReferenceClick,
    onColumnActionClick,
    onItemEditClick,
  }: Props = $props();
</script>

<TBoard
  {columns}
  {data}
  onItemClick={(e) => onItemClick(e.columnId, e.itemId)}
  onItemUnlink={(e) => onItemUnlink(e.itemId)}
  onItemDrop={(e) => onItemDrop(e.target.itemId, e.source.itemId)}
  onItemSelectChange={(e) => onItemSelectChange(e.itemId)}
  onItemReferenceClick={(e) => onItemReferenceClick(e.itemId)}
  onItemAddReferenceClick={(e) => onItemAddReferenceClick(e.itemId)}
  onItemEdit={(e) => onItemEditClick(e.itemId)}
  onColumnActionClick={(e) => onColumnActionClick(e.columnId)}
/>
