<script lang="ts">
  import { Icon } from "@smui/common";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";

    interface Props {
        summary: string;
        detail?: string;
        type: 'success' | 'error' | 'info' | 'warn';

        onClose?: () => void
    }

    let {summary, detail, type, onClose = () => {}}: Props = $props()

        const icons = {
        success: "check_circle",
        error: "error",
        info: "info",
        warn: "warning"
    };

    const colors = {
        success: "#4CAF50",
        error: "#F44336",
        info: "#2196F3",
        warn: "#FF9800"
    };

    function close() {
        onClose?.();
    }
</script>


<div 
    class="toast-card"
    style="--color:{colors[type]}"

    in:fly={{ x: 0, y: 30, duration: 150, easing: cubicIn }}
    out:fly={{ x: 50, y: 0, duration: 150, easing: cubicOut}}
>
    <div class="icon">
        <Icon class="material-icons">{icons[type]}</Icon>
    </div>

    <div class="content">
        <div class="summary">{summary}</div>
        {#if detail}
            <div class="detail">{detail}</div>
        {/if}
    </div>

    <button class="close" onclick={close}>
        <Icon class="material-icons">close</Icon>
    </button>
</div>

<style>
.toast-card {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    background: rgba(237, 241, 242, 0.96);
    border-left: 4px solid var(--color);
    border-radius: 8px;

    padding: 0.75rem 1rem;
    width: 300px;;
    max-width: 350px;

    box-shadow: 0 2px 6px rgb(0 0 0 / 0.15);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}

/* Material Design icon color */
.icon {
    color: var(--color);
    font-size: 1.5rem;
    display: flex;
    padding-top: 2px;
}

.content {
    flex: 1;
}

.summary {
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--color);
}

.detail {
    font-size: 0.85rem;
    color: #444;
    margin-top: 2px;
}

.close {
    all: unset;
    cursor: pointer;
    color: #555;
    padding: 4px;
    border-radius: 4px;
}

.close:hover {
    background: rgba(0,0,0,0.07);
}
</style>

