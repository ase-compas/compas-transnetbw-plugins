<script lang="ts">
	import Checkbox from "@smui/checkbox";
	import FormField from "@smui/form-field";
	import { OscdBadge } from "@oscd-transnet-plugins/oscd-component";
	import { OscdInputCircleIcon } from "@oscd-transnet-plugins/oscd-icons";
	import Button, { Icon } from "@smui/button";
	import type { AppliedDefaultVersionRow as AppliedDefaultVersion } from "../state/apply-defaults-list.state.svelte";

	interface Props {
		row: AppliedDefaultVersion;
		onToggleSelection: (versionId: string) => void;
		onUpgrade: (versionId: string) => void;
	}

	let {
		row,
		onToggleSelection,
		onUpgrade,
	}: Props = $props();

	type BadgeType = "success" | "error" | "warning";

	const statusBadge = $derived.by(() => {
		if (row.status === "current") {
			return { type: "success" as BadgeType, label: "Current" };
		}

		if (row.status === "outdated") {
			return { type: "error" as BadgeType, label: "Outdated" };
		}

		return { type: "warning" as BadgeType, label: "Unavailable" };
	});

		const isCurrentOrUnavailable = $derived(!row.selectable);
		const rowHint = $derived.by(() => {
			if (row.status === "current") {
				return "Already latest";
			}

			if (row.status === "unavailable") {
				return "No latest version available";
			}

			return null;
		});
</script>

	<div class="applied-default-version-row" class:applied-default-version-row--inactive={isCurrentOrUnavailable}>
	<div class="applied-default-version-row__main">
		<FormField>
			<Checkbox
				checked={row.checked}
				disabled={!row.selectable}
				onchange={() => onToggleSelection(row.id)}
			/>
			{#snippet label()}
				<span class="applied-default-version-row__version">v{row.version}</span>
			{/snippet}
		</FormField>
		<OscdBadge type={statusBadge.type} label={statusBadge.label} size="small" />
		{#if row.status === "outdated" && row.latestVersion}
			<span class="applied-default-version-row__latest">latest: {row.latestVersion}</span>
		{/if}
		{#if rowHint}
			<span class="applied-default-version-row__hint">{rowHint}</span>
		{/if}
		<div class="applied-default-version-row__root">
			<span class="applied-default-version-row__root-label">Root ID</span>
			<span class="applied-default-version-row__root-value" title={row.rootId}>{row.rootId}</span>
		</div>
	</div>

	<div class="applied-default-version-row__meta">
		{#if row.status === "outdated"}
			<Button variant="outlined" onclick={() => onUpgrade(row.id)}>
				<Icon>
					<OscdInputCircleIcon svgStyles="fill: currentColor; width: 18px; height: 18px; margin: 0;" />
				</Icon>
				Update to Latest
			</Button>
		{/if}
	</div>
</div>

<style>
	.applied-default-version-row {
		border: 1px solid #e6e9ef;
		border-radius: 8px;
		padding: 0.5rem 0.75rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.applied-default-version-row--inactive {
		opacity: 0.8;
	}

	.applied-default-version-row__main {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.applied-default-version-row__meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-left: auto;
	}

	.applied-default-version-row__version {
		font-size: var(--tg-font-size-body);
		font-weight: var(--tg-font-weight-heading);
	}

	.applied-default-version-row__latest {
		font-size: var(--tg-font-size-small);
		color: #697786;
	}

	.applied-default-version-row__hint {
		font-size: var(--tg-font-size-small);
		color: #697786;
	}

	.applied-default-version-row__root {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.15rem 0.4rem;
		border: 1px solid #e1e6ef;
		border-radius: 6px;
		background: #f6f8fb;
	}

	.applied-default-version-row__root-label {
		font-size: var(--tg-font-size-small);
		color: #607080;
		font-weight: var(--tg-font-weight-medium);
    }

	.applied-default-version-row__root-value {
		font-size: var(--tg-font-size-small);
		color: #425466;
		font-family: var(--tg-font-family), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
	}
</style>