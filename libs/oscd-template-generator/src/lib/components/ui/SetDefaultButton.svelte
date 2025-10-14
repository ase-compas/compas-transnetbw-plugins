<script lang="ts">
import Button from '@smui/button';
import { OscdStarIcon } from '@oscd-transnet-plugins/oscd-icons';
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
</script>
<Button
  color="primary"
  variant="outlined"
  on:click={() => dispatch('click')}>
  <OscdStarIcon svgStyles="fill: var(--primary-base); width: 100%; height: 100%"/> Set as Default
</Button>
