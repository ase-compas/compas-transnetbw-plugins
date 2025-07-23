<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Checkbox from '@smui/checkbox';
  export let data: any;
  $: dataAttributes = data?.item?.reference?.children || [];
  $: if(dataAttributes) {
    console.log(data);
  }
</script>

<div class="test">
  <DataTable style="width: 100%;">
    <Head>
      <Row>
        <Cell checkbox>
          <Checkbox />
        </Cell>
        <Cell>name</Cell>
        <Cell>fc</Cell>
        <Cell>bType</Cell>
        <Cell>type</Cell>
      </Row>
    </Head>
    <Body>
    {#each dataAttributes as dataObject, i (i)}
      <Row>
        <Cell checkbox>
          <Checkbox
          />
        </Cell>
        <Cell>{dataObject.attributes.name}</Cell>
        <Cell>{dataObject.attributes?.fc || ''}</Cell>
        <Cell>{dataObject.attributes.bType}</Cell>
        <Cell>{dataObject.attributes?.type || ''}</Cell>
      </Row>
    {/each}
    </Body>
  </DataTable>
</div>
