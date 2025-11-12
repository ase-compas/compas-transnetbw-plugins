<script lang="ts">
  interface Props {
    backgroundColor?: string;
  }

  let {
    backgroundColor = '',
  }: Props = $props();
</script>

<div class="card-parent" style="--bg-color: {backgroundColor}">
  <slot name="header"></slot>
  <slot name="content"></slot>
</div>

<style>
  .card-parent {
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 24px;
    width: 30vw;
    border-radius: 4px;
    padding: 24px;
    background-color: var(--bg-color);
  }
</style>
