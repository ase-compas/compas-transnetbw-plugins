<script lang="ts">
  import { OscdButton, OscdInput, OscdSelect } from '@oscd-transnet-plugins/oscd-component';
  import Card, { Actions, Content } from '@smui/card';
  import { Icon, Label } from '@smui/button';
  import { SearchParams } from '@oscd-transnet-plugins/oscd-version-editor';

  export let searchParamsCallback: (searchParams: SearchParams) => void;

  let data = [
    { value: 'scl', label: 'SCL' },
    { value: 'iid', label: 'IID' },
    { value: 'icd', label: 'ICD' },
    { value: 'scd', label: 'SCD' },
    { value: 'cid', label: 'CID' },
    { value: 'sed', label: 'SED' },
    { value: 'isd', label: 'ISD' },
    { value: 'std', label: 'STD' },
  ];

  let selectedValue = 'scl';
  let author = '';
  let uuid = '';

  function callback() {
    const searchParams = {
      uuid: uuid,
      author: author,
      type: selectedValue
    }

    searchParamsCallback(searchParams);
  }

  function clearInputs() {
    console.log('Clearing inputs');
    author = '';
    uuid = '';
    selectedValue = 'scl'
  }
</script>

<div class="search-filter-container">
  <Card style="padding: 1rem; width: 500px;">
    <h3>Search parameter</h3>
    <Content>
    <OscdSelect placeholder="Select a version" label="Version" data={data} bind:value={selectedValue} required={true} />
    <OscdInput
      placeholder="Author Name"
      bind:value={author}
      label="Author"
      icon="person" />
    <OscdInput
      placeholder="UUID"
      bind:value={uuid}
      label="UUID"
      icon="fingerprint" />
    </Content>
    <Actions>
      <div class="btn-container">
      <OscdButton callback={callback} variant="raised">
        <Icon class="material-icons">search</Icon>
        <Label>Search</Label>
      </OscdButton>
      <OscdButton callback={clearInputs}>
        <Label>Clear</Label>
      </OscdButton>
      </div>
    </Actions>
  </Card>
</div>

<style lang="css">
  .search-filter-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
</style>
