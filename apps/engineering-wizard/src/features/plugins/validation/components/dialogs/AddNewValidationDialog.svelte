<script lang="ts">
  import OscdBaseDialog from '../../../../../../../../libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import type { Plugin, Process, XPathValidation } from '@oscd-transnet-plugins/shared';

  import Button from '@smui/button';
  import WorkflowActions from '../../../../../components/shared/WorkflowActions.svelte';

  import ValidationBasicInformationDialogPage from './pages/ValidationBasicInformationDialogPage.svelte';
  import ValidationRuleDefinitionDialogPage from './pages/ValidationRuleDefinitionDialogPage.svelte';
  import ValidationRuleTestDialogPage from './pages/ValidationRuleTestDialogPage.svelte';
  import { validationEditor, initValidationEditor } from '../../validationEditorStore.svelte';

  interface Props {
    open: boolean;
    plugin: Plugin;
    process: Process;
    initialValidation?: XPathValidation;
  }

  let { open = $bindable(false), plugin, process, initialValidation }: Props = $props();

  // Initialise shared store once when the dialog mounts.
  initValidationEditor(process.id, plugin.id, initialValidation);

  const isValid = $derived(
    !!validationEditor.entry.title?.trim() &&
    !!validationEditor.entry.assert?.trim() &&
    !!validationEditor.entry.message?.trim(),
  );

  function saveValidation() {
    closeDialog('confirm', {
      ...$state.snapshot(validationEditor.entry),
      title: validationEditor.entry.title.trim(),
      context: validationEditor.entry.context ?? '',
      assert: validationEditor.entry.assert.trim(),
      message: (validationEditor.entry.message ?? '').trim(),
      ruleUi: $state.snapshot(validationEditor.ruleUi) as Record<string, unknown>,
    });
  }

  function cancel() {
    closeDialog('cancel');
  }

  const steps = ['basic', 'rule-definition', 'test-and-validate'] as const;
  type Step = (typeof steps)[number];

  let currentStepIndex = $state(0);
  const currentStep: Step = $derived(steps[currentStepIndex]);

  function onGoToPreviousStep() {
    if (currentStepIndex > 0) currentStepIndex -= 1;
  }

  function onGoToNextStep() {
    if (currentStepIndex < steps.length - 1) {
      currentStepIndex += 1;
    } else {
      saveValidation();
    }
  }

  const isAtFirstStep = $derived(currentStepIndex === 0);
  const isAtLastStep = $derived(currentStepIndex === steps.length - 1);
</script>

<OscdBaseDialog
  title="{initialValidation ? 'Edit' : 'Add'} validation for {plugin.name}"
  confirmActionText={initialValidation ? 'Save' : 'Add'}
  maxWidth="800px"
  maxHeight="800px"
  bind:open
  onConfirm={saveValidation}
  onCancel={cancel}
  onClose={cancel}
  confirmDisabled={!isValid}
>
  {#snippet content()}
    {#if currentStep === 'basic'}
      <ValidationBasicInformationDialogPage />
    {:else if currentStep === 'rule-definition'}
      <ValidationRuleDefinitionDialogPage />
    {:else}
      <ValidationRuleTestDialogPage />
    {/if}
  {/snippet}

  {#snippet actions()}
    <div class="dialog-actions">
      <Button onclick={cancel}>Cancel</Button>

      <WorkflowActions
        onGoToPreviousStep={onGoToPreviousStep}
        onGoToNextStep={onGoToNextStep}
        onDone={() => {}}
        isAtFirstStep={isAtFirstStep}
        isAtLastStep={isAtLastStep}
        showDone={false}
        backBg="rgb(from var(--base0) r g b / 0.5)"
        backColor="var(--white)"
        backIconFill="var(--white)"
        nextBg="var(--white)"
        nextColor="var(--primary-base)"
        nextIconFill="var(--primary-base)"
        nextLabelWhenLastStep={initialValidation ? 'Save' : 'Create'}
        showCheckOnLastStep={true}
      />
    </div>
  {/snippet}
</OscdBaseDialog>

<style>
  .dialog-actions {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
</style>
