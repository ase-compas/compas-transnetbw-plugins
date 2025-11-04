<script lang="ts">
  import {
    OscdControlPointDuplicateIcon,
    OscdDeleteIcon,
    OscdEditIcon,
    OscdVisibilityIcon,
    OscdWandStarsIcon,
    OscdLinkOffIcon, OscdCloseIcon, OscdStarIcon
  } from '@oscd-transnet-plugins/oscd-icons';
  import { OscdTooltip } from '@oscd-transnet-plugins/oscd-component';

  // ===== Parameters =====






  interface Props {
    /** Tooltip text to display on hover */
    tooltip: string;
    /** Side of the tooltip */
    tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
    /** Type of action button, e.g., 'delete' or 'duplicate' */
    type: 'delete' | 'duplicate' | 'close' | 'edit' | 'visibility' | 'wand-stars' | 'link-off' | 'star';
    /** Delay in ms before showing the tooltip */
    showDelay?: number;
    /** Fill color for the icon SVG */
    fillColor?: string;
    /** Click event handler for the button */
    onClick: (e: MouseEvent) => void;
  }

  let {
    tooltip,
    tooltipSide = 'top',
    type,
    showDelay = 1000,
    fillColor = 'var(--mdc-theme-primary)',
    onClick
  }: Props = $props();

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
      <OscdDeleteIcon svgStyles={`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`} />
    {:else if type === 'duplicate'}
      <OscdControlPointDuplicateIcon svgStyles={`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`} />
    {:else if type === 'edit'}
      <OscdEditIcon svgStyles={`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`} />
    {:else if type === 'visibility'}
      <OscdVisibilityIcon svgStyles={`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`} />
    {:else if type === 'wand-stars'}
      <OscdWandStarsIcon svgStyles={`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`} />
    {:else if type === 'link-off'}
      <OscdLinkOffIcon svgStyles={`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`} />
    {:else if type === 'close'}
      <OscdCloseIcon svgStyles={`fill: ${fillColor}; margin: 0; width: 25px; height: 25px;`} />
    {:else if type === 'star'}
      <OscdStarIcon svgStyles={`fill: ${fillColor}; margin: 0; width: 25px; height: 25px;`} />
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
