<script lang="ts">
  import {
    getIdGeneratorService,
    IdBuilder,
    route
  } from '@oscd-transnet-plugins/oscd-template-generator';
  import { OscdButton } from '@oscd-transnet-plugins/oscd-component';
  import {
    OSCD_REFERENCE_PREFIX_ID_FORMAT
  } from '../../../../../libs/oscd-template-generator/src/lib/utils/id-formats';
  const service = getIdGeneratorService();

</script>

<h1>ID Builder</h1>
<div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
  <OscdButton callback={() => route.set({path: ["overview"]})}>Back To Overview</OscdButton>
</div>

<IdBuilder initialFormat={OSCD_REFERENCE_PREFIX_ID_FORMAT}/>
