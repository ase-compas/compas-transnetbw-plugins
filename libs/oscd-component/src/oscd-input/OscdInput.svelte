<script>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';

  /** @type {{placeholder?: string, label?: string, icon?: string, value?: string, variant?: string, styles?: string, required?: boolean, oninput?: (e) => void}} */
  let {
    placeholder = '',
    label = '',
    icon = '',
    value = $bindable(''),
    variant = 'standard',
    styles = '',
    required = false,
    oninput = () => {}
  } = $props();
</script>

{#if icon}
  <Textfield bind:value={value} label={label} {required} placeholder={placeholder} style={`width: 100%; ${styles}`} variant={variant} oninput={oninput}>
    {#snippet leadingIcon()}
        <Icon class="material-icons" >{icon}</Icon>
      {/snippet}
  </Textfield>
{:else}
  <Textfield bind:value={value} label={label} placeholder={placeholder} style="width: 100%" variant={variant} {required} oninput={oninput}></Textfield>
{/if}
