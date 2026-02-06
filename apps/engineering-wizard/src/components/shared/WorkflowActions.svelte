<script lang="ts">
  import { OscdArrowBackIcon, OscdArrowForwardIcon, OscdCheckIcon } from '@oscd-transnet-plugins/oscd-icons';
  import Button, { Label, Icon } from '@smui/button';

  interface Props {
    onGoToPreviousStep: () => void;
    onGoToNextStep: () => void;
    onDone: () => void;
    previousDisabled?: boolean;
    isAtFirstStep?: boolean;
    isAtLastStep?: boolean;
    doneDisabled?: boolean;
    showDone?: boolean;

    backBg?: string;
    backColor?: string;
    nextBg?: string;
    nextColor?: string;
    doneBg?: string;
    doneColor?: string;

    backIconFill?: string;
    nextIconFill?: string;
    doneIconFill?: string;
  }

  const {
    onGoToPreviousStep,
    onGoToNextStep,
    onDone,
    isAtFirstStep = false,
    isAtLastStep = false,
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
    doneIconFill
  }: Props = $props();

  const backStyles = $derived(`
    ${backBg ? `background-color: ${backBg};` : `background-color: rgb(from var(--base0) r g b / 0.5);`}
    ${backColor ? `color: ${backColor};` : `color: var(--white);`}
  `);
  const nextStyles = $derived(`
    --mdc-theme-primary: ${nextBg ?? 'var(--white)'};
    --mdc-theme-on-primary: ${nextColor ?? 'var(--primary-base)'};
  `);
  const doneStyles = $derived(`
    ${doneBg ? `background-color: ${doneBg};` : `background-color: var(--white);`}
    ${doneColor ? `color: ${doneColor};` : `color: var(--primary-base);`}
    border: 1px solid var(--primary-base);
  `);
</script>
<div class="stepper-actions">
  <div class="stepper-navigation">
    <Button
      variant="unelevated"
      onclick={onGoToPreviousStep}
      disabled={isAtFirstStep}
      aria-label="Previous step"
      style={backStyles}
    >
      <Icon><OscdArrowBackIcon svgStyles={`fill: ${backIconFill ?? 'var(--white)'};`} /></Icon>
      <Label>Back</Label>
    </Button>

    <Button
      class="next-btn"
      variant="unelevated"
      onclick={onGoToNextStep}
      aria-label="Next step"
      style={nextStyles}
    >
      <Label>Next</Label>
      <Icon><OscdArrowForwardIcon svgStyles={`fill: ${nextIconFill ?? 'var(--primary-base)'};`} /></Icon>
    </Button>
    {#if showDone}
      <Button
        variant="unelevated"
        onclick={onDone}
        disabled={doneDisabled}
        aria-label="Done"
        style={doneStyles}
      >
        <Icon><OscdCheckIcon svgStyles={`fill: ${doneIconFill ?? 'var(--primary-base)'};`} /></Icon>
        <Label>Done</Label>
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
