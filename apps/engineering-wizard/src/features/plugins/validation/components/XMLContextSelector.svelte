<script lang="ts">
  import { OscdClearableSelect } from '@oscd-transnet-plugins/oscd-component';

  const nodes = [
    'Substation',
    'VoltageLevel',
    'Bay',
    'ConductingEquipment',
    'Terminal',
    'ConnectivityNode',
  ];

  let value: string | null = null;
</script>
<OscdClearableSelect
  placeholder="Select next node"
  clearable
  bind:value
  options={nodes}
/>
