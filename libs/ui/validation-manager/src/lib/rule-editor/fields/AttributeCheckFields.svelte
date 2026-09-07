<script lang="ts">
  import Select from '../../ui/Select.svelte';
  import TextField from '../../ui/TextField.svelte';
  import { CONDITIONS, type RuleUiState } from '../utils/validationRuleUi';

  interface Props {
    ruleUi: RuleUiState;
  }

  let { ruleUi = $bindable() }: Props = $props();

  const isRegex = $derived(ruleUi.condition === 'matches' || ruleUi.condition === 'notMatches');

  const conditionOptions = $derived(CONDITIONS.map((c) => ({ value: c.key, label: c.label })));
</script>

<Select bind:value={ruleUi.condition} label="Condition" options={conditionOptions} />

<TextField
  bind:value={ruleUi.specificText}
  label={isRegex ? 'Pattern' : 'Specific text'}
>
  {#snippet helper()}
    {#if isRegex}
      <span>
        XPath <code>matches()</code> — use <code>^…$</code> to anchor the full value.
      </span>
    {/if}
  {/snippet}
</TextField>

<style>
  code {
    font-family: monospace;
    background: var(--base3, #eceff1);
    padding: 1px 4px;
    border-radius: 3px;
  }
</style>
