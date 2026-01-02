<script lang="ts">
  /**
   * An action button that opens a menu when clicked.
   * Provide a slot for the menu content.
   */
  import type { Snippet } from 'svelte';
  import Menu from '@smui/menu';
  import { Anchor } from '@smui/menu-surface';
  import { OscdActionButton } from '@oscd-transnet-plugins/oscd-component';

  interface Props {
    anchorCorner?: string;
    buttonVariant?: 'text' | 'outlined' | 'raised' | 'unelevated' | 'default';
    children: Snippet<[any]>;
  }

  let { anchorCorner = 'BOTTOM_RIGHT', buttonVariant = 'unelevated', children }: Props = $props();

  let menu: Menu;
  let anchor: HTMLDivElement | undefined = $state();
  let anchorClasses: { [k: string]: boolean } = $state({});
</script>

<div
  class={Object.keys(anchorClasses).join(' ')}
  use:Anchor={{
    addClass: (className) => {
      if (!anchorClasses[className]) {
        anchorClasses[className] = true;
      }
    },
    removeClass: (className) => {
      if (anchorClasses[className]) {
        delete anchorClasses[className];
      }
    },
  }}
  bind:this={anchor}
>
<OscdActionButton onClick={() => menu.setOpen(true)} variant={buttonVariant}/>
  <Menu
    bind:this={menu}
    anchor={false}
    anchorElement={anchor}
    anchorCorner={anchorCorner}
  >
  {@render children?.()}
  </Menu>
</div>
