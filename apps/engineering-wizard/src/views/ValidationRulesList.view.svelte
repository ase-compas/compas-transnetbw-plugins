<script lang="ts">
  import SearchInput from '../components/shared/SearchInput.svelte';
  import type { XPathValidation } from '@oscd-transnet-plugins/shared';
  import { OscdBasicDataTable } from '@oscd-transnet-plugins/oscd-component';
  import Button, { Label, Icon } from '@smui/button';
  import { OscdArrowBackIcon } from '@oscd-transnet-plugins/oscd-icons';

  import { engineeringProcesses, engineeringProcessesStatus } from '../features/processes/stores.svelte';

  interface Props {
    /** Auto-provided by the router: returns to the previous route. */
    onExit: () => void;
  }

  const { onExit }: Props = $props();

  interface ValidationRuleRow extends XPathValidation {
    processName: string;
    pluginName: string;
    displayName: string;
  }

  let searchQuery = $state('');

  const processes = $derived(engineeringProcesses.processes ?? []);

  const validationRules = $derived<ValidationRuleRow[]>(
    processes.flatMap((process) =>
      (process.pluginGroups ?? []).flatMap((group) =>
        (group.plugins ?? []).flatMap((plugin) =>
          (plugin.validations ?? []).map((validation) => ({
            ...validation,
            processName: process.name || process.id,
            pluginName: plugin.name || plugin.id,
            displayName: validation.title || validation.context,
          }))
        )
      )
    )
  );

  const normalizedQuery = $derived(searchQuery.trim().toLowerCase());

  const filteredRules = $derived(
    normalizedQuery
      ? validationRules.filter(
          (rule) =>
            rule.displayName.toLowerCase().includes(normalizedQuery) ||
            rule.description.toLowerCase().includes(normalizedQuery) ||
            rule.processName.toLowerCase().includes(normalizedQuery) ||
            rule.pluginName.toLowerCase().includes(normalizedQuery)
        )
      : validationRules
  );

  const columns = [
    { key: 'displayName', header: 'Rule Name', bold: true, width: '20%' },
    { key: 'description', header: 'Description', width: '35%' },
    { key: 'processName', header: 'Process', width: '20%' },
    { key: 'pluginName', header: 'Plugin', width: '15%' },
    { key: 'message', header: 'Message', width: '10%' },
  ] as const;
</script>

<div class="validation-rules-list">
  <div class="validation-rules-list__toolbar">
    <div class="validation-rules-list__toolbar-start">
      <Button
        type="button"
        variant="unelevated"
        aria-label="Go back"
        onclick={onExit}
        style="--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base);"
      >
        <Icon><OscdArrowBackIcon svgStyles="fill: var(--primary-base); width: 18px; height: 18px;" /></Icon>
        <Label>Back</Label>
      </Button>
      <h1 class="validation-rules-list__title">Validation Rules</h1>
    </div>
    <SearchInput bind:value={searchQuery} label="Search Rules" />
  </div>

  <OscdBasicDataTable
    items={filteredRules}
    {columns}
    loading={engineeringProcessesStatus.loading}
    errorMsg={engineeringProcessesStatus.error}
    emptyText="No validation rules available."
    headerBg="#DAE3E6"
    rowBg="#ffffff"
  />
</div>

<style>
  .validation-rules-list {
    margin-top: 16px;
    padding: 0 24px;
  }

  .validation-rules-list__title {
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: var(--ew-font-size-h1, 1.25rem);
    font-weight: var(--ew-font-weight-heading, 600);
    color: var(--primary-base);
    margin: 0;
    margin-left: 8px;
    white-space: nowrap;
  }

  .validation-rules-list__toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    gap: 12px;
  }

  .validation-rules-list__toolbar-start {
    display: flex;
    align-items: center;
    gap: 0;
  }
</style>
