<script lang="ts">
import Button from '@smui/button';
import { OscdStarIcon } from '@oscd-transnet-plugins/oscd-icons';

type Props = {
  disabled?: boolean;
  onClick: () => void;
};

const {
  disabled = false,
  onClick
}: Props = $props();

let iconStyles = $derived.by(() => {
  return disabled
    ? 'fill: var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, .38)); width: 1.3em; height: 1.3em; vertical-align: middle;'
    : 'fill: var(--oscd-plugin-brand); width: 1.3em; height: 1.3em; vertical-align: middle;'
    ;
})
</script>
<Button
  disabled={disabled}
  variant="default"
  style="background: var(--oscd-plugin-surface);"
  onclick={onClick}>
  <div style="margin-right: 0.2rem;"><OscdStarIcon svgStyles={iconStyles}/></div> Set as Default
</Button>
