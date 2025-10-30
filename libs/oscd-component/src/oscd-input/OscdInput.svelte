<script>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';

  /**
   * @typedef {Object} Props
   * @property {string} [placeholder]
   * @property {string} [label]
   * @property {string} [icon]
   * @property {string} [value]
   * @property {string} [variant]
   * @property {string} [styles]
   */

  /** @type {Props} */
  let {
    placeholder = '',
    label = '',
    icon = '',
    value = $bindable(''),
    variant = 'standard',
    styles = ''
  } = $props();
</script>

{#if icon}
  <Textfield bind:value={value} label={label} placeholder={placeholder} style={`width: 100%; ${styles}`} variant="{variant}">
    {#snippet leadingIcon()}
        <Icon class="material-icons" >{icon}</Icon>
      {/snippet}
  </Textfield>
{:else}
  <Textfield bind:value={value} label={label} placeholder={placeholder} style="width: 100%" variant="{variant}"></Textfield>
{/if}
