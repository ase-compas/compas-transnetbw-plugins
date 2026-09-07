<script lang="ts">
  import type { RuleDraft } from '@oscd-transnet-plugins/api-compas-validation-library';

  import ValidationBasicInformationDialogPage from './pages/ValidationBasicInformationDialogPage.svelte';
  import ValidationRuleDefinitionDialogPage from './pages/ValidationRuleDefinitionDialogPage.svelte';
  import ValidationRuleTestDialogPage from './pages/ValidationRuleTestDialogPage.svelte';
  import WorkflowActions from './WorkflowActions.svelte';
  import { validationEditor, initRuleEditor } from './store/ruleEditorStore.svelte';
  import { buildAssertionExpression } from './utils/xpathBuilder';
  import type { RuleEditorController, RuleTestRunner } from './types';

  interface Props {
    /** The rule being edited. Omit the `name` to create a new one. */
    draft: RuleDraft;
    /** Serialized SCL document to test the rule against. */
    sclDocument?: string;
    /** Executes the draft against the document. Omitted disables the test run. */
    onTest?: RuleTestRunner;
    /** True while a save is in flight. */
    busy?: boolean;
    onSave: (draft: RuleDraft) => void | Promise<void>;
    onCancel: () => void;
    /**
     * Renders the built-in step navigation. Set to false when the host supplies
     * its own footer (see {@link controller}), as the Engineering Wizard does.
     */
    showActions?: boolean;
    /**
     * Receives the live navigation state so a host can drive the wizard from
     * its own dialog footer instead of the built-in action row.
     */
    controller?: RuleEditorController;
  }

  let {
    draft,
    sclDocument = '',
    onTest,
    busy = false,
    onSave,
    onCancel,
    showActions = true,
    controller = $bindable(),
  }: Props = $props();

  initRuleEditor(draft);

  const steps = ['basic', 'rule-definition', 'test-and-validate'] as const;
  type Step = (typeof steps)[number];

  let currentStepIndex = $state(0);
  const currentStep: Step = $derived(steps[currentStepIndex]);
  const isAtFirstStep = $derived(currentStepIndex === 0);
  const isAtLastStep = $derived(currentStepIndex === steps.length - 1);

  // Sync ruleUi → entry regardless of which step is currently visible.
  $effect(() => {
    validationEditor.entry.message = validationEditor.ruleUi.message;

    if (validationEditor.ruleUi.expertMode) {
      validationEditor.entry.assertion = validationEditor.ruleUi.expertXPath;
    } else {
      validationEditor.entry.assertion = buildAssertionExpression(validationEditor.ruleUi);
    }
  });

  const isValid = $derived(
    !!validationEditor.entry.title?.trim() &&
      !!validationEditor.entry.assertion?.trim() &&
      !!validationEditor.entry.message?.trim(),
  );

  const isStepValid = $derived.by(() => {
    if (currentStep === 'basic') {
      return !!validationEditor.entry.title?.trim();
    }
    if (currentStep === 'rule-definition') {
      const hasMessage = !!validationEditor.ruleUi.message?.trim();
      if (validationEditor.ruleUi.expertMode) {
        return !!validationEditor.ruleUi.expertXPath?.trim() && hasMessage;
      }
      if (validationEditor.ruleUi.mode === 'attribute') {
        return !!validationEditor.ruleUi.attribute?.trim() && hasMessage;
      }
      return !!validationEditor.ruleUi.elementName?.trim() && hasMessage;
    }
    return true;
  });

  const isNextDisabled = $derived(busy || (isAtLastStep ? !isValid : !isStepValid));

  async function save() {
    if (!isValid) return;
    const entry = $state.snapshot(validationEditor.entry);
    await onSave({
      ...entry,
      title: entry.title.trim(),
      context: (entry.context ?? '').trim(),
      assertion: entry.assertion.trim(),
      message: (entry.message ?? '').trim(),
      ruleUi: $state.snapshot(validationEditor.ruleUi) as Record<string, unknown>,
    });
  }

  function goToPreviousStep() {
    if (currentStepIndex > 0) currentStepIndex -= 1;
  }

  function goToNextStep() {
    if (currentStepIndex < steps.length - 1) {
      currentStepIndex += 1;
    } else {
      void save();
    }
  }

  // Publish the navigation state so a host footer can mirror the built-in one.
  $effect(() => {
    controller = {
      isAtFirstStep,
      isAtLastStep,
      isNextDisabled,
      isValid,
      isEditing: !!draft.name,
      goToPreviousStep,
      goToNextStep,
      save,
    };
  });
</script>

<div class="rule-editor-wizard">
  {#if currentStep === 'basic'}
    <ValidationBasicInformationDialogPage />
  {:else if currentStep === 'rule-definition'}
    <ValidationRuleDefinitionDialogPage />
  {:else}
    <ValidationRuleTestDialogPage {sclDocument} {onTest} />
  {/if}
</div>

{#if showActions}
  <div class="rule-editor-actions">
    <button type="button" class="rule-editor-cancel" onclick={onCancel} disabled={busy}>
      Cancel
    </button>

    <WorkflowActions
      onGoToPreviousStep={goToPreviousStep}
      onGoToNextStep={goToNextStep}
      onDone={() => {}}
      {isAtFirstStep}
      {isAtLastStep}
      nextDisabled={isNextDisabled}
      showDone={false}
      backBg="var(--vlm-accent, #37474f)"
      backColor="var(--vlm-on-accent, #ffffff)"
      backIconFill="var(--vlm-on-accent, #ffffff)"
      nextBg="var(--vlm-accent, #37474f)"
      nextColor="var(--vlm-on-accent, #ffffff)"
      nextIconFill="var(--vlm-on-accent, #ffffff)"
      nextLabelWhenLastStep={draft.name ? 'Save' : 'Create'}
      showCheckOnLastStep={true}
    />
  </div>
{/if}

<style>
  .rule-editor-wizard {
    display: flex;
    flex-direction: column;
  }

  .rule-editor-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 0 -1.5rem -1.5rem;
    padding: 0.6rem 1.5rem;
    background-color: #ffffff;
    border-top: 1px solid var(--mdc-theme-on-surface-divider-color, rgba(0, 0, 0, 0.12));
  }

  .rule-editor-cancel {
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    font: inherit;
    font-weight: 500;
    color: var(--vlm-accent, #37474f);
    cursor: pointer;
    border-radius: 4px;
  }

  .rule-editor-cancel:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.04);
  }

  .rule-editor-cancel:disabled {
    opacity: 0.5;
    cursor: default;
  }
</style>
