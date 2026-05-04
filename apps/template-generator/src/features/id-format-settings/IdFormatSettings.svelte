<script lang="ts">
  import {
    OscdIdGenerator,
    type IdFormat,
  } from '@oscd-transnet-plugins/oscd-services/id-generator';
  import { TypeKind } from '../../shared/model';
  import IdSettingsCard from './IdSettingsCard.svelte';
  import Card from '@smui/card';
  import Button from '@smui/button';
  import type { IdComponent } from '../id-format-editor/types';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import EditFormatDialog from '../id-format-editor/EditFormatDialog.svelte';
  import { getIdSettingsState } from './id-format-settings.state.svelte';
  import { onMount } from 'svelte';
  import CircularProgress from '@smui/circular-progress';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';

  const state = getIdSettingsState();
  const EMPTY_FORMAT: IdFormat = { segments: [] };
  type Kind = TypeKind | 'global';

  const SETTINGS_SECTIONS: {
    label: string;
    kind: Kind;
    description: string;
  }[] = [
    {
      label: 'Global',
      kind: 'global',
      description: 'Default format for all data types.',
    },
    {
      label: 'LNodeType',
      kind: TypeKind.LNodeType,
      description: 'If enabled, overrides Global for LNodeType.',
    },
    {
      label: 'DOType',
      kind: TypeKind.DOType,
      description: 'If enabled, overrides Global for DOType.',
    },
    {
      label: 'DAType',
      kind: TypeKind.DAType,
      description: 'If enabled, overrides Global for DAType.',
    },
    {
      label: 'EnumType',
      kind: TypeKind.EnumType,
      description: 'If enabled, overrides Global for EnumType.',
    },
  ];

  const REFERENCE_ID_COMPONENTS: IdComponent[] = [
    {
      id: '1',
      description: 'A random 12-character UUID',
      segment: { type: 'UUID' },
    },
    {
      id: '2',
      description: 'Instance of the data type (e.g. LLN0, ENS, ...)',
      segment: { type: 'VARIABLE', value: 'instance' },
    },
    {
      id: '3',
      description:
        'References the parent object (e.g., adding a Health reference while in LLN0)',
      segment: { type: 'VARIABLE', value: 'reference' },
    },
    { id: '4', segment: { type: 'DASH' } },
    { id: '5', segment: { type: 'UNDERSCORE' } },
  ];

  const GENERAL_ID_COMPONENTS: IdComponent[] = REFERENCE_ID_COMPONENTS.filter(
    (c) => c.id !== '3',
  );

  const PREVIEW_CONTEXTS = [
    { instance: 'LLN0', reference: 'Beh' }, // Logical node behavior
    { instance: 'SPS', reference: 'Health' }, // Single point status for health
    { instance: 'XCBR1', reference: 'Pos' }, // Circuit breaker position
    { instance: 'CSWI', reference: 'St' }, // Switch status
    { instance: 'MMXU1', reference: 'Aphs' }, // Measurement unit: phase current
  ];

  async function editIdFormat(
    components: IdComponent[],
    format?: IdFormat,
  ): Promise<IdFormat | undefined> {
    const result = await openDialog(EditFormatDialog, {
      components,
      format: format ?? EMPTY_FORMAT,
      context: PREVIEW_CONTEXTS,
    });
    if (result.type !== 'confirm') {
      return;
    }
    return result.data.format;
  }

  function formatToString(format?: IdFormat): string | undefined {
    if (!format?.segments?.length) return undefined;

    return format.segments
      .map((segment) => {
        switch (segment.type) {
          case 'TEXT':
            return segment.value;
          case 'VARIABLE':
            return `{${segment.value}}`;
          case 'DASH':
            return '-';
          case 'UNDERSCORE':
            return '_';
          case 'UUID':
            return '{UUID}';
          default:
            return segment.type;
        }
      })
      .join('');
  }

  async function editGeneralIdFormatEditor(kind: Kind, format?: IdFormat) {
    const newFormat = await editIdFormat(GENERAL_ID_COMPONENTS, format);
    if (newFormat) {
      state.setFormat(kind, 'format', newFormat);
    }
  }

  async function editReferenceIdFormatEditor(kind: Kind, format?: IdFormat) {
    const newFormat = await editIdFormat(REFERENCE_ID_COMPONENTS, format);
    if (newFormat) {
      state.setFormat(kind, 'referenceFormat', newFormat);
    }
  }

  function previewId(idFormat: IdFormat): string | undefined {
    if (!idFormat?.segments?.length) return undefined;
    return new OscdIdGenerator(idFormat).generateId({
      variables: {
        instance: 'LLN0',
        reference: 'Beh',
      },
    });
  }

  async function saveSettings() {
    if (state.loading || state.saving) return;
    const saved = await state.save();
    if (saved) {
      toastService.success('Save Settings Successful', 'ID format settings saved successfully');
    } else {
      toastService.error('Could not save ID format settings',);
    }
  }

  onMount(async () => {
    await state.load(true);
    if (state.error) {
      toastService.error('Load Settings Failed', 'Could not load ID format settings.');
    }
  });

  function getSetting(kind: Kind) {
    return kind === 'global'
      ? state.settings.global
      : state.settings.typeSpecific[kind];
  }
</script>

<div style="width: 100%; display: flex; justify-content: center;">
  <div style="width: 100%; max-width: 1000px;">
    <div
      style="display: flex; justify-content: space-between; align-items: center;"
    >
      <h2>ID Generation</h2>
      <Button
        variant="raised"
        onclick={saveSettings}
      >
        {#if state.saving}
          <CircularProgress class="save-progress" indeterminate />
          Saving...
        {:else}
          Save
        {/if}
      </Button>
    </div>

    <Card padded>
      {#if state.loading}
        <div style="display: flex; justify-content: center">
          <CircularProgress style="height: 32px; width: 32px;" indeterminate />
        </div>
      {:else}
        {#each SETTINGS_SECTIONS as section, index}
          {@const setting = getSetting(section.kind)}

          <h3>{section.label}</h3>
          <IdSettingsCard
            bind:enabled={setting.enabled}
            format={formatToString(setting.format)}
            formatPreview={previewId(setting.format)}
            description={section.description}
            bind:referenceFormatEnabled={setting.referenceFormatEnabled}
            referenceFormat={formatToString(setting.referenceFormat)}
            referenceFormatPreview={previewId(setting.referenceFormat)}
            onEditFormat={async () =>
              await editGeneralIdFormatEditor(section.kind, setting.format)}
            onEditReferenceFormat={async () =>
              await editReferenceIdFormatEditor(
                section.kind,
                setting.referenceFormat,
              )}
          />

          {#if index < SETTINGS_SECTIONS.length - 1}
            <div class="separator"></div>
          {/if}
        {/each}
      {/if}
    </Card>
  </div>
</div>

<style>
  .separator {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin: 1.2rem 0.25rem;
  }

  h3 {
    margin-top: 0;
  }

  :global(.save-progress) {
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
    vertical-align: middle;
  }

</style>
