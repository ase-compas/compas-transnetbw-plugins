import { handleEditV2, type EditV2 } from '@oscd-transnet-plugins/oscd-event-api';
import { DefaultMetadataService, type DefaultTypeMetadata } from './default-metadata-service';

function parseScl(xml: string): XMLDocument {
    return new DOMParser().parseFromString(xml, 'application/xml');
}

function applyEdits(edits: EditV2[]): void {
    for (const edit of edits) {
        handleEditV2(edit);
    }
}

describe('DefaultMetadataService', () => {
    test('getLatestByKey returns newest version', () => {
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="LNodeType" instance="LLN0" rootId="root-1" version="1.0.0" id="db-1">
                        <compas:type-element id="root-1"/>
                    </compas:default-type>
                    <compas:default-type kind="LNodeType" instance="LLN0" rootId="root-2" version="2.0.0" id="db-2">
                        <compas:type-element id="root-2"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const service = new DefaultMetadataService();
        const latest = service.getLatestByKey(doc, { kind: 'LNodeType', instance: 'LLN0' });

        expect(latest?.version).toBe('2.0.0');
        expect(latest?.id).toBe('db-2');
    });

    test('getAllVersionsByKey returns versions newest first', () => {
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="Measurement" rootId="do-root-v1" version="1.0.0" id="do-db-1">
                        <compas:type-element id="do-root-v1"/>
                    </compas:default-type>
                    <compas:default-type kind="DOType" instance="Measurement" rootId="do-root-v3" version="3.0.0" id="do-db-3">
                        <compas:type-element id="do-root-v3"/>
                    </compas:default-type>
                    <compas:default-type kind="DOType" instance="Measurement" rootId="do-root-v2" version="2.0.0" id="do-db-2">
                        <compas:type-element id="do-root-v2"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const service = new DefaultMetadataService();
        const versions = service.getAllVersionsByKey(doc, { kind: 'DOType', instance: 'Measurement' });

        expect(versions.map((item) => item.version)).toEqual(['3.0.0', '2.0.0', '1.0.0']);
    });

    test('add creates Private container when missing and appends metadata', () => {
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
                <DataTypeTemplates/>
            </SCL>
        `);

        const metadata: DefaultTypeMetadata = {
            id: 'db-100',
            key: { kind: 'DAType', instance: 'SPS' },
            version: '1.0.0',
            rootId: 'da-root',
            subTypeIds: ['da-root', 'enum-1'],
        };

        const service = new DefaultMetadataService();
        const edits = service.add(doc, metadata);
        applyEdits(edits);

        const privateEl = doc.querySelector('SCL > Private[type="compas:default-type-info"]');
        expect(privateEl).not.toBeNull();
        expect(privateEl?.children).toHaveLength(1);

        const latest = service.getLatestByKey(doc, { kind: 'DAType', instance: 'SPS' });
        expect(latest).toEqual(metadata);
    });

    test('add skips duplicate key+version', () => {
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="LNodeType" instance="XCBR" rootId="root-1" version="1.0.0" id="db-1">
                        <compas:type-element id="root-1"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const service = new DefaultMetadataService();
        const duplicateEdits = service.add(doc, {
            id: 'db-1',
            key: { kind: 'LNodeType', instance: 'XCBR' },
            version: '1.0.0',
            rootId: 'root-1',
            subTypeIds: ['root-1'],
        });

        expect(duplicateEdits).toEqual([]);
    });

    test('delete removes only requested version', () => {
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="EnumType" instance="MyEnum" rootId="enum-v1" version="1.0.0" id="db-e1">
                        <compas:type-element id="enum-v1"/>
                    </compas:default-type>
                    <compas:default-type kind="EnumType" instance="MyEnum" rootId="enum-v2" version="2.0.0" id="db-e2">
                        <compas:type-element id="enum-v2"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const service = new DefaultMetadataService();
        const removeEdits = service.delete(doc, { kind: 'EnumType', instance: 'MyEnum' }, '1.0.0');
        applyEdits(removeEdits as EditV2[]);

        const versions = service.getAllVersionsByKey(doc, { kind: 'EnumType', instance: 'MyEnum' });
        expect(versions.map((item) => item.version)).toEqual(['2.0.0']);
    });

    test('deleteAllOfKey removes every version of a key', () => {
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
                <Private type="compas:default-type-info">
                    <compas:default-type kind="DOType" instance="MMXU" rootId="mmxu-v1" version="1.0.0" id="db-m1">
                        <compas:type-element id="mmxu-v1"/>
                    </compas:default-type>
                    <compas:default-type kind="DOType" instance="MMXU" rootId="mmxu-v2" version="2.0.0" id="db-m2">
                        <compas:type-element id="mmxu-v2"/>
                    </compas:default-type>
                    <compas:default-type kind="DOType" instance="CSWI" rootId="cswi-v1" version="1.0.0" id="db-c1">
                        <compas:type-element id="cswi-v1"/>
                    </compas:default-type>
                </Private>
            </SCL>
        `);

        const service = new DefaultMetadataService();
        const removeEdits = service.deleteAllOfKey(doc, { kind: 'DOType', instance: 'MMXU' });
        applyEdits(removeEdits as EditV2[]);

        const mmxuVersions = service.getAllVersionsByKey(doc, { kind: 'DOType', instance: 'MMXU' });
        const cswiVersions = service.getAllVersionsByKey(doc, { kind: 'DOType', instance: 'CSWI' });

        expect(mmxuVersions).toHaveLength(0);
        expect(cswiVersions).toHaveLength(1);
    });

    test('add with reused container creates only one Private element for multiple batch additions', () => {
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
                <DataTypeTemplates/>
            </SCL>
        `);

        const service = new DefaultMetadataService();

        // Ensure container once for the batch
        const { container, edits: containerEdits } = service.ensureMetadataContainerWithEdits(doc);
        const allEdits: EditV2[] = [...containerEdits];

        // Add multiple defaults reusing the same container
        const metadata1: DefaultTypeMetadata = {
            id: 'db-ens',
            key: { kind: 'DOType', instance: 'ENS' },
            version: '1.0.0',
            rootId: 'my-default-ens',
            subTypeIds: ['my-default-ens', 'ServiceNameKind-123'],
        };

        const metadata2: DefaultTypeMetadata = {
            id: 'db-org',
            key: { kind: 'DOType', instance: 'ORG' },
            version: '1.2.0',
            rootId: 'default-org-test',
            subTypeIds: ['default-org-test'],
        };

        allEdits.push(...service.add(doc, metadata1, container));
        allEdits.push(...service.add(doc, metadata2, container));

        applyEdits(allEdits);

        // Verify only one Private element exists
        const privateElements = doc.querySelectorAll('SCL > Private[type="compas:default-type-info"]');
        expect(privateElements).toHaveLength(1);

        // Verify both default-type elements are nested under the same Private
        const privateElement = privateElements[0];
        const defaultTypeElements = Array.from(privateElement.children).filter((child) => {
            const localName = (child.localName || child.tagName).toLowerCase();
            return localName === 'default-type';
        });
        expect(defaultTypeElements).toHaveLength(2);

        // Verify metadata is correctly stored
        const latestENS = service.getLatestByKey(doc, { kind: 'DOType', instance: 'ENS' });
        expect(latestENS?.id).toBe('db-ens');
        expect(latestENS?.version).toBe('1.0.0');

        const latestORG = service.getLatestByKey(doc, { kind: 'DOType', instance: 'ORG' });
        expect(latestORG?.id).toBe('db-org');
        expect(latestORG?.version).toBe('1.2.0');
    });

    test('add without explicit container still works (backward compatibility)', () => {
        const doc = parseScl(`
            <SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
                <DataTypeTemplates/>
            </SCL>
        `);

        const service = new DefaultMetadataService();

        // Add metadata without passing container (old behavior)
        const metadata: DefaultTypeMetadata = {
            id: 'db-single',
            key: { kind: 'LNodeType', instance: 'LLN0' },
            version: '1.0.0',
            rootId: 'lln0-root',
            subTypeIds: ['lln0-root'],
        };

        const edits = service.add(doc, metadata);
        applyEdits(edits);

        // Verify container was created and metadata added
        const privateElements = doc.querySelectorAll('SCL > Private[type="compas:default-type-info"]');
        expect(privateElements).toHaveLength(1);

        const latestMetadata = service.getLatestByKey(doc, metadata.key);
        expect(latestMetadata?.id).toBe('db-single');
    });
});
