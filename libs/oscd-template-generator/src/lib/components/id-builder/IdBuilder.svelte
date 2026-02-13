<script lang="ts">
  import BuilderSection from './BuilderSection.svelte';
  import ComponentsSection from './ComponentsSection.svelte';
  import PreviewSection from './PreviewSection.svelte';
  import { OscdButton, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import { getIdBuilderState, setIdBuilderState } from './id-builder.state.svelte';
  import { OSCD_INSTANCE_PREFIX_ID_FORMAT, OSCD_REFERENCE_PREFIX_ID_FORMAT } from '../../utils/id-formats';
  import type { IdFormat } from '@oscd-transnet-plugins/oscd-services/id-generator';
  import { label } from './utils';
  import { getIdGeneratorService } from '../../services';
  import { onMount } from 'svelte';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';

  const REFERENCE_TOGGLE_KEY = 'oscd:idbuilder:referenceEnabled';

  setIdBuilderState();
  const idBuilderState = getIdBuilderState();
  const idGeneratorService = getIdGeneratorService();

  type FormatType = 'general' | 'reference';
  let editingFormat: FormatType | null = null;

  let savedIndependentFormat = OSCD_INSTANCE_PREFIX_ID_FORMAT;
  let savedReferenceFormat = OSCD_REFERENCE_PREFIX_ID_FORMAT;

  let referenceEnabled = true;

  function editFormat(type: FormatType) {
    editingFormat = type;
    const format = type === 'reference' ? savedReferenceFormat : savedIndependentFormat;
    idBuilderState.setIdFormat(format);
  }

  function toggleReferenceEnabled() {
    localStorage.setItem(REFERENCE_TOGGLE_KEY, String(referenceEnabled));

    if (referenceEnabled) {
      editingFormat = 'reference';
      idBuilderState.setIdFormat(savedReferenceFormat);
      idGeneratorService.setReferenceFormatId(savedReferenceFormat);
    } else {
      editingFormat = 'general';
      idBuilderState.setIdFormat(savedIndependentFormat);
      idGeneratorService.setReferenceFormatId(savedIndependentFormat);
    }
  }

  function resetFormat(type: FormatType) {
    const def = type === 'reference'
      ? OSCD_REFERENCE_PREFIX_ID_FORMAT
      : OSCD_INSTANCE_PREFIX_ID_FORMAT;

    if (type === 'reference') {
      savedReferenceFormat = def;
      idGeneratorService.setReferenceFormatId(savedReferenceFormat);
    } else {
      savedIndependentFormat = def;
      idGeneratorService.setReferenceFormatId(savedIndependentFormat);
    }

    if (editingFormat === type) idBuilderState.setIdFormat(def);
  }

  function saveFormat() {
    if (!editingFormat) return;
    if (editingFormat === 'reference') {
      savedReferenceFormat = idBuilderState.idFormat;
      idGeneratorService.setReferenceFormatId(savedReferenceFormat);
      toastService.success("Format Saved", "The Reference ID format has been updated.");
    } else {
      savedIndependentFormat = idBuilderState.idFormat;
      idGeneratorService.setGeneralIdFormat(savedIndependentFormat);
      toastService.success("Format Saved", "The General ID format has been updated.");
    }
  }

  function formatPreview(format: IdFormat) {
    if (!format || format.segments.length === 0) return 'Empty';
    return format.segments.map(segment => `[${label(segment)}]`).join('');
  }

  onMount(() => {
    // Load saved formats from the service on mount
    const loadFormats = async () => {
      savedIndependentFormat = await idGeneratorService.getGeneralIdFormat() || OSCD_INSTANCE_PREFIX_ID_FORMAT;
      savedReferenceFormat = await idGeneratorService.getReferenceIdFormat() || OSCD_REFERENCE_PREFIX_ID_FORMAT;
    };

    const stored = localStorage.getItem(REFERENCE_TOGGLE_KEY);
    if (stored !== null) {
      referenceEnabled = stored === 'true';
    }

    loadFormats();
  });
</script>

<div class="format-panels">

  <!-- General ID -->
  <div class="format-panel" class:active-panel={editingFormat === 'general'}>
    <h3>General ID</h3>
    <p>The standard ID format used for all data types and instances.</p>
    <p>Current format: <code>{formatPreview(savedIndependentFormat)}</code></p>

    <div class="panel-buttons">
      <OscdButton variant="unelevated" callback={() => editFormat('general')}>Edit</OscdButton>
      <OscdButton variant="outlined" callback={() => resetFormat('general')}>Reset Default</OscdButton>
      {#if editingFormat === 'general'}
        <OscdButton variant="unelevated" callback={saveFormat}>SAVE</OscdButton>
      {/if}
    </div>
  </div>

  <!-- Reference ID -->
  <div
    class="format-panel"
    class:disabled-panel={!referenceEnabled}
    class:active-panel={editingFormat === 'reference'}
  >
    <div class="panel-header">
      <h3>
        Reference ID
        {#if referenceEnabled}
          <span class="badge">REFERENCE</span>
        {:else}
          <span class="badge off">OFF</span>
        {/if}
      </h3>

      <!-- OscdSwitch toggle top-right -->
      <OscdSwitch
        bind:checked={referenceEnabled}
        label=""
        onChange={toggleReferenceEnabled}
      />
    </div>

    <div class="panel-content">
      <p>
        An optional ID format used only when something is created from a parent.
        When enabled, this format replaces the General ID and can include the
        parent’s ID via the <strong>REFERENCE</strong> component.
      </p>

      <p>Current format: <code>{formatPreview(savedReferenceFormat)}</code></p>

      <div class="panel-buttons">
        <OscdButton
          variant="unelevated"
          callback={() => editFormat('reference')}
          disabled={!referenceEnabled}
        >
          Edit
        </OscdButton>

        <OscdButton
          variant="outlined"
          callback={() => resetFormat('reference')}
          disabled={!referenceEnabled}
        >
          Reset Default
        </OscdButton>

        {#if editingFormat === 'reference' && referenceEnabled}
          <OscdButton variant="unelevated" callback={saveFormat}>SAVE</OscdButton>
        {/if}
      </div>
    </div>
  </div>
</div>

{#if editingFormat}
  <div class="builder-container" class:reference-editing={editingFormat === 'reference'}>
    <div class="builder-header">
      <h2>
        Editing: {editingFormat === 'reference' ? 'Reference ID' : 'General ID'}
        {#if editingFormat === 'reference' && referenceEnabled}
          <span class="badge">REFERENCE</span>
        {/if}
      </h2>
    </div>

    <div class="id-builder">
      <div class="id-builder__left"><ComponentsSection mode={editingFormat}/></div>
      <div class="id-builder__middle"><BuilderSection/></div>
      <div class="id-builder__right"><PreviewSection/></div>
    </div>
  </div>
{/if}

<style>
  .format-panels {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .format-panel {
    flex: 1;
    padding: 1rem;
    border-radius: 8px;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.08);
    position: relative;
    transition: 0.2s;
  }

  .active-panel {
    border-color: var(--mdc-theme-primary);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--mdc-theme-primary) 35%, transparent);
  }

  .disabled-panel {
    background: #f5f5f5;
    opacity: 0.75;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .badge {
    background: var(--mdc-theme-primary);
    color: var(--mdc-theme-on-primary);
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
  }

  .badge.off {
    background: #aaa;
  }

  .panel-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  .panel-content {
    margin-top: 0.5rem;
  }

  .builder-container {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(0,0,0,0.1);
  }

  .builder-container.reference-editing {
    border-top-color: var(--mdc-theme-primary);
  }

  .id-builder {
    display: flex;
    gap: 1rem;
  }

  .id-builder__left { flex: 1; max-width: 300px; }
  .id-builder__middle { flex: 2; }
  .id-builder__right { flex: 1; max-width: 300px; }

  code {
    background: #f5f5f5;
    padding: 0.25rem 0.4rem;
    border-radius: 4px;
  }

  /* original global card styling preserved */
  :global(.id-builder-card) {
    background: #fff !important;
    padding: 0.75rem !important;
    border-radius: 8px;
  }
</style>
