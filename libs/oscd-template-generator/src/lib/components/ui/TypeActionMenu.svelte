<script lang="ts">

import OscdActionMenu from '../../../../../oscd-component/src/oscd-action-menu/OscdActionMenu.svelte';
import List, { Item, Separator, Text, Graphic } from '@smui/list';
import { OscdDeleteIcon, OscdEditIcon } from '@oscd-transnet-plugins/oscd-icons';

interface Props {
  onRename?: () => void;
  onDelete?: () => void;
}

const { onRename = () => {}, onDelete = () => {} }: Props  = $props();

</script>

<OscdActionMenu buttonVariant="default">
  <List>
    <Item onSMUIAction={onRename}>
      <Graphic><OscdEditIcon svgStyles="fill: var(--primary-base)"/></Graphic>
      <Text>Rename</Text>
    </Item>
    <Separator />
    <Item onSMUIAction={onDelete}>
      <Graphic><OscdDeleteIcon svgStyles="fill: var(--primary-base)"/></Graphic>
      <Text>Delete</Text>
    </Item>
  </List>
</OscdActionMenu>
