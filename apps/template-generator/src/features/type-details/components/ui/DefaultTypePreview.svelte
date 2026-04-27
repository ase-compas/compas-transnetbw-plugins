<script lang="ts">
  import CircularProgress from '@smui/circular-progress';
  import { OscdWarningBox } from '@oscd-transnet-plugins/oscd-component';
  import type { ApplySingleDefaultTypePreview } from '../../services/type.service';

  interface Props {
    preview: ApplySingleDefaultTypePreview | null;
    loading: boolean;
    error: string;
    allowUseExistingDefault?: boolean;
  }

  let { preview = null, loading = false, error = '', allowUseExistingDefault = false }: Props = $props();

  function getLatestVersion(preview: ApplySingleDefaultTypePreview): string {
    let version = '-';

    if (preview.plan.scenario === 'ADD_DB_DEFAULT' || preview.plan.scenario === 'UPGRADE_TO_DB_DEFAULT') {
      version = preview.plan.dbBefore?.version ?? '-';
    } else if (preview.plan.scenario === 'USE_LOCAL_DEFAULT') {
      version = preview.plan.localBefore?.version ?? '-';
    }

    return version;
  }
</script>

{#if loading}
  <div class="loading-default-container">
    <CircularProgress style="height: 18px; width: 18px;" indeterminate />
    <span>Loading latest default...</span>
  </div>
{/if}

{#if error}
  <OscdWarningBox message={error} />
{/if}

{#if preview && !error}
  <p class="latest-version-line">
    <span class="latest-version-label">Latest Version:</span>
    <span class="latest-version-value">{getLatestVersion(preview)}</span>
  </p>

  {#if preview.plan.scenario === 'REMOVE_LOCAL_DEFAULT'}
    <OscdWarningBox message="No default exists for this type." />
  {:else if preview.plan.scenario === 'USE_LOCAL_DEFAULT' && !allowUseExistingDefault}
    <OscdWarningBox message="Latest default is already loaded. A default type can only be added once." />
  {/if}
{/if}

<style>
  .loading-default-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #475569;
    font-size: 0.9rem;
  }

  .latest-version-line {
    margin: 0;
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
  }

  .latest-version-label {
    color: #475569;
    font-weight: 500;
  }

  .latest-version-value {
    color: #1e293b;
    font-weight: 600;
  }
</style>
