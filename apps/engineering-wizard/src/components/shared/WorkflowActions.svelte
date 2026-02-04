<script lang="ts">
  import { OscdArrowBackIcon, OscdArrowForwardIcon, OscdCheckIcon } from '@oscd-transnet-plugins/oscd-icons';

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
</script>
<div class="stepper-actions">
  <div class="stepper-navigation">
    <button
      type="button"
      class="btn btn--back"
      onclick={onGoToPreviousStep}
      disabled={isAtFirstStep}
      aria-label="Previous step"
      style={`
        ${backBg ? `--btn-bg:${backBg};` : ''}
        ${backColor ? `--btn-color:${backColor};` : ''}
        ${backIconFill ? `--icon-fill:${backIconFill};` : ''}
      `}
    >
      <span><OscdArrowBackIcon svgStyles="fill: var(--icon-fill);" /></span>
      <span>Back</span>
    </button>

    <button
      type="button"
      class="btn btn--next"
      onclick={onGoToNextStep}
      disabled={isAtLastStep}
      aria-label="Next step"
      style={`
        ${nextBg ? `--btn-bg:${nextBg};` : ''}
        ${nextColor ? `--btn-color:${nextColor};` : ''}
        ${nextIconFill ? `--icon-fill:${nextIconFill};` : ''}
      `}
    >
      <span>Next</span>
      <span><OscdArrowForwardIcon svgStyles="fill: var(--icon-fill);" /></span>
    </button>
  </div>

  {#if showDone}
    <button
      type="button"
      class="btn btn--done"
      onclick={onDone}
      disabled={doneDisabled}
      aria-label="Done"
      style={`
        ${doneBg ? `--btn-bg:${doneBg};` : ''}
        ${doneColor ? `--btn-color:${doneColor};` : ''}
        ${doneIconFill ? `--icon-fill:${doneIconFill};` : ''}
      `}
    >
      <span><OscdCheckIcon svgStyles="fill: var(--icon-fill);" /></span>
      <span>Done</span>
    </button>
  {/if}
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

  .btn {
    height: 36px;
    min-width: 70px;
    padding: 0 12px;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    margin: 0;
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;

    background-color: var(--btn-bg);
    color: var(--btn-color);
  }

  .btn[disabled] { opacity: 0.6; cursor: default; }

  .btn--back {
    --btn-bg: rgb(from var(--base0) r g b / 0.5);
    --btn-color: var(--white);
    --icon-fill: var(--white);
  }

  .btn--next {
    --btn-bg: var(--white);
    --btn-color: var(--primary-base);
    --icon-fill: var(--primary-base);
  }

  .btn--done {
    --btn-bg: var(--white);
    --btn-color: var(--primary-base);
    --icon-fill: var(--primary-base);
  }
</style>
