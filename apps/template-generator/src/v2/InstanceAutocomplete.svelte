<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';
  import { type InstanceDetails, type TypeKind } from './model';
  import { getDataTypeService } from './type.service';
  import { onMount } from 'svelte';

  interface Props {
    typeKind: TypeKind;
    initialInstanceType?: string;
    value?: InstanceDetails | null;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    onEnter?: () => void;
  }

  let {
    typeKind,
    initialInstanceType,
    value = $bindable(undefined),
    label = 'Choose Instance Type',
    disabled = false,
    required = true,
    onEnter = () => {},
  }: Props = $props();

  const service = getDataTypeService();

  let options: InstanceDetails[] = $state([]);

    // svelte-ignore non_reactive_update
    /** @type {HTMLElement} */
    let autocompleteEl;

  const getOptionLabel = (opt: InstanceDetails) => opt ? opt.instance : '';

  export function focus() {
    autocompleteEl?.focus?.();
  }

  onMount(() => {
    options = getDataTypeService().listInstanceTypeDetails(typeKind);
    if (initialInstanceType) {
      const initialOption = options.find((opt) => opt.instance === initialInstanceType);
      if (initialOption) {
        value = initialOption;
      }
    }
  });
</script>

{#if options.length !== 0}
<Autocomplete
  bind:this={autocompleteEl}
  bind:value={value}
  {label}
  {disabled}
  {options}
  {getOptionLabel}
  onkeydown={(e) => {
    if (e.key === 'Enter' && !disabled && !!value) {
      e.preventDefault();
      onEnter();
    }
  }}
  menu$style="max-height: 500px;"
  >
  {#snippet match(item: InstanceDetails)}
    <div class="custom-item">
      <div class="title">{item.instance}</div>
      {#if item.description}
        <div class="subtitle">{item.description}</div>
      {/if}
    </div>
  {/snippet}
  {#snippet noMatches()}
    <div style="padding: 1rem;">No instances available</div>
  {/snippet}
</Autocomplete>
{/if}
<style>
  .title {
    font-weight: bold;
  }

  .subtitle {
    font-size: 0.85rem;
    color: gray;
  }
</style>