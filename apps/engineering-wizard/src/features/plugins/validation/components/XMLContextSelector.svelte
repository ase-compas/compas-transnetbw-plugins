<script lang="ts">
  import { OscdSmartSelect, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import { OscdChevronRightIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { getChildElements, SCL_SCHEMA } from '../scl-schema';

  type NodeName = string;
  type MaybeNode = NodeName | null;

  interface Props {
    value?: string;
  }

  let { value = $bindable('//SCL') }: Props = $props();

  let contextPath = $state<MaybeNode[]>([null]);

  function isSelected(v: MaybeNode): v is NodeName {
    return v !== null;
  }

  function removeNulls(values: MaybeNode[]): NodeName[] {
    return values.filter(isSelected);
  }

  function withTrailingNull(values: NodeName[]): MaybeNode[] {
    return [...values, null];
  }

  /** Returns the valid child options for the dropdown at a given index. */
  function getOptionsForIndex(index: number): string[] {
    if (index === 0) return getChildElements('SCL');
    const parent = contextPath[index - 1];
    if (!parent) return [];
    return getChildElements(parent);
  }

  /** Whether the last selected node has any possible children (to show trailing null). */
  function lastNodeHasChildren(selected: NodeName[]): boolean {
    if (selected.length === 0) return true; // SCL root always has children
    const last = selected[selected.length - 1];
    return (SCL_SCHEMA[last]?.children?.length ?? 0) > 0;
  }

  function normalizeContextPath(values: MaybeNode[]): MaybeNode[] {
    const selected = removeNulls(values);
    return lastNodeHasChildren(selected) ? withTrailingNull(selected) : selected;
  }

  $effect(() => {
    const normalized = normalizeContextPath(contextPath);
    if (contextPath.length !== normalized.length ||
      contextPath.some((v, i) => v !== normalized[i])) {
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

  const hiddenNodesLabel = $derived(hiddenNodes.length ? hiddenNodes.join(' > ') : '(none)');

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

  function nodesToValue(nodes: NodeName[]): string {
    if (nodes.length === 0) return '//SCL';
    return `//SCL/${nodes.join('/')}`;
  }

  function valueToNodes(v: string): NodeName[] {
    if (!v?.trim()) return [];
    // Strip "//SCL" prefix with or without trailing slash so "//SCL" → []
    const cleanValue = v.replace(/^\/\/SCL(\/|$)/, '');
    if (!cleanValue) return [];

    const parts = cleanValue.split('/').map((s) => s.trim()).filter(Boolean);
    return parts.filter((p): p is NodeName => p in SCL_SCHEMA);
  }

  let hydrated = $state(false);
  let lastSeenValue = $state<string | null>(null);

  $effect(() => {
    if (value === lastSeenValue) return;
    lastSeenValue = value;

    const nodes = valueToNodes(value);
    contextPath = lastNodeHasChildren(nodes) ? withTrailingNull(nodes) : nodes;
    hydrated = true;
  });

  $effect(() => {
    if (!hydrated) return;

    const next = nodesToValue(selectedPath);
    if (next !== value) value = next;
  });
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

      <OscdChevronRightIcon svgStyles="fill: #B2C7CB; width: 30px; height: 30px;" />
    {:else if isSelectVisible(index)}
      <OscdSmartSelect
        placeholder="Select next node"
        clearable
        bind:value={contextPath[index]}
        options={getOptionsForIndex(index)}
      />

      {#if hasChevronAfter(index)}
        <OscdChevronRightIcon svgStyles="fill: #B2C7CB; width: 30px; height: 30px;" />
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
