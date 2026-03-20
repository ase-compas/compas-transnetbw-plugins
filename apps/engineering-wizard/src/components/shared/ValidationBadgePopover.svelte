<script lang="ts">
  import { untrack } from 'svelte';
  import type { RuleResult } from '../../services/validationStatusStore.svelte';
  import { OscdWarningIcon, OscdCheckIcon } from '@oscd-transnet-plugins/oscd-icons';
  import ValidationRuleItem from './ValidationRuleItem.svelte';

  interface Props { rules: RuleResult[]; active?: boolean; }
  let { rules, active = false }: Props = $props();

  let failedRules = $derived(rules.filter((r) => !r.passed));
  let passedRules = $derived(rules.filter((r) => r.passed));
  let count = $derived(failedRules.length);

  let open = $state(false);
  let unseen = $state(false);
  let hideTimer: ReturnType<typeof setTimeout> | undefined;

  // Set unseen when count changes (skip first mount). Only tracks `count` —
  // `active` is read via untrack so switching plugin doesn't re-trigger this.
  let firstRun = true;
  $effect(() => {
    count;
    if (firstRun) { firstRun = false; return; }
    if (untrack(() => active)) unseen = true;
  });

  // Cancel any pending hide timer when the component is destroyed.
  $effect(() => () => clearTimeout(hideTimer));

  function show() {
    clearTimeout(hideTimer);
    hideTimer = undefined;
    unseen = false;
    open = true;
  }

  function hide() {
    hideTimer = setTimeout(() => { open = false; }, 150);
  }
</script>

<div class="wrapper">
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <span class="badge" class:badge--unseen={unseen && active} onmouseenter={show} onmouseleave={hide}>
    {#key `${count}-${unseen && active}`}<span class="badge-count">{count}</span>{/key}
  </span>

  {#if open}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="panel" onmouseenter={show} onmouseleave={hide}>
      <div class="panel-header">
        <span class="panel-title">Validation rules</span>
      </div>
      <div class="section-header section-header--failed">
        <span>{count} rule{count === 1 ? '' : 's'} failed</span>
        <OscdWarningIcon fill="var(--red)" size="16px" />
      </div>
      <ul class="rule-list">
        {#each failedRules as rule}
          <li><ValidationRuleItem {rule} /></li>
        {/each}
      </ul>

      {#if passedRules.length > 0}
        <div class="section-header section-header--passed">
          <span>{passedRules.length} rule{passedRules.length === 1 ? '' : 's'} passed</span>
          <OscdCheckIcon svgStyles="fill: var(--primary-base);" />
        </div>
        <ul class="rule-list">
          {#each passedRules as rule}
            <li><ValidationRuleItem {rule} passed /></li>
          {/each}
        </ul>
      {/if}
    </div>
  {/if}
</div>

<style>
  @keyframes badge-bounce {
    0%   { transform: scale(1); }
    20%  { transform: scale(1.5); }
    40%  { transform: scale(0.85); }
    60%  { transform: scale(1.2); }
    80%  { transform: scale(0.95); }
    100% { transform: scale(1); }
  }

  .wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-left: 6px;
  }

  /* Transparent bridge covering the gap between badge and panel */
  .wrapper::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 12px;
    pointer-events: auto;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 5px;
    border-radius: 10px;
    background-color: var(--red);
    color: var(--white);
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    box-sizing: border-box;
    cursor: default;
  }

  .badge-count {
    animation: badge-bounce 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  .badge--unseen .badge-count {
    animation: badge-bounce 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  }

  .panel {
    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
    width: 600px;
    max-height: 800px;
    overflow-y: auto;
    background: var(--white);
    border: 1px solid var(--base3);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }

  .panel::before {
    content: '';
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    border: 7px solid transparent;
    border-top: none;
    border-bottom-color: var(--base3);
    pointer-events: none;
  }

  .panel::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border: 7px solid transparent;
    border-top: none;
    border-bottom-color: var(--white);
    pointer-events: none;
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 16px 12px;
    position: sticky;
    top: 0;
    background: var(--white);
    z-index: 1;
  }

  .panel-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-base);
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    font-size: 12px;
  }

  .section-header--failed { color: var(--red); }
  .section-header--passed { color: var(--primary-base); }

  .rule-list {
    list-style: none;
    margin: 0;
    padding: 0 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

</style>
