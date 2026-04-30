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
    nextDisabled?: boolean;
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
    showCheckOnLastStep = false
  }: Props = $props();

  const backStyles = $derived(`
    background-color: ${backBg ?? 'var(--base0)'};
    color: ${backColor ?? 'var(--white)'};
    opacity: ${isAtFirstStep ? '0.38' : '1'};
    pointer-events: ${isAtFirstStep ? 'none' : 'auto'};
  `);
  const nextStyles = $derived(`
    background-color: ${nextBg ?? 'var(--white)'};
    color: ${nextColor ?? 'var(--primary-base)'};
    opacity: ${nextDisabled ? '0.38' : '1'};
    pointer-events: ${nextDisabled ? 'none' : 'auto'};
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
      onclick={onGoToNextStep}
      disabled={nextDisabled}
      aria-label={isAtLastStep && nextLabelWhenLastStep ? nextLabelWhenLastStep : 'Next step'}
      style={nextStyles}
    >
      <Label>{isAtLastStep && nextLabelWhenLastStep ? nextLabelWhenLastStep : 'Next'}</Label>
      <Icon>
        {#if isAtLastStep && showCheckOnLastStep}
          <OscdCheckIcon svgStyles={`fill: ${nextIconFill ?? 'var(--primary-base)'};`} />
        {:else}
          <OscdArrowForwardIcon svgStyles={`fill: ${nextIconFill ?? 'var(--primary-base)'};`} />
        {/if}
      </Icon>
    </Button>
    {#if showDone}
      <Button
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
