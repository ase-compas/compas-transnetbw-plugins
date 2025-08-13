<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Process } from '@oscd-transnet-plugins/shared';

  export let processes: Process[] = [];
  export let loading = false;
  export let errorMsg = "";

  const dispatch = createEventDispatcher<{
    view: Process;
    start: Process;
  }>();
</script>

<div class="container">
  <h1 class="title">Engineering Processes</h1>

  {#if loading}
    <p>Loading…</p>
  {:else if errorMsg}
    <p class="error">{errorMsg}</p>
  {:else if processes.length === 0}
    <p>No processes found.</p>
  {:else}
    <ol class="processes-list">
      {#each processes as p, i (p.id)}
        <li class="process-card">
          <div class="process-header">
            <span class="order">{i + 1}.</span>
            <div>
              <p class="process-name">{p.name || p.id}</p>
              {#if p.description}
                <p class="process-description">{p.description}</p>
              {/if}
            </div>
          </div>
          <div class="actions">
            <button class="btn" on:click={() => dispatch('start', p)}>START PROCESS</button>
            <button class="btn primary" on:click={() => dispatch('view', p)}>VIEW DETAILS</button>
          </div>
        </li>
      {/each}
    </ol>
  {/if}
</div>

<style>
  * { font-family: Roboto, sans-serif; }

  .container { max-width: 800px; margin: 2rem auto; padding: 1rem; }
  .title { font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem; }
  .error { color: red; }

  .processes-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem; }
  .process-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
  }
  .process-header {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }
  .order { font-weight: 700; color: #004552; }
  .process-name { font-weight: 600; }
  .process-description { font-size: 0.9rem; color: #555; }

  .actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.75rem;
    justify-content: flex-end;
  }
  .btn {
    cursor: pointer;
    background: #1a3e4a;
    color: #fff;
    padding: 6px 14px;
    border: none;
    border-radius: 0.4rem;
  }
  .btn.primary { background: #0e2931; }
</style>
