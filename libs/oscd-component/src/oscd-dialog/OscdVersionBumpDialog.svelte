<script lang="ts">
  import OscdBaseDialog from './OscdBaseDialog.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import Button from '@smui/button';
  import { bumpVersion, type VersionBump } from '@oscd-transnet-plugins/shared';

  interface Props {
    open: boolean;
    currentVersion: string;
  }

  let { open = $bindable(false), currentVersion }: Props = $props();

  let selected = $state<VersionBump | ''>('');

  const BUMP_OPTIONS: Array<{ value: VersionBump; label: string; description: string }> = [
    { value: 'major', label: 'Major', description: '(breaking changes, incompatible changes)' },
    { value: 'minor', label: 'Minor', description: '(new features, backwards-compatible)' },
    { value: 'patch', label: 'Patch', description: '(small fixes only, no functional changes)' },
  ];

  function confirm() {
    if (selected) closeDialog('confirm', selected);
  }
</script>

<OscdBaseDialog
  title="Choose version change"
  width="100%"
  maxWidth="600px"
  height="auto"
  maxHeight="auto"
  bind:open
  onClose={() => closeDialog('cancel')}
  onCancel={() => closeDialog('cancel')}
>
  {#snippet content()}
    <div class="content">
      <p>Choose how the version number should be increased</p>
      <p>Current version: <strong>{currentVersion}</strong></p>
      <div class="options">
        {#each BUMP_OPTIONS as option}
          <label class="option" class:option--selected={selected === option.value}>
            <input type="radio" bind:group={selected} value={option.value} />
            <span class="option__label">{option.label}</span>
            <span class="option__preview">→ {bumpVersion(currentVersion, option.value)}</span>
            <span class="option__description">{option.description}</span>
          </label>
        {/each}
      </div>
    </div>
  {/snippet}

  {#snippet actions({ requestClose })}
    <div class="actions">
      <Button type="button" onclick={requestClose} style="text-transform: none">Cancel</Button>
      <Button
        type="button"
        onclick={confirm}
        disabled={!selected}
        style="text-transform: none{selected
          ? '; background-color: var(--mdc-theme-primary, #ff3e00); color: white'
          : ''}"
      >
        Increase version
      </Button>
    </div>
  {/snippet}
</OscdBaseDialog>

<style>
  .content {
    padding-top: 1.25rem;
  }

  .content p {
    margin: 0 0 1.25rem;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .option {
    display: grid;
    grid-template-columns: auto 4.5rem auto 1fr;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: border-color 0.15s;
  }

  .option:hover {
    border-color: var(--mdc-theme-primary, #ff3e00);
  }

  .option--selected {
    border-color: var(--mdc-theme-primary, #ff3e00);
    background-color: rgba(255, 62, 0, 0.04);
  }

  .option input[type='radio'] {
    margin: 0;
    accent-color: var(--mdc-theme-primary, #ff3e00);
  }

  .option__label {
    font-weight: 500;
  }

  .option__preview {
    color: var(--mdc-theme-primary, #ff3e00);
    font-weight: 500;
    font-family: monospace;
    white-space: nowrap;
  }

  .option__description {
    font-size: 0.85rem;
    color: var(--smui-text-secondary-on-background);
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem var(--dialog-h-padding, 1.5rem);
  }
</style>
