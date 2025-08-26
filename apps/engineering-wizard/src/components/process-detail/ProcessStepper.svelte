<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import WorkflowBack from '../engineering-workflow/WorkflowBack.svelte';

  const dispatch = createEventDispatcher();

  const nextStep = () => dispatch('next');
  const previousStep = () => dispatch('previous');
  const back = () => dispatch('back');
</script>

<div class="stepper">
  <WorkflowBack on:back={back} />

  <div class="steps">
    <div class="step">
      <button on:click={() => console.log('STEP 1 CLICKED')} class:not-visited={true}>1</button>
      <p>Process Definition</p>
    </div>

    <div class="plugin-step-line"></div>

    <div class="step">
      <button on:click={() => console.log('STEP 2 CLICKED')} class:not-visited={true}>2</button>
      <p>Validator Configuration</p>
    </div>
  </div>

  <div class="stepper-navigation">
    <button type="button" on:click={previousStep} class="btn btn--back" aria-label="Previous step">Back</button>
    <button type="button" on:click={nextStep} class="btn btn--next" aria-label="Next step">Next</button>
  </div>
</div>

<style>
  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background-color: #004552;
  }

  .steps {
    display: flex;
    gap: 0.5rem;
    justify-self: center;
    align-items: center;
  }

  .stepper-navigation {
    display: flex;
    gap: 0.8rem;
    justify-self: end;
  }

  .step {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 0.8rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  .step :global(button) {
    width: 2rem;
    height: 2rem;
    border: 1px solid transparent;
    border-radius: 50%;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  .step :global(button.not-visited) {
    background-color: #6B9197;
    color: #ffffff;
  }

  .plugin-step-line {
    width: 56px;
    height: 1px;
    background-color: #6B9197;
  }

  .btn {
    height: 36px;
    min-width: 70px;
    padding: 0 12px;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn--back {
    color: #ffffff;
    background-color: #6b9197;
  }

  .btn--next {
    background-color: #ffffff;
    color: var(--brand);
  }
</style>

