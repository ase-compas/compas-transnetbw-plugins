<script lang=ts>
  import OscdTooltip from "../oscd-tooltip/OscdTooltip.svelte";


  interface Props {
      breadcrumbs: string[]
  }

  const { breadcrumbs = []}: Props = $props();

  const MAX_VISIBLE = 4;
  const TRUNCATE_AT = 28;

  function truncate(label: string) {
      return label.length > TRUNCATE_AT
      ? label.slice(0, TRUNCATE_AT) + "…"
      : label;
  }

  const visibleBreadcrumbs = $derived.by(() => {
      if (breadcrumbs.length <= MAX_VISIBLE) {
          // display all items
          return breadcrumbs.map((label, index) => ({
              label,
              display: truncate(label),
              truncated: label.length > TRUNCATE_AT,
              isEllipsis: false,
              isCurrent: index === breadcrumbs.length-1
          }))
      }

      const first = breadcrumbs[0];
      const parents = breadcrumbs.slice(-3,-1);
      const current = breadcrumbs[breadcrumbs.length-1];

      return [
          { label: first, display: truncate(first), truncated: first.length > TRUNCATE_AT, isEllipsis: false, isCurrent: false },
          { label: "…", display: "…", truncated: false, isEllipsis: true, isCurrent: false },
          ...parents.map((label) => ({ label, display: truncate(label), truncated: label.length > TRUNCATE_AT, isEllipsis: false, isCurrent: false })),
          { label: current, display: truncate(current), truncated: current.length > TRUNCATE_AT, isEllipsis: false, isCurrent: true }
      ]
  });

</script>


<nav class="breadcrumbs" aria-label="Breadcrumb">
  {#each visibleBreadcrumbs as crumb, index}
    <OscdTooltip content={crumb.label} side="bottom" disabled={!crumb.truncated} hoverDelay={150}>
        <span
        class="breadcrumb
            {crumb.isCurrent ? 'current' : ''}
            {crumb.isEllipsis ? 'ellipsis' : ''}"
        aria-current={crumb.isCurrent ? 'page' : undefined}
        >
        {crumb.display}
        </span>
    </OscdTooltip>

    {#if index < visibleBreadcrumbs.length - 1}
      <span class="separator">/</span>
    {/if}
  {/each}
</nav>

<style>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.25rem;                       
  font-size: 1rem;                    
  white-space: nowrap;
  max-width: 100%;                    
  overflow: hidden;                   
  color: rgba(255, 255, 255, 0.75);   
}

.breadcrumb {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;                    
  color: rgba(255, 255, 255, 0.65);   
  flex-shrink: 1;                     
  min-width: 0;                       
  max-width: 200px;                   
}

.breadcrumb.current {
  font-weight: 500;  
  color: #fff;       
  cursor: default;   
  flex-shrink: 0;    
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 200px;  
}

.breadcrumb.ellipsis {
  color: rgba(255, 255, 255, 0.65);
  flex-shrink: 1;                  
  cursor: default;                 
}

.separator {
  color: rgba(255, 255, 255, 0.5);  
  margin: 0 0.25rem;                
  flex-shrink: 0;                   
}

</style>
