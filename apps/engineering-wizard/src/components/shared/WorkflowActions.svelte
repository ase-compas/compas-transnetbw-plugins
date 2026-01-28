<script lang="ts">
  import { OscdArrowBackIcon, OscdArrowForwardIcon, OscdCheckIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    onGoToPreviousStep: () => void;
    onGoToNextStep: () => void;
    onDone: () => void;
    previousDisabled?: boolean;
    isAtFirstStep?: boolean;
    isAtLastStep?: boolean;
  }

  const {
    onGoToPreviousStep,
    onGoToNextStep,
    onDone,
    isAtFirstStep = false,
    isAtLastStep = false,
    doneDisabled = false
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
    >
      <span><OscdArrowBackIcon svgStyles="fill: var(--white)" /></span>
      <span>Back</span>
    </button>

    <button
      type="button"
      class="btn btn--next"
      onclick={onGoToNextStep}
      disabled={isAtLastStep}
      aria-label="Next step"
    >
      <span>Next</span>
      <span><OscdArrowForwardIcon svgStyles="fill: var(--primary-base);" /></span>
    </button>
  </div>
  <button
    type="button"
    class="btn btn--done"
    onclick={onDone}
    disabled={doneDisabled}
    aria-label="Done"
  >
    <span><OscdCheckIcon svgStyles="fill: var(--primary-base);" /></span>
    <span>Done</span>
  </button>
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
  }

  .btn[disabled] { opacity: 0.6; cursor: default; }
  .btn--back { color: var(--white); background-color: rgb(from var(--base0) r g b / 0.5); }
  .btn--next { background-color: var(--white); color: var(--primary-base); }
  .btn--done { background-color: var(--white); color: var(--primary-base); }

</style>
