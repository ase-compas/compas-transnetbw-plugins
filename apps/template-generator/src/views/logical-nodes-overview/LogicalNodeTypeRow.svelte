<script lang="ts">
  import NodeActionButton from '../../lib/components/NodeActionButton.svelte';
  import DataTable, {Row, Cell} from '@smui/data-table';

  export let node: {
    name: string;
    class: string;
    references: number;
  };
  export let onDuplicate: () => void;
  export let onDelete: () => void;
  export let onClick: () => void;
</script>

<Row key={node.name} on:click={onClick} class="mdc-data-table__logical-node-row">
  <Cell><div class="node-name-cell"><strong>{node.name}</strong></div></Cell>
  <Cell>{node.class}</Cell>
  <Cell>{node.references}</Cell>
  <Cell>
    <NodeActionButton
      tooltip="Duplicate"
      type="duplicate"
      onClick={onDuplicate}
    />
    <NodeActionButton
      tooltip="Delete"
      type="delete"
      fillColor="red"
      onClick={onDelete}
    />
  </Cell>
</Row>
