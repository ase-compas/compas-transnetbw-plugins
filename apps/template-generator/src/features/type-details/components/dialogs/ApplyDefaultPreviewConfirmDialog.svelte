<script lang="ts">
  import { closeDialog } from "@oscd-transnet-plugins/oscd-services/dialog";
  import { OscdBaseDialog, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import Card from '@smui/card';
  import type { ApplyScenario } from '../../services/default-type-manager-service';
  import type { ApplyDefaultTypesPreview, ApplyDefaultTypesPreviewEntry } from "../../services/type.service";
  import ApplyDefaultMemberRow from './ApplyDefaultMemberRow.svelte';

  interface Props {
    open?: boolean;
    applyDefaultPreview: ApplyDefaultTypesPreview;
    configuredMemberNames?: string[];
    memberReferenceMap?: Record<string, string | undefined>;
  }

  let {
    open = $bindable(false),
    applyDefaultPreview,
    configuredMemberNames = [],
    memberReferenceMap = {},
  }: Props = $props();

  let selectedMemberNames = $state(new Set<string>());

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
    existingReference: string | null;
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
            existingReference: memberReferenceMap[memberName] ?? null,
          } satisfies MemberPreviewRow;
        }),
      )
      .sort((a, b) => a.memberName.localeCompare(b.memberName));
  }

  const memberRows = $derived(buildMemberRows(entries));
  const applicableRows = $derived(memberRows.filter((row) => row.willApply));
  const unavailableRows = $derived(memberRows.filter((row) => !row.willApply));
  const totalMembers = $derived(memberRows.length);

  const configuredSet = $derived(new Set(configuredMemberNames));

  $effect(() => {
    const initial = new Set<string>();
    for (const row of applicableRows) {
      if (configuredSet.has(row.memberName)) {
        initial.add(row.memberName);
      }
    }
    selectedMemberNames = initial;
  });

  const selectedCount = $derived(selectedMemberNames.size);
  const confirmText = $derived(
    applicableRows.length === 0
      ? 'Close'
      : selectedCount === 0
        ? 'Apply'
        : `Apply (${selectedCount})`
  );
  const confirmDisabled = $derived(applicableRows.length > 0 && selectedCount === 0);

  const allApplicableSelected = $derived(
    applicableRows.length > 0 && selectedCount === applicableRows.length
  );

  function toggleMember(memberName: string) {
    const next = new Set(selectedMemberNames);
    if (next.has(memberName)) {
      next.delete(memberName);
    } else {
      next.add(memberName);
    }
    selectedMemberNames = next;
  }

  function toggleAllApplicable() {
    const next = new Set(selectedMemberNames);
    if (allApplicableSelected) {
      // Deselect all applicable rows
      for (const row of applicableRows) {
        next.delete(row.memberName);
      }
    } else {
      // Select all applicable rows
      for (const row of applicableRows) {
        next.add(row.memberName);
      }
    }
    selectedMemberNames = next;
  }
</script>

<OscdBaseDialog
  title="Apply Default Preview"
  confirmActionText={confirmText}
  confirmDisabled={confirmDisabled}
  maxWidth="1000px"
  height="auto"
  maxHeight="80vh"
  bind:open
  onConfirm={() => { closeDialog('confirm', { selectedMemberNames: [...selectedMemberNames] }) }}
  onCancel={() => closeDialog('cancel')}
  onClose={() => closeDialog('exit')}
>
  {#snippet content()}
    <div class="preview-dialog-content">
      <div class="summary-grid">
        <Card padded variant="outlined" class="summary-card">
          <div class="summary-label">DataType</div>
          <div class="summary-value">{applyDefaultPreview?.dataTypeId ?? '-'}</div>
        </Card>
        {#if totalMembers > 1}
          <Card padded variant="outlined" class="summary-card">
          <div class="summary-label">Will Be Applied</div>
          <div class="summary-value success-text">{selectedCount}</div>
          </Card>
          <Card padded variant="outlined" class="summary-card">
            <div class="summary-label">No Default Available</div>
            <div class="summary-value muted-text">{unavailableRows.length}</div>
          </Card>
          <Card padded variant="outlined" class="summary-card">
            <div class="summary-label">Data Objects Considered</div>
            <div class="summary-value">{totalMembers}</div>
          </Card>
        {/if}
      </div>

      {#if memberRows.length === 0}
        <Card padded variant="outlined" class="empty-state">No applicable default updates found for the selected members.</Card>
      {:else}
        <section>
          <div class="section-header">
            <div class="section-title">Will Be Applied</div>
            {#if applicableRows.length > 1}
              <OscdSwitch
                checked={allApplicableSelected}
                onChange={toggleAllApplicable}
                id="bulk-toggle-applicable"
                label="All"
                align="end"
                labelStyle="font-size: 0.8rem; color: var(--mdc-theme-primary);"
              />
            {/if}
          </div>
          {#if applicableRows.length === 0}
            <Card padded variant="outlined" class="empty-state">No data objects.</Card>
          {:else}
            <div class="rows-list">
              {#each applicableRows as row}
                <ApplyDefaultMemberRow
                  memberName={row.memberName}
                  refTypeLabel={row.refTypeLabel}
                  referenceId={row.referenceId}
                  versionTo={row.versionTo}
                  refTypeKey={row.refTypeKey}
                  scenario={row.scenario}
                  willApply={row.willApply}
                  isSelected={selectedMemberNames.has(row.memberName)}
                  existingReference={row.existingReference}
                  onToggle={() => toggleMember(row.memberName)}
                />
              {/each}
            </div>
          {/if}
        </section>

        {#if unavailableRows.length > 0}
          <section>
            <div class="section-title muted-title">No Default Available</div>
            <div class="rows-list">
              {#each unavailableRows as row}
                <ApplyDefaultMemberRow
                  memberName={row.memberName}
                  refTypeLabel={row.refTypeLabel}
                  referenceId={row.referenceId}
                  versionTo={row.versionTo}
                  refTypeKey={row.refTypeKey}
                  scenario={row.scenario}
                  willApply={row.willApply}
                  isSelected={selectedMemberNames.has(row.memberName)}
                  existingReference={row.existingReference}
                  onToggle={() => toggleMember(row.memberName)}
                />
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
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .summary-label {
    font-size: var(--tg-font-size-small);
    color: #5b6470;
  }

  .summary-value {
    margin-top: 0.25rem;
    font-size: 0.95rem;
    font-weight: var(--tg-font-weight-heading);
    color: #1f2933;
    word-break: break-word;
  }

  .section-title {
    font-size: var(--tg-font-size-small);
    color: #3b4a5a;
    margin: 0.25rem 0 0.35rem;
    font-weight: var(--tg-font-weight-heading);
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.35rem;
  }

  .section-header .section-title {
    margin: 0;
  }

  .rows-list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
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

  @media (max-width: 760px) {
    .summary-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
