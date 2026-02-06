<script lang="ts">
  import OscdIconBase from '../oscd-icon-base/OscdIconBase.svelte';

  interface Props {
    svgStyles?: string;
  }

  let { svgStyles = '' }: Props = $props();
</script>

<OscdIconBase>
  <svg style={svgStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
  </svg>
</OscdIconBase>
