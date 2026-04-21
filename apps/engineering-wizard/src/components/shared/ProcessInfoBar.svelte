<script lang="ts">
  import Textfield from '@smui/textfield';
  import { selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { updateProcessMetadata } from '../../features/processes/mutations.svelte';

  let proc = $derived(selectedEngineeringProcess.process);

  function onNameInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    if (proc) updateProcessMetadata(proc.id, { name: value });
  }

  function onDescriptionInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    if (proc) updateProcessMetadata(proc.id, { description: value });
  }
</script>

{#if proc}
  <div class="info-bar">
    <div class="field field--grow">
      <Textfield
        variant="outlined"
        label="Process name"
        value={proc.name}
        oninput={onNameInput}
      />
    </div>

    <div class="field field--fixed">
      <Textfield
        variant="outlined"
        label="Process ID"
        value={proc.id}
        disabled
      />
    </div>

    <div class="field field--narrow">
      <Textfield
        variant="outlined"
        label="Version"
        value={proc.version}
        disabled
      />
    </div>

    <div class="field field--grow">
      <Textfield
        variant="outlined"
        label="Description"
        value={proc.description}
        oninput={onDescriptionInput}
      />
    </div>
  </div>
{/if}

<style>
  * { font-family: 'Roboto', sans-serif; }

  .info-bar {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    padding: 12px 1rem;
    border-bottom: 1px solid var(--mdc-theme-surface, #e0e0e0);
    background: var(--white, #fff);
  }

  .field {
    min-width: 0;
  }

  .field :global(.mdc-text-field) {
    width: 100%;
  }

  .field--grow {
    flex: 1 1 0;
  }

  .field--fixed {
    flex: 0 0 180px;
  }

  .field--narrow {
    flex: 0 0 120px;
  }
</style>

