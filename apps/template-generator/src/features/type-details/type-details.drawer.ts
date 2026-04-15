import { openDrawer } from '@oscd-transnet-plugins/oscd-services/drawer';
import { TypeKind, type ViewMode } from '../../shared/model';
import TypeDetails from './components/TypeDetails.svelte';
import type { DataTypeService } from './services/type.service';
import type { DocState } from '../../shared/states/doc.state.svelte';
import type { DetailsConfig } from './types';

export function openTypeDetailsDrawer(
  typeId: string,
  typeKind: TypeKind,
  service: DataTypeService,
  docState: DocState,
  mode: ViewMode = 'view',
  config?: DetailsConfig
) {
  return openDrawer({
    title: typeKind ? `${TypeKind.abbreviation(typeKind)}[${typeId}]` : typeId,
    component: TypeDetails,
    props: { typeId, service, docState, mode, config },
  });
}
