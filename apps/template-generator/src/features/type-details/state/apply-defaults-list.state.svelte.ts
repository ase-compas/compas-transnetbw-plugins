import { defaultMService } from '../../../bootstrap';
import type { DefaultTypeKey } from '../../default-types/types';
import type {
    LocalDefaultWithStatus,
    UpgradeInfo,
} from '../services/default-manager-service';

export type AppliedDefaultGroupStatus = 'current' | 'outdated' | 'unavailable';
export type AppliedDefaultVersionStatus = LocalDefaultWithStatus['status'];

export type AppliedDefaultVersionRow = {
    id: string;
    key: DefaultTypeKey;
    keyString: string;
    version: string;
    rootId: string;
    status: AppliedDefaultVersionStatus;
    latestVersion: string | null;
    selectable: boolean;
    checked: boolean;
};

export type AppliedDefaultGroupRow = {
    id: string;
    key: DefaultTypeKey;
    label: string;
    status: AppliedDefaultGroupStatus;
    latestVersion: string | null;
    versionCount: number;
    outdatedCount: number;
    checked: boolean;
    indeterminate: boolean;
    showVersions: boolean;
    versions: AppliedDefaultVersionRow[];
};

export class ApplyDefaultsListState {
    loading = $state(false);
    error = $state<string | null>(null);
    groups = $state<AppliedDefaultGroupRow[]>([]);

    private selectedVersionIds = $state(new Set<string>());
    private expandedGroupIds = $state(new Set<string>());
    private loadRequestId = 0;

    selectedOutdatedCount = $derived.by(() => this.selectedVersionIds.size);

    outdatedVersionCount = $derived.by(() => this.groups.reduce((sum, group) => sum + group.outdatedCount, 0));

    showOutdatedOnly = $state(false);

    filteredGroups = $derived.by(() => {
        if (!this.showOutdatedOnly) {
            return this.groups;
        }
        return this.groups.filter((group) => group.status === 'outdated');
    });

    async load(doc: XMLDocument | null | undefined): Promise<void> {
        if (!doc) {
            this.error = null;
            this.groups = [];
            this.selectedVersionIds = new Set<string>();
            this.expandedGroupIds = new Set<string>();
            return;
        }

        const requestId = ++this.loadRequestId;
        this.loading = true;
        this.error = null;

        try {
            const localDefaults = await defaultMService.listLocalDefaultsWithStatus(doc);
            if (requestId !== this.loadRequestId) {
                return;
            }

            this.groups = this.mapToGroups(localDefaults);
            this.pruneStateAfterLoad();
            this.syncUiState();
        } catch (error) {
            if (requestId !== this.loadRequestId) {
                return;
            }

            this.groups = [];
            this.selectedVersionIds = new Set<string>();
            this.error = 'Could not load applied defaults. Please try again.';
            console.error('Failed to load applied defaults:', error);
        } finally {
            if (requestId === this.loadRequestId) {
                this.loading = false;
            }
        }
    }

    toggleGroup(groupId: string): void {
        const group = this.groups.find((item) => item.id === groupId);
        if (!group) {
            return;
        }

        const outdatedVersionIds = group.versions
            .filter((version) => version.selectable)
            .map((version) => version.id);

        if (outdatedVersionIds.length === 0) {
            return;
        }

        const allSelected = outdatedVersionIds.every((versionId) => this.selectedVersionIds.has(versionId));
        const next = new Set(this.selectedVersionIds);

        if (allSelected) {
            outdatedVersionIds.forEach((versionId) => next.delete(versionId));
        } else {
            outdatedVersionIds.forEach((versionId) => next.add(versionId));
        }

        this.selectedVersionIds = next;
        this.syncUiState();
    }

    toggleVersion(versionId: string): void {
        const version = this.findVersion(versionId);
        if (!version || !version.selectable) {
            return;
        }

        const next = new Set(this.selectedVersionIds);
        if (next.has(versionId)) {
            next.delete(versionId);
        } else {
            next.add(versionId);
        }

        this.selectedVersionIds = next;
        this.syncUiState();
    }

    setGroupExpanded(groupId: string, open: boolean): void {
        const next = new Set(this.expandedGroupIds);
        if (open) {
            next.add(groupId);
        } else {
            next.delete(groupId);
        }

        this.expandedGroupIds = next;
        this.syncUiState();
    }

    toggleGroupExpanded(groupId: string): void {
        this.setGroupExpanded(groupId, !this.expandedGroupIds.has(groupId));
    }

    clearSelection(): void {
        this.selectedVersionIds = new Set<string>();
        this.syncUiState();
    }

    getSelectedUpgradeInfos(): UpgradeInfo[] {
        const selectedUpgrades = this.collectUpgradeInfos((version) => this.selectedVersionIds.has(version.id));
        return selectedUpgrades;
    }

    getAllOutdatedUpgradeInfos(): UpgradeInfo[] {
        const allOutdatedUpgrades = this.collectUpgradeInfos((version) => version.selectable);
        return allOutdatedUpgrades;
    }

    private collectUpgradeInfos(predicate: (version: AppliedDefaultVersionRow) => boolean): UpgradeInfo[] {
        const unique = new Map<string, UpgradeInfo>();

        for (const group of this.groups) {
            for (const version of group.versions) {
                if (!predicate(version)) {
                    continue;
                }

                const key = `${version.keyString}:${version.version}`;
                unique.set(key, {
                    key: version.key,
                    version: version.version,
                });
            }
        }

        return Array.from(unique.values());
    }

    private findVersion(versionId: string): AppliedDefaultVersionRow | undefined {
        for (const group of this.groups) {
            const found = group.versions.find((version) => version.id === versionId);
            if (found) {
                return found;
            }
        }

        return undefined;
    }

    private mapToGroups(localDefaults: LocalDefaultWithStatus[]): AppliedDefaultGroupRow[] {
        const grouped = new Map<string, LocalDefaultWithStatus[]>();

        for (const item of localDefaults) {
            const keyString = this.getKeyString(item.metadata.key);
            const entries = grouped.get(keyString) ?? [];
            entries.push(item);
            grouped.set(keyString, entries);
        }

        return Array.from(grouped.entries()).map(([groupId, versionsWithStatus]) => {
            const first = versionsWithStatus[0];
            const versionRows = versionsWithStatus.map((entry) => this.mapVersionRow(entry));
            const outdatedCount = versionRows.filter((version) => version.status === 'outdated').length;

            return {
                id: groupId,
                key: first.metadata.key,
                label: `${first.metadata.key.kind} / ${first.metadata.key.instance}`,
                status: this.deriveGroupStatus(versionRows),
                latestVersion: first.latestVersion,
                versionCount: versionRows.length,
                outdatedCount,
                checked: false,
                indeterminate: false,
                showVersions: false,
                versions: versionRows,
            };
        });
    }

    private mapVersionRow(entry: LocalDefaultWithStatus): AppliedDefaultVersionRow {
        const keyString = this.getKeyString(entry.metadata.key);
        return {
            id: `${keyString}:${entry.metadata.version}:${entry.metadata.rootId}`,
            key: entry.metadata.key,
            keyString,
            version: entry.metadata.version,
            rootId: entry.metadata.rootId,
            status: entry.status,
            latestVersion: entry.latestVersion,
            selectable: entry.status === 'outdated',
            checked: false,
        };
    }

    private deriveGroupStatus(versions: AppliedDefaultVersionRow[]): AppliedDefaultGroupStatus {
        const outdatedCount = versions.filter((version) => version.status === 'outdated').length;
        const currentCount = versions.filter((version) => version.status === 'current').length;
        const unavailableCount = versions.filter((version) => version.status === 'unavailable').length;

        if (outdatedCount > 0) {
            return 'outdated';
        }

        if (versions.length === 1 && currentCount === 1) {
            return 'current';
        }

        if (unavailableCount === versions.length) {
            return 'unavailable';
        }

        return 'outdated';
    }

    private pruneStateAfterLoad(): void {
        const availableVersionIds = new Set<string>();
        const selectableVersionIds = new Set<string>();
        const groupIds = new Set<string>();

        for (const group of this.groups) {
            groupIds.add(group.id);
            for (const version of group.versions) {
                availableVersionIds.add(version.id);
                if (version.selectable) {
                    selectableVersionIds.add(version.id);
                }
            }
        }

        this.selectedVersionIds = new Set(
            Array.from(this.selectedVersionIds).filter(
                (id) => availableVersionIds.has(id) && selectableVersionIds.has(id),
            ),
        );

        this.expandedGroupIds = new Set(Array.from(this.expandedGroupIds).filter((id) => groupIds.has(id)));
    }

    private syncUiState(): void {
        const selected = this.selectedVersionIds;
        const expanded = this.expandedGroupIds;

        this.groups = this.groups.map((group) => {
            const versions = group.versions.map((version) => ({
                ...version,
                checked: selected.has(version.id),
            }));

            const outdatedVersions = versions.filter((version) => version.selectable);
            const selectedOutdatedCount = outdatedVersions.filter((version) => version.checked).length;

            return {
                ...group,
                versions,
                showVersions: expanded.has(group.id),
                checked: outdatedVersions.length > 0 && selectedOutdatedCount === outdatedVersions.length,
                indeterminate: selectedOutdatedCount > 0 && selectedOutdatedCount < outdatedVersions.length,
            };
        });
    }

    private getKeyString(key: DefaultTypeKey): string {
        return `${key.kind}:${key.instance}`;
    }
}
