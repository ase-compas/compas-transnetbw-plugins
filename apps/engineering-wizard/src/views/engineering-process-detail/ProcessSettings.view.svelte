<script lang="ts">
  import Textfield from '@smui/textfield';
  import { selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { updateProcessMetadata } from '../../features/processes/mutations.svelte';

  let proc = $derived(selectedEngineeringProcess.process);

  let name = $state('');
  let description = $state('');
  let version = $state('');

  // Sync local fields when the selected process changes
  $effect(() => {
    if (proc) {
      name = proc.name;
      description = proc.description;
      version = proc.version;
    }
  });

  function applyName() {
    if (proc) updateProcessMetadata(proc.id, { name: name.trim() });
  }

  function applyDescription() {
    if (proc) updateProcessMetadata(proc.id, { description: description.trim() });
  }

  function applyVersion() {
    if (proc) updateProcessMetadata(proc.id, { version: version.trim() });
  }
</script>

{#if proc}
  <div class="settings-form">
    <h3 class="section-title">Process Settings</h3>

    <div class="form-grid">
      <div class="field">
        <Textfield
          variant="outlined"
          label="Process name"
          bind:value={name}
          onblur={applyName}
        />
      </div>

      <div class="field">
        <Textfield
          variant="outlined"
          label="Process ID"
          value={proc.id}
          disabled
        />
      </div>

      <div class="field">
        <Textfield
          variant="outlined"
          label="Version"
          bind:value={version}
          onblur={applyVersion}
        />
      </div>

      <div class="field field--wide">
        <Textfield
          variant="outlined"
          label="Description"
          bind:value={description}
          onblur={applyDescription}
        />
      </div>
    </div>
  </div>
{/if}

<style>
  * { font-family: 'Roboto', sans-serif; }

  .settings-form {
    max-width: 800px;
  }

  .section-title {
    margin: 0 0 16px;
    color: var(--primary-base);
    font-size: 1.125rem;
    font-weight: 600;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 160px;
    gap: 12px;
    align-items: start;
  }

  .field--wide {
    grid-column: 1 / -1;
  }

  .field :global(.mdc-text-field) {
    width: 100%;
  }
</style>

