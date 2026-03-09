import { openDrawer } from '@oscd-transnet-plugins/oscd-services/drawer';
import type { ViewMode } from './model';
import TypeDetails from './TypeDetails.svelte';

export function openTypeDetailsDrawer(typeId: string, mode: ViewMode = 'view', title?: string) {
  return openDrawer({
    title: title ?? `Type ${typeId}`,
    component: TypeDetails,
    props: { typeId, mode },
  });
}
