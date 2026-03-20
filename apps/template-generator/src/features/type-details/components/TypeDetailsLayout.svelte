<script lang="ts">
  import type { Snippet } from 'svelte';
  import { TypeKind, type ViewMode } from '../../../shared/model';
  import TypeHeader from './ui/TypeHeader.svelte';

  interface Props {
    loading: boolean;
    error: string | null;
    typeKind: TypeKind;
    typeId: string;
    instanceType?: string;
    isEditMode: boolean;
    onModeChange: (mode: ViewMode) => void;
    onInstanceTypeChange?: (instanceType: string) => void;
    onRename: () => void;
    onDelete: () => void;
    children?: Snippet;
  }

  let {
    loading,
    error,
    typeKind,
    typeId,
    instanceType,
    isEditMode,
    onModeChange,
    onInstanceTypeChange = (_: string) => {},
    onRename,
    onDelete,
    children,
  }: Props = $props();
</script>

{#if loading}
  <p>Loading...</p>
{:else if error}
  <div class="error">{error}</div>
{:else}
  <TypeHeader
    type={typeKind}
    {typeId}
    {instanceType}
    {isEditMode}
    onModeChange={(mode) => onModeChange(mode)}
    onInstanceTypeChange={(value) => onInstanceTypeChange(value)}
    onRename={onRename}
    onDelete={onDelete}
  />
  {@render children?.()}
{/if}
