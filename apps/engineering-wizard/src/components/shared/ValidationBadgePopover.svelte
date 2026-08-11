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

  let hovering = $state(false);
  let pinned = $state(false);
  let open = $derived(hovering || pinned);

  let unseen = $state(false);

  let firstRun = true;
  $effect(() => {
    count;
    if (firstRun) { firstRun = false; return; }
    if (untrack(() => active)) unseen = true;
  });

  $effect(() => {
    if (!active) pinned = false;
  });

  function onEnter() {
    unseen = false;
    hovering = true;
  }

  function onLeave() {
    hovering = false;
  }

  function togglePin() {
    pinned = !pinned;
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="wrapper" onmouseenter={onEnter} onmouseleave={onLeave}>
  <span class="badge" class:badge--unseen={unseen && active}>
    {#key `${count}-${unseen && active}`}<span class="badge-count">{count}</span>{/key}
  </span>

  {#if pinned}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div class="backdrop" onclick={() => (pinned = false)}></div>
  {/if}

  {#if open}
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Validation rules</span>
        <button
          type="button"
          class="pin-btn"
          class:pin-btn--active={pinned}
          onclick={togglePin}
        >
          {pinned ? 'Unpin' : 'Pin'}
        </button>
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

  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 190;
    background: transparent;
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
    font-weight: 600;
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

  .pin-btn {
    padding: 2px 8px;
    border: 1px solid var(--base3);
    border-radius: 4px;
    background: none;
    font-size: 0.75rem;
    cursor: pointer;
  }

  .pin-btn--active {
    background: var(--primary-base);
    color: var(--white);
    border-color: var(--primary-base);
  }

  .panel-title {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-heading, 1.125rem);
    font-weight: var(--ew-font-weight-heading, 600);
    color: var(--primary-base);
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-normal, 400);
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
