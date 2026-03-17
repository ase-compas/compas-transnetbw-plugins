<script lang="ts">
  import CharacterCounter from '@smui/textfield/character-counter';
  import HelperText from '@smui/textfield/helper-text';
  import TextField from '@smui/textfield';
  import { Icon } from '@smui/button';
  import { OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import { getDataTypeService } from './type.service';
  import type { TypeKind } from './model';

  const dataTypeService = getDataTypeService();
  const ID_MAX_LENGTH = 64;

  interface Props {
    typeId?: string;
    valid?: boolean;
    idLabel?: string;
    showErrorsOnInput?: boolean;
    generateId?: () => void;
    disabled?: boolean;
  }

  let {
    typeId = $bindable(''),
    valid = $bindable(false),
    idLabel = 'Enter Type ID',
    showErrorsOnInput = false,
    generateId,
    disabled = false,
  }: Props = $props();

  let inputEl;
  const originalTypeId = typeId;

  let typeIdTouched = $state<boolean>(false);
  let isTypeIdAvailable = $state<boolean>(true);

  let isTypeIdRequiredValid = $derived<boolean>(!!typeId && typeId.trim().length > 0);
  let isTypeIdFormatValid = $derived<boolean>(/^\S+$/.test(typeId));
  let isTypeIdValid = $derived<boolean>(isTypeIdRequiredValid && isTypeIdFormatValid && isTypeIdAvailable);

  function typeIdExists(candidateId: string): boolean {
    return dataTypeService.exists(candidateId);
  }

  $effect(() => {
    if (!typeId || typeId === originalTypeId) {
      isTypeIdAvailable = true;
      return;
    }

    try {
      isTypeIdAvailable = !typeIdExists(typeId);
    } catch (err) {
      isTypeIdAvailable = true;
      console.error('Failed to check if ID is taken:', err);
    }
  });

  $effect(() => {
    valid = isTypeIdValid;
  });

  export function getInput() {
    return inputEl.getElement().getElementsByTagName('input')[0];
  }

  export function focus() {
    getInput().focus();
  }

  export function select() {
    getInput().select();
  }
</script>

<TextField
  bind:this={inputEl}
  bind:value={typeId}
  label={idLabel}
  style="width: 100%;"
  input$maxlength={ID_MAX_LENGTH}
  {disabled}
  onblur={() => (typeIdTouched = true)}
>
  {#snippet trailingIcon()}
    {#if generateId}
      <OscdTooltip content="Generate ID" side="top" hoverDelay={200}>
        <button
          type="button"
          onclick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            generateId();
          }}
          style="all: unset; cursor: pointer;"
          disabled={!generateId}
        >
          <Icon class="material-icons">autorenew</Icon>
        </button>
      </OscdTooltip>
    {/if}
  {/snippet}

  {#snippet helper()}
    <HelperText validationMsg persistent>
      {#if (showErrorsOnInput || typeIdTouched) && !isTypeIdRequiredValid}
        Please enter an ID.
      {:else if (showErrorsOnInput || typeIdTouched) && !isTypeIdFormatValid}
        ID must contain no spaces.
      {:else if (showErrorsOnInput || typeIdTouched) && !isTypeIdAvailable}
        That ID is already in use. Please choose a different one.
      {/if}
    </HelperText>
    <CharacterCounter>0 / 64</CharacterCounter>
  {/snippet}
</TextField>
