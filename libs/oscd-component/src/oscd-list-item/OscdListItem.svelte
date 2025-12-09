<script lang="ts">
  import type { Snippet } from 'svelte';

  export type CardVariant = 'primary' | 'secondary' | 'dashed';

  type Props = {
    variant?: CardVariant;
    children: Snippet<[any]>;
  };

  let { variant = 'secondary', children }: Props = $props();
</script>

<div class={`osc-card osc-card--${variant}`}>
  {@render children?.() }
</div>
<style>
  .osc-card {
    display: flex;
    border-radius: var(--oscd-border-radius, 4px);
    background: var(--osc-card-bg);
    color: var(--osc-card-fg);
    opacity: var(--oscd-opacity, 1);
    padding: 12px;
  }

  .osc-card--primary {
    --osc-card-bg: var(--brand);
    --osc-card-fg: var(--on-brand);
  }

  .osc-card--secondary {
    --osc-card-bg: var(--on-brand);
    --osc-card-fg: var(--brand);
  }

  .osc-card--dashed {
    --osc-card-bg: transparent;
    --osc-card-fg: var(--brand);
    --oscd-opacity: 0.4;
    --oscd-border-radius: 12px;
    border: 2px dashed var(--on-brand);
  }
</style>
