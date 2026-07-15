<script lang="ts">
  import type { Router } from './router-core.svelte';

  interface Props {
    router: Router<any>;
    /**
     * Reactive props shared by every route (e.g. `doc`, `docName`, `editCount`
     * passed down from the host). These always reflect the latest value,
     * unlike route params which are a snapshot captured at `navigate()` time.
     * Route params win over `props` when both define the same key.
     */
    props?: Record<string, unknown>;
  }

  let { router, props = {} }: Props = $props();
</script>

{#if router.component}
  {@const Component = router.component}
  <Component
    onExit={() => router.back()}
    {...props}
    {...router.current.params}
  />
{/if}
