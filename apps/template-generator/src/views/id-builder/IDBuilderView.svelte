<script lang="ts">
  import {
    getIdGeneratorService,
    IdBuilder, route
  } from '@oscd-transnet-plugins/oscd-template-generator';
  import {
    OSCD_REFERENCE_PREFIX_ID_FORMAT
  } from '../../../../../libs/oscd-template-generator/src/lib/utils/id-formats';
  import { OscdBreadcrumbs } from '@oscd-transnet-plugins/oscd-component';
  const service = getIdGeneratorService();

</script>


<div style="margin-bottom: 1rem;">
  <OscdBreadcrumbs
    color='var(--primary-base)'
    breadcrumbs={[
      { label: 'Logical Node Types', enabled: true },
      { label: 'ID Formats', enabled: false },
    ]}
    activeIndex={1}
    handleClick={(idx) => {
      if (idx === 0) route.set({path: ["overview"]});
    }}
  />
</div>

<IdBuilder initialFormat={OSCD_REFERENCE_PREFIX_ID_FORMAT}/>
