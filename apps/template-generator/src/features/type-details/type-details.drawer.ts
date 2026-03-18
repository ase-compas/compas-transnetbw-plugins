import { openDrawer } from '@oscd-transnet-plugins/oscd-services/drawer';
import { TypeKind, type ViewMode } from '../../shared/model';
import TypeDetails from './components/TypeDetails.svelte';

export function openTypeDetailsDrawer(typeId: string, typeKind: TypeKind, mode: ViewMode = 'view') {
  return openDrawer({
    title: `${TypeKind.abbreviation(typeKind)}[${typeId}]`,
    component: TypeDetails,
    props: { typeId, mode },
  });
}
