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
    doneLabel?: string;

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
    previousDisabled = false,
    isAtFirstStep = false,
    isAtLastStep = false,
    nextDisabled = false,
    doneDisabled = false,
    showDone = true,
    doneLabel = 'Done',

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
    background-color: ${backBg ?? nextBg ?? 'var(--oscd-plugin-surface)'};
    color: ${backColor ?? nextColor ?? 'var(--oscd-plugin-brand)'};
    opacity: ${isAtFirstStep || previousDisabled ? '0.38' : '1'};
  `);
  const nextStyles = $derived(`
    background-color: ${nextBg ?? 'var(--oscd-plugin-surface)'};
    color: ${nextColor ?? 'var(--oscd-plugin-brand)'};
    opacity: ${nextDisabled ? '0.38' : '1'};
  `);
  const doneStyles = $derived(`
    background-color: ${doneBg ?? 'var(--oscd-plugin-action)'};
    color: ${doneColor ?? 'var(--oscd-plugin-on-action)'};
    border: 1px solid ${doneBg ?? 'var(--oscd-plugin-action)'};
    opacity: ${doneDisabled ? '0.38' : '1'};
  `);
</script>
<div class="stepper-actions">
  <div class="stepper-navigation">
    <Button
      tag="button"
      onclick={onGoToPreviousStep}
      disabled={isAtFirstStep || previousDisabled}
      aria-label="Previous step"
      style={backStyles}
    >
      <Icon><OscdArrowBackIcon svgStyles={`fill: ${backIconFill ?? nextIconFill ?? 'var(--oscd-plugin-brand)'};`} /></Icon>
      <Label>Back</Label>
    </Button>

    <Button
      tag="button"
      class="next-btn"
      onclick={onGoToNextStep}
      disabled={nextDisabled}
      aria-label={isAtLastStep && nextLabelWhenLastStep ? nextLabelWhenLastStep : 'Next step'}
      style={nextStyles}
    >
      <Label>{isAtLastStep && nextLabelWhenLastStep ? nextLabelWhenLastStep : 'Next'}</Label>
      <Icon>
        {#if isAtLastStep && showCheckOnLastStep}
          <OscdCheckIcon svgStyles={`fill: ${nextIconFill ?? 'var(--oscd-plugin-brand)'};`} />
        {:else}
          <OscdArrowForwardIcon svgStyles={`fill: ${nextIconFill ?? 'var(--oscd-plugin-brand)'};`} />
        {/if}
      </Icon>
    </Button>
    {#if showDone}
      <Button
        tag="button"
        onclick={onDone}
        disabled={doneDisabled}
        aria-label={doneLabel}
        style={doneStyles}
      >
        <Icon><OscdCheckIcon svgStyles={`fill: ${doneIconFill ?? doneColor ?? 'var(--oscd-plugin-on-action)'};`} /></Icon>
        <Label>{doneLabel}</Label>
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
