<script lang="ts">
  import { OscdSmartSelect, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
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

  const tooltipContent = $derived(
    hiddenMiddle.length > 0 ? hiddenMiddle.join(' > ') : '(none)'
  );

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
      <OscdTooltip content={tooltipContent} hoverDelay={300} side="bottom" offset={12} backgroundColor="var(--primary-base)" textColor="var(--white)" paddingY={8} paddingX={12}>
        <span class="ellipsis">…</span>
      </OscdTooltip>

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

  .ellipsis { display: inline-block; }
</style>
