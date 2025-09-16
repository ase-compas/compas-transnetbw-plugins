<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';
  export let content: string = "";
  export let side: TooltipSide = "top";
  export let hoverDelay: number = 0;
  export let transitionDuration: number = 80;

  const id = `tt-${Math.random().toString(36).slice(2)}`;
  let triggerEl: HTMLSpanElement | null = null;
  let tooltipEl: HTMLDivElement | null = null;
  let shadow: ShadowRoot | null = null;
  let bubbleEl: HTMLDivElement | null = null;
  let show = false;
  let hoverTimeout: ReturnType<typeof setTimeout> | null = null;

  // --- Hover / focus handlers ---
  function handleMouseEnter() {
    if (!content) return;
    if (hoverDelay > 0) {
      hoverTimeout = setTimeout(() => show = true, hoverDelay);
    } else {
      show = true;
    }
  }

  function handleMouseLeave() {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    show = false;
  }

  // --- Position tooltip relative to trigger ---
  function updateTooltipPosition() {
    if (!tooltipEl || !bubbleEl || !triggerEl) return;
    const rect = triggerEl.getBoundingClientRect();
    const tooltipRect = bubbleEl.getBoundingClientRect();
    let top = 0;
    let left = 0;
    const offset = 8;
    switch (side) {
      case 'top':
        top = rect.top - tooltipRect.height - offset;
        left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        break;
      case 'bottom':
        top = rect.bottom + offset;
        left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        break;
      case 'left':
        top = rect.top + rect.height / 2 - tooltipRect.height / 2;
        left = rect.left - tooltipRect.width - offset;
        break;
      case 'right':
        top = rect.top + rect.height / 2 - tooltipRect.height / 2;
        left = rect.right + offset;
        break;
    }
    tooltipEl.style.top = `${top + window.scrollY}px`;
    tooltipEl.style.left = `${left + window.scrollX}px`;
  }

  onMount(() => {
    tooltipEl = document.createElement('div');
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.zIndex = '9999';
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.opacity = '0';
    tooltipEl.style.transition = `opacity ${transitionDuration}ms ease`;
    tooltipEl.id = id;
    tooltipEl.setAttribute('role', 'tooltip');
    document.body.appendChild(tooltipEl);

    shadow = tooltipEl.attachShadow({ mode: 'open' });
    // Style for tooltip and arrow
    const style = document.createElement('style');
    style.textContent = `
      .bubble {
        --pad-y: 6px;
        --pad-x: 10px;
        --radius: 4px;
        background: #000;
        color: #fff;
        font-size: 0.85rem;
        line-height: 1.2;
        padding: var(--pad-y) var(--pad-x);
        border-radius: var(--radius);
        white-space: nowrap;
        box-shadow: 0 4px 14px rgba(0,0,0,.25);
        pointer-events: none;
        position: relative;
        transition: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      }
      .bubble::after {
        content: "";
        position: absolute;
        background: #000;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
      }
      .bubble.top::after {
        left: 50%;
        bottom: -4px;
        transform: translateX(-50%) rotate(45deg);
      }
      .bubble.bottom::after {
        left: 50%;
        top: -4px;
        transform: translateX(-50%) rotate(45deg);
      }
      .bubble.left::after {
        top: 50%;
        right: -4px;
        transform: translateY(-50%) rotate(45deg);
      }
      .bubble.right::after {
        top: 50%;
        left: -4px;
        transform: translateY(-50%) rotate(45deg);
      }
    `;
    shadow.appendChild(style);
    bubbleEl = document.createElement('div');
    bubbleEl.className = `bubble ${side}`;
    bubbleEl.innerHTML = content;
    shadow.appendChild(bubbleEl);

    // Observe DOM changes to reposition if needed
    const observer = new MutationObserver(() => {
      if (show) updateTooltipPosition();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (tooltipEl) document.body.removeChild(tooltipEl);
      observer.disconnect();
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  });

  // --- Reactively show / hide tooltip and update content/side ---
  $: if (bubbleEl) {
    bubbleEl.className = `bubble ${side}`;
    bubbleEl.innerHTML = content;
  }
  $: if (tooltipEl) {
    tooltipEl.style.opacity = (show && content) ? '1' : '0';
    if (show && content) updateTooltipPosition();
  }
</script>

<!-- Trigger -->
<span
  bind:this={triggerEl}
  tabindex="0"
  aria-describedby={content ? id : undefined}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <slot />
</span>
