<script lang="ts">
  import OscdBox from './OscdBox.svelte';

  interface Props {
    children?: import('svelte').Snippet;
    message?: string;
  }

  let { children, message }: Props = $props();
</script>

<OscdBox type="warning" {message} {children} />
