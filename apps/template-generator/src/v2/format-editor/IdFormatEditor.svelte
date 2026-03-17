<script lang="ts">
/***
 * Use setIdFormatEditorState() of IdFormatEditorState  before mounting this component.
*/
  import ComponentsSection from './ComponentsSection.svelte';
  import PreviewSection from './PreviewSection.svelte';
  import BuilderSection from './BuilderSection.svelte';
</script>

<div class="id-builder">
<div class="id-builder__left">
    <ComponentsSection />
</div>
<div class="id-builder__main">
    <BuilderSection />
    <PreviewSection />
</div>
</div>

<style>
  .id-builder {
    display: flex;
    gap: 1rem;
  }

  .id-builder__main {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
