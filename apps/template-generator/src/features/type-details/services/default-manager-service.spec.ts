import { handleEditV2, type EditV2 } from '@oscd-transnet-plugins/oscd-event-api';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import { DefaultManagerService, type UpgradeInfo } from './default-manager-service';
import { DefaultMetadataService } from './default-metadata-service';
import type { DefaultTypeService } from '../../default-types/service/default-type.service';
import type { DefaultType, DefaultTypeDetails, DefaultTypeList } from '../../default-types/types';
import { TypeKind } from '../../../shared/model';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseScl(xml: string): XMLDocument {
    return new DOMParser().parseFromString(xml, 'application/xml');
}

function applyEdits(edits: EditV2[]): void {
    for (const edit of edits) {
        handleEditV2(edit);
    }
}

/**
 * Builds a minimal SCL XMLDocument containing one or more DataTypeTemplates elements.
 * Used as DefaultTypeDetails.doc for mock responses.
 */
function buildDefaultDoc(rootId: string, subIds: string[] = []): XMLDocument {
    const allIds = [rootId, ...subIds];
    const elements = allIds.map(id => `<DOType id="${id}"/>`).join('\n        ');
    return parseScl(`
        <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
            <DataTypeTemplates>
                ${elements}
            </DataTypeTemplates>
        </SCL>
    `);
}

function makeDefaultType(overrides: Partial<DefaultType> = {}): DefaultType {
    return {
        id: 'db-1',
        kind: TypeKind.DOType,
        instance: 'Measurement',
        version: '1.0.0',
        dataCompatibilityVersion: '1.0.0',
        updatedAt: new Date('2024-01-01'),
        ...overrides,
    };
}

function makeDefaultTypeDetails(
    overrides: Partial<DefaultTypeDetails> = {},
    rootId = 'root-1',
    subIds: string[] = [],
): DefaultTypeDetails {
    return {
        ...makeDefaultType(overrides),
        rootId,
        doc: buildDefaultDoc(rootId, subIds),
        ...overrides,
    } as DefaultTypeDetails;
}

function makeDefaultTypeList(defaults: DefaultType[]): DefaultTypeList {
    return {
        content: defaults,
        totalElements: defaults.length,
        totalPages: 1,
        page: 0,
        size: defaults.length,
    };
}

function createMockDefaultTypeService(overrides: Partial<DefaultTypeService> = {}): DefaultTypeService {
    return {
        listLatest: vi.fn().mockResolvedValue(makeDefaultTypeList([])),
        getLatestByKindAndInstance: vi.fn().mockResolvedValue(null),
        ...overrides,
    } as unknown as DefaultTypeService;
}

// ---------------------------------------------------------------------------
// Test setup
// ---------------------------------------------------------------------------

const KEY = { kind: TypeKind.DOType, instance: 'Measurement' };
const KEY_STRING = 'DOType:Measurement';

let metadataService: DefaultMetadataService;
let mockDefaultTypeService: DefaultTypeService;
let service: DefaultManagerService;

beforeEach(() => {
    metadataService = new DefaultMetadataService();
    mockDefaultTypeService = createMockDefaultTypeService();
    service = new DefaultManagerService(metadataService, mockDefaultTypeService);
});

// ---------------------------------------------------------------------------
// getLatestDefaults / getLatestDefaultInfo / invalidateLatestDefaultsCache
// ---------------------------------------------------------------------------

describe('getLatestDefaults', () => {
    test('fetches from service on first call', async () => {
        const defaultType = makeDefaultType();
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(makeDefaultTypeList([defaultType]));
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const result = await service.getLatestDefaults();

        expect(result.size).toBe(1);
        expect(result.get(KEY_STRING)).toMatchObject({ version: '1.0.0' });
        expect(mockDefaultTypeService.listLatest).toHaveBeenCalledTimes(1);
    });

    test('returns cached result on subsequent calls', async () => {
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(makeDefaultTypeList([makeDefaultType()]));
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        await service.getLatestDefaults();
        await service.getLatestDefaults();

        expect(mockDefaultTypeService.listLatest).toHaveBeenCalledTimes(1);
    });

    test('re-fetches after invalidateLatestDefaultsCache', async () => {
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(makeDefaultTypeList([makeDefaultType()]));
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        await service.getLatestDefaults();
        service.invalidateLatestDefaultsCache();
        await service.getLatestDefaults();

        expect(mockDefaultTypeService.listLatest).toHaveBeenCalledTimes(2);
    });
});

describe('getLatestDefaultInfo', () => {
    test('returns the correct entry by kind:instance key', async () => {
        const lln0 = makeDefaultType({ kind: TypeKind.LNodeType, instance: 'LLN0', version: '2.0.0' });
        const measurement = makeDefaultType({ kind: TypeKind.DOType, instance: 'Measurement', version: '1.5.0' });
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(makeDefaultTypeList([lln0, measurement]));
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const result = await service.getLatestDefaultInfo(KEY);

        expect(result?.version).toBe('1.5.0');
        expect(result?.kind).toBe(TypeKind.DOType);
    });

    test('returns undefined for unknown key', async () => {
        const result = await service.getLatestDefaultInfo({ kind: TypeKind.EnumType, instance: 'Unknown' });
        expect(result).toBeUndefined();
    });
});

// ---------------------------------------------------------------------------
// getDefaultInfo
// ---------------------------------------------------------------------------

describe('getDefaultInfo', () => {
    test('returns not available and not local latest when no remote and no local', async () => {
        const doc = parseScl(`<SCL xmlns="http://www.iec.ch/61850/2003/SCL"/>`);

        const status = await service.getDefaultStatusByKey(doc, KEY);

        expect(status).toEqual({ isAvailable: false, isLocalLatest: false });
    });

    test('returns available and not local latest when remote exists but no local', async () => {
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: '2.0.0' })]),
        );
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);
        const doc = parseScl(`<SCL xmlns="http://www.iec.ch/61850/2003/SCL"/>`);

        const status = await service.getDefaultStatusByKey(doc, KEY);

        expect(status.isAvailable).toBe(true);
        expect(status.isLocalLatest).toBe(false);
        expect(status.latestVersion).toBe('2.0.0');
    });

    test('returns available and local latest when versions match', async () => {
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: '1.0.0' })]),
        );
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="Measurement" rootId="root-1" version="1.0.0" id="db-1">
                        <compas:type-element id="root-1"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const status = await service.getDefaultStatusByKey(doc, KEY);

        expect(status.isAvailable).toBe(true);
        expect(status.isLocalLatest).toBe(true);
    });

    test('returns not available and not local latest when only local exists', async () => {
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="Measurement" rootId="root-1" version="1.0.0" id="db-1">
                        <compas:type-element id="root-1"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const status = await service.getDefaultStatusByKey(doc, KEY);

        expect(status.isAvailable).toBe(false);
        expect(status.isLocalLatest).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// local default status helpers
// ---------------------------------------------------------------------------

describe('getLocalDefaultVersionStatusByTypeId', () => {
    test('returns current when local version equals latest', async () => {
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: '2.0.0' })]),
        );
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="Measurement" rootId="root-1" version="2.0.0" id="db-1">
                        <compas:type-element id="root-1"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const status = await service.getLocalDefaultVersionStatusByTypeId(doc, 'root-1');

        expect(status).toEqual({
            isCurrent: true,
            latestVersion: '2.0.0',
        });
    });

    test('returns outdated when local version differs from latest', async () => {
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: '3.0.0' })]),
        );
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="Measurement" rootId="root-1" version="2.0.0" id="db-1">
                        <compas:type-element id="root-1"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const status = await service.getLocalDefaultVersionStatusByTypeId(doc, 'root-1');

        expect(status).toEqual({
            isCurrent: false,
            latestVersion: '3.0.0',
        });
    });

    test('returns null when type has no local default metadata', async () => {
        const doc = parseScl(`<SCL xmlns="http://www.iec.ch/61850/2003/SCL"/>`);

        const status = await service.getLocalDefaultVersionStatusByTypeId(doc, 'missing-type');

        expect(status).toBeNull();
    });
});

describe('listLocalDefaultsWithStatus', () => {
    test('returns local defaults with current/outdated/unavailable status', async () => {
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([
                makeDefaultType({ version: '2.0.0' }),
                makeDefaultType({ kind: TypeKind.LNodeType, instance: 'LLN0', version: '1.1.0' }),
            ]),
        );
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="Measurement" rootId="root-current" version="2.0.0" id="db-current">
                        <compas:type-element id="root-current"/>
                    </compas:default-type>
                    <compas:default-type kind="LNodeType" instance="LLN0" rootId="root-old" version="1.0.0" id="db-old">
                        <compas:type-element id="root-old"/>
                    </compas:default-type>
                    <compas:default-type kind="EnumType" instance="NoRemote" rootId="root-none" version="1.0.0" id="db-none">
                        <compas:type-element id="root-none"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const result = await service.listLocalDefaultsWithStatus(doc);

        const byRootId = new Map(result.map(item => [item.metadata.rootId, item]));

        expect(byRootId.get('root-current')?.status).toBe('current');
        expect(byRootId.get('root-current')?.latestVersion).toBe('2.0.0');

        expect(byRootId.get('root-old')?.status).toBe('outdated');
        expect(byRootId.get('root-old')?.latestVersion).toBe('1.1.0');

        expect(byRootId.get('root-none')?.status).toBe('unavailable');
        expect(byRootId.get('root-none')?.latestVersion).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// batchApply
// ---------------------------------------------------------------------------

describe('batchApply', () => {
    test('returns empty edits and null effectiveRootId when default unavailable', async () => {
        const doc = parseScl(`<SCL xmlns="http://www.iec.ch/61850/2003/SCL"/>`);

        const { edits, effectiveRootIds } = await service.batchApply(doc, [KEY]);

        expect(edits).toHaveLength(0);
        expect(effectiveRootIds.get(KEY_STRING)).toBeNull();
    });

    test('imports type elements and metadata when default not yet in doc', async () => {
        const details = makeDefaultTypeDetails({ version: '1.0.0' }, 'root-1', ['sub-1']);
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: '1.0.0' })]),
        );
        mockDefaultTypeService.getLatestByKindAndInstance = vi.fn().mockResolvedValue(details);
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const doc = parseScl(`<SCL xmlns="http://www.iec.ch/61850/2003/SCL"/>`);
        const { edits, effectiveRootIds } = await service.batchApply(doc, [KEY]);
        applyEdits(edits);

        expect(edits.length).toBeGreaterThan(0);
        expect(effectiveRootIds.get(KEY_STRING)).toBe('root-1');

        // Type elements are inserted into the document
        const rootEl = doc.querySelector(`DataTypeTemplates > [id="root-1"]`);
        const subEl = doc.querySelector(`DataTypeTemplates > [id="sub-1"]`);
        expect(rootEl).not.toBeNull();
        expect(subEl).not.toBeNull();

        // Metadata is stored
        const metadata = metadataService.getLatestByKey(doc, KEY);
        expect(metadata?.rootId).toBe('root-1');
        expect(metadata?.version).toBe('1.0.0');
        expect(metadata?.subTypeIds).toContain('root-1');
        expect(metadata?.subTypeIds).toContain('sub-1');
    });

    test('skips import when latest version already present in doc', async () => {
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: '1.0.0' })]),
        );
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="Measurement" rootId="root-1" version="1.0.0" id="db-1">
                        <compas:type-element id="root-1"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const { edits, effectiveRootIds } = await service.batchApply(doc, [KEY]);

        expect(edits).toHaveLength(0);
        expect(effectiveRootIds.get(KEY_STRING)).toBe('root-1');
        expect(mockDefaultTypeService.getLatestByKindAndInstance).not.toHaveBeenCalled();
    });

    test('handles multiple keys in one call', async () => {
        const keyLLN0 = { kind: TypeKind.LNodeType, instance: 'LLN0' };
        const detailsMeasurement = makeDefaultTypeDetails({ version: '1.0.0' }, 'root-m');
        const detailsLLN0 = makeDefaultTypeDetails(
            { kind: TypeKind.LNodeType, instance: 'LLN0', version: '1.0.0' },
            'root-lln0',
        );

        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([
                makeDefaultType({ version: '1.0.0' }),
                makeDefaultType({ kind: TypeKind.LNodeType, instance: 'LLN0', version: '1.0.0' }),
            ]),
        );
        mockDefaultTypeService.getLatestByKindAndInstance = vi.fn()
            .mockImplementation((kind: TypeKind, instance: string) => {
                if (kind === TypeKind.DOType) return Promise.resolve(detailsMeasurement);
                if (kind === TypeKind.LNodeType) return Promise.resolve(detailsLLN0);
                return Promise.resolve(null);
            });
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const doc = parseScl(`<SCL xmlns="http://www.iec.ch/61850/2003/SCL"/>`);
        const { edits, effectiveRootIds } = await service.batchApply(doc, [KEY, keyLLN0]);
        applyEdits(edits);

        expect(effectiveRootIds.get('DOType:Measurement')).toBe('root-m');
        expect(effectiveRootIds.get('LNodeType:LLN0')).toBe('root-lln0');
    });

    test('deduplicates keys — processes each key only once', async () => {
        const details = makeDefaultTypeDetails({ version: '1.0.0' }, 'root-1');
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: '1.0.0' })]),
        );
        mockDefaultTypeService.getLatestByKindAndInstance = vi.fn().mockResolvedValue(details);
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const doc = parseScl(`<SCL xmlns="http://www.iec.ch/61850/2003/SCL"/>`);
        await service.batchApply(doc, [KEY, KEY, KEY]);

        expect(mockDefaultTypeService.getLatestByKindAndInstance).toHaveBeenCalledTimes(1);
    });

    test('renames conflicting ID and updates effectiveRootId', async () => {
        // doc already has an element with the same id as the incoming root
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
                <DataTypeTemplates>
                    <DOType id="root-1"/>
                </DataTypeTemplates>
            </SCL>
        `);

        const details = makeDefaultTypeDetails({ version: '1.0.0' }, 'root-1');
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: '1.0.0' })]),
        );
        mockDefaultTypeService.getLatestByKindAndInstance = vi.fn().mockResolvedValue(details);
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const { edits, effectiveRootIds } = await service.batchApply(doc, [KEY]);
        applyEdits(edits);

        const rootId = effectiveRootIds.get(KEY_STRING);
        expect(rootId).not.toBe('root-1');
        expect(rootId).toContain('root-1');

        // New element exists with renamed ID, original is unchanged
        const renamed = doc.querySelector(`DataTypeTemplates > [id="${rootId}"]`);
        expect(renamed).not.toBeNull();
    });

    test('rewrites internal type references after collision rename', async () => {
        // child-1 has a type reference to root-1 which will be renamed
        const importDoc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
                <DataTypeTemplates>
                    <LNodeType id="root-1"/>
                    <DOType id="child-1">
                        <DA type="root-1"/>
                    </DOType>
                </DataTypeTemplates>
            </SCL>
        `);
        const details: DefaultTypeDetails = {
            ...makeDefaultType({ kind: TypeKind.LNodeType, instance: 'LLN0', version: '1.0.0' }),
            rootId: 'root-1',
            doc: importDoc,
        };

        const conflictDoc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
                <DataTypeTemplates>
                    <LNodeType id="root-1"/>
                </DataTypeTemplates>
            </SCL>
        `);

        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ kind: TypeKind.LNodeType, instance: 'LLN0', version: '1.0.0' })]),
        );
        mockDefaultTypeService.getLatestByKindAndInstance = vi.fn().mockResolvedValue(details);
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const { edits, effectiveRootIds } = await service.batchApply(conflictDoc, [
            { kind: TypeKind.LNodeType, instance: 'LLN0' },
        ]);
        applyEdits(edits);

        const renamedRootId = effectiveRootIds.get('LNodeType:LLN0');
        // The child's type reference should be updated to the new root ID
        const child = conflictDoc.querySelector(`DataTypeTemplates > [id="child-1"]`);
        const daRef = child?.querySelector('DA')?.getAttribute('type');
        expect(daRef).toBe(renamedRootId);
    });
});

// ---------------------------------------------------------------------------
// batchUpgrade
// ---------------------------------------------------------------------------

describe('batchUpgrade', () => {
    const OLD_VERSION = '1.0.0';
    const NEW_VERSION = '2.0.0';

    function docWithOldVersion(): XMLDocument {
        return parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <DataTypeTemplates>
                    <DOType id="root-old"/>
                    <DOType id="sub-old"/>
                </DataTypeTemplates>
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="Measurement" rootId="root-old" version="${OLD_VERSION}" id="db-old">
                        <compas:type-element id="root-old"/>
                        <compas:type-element id="sub-old"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);
    }

    function setupNewVersionMock(): void {
        const details = makeDefaultTypeDetails({ version: NEW_VERSION }, 'root-new', ['sub-new']);
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: NEW_VERSION })]),
        );
        mockDefaultTypeService.getLatestByKindAndInstance = vi.fn().mockResolvedValue(details);
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);
    }

    test('cleanup edits remove old version type elements and metadata', async () => {
        setupNewVersionMock();
        const doc = docWithOldVersion();
        const upgradeInfo: UpgradeInfo = { key: KEY, version: OLD_VERSION };

        const { edits } = await service.batchUpgrade(doc, [upgradeInfo]);
        applyEdits(edits);

        expect(doc.querySelector(`DataTypeTemplates > [id="root-old"]`)).toBeNull();
        expect(doc.querySelector(`DataTypeTemplates > [id="sub-old"]`)).toBeNull();
        expect(metadataService.getAllVersionsByKey(doc, KEY).find(m => m.version === OLD_VERSION)).toBeUndefined();
    });

    test('imports new version after cleanup', async () => {
        setupNewVersionMock();
        const doc = docWithOldVersion();
        const upgradeInfo: UpgradeInfo = { key: KEY, version: OLD_VERSION };

        const { edits, effectiveRootIds } = await service.batchUpgrade(doc, [upgradeInfo]);
        applyEdits(edits);

        expect(doc.querySelector(`DataTypeTemplates > [id="root-new"]`)).not.toBeNull();
        expect(doc.querySelector(`DataTypeTemplates > [id="sub-new"]`)).not.toBeNull();
        expect(effectiveRootIds.get(KEY_STRING)).toBe('root-new');

        const metadata = metadataService.getLatestByKey(doc, KEY);
        expect(metadata?.version).toBe(NEW_VERSION);
        expect(metadata?.rootId).toBe('root-new');
    });

    test('skips import if newest version already present after cleanup', async () => {
        // doc has both old and new version; upgrading old → should keep new, no new import
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <DataTypeTemplates>
                    <DOType id="root-old"/>
                    <DOType id="root-new"/>
                </DataTypeTemplates>
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="Measurement" rootId="root-old" version="${OLD_VERSION}" id="db-old">
                        <compas:type-element id="root-old"/>
                    </compas:default-type>
                    <compas:default-type kind="DOType" instance="Measurement" rootId="root-new" version="${NEW_VERSION}" id="db-new">
                        <compas:type-element id="root-new"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: NEW_VERSION })]),
        );
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const { edits, effectiveRootIds } = await service.batchUpgrade(doc, [
            { key: KEY, version: OLD_VERSION },
        ]);
        applyEdits(edits);

        expect(mockDefaultTypeService.getLatestByKindAndInstance).not.toHaveBeenCalled();
        expect(effectiveRootIds.get(KEY_STRING)).toBe('root-new');
    });

    test('released IDs are reused — no collision suffix when same IDs are re-imported', async () => {
        // Old and new version use the same element ID; after cleanup the ID is free for reuse
        const details = makeDefaultTypeDetails({ version: NEW_VERSION }, 'root-old', ['sub-old']);
        mockDefaultTypeService.listLatest = vi.fn().mockResolvedValue(
            makeDefaultTypeList([makeDefaultType({ version: NEW_VERSION })]),
        );
        mockDefaultTypeService.getLatestByKindAndInstance = vi.fn().mockResolvedValue(details);
        service = new DefaultManagerService(metadataService, mockDefaultTypeService);

        const doc = docWithOldVersion();
        const { edits, effectiveRootIds } = await service.batchUpgrade(doc, [
            { key: KEY, version: OLD_VERSION },
        ]);
        applyEdits(edits);

        // Root ID should be reused without a collision suffix
        expect(effectiveRootIds.get(KEY_STRING)).toBe('root-old');
        expect(doc.querySelector(`DataTypeTemplates > [id="root-old"]`)).not.toBeNull();
    });

    test('deduplicates identical upgrade infos', async () => {
        setupNewVersionMock();
        const doc = docWithOldVersion();
        const upgradeInfo: UpgradeInfo = { key: KEY, version: OLD_VERSION };

        await service.batchUpgrade(doc, [upgradeInfo, upgradeInfo]);

        // getLatestByKindAndInstance called at most once (deduplication)
        expect(mockDefaultTypeService.getLatestByKindAndInstance).toHaveBeenCalledTimes(1);
    });

    test('effectiveRootIds reflects new version rootId after upgrade', async () => {
        setupNewVersionMock();
        const doc = docWithOldVersion();

        const { effectiveRootIds } = await service.batchUpgrade(doc, [
            { key: KEY, version: OLD_VERSION },
        ]);

        expect(effectiveRootIds.get(KEY_STRING)).toBe('root-new');
    });
});
