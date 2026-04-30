<script lang="ts">
  import { type Snippet } from 'svelte';
  import { TypeKind, type ViewMode } from '../../../shared/model';
  import TypeHeader from './ui/TypeHeader.svelte';
  import type { DataTypeService } from '../services/type.service';
  import type { DetailsConfig } from '../types';

  type HeaderDefaultTypeInfo = {
    kind: TypeKind;
    instance: string;
    version: string;
    rootId: string;
  };

  type HeaderDefaultTypeVersionStatus = {
    currentVersion: string;
    latestVersion: string;
    latestSource: 'local' | 'db';
    localLatestVersion: string | null;
    dbLatestVersion: string | null;
    hasUpdate: boolean;
    isDeprecated: boolean;
  };

  interface Props {
    loading: boolean;
    error: string | null;
    typeKind: TypeKind;
    typeId: string;
    instanceType?: string;
    defaultTypeInfo?: HeaderDefaultTypeInfo;
    defaultTypeVersionStatus?: HeaderDefaultTypeVersionStatus;
    isEditMode: boolean;
    onModeChange: (mode: ViewMode) => void;
    onInstanceTypeChange?: (instanceType: string) => void;
    onOpenDefaultRootType?: (typeId: string, typeKind: TypeKind) => void;
    onUpdateDefaultTypeToLatest?: () => void;
    onDetachDefault?: () => void;
    onClickDefault?: () => void;
    onRename: () => void;
    onDelete: () => void;
    children?: Snippet;

    service: DataTypeService,
    config?: DetailsConfig
  }

  let {
    loading,
    error,
    typeKind,
    typeId,
    instanceType,
    defaultTypeInfo,
    defaultTypeVersionStatus,
    isEditMode,
    onModeChange,
    onInstanceTypeChange = (_: string) => {},
    onOpenDefaultRootType = (_: string, __: TypeKind) => {},
    onUpdateDefaultTypeToLatest = () => {},
    onDetachDefault = () => {},
    onClickDefault = () => {},
    onRename,
    onDelete,
    children,
    service,
    config
  }: Props = $props();
</script>

{#if loading}
  <p>Loading...</p>
{:else if error}
  <div class="error">{error}</div>
{:else}
  {#if config?.includeHeader ?? true}
  <TypeHeader
    type={typeKind}
    {typeId}
    {instanceType}
    {defaultTypeInfo}
    {defaultTypeVersionStatus}
    {isEditMode}
    onModeChange={(mode) => onModeChange(mode)}
    actionsDisabled={config?.actionsDisabled ?? false}
    onInstanceTypeChange={(value) => onInstanceTypeChange(value)}
    onOpenDefaultRootType={(rootTypeId, rootTypeKind) => onOpenDefaultRootType(rootTypeId, rootTypeKind)}
    onUpdateDefaultTypeToLatest={onUpdateDefaultTypeToLatest}
    onDetachDefault={onDetachDefault}
    onClickDefault={onClickDefault}
    toggleEditModeSwitchDisabled={config?.toggleEditModeSwitchDisabled ?? false}
    showSetAsDefault={config?.defaultTypeFeatureEnabled ?? true}
    onRename={onRename}
    onDelete={onDelete}
    {service}
  />
  {/if}
  {@render children?.()}
{/if}
