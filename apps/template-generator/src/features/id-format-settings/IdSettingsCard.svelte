<script lang="ts">
  import Switch from '@smui/switch';
  import Button from '@smui/button';

  interface Props {
    enabled: boolean;
    format?: string;
    formatPreview?: string;
    description?: string;

    referenceFormatEnabled: boolean;
    referenceFormat?: string;
    referenceFormatPreview?: string;
    onEditFormat?: () => void;
    onEditReferenceFormat?: () => void;
  }

  let {
    enabled = $bindable(),
    format,
    formatPreview,
    description,
    referenceFormatEnabled = $bindable(),
    referenceFormat,
    referenceFormatPreview,
    onEditFormat,
    onEditReferenceFormat,
  }: Props = $props();
</script>

<div class="format-grid">
  <div class="row">
    <div class="col-switch">
      <Switch bind:checked={enabled} icons={false} />
    </div>

    <div class="col-content header">
      <div>
        <h5>Enable Auto-ID Generation</h5>
        <p class="description">{description}</p>
      </div>
      {#if enabled}<Button variant="outlined" onclick={onEditFormat}
          >Edit Format</Button
        >{/if}
    </div>
  </div>

  <div class="row">
    <div class="col-switch"><!-- empty for alignment --></div>

    <div class="col-content preview">
      {#if enabled}
        <div class="preview-inline">
          <span class="tag">Format</span>
          <span class="mono">
            {format && format.trim() !== '' ? format : 'No format defined'}
          </span>

          <span class="tag">Preview</span>
          <span class="mono">
            {formatPreview && formatPreview.trim() !== '' ? formatPreview : '-'}
          </span>
        </div>
      {/if}
    </div>
  </div>

  {#if enabled}
    <!---- divider -->
    <div class="row" style="margin: 1rem 0;">
      <div class="col-switch"><!-- empty for alignment --></div>

      <div class="col-content">
        <div class="separator"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-switch">
        <Switch bind:checked={referenceFormatEnabled} icons={false} />
      </div>

      <div class="col-content header">
        <div>
          <h5>Enable Reference-based ID Pattern</h5>
          <p class="description">
            Used when an instance is created from a parent. Allows for including
            parent reference in id.
          </p>
        </div>
        {#if referenceFormatEnabled}<Button
            variant="outlined"
            onclick={onEditReferenceFormat}>Edit Format</Button
          >{/if}
      </div>
    </div>

    <div class="row">
      <div class="col-switch"><!-- empty for alignment --></div>

      <div class="col-content"></div>
    </div>

    <div class="row">
      <div class="col-switch"><!-- empty for alignment --></div>

      <div class="col-content preview">
        {#if referenceFormatEnabled}
          <div class="preview-inline">
            <span class="tag">Format</span>
            <span class="mono">
              {referenceFormat && referenceFormat.trim() !== ''
                ? referenceFormat
                : 'No format defined'}
            </span>

            <span class="tag">Preview</span>
            <span class="mono">
              {referenceFormatPreview && referenceFormatPreview.trim() !== ''
                ? referenceFormatPreview
                : '-'}
            </span>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .format-grid {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    gap: 0.75rem;
  }

  .col-switch {
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .col-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .col-content.header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  .col-content.header h5 {
    margin: 0;
    font-weight: var(--tg-font-weight-heading);
    font-size: var(--tg-font-size-subheading);
  }

  .description {
    margin: 0;
    font-size: var(--tg-font-size-body);
    color: var(--mdc-theme-on-surface-variant, #666);
  }

  .separator {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin: 0.5rem 0 0.25rem 0;
  }

  :global(.mdc-card) {
    background-color: white !important;
  }

  .preview-inline {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.35rem;
  }

  .tag {
    background: rgba(0, 0, 0, 0.08);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: var(--tg-font-size-small);
    font-weight: var(--tg-font-weight-heading);
    color: rgba(0, 0, 0, 0.7);
  }

  .mono {
    font-family: 'Roboto Mono', monospace;
    font-size: var(--tg-font-size-body);
    color: rgba(0, 0, 0, 0.85);
  }
</style>
