<script lang="ts">
  import { OscdClearableSelect } from '@oscd-transnet-plugins/oscd-component';
  import { OscdChevronRightIcon } from '@oscd-transnet-plugins/oscd-icons';

  const nodes = [
    'Substation',
    'VoltageLevel',
    'Bay',
    'ConductingEquipment',
    'Terminal',
    'ConnectivityNode',
  ];

  let selectedContextNodes = $state<(string | null)[]>([null]);

  const lastNodeIndex = $derived(selectedContextNodes.length - 1);

  $effect(() => {
    const last = selectedContextNodes[selectedContextNodes.length - 1];
    if (last) {
      selectedContextNodes.push(null);
    }

    for (let i = selectedContextNodes.length - 2; i >= 0; i--) {
      if (!selectedContextNodes[i] && selectedContextNodes.length > 1) {
        selectedContextNodes.splice(i, 1);
      }
    }
  });
</script>

<p>{selectedContextNodes.length}</p>

<div class="rule-nodes">
  {#each selectedContextNodes as selected, i}
    <OscdClearableSelect
      placeholder="Select next node"
      clearable
      bind:value={selectedContextNodes[i]}
      options={nodes}
    />
    {#if i < lastNodeIndex}
      <OscdChevronRightIcon svgStyles="fill: #B2C7CB; width: 30px; height: 30px;" />
    {/if}
  {/each}
</div>
<style>
  .rule-nodes {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    margin-top: 1rem;
  }
</style>
