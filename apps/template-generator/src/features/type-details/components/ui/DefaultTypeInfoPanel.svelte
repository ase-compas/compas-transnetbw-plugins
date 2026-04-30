<script lang="ts">
  import type { TypeKind } from '../../../../shared/model';

  interface Props {
    version: string;
    rootId: string;
    kind: TypeKind;
    instance: string;
    currentTypeId?: string;
    onOpenRootType?: (typeId: string, typeKind: TypeKind) => void;
  }

  let {
    version,
    rootId,
    kind,
    instance,
    currentTypeId = '',
    onOpenRootType = () => {}
  }: Props = $props();

  const isRootType = currentTypeId === rootId;
</script>

<div class="default-type-info-panel">
  <div class="default-row">
    <span class="default-row-label">Version</span>
    <span class="default-row-value">{version}</span>
  </div>
  <div class="default-row">
    <span class="default-row-label">Root type</span>
    {#if !isRootType}
      <button
        type="button"
        class="default-link"
        onclick={() => onOpenRootType(rootId, kind)}
      >
        {rootId}
      </button>
    {:else}
      <span class="default-row-value">{rootId}</span>
    {/if}
  </div>
  <div class="default-row">
    <span class="default-row-label">Default key</span>
    <span class="default-row-value">{kind} / {instance}</span>
  </div>
</div>

<style>
  .default-type-info-panel {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .default-row {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 0.4rem;
    align-items: start;
  }

  .default-row-label {
    font-size: 0.65rem;
    color: #677383;
    font-weight: 600;
    padding-top: 0.1rem;
  }

  .default-row-value {
    font-size: 0.82rem;
    color: #1f2933;
    word-break: break-word;
  }

  .default-link {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    text-align: left;
    font: inherit;
    font-size: 0.82rem;
    color: var(--mdc-theme-primary, #3f51b5);
    text-decoration: underline;
    cursor: pointer;
    word-break: break-word;
  }

  .default-link:hover {
    color: #2f3f97;
  }
</style>
