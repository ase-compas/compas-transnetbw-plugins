<script lang="ts">
  import {type Item } from './types';

  export let hierarchy: Item[] = [];

  let selectedItem: Item | null = null;

  const onSelect = (selected: Item) => {
    selectedItem = selected;
  }

</script>


<div class="layout">
  <div class="left">
    <slot
      name="left"
      {hierarchy}
      onSelect={(e) => onSelect(e.detail)}
    />
  </div>
  <div class="center">
    <slot
      name="center"
      {selectedItem}
    />
  </div>
  <div class="right"></div>

</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    height: calc(100vh - 150px); /* Replace 80px with height of siblings above */
    overflow: hidden;
  }

  .left,
  .center,
  .right {
    padding: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #e0e0e0;
  }

  .right {
    border-right: none;
    border-left: 1px solid #e0e0e0;
  }

  .center {
    background-color: #fafafa;
  }

  .right {
    background-color: #fcfcfc;
  }

  @media (max-width: 900px) {
    .layout {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
    }

    .left,
    .center,
    .right {
      border: none;
      border-bottom: 1px solid #e0e0e0;
      height: auto;
      max-height: 30vh;
    }

    .center {
      max-height: 40vh;
    }
  }
</style>
