<script lang="ts">
import Button from '@smui/button';
import { OscdStarIcon } from '@oscd-transnet-plugins/oscd-icons';

type Props = {
  disabled?: boolean;
  onClick: () => void;
};

const {
  disabled = false,
  onClick = () => {}
}: Props = $props();



let iconStyles = $derived.by(() => {
  return disabled
    ? 'fill: var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, .38)); width: 100%; height: 100%;'
    : 'fill: var(--primary-base); width: 100%; height: 100%;'
    ;
})
</script>
<Button
  disabled={disabled}
  color="primary"
  variant="outlined"
  onclick={onClick}>
  <OscdStarIcon svgStyles={iconStyles}/> Set as Default
</Button>
