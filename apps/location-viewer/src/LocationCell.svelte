<script lang="ts">
  import type { SclResourceModel } from '@oscd-transnet-plugins/oscd-location-viewer';

  type Props = {
    row: SclResourceModel;
    value: string;
    col: any;
    locations: { label: string; value: string }[];
    onChange: (row: SclResourceModel, newLocationUuid: string) => void;
  };

  let {
    row,
    value,
    col,
    locations = [],
    onChange
  }: Props = $props();

  let selected = $state<string>(value ?? '');

  $effect(() => {
    selected = value ?? '';
  });

  $effect(() => {
    if (selected !== (value ?? '')) {
      onChange?.(row, selected);
    }
  });
</script>

<div style="min-width: 180px">
  <select
    bind:value={selected}
    onchange={() => onChange?.(row, selected)}
  >
    <option value="">—</option>
    {#each locations as loc (loc.value)}
      <option value={loc.value}>{loc.label}</option>
    {/each}
  </select>

  <style>
    select {
      width: 100%;
      min-width: 180px;
    }
  </style>
</div>
