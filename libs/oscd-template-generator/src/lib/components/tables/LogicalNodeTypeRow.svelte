<script lang="ts">
  import { OscdIconActionButton } from '@oscd-transnet-plugins/oscd-component';
  import DataTable, {Row, Cell} from '@smui/data-table';

  interface Props {
    node: {
    name: string;
    class: string;
    references: number;
  };
    onDuplicate: () => void;
    onDelete: () => void;
    onClick: () => void;
  }

  let {
    node,
    onDuplicate,
    onDelete,
    onClick
  }: Props = $props();
</script>

<Row key={node.name} on:click={onClick} class="mdc-data-table__logical-node-row" style="background: white">
  <Cell><div class="node-name-cell"><strong>{node.name}</strong></div></Cell>
  <Cell>{node.class}</Cell>
  <Cell>{node.references}</Cell>
  <Cell>
    <OscdIconActionButton
      tooltip="Duplicate"
      type="duplicate"
      onClick={onDuplicate}
    />
    <OscdIconActionButton
      tooltip="Delete"
      type="delete"
      fillColor="red"
      onClick={onDelete}
    />
  </Cell>
</Row>
