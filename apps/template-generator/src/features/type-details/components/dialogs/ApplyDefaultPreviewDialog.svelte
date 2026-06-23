<script lang="ts">
    import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
    import { OscdBaseDialog, OscdSwitch, OscdBox } from '@oscd-transnet-plugins/oscd-component';
    import Card from '@smui/card';
    import CircularProgress from '@smui/circular-progress';
    import type { DefaultType, DefaultTypeKey } from '../../../default-types/types';
    import { defaultMetadataService } from '../../../../bootstrap';
    import ApplyDefaultMemberRow from './ApplyDefaultMemberRow.svelte';

    interface Member {
        name: string;
        referenceId: string | null;
        type: DefaultTypeKey;
    }

    type MemberPreviewRow = {
        memberName: string;
        refTypeLabel: string;
        referenceId: string | null;
        versionTo: string | null;
        willApply: boolean;
        existingReference: string | null;
        currentVersion: string | null;
    };

    interface Props {
        open?: boolean;
        members?: Member[];
        doc: XMLDocument
        dataTypeId?: string;
    }

    let {
        open = $bindable(false),
        members = [],
        dataTypeId,
        doc
    }: Props = $props();

    let isLoading = $state(false);
    let error = $state<string | null>(null);
    let memberRows = $state<MemberPreviewRow[]>([]);
    let selectedMemberNames = $state(new Set<string>());
    let loadRequestId = 0;

    const applicableRows = $derived(memberRows.filter((row) => row.willApply));
    const unavailableRows = $derived(memberRows.filter((row) => !row.willApply));
    const totalMembers = $derived(memberRows.length);
    const selectedApplicableCount = $derived(
        applicableRows.filter((row) => selectedMemberNames.has(row.memberName)).length,
    );
    const confirmText = $derived(
        applicableRows.length === 0
            ? 'Close'
            : selectedApplicableCount === 0
                ? 'Apply'
                : `Apply (${selectedApplicableCount})`,
    );
    const confirmDisabled = $derived(
        isLoading || (applicableRows.length > 0 && selectedApplicableCount === 0),
    );
    const allApplicableSelected = $derived(
        applicableRows.length > 0 && selectedApplicableCount === applicableRows.length,
    );

    function getDefaultKey(key: DefaultTypeKey): string {
        return `${key.kind}:${key.instance}`;
    }

    function toMemberPreviewRows(inputMembers: Member[], latestDefaults: Map<string, DefaultType>): MemberPreviewRow[] {
        return inputMembers.map((member) => {
            const defaultType = latestDefaults.get(getDefaultKey(member.type));
            return {
                memberName: member.name,
                refTypeLabel: String(member.type.kind),
                referenceId: member.referenceId,
                versionTo: defaultType?.version ?? null,
                willApply: !!defaultType,
                existingReference: member.referenceId,
                currentVersion: getCurrentVersionOfMemberReference(member),
            };
        });
    }

    function getCurrentVersionOfMemberReference(memberElement: Member): string | null {
        if (!doc || !memberElement.referenceId) {
            return null;
        }
        const member = defaultMetadataService.getByTypeId(doc, memberElement.referenceId);
        return member?.version ?? null;
    }

    async function loadPreviewRows(inputMembers: Member[]) {
        const requestId = ++loadRequestId;
        isLoading = true;
        error = null;

        try {
            const latestDefaults = await defaultMService.getLatestDefaults();
            if (requestId !== loadRequestId) {
                return;
            }

            const rows = toMemberPreviewRows(inputMembers, latestDefaults);
            memberRows = rows;
            selectedMemberNames = new Set(rows.filter((row) => row.willApply).map((row) => row.memberName));
        } catch (err) {
            if (requestId !== loadRequestId) {
                return;
            }

            memberRows = [];
            selectedMemberNames = new Set<string>();
            error = 'Could not load defaults. Please try again.';
            console.error('Failed to fetch latest defaults:', err);
        } finally {
            if (requestId === loadRequestId) {
                isLoading = false;
            }
        }
    }

    function toggleMember(memberName: string) {
        if (!applicableRows.some((row) => row.memberName === memberName)) {
            return;
        }

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
            for (const row of applicableRows) {
                next.delete(row.memberName);
            }
        } else {
            for (const row of applicableRows) {
                next.add(row.memberName);
            }
        }
        selectedMemberNames = next;
    }

    $effect(() => {
        void loadPreviewRows(members);
    });
</script>

<OscdBaseDialog
    title="Apply Default Preview"
    confirmActionText={confirmText}
    confirmDisabled={confirmDisabled}
    maxWidth="1000px"
    height="auto"
    maxHeight="80vh"
    bind:open
    onConfirm={() => closeDialog('confirm', { selectedMemberNames: [...selectedMemberNames] })}
    onCancel={() => closeDialog('cancel')}
    onClose={() => closeDialog('exit')}
>
    {#snippet content()}
        <div class="preview-dialog-content">
            {#if isLoading}
                <div class="loading-state">
                    <CircularProgress style="height: 32px; width: 32px;" indeterminate />
                    <span>Loading defaults...</span>
                </div>
            {:else if error}
                <div class="error-state">
                    <OscdBox type="error" message={error}/>
                </div>
            {:else}
                <div class="summary-grid">
                    <Card padded variant="outlined" class="summary-card">
                        <div class="summary-label">DataType</div>
                        <div class="summary-value">{dataTypeId ?? '-'}</div>
                    </Card>
                    {#if totalMembers > 1}
                        <Card padded variant="outlined" class="summary-card">
                            <div class="summary-label">Will Be Applied</div>
                            <div class="summary-value success-text">{selectedApplicableCount}</div>
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
                                        willApply={row.willApply}
                                        isSelected={selectedMemberNames.has(row.memberName)}
                                        existingReference={row.existingReference}
                                        currentVersion={row.currentVersion}
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
                                        willApply={row.willApply}
                                        isSelected={false}
                                        existingReference={row.existingReference}
                                        currentVersion={row.currentVersion}
                                        onToggle={() => toggleMember(row.memberName)}
                                    />
                                {/each}
                            </div>
                        </section>
                    {/if}
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

    .loading-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 2rem 1rem;
        font-size: var(--tg-font-size-small);
    }

    .error-state {
        color: var(--oscd-error, #c53030);
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