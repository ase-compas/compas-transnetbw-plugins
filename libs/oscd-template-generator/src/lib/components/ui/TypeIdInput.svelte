<script lang="ts">


  import CharacterCounter from '@smui/textfield/character-counter';
  import HelperText from '@smui/textfield/helper-text';
  import TextField from '@smui/textfield';
  import { DataTypeKind, getDataTypeService } from '@oscd-transnet-plugins/oscd-template-generator';
  import { Icon } from '@smui/button';
  import { OscdTooltip } from '@oscd-transnet-plugins/oscd-component';

  const dataTypeService = getDataTypeService();

  const ID_MAX_LENGTH = 64;

  interface Props {
    // id settings
    typeId: string;
    idLabel: string;
    typeKind: DataTypeKind
    valid?: boolean
    showErrorsOnInput?: boolean;
    // when generate new id button is clicked
    onGenerateId?: () => void;
  }

  let {
    typeId = $bindable(''),
    valid = $bindable(false),
    idLabel,
    typeKind,

    showErrorsOnInput = false,

    onGenerateId = () => {}
  }: Props = $props();

  let inputEl;

  const originalTypeId = typeId;

  // typeId validation state
  let typeIdTouched = $state<boolean>(false);
  let isTypeIdRequiredValid = $derived<boolean>(typeId && typeId.trim().length > 0);
  let isTypeIdFormatValid = $derived<boolean>(/^\S+$/.test(typeId));
  let isTypeIdAvailable = $state<boolean>(true);
  let isTypeIdValid = $derived<boolean>(isTypeIdRequiredValid && isTypeIdFormatValid && isTypeIdAvailable);

  // check if typeId is available when it changes
  $effect(() => {
    if (!typeId || typeId === originalTypeId) return;
    dataTypeService.dataTypeExists(typeKind, typeId).then((type) => {
      isTypeIdAvailable = !type;
    }).catch((err) => {
      console.error('Failed to check if ID is taken:', err);
    })
  });

  // update valid prop when isTypeIdValid changes
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
  required
  style="width: 100%;"
  invalid={(showErrorsOnInput || typeIdTouched) && !isTypeIdValid}
  input$maxlength={ID_MAX_LENGTH}
  onblur={() => typeIdTouched = true}
>
  {#snippet trailingIcon()}
    <OscdTooltip content="Generate ID" placement="top" hoverDelay={200}>
      <button
        onclick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onGenerateId()
        }}
        style="all: unset; cursor: pointer;">
        <Icon class="material-icons" }>autorenew</Icon>
      </button>
    </OscdTooltip>
  {/snippet}
  {#snippet helper()}
    <HelperText validationMsg persitent>
      {#if !isTypeIdRequiredValid}
        Please enter an ID.
      {:else if !isTypeIdFormatValid}
        ID must contain no spaces.
      {:else if !isTypeIdAvailable}
        That ID is already in use. Please choose a different one.
      {/if}
    </HelperText>
    <CharacterCounter>0 / 64</CharacterCounter>
  {/snippet}
</TextField>
