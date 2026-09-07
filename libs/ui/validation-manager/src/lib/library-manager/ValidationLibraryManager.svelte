<script lang="ts">
  import {
    PolicyManager,
    createPolicy,
    listPolicies,
    type CatalogueEntry,
    type PolicyScope,
    type ResourceMetadata,
    type ValidationLibraryService,
  } from '@oscd-transnet-plugins/api-compas-validation-library';
  import CatalogueBrowser from '../catalogue/CatalogueBrowser.svelte';
  import PolicyEditor from './PolicyEditor.svelte';
  import type { RuleTestRunner } from '../rule-editor/types';
  import { deriveResourceName } from '../catalogue/naming';

  /** Test-run support, available in both modes. */
  interface RuleTestProps {
    /** Serialized SCL document rules can be test-run against in the editor. */
    sclDocument?: string;
    /** Executes an unsaved rule against the document. Omitted disables testing. */
    onTest?: RuleTestRunner;
  }

  interface SinglePolicyProps extends RuleTestProps {
    mode: 'single-policy';
    service: ValidationLibraryService;
    /** Fixed identity of the one policy this consumer manages (e.g. the whole Engineering Wizard). */
    policyName: string;
    policyMeta: ResourceMetadata;
    /**
     * Restricts bindings to a scope, e.g. the plugin currently selected
     * within the process - see `PolicyEditor`'s prop of the same name for
     * details. Several rule packs can still be created/bound under one
     * scope.
     */
    bindScope?: PolicyScope;
  }

  interface CatalogueProps extends RuleTestProps {
    mode: 'catalogue';
    service: ValidationLibraryService;
  }

  type Props = SinglePolicyProps | CatalogueProps;

  // Discriminated union props: destructuring here would lose the mode-based
  // narrowing used below, so we intentionally keep $props() undestructured.
  // eslint-disable-next-line svelte/valid-compile
  const props: Props = $props();

  // Only meaningful in catalogue mode; kept at module scope so the markup
  // below stays a single, mode-agnostic block.
  let policies = $state<CatalogueEntry[]>([]);
  let loading = $state(false);
  let hasLoadedOnce = false;
  let busy = $state(false);
  let error = $state<string | undefined>(undefined);
  let selected = $state<{ name: string; meta: ResourceMetadata } | undefined>(undefined);

  async function reload(service: ValidationLibraryService) {
    // Only show the full "Loading…" replacement on the very first load; a
    // background refresh after a mutation should keep the existing list
    // mounted (avoids DOM churn/flicker and losing focus mid-interaction).
    if (!hasLoadedOnce) loading = true;
    error = undefined;
    try {
      policies = await listPolicies(service);
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to load policies.';
    } finally {
      loading = false;
      hasLoadedOnce = true;
    }
  }

  $effect(() => {
    if (props.mode === 'catalogue') void reload(props.service);
  });

  async function select(service: ValidationLibraryService, name: string) {
    const content = await new PolicyManager(service).load(name);
    selected = {
      name,
      meta: content
        ? { title: content.title, ...(content.description ? { description: content.description } : {}) }
        : { title: name },
    };
  }

  async function create(service: ValidationLibraryService, title: string, description: string) {
    const name = deriveResourceName(
      title,
      policies.map((entry) => entry.name),
    );
    const meta: ResourceMetadata = description ? { title, description } : { title };
    await createPolicy(service, name, meta);
    await reload(service);
    selected = { name, meta };
  }

  async function remove(service: ValidationLibraryService, name: string) {
    busy = true;
    try {
      await service.deletePolicy(name);
      if (selected?.name === name) selected = undefined;
      await reload(service);
    } finally {
      busy = false;
    }
  }
</script>

<div class="validation-library-manager">
  {#if props.mode === 'single-policy'}
    <PolicyEditor
      service={props.service}
      policyName={props.policyName}
      policyMeta={props.policyMeta}
      bindScope={props.bindScope}
      sclDocument={props.sclDocument}
      onTest={props.onTest}
    />
  {:else if selected}
    <PolicyEditor
      service={props.service}
      policyName={selected.name}
      policyMeta={selected.meta}
      sclDocument={props.sclDocument}
      onTest={props.onTest}
    />
  {:else}
    {#if error}
      <p class="validation-library-manager-error" role="alert">{error}</p>
    {/if}
    <h2>Validation policies</h2>
    <CatalogueBrowser
      entries={policies}
      {loading}
      {busy}
      onOpen={(name) => select(props.service, name)}
      onDelete={(name) => remove(props.service, name)}
      createLabel="+ New policy"
      onCreate={(title, description) => create(props.service, title, description)}
    />
  {/if}
</div>

<style>
  .validation-library-manager {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }

  .validation-library-manager h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--base00, #37474f);
  }

  .validation-library-manager-error {
    color: var(--primary-base, #37474f);
    font-size: var(--ew-font-size-small, 0.75rem);
    margin: 0;
  }
</style>
