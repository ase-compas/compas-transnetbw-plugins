<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Checkbox from '@smui/checkbox';
  export let data: any;
  $: dataObjects = data?.item?.children || [];
</script>

<div class="test">
  <DataTable style="width: 100%;">
    <Head>
      <Row>
        <Cell checkbox>
          <Checkbox />
        </Cell>
        <Cell>Name</Cell>
        <Cell>Type</Cell>
      </Row>
    </Head>
    <Body>
    {#each dataObjects as dataObject (dataObject.attributes.name)}
      <Row>
        <Cell checkbox>
          <Checkbox
          />
        </Cell>
        <Cell>{dataObject.attributes.name}</Cell>
        <Cell>{dataObject.attributes.type}</Cell>
      </Row>
    {/each}
    </Body>
  </DataTable>
</div>
