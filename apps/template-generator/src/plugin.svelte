<script lang="ts">
  import App from './App.svelte';
  import * as pckg from '../package.json';
</script>
  <App/>

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
