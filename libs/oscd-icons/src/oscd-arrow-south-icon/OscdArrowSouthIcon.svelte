<script lang="ts">
  import OscdIconBase from '../oscd-icon-base/OscdIconBase.svelte';

  interface Props {
    svgStyles?: string;
  }

  let { svgStyles = '' }: Props = $props();
</script>

<OscdIconBase>
  <svg style={svgStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
    <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/>
  </svg>
</OscdIconBase>

