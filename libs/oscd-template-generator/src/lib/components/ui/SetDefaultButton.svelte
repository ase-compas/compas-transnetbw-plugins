<script lang="ts">
import Button from '@smui/button';
import { OscdStarIcon } from '@oscd-transnet-plugins/oscd-icons';
import { createEventDispatcher } from 'svelte';
export let disabled: boolean = false;
const dispatch = createEventDispatcher();
 $: iconStyles = disabled ? 'fill: var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, .38));; width: 100%; height: 100%;' : 'fill: var(--primary-base); width: 100%; height: 100%;';
</script>
<Button
  disabled={disabled}
  color="primary"
  variant="outlined"
  on:click={() => dispatch('click')}>
  <OscdStarIcon svgStyles={iconStyles}/> Set as Default
</Button>
