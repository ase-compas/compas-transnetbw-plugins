<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Process } from '@oscd-transnet-plugins/shared';

  export let proc: Process | null = null;

  const dispatch = createEventDispatcher<{
    back: void;
    start: Process;
  }>();
</script>

<div class="container">
  {#if !proc}
    <div class="empty-state">
      <p>No process selected.</p>
      <button class="btn" on:click={() => dispatch('back')}>Back to list</button>
    </div>
  {:else}
    <h1 class="title">Process Details</h1>

    <div class="card">
      <div class="row"><span class="label">ID</span><span class="value">{proc.id}</span></div>
      <div class="row"><span class="label">Name</span><span class="value">{proc.name}</span></div>
      <div class="row"><span class="label">Version</span><span class="value">{proc.version}</span></div>
      <div class="row"><span class="label">Description</span><span class="value">{proc.description}</span></div>
    </div>

    <h2 class="subtitle">Plugins</h2>
    {#if !proc.plugins || proc.plugins.length === 0}
      <p class="muted">No plugins defined for this process.</p>
    {:else}
      <ol class="plugins-list">
        {#each proc.plugins as pl, i (pl.id)}
          <li class="plugin-card">
            <div class="plugin-header">
              <span class="order">{i + 1}.</span>
              <div>
                <p class="plugin-name">{pl.name || pl.id}</p>
                {#if pl.type}
                  <p class="plugin-type">{pl.type}</p>
                {/if}
              </div>
            </div>
            {#if pl.description}
              <p class="description">{pl.description}</p>
            {/if}
          </li>
        {/each}
      </ol>
    {/if}

    <div class="actions">
      <button class="btn" on:click={() => dispatch('back')}>Back</button>
      <button class="btn primary" on:click={() => dispatch('start', proc)}>START PROCESS</button>
    </div>
  {/if}
</div>

<style>
  * { font-family: Roboto, sans-serif; }

  .container { max-width: 800px; margin: 2rem auto; padding: 1rem; }
  .empty-state { text-align: center; }
  .title { font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem; }
  .subtitle { font-size: 1.4rem; font-weight: 600; margin: 1rem 0; }
  .muted { color: #666; }

  .card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .row {
    display: grid;
    grid-template-columns: 150px 1fr;
    margin: 0.4rem 0;
  }
  .label { font-weight: 600; color: #004552; }
  .value { color: #333; }

  .plugins-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem; }
  .plugin-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    padding: 0.75rem;
  }
  .plugin-header {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }
  .order { font-weight: 700; color: #004552; }
  .plugin-name { font-weight: 600; }
  .plugin-type { font-size: 0.85rem; color: #777; }
  .description { margin-top: 0.5rem; font-size: 0.9rem; color: #555; }

  .btn {
    cursor: pointer; background: #1a3e4a; color: #fff;
    padding: 6px 14px; border: none; border-radius: 0.4rem;
  }
  .btn.primary { background: #0e2931; }
  .actions { display: flex; gap: 0.75rem; margin-top: 1rem; }
</style>
