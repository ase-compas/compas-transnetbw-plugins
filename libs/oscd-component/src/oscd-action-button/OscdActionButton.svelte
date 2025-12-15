<script lang="ts">
  import Button from '@smui/button';
  import { OscdMoreVertIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    onClick?: () => void;
    variant?: 'text' | 'outlined' | 'raised' | 'unelevated';
  }

  let { onClick = () => {}, variant='unelevated'}: Props  = $props();
</script>

  <Button
    onclick={onClick}
    class="button-shape-round"
    variant={variant}
  >
    <OscdMoreVertIcon svgStyles={variant === 'text' || variant === 'outlined' ? 'fill: var(--primary-base)' : ''}/>
  </Button>
