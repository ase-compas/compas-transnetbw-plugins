
import { DefaultTypeManagerService } from './default-type-manager-service';
import type { DefaultTypeService } from '../../default-types/service/default-type.service';
import type { DefaultTypeDetails } from '../../default-types/types';

function parseScl(xml: string): XMLDocument {
	return new DOMParser().parseFromString(xml, 'application/xml');
}

function createMockDefaultTypeService(overrides?: Partial<DefaultTypeService>): DefaultTypeService {
	return {
		getLatestByKindAndInstance: vi.fn(),
		...overrides,
	} as unknown as DefaultTypeService;
}

describe('DefaultTypeManagerService', () => {
	test('parses compas namespaced default-type/type-element structure from Private section', () => {
		const doc = parseScl(`
			<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
				<Private type="compas:default-type-info">
					<compas:default-type kind="LNodeType" instance="LLN0" rootId="my-default-lln0" version="1.0.0" id="db-id">
						<compas:type-element id="type-id"/>
					</compas:default-type>
				</Private>
			</SCL>
		`);

		const service = new DefaultTypeManagerService(doc, {} as never);

		const result = service.getLocalDefault({ kind: 'LNodeType', instance: 'LLN0' });

		expect(result).toEqual({
			kind: 'LNodeType',
			instance: 'LLN0',
			resourceId: 'db-id',
			rootId: 'my-default-lln0',
			version: '1.0.0',
			typeElementIds: ['type-id'],
		});
	});

	test('getDefaultInfoByTypeId returns default info when a default-type contains matching type-element id', () => {
		const doc = parseScl(`
			<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
				<Private type="compas:default-type-info">
					<compas:default-type kind="LNodeType" instance="LLN0" rootId="root-1" version="1.2.3" id="db-id-1">
						<compas:type-element id="type-a"/>
					</compas:default-type>
					<compas:default-type kind="LNodeType" instance="XCBR" rootId="root-2" version="2.0.0" id="db-id-2">
						<compas:type-element id="type-target"/>
					</compas:default-type>
				</Private>
			</SCL>
		`);

		const service = new DefaultTypeManagerService(doc, {} as never);
		const result = service.getDefaultInfoByTypeId('type-target');

		expect(result).toEqual({
			kind: 'LNodeType',
			instance: 'XCBR',
			resourceId: 'db-id-2',
			rootId: 'root-2',
			version: '2.0.0',
			typeElementIds: ['type-target'],
		});
	});

	describe('resolve', () => {
		test('ADD_DB_DEFAULT: no local default, db default exists', async () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B"/>
			`);

			const dbDefaultDoc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<LNodeType id="type-1"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const dbDefault: DefaultTypeDetails = {
				id: 'db-1',
				kind: 'LNodeType',
				instance: 'LLN0',
				version: '1.0.0',
				dataCompatibilityVersion: '1.0.0',
				rootId: 'root-1',
				updatedAt: new Date(),
				doc: dbDefaultDoc,
			};

			const mockService = createMockDefaultTypeService({
				getLatestByKindAndInstance: vi.fn().mockResolvedValue(dbDefault),
			});

			const service = new DefaultTypeManagerService(doc, mockService);
			const result = await service.resolve({ kind: 'LNodeType', instance: 'LLN0' });

			expect(result.key).toEqual({ kind: 'LNodeType', instance: 'LLN0' });
			expect(result.scenario).toBe('ADD_DB_DEFAULT');
			expect(result.effectiveRootId).toBe('root-1');
			expect(result.localBefore).toBeNull();
			expect(result.dbBefore).toBe(dbDefault);
			expect(result.typeElementsToImport).toHaveLength(1);
			expect(result.typeElementsToImport[0].getAttribute('id')).toBe('type-1');
		});

		test('USE_LOCAL_DEFAULT: both exist with same version', async () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="LNodeType" instance="LLN0" rootId="local-root" version="1.0.0" id="local-id">
							<compas:type-element id="type-id"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const dbDefaultDoc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<LNodeType id="type-1"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const dbDefault: DefaultTypeDetails = {
				id: 'db-1',
				kind: 'LNodeType',
				instance: 'LLN0',
				version: '1.0.0',
				dataCompatibilityVersion: '1.0.0',
				rootId: 'db-root',
				updatedAt: new Date(),
				doc: dbDefaultDoc,
			};

			const mockService = createMockDefaultTypeService({
				getLatestByKindAndInstance: vi.fn().mockResolvedValue(dbDefault),
			});

			const service = new DefaultTypeManagerService(doc, mockService);
			const result = await service.resolve({ kind: 'LNodeType', instance: 'LLN0' });

			expect(result).toEqual({
				key: { kind: 'LNodeType', instance: 'LLN0' },
				scenario: 'USE_LOCAL_DEFAULT',
				effectiveRootId: 'local-root',
				localBefore: expect.objectContaining({
					kind: 'LNodeType',
					instance: 'LLN0',
					rootId: 'local-root',
					version: '1.0.0',
				}),
				dbBefore: dbDefault,
				typeElementsToImport: [],
			});
		});

		test('UPGRADE_TO_DB_DEFAULT: both exist, db version is newer', async () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="LNodeType" instance="LLN0" rootId="local-root" version="1.0.0" id="local-id">
							<compas:type-element id="type-id"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const dbDefaultDoc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<LNodeType id="type-db-1"/>
						<DOType id="type-db-2"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const dbDefault: DefaultTypeDetails = {
				id: 'db-1',
				kind: 'LNodeType',
				instance: 'LLN0',
				version: '2.0.0',
				dataCompatibilityVersion: '1.0.0',
				rootId: 'db-root',
				updatedAt: new Date(),
				doc: dbDefaultDoc,
			};

			const mockService = createMockDefaultTypeService({
				getLatestByKindAndInstance: vi.fn().mockResolvedValue(dbDefault),
			});

			const service = new DefaultTypeManagerService(doc, mockService);
			const result = await service.resolve({ kind: 'LNodeType', instance: 'LLN0' });

			expect(result.scenario).toBe('UPGRADE_TO_DB_DEFAULT');
			expect(result.effectiveRootId).toBe('db-root');
			expect(result.dbBefore).toBe(dbDefault);
			expect(result.typeElementsToImport).toHaveLength(2);
			expect(result.typeElementsToImport[0].getAttribute('id')).toBe('type-db-1');
			expect(result.typeElementsToImport[1].getAttribute('id')).toBe('type-db-2');
		});

		test('REMOVE_LOCAL_DEFAULT: local exists, db does not', async () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="LNodeType" instance="LLN0" rootId="local-root" version="1.0.0" id="local-id">
							<compas:type-element id="type-id"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const mockService = createMockDefaultTypeService({
				getLatestByKindAndInstance: vi.fn().mockResolvedValue(null),
			});

			const service = new DefaultTypeManagerService(doc, mockService);
			const result = await service.resolve({ kind: 'LNodeType', instance: 'LLN0' });

			expect(result).toEqual({
				key: { kind: 'LNodeType', instance: 'LLN0' },
				scenario: 'REMOVE_LOCAL_DEFAULT',
				effectiveRootId: null,
				localBefore: expect.objectContaining({
					kind: 'LNodeType',
					instance: 'LLN0',
					rootId: 'local-root',
					version: '1.0.0',
				}),
				dbBefore: null,
				typeElementsToImport: [],
			});
		});

		test('REMOVE_LOCAL_DEFAULT: neither local nor db exists', async () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B"/>
			`);

			const mockService = createMockDefaultTypeService({
				getLatestByKindAndInstance: vi.fn().mockResolvedValue(null),
			});

			const service = new DefaultTypeManagerService(doc, mockService);
			const result = await service.resolve({ kind: 'LNodeType', instance: 'LLN0' });

			expect(result).toEqual({
				key: { kind: 'LNodeType', instance: 'LLN0' },
				scenario: 'REMOVE_LOCAL_DEFAULT',
				effectiveRootId: null,
				localBefore: null,
				dbBefore: null,
				typeElementsToImport: [],
			});
		});
	});
});