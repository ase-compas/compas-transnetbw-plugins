<script lang="ts">
  import type { RuleResult } from '../../services/validationCoordinator.svelte';
  import { OscdArrowDownIcon, OscdArrowUpIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    rule: RuleResult;
    passed?: boolean;
  }

  let { rule, passed = false }: Props = $props();

  let expanded = $state(false);
  const couldNotEvaluate = $derived(
    rule.status === 'INVALID_RULE' || rule.status === 'EVALUATION_ERROR' || rule.status === 'REQUEST_ERROR',
  );
  const lineNumbers = $derived(
    rule.status === 'FAILED'
      ? [...new Set(rule.errors.flatMap((error) => error.lineNumber != null ? [error.lineNumber] : []))]
      : [],
  );
</script>

<details
  class="item"
  class:item--passed={passed}
  class:item--error={couldNotEvaluate}
  ontoggle={(e) => (expanded = e.currentTarget.open)}
>
  <summary class="summary">
    <span class="title">
      {rule.title}
    </span>
    {#if expanded}
      <OscdArrowUpIcon svgStyles={`fill: var(--oscd-plugin-brand);`} />
    {:else}
      <OscdArrowDownIcon svgStyles={`fill: var(--oscd-plugin-brand);`} />
    {/if}
  </summary>

  <div class="body">
    {#if couldNotEvaluate}
      <div class="field field--error">
        <span class="label">Status</span>
        <span class="reason">
          {rule.status === 'INVALID_RULE' ? 'Invalid XPath syntax' : 'Could not be evaluated'}{rule.rejectReason ? `: ${rule.rejectReason}` : '.'}
        </span>
      </div>
      {#each rule.diagnostics as diagnostic}
        <div class="field field--error">
          <span class="label">{diagnostic.field === 'assert' ? 'Assertion' : 'Context'}</span>
          <span class="reason">{diagnostic.message}</span>
        </div>
      {/each}
    {/if}
    {#if rule.description}
      <p>{rule.description}</p>
    {/if}
    {#if lineNumbers.length > 0}
      <div class="field field--lines">
        <span class="label">{lineNumbers.length === 1 ? 'Line' : 'Lines'}</span>
        <ul class="line-numbers" aria-label="Affected lines">
          {#each lineNumbers as lineNumber (lineNumber)}
            <li class="line-number">Line {lineNumber}</li>
          {/each}
        </ul>
      </div>
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
    background: color-mix(in srgb, var(--oscd-plugin-error) 6%, var(--oscd-plugin-surface));
    border-radius: 6px;
    overflow: hidden;
  }

  .item--passed {
    background: var(--base2);
  }

  .item--error {
    background: var(--oscd-plugin-surface-muted);
  }

  .item--error .title,
  .item--error .body p {
    color: var(--base1, #93a1a1);
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
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--oscd-plugin-brand);
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
    color: var(--oscd-plugin-text);
    line-height: 1.5;
    text-align: left;
  }

  .field {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .field--error .reason {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--base1, #93a1a1);
  }

  .field--lines {
    align-items: flex-start;
  }

  .field--lines .label {
    padding-top: 3px;
  }

  .line-numbers {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    min-width: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .line-number {
    padding: 2px 6px;
    border: 1px solid color-mix(in srgb, var(--oscd-plugin-error) 35%, var(--oscd-plugin-surface));
    border-radius: 3px;
    background: color-mix(in srgb, var(--oscd-plugin-error) 8%, var(--oscd-plugin-surface));
    color: var(--oscd-plugin-error);
    font-family: 'Roboto Mono', monospace;
    font-size: var(--ew-font-size-small, 0.75rem);
    font-weight: 600;
    white-space: nowrap;
  }

  .label {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-small, 0.75rem);
    font-weight: var(--ew-font-weight-medium, 500);
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
