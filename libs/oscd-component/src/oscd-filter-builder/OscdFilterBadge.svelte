<script lang=ts>
    import { OscdArrowDownIcon, OscdAddCircleIcon, OscdCancelIcon } from '@oscd-transnet-plugins/oscd-icons';
  import OscdTooltip from '../oscd-tooltip/OscdTooltip.svelte';
    interface Props {
        label: string;
        value?: any;
        onOpen: () => void;
        onRemove: () => void;
    }

    let { label, value, onOpen, onRemove }: Props = $props();

    let active = $derived<boolean>(!!value); // whether the filter is active
</script>

<button 
    type="button"
    class="filter-badge {active ? 'filter-badge--active' : 'filter-badge--inactive'}"
    onclick={(e) => {
        e.stopPropagation();
        onOpen();
    }}
    >
    <div class="filter-badge__icon">
        {#if active}
            <OscdTooltip content="Remove Filter" hoverDelay={500} side="top">
                <button 
                type="button"
                style="all: unset; display: flex; align-items: center; justify-content: center;"
                onclick={(e) => {
                    e.stopPropagation();
                    onRemove();
                }}>
                    <OscdCancelIcon svgStyles="fill: grey; height: filt-content; width: fit-content;"/>
                </button>
            </OscdTooltip>
        {:else}
            <OscdTooltip content="Add Filter" hoverDelay={501} side="top">
                <OscdAddCircleIcon svgStyles="fill: grey; height: filt-content; width: fit-content;"/>
            </OscdTooltip>
        {/if}
    </div>

    <span class="filter-badge__label">{label}</span>

    {#if active}
        <span class="filter-badge__seperator">|</span>
        <span class="filter-badge__value">{value}</span>
        <span class=filter-badge__arrow-down>
            <OscdArrowDownIcon svgStyles="fill: gray;"/>
        </span>
    {/if}
</button>

<style>
    .filter-badge {
        all: unset;
        height: fit-content;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.9rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;

        transition:
            background-color 0.15s ease,
            border-color 0.15s ease,
            box-shadow 0.15s ease;
    }

    /* ------- Filter Badge Hover ------- */
    .filter-badge:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

    .filter-badge--active:hover {
        border-color: #555;
    }

    .filter-badge--inactive:hover {
        border-color: #555;
    }

    .filter-badge:active {
        background-color: rgba(0, 0, 0, 0.08);
    }

    .filter-badge__icon button:active :global(svg),
    .filter-badge__icon:active :global(svg) {
        fill: #444;
        transform: scale(0.95);
    }

    /*---------- -------------*/
    .filter-badge__icon {
    display: flex;
    align-items: center;
    margin-right: 0.3rem;

    transition: transform 0.15s ease;
    }

    .filter-badge__icon :global(svg) {
        display: block;
        transform: translateY(-0.5px);
    }

    /* SVG inside icon */
    .filter-badge__icon :global(svg) {
        transition: fill 0.15s ease, transform 0.15s ease;
    }

    /* ---------- Icon hover (direct hover only) ---------- */

    .filter-badge__icon:hover :global(svg) {
        fill: #555;              /* darker */
        transform: scale(1.05);  /* subtle pop */
    }

    .filter-badge--active {
        border: 1px solid gray;
    }

    .filter-badge--inactive {
        border: 1px dashed gray;
    }

    .filter-badge__label {
        font-weight: 700;
    }

    .filter-badge__seperator {
        color:lightgray;
        margin: 0 0.3rem;
    }

    .filter-badge__value {
        color: var(--secondary);
        font-weight: 700;
    }

    .filter-badge__icon {
        display: flex;
        align-items: center;
        margin-right: 0.3rem;
    }
</style>