<script lang="ts">
  import { drawers, closeDrawer } from '../../stores/drawerStackStore';
  import { fly } from 'svelte/transition';
  import type { Drawer } from '../../stores/drawerStackStore';
  import { onMount, onDestroy } from 'svelte';
  import { OscdIconActionButton } from '@oscd-transnet-plugins/oscd-component';

  let drawerList: Drawer[] = [];
  const widthStep = 45;

  $: drawerList = $drawers

  let innerWidth = window.innerWidth;

  // update on resize
  function handleResize() {
    innerWidth = window.innerWidth;
  }

  // Handle Escape key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && drawerList.length > 0) {
      closeDrawer('esc');
    }
  }

  onMount(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeydown);
  });

  // Prevent body scroll when drawer is open
  $: {
    if (drawerList.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  onDestroy(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
  });


  $: zBase = 1000;

  // Base width: almost full viewport
  $: baseWidth = Math.floor(Math.max(innerWidth - (widthStep*1.5), 300)); // minimum width 300px
</script>

<style>

  .drawer-stack {
    position: relative;
    top: 0;
    left: 0;
    inset: 0;
    pointer-events: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  .drawer-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    inset: 0;
    background: rgba(0,0,0,0.5);
    pointer-events: all;
  }

  .drawer {
    position: fixed;
    top: 0;
    right: 0; /* right aligned */
    height: 100%;
    background: rgb(237, 241, 242);
    box-shadow: -2px 0 10px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    overflow: hidden;
  }

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: var(--mdc-theme-primary, #ff3e00);
    border-bottom: 1px solid #ddd;
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
  }

  .drawer-body {
    flex: 1;
    overflow: auto;
    padding: 1rem;
  }

  .drawer-actions {
    background-color: white;
    border-top: 1px solid var(--mdc-theme-on-surface-divider-color, rgba(0, 0, 0, 0.12));
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>

<div class="drawer-stack">
  {#if drawerList.length > 0}
    <!-- Single backdrop under the top drawer -->
    <div
      class="drawer-backdrop"
      style="z-index: {zBase + (drawerList.length - 1) * 2};"
      on:click={() => closeDrawer('backdrop')}
      on:pointerdown|stopPropagation
      on:pointerup|stopPropagation
      on:pointermove|stopPropagation
      on:wheel|stopPropagation
    ></div>
  {/if}

  {#each drawerList as drawer, index (index)}
    <div
      class="drawer"
      style="
        width: {baseWidth - index * widthStep}px;
        z-index: {zBase + index * 2 + 1};
      "
      in:fly={{ x: baseWidth + 200, duration: 300 }}
      out:fly={{ x: baseWidth + 200, duration: 300 }}
    >
      <div class="drawer-header">
        <div>{drawer.title}</div>
        <OscdIconActionButton type="close" fillColor="white" onClick={() => closeDrawer("button")}/>
      </div>
      <div class="drawer-body">
        <svelte:component
          this={drawer.component}
          {...drawer.props}
          bind:this={drawer.ref}
        />
      </div>
    </div>
  {/each}
</div>

