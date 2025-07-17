<script lang="ts">
  export let text: string;
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  let visible = false;
</script>

<style>
  .tooltip-container {
    position: relative;
    display: inline-block;
  }

  .tooltip-box {
    position: absolute;
    white-space: nowrap;
    z-index: 1000;
    padding: 0.4rem 0.6rem;
    background: rgba(0,0,0,0.8);
    color: #fff;
    font-size: 0.75rem;
    border-radius: 4px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .tooltip-box.visible {
    opacity: 1;
  }

  .tooltip-box.top    { bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-0.4rem); }
  .tooltip-box.bottom { top: 100%;  left: 50%; transform: translateX(-50%) translateY(0.4rem); }
  .tooltip-box.left   { right: 100%; top: 50%; transform: translateX(-0.4rem) translateY(-50%); }
  .tooltip-box.right  { left: 100%;  top: 50%; transform: translateX(0.4rem) translateY(-50%); }
</style>

<div
  class="tooltip-container"
  on:mouseenter={() => (visible = true)}
  on:mouseleave={() => (visible = false)}
>
  <slot />
  {#if visible}
    <div class="tooltip-box visible {position}">
      {text}
    </div>
  {/if}
</div>
