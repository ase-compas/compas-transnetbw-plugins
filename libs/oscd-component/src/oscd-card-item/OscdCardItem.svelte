<script lang="ts">
  export type CardVariant = 'primary' | 'secondary';
  export let variant: CardVariant = 'secondary';
</script>

<div
  class="osc-card"
  class:osc-card--primary={variant === 'primary'}
  class:osc-card--secondary={variant === 'secondary'}
  {...$$restProps}
>
  <slot />
</div>

<style>
  .osc-card {
    display: flex;
    border-radius: 4px;
    background: var(--on-brand);
    color: var(--brand);
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
</style>
