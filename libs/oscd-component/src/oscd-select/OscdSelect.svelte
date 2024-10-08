<script>
  import { NativeSelect } from '@svelteuidev/core';
  import { ChevronDown } from 'radix-icons-svelte';

  export let data = [];
  export let placeholder = '';
  export let label = '';
  export let description = '';
  export let value = '';
  export let required = false;
  export let size = 'sm';
</script>

<NativeSelect data={data}
              bind:value
              size={size}
              placeholder={placeholder}
              label={label}
              required={required}
              description={description}
>
  <svelte:component slot="rightSection" this={ChevronDown} />
</NativeSelect>
