<script lang="ts">
  import {
    OscdControlPointDuplicateIcon,
    OscdDeleteIcon,
    OscdEditIcon,
    OscdVisibilityIcon,
    OscdWandStarsIcon,
    OscdLinkOffIcon, OscdCloseIcon
  } from '@oscd-transnet-plugins/oscd-icons';
  import { OscdTooltip } from '@oscd-transnet-plugins/oscd-component';

  // ===== Parameters =====
  /** Tooltip text to display on hover */
  export let tooltip: string;
  /** Type of action button, e.g., 'delete' or 'duplicate' */
  export let type: 'delete' | 'duplicate';
  /** Delay in ms before showing the tooltip */
  export let showDelay = 1000;
  /** Fill color for the icon SVG */
  export let fillColor: string = 'var(--mdc-theme-primary)';
  /** Click event handler for the button */
  export let onClick: (e: MouseEvent) => void;

</script>
 <OscdTooltip content={tooltip} hoverDelay={showDelay}>

  <button
    aria-label={tooltip}
    class="icon-button"
    on:click={(e)=> {
      e.stopPropagation(); // blocks bubbling forward to the row click handler
      onClick?.(e);
    }}
  >
    {#if type === 'delete'}
      <OscdDeleteIcon svgStyles="{`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`}" />
    {:else if type === 'duplicate'}
      <OscdControlPointDuplicateIcon svgStyles="{`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`}" />
    {:else if type === 'edit'}
      <OscdEditIcon svgStyles="{`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`}" />
    {:else if type === 'visibility'}
      <OscdVisibilityIcon svgStyles="{`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`}" />
    {:else if type === 'wand-stars'}
      <OscdWandStarsIcon svgStyles="{`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`}" />
    {:else if type === 'link-off'}
      <OscdLinkOffIcon svgStyles="{`fill: ${fillColor}; margin: 0; width: 20px; height: 20px;`}" />
    {:else if type === 'close'}
      <OscdCloseIcon svgStyles="{`fill: ${fillColor}; margin: 0; width: 25px; height: 25px;`}" />
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
