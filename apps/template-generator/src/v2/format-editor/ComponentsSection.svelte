<script lang="ts">
  import {
    dndzone,
    SHADOW_ITEM_MARKER_PROPERTY_NAME,
    TRIGGERS,
  } from 'svelte-dnd-action';
  import Card from '@smui/card';
  import Chip, { LeadingIcon, Text } from '@smui/chips';
  import TextField from '@smui/textfield';
  import Button from '@smui/button';
  import HelperText from '@smui/textfield/helper-text';
  import { OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import { getIdFormatEditorState } from './format-editor.state.svelte';
  import { label } from './utils';

  const idFormatEditorState = getIdFormatEditorState();

  let customText = $state('');
  let textError = $state<string | null>('');

  const ID_PATTERN = /^\S+$/;

  function addTextSegment(e: Event) {
    e.preventDefault();
    if (customText === '') {
      textError = null;
      return;
    }

    if (!ID_PATTERN.test(customText)) {
      textError = 'Text cannot contain spaces';
      return;
    }

    textError = null;
    idFormatEditorState.addTextSegment(customText);
    customText = '';
  }

  function handleFinalize(e) {
    idFormatEditorState.components = e.detail.items;
  }

  function handleConsider(e: any) {
    const { trigger, id } = e.detail.info;

    if (trigger === TRIGGERS.DRAG_STARTED) {
      const idx = idFormatEditorState.components.findIndex((i) => i.id === id);
      if (idx < 0) return;

      const newId = `${id}_copy`;

      // remove previous shadow items then insert a fresh copy at drag start index
      e.detail.items = e.detail.items.filter(
        (item: any) => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME],
      );
      e.detail.items.splice(idx, 0, {
        ...idFormatEditorState.components[idx],
        id: newId,
      });

      idFormatEditorState.components = e.detail.items;
    } else {
      idFormatEditorState.components = [...idFormatEditorState.components];
    }
  }
</script>

<Card class="id-builder-card">
  <h3>Components</h3>

  <div
    class="id-field-set"
    use:dndzone={{
      items: idFormatEditorState.components,
      flipDurationMs: 100,
      dropFromOthersDisabled: true,
      dropTargetStyle: {},
    }}
    onconsider={(e) => handleConsider(e)}
    onfinalize={(e) => handleFinalize(e)}
  >
    {#each idFormatEditorState.components as component (component.id)}
      <OscdTooltip
        disabled={!component.description}
        side="right"
        content={component.description}
        hoverDelay={500}
      >
        <Chip
          chip={component.id}
          class="id-builder-component-chip"
          onclick={() => idFormatEditorState.addSegment(component)}
        >
          <LeadingIcon class="material-icons">add</LeadingIcon>
          <Text>{label(component.segment)}</Text>
        </Chip>
      </OscdTooltip>
    {/each}
  </div>

  <h4>Custom Text</h4>
  <form onsubmit={(e) => addTextSegment(e)} class="custom-text-form">
    <div>
      <TextField
        type="text"
        variant="outlined"
        label="Custom Text"
        placeholder="Enter text"
        bind:value={customText}
        invalid={!!textError}
        style="flex: 1;"
      >
        {#snippet helper()}
          <HelperText validationMsg persistent>
            {textError}
          </HelperText>
        {/snippet}
      </TextField>
    </div>
    <Button type="submit">ADD</Button>
  </form>
</Card>

<style>
  .id-field-set {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  :global(.id-builder-component-chip) {
    width: fit-content !important;
  }

  .custom-text-form {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
</style>
