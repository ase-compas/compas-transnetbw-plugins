<script lang="ts">
import Card from '@smui/card';
import Chip, { LeadingIcon, Set, Text } from '@smui/chips';
import { label } from './utils';
import { getIdBuilderState } from './id-builder.state.svelte';
import TextField, { Input } from '@smui/textfield';
import Button from '@smui/button';
import HelperText from '@smui/textfield/helper-text';

const idBuilderState = getIdBuilderState();

let customText = $state('');
let textError = $state<string | null>('');

const ID_PATTERN = /^\S+$/;

function addTextSegment(e: Event) {
  e.preventDefault()
  if (customText === '') {
    textError = null;
    return;
  }

  if(!ID_PATTERN.test(customText)) {
    textError = 'Text cannot contain spaces';
    return;
  }

  textError = null;
  idBuilderState.addTextSegment(customText);
  customText = '';
}

</script>

<Card class="id-builder-card">
  <h3>Components</h3>
  <Set
    bind:chips={idBuilderState.baseComponents}
    key={(chip) => chip.id}
    class="set-column"
    input>
    {#snippet chip(chip)}
      <Chip chip={chip.id} class="id-builder-chip" onclick={() => idBuilderState.addSegment(chip)}>
        <LeadingIcon class="material-icons">add</LeadingIcon>
        <Text>{label(chip.segment)}</Text>
      </Chip>
    {/snippet}
  </Set>
  <h4>Custom Text</h4>
  <form onsubmit={(e) => addTextSegment(e)} class="custom-text-form">
    <TextField
      type="text"
      variant="outlined"
      label="Custom Text"
      placeholder="Enter text"
      bind:value={customText}
      invalid={!!textError}
      style="flex: 1;">
      {#snippet helper()}
        <HelperText validationMsg persitent>
          {textError}
        </HelperText>
      {/snippet}
    </TextField>
    <Button type="submit">ADD</Button>
  </form>
</Card>

<style>
  :global(.set-column) {
      display: flex !important;
      flex-direction: column !important;
      flex-wrap: nowrap !important;
      gap: 0.5rem;
  }

  :global(.id-builder-chip) {
    width: fit-content !important;
  }

  .custom-text-form {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
</style>
