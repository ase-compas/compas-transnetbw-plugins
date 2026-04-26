function toSemverParts(version: string): number[] {
    return version.split('.').map(Number);
}

/**
 * Compares two semantic-version-like strings (`major.minor.patch`).
 * Returns:
 * - positive if `versionA` is newer than `versionB`
 * - negative if `versionA` is older than `versionB`
 * - zero if equal
 */
export function compareVersions(versionA: string, versionB: string): number {
    const aParts = toSemverParts(versionA);
    const bParts = toSemverParts(versionB);

    for (let i = 0; i < 3; i++) {
        const a = aParts[i] ?? 0;
        const b = bParts[i] ?? 0;
        if (a > b) return 1;
        if (a < b) return -1;
    }

    return 0;
}

export function isVersionGreater(versionA: string, versionB: string): boolean {
    return compareVersions(versionA, versionB) > 0;
}

export function sortByVersionDescending<T extends { version: string }>(items: T[]): T[] {
    return [...items].sort((a, b) => -compareVersions(a.version, b.version));
}
