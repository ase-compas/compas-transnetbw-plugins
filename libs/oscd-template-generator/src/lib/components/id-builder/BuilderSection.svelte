<script lang="ts">
  import { dndzone, TRIGGERS } from 'svelte-dnd-action';
  import Card from '@smui/card';
  import Chip, { LeadingIcon, Text } from '@smui/chips';
  import { flip } from 'svelte/animate';
  import { label } from './utils';
  import { getIdBuilderState } from './id-builder.state.svelte';

  const idBuilderState = getIdBuilderState();

  function handleSort(e) {
    idBuilderState.segments = e.detail.items;
  }

  function handleFinalize(e) {
    if (e.detail.info.trigger === TRIGGERS.DROPPED_OUTSIDE_OF_ANY) {
      // discard id segment
      idBuilderState.removeSegment(e.detail.info.id);
    } else {
      idBuilderState.segments = e.detail.items;
    }
  }

</script>

<Card class="id-builder-card">
  <h3>Compose ID</h3>

  <div
    class="id-field-set"
    use:dndzone={{items: idBuilderState.segments, flipDurationMs: 100}}
    onconsider={e => handleSort(e)}
    onfinalize={e => handleFinalize(e)}
  >
    {#each idBuilderState.segments as segment (segment.id)}
      <div animate:flip={{duration: 100}} data-id={segment.id}>
        <Chip class="id-field-chip">
          <Text>{label(segment.segment)}</Text>
          <LeadingIcon
            class="material-icons remove-icon"
            onclick={() => idBuilderState.removeSegment(segment.id)}
          >
            cancel
          </LeadingIcon>
        </Chip>
      </div>
    {/each}
  </div>
</Card>

<style>

.id-field-set {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 0.3rem;
  background-color: #f5f5f5;
  padding: 0.5rem;
  border-radius: 8px;
  min-height: 2.5rem;
  align-items: center;
}

  :global(.id-field-chip) {
    width: fit-content !important;
    align-self: flex-start !important;
    padding: 0 8px;
    background-color: #ffffff;
    border: 1px solid #cfd8dc;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    font-weight: 500;
    cursor: default;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: background-color 0.1s, box-shadow 0.1s;
  }
</style>
