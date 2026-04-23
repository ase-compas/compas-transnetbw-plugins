<script lang="ts">
  import type { RuleResult } from '../../services/validationStatusStore.svelte';
  import { OscdArrowDownIcon, OscdArrowUpIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    rule: RuleResult;
    passed?: boolean;
  }

  let { rule, passed = false }: Props = $props();

  let expanded = $state(false);
</script>

<details
  class="item"
  class:item--passed={passed}
  ontoggle={(e) => (expanded = e.currentTarget.open)}
>
  <summary class="summary">
    <span class="title">{rule.title}</span>
    {#if expanded}
      <OscdArrowUpIcon svgStyles={`fill: var(--primary-base);`} />
    {:else}
      <OscdArrowDownIcon svgStyles={`fill: var(--primary-base);`} />
    {/if}
  </summary>

  <div class="body">
    {#if rule.description}
      <p>{rule.description}</p>
    {/if}
    {#if rule.context}
      <div class="field">
        <span class="label">Context</span>
        <code>{rule.context}</code>
      </div>
    {/if}
    {#if rule.assertion}
      <div class="field">
        <span class="label">Assertion</span>
        <code>{rule.assertion}</code>
      </div>
    {/if}
  </div>
</details>

<style>
  .item {
    background: #fff4f5;
    border-radius: 6px;
    overflow: hidden;
  }

  .item--passed {
    background: var(--base2);
  }

  .summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    cursor: pointer;
    user-select: none;
    list-style: none;
  }

  .summary::-webkit-details-marker { display: none; }

  .title {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--primary-base);
  }

  .body {
    padding: 10px 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-top: 1px solid var(--base3);
  }

  .body p {
    margin: 0;
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-normal, 400);
    color: var(--primary-base);
    line-height: 1.5;
    text-align: left;
  }

  .field {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .label {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-small, 0.75rem);
    font-weight: var(--ew-font-weight-medium, 500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--base1);
    white-space: nowrap;
    flex-shrink: 0;
  }

  code {
    font-family: 'Roboto Mono', monospace;
    font-size: 11px;
    color: var(--base02);
    background: var(--base2);
    border-radius: 3px;
    padding: 2px 6px;
    word-break: break-all;
  }
</style>
