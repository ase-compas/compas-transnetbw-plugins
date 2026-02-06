<script lang="ts">
import BuilderSection from './BuilderSection.svelte';
import ComponentsSection from './ComponentsSection.svelte';
import PreviewSection from './PreviewSection.svelte';
import type { IdFormat } from '@oscd-transnet-plugins/oscd-services/id-generator';
import { OscdButton } from '@oscd-transnet-plugins/oscd-component';
import { getIdGeneratorService } from '../../services';
import { onMount } from 'svelte';
import { getIdBuilderState, setIdBuilderState } from './id-builder.state.svelte';

interface Props {
  initialFormat?: IdFormat;
}

const { initialFormat }: Props = $props();

setIdBuilderState();
const idBuilderState = getIdBuilderState();

function setDefaultFormat() {
  const format = idBuilderState.idFormat;
  getIdGeneratorService().setDefaultFormat(format)
}

onMount(() => {
})
</script>

<OscdButton variant="unelevated" callback={setDefaultFormat}>SAVE</OscdButton>

<div class="id-builder">
  <div class="id-builder__left"><ComponentsSection/></div>
  <div class="id-builder__middle"><BuilderSection/></div>
  <div class="id-builder__right"><PreviewSection/></div>
</div>

<style>
  .id-builder {
    display: flex;
    gap: 1rem;
  }

  .id-builder__left {
    flex: 1;
    max-width: 300px;
  }

  .id-builder__middle {
    flex: 2;
  }

  .id-builder__right {
    flex: 1;
    max-width: 300px;
  }

  :global(.id-builder-card) {
    background: #fff !important;
    padding: 0 0.75rem 0.75rem 0.75rem !important;
  }
</style>
