<script lang="ts">
  import Button from '@smui/button';
  import { OscdMoreVertIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    onClick?: () => void;
    variant?: 'text' | 'outlined' | 'raised' | 'unelevated' | 'default';
    disabled?: boolean;
  }

  let { onClick = () => {}, variant='unelevated', disabled = false }: Props  = $props();
</script>

  <Button
    onclick={onClick}
    class="button-shape-round"
    variant={variant}
    style={variant === 'default' ? 'background: white;' : '' }
    disabled={disabled}
  >
    <OscdMoreVertIcon svgStyles={variant === 'text' || variant === 'outlined' || variant === 'default' ? 'fill: var(--primary-base)' : ''}/>
  </Button>
