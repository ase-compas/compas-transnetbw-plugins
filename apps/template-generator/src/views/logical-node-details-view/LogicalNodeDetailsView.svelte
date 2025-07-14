<script lang="ts">
  import {selectedLNodeTypeId} from '../../lib/stores';

  const back = () => {
    selectedLNodeTypeId.set(null)
  };

</script>

<button on:click={back}>Back</button>
<h1>Hello From Logical Nodes Details View LNode node</h1>
