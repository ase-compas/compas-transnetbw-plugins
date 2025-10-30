<script lang="ts">
  import OscdIconBase from '../oscd-icon-base/OscdIconBase.svelte';

  interface Props {
    svgStyles?: string;
  }

  let { svgStyles = '' }: Props = $props();
</script>

<OscdIconBase>
  <svg style={svgStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" >
    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
  </svg>
</OscdIconBase>

