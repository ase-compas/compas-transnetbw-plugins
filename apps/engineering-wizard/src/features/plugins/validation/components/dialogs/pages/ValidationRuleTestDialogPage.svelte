<script lang="ts">
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';

  let sampleValue = '';
  const resultPlaceholder = 'Result will appear here after validation.';
</script>

<div class="test-validate">
  <p>Enter a sample value to test the rule.</p>

  <div class="test-validate__section">
    <Textfield bind:value={sampleValue} label="Sample value" variant="outlined" />
    <Button
      variant="raised"
      style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
    >
      Validate sample value
    </Button>
  </div>

  <div class="result">
    <span class="result__label">Result:</span>
    <span class="result__value">{resultPlaceholder}</span>
  </div>
</div>

<style>
  .test-validate__section {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: center;
  }

  :global(.test-validate__section .mdc-text-field),
  :global(.test-validate__section .smui-textfield) {
    flex: 1 1 auto;
    min-width: 0;
  }

  :global(.test-validate__section .smui-button) {
    flex: 0 0 auto;
    white-space: nowrap;
  }
</style>
