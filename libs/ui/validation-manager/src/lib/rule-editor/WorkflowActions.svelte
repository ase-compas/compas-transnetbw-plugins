<script lang="ts">
  import Button from '../ui/Button.svelte';
  import {
    OscdArrowBackIcon,
    OscdArrowForwardIcon,
    OscdCheckIcon,
  } from '@oscd-transnet-plugins/oscd-icons';

  /**
   * Compact three-button stepper used by RuleEditorWizard. No SMUI: the
   * buttons are the library's own `./ui/Button.svelte`, coloured via CSS
   * custom properties (--vlm-btn-bg / --vlm-btn-fg / --vlm-btn-border) that
   * the wrapper writes into inline style="…" per button - the exact
   * mechanism a caller uses to theme without touching global state.
   */

  interface Props {
    onGoToPreviousStep: () => void;
    onGoToNextStep: () => void;
    onDone: () => void;
    isAtFirstStep?: boolean;
    isAtLastStep?: boolean;
    nextDisabled?: boolean;
    doneDisabled?: boolean;
    showDone?: boolean;

    /** Optional per-button colour overrides. Fall back to `--vlm-accent`
     * (declared in theme.css) so the wizard picks up the host's brand
     * automatically. */
    backBg?: string;
    backColor?: string;
    nextBg?: string;
    nextColor?: string;
    doneBg?: string;
    doneColor?: string;

    backIconFill?: string;
    nextIconFill?: string;
    doneIconFill?: string;

    nextLabelWhenLastStep?: string;
    showCheckOnLastStep?: boolean;
  }

  const {
    onGoToPreviousStep,
    onGoToNextStep,
    onDone,
    isAtFirstStep = false,
    isAtLastStep = false,
    nextDisabled = false,
    doneDisabled = false,
    showDone = true,

    backBg,
    backColor,
    nextBg,
    nextColor,
    doneBg,
    doneColor,
    backIconFill,
    nextIconFill,
    doneIconFill,
    nextLabelWhenLastStep,
    showCheckOnLastStep = false,
  }: Props = $props();

  // Build the inline style declarations for the ./ui/Button primitive.
  // The button consumes --vlm-btn-{bg,fg,border} internally - callers
  // (e.g. RuleEditorWizard) can already forward CSS vars like
  // `var(--vlm-accent, #37474f)` so brand tokens still apply without SMUI's
  // `--mdc-theme-primary` trick.
  const backStyle = $derived(
    `--vlm-btn-bg: ${backBg ?? 'var(--vlm-accent, var(--primary-base, #37474f))'};` +
      ` --vlm-btn-fg: ${backColor ?? 'var(--vlm-on-accent, var(--white, #ffffff))'};`,
  );
  const nextStyle = $derived(
    `--vlm-btn-bg: ${nextBg ?? 'var(--vlm-accent, var(--primary-base, #37474f))'};` +
      ` --vlm-btn-fg: ${nextColor ?? 'var(--vlm-on-accent, var(--white, #ffffff))'};`,
  );
  const doneStyle = $derived(
    `--vlm-btn-bg: ${doneBg ?? 'transparent'};` +
      ` --vlm-btn-fg: ${doneColor ?? 'var(--primary-base, #37474f)'};` +
      ` --vlm-btn-border: var(--primary-base, #37474f);`,
  );
</script>

<div class="stepper-actions">
  <div class="stepper-navigation">
    <Button
      variant="unelevated"
      onclick={onGoToPreviousStep}
      disabled={isAtFirstStep}
      ariaLabel="Previous step"
      style={backStyle}
    >
      <OscdArrowBackIcon
        svgStyles={`fill: ${backIconFill ?? 'var(--vlm-on-accent, var(--white, #ffffff))'}; width: 18px; height: 18px;`}
      />
      <span>Back</span>
    </Button>

    <Button
      variant="unelevated"
      onclick={onGoToNextStep}
      disabled={nextDisabled}
      ariaLabel={isAtLastStep && nextLabelWhenLastStep ? nextLabelWhenLastStep : 'Next step'}
      style={nextStyle}
    >
      <span>{isAtLastStep && nextLabelWhenLastStep ? nextLabelWhenLastStep : 'Next'}</span>
      {#if isAtLastStep && showCheckOnLastStep}
        <OscdCheckIcon
          svgStyles={`fill: ${nextIconFill ?? 'var(--vlm-on-accent, var(--white, #ffffff))'}; width: 18px; height: 18px;`}
        />
      {:else}
        <OscdArrowForwardIcon
          svgStyles={`fill: ${nextIconFill ?? 'var(--vlm-on-accent, var(--white, #ffffff))'}; width: 18px; height: 18px;`}
        />
      {/if}
    </Button>

    {#if showDone}
      <Button
        variant="outlined"
        onclick={onDone}
        disabled={doneDisabled}
        ariaLabel="Done"
        style={doneStyle}
      >
        <OscdCheckIcon
          svgStyles={`fill: ${doneIconFill ?? 'var(--primary-base, #37474f)'}; width: 18px; height: 18px;`}
        />
        <span>Done</span>
      </Button>
    {/if}
  </div>
</div>

<style>
  .stepper-actions {
    display: flex;
    gap: 1.5rem;
  }

  .stepper-navigation {
    display: flex;
    gap: 0.8rem;
    justify-self: end;
  }
</style>
