<Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  on:SMUIDialog:closed={(e) => {
    (open = false);
    dispatch('close');
  }}
  surface$style="width: 1080px; max-width: calc(100vw - 32px);"
>
  <div class="dialog-title">
    <slot name="title" />
  </div>

  <Content id="large-scroll-content">
    <slot name="content" />
  </Content>

  <Actions>
    <slot name="actions" />
  </Actions>
</Dialog>

<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import {createEventDispatcher} from "svelte";

  export let open = false;

  const dispatch = createEventDispatcher();

  $: console.log('Dialog open status changed:', open);
</script>

<style lang="css">
  .dialog-title {
    padding: 1rem;
    font-size: 24px;
    font-weight: 500;
    border-bottom: 1px solid var(--mdc-theme-on-surface-divider-color);
  }
</style>
