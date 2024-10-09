<script lang="ts">
  import { OscdButton, OscdInput, OscdSelect } from '@oscd-transnet-plugins/oscd-component';
  import Card, { Actions, Content } from '@smui/card';
  import { Icon, Label } from '@smui/button';

  let data = [
    { value: 'scl', label: 'SCL' }
  ];

  let selectedValue = 'scl';
  let author = '';
  let uuid = '';

  function callback() {
    console.log('Button clicked');
    console.log('Author: ', author);
    console.log('UUID: ', uuid);
    console.log('Version: ', selectedValue);
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
    <OscdSelect placeholder="Select a version" label="Version" data={data} value={selectedValue} required={true} />
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
      <OscdButton callback={callback} variant="raised">
        <Icon class="material-icons">search</Icon>
        <Label>Search</Label>
      </OscdButton>
      <OscdButton callback={clearInputs}>
        <Label>Clear</Label>
      </OscdButton>
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
