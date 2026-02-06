<script lang="ts">
  import { OscdSmartSelect } from '@oscd-transnet-plugins/oscd-component';
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

  const effectiveLength = $derived(
    selectedContextNodes[lastNodeIndex] === null
      ? selectedContextNodes.length - 1
      : selectedContextNodes.length
  );

  const shouldCollapse = $derived(effectiveLength > 3);

  const hiddenMiddle = $derived.by(() => {
    if (!shouldCollapse) return [];
    const end = effectiveLength - 2;
    return selectedContextNodes
      .slice(1, end)
      .filter((v): v is string => v != null);
  });

  $effect(() => {
    const last = selectedContextNodes[selectedContextNodes.length - 1];
    if (last) selectedContextNodes.push(null);

    for (let i = selectedContextNodes.length - 2; i >= 0; i--) {
      if (!selectedContextNodes[i] && selectedContextNodes.length > 1) {
        selectedContextNodes.splice(i, 1);
      }
    }
  });
</script>

<div class="rule-nodes">
  {#each selectedContextNodes as _, i}
    {#if shouldCollapse && i === 1}
      <span class="ellipsis-wrap">
        <span class="ellipsis">…</span>

        <div class="tooltip">
          {#each hiddenMiddle as item}
            <div>{item}</div>
          {/each}
          {#if hiddenMiddle.length === 0}
            <div>(none)</div>
          {/if}
        </div>
      </span>

      <OscdChevronRightIcon svgStyles="fill: #B2C7CB; width: 30px; height: 30px;" />
    {:else if !shouldCollapse || i === 0 || i === lastNodeIndex || i === lastNodeIndex - 1}
      <OscdSmartSelect
        placeholder="Select next node"
        clearable
        bind:value={selectedContextNodes[i]}
        options={nodes}
      />

      {#if i < lastNodeIndex}
        <OscdChevronRightIcon svgStyles="fill: #B2C7CB; width: 30px; height: 30px;" />
      {/if}
    {/if}
  {/each}
</div>

<style>
  .rule-nodes { display: flex; align-items: center; gap: 0.5rem; }

  .ellipsis-wrap { position: relative; display: inline-block; }
  .tooltip {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    padding: 4px;
    background: white;
    border: 1px solid #ccc;
    white-space: nowrap;
    z-index: 10;
  }
  .ellipsis-wrap:hover .tooltip,
  .ellipsis-wrap:focus-within .tooltip { display: block; }
</style>
