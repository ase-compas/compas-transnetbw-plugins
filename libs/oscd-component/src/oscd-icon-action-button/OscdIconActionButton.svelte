<script lang="ts">
  import {
    OscdControlPointDuplicateIcon,
    OscdDeleteIcon,
    OscdEditIcon,
    OscdVisibilityIcon,
    OscdWandStarsIcon,
    OscdLinkOffIcon,
    OscdCloseIcon,
    OscdStarIcon,
    OscdInputCircleIcon,
    OscdInfoIcon,
    OscdOpenInNewIcon
  } from '@oscd-transnet-plugins/oscd-icons';
  import { OscdTooltip } from '@oscd-transnet-plugins/oscd-component';

  // ===== Parameters =====
  interface Props {
    /** Tooltip text to display on hover */
    tooltip: string;
    /** Side of the tooltip */
    tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
    /** Type of action button, e.g., 'delete' or 'duplicate' */
    type: 'delete' | 'duplicate' | 'close' | 'edit' | 'visibility' | 'wand-stars' | 'link-off' | 'star' | 'open_in_new' | 'info' | 'input-circle';
    /** Delay in ms before showing the tooltip */
    showDelay?: number;
    /** Fill color for the icon SVG */
    fillColor?: string;
    /** Click event handler for the button */
    onClick: (e: MouseEvent) => void;
    /** Size of the icon button */
    size?: string;
  }

  let {
    tooltip,
    tooltipSide = 'top',
    type,
    showDelay = 1000,
    fillColor = 'var(--mdc-theme-primary)',
    size = '20px',
    onClick
  }: Props = $props();

  let styles = $derived(`fill: ${fillColor}; margin: 0; width: ${size}; height: ${size};`);
</script>
 <OscdTooltip content={tooltip} hoverDelay={showDelay} side={tooltipSide}>

  <button
    aria-label={tooltip}
    class="icon-button"
    onclick={(e)=> {
      e.stopPropagation(); // blocks bubbling forward to the row click handler
      onClick?.(e);
    }}
  >
    {#if type === 'delete'}
      <OscdDeleteIcon svgStyles={styles} />
    {:else if type === 'duplicate'}
      <OscdControlPointDuplicateIcon svgStyles={styles} />
    {:else if type === 'edit'}
      <OscdEditIcon svgStyles={styles} />
    {:else if type === 'visibility'}
      <OscdVisibilityIcon svgStyles={styles} />
    {:else if type === 'wand-stars'}
      <OscdWandStarsIcon svgStyles={styles} />
    {:else if type === 'link-off'}
      <OscdLinkOffIcon svgStyles={styles} />
    {:else if type === 'close'}
      <OscdCloseIcon svgStyles={styles} />
    {:else if type === 'star'}
      <OscdStarIcon svgStyles={styles} />
    {:else if type === 'open_in_new'}
      <OscdOpenInNewIcon svgStyles={styles} />
    {:else if type === 'info'}
      <OscdInfoIcon svgStyles={styles} />
    {:else if type === 'input-circle'}
      <OscdInputCircleIcon svgStyles={styles} />
    {:else}
      Unsupported supported type: {type}
    {/if}
  </button>
</OscdTooltip>

<style>
  .icon-button {
    all: unset;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
  }
</style>
