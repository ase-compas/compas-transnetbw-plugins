<script lang="ts">
  import { closeDialog } from "@oscd-transnet-plugins/oscd-services/dialog";
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import type { ApplyScenario } from '../../services/default-type-manager-service';
  import type { ApplyDefaultTypesPreview, ApplyDefaultTypesPreviewEntry } from "../../services/type.service";

  interface Props {
    open?: boolean;
    applyDefaultPreview: ApplyDefaultTypesPreview
  }

  let {
    open = $bindable(false),
    applyDefaultPreview,
  }: Props = $props();

  const scenarioMeta: Record<ApplyScenario, { label: string; tone: 'success' | 'danger' }> = {
    ADD_DB_DEFAULT: { label: 'To apply', tone: 'success' },
    USE_LOCAL_DEFAULT: { label: 'To apply', tone: 'success' },
    UPGRADE_TO_DB_DEFAULT: { label: 'To apply', tone: 'success' },
    REMOVE_LOCAL_DEFAULT: { label: 'No default', tone: 'danger' },
  };

  type MemberPreviewRow = {
    memberName: string;
    refTypeKey: string;
    refTypeLabel: string;
    scenario: ApplyScenario;
    referenceId: string | null;
    willApply: boolean;
    versionFrom: string | null;
    versionTo: string | null;
    isUpgrade: boolean;
  };

  const entries = $derived(applyDefaultPreview?.entries ?? []);

  function buildMemberRows(previewEntries: ApplyDefaultTypesPreviewEntry[]): MemberPreviewRow[] {
    return previewEntries
      .flatMap((entry) =>
        entry.memberNames.map((memberName) => {
          const scenario = entry.plan.scenario;
          const isUpgrade = scenario === 'UPGRADE_TO_DB_DEFAULT';
          const versionFrom = isUpgrade ? (entry.plan.localBefore?.version ?? null) : null;
          const versionTo = scenario === 'ADD_DB_DEFAULT' || scenario === 'UPGRADE_TO_DB_DEFAULT'
            ? (entry.plan.dbBefore?.version ?? null)
            : scenario === 'USE_LOCAL_DEFAULT'
              ? (entry.plan.localBefore?.version ?? null)
              : null;

          return {
            memberName,
            refTypeKey: entry.refTypeKey,
            refTypeLabel: `${entry.refTypeKind} / ${entry.objectType}`,
            scenario,
            referenceId: entry.plan.effectiveRootId,
            willApply: !!entry.plan.effectiveRootId,
            versionFrom,
            versionTo,
            isUpgrade,
          } satisfies MemberPreviewRow;
        }),
      )
      .sort((a, b) => a.memberName.localeCompare(b.memberName));
  }

  const memberRows = $derived(buildMemberRows(entries));
  const applicableRows = $derived(memberRows.filter((row) => row.willApply));
  const unavailableRows = $derived(memberRows.filter((row) => !row.willApply));
  const totalMembers = $derived(memberRows.length);
</script>

<OscdBaseDialog
  title="Apply Default Preview"
  confirmActionText={applicableRows.length === 0 ? 'Close' : 'Apply'}
  maxWidth="1000px"
  height="auto"
  maxHeight="80vh"
  bind:open
  onConfirm={() => {closeDialog('confirm')}}
  onCancel={() => closeDialog('cancel')}
  onClose={() => closeDialog('exit')}
>
  {#snippet content()}
    <div class="preview-dialog-content">
      <div class="summary-grid">
        <article class="summary-card">
          <div class="summary-label">DataType</div>
          <div class="summary-value">{applyDefaultPreview?.dataTypeId ?? '-'}</div>
        </article>
        {#if totalMembers > 1}
          <article class="summary-card">
            <div class="summary-label">Will Be Assigned</div>
            <div class="summary-value success-text">{applicableRows.length}</div>
          </article>
          <article class="summary-card">
            <div class="summary-label">No Default Available</div>
            <div class="summary-value muted-text">{unavailableRows.length}</div>
          </article>
          <article class="summary-card">
            <div class="summary-label">Data Objects Considered</div>
            <div class="summary-value">{totalMembers}</div>
          </article>
        {/if}
      </div>

      {#if memberRows.length === 0}
        <div class="empty-state">No applicable default updates found for the selected members.</div>
      {:else}
        <section>
          <div class="section-title">Will Be Applied</div>
          {#if applicableRows.length === 0}
            <div class="empty-state">No data objects.</div>
          {:else}
            <div class="rows-list">
              {#each applicableRows as row}
                <article class="row-card">
                  <header class="row-header">
                    <div class="row-title">{row.memberName}</div>
                    <span class={`chip chip-${scenarioMeta[row.scenario].tone}`}>
                      {scenarioMeta[row.scenario].label}
                    </span>
                  </header>
                  <div class="row-grid">
                      <div>
                        <div class="field-label">Reference ID</div>
                        <div class="field-value mono">{row.referenceId}</div>
                      </div>
                      <div>
                        <div class="field-label">Reference Type</div>
                        <div class="field-value">{row.refTypeLabel}</div>
                      </div>
                      <div>
                        <div class="field-label">Version <span class="version-note">(latest)</span></div>
                        <div class="field-value">{row.versionTo ?? '-'}</div>
                      </div>
                    </div>
                </article>
              {/each}
            </div>
          {/if}
        </section>

        {#if unavailableRows.length > 0}
          <section>
            <div class="section-title muted-title">No Default Available</div>
            <div class="rows-list">
              {#each unavailableRows as row}
                <article class="row-card unavailable">
                  <header class="row-header">
                    <div class="row-title muted-text">{row.memberName}</div>
                    <span class="chip chip-danger">No default</span>
                  </header>
                  <div class="row-grid">
                      <div>
                        <div class="field-label">Reference Type</div>
                        <div class="field-value muted-text">{row.refTypeLabel}</div>
                      </div>
                      <div>
                        <div class="field-label">Reason</div>
                        <div class="field-value muted-text">No default exists for this reference type.</div>
                      </div>
                    </div>
                </article>
              {/each}
            </div>
          </section>
        {/if}
      {/if}
    </div>
  {/snippet}
</OscdBaseDialog>

<style>
  .preview-dialog-content {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .summary-card {
    background: var(--white);
    border: 1px solid #d7dde5;
    border-radius: 8px;
    padding: 0.6rem 0.75rem;
  }

  .summary-label {
    font-size: 0.75rem;
    color: #5b6470;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .summary-value {
    margin-top: 0.25rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: #1f2933;
    word-break: break-word;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    font-size: 0.75rem;
    padding: 0.2rem 0.55rem;
    border: 1px solid transparent;
    font-weight: 600;
  }

  .chip-neutral {
    background: #eef1f5;
    border-color: #d0d7e1;
    color: #445266;
  }

  .chip-success {
    background: #e8f7ee;
    border-color: #bde8cd;
    color: #276749;
  }

  .chip-warning {
    background: #fff4e5;
    border-color: #ffd9a8;
    color: #9c5a11;
  }

  .chip-danger {
    background: #fdecec;
    border-color: #f8c8c8;
    color: #a63131;
  }

  .chip-muted {
    background: #eef1f4;
    border-color: #d6dde5;
    color: #708090;
  }

  .section-title {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #3b4a5a;
    margin: 0.25rem 0 0.35rem;
    font-weight: 700;
  }

  .rows-list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .row-card {
    border: 1px solid #d7dde5;
    border-radius: 10px;
    padding: 0.75rem;
    background: var(--white);
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .row-card.unavailable {
    background: #f6f8fa;
  }

  .row-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .row-title {
    font-weight: 700;
    color: #202b36;
  }

  .row-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .field-label {
    font-size: 0.72rem;
    color: #697786;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .field-value {
    margin-top: 0.15rem;
    color: #1f2933;
    font-size: 0.9rem;
    word-break: break-word;
  }

  .version-note {
    font-size: 0.65rem;
    color: #a0aec0;
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  .mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  }

  .success-text {
    color: var(--primary);
  }

  .muted-text {
    color: #718096;
  }

  .muted-title {
    color: #718096;
  }

  .empty-state {
    padding: 0.9rem;
    border: 1px solid #d7dde5;
    border-radius: 8px;
    color: #5f6b7a;
    background: #f9fbfd;
  }

  @media (max-width: 760px) {
    .summary-grid,
    .row-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
