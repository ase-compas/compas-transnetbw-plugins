<script lang="ts">
  import { TColumnConfig, TData } from '../lib/components/tboard/types';
  import TBoard from '../lib/components/tboard/TBoard.svelte';

  // Two columns
  const columns: TColumnConfig[] = [
    {
      id: 'column1',
      title: 'First Column',
      hasAction: false,
      showApplyDefaults: true,
      itemsDraggable: false
    },
    {
      id: 'column2',
      title: 'Second Column',
      subtitle: 'Subtitle for second',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: true
    }
  ];

  // Data matching your TItem type
  const data: TData = {
    column1: [
      {
        id: 'item1',
        title: 'Item One',
        subtitle: 'Subtitle 1',
        references: 5,
        marked: false,
        selected: false,
        canEdit: true,
        canMark: true,
        canSelect: true,
        acceptDrop: (target) => target.id !== 'item1' // example logic
      },
      {
        id: 'item2',
        title: 'Item Two',
        canSelect: true,
        marked: true,
        selected: false,
        acceptDrop: (target) => true
        // optional props omitted
      },
      {
        id: 'item10',
        title: 'Item 10',
        canSelect: true,
        marked: true,
        selected: false,
        acceptDrop: (target) => false
        // optional props omitted
      }
    ],
    column2: [
      {
        id: 'item3',
        title: 'Item Three',
        canSelect: true,
        marked: false,
        selected: true,
        canEdit: false,
      },
      {
        id: 'item4',
        title: 'Item Four',
        subtitle: 'Subtitle 4',
        references: 3,
        marked: false,
        selected: false,
        canMark: true,
        canSelect: true,
      }
    ]
  };

</script>

<div>
  <TBoard
    columns={columns}
    data={data}
    on:columnActionClick={(e) => console.log('Action:', e.detail)}
    on:itemClick={(e) => console.log('Item Clicked:', e.detail)}
    on:itemEdit={(e) => console.log('Item Edit:', e.detail)}
    on:itemMarkChange={e => console.log('Item Mark Change:', e.detail)}
    on:applyDefaults={(e) => console.log('Apply Defaults:', e.detail)}
    on:itemDrop={(e) => console.log('Item Drop:', e.detail)}
  />
</div>
