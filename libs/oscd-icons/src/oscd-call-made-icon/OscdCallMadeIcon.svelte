<script lang="ts">
  interface Props {
    size?: string;
    fill?: string;
  }

  let { size = '24px', fill = '#004552' }: Props = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size} fill={fill}><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>

