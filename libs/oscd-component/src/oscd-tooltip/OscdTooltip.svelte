<script>
  export let content = "";
  export let side = "top";
  export let hoverDelay = 0; // in ms, default 0 for backwards compatibility
  const id = `tt-${Math.random().toString(36).slice(2)}`;
  // Compute transition-delay style for the bubble
  $: delayStyle = `transition-delay: ${hoverDelay}ms, ${hoverDelay}ms, 0s;`;
</script>

<span class="tt" tabindex="0" aria-describedby={content ? id : undefined}>
  <slot />
  {#if content}
    <span id={id} role="tooltip" class="bubble {side}" style={delayStyle}>
      {content}
    </span>
  {/if}
</span>

<style>
  .tt {
    position: relative;
    display: inline-block;
  }

  .bubble {
    --pad-y: 6px;
    --pad-x: 10px;
    --radius: 4px;
    --offset: 8px;

    position: absolute;
    left: 50%;
    bottom: calc(100% + var(--offset));
    transform: translateX(-50%) translateY(-4px);
    background: #000;
    color: #fff;
    font-size: 0.85rem;
    line-height: 1.2;
    padding: var(--pad-y) var(--pad-x);
    border-radius: var(--radius);
    white-space: nowrap;
    box-shadow: 0 4px 14px rgba(0,0,0,.25);
    pointer-events: none;

    opacity: 0;
    visibility: hidden;
    transition: opacity .12s ease, transform .12s ease, visibility .12s;
    z-index: 9999;
  }

  .tt:hover .bubble,
  .tt:focus-within .bubble {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }

  .bubble::after {
    content: "";
    position: absolute;
    left: 50%;
    width: 8px;
    height: 8px;
    transform: translateX(-50%) rotate(45deg);
    background: #000;
    bottom: -4px;
  }

  .bubble.bottom {
    top: calc(100% + var(--offset));
    bottom: auto;
    transform: translateX(-50%) translateY(4px);
  }
  .tt:hover .bubble.bottom,
  .tt:focus-within .bubble.bottom {
    transform: translateX(-50%) translateY(0);
  }
  .bubble.bottom::after {
    top: -4px;
    bottom: auto;
  }
</style>
