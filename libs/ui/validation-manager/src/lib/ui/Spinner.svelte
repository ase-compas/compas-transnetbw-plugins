<script lang="ts">
  /**
   * Small CSS-only spinner. Replaces `@smui/circular-progress` inside the
   * rule editor's "Run Validation" button. Sized by `--vlm-spinner-size`
   * so callers can shrink it to fit inside a button label without wrapping
   * in a positioning helper.
   */
  interface Props {
    /** CSS size (e.g. "16px", "1em"). Defaults to 16px. */
    size?: string;
    /** Stroke colour. Defaults to `currentColor` so it follows the button
     * label. */
    color?: string;
  }

  const { size = '16px', color = 'currentColor' }: Props = $props();
</script>

<span
  class="vlm-spinner"
  role="status"
  aria-label="Loading"
  style="--vlm-spinner-size: {size}; --vlm-spinner-color: {color};"
>
  <span class="vlm-spinner__ring"></span>
</span>

<style>
  .vlm-spinner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--vlm-spinner-size, 16px);
    height: var(--vlm-spinner-size, 16px);
  }

  .vlm-spinner__ring {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-top-color: var(--vlm-spinner-color, currentColor);
    border-right-color: var(--vlm-spinner-color, currentColor);
    border-radius: 50%;
    animation: vlm-spin 0.8s linear infinite;
  }

  @keyframes vlm-spin {
    to { transform: rotate(360deg); }
  }

  /* Respect user preference; the button still shows "Validating…" text so
   * loss of the animation does not remove any semantic information. */
  @media (prefers-reduced-motion: reduce) {
    .vlm-spinner__ring {
      animation-duration: 3s;
    }
  }
</style>
