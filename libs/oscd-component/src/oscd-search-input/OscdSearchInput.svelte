<script lang="ts">
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';

  interface Props {
    value?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    variant?: 'filled' | 'outlined' | 'standard';
    onInput?: () => void;
    onClear?: () => void;
    style?: string;
  }

  let {
    value = $bindable(''),
    label = 'Search',
    placeholder = 'Type to search...',
    disabled = false,
    variant = 'outlined',
    onInput = () => {},
    onClear = () => {},
    style = ''
  }: Props = $props();

  const clearValue = () => {
    value = '';
    onClear();
    onInput();
  };
</script>

<Textfield
  bind:value={value}
  oninput={() => onInput()}
  {label}
  {placeholder}
  {variant}
  style={style}
  {disabled}
>
  {#snippet leadingIcon()}
    <Icon class="material-icons">search</Icon>
  {/snippet}
  {#snippet trailingIcon()}
    {#if value}
      <Icon class="material-icons" role="button" onclick={clearValue}>close</Icon>
    {/if}
  {/snippet}
</Textfield>
