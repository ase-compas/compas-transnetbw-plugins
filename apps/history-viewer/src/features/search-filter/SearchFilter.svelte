<script lang="ts">
  import { OscdButton, OscdInput, OscdSelect } from '@oscd-transnet-plugins/oscd-component';
  import Card, { Actions, Content } from '@smui/card';
  import { Icon, Label } from '@smui/button';
  import { SearchParams } from '@oscd-transnet-plugins/oscd-history-viewer';

  export let searchParamsCallback: (searchParams: SearchParams) => void;

  /*
    SSD("Substation Specification Description"),
    IID("IED Instance Description"),
    ICD("IED Capability Description"),
    SCD("Substation Configuration Description"),
    CID("Configured IED Description"),
    SED("System Exchange Description"),
    ISD("IED Specification Description"),
    STD("System Template Definition");
   */
  let data = [
    { value: '', label: '' },
    { value: 'SSD', label: 'SSD' },
    { value: 'IID', label: 'IID' },
    { value: 'ICD', label: 'ICD' },
    { value: 'SCD', label: 'SCD' },
    { value: 'CID', label: 'CID' },
    { value: 'SED', label: 'SED' },
    { value: 'ISD', label: 'ISD' },
    { value: 'STD', label: 'STD' }
  ];

  let selectedValue = '';
  let author = '';
  let uuid = '';
  let version = '';

  function callback() {
    const searchParams = {
      uuid: uuid,
      author: author,
      type: selectedValue
    };

    searchParamsCallback(searchParams);
  }

  function clearInputs() {
    author = '';
    uuid = '';
    selectedValue = '';
  }

  $: buttonDisabled = () => {
    return false;
    // return author === '' && uuid === '';
  };
</script>

<div class="search-filter-container">
  <Card style="padding: 1rem; width: 500px;">
    <h3>Search parameter</h3>
    <Content>
      <OscdSelect placeholder="Select a version" label="Type" data={data} bind:value={selectedValue}
                  required={false} />
      <OscdInput
        placeholder="Author Name"
        bind:value={author}
        label="Author"
        icon="person" />
      <OscdInput
        placeholder="Version"
        bind:value={version}
        label="Version"
        icon="person" />
      <OscdInput
        placeholder="UUID"
        bind:value={uuid}
        label="UUID"
        icon="fingerprint" />
    </Content>
    <Actions>
      <div class="btn-container">
        <OscdButton callback={callback} variant="raised" disabled={buttonDisabled()}>
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
