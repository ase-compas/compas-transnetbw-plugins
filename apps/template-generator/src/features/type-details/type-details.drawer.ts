import { openDrawer } from '@oscd-transnet-plugins/oscd-services/drawer';
import type { ViewMode } from '../../shared/model';
import TypeDetails from './components/TypeDetails.svelte';

export function openTypeDetailsDrawer(typeId: string, mode: ViewMode = 'view', title?: string) {
  return openDrawer({
    title: title ?? `Type ${typeId}`,
    component: TypeDetails,
    props: { typeId, mode },
  });
}
