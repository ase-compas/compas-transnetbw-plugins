<script lang="ts">
  import {
    OscdSmartSelect,
    OscdTooltip,
  } from '@oscd-transnet-plugins/oscd-component';
  import {
    OscdChevronRightIcon,
  } from '@oscd-transnet-plugins/oscd-icons';

  type NodeName = string;
  type MaybeNode = NodeName | null;

  const nodeOptions: NodeName[] = [
    'Substation',
    'VoltageLevel',
    'Bay',
    'ConductingEquipment',
    'Terminal',
    'ConnectivityNode',
  ];

  let contextPath = $state<MaybeNode[]>([null]);

  function isSelected(value: MaybeNode): value is NodeName {
    return value !== null;
  }

  function removeNulls(values: MaybeNode[]): NodeName[] {
    return values.filter(isSelected);
  }

  function withTrailingNull(values: NodeName[]): MaybeNode[] {
    return [...values, null];
  }

  function shallowEqual<T>(a: T[], b: T[]): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  function normalizeContextPath(values: MaybeNode[]): MaybeNode[] {
    const selected = removeNulls(values);
    return withTrailingNull(selected);
  }

  $effect(() => {
    const normalized = normalizeContextPath(contextPath);
    if (!shallowEqual(contextPath, normalized)) {
      contextPath = normalized;
    }
  });

  const selectedPath = $derived.by(() => removeNulls(contextPath));
  const selectedPathCount = $derived(selectedPath.length);

  const lastIndex = $derived(contextPath.length - 1);

  const isCollapsed = $derived(selectedPathCount > 3);

  const hiddenNodes = $derived.by(() => {
    if (!isCollapsed) return [];
    return selectedPath.slice(1, -1);
  });

  const hiddenNodesLabel = $derived(
    hiddenNodes.length ? hiddenNodes.join(' > ') : '(none)'
  );

  function isEllipsisSlot(index: number): boolean {
    return isCollapsed && index === 1;
  }

  function isSelectVisible(index: number): boolean {
    if (!isCollapsed) return true;

    const isFirst = index === 0;
    const isLast = index === lastIndex;
    const isSecondLast = index === lastIndex - 1;

    return isFirst || isSecondLast || isLast;
  }

  function hasChevronAfter(index: number): boolean {
    return index < lastIndex;
  }
</script>

<div class="rule-nodes">
  {#each contextPath as _, index}
    {#if isEllipsisSlot(index)}
      <OscdTooltip
        content={hiddenNodesLabel}
        hoverDelay={300}
        side="bottom"
        offset={12}
        backgroundColor="var(--primary-base)"
        textColor="var(--white)"
        paddingY={8}
        paddingX={12}
      >
        <span class="ellipsis">…</span>
      </OscdTooltip>

      <OscdChevronRightIcon
        svgStyles="fill: #B2C7CB; width: 30px; height: 30px;"
      />
    {:else if isSelectVisible(index)}
      <OscdSmartSelect
        placeholder="Select next node"
        clearable
        bind:value={contextPath[index]}
        options={nodeOptions}
      />

      {#if hasChevronAfter(index)}
        <OscdChevronRightIcon
          svgStyles="fill: #B2C7CB; width: 30px; height: 30px;"
        />
      {/if}
    {/if}
  {/each}
</div>

<style>
  .rule-nodes {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .ellipsis {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    padding: 0 0.75rem;
    border: 1px solid #b2c7cb;
    border-radius: 5px;
    background: var(--base3);
    color: inherit;
    box-shadow: none;
    font-family: 'Roboto', sans-serif;
    font-size: 0.95rem;
    line-height: 1;
    font-weight: 600;
    cursor: pointer;
  }
</style>
