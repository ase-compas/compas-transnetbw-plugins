<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    onClose: () => void;
    children: Snippet;
  }

  const { title, onClose, children }: Props = $props();

  /**
   * Uses the native <dialog> element on purpose: the shared library is consumed
   * by two plugins in separate repositories, so it cannot depend on either
   * one's component kit for something as basic as a modal.
   */
  function mount(node: HTMLDialogElement) {
    node.showModal();
    return { destroy: () => node.close() };
  }
</script>

<dialog
  class="modal-shell"
  use:mount
  onclose={onClose}
  oncancel={(event) => {
    event.preventDefault();
    onClose();
  }}
>
  <header class="modal-shell-header">
    <h3>{title}</h3>
    <button type="button" class="modal-shell-close" aria-label="Close" onclick={onClose}>
      &times;
    </button>
  </header>

  <div class="modal-shell-body">
    {@render children()}
  </div>
</dialog>

<style>
  .modal-shell {
    width: min(820px, 92vw);
    max-height: 88vh;
    padding: 0;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-family: Roboto, sans-serif;

    /*
     * The rule editor nested inside this dialog (`RuleEditorWizard` and
     * everything under `rule-editor/`) was written against the Engineering
     * Wizard's own theme tokens (`--primary-base`, `--base0`.."3", `--white`,
     * `--ew-font-*`). Redeclaring them here - using each variable as its own
     * fallback - keeps a host app's values if it already defines them
     * (inherited from an ancestor, e.g. Engineering Wizard's global theme)
     * while giving every other consumer (e.g. SCL Quality Guard, which has
     * no such tokens at all) a sane, brand-neutral default instead of an
     * unresolved `var()` silently dropping colors/fonts/layout.
     */
    --primary-base: var(--primary-base, #37474f);
    --white: var(--white, #ffffff);
    --base0: var(--base0, #90a4ae);
    --base00: var(--base00, #37474f);
    --base01: var(--base01, #607d8b);
    --base03: var(--base03, #263238);
    --base1: var(--base1, #b0bec5);
    --base3: var(--base3, #eceff1);
    --ew-font-family: var(--ew-font-family, 'Roboto', sans-serif);
    --ew-font-size-body: var(--ew-font-size-body, 0.875rem);
    --ew-font-size-small: var(--ew-font-size-small, 0.75rem);
    --ew-font-weight-medium: var(--ew-font-weight-medium, 500);
    --ew-font-weight-normal: var(--ew-font-weight-normal, 400);
  }

  .modal-shell::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }

  .modal-shell-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.2rem 1.5rem;
    /*
     * `--vlm-accent`/`--vlm-on-accent` are this library's own theme hooks -
     * it is embedded in two separately themed apps (Engineering Wizard, SCL
     * Quality Guard) and cannot assume either one's CSS variable names.
     * A host app that wants its own brand colour here defines these two
     * variables (e.g. bridging them to its own `--primary-base`/`--white`);
     * otherwise the neutral fallback below is used.
     */
    background-color: var(--vlm-accent, #37474f);
    color: var(--vlm-on-accent, #ffffff);
  }

  .modal-shell-header h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }

  .modal-shell-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    color: var(--vlm-on-accent, #ffffff);
    padding: 0 0.25rem;
    opacity: 0.85;
  }

  .modal-shell-close:hover {
    opacity: 1;
  }

  .modal-shell-body {
    max-height: calc(88vh - 4rem);
    overflow-y: auto;
    padding: 1.5rem;
    background-color: #ffffff;
  }
</style>
