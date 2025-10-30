<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { OscdChevronLeftIcon } from '../../../../../libs/oscd-icons/src';

  interface Props {
    title?: string;
  }

  let { title = 'Engineering Wizard' }: Props = $props();
  const dispatch = createEventDispatcher();
  function onBack() { dispatch('back'); }
</script>

<div style="display:flex;align-items:center;gap:0.5rem;">
  <button type="button" class="back-container" onclick={onBack}>
    <OscdChevronLeftIcon></OscdChevronLeftIcon>
    <span>Back to Overview</span>
    <span class="back-container__title">{title}</span>
  </button>
</div>

<style>
  .back-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #DAE3E6;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }

  .back-container__title {
    margin-left: 1rem;
    color: white;
  }
</style>
