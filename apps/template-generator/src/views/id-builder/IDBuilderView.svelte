<script lang="ts">
  import {
    getIdGeneratorService,
    IdBuilder, route
  } from '@oscd-transnet-plugins/oscd-template-generator';
  import {
    OSCD_REFERENCE_PREFIX_ID_FORMAT
  } from '../../../../../libs/oscd-template-generator/src/lib/utils/id-formats';
  const service = getIdGeneratorService();

</script>

<IdBuilder initialFormat={OSCD_REFERENCE_PREFIX_ID_FORMAT}/>
