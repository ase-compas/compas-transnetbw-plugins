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

  initValidationEditor(process.id, plugin.id, initialValidation);

  const steps = ['basic', 'rule-definition', 'test-and-validate'] as const;
  type Step = (typeof steps)[number];

  let currentStepIndex = $state(0);
  const currentStep: Step = $derived(steps[currentStepIndex]);
  const isAtFirstStep = $derived(currentStepIndex === 0);
  const isAtLastStep = $derived(currentStepIndex === steps.length - 1);

  const isValid = $derived(
    !!validationEditor.entry.title?.trim() &&
    !!validationEditor.entry.assert?.trim() &&
    !!validationEditor.entry.message?.trim(),
  );

  const isStepValid = $derived.by(() => {
    if (currentStep === 'basic') {
      return !!validationEditor.entry.title?.trim();
    }
    if (currentStep === 'rule-definition') {
      const hasMessage = !!validationEditor.ruleUi.message?.trim();
      if (validationEditor.ruleUi.mode === 'attribute') {
        return !!validationEditor.ruleUi.attribute?.trim() && hasMessage;
      }
      return !!validationEditor.ruleUi.elementName?.trim() && hasMessage;
    }
    return true;
  });

  const isNextDisabled = $derived(isAtLastStep ? !isValid : !isStepValid);

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
</script>

<OscdBaseDialog
  title="{initialValidation ? 'Edit' : 'Add'} validation for {plugin.name}"
  confirmActionText={initialValidation ? 'Save' : 'Add'}
  maxWidth="800px"
  maxHeight="800px"
  contentPadding="0 var(--dialog-h-padding, 1.5rem)"
  bind:open
  onConfirm={saveValidation}
  onCancel={cancel}
  onClose={cancel}
  confirmDisabled={!isValid}
  confirmClose={true}
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

  {#snippet actions({ requestClose })}
    <div class="dialog-actions">
      <Button onclick={requestClose}>Cancel</Button>

      <WorkflowActions
        onGoToPreviousStep={onGoToPreviousStep}
        onGoToNextStep={onGoToNextStep}
        onDone={() => {}}
        isAtFirstStep={isAtFirstStep}
        isAtLastStep={isAtLastStep}
        nextDisabled={isNextDisabled}
        showDone={false}
        backBg="var(--primary-base)"
        backColor="var(--white)"
        backIconFill="var(--white)"
        nextBg="var(--primary-base)"
        nextColor="var(--white)"
        nextIconFill="var(--white)"
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
    padding: 0.5rem var(--dialog-h-padding, 1.5rem);
  }

  .dialog-actions :global(.mdc-button) {
    margin-bottom: 0;
  }
</style>
