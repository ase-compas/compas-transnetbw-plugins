<script lang="ts">
  import OscdIconBase from '../oscd-icon-base/OscdIconBase.svelte';

  interface Props {
    svgStyles?: string;
  }

  let { svgStyles = '' }: Props = $props();
</script>

<OscdIconBase>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" style={svgStyles}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
</OscdIconBase>

