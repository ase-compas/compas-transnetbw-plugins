<script lang="ts">
  import NodeActionButton from './NodeActionButton.svelte';
  import DataTable, {Row, Cell} from '@smui/data-table';


  export let node: {
    name: string;
    class: string;
    references: number;
  };
  export let onDuplicate: (node) => void;
  export let onDelete: (node) => void;
  export let onClick: (node) => void;
</script>

<Row key={node.name} on:click={() => onClick(node)} class="mdc-data-table__logical-node-row">
  <Cell><div class="node-name-cell"><strong>{node.name}</strong></div></Cell>
  <Cell>{node.class}</Cell>
  <Cell>{node.references}</Cell>
  <Cell>
    <NodeActionButton
      tooltip="Duplicate"
      type="duplicate"
      onClick={() => onDuplicate(node)}
    />
    <NodeActionButton
      tooltip="Delete"
      type="delete"
      fillColor="red"
      onClick={() => onDelete(node)}
    />
  </Cell>
</Row>
