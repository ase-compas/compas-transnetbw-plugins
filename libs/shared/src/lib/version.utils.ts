export type VersionBump = 'major' | 'minor' | 'patch';

function toSemverParts(version: string): number[] {
    return version.split('.').map(Number);
}

/**
 * Returns the new version string after applying the given bump.
 * Falls back to 0 for any part that is missing or not a valid number.
 */
export function bumpVersion(version: string, bump: VersionBump): string {
    const parts = version.split('.').map(Number);
    const major = Number.isFinite(parts[0]) ? parts[0] : 0;
    const minor = Number.isFinite(parts[1]) ? parts[1] : 0;
    const patch = Number.isFinite(parts[2]) ? parts[2] : 0;
    if (bump === 'major') return `${major + 1}.0.0`;
    if (bump === 'minor') return `${major}.${minor + 1}.0`;
    return `${major}.${minor}.${patch + 1}`;
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
