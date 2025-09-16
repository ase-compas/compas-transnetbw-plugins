<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';

  export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';
  export let content: string = "";
  export let side: TooltipSide = "top";
  export let hoverDelay: number = 0; // in ms, default 0 for backwards compatibility
  export let transitionDuration: number = 80;
  const id = `tt-${Math.random().toString(36).slice(2)}`;
  $: delayStyle = `transition-delay: ${hoverDelay}ms, ${hoverDelay}ms, 0s;`;
  let triggerEl: HTMLSpanElement | null = null;
  let show = false;
  let observer: IntersectionObserver | null = null;
  let hoverTimeout: ReturnType<typeof setTimeout> | null = null;

  function handleMouseEnter() {
    if (hoverDelay > 0) {
      hoverTimeout = setTimeout(() => (show = true), hoverDelay);
    } else {
      show = true;
    }
  }
  function handleMouseLeave() {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    show = false;
  }
  function handleFocus() {
    show = true;
  }
  function handleBlur() {
    show = false;
  }

  onMount(() => {
    if (!triggerEl) return;
    observer = new IntersectionObserver(
      ([entry]) => {
        if (show && entry.intersectionRatio === 0) {
          show = false;
        }
      },
      { threshold: 0 }
    );
    observer.observe(triggerEl);
  });
  onDestroy(() => {
    if (observer && triggerEl) observer.unobserve(triggerEl);
    if (hoverTimeout) clearTimeout(hoverTimeout);
  });
</script>

<span
  class="tt"
  bind:this={triggerEl}
  tabindex="0"
  aria-describedby={content ? id : undefined}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:focus={handleFocus}
  on:blur={handleBlur}
>
  <slot />
  {#if content && show}
    <span
      id={id}
      role="tooltip"
      class="bubble {side}"
      style={delayStyle}
      transition:fade={{ duration: transitionDuration }}
    >
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

    opacity: 1;
    visibility: visible;
    transition: none;
    z-index: 9999;
  }

  .bubble::after {
    content: "";
    position: absolute;
    background: #000;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
  }

  /* Top (default) */
  .bubble.top {
    left: 50%;
    bottom: calc(100% + var(--offset));
    top: auto;
    right: auto;
    transform: translateX(-50%) translateY(-4px);
  }
  .tt:hover .bubble.top,
  .tt:focus-within .bubble.top {
    transform: translateX(-50%) translateY(0);
  }
  .bubble.top::after {
    left: 50%;
    bottom: -4px;
    top: auto;
    right: auto;
    transform: translateX(-50%) rotate(45deg);
  }

  /* Bottom */
  .bubble.bottom {
    left: 50%;
    top: calc(100% + var(--offset));
    bottom: auto;
    right: auto;
    transform: translateX(-50%) translateY(4px);
  }
  .tt:hover .bubble.bottom,
  .tt:focus-within .bubble.bottom {
    transform: translateX(-50%) translateY(0);
  }
  .bubble.bottom::after {
    left: 50%;
    top: -4px;
    bottom: auto;
    right: auto;
    transform: translateX(-50%) rotate(45deg);
  }

  /* Left */
  .bubble.left {
    right: calc(100% + var(--offset));
    left: auto;
    top: 50%;
    bottom: auto;
    transform: translateY(-50%) translateX(-4px);
  }
  .tt:hover .bubble.left,
  .tt:focus-within .bubble.left {
    transform: translateY(-50%) translateX(0);
  }
  .bubble.left::after {
    top: 50%;
    left: auto;
    right: -4px;
    bottom: auto;
    transform: translateY(-50%) rotate(45deg);
  }

  /* Right */
  .bubble.right {
    left: calc(100% + var(--offset));
    right: auto;
    top: 50%;
    bottom: auto;
    transform: translateY(-50%) translateX(4px);
  }
  .tt:hover .bubble.right,
  .tt:focus-within .bubble.right {
    transform: translateY(-50%) translateX(0);
  }
  .bubble.right::after {
    top: 50%;
    left: -4px;
    right: auto;
    bottom: auto;
    transform: translateY(-50%) rotate(45deg);
  }
</style>
