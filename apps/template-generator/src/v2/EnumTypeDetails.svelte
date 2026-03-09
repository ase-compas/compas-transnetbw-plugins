<script lang="ts">
	import { OscdInput } from '@oscd-transnet-plugins/oscd-component';
	import DataTable, { Body, Cell, Head, Row } from '@smui/data-table';
	import Checkbox from '@smui/checkbox';
	import type { DataTypeMember } from './model';

	interface Props {
		members: DataTypeMember[];
		isEditMode: boolean;
		onMemberChange?: (selected: string[]) => void;
	}

	let {
		members,
		isEditMode,
		onMemberChange
	}: Props = $props();

	let searchQuery = $state('');
	let selected: string[] = $state([]);

	// in edit mode show all members, else only configured, additionally filter by search query
	let filteredMembers = $derived.by(() => {
		return members
			.filter(member => {
				if (isEditMode) {
					return true;
				}
				return member.isConfigured;
			})
			.filter(member => member.name.toLowerCase().includes(searchQuery.toLowerCase()));
	});

	function getLiteralValue(member: DataTypeMember): string {
		const literalValue = member.attributes?.literalValue;
		const ord = member.attributes?.ord;
		return String(literalValue ?? ord ?? '');
	}

	$effect(() => {
		if (onMemberChange) {
			onMemberChange($state.snapshot(selected));
		}
	});

	$effect(() => {
		selected = members.filter(member => member.isConfigured).map(member => member.name);
	});
</script>

{#if members && members.length !== 0}
<div class="oscd-card oscd-container enum-type-details">
	<OscdInput
		bind:value={searchQuery}
		icon="search"
		label="Search..."
		variant="outlined"
	/>

	<DataTable style="width: 100%; margin-top: 1rem;">
		<Head style="font-weight: bold;">
			<Row>
				{#if isEditMode}
					<Cell checkbox><Checkbox/></Cell>
				{/if}
				<Cell numeric><strong>Ord</strong></Cell>
				<Cell><strong>Label</strong></Cell>
			</Row>
		</Head>

		<Body>
			{#each filteredMembers as item (item.name)}
				<Row style="background: white">
					{#if isEditMode}
						<Cell checkbox>
							<Checkbox
								bind:group={selected}
								value={item.name}
							/>
						</Cell>
					{/if}
					<Cell style="width: 80px;" numeric>{getLiteralValue(item)}</Cell>
					<Cell><strong>{item.name}</strong></Cell>
				</Row>
			{/each}
		</Body>
	</DataTable>
</div>
{/if}