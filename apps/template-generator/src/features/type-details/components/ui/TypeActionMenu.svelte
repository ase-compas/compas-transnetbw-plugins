<script lang="ts">

import OscdActionMenu from '../../../../../../../libs/oscd-component/src/oscd-action-menu/OscdActionMenu.svelte';
import List, { Item, Separator, Text, Graphic } from '@smui/list';
import { OscdDeleteIcon, OscdEditIcon } from '@oscd-transnet-plugins/oscd-icons';

interface Props {
  onRename?: () => void;
  onDelete?: () => void;
  actionsDisabled?: boolean;
}

const {
  onRename = () => {},
  onDelete = () => {},
  actionsDisabled = false,
}: Props  = $props();

</script>

<OscdActionMenu buttonVariant="default" disabled={actionsDisabled}>
  <List>
    <Item onSMUIAction={onRename}>
      <Graphic><OscdEditIcon svgStyles="fill: var(--oscd-plugin-brand)"/></Graphic>
      <Text>Rename</Text>
    </Item>
    <Separator />
    <Item onSMUIAction={onDelete}>
      <Graphic><OscdDeleteIcon svgStyles="fill: var(--oscd-plugin-brand)"/></Graphic>
      <Text>Delete</Text>
    </Item>
  </List>
</OscdActionMenu>
