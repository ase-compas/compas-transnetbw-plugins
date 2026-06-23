<script lang="ts">
  import { OscdSwitch, OscdBox } from '@oscd-transnet-plugins/oscd-component';
  import Card from '@smui/card';

  interface Props {
    memberName: string;
    refTypeLabel: string;
    referenceId: string | null;
    versionTo: string | null;
    willApply: boolean;
    isSelected: boolean;
    existingReference: string | null;
    currentVersion: string | null;
    onToggle: () => void;
  }

  const {
    memberName,
    refTypeLabel,
    referenceId,
    versionTo,
    willApply,
    isSelected,
    existingReference,
    currentVersion,
    onToggle,
  }: Props = $props();
</script>

<Card
  padded
  variant="outlined"
  class={`row-card ${!willApply ? 'unavailable' : ''}`}
>
  <header class="row-header">
    <div class="row-title" class:muted-text={!willApply}>
      {memberName}
    </div>
    <OscdSwitch
      checked={willApply ? isSelected : false}
      disabled={!willApply}
      onChange={onToggle}
      id={`member-toggle-${memberName}`}
      label="Use default"
      align="end"
      labelStyle={`font-size: 0.8rem; ${
        willApply ? 'color: var(--mdc-theme-primary);' : ''
      }`}
    />
  </header>
  <div class="row-grid">
    {#if willApply}
      <div>
        <div class="field-label">Reference ID</div>
        <div class="field-value mono">{referenceId ?? '-'}</div>
      </div>
      <div>
        <div class="field-label">Reference Type</div>
        <div class="field-value">{refTypeLabel}</div>
      </div>
      <div>
        <div class="field-label">
          Version <span class="version-note">(latest)</span>
        </div>
        <div class="field-value">{versionTo ?? '-'}</div>
      </div>
    {:else}
      <div>
        <div class="field-label">Reference Type</div>
        <div class="field-value muted-text">{refTypeLabel}</div>
      </div>
      <div>
        <div class="field-label">Reason</div>
        <div class="field-value muted-text">
          No default exists for this reference type.
        </div>
      </div>
    {/if}
  </div>
  {#if willApply && existingReference && currentVersion !== versionTo && isSelected}
    <div class="overwrite-box">
      <OscdBox
        type="warning"
        size="compact"
        message="Will overwrite current reference"
      />
    </div>
  {/if}
</Card>

<style>
  :global(.row-card.unavailable) {
    opacity: 0.7;
  }

  .row-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .row-title {
    font-weight: var(--tg-font-weight-heading);
    color: #202b36;

    &.muted-text {
      color: #718096;
    }
  }

  .row-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .field-label {
    font-size: var(--tg-font-size-small);
    color: #697786;
  }

  .field-value {
    margin-top: 0.15rem;
    color: #1f2933;
    font-size: var(--tg-font-size-body);
    word-break: break-word;

    &.muted-text {
      color: #718096;
    }
  }

  .version-note {
    font-size: 0.65rem;
    color: #a0aec0;
    font-weight: var(--tg-font-weight-normal);
    letter-spacing: 0.02em;
  }

  .mono {
    font-family:
      var(--tg-font-family), ui-monospace, SFMono-Regular, Menlo, Monaco,
      Consolas, 'Liberation Mono', 'Courier New', monospace;
  }

  .overwrite-box {
    margin-top: 0.35rem;
  }
</style>
