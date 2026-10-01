<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  import { CONDITIONS, type RuleUiState } from '../validationRuleUi';
  import ValidationSelectField from './ValidationSelectField.svelte';

  interface Props {
    ruleUi: RuleUiState;
  }

  let { ruleUi = $bindable() }: Props = $props();

  const isRegex = $derived(ruleUi.condition === 'matches' || ruleUi.condition === 'notMatches');
</script>

{#snippet regexHelper()}
  <HelperText>XPath <code>matches()</code> — use <code>^…$</code> to anchor the full value.</HelperText>
{/snippet}

<ValidationSelectField
  bind:value={ruleUi.condition}
  label="Condition"
  placeholder="Condition"
  options={CONDITIONS.map((condition) => ({
    value: condition.key,
    label: condition.label,
  }))}
/>

<Textfield
  bind:value={ruleUi.specificText}
  label={isRegex ? 'Pattern' : 'Specific text'}
  variant="outlined"
  class="rule-editor__full"
  helper={isRegex ? regexHelper : undefined}
/>
