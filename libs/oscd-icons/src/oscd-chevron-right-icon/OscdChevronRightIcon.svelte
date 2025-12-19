<script lang="ts">
  import OscdIconBase from '../oscd-icon-base/OscdIconBase.svelte';

  interface Props {
    svgStyles?: string;
  }

  let { svgStyles = '' }: Props = $props();
</script>

<OscdIconBase>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" style="{svgStyles}">
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
  </svg>
</OscdIconBase>
