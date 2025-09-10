<script lang="ts">
  import { drawers, closeDrawer } from '../../stores/drawerStackStore';
  import { fly } from 'svelte/transition';
  import type { Drawer } from '../../stores/drawerStackStore';
  import { onMount, onDestroy } from 'svelte';
  import { OscdIconActionButton } from '@oscd-transnet-plugins/oscd-component';
  import Button from '@smui/button';

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
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.3rem;
    border-bottom: 1px solid #ddd;
    font-weight: 500;
    font-size: 1.5rem;
    color: #dae3e6;
    background: var(--mdc-theme-primary, #ff3e00);
  }

  .drawer-body {
    flex: 1;
    overflow: auto;
    padding: 1rem;
  }

  .drawer-header__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .drawer-header__breadcrumbs {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.75);
    gap: 0.25rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .breadcrumb-back {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    margin-right: 0.5rem;
  }

  .breadcrumb-separator {
    color: rgba(255, 255, 255, 0.5);
  }

  .breadcrumb-segment {
    color: rgba(255, 255, 255, 0.65);
  }

  .breadcrumb-current {
    color: #fff;
    font-weight: 500;
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
      in:fly={{ x: baseWidth + 200, duration: 200 }}
      out:fly={{ x: baseWidth + 200, duration: 200 }}
    >
      <div class="drawer-header">
        <div class="drawer-header__actions">
          <Button
            variant="unelevated"
            color="primary"
            style="background: white;
            color: var(--mdc-theme-primary, #ff3e00)"
            on:click={() => closeDrawer('save')}
          >Save & Close</Button>
          <Button
            variant="unelevated"
            color="secondary"
            style="
            background: #6B9197;
            color: white"
            on:click={() => closeDrawer('cancel')}
          >Cancel</Button>
        </div>


        <div class="drawer-header__breadcrumbs">
          {#each drawerList.slice(0, index) as d}
            <span class="breadcrumb-segment">{d.title}</span>
            <span class="breadcrumb-separator">›</span>
          {/each}

          <span class="breadcrumb-current">{drawer.title}</span>
        </div>



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
