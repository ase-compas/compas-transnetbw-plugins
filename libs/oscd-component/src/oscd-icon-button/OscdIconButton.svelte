<script lang="ts">
  import IconButton from '@smui/icon-button';
  import { Icon } from '@smui/button';

  interface Props {
    callback?: () => void;
    icon?: string;
    disabled?: boolean;
    ariaLabel?: string;
  }

  let { callback = () => {}, icon = '', disabled = false, ariaLabel = undefined }: Props = $props();
</script>

<IconButton
  {disabled}
  aria-label={ariaLabel}
  on:click={callback}
  style="margin-bottom: 0;"
>
  <Icon class="material-icons">{icon}</Icon>
</IconButton>
