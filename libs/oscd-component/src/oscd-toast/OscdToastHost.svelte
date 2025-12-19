<script lang="ts">
    import { flip } from "svelte/animate";
    import { toastService } from "@oscd-transnet-plugins/oscd-services/toast";
    import OscdToast from "./OscdToast.svelte";

    const toasts = toastService.toasts;
</script>

<div class="toast-host">
    {#each toasts.items as t (t.id)}
    <div animate:flip>
        <OscdToast
            summary={t.summary}
            detail={t.detail}
            type={t.type}
            onClose={() => toastService.remove(t.id)}
        />
    </div>
    {/each}
</div>

<style>
.toast-host {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;  
  gap: 0.75rem;
  z-index: 99999;
}
</style>
