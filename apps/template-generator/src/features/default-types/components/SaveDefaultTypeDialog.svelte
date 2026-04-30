<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import Textfield from '@smui/textfield';
  import List, { Item, Graphic, Label } from '@smui/list';
  import Radio from '@smui/radio';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import HelperText from '@smui/textfield/helper-text';
  import CharacterCounter from '@smui/textfield/character-counter';
  import type { SaveDefaultTypeSummary } from '../state/default-type-details.state.svelte';


  interface Props {
    open?: boolean;
    mode: 'create' | 'update';
    initialVersion?: string;
    summary?: SaveDefaultTypeSummary | null;
  }

  let { open = $bindable(false), mode, initialVersion, summary = null }: Props = $props();

  let error: string | null = $state(null);
  let showRemovableTypeIds = $state(false);

  let description: string = $state('');
  let selectedVersionUpdate = $state('');
  function validateSave(): boolean {
    if (mode === 'update' && !selectedVersionUpdate) {
      error = "Please select a version update type.";
      return false;
    }
    return true;
  }


  function handleConfirm() {
    if (validateSave()) {
      closeDialog('confirm', { versionUpdate: selectedVersionUpdate, description: description });
    }
  }

  function handleClose() {
    closeDialog('cancel');
  }

  let valid = $derived.by(() => {
    if (mode === 'update') {
      return selectedVersionUpdate !== '' && selectedVersionUpdate !== null;
    } else {
      return true;
    }
  });

</script>

<OscdBaseDialog
  title={ mode === 'update' ? "Save as new version" : "Create new default type" }
  confirmActionText="Save"
  maxWidth="500px"
  maxHeight="850px"
  bind:open
  onConfirm={handleConfirm}
  onCancel={handleClose}
  onClose={handleClose}
  confirmDisabled={!valid}
>
  {#snippet content()}
    <div class="content">
      <section class="summary">
        <p class="summary__title">Summary</p>
        {#if summary}
          <div class="summary__grid">
            <div class="summary__item">
              <span class="summary__label">Root ID</span>
              <span class="summary__value summary__value--mono">{summary.rootId}</span>
            </div>
            <div class="summary__item">
              <span class="summary__label">Mode</span>
              <span class="summary__value">{summary.mode === 'create' ? 'Create new default type' : 'Save as new version'}</span>
            </div>
            <div class="summary__item">
              <span class="summary__label">Current Version</span>
              <span class="summary__value">{summary.currentVersion || '-'}</span>
            </div>
            <div class="summary__item">
              <span class="summary__label">Total Data Types</span>
              <span class="summary__value">{summary.totalDataTypeCount}</span>
            </div>
            <div class="summary__item">
              <span class="summary__label">Reachable from Root</span>
              <span class="summary__value">{summary.reachableDataTypeCount}</span>
            </div>
            <div class="summary__item">
              <span class="summary__label">Will Be Removed</span>
              <span class="summary__value {summary.removableDataTypeCount > 0 ? 'summary__value--warn' : ''}">
                {summary.removableDataTypeCount}
              </span>
            </div>
          </div>
          <p class="summary__note">
            Unreferenced types (not directly or indirectly referenced from the root data type) will be removed during save.
          </p>
          {#if summary.removableDataTypeCount > 0}
            <button
              type="button"
              class="summary__toggle"
              onclick={() => (showRemovableTypeIds = !showRemovableTypeIds)}
            >
              {showRemovableTypeIds
                ? 'Hide IDs of removable types'
                : `Show IDs of removable types (${summary.removableDataTypeCount})`}
            </button>

            {#if showRemovableTypeIds}
              <ul class="summary__removable-list">
                {#each summary.removableTypeIds as typeId}
                  <li>{typeId}</li>
                {/each}
              </ul>
            {/if}
          {/if}
        {:else}
          <p class="summary__note">Summary is not available yet.</p>
        {/if}
      </section>
      <div class="update-info">
      <h4>Versioning <span class="required-indicator" aria-hidden="true">*</span></h4>
      <div class="update-info__content">
      {#if mode === 'update'}
        <List class="demo-list" radioList>
          <Item>
            <Graphic>
              <Radio bind:group={selectedVersionUpdate} value="major" />
            </Graphic>
            <Label>Major change</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selectedVersionUpdate} value="minor" />
            </Graphic>
            <Label>Minor change</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selectedVersionUpdate} value="patch" />
            </Graphic>
            <Label>Patch change</Label>
          </Item>
        </List>
        <HelperText>Choose one: Major, Minor, or Patch.</HelperText>
      {:else}
      <Textfield
          variant="outlined"
          disabled={true}
          bind:value={initialVersion}
          label="Initial version"
          style="width: 100%;"
          />
      {/if}

        <Textfield
          textarea
          input$maxlength={100}
          bind:value={description}
          label="Description (optional)"
          style="width: 100%;">
          {#snippet helper()}
            <CharacterCounter>0 / 100</CharacterCounter>
          {/snippet}
        </Textfield>
      </div>
        {#if error}
          <HelperText validationMsg>{error}</HelperText>
        {/if}
      </div>
    </div>
  {/snippet}
</OscdBaseDialog>

<style>
  .content {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .update-info__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .required-indicator {
    font-weight: var(--tg-font-weight-bold);
    margin-left: 0.15rem;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    background: #fafafa;
  }

  .summary__title {
    margin: 0;
    font-size: var(--tg-font-size-small);
    font-weight: var(--tg-font-weight-bold);
    color: #555;
  }

  .summary__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem 1rem;
  }

  .summary__item {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-width: 0;
  }

  .summary__label {
    font-size: var(--tg-font-size-small);
    font-weight: var(--tg-font-weight-heading);
    color: #666;
  }

  .summary__value {
    font-size: var(--tg-font-size-body);
    color: #222;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }

  .summary__value--mono {
    font-family: 'Courier New', monospace;
  }

  .summary__value--warn {
    color: #b45309;
    font-weight: var(--tg-font-weight-heading);
  }

  .summary__note {
    margin: 0;
    font-size: var(--tg-font-size-body);
    color: #555;
    line-height: 1.35;
  }

  .summary__toggle {
    border: none;
    background: transparent;
    color: var(--primary);
    font-size: var(--tg-font-size-body);
    font-weight: var(--tg-font-weight-heading);
    text-align: left;
    padding: 0;
    cursor: pointer;
  }

  .summary__toggle:hover {
    text-decoration: underline;
  }

  .summary__removable-list {
    margin: 0;
    padding-left: 1.2rem;
    max-height: 140px;
    overflow: auto;
    color: #374151;
    font-size: var(--tg-font-size-body);
    line-height: 1.35;
  }
</style>
