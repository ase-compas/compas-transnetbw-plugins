<script>
  import { TextInput } from '@svelteuidev/core';

  export let placeholder = '';
  export let label = '';
  export let icon = null;
  export let value = '';
</script>

<TextInput icon={icon}
           bind:value
           label={label}
           placeholder={placeholder}
></TextInput>
