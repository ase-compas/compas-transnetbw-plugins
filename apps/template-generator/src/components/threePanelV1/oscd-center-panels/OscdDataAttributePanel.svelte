<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Checkbox from '@smui/checkbox';
  export let data: any;
  $: dataAttributes = data?.data?.reference?.children || [];
  $: if(dataAttributes) {
    console.log(data);
  }
</script>

<div class="test">
  {#if data?.data?.attributes?.bType === 'Enum'}
    <h1>Enum Type</h1>
    <DataTable style="width: 100%;">
      <Head>
        <Row>
          <Cell checkbox>
            <Checkbox />
          </Cell>
          <Cell>val</Cell>
        </Row>
      </Head>
      <Body>
      {#each dataAttributes as dataObject, i (i)}
        <Row>
          <Cell checkbox>
            <Checkbox
            />
          </Cell>
          <Cell>{dataObject.text}</Cell>
        </Row>
      {/each}
      </Body>
    </DataTable>
  {:else if data?.data?.attributes?.bType === 'struct'}
    <h1>Struct Data Attribute</h1>
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
  {:else}
    <h1>Basic Data Attribute</h1>
    <ul>
      <li>bType: {data.data.attributes.bType}</li>
    </ul>
  {/if}
</div>
