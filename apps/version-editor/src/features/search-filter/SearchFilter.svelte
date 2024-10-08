<script lang="ts">
  import { Avatar, Code, MagnifyingGlass } from 'radix-icons-svelte';
  import { OscdButton, OscdInput, OscdSelect } from '@oscd-transnet-plugins/oscd-component';
  import { Card } from '@svelteuidev/core';

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
</script>

<div class="search-filter-container">
  <Card shadow='sm' padding='lg' style="width: 500px;">
    <OscdSelect placeholder="Select a version" label="Version" data={data} value={selectedValue} required={true} />
    <OscdInput
      placeholder="Author Name"
      bind:value={author}
      label="Author"
      icon={Avatar} />
    <OscdInput
      placeholder="UUID"
      bind:value={uuid}
      label="UUID"
      icon={Code} />

    <div class="btn-container">
      <OscdButton name="Search" callback="{callback}" icon="{MagnifyingGlass}" />
    </div>
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

  .input-container {
    width: 600px;
    border: 1px solid #000;
    padding: 0.5rem;
  }

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
</style>
