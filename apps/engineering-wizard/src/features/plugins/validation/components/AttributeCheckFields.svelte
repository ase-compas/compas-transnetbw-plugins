<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  import { CONDITIONS, type RuleUiState } from '../validationRuleUi';

  interface Props {
    ruleUi: RuleUiState;
  }

  let { ruleUi = $bindable() }: Props = $props();

  const isRegex = $derived(ruleUi.condition === 'matches' || ruleUi.condition === 'notMatches');
</script>

{#snippet regexHelper()}
  <HelperText>XPath <code>matches()</code> — use <code>^…$</code> to anchor the full value.</HelperText>
{/snippet}

<Select bind:value={ruleUi.condition} label="Condition" variant="outlined">
  <Option value="" disabled selected>Condition</Option>
  {#each CONDITIONS as c (c.key)}
    <Option value={c.key}>{c.label}</Option>
  {/each}
</Select>

<Textfield
  bind:value={ruleUi.specificText}
  label={isRegex ? 'Pattern' : 'Specific text'}
  variant="outlined"
  class="rule-editor__full"
  helper={isRegex ? regexHelper : undefined}
/>
