<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  interface Props {
    name?: string;
    processId?: string;
    version?: string;
    description?: string;
    nameInvalid?: boolean;
    processIdDisabled?: boolean;
    onNameChange?: (value: string) => void;
    onDescriptionChange?: (value: string) => void;
    onProcessIdChange?: (value: string) => void;
  }

  let {
    name = '',
    processId = '',
    version = '',
    description = '',
    nameInvalid = false,
    processIdDisabled = true,
    onNameChange = () => {},
    onDescriptionChange = () => {},
    onProcessIdChange,
  }: Props = $props();
</script>

<div class="info-bar">
  <div class="field field--grow">
    <Textfield
      variant="outlined"
      label="Process name"
      value={name}
      invalid={nameInvalid}
      oninput={(e) => onNameChange((e.target as HTMLInputElement).value)}
    >
      {#snippet helper()}<HelperText validationMsg>Process name is required.</HelperText>{/snippet}
    </Textfield>
  </div>

  <div class="field field--fixed">
    <Textfield
      variant="outlined"
      label="Process ID"
      value={processId}
      disabled={processIdDisabled}
      oninput={onProcessIdChange ? (e) => onProcessIdChange!((e.target as HTMLInputElement).value) : undefined}
    />
  </div>

  <div class="field field--narrow">
    <Textfield
      variant="outlined"
      label="Version"
      value={version}
      disabled
    />
  </div>

  <div class="field field--grow">
    <Textfield
      variant="outlined"
      label="Description"
      value={description}
      oninput={(e) => onDescriptionChange((e.target as HTMLInputElement).value)}
    />
  </div>
</div>

<style>
  * { font-family: 'Roboto', sans-serif; }

  .info-bar {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: flex-start;
    padding: 12px 0;
    background: var(--white, #fff);
  }

  .field {
    min-width: 0;
  }

  .field :global(.mdc-text-field) {
    width: 100%;
  }

  .field--grow {
    flex: 1 1 0;
  }

  .field--fixed {
    flex: 0 0 180px;
  }

  .field--narrow {
    flex: 0 0 120px;
  }
</style>

