<script>
  import { onDestroy } from 'svelte';

  export let content = '';
  export let hoverDelay = 300;
  export let hideDelay = 500;

  let timeout;
  let hideTimeout;
  let wrapper;
  let tooltipEl;
  let rect = { left: 0, top: 0, width: 0 };

  function handleMouseEnter() {
    clearTimeout(hideTimeout);
    rect = wrapper.getBoundingClientRect();
    timeout = setTimeout(() => {
      createTooltip();
    }, hoverDelay);
  }

  function handleMouseLeave() {
    clearTimeout(timeout);
    hideTimeout = setTimeout(() => {
      removeTooltip();
    }, hideDelay);
  }

  function createTooltip() {
    removeTooltip();
    tooltipEl = document.createElement('div');
    tooltipEl.setAttribute('role', 'tooltip');
    tooltipEl.textContent = content;
    Object.assign(tooltipEl.style, {
      position: 'fixed',
      left: `${rect.left + rect.width / 2}px`,
      top: `${rect.top - 8}px`,
      transform: 'translate(-50%, -100%)',
      zIndex: '9999',
      background: '#222',
      opacity: '0.9',
      color: '#fff',
      padding: '4px 12px',
      borderRadius: '4px',
      fontSize: '0.8rem',
      fontFamily: 'Roboto, Arial, sans-serif',
      boxShadow: '0px 3px 6px rgba(0,0,0,0.16), 0px 1.5px 3px rgba(0,0,0,0.23)',
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      letterSpacing: '0.01em',
      lineHeight: '1.4',
      userSelect: 'none'
    });
    document.body.appendChild(tooltipEl);
  }

  function removeTooltip() {
    if (tooltipEl && tooltipEl.parentNode) {
      tooltipEl.parentNode.removeChild(tooltipEl);
      tooltipEl = null;
    }
  }

  onDestroy(() => {
    clearTimeout(timeout);
    clearTimeout(hideTimeout);
    removeTooltip();
  });
</script>

<span
  bind:this={wrapper}
  style="display: inline-block;"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <slot />
</span>
