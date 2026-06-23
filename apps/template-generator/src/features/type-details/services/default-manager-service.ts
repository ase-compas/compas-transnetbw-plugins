import type { EditV2, RemoveV2 } from "@oscd-transnet-plugins/oscd-event-api";
import type { DefaultTypeService } from "../../default-types/service/default-type.service";
import type { DefaultTypeKey, DefaultType } from "../../default-types/types";
import type { DefaultMetadataService, DefaultTypeMetadata } from "./default-metadata-service";
import { listDataTypeElements, insertTypeElements } from "../../../shared/utils/scl.utils";
import type { DefaultStatus } from "apps/template-generator/src/shared/model";

const IMPORTED_DEFAULT_SUFFIX = "imported-default";
const MAX_TYPE_ID_LENGTH = 64;

export type UpgradeInfo = {
    key: DefaultTypeKey;
    version: string;
}

export type ApplyResult = {
    edits: EditV2[];
    effectiveRootIds: Map<string, string | null>;
}

type PreparedDefaultImport = {
    key: DefaultTypeKey;
    id: string;
    version: string;
    rootId: string;
    typeElements: Element[];
    typeElementIds: string[];
};

type UpgradePreparation = {
    cleanupEdits: EditV2[];
    releasedIds: string[];
    excludedVersionsByKey: Map<string, Set<string>>;
};

/**
 * Orchestrates applying and upgrading default types in an SCL document.
 * Resolves the latest available defaults, detects ID collisions, and assembles
 * the edits needed to insert or replace type elements and their metadata.
 */
export class DefaultManagerService {

    private latestDefaultsCache: Map<string, DefaultType> | null = null;

    constructor(
        private metadataService: DefaultMetadataService,
        private defaultTypeService: DefaultTypeService 
    ) {}

    /**
     * Adds the latest default of each key to the document if not already present. Returns the edits that would be applied and the effective rootIds for each key after application.
     * @param doc The XML document to which the defaults will be applied.
     * @param key The keys of the defaults to be applied.
     */
    async batchApply(doc: XMLDocument, key: DefaultTypeKey[]): Promise<ApplyResult> {
        const keys = this.uniqueKeys(key);
        const effectiveRootIds = new Map<string, string | null>();

        const keysToImport = await this.resolveImportCandidates(doc, keys, effectiveRootIds);
        const preparedImports = await this.prepareDefaultImports(doc, keysToImport, effectiveRootIds, []);
        const edits = this.buildImportEdits(doc, preparedImports, []);

        return { edits, effectiveRootIds };
    }

    /**
     * Upgrades the local default of key version to the newest. 
     * Default of version will be deleted if not present, all associated id will be updated
     * and the newsted default / either already peresent or added will be set as effective. 
     * Returns the edits that would be applied and the effective rootIds for each key after application.
     * @param doc The XML document to which the upgrades will be applied.
     * @param key The keys and versions of the defaults to be upgraded.
     */
    async batchUpgrade(doc: XMLDocument, key: UpgradeInfo[]): Promise<ApplyResult> {
        const effectiveRootIds = new Map<string, string | null>();
        const uniqueUpgradeInfos = this.uniqueUpgradeInfos(key);

        const { cleanupEdits, releasedIds, excludedVersionsByKey } = this.prepareUpgradeCleanup(doc, uniqueUpgradeInfos);
        const keysToImport = await this.resolveImportCandidates(
            doc,
            uniqueUpgradeInfos.map(info => info.key),
            effectiveRootIds,
            excludedVersionsByKey,
        );

        const preparedImports = await this.prepareDefaultImports(doc, keysToImport, effectiveRootIds, releasedIds);
        const importEdits = this.buildImportEdits(doc, preparedImports, releasedIds);

        return {
            edits: [...cleanupEdits, ...importEdits],
            effectiveRootIds,
        };
    }

    /**
     * Gets the latest default type for a given key, using an internal cache.
     * If the cache is empty or stale, it will be refreshed from the service.
     * @param key The default type key (kind and instance)
     * @returns The latest default type if found, undefined otherwise
     */
    async getLatestDefaultInfo(key: DefaultTypeKey): Promise<DefaultType | undefined> {
        const cache = await this.getLatestDefaults();
        const cacheKey = this.getKeyString(key);
        return cache.get(cacheKey);
    }

    /**
     * Invalidates the internal cache of latest defaults.
     * Call this when defaults are uploaded or modified externally.
     */
    public invalidateLatestDefaultsCache(): void {
        this.latestDefaultsCache = null;
    }

    /**
     * Fetches and caches the latest defaults from the service.
     * Returns a map keyed by "kind:instance" for fast lookups.
     * Uses internal cache to avoid repeated service calls.
     * @returns Cached or freshly fetched map of latest defaults by key string.
     */
    public async getLatestDefaults(): Promise<Map<string, DefaultType>> {
        if (this.latestDefaultsCache) {
            return this.latestDefaultsCache;
        }

        const cache = new Map<string, DefaultType>();
        const list = await this.defaultTypeService.listLatest();
        
        if (list.content) {
            for (const defaultType of list.content) {
                const cacheKey = `${defaultType.kind}:${defaultType.instance}`;
                cache.set(cacheKey, defaultType);
            }
        }

        this.latestDefaultsCache = cache;
        return cache;
    }

    public async getDefaultInfo(doc: XMLDocument, key: DefaultTypeKey): Promise<DefaultStatus> {
        const latestDefault = await this.getLatestDefaultInfo(key);
        const latestLocal = this.metadataService.getLatestByKey(doc, key);

        if (!latestDefault && !latestLocal) {
            return {
                isAvailable: false,
                isLocalLatest: false,
            };
        }

        const isLocalLatest = latestLocal?.version === latestDefault?.version;

        return {
            isAvailable: !!latestDefault,
            isLocalLatest,
            latestVersion: latestDefault?.version,
        }
    }

    /**
     * Converts a DefaultTypeKey to its string representation for use as a map key.
     * Format: "kind:instance" (e.g., "DOType:Measurement").
     * @param key The default type key to convert.
     * @returns String representation keyed by kind and instance.
     */
    private getKeyString(key: DefaultTypeKey): string {
        return `${key.kind}:${key.instance}`;
    }

    /**
     * Deduplicates a list of DefaultTypeKeys by key string representation.
     * Preserves insertion order of unique keys.
     * @param keys Array of keys that may contain duplicates.
     * @returns Array of unique keys, preserving order of first occurrence.
     */
    private uniqueKeys(keys: DefaultTypeKey[]): DefaultTypeKey[] {
        const unique = new Map<string, DefaultTypeKey>();
        for (const key of keys) {
            unique.set(this.getKeyString(key), key);
        }
        return Array.from(unique.values());
    }

    /**
     * Deduplicates a list of UpgradeInfos by key+version combination.
     * Preserves insertion order of unique upgrade requests.
     * @param upgrades Array of upgrade requests that may contain duplicates.
     * @returns Array of unique upgrade infos, preserving order of first occurrence.
     */
    private uniqueUpgradeInfos(upgrades: UpgradeInfo[]): UpgradeInfo[] {
        const unique = new Map<string, UpgradeInfo>();
        for (const upgrade of upgrades) {
            unique.set(`${this.getKeyString(upgrade.key)}:${upgrade.version}`, upgrade);
        }
        return Array.from(unique.values());
    }

    /**
     * Determines which keys require importing the latest default.
     * Checks availability and compares against existing local metadata.
     * Populates effectiveRootIds for skipped keys (no import needed).
     * @param doc The XML document to check for existing metadata.
     * @param keys The keys to evaluate for import.
     * @param effectiveRootIds Output map to populate for keys that skip import.
     * @param excludedVersionsByKey Optional map of versions to exclude from latest-metadata lookup (used in upgrade flows).
     * @returns Array of keys that need importing (latest version not yet present locally).
     */
    private async resolveImportCandidates(
        doc: XMLDocument,
        keys: DefaultTypeKey[],
        effectiveRootIds: Map<string, string | null>,
        excludedVersionsByKey?: Map<string, Set<string>>,
    ): Promise<DefaultTypeKey[]> {
        const keysToImport: DefaultTypeKey[] = [];

        for (const key of keys) {
            const keyString = this.getKeyString(key);
            const latestDefault = await this.getLatestDefaultInfo(key);
            if (!latestDefault) {
                effectiveRootIds.set(keyString, null);
                continue;
            }

            const existingMetadata = this.getLatestMetadataByKeyExcluding(doc, key, excludedVersionsByKey?.get(keyString));
            if (existingMetadata && existingMetadata.version === latestDefault.version) {
                effectiveRootIds.set(keyString, existingMetadata.rootId);
                continue;
            }

            keysToImport.push(key);
        }

        return keysToImport;
    }

    /**
     * Retrieves the latest local metadata for a key, excluding specified versions.
     * Used in upgrade flows to skip over a version that is about to be deleted.
     * @param doc The XML document to query for metadata.
     * @param key The default type key to look up.
     * @param excludedVersions Optional set of versions to exclude from consideration.
     * @returns The latest metadata for the key (excluding excluded versions), or undefined if none available.
     */
    private getLatestMetadataByKeyExcluding(
        doc: XMLDocument,
        key: DefaultTypeKey,
        excludedVersions?: Set<string>,
    ): DefaultTypeMetadata | undefined {
        const allVersions = this.metadataService.getAllVersionsByKey(doc, key);
        if (!excludedVersions || excludedVersions.size === 0) {
            return allVersions[0];
        }

        return allVersions.find(metadata => !excludedVersions.has(metadata.version));
    }

    /**
     * Prepares defaults for import by resolving ID collisions and collecting metadata payloads.
     * For each key, fetches the latest default, extracts type elements, detects collisions,
     * and recomputes effective root IDs if renaming occurred.
     * Populates effectiveRootIds for all processed keys (including null for unavailable).
     * @param doc The XML document context for collision detection.
     * @param keysToImport The keys to fetch and prepare for import.
     * @param effectiveRootIds Output map to populate with final effective root IDs.
     * @param releasedIds IDs that are candidates for reuse (from upgrades); not treated as conflicts.
     * @returns Array of prepared imports ready for insertion and metadata addition.
     */
    private async prepareDefaultImports(
        doc: XMLDocument,
        keysToImport: DefaultTypeKey[],
        effectiveRootIds: Map<string, string | null>,
        releasedIds: string[],
    ): Promise<PreparedDefaultImport[]> {
        const reservedIds = this.collectReservedIds(doc, releasedIds);
        const defaults = await Promise.all(
            keysToImport.map(key => this.defaultTypeService.getLatestByKindAndInstance(key.kind, key.instance)),
        );

        const preparedImports: PreparedDefaultImport[] = [];
        for (let i = 0; i < keysToImport.length; i++) {
            const key = keysToImport[i];
            const keyString = this.getKeyString(key);
            const latestDefault = defaults[i];

            if (!latestDefault) {
                effectiveRootIds.set(keyString, null);
                continue;
            }

            const typeElements = listDataTypeElements(latestDefault.doc);
            const conflictScope = `${key.kind}-${key.instance}`;
            const { effectiveRootId } = this.resolveIdConflicts(typeElements, latestDefault.rootId, conflictScope, reservedIds);
            const typeElementIds = this.getTypeElementIds(typeElements);

            effectiveRootIds.set(keyString, effectiveRootId);
            preparedImports.push({
                key,
                id: latestDefault.id,
                version: latestDefault.version,
                rootId: effectiveRootId,
                typeElements,
                typeElementIds,
            });
        }

        return preparedImports;
    }

    /**
     * Assembles final insertion and metadata edits for imported defaults.
     * Ensures metadata container once upfront for all items in the batch, then inserts all
     * type elements in one batch via insertTypeElements (respects kind ordering),
     * and adds metadata entries for each imported default.
     * @param doc The XML document context for edit assembly.
     * @param preparedImports Array of prepared defaults to insert.
     * @param releasedIds IDs marked for reuse; passed to insertTypeElements for duplicate detection.
     * @returns Array of EditV2 operations (insertions + metadata additions) ready for dispatch.
     */
    private buildImportEdits(
        doc: XMLDocument,
        preparedImports: PreparedDefaultImport[],
        releasedIds: string[],
    ): EditV2[] {
        const edits: EditV2[] = [];
        const allTypeElements = preparedImports.flatMap(item => item.typeElements);

        // Ensure container once for all metadata additions in this batch
        let metadataContainer: Element | undefined;
        if (preparedImports.length > 0) {
            const { container, edits: containerEdits } = this.metadataService.ensureMetadataContainerWithEdits(doc);
            metadataContainer = container;
            edits.push(...containerEdits);
        }

        if (allTypeElements.length > 0) {
            edits.push(...insertTypeElements(doc, allTypeElements, releasedIds));
        }

        for (const importedDefault of preparedImports) {
            edits.push(...this.metadataService.add(doc, {
                id: importedDefault.id,
                key: importedDefault.key,
                version: importedDefault.version,
                rootId: importedDefault.rootId,
                subTypeIds: importedDefault.typeElementIds,
            }, metadataContainer));
        }

        return edits;
    }

    /**
     * Gathers all currently reserved (existing) type element IDs from the document,
     * then removes any IDs that are released (freed during upgrade cleanup).
     * Used to identify collision candidates when importing new defaults.
     * @param doc The XML document to scan for existing type element IDs.
     * @param releasedIds IDs that are being removed and available for reuse.
     * @returns Set of reserved IDs (existing minus released) that must not be reused without renaming.
     */
    private collectReservedIds(doc: XMLDocument, releasedIds: string[]): Set<string> {
        const reservedIds = new Set(
            listDataTypeElements(doc)
                .map(element => element.getAttribute("id"))
                .filter((id): id is string => !!id),
        );

        for (const releasedId of releasedIds) {
            reservedIds.delete(releasedId);
        }

        return reservedIds;
    }

    /**
     * Prepares cleanup edits for an upgrade batch: removes specified metadata versions
     * and their tracked type elements, then returns released IDs for collision-safe reuse.
     * Also returns excluded versions map to prevent deleted versions from being considered
     * as active during latest-metadata resolution.
     * @param doc The XML document to query and prepare for cleanup.
     * @param upgrades Array of upgrade requests (key + version to delete).
     * @returns UpgradePreparation with cleanup edits, released IDs, and excluded versions.
     */
    private prepareUpgradeCleanup(doc: XMLDocument, upgrades: UpgradeInfo[]): UpgradePreparation {
        const cleanupEdits: EditV2[] = [];
        const releasedIds = new Set<string>();
        const excludedVersionsByKey = new Map<string, Set<string>>();
        const removedNodes = new Set<Element>();

        for (const upgrade of upgrades) {
            const keyString = this.getKeyString(upgrade.key);
            const excludedVersions = excludedVersionsByKey.get(keyString) ?? new Set<string>();
            excludedVersions.add(upgrade.version);
            excludedVersionsByKey.set(keyString, excludedVersions);

            const metadata = this.metadataService
                .getAllVersionsByKey(doc, upgrade.key)
                .find(defaultType => defaultType.version === upgrade.version);
            if (!metadata) {
                continue;
            }

            cleanupEdits.push(...this.metadataService.delete(doc, upgrade.key, upgrade.version));

            for (const subTypeId of metadata.subTypeIds) {
                releasedIds.add(subTypeId);

                const elements = Array.from(doc.querySelectorAll(`DataTypeTemplates > [id="${CSS.escape(subTypeId)}"]`));
                for (const element of elements) {
                    if (removedNodes.has(element)) {
                        continue;
                    }

                    removedNodes.add(element);
                    cleanupEdits.push({ node: element } as RemoveV2);
                }
            }
        }

        return {
            cleanupEdits,
            releasedIds: Array.from(releasedIds),
            excludedVersionsByKey,
        };
    }

    /**
     * Detects and resolves ID collisions in imported type elements.
     * Renames conflicting elements in-place with a scoped suffix, rewrites internal type references,
     * and tracks the mapping for later use.
     * Updates the effectiveRootId if the root itself was renamed due to collision.
     * @param typeElements Array of imported type elements to scan and rename in-place.
     * @param rootId The root element ID of this default; may be renamed if in conflict.
     * @param conflictScope Scope string (kind-instance) for suffix generation to distinguish conflict sources.
     * @param reservedIds Mutable set of reserved IDs; updated with renamed IDs.
     * @returns Object with idMapping (old→new) and final effectiveRootId (may differ from input rootId).
     */
    private resolveIdConflicts(
        typeElements: Element[],
        rootId: string,
        conflictScope: string,
        reservedIds: Set<string>,
    ): { idMapping: Map<string, string>, effectiveRootId: string } {
        const idMapping = new Map<string, string>();
        let effectiveRootId = rootId;

        for (const element of typeElements) {
            const oldId = element.getAttribute("id");
            if (!oldId) {
                continue;
            }

            if (reservedIds.has(oldId)) {
                const newId = this.generateConflictId(oldId, conflictScope, reservedIds);
                element.setAttribute("id", newId);
                idMapping.set(oldId, newId);
                reservedIds.add(newId);

                if (oldId === rootId) {
                    effectiveRootId = newId;
                }
            } else {
                reservedIds.add(oldId);
            }
        }

        if (idMapping.size > 0) {
            this.rewriteImportedTypeReferences(typeElements, idMapping);
        }

        return { idMapping, effectiveRootId };
    }

    /**
     * Updates internal type references within imported elements after ID remapping.
     * Scans all child elements for `type` attributes matching old IDs and updates them
     * to the new remapped IDs.
     * @param typeElements Array of imported type elements to scan for type references.
     * @param idMapping Map of old ID → new ID for reference rewriting.
     */
    private rewriteImportedTypeReferences(
        typeElements: Element[],
        idMapping: Map<string, string>,
    ): void {
        for (const [oldId, newId] of idMapping.entries()) {
            const referencingElements = typeElements
                .flatMap(el => Array.from(el.children))
                .filter(el => el.getAttribute("type") === oldId);
            referencingElements.forEach(el => el.setAttribute("type", newId));
        }
    }

    /**
     * Generates a unique conflict-safe ID by appending a scoped suffix to the base ID.
     * Format: "baseId__imported-default-{scope}-{counter}" with counter incremented until unique.
     * Respects MAX_TYPE_ID_LENGTH constraint by trimming base if necessary.
     * @param baseId The original ID that conflicts with reserved IDs.
     * @param conflictScope Scope string (kind-instance) to distinguish conflict origins.
     * @param reservedIds Mutable set of reserved IDs; checked to ensure generated ID is unique.
     * @returns A unique ID safe for insertion without conflicts.
     */
    private generateConflictId(baseId: string, conflictScope: string, reservedIds: Set<string>): string {
        const normalizedScope = conflictScope
            .replace(/[^a-zA-Z0-9_-]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "")
            .toLowerCase() || "unknown";
        const shortScope = normalizedScope.slice(0, 16);
        let counter = 1;

        let candidate = "";
        do {
            const suffix = `__${IMPORTED_DEFAULT_SUFFIX}-${shortScope}-${counter}`;
            const maxBaseLength = Math.max(0, MAX_TYPE_ID_LENGTH - suffix.length);
            const trimmedBaseId = baseId.slice(0, maxBaseLength);
            candidate = `${trimmedBaseId}${suffix}`;
            counter++;
        } while (reservedIds.has(candidate));

        return candidate;
    }

    /**
     * Extracts the ID attribute from each type element.
     * Filters out elements without an ID attribute.
     * @param typeElements Array of type elements to extract IDs from.
     * @returns Array of non-empty ID strings from the provided elements.
     */
    private getTypeElementIds(typeElements: Element[]): string[] {
        return typeElements
            .map(element => element.getAttribute("id"))
            .filter((id): id is string => !!id);
    }
}