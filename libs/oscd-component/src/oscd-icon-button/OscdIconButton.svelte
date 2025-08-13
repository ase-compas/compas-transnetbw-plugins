<script lang="ts">
  import IconButton from '@smui/icon-button';
  import { Icon } from '@smui/button';

  export let callback: () => void = () => {};
  export let icon = '';
  export let disabled = false;
</script>

<IconButton
  {disabled}
  on:click={callback}
  style="margin-bottom: 0;"
>
  <Icon class="material-icons">{icon}</Icon>
</IconButton>
