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
    background: #fff;
    color: #004552;
    padding: 12px;
  }

  .osc-card--primary {
    --osc-card-bg: #004552;
    --osc-card-fg: #ffffff;
  }

  .osc-card--secondary {
    --osc-card-bg: #ffffff;
    --osc-card-fg: #004552;
  }
</style>
