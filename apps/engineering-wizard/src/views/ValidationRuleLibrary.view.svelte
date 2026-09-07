<script lang="ts">
  import { ValidationLibraryManager, type RuleTestRunner } from '@oscd-transnet-plugins/ui-validation-manager';
  import { validationLibraryService, validationServiceClient } from '../bootstrap';
  import { ENGINEERING_WIZARD_POLICY_NAME } from '../features/plugins/validation/library/naming';
  import { documentStore } from '../documentStore.svelte';
  import Button, { Label, Icon } from '@smui/button';
  import { OscdArrowBackIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    onClose: () => void;
  }

  const { onClose }: Props = $props();

  const policyMeta = {
    title: 'Engineering Wizard validation policy',
    description: 'Rules the Engineering Wizard runs, across all processes.',
  };

  // Lets the rule editor's last step run an unsaved rule against the document
  // that is currently open in OpenSCD.
  const sclDocument = $derived(
    documentStore.doc ? new XMLSerializer().serializeToString(documentStore.doc) : '',
  );

  const testRule: RuleTestRunner = (draft, sclContent) =>
    validationServiceClient.validateDraftRule(draft, sclContent);
</script>

<div class="rule-library-view">
  <div class="rule-library-header">
    <Button
      type="button"
      variant="unelevated"
      style="--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base); border: 1px solid #ccc;"
      onclick={onClose}
    >
      <Icon><OscdArrowBackIcon svgStyles="fill: var(--primary-base); width: 18px; height: 18px;" /></Icon>
      <Label>Back to processes</Label>
    </Button>
    <h1 class="rule-library-title">Manage validation rules</h1>
  </div>

  <p class="rule-library-hint">
    Create and edit the rule sets and rules available across the Engineering Wizard. Assign them
    to individual plugins from a process&rsquo;s &ldquo;Validator configuration&rdquo; step.
  </p>

  <ValidationLibraryManager
    mode="single-policy"
    service={validationLibraryService}
    policyName={ENGINEERING_WIZARD_POLICY_NAME}
    {policyMeta}
    {sclDocument}
    onTest={testRule}
  />
</div>

<style>
  .rule-library-view {
    margin-top: 16px;
    padding: 0 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .rule-library-header {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .rule-library-title {
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: var(--ew-font-size-h1, 1.25rem);
    font-weight: var(--ew-font-weight-heading, 600);
    color: var(--primary-base);
    margin: 0;
  }

  .rule-library-hint {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--primary-base);
    margin: 0;
  }
</style>
