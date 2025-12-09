<script lang="ts">
  import OscdIconBase from '../oscd-icon-base/OscdIconBase.svelte';

  interface Props {
    svgStyles?: string;
  }

  let { svgStyles = 'fill: gray; width: 25px; height: 25px' }: Props = $props();
</script>

<OscdIconBase>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" style={svgStyles}>
    <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z"/>
  </svg>
</OscdIconBase>
