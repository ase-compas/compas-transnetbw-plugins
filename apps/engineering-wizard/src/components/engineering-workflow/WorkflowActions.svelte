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
      <span><OscdArrowBackIcon svgStyles="fill: #ffffff" /></span>
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
      <span><OscdArrowForwardIcon svgStyles="fill: var(--brand);" /></span>
    </button>
  </div>
  <button
    type="button"
    class="btn btn--done"
    onclick={onDone}
    disabled={doneDisabled}
    aria-label="Done"
  >
    <span><OscdCheckIcon svgStyles="fill: var(--brand);" /></span>
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
  .btn--back { color: #ffffff; background-color: #6b9197; }
  .btn--next { background-color: #ffffff; color: var(--brand); }
  .btn--done { background-color: #ffffff; color: var(--brand); }

</style>
