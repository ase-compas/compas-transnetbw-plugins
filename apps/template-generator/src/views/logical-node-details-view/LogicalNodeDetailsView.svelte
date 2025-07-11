<script lang="ts">
  import {TemplateStore } from "@oscd-transnet-plugins/oscd-template-generator";
  import { onMount } from 'svelte';

  let templateStore: TemplateStore;
  let selectedLNodeTypeId: string | undefined;

  onMount(() => {
    templateStore = TemplateStore.getInstance();
    selectedLNodeTypeId = templateStore.getSelectedLNodeTypeId();
  });

  const back = () => {
    templateStore.setSelectedLNodeTypeId(null);
  };

</script>

<button on:click={back}>Back</button>
<h1>Hello From Logical Nodes Details View LNode {$selectedLNodeTypeId}</h1>
