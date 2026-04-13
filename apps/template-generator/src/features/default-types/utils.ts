import type { DefaultTypeList } from "./types";

export function mapDefaulTypesListToVersions(defaultTypeList: DefaultTypeList): Version[] {
    if (!defaultTypeList.content) return [];
    // sort by version. derive latest, rest is locked
    const sorted = defaultTypeList.content.sort((a, b) => {
        const aParts = a.version.split('.').map(Number);
        const bParts = b.version.split('.').map(Number);
        for (let i = 0; i < 3; i++) {
            if (aParts[i] > bParts[i]) {
                return -1;
            } else if (aParts[i] < bParts[i]) {
                return 1;
            }
        }
        return 0;
    });

    return sorted.map((item, index) => ({
        version: item.version,
        locked: index !== 0,
        latest: index === 0,
        secondaryText: index !== 0 ? 'Read-only' : undefined
    }));
}