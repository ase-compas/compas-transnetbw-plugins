<script>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';

  export let placeholder = '';
  export let label = '';
  export let icon = '';
  export let value = '';
  export let variant = 'standard';
  export let styles = '';
</script>

{#if icon}
  <Textfield bind:value={value} label={label} placeholder={placeholder} style={`width: 100%; ${styles}`} variant="{variant}">
    <Icon class="material-icons" slot="leadingIcon">{icon}</Icon>
  </Textfield>
{:else}
  <Textfield bind:value={value} label={label} placeholder={placeholder} style="width: 100%" variant="{variant}"></Textfield>
{/if}
