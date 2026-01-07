<script lang="ts">
import OscdIconBase from '../oscd-icon-base/OscdIconBase.svelte';

    interface Props {
        svgStyles?: string;
    }

    let { svgStyles = '' }: Props = $props();
</script>

<OscdIconBase>
    <svg style={svgStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/>
    </svg>
</OscdIconBase>