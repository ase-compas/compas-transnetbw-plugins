import type { DefaultTypeList } from "../types";
import { compareVersions, isVersionGreater, sortByVersionDescending } from '@oscd-transnet-plugins/shared';

export { compareVersions, isVersionGreater, sortByVersionDescending };

export function mapDefaulTypesListToVersions(defaultTypeList: DefaultTypeList): Version[] {
    if (!defaultTypeList.content) return [];
    // sort by version. derive latest, rest is locked
    const sorted = sortByVersionDescending(defaultTypeList.content);

    return sorted.map((item, index) => ({
        version: item.version,
        locked: index !== 0,
        latest: index === 0,
        secondaryText: index !== 0 ? 'Read-only' : undefined
    }));
}