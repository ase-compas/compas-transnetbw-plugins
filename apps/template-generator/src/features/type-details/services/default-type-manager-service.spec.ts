
import { DefaultTypeManagerService } from './default-type-manager-service';
import type { DefaultTypeService } from '../../default-types/service/default-type.service';
import type { DefaultTypeDetails } from '../../default-types/types';
import { handleEditV2, type EditV2 } from '@oscd-transnet-plugins/oscd-event-api';

function parseScl(xml: string): XMLDocument {
	return new DOMParser().parseFromString(xml, 'application/xml');
}

function createMockDefaultTypeService(overrides?: Partial<DefaultTypeService>): DefaultTypeService {
	return {
		getLatestByKindAndInstance: vi.fn(),
		...overrides,
	} as unknown as DefaultTypeService;
}

function applyEdits(edits: EditV2[]): void {
	for (const edit of edits) {
		handleEditV2(edit);
	}
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
				scenario: 'USE_LOCAL_DEFAULT',
				effectiveRootId: 'local-root',
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

	describe('applyPlans', () => {
		test('ADD_DB_DEFAULT: imports type elements and adds Private metadata entry', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<LNodeType id="existing-ln"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const dbDefaultDoc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="db-root" cdc="SPS"/>
						<DAType id="db-member" bType="INT16"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const dbDefault: DefaultTypeDetails = {
				id: 'db-v1',
				kind: 'DOType',
				instance: 'Measurement',
				version: '1.0.0',
				dataCompatibilityVersion: '1.0.0',
				rootId: 'db-root',
				updatedAt: new Date(),
				doc: dbDefaultDoc,
			};

			const service = new DefaultTypeManagerService(doc, {} as never);
			const plan = {
				key: { kind: 'DOType', instance: 'Measurement' },
				scenario: 'ADD_DB_DEFAULT' as const,
				effectiveRootId: 'db-root',
				localBefore: null,
				dbBefore: dbDefault,
				typeElementsToImport: Array.from(dbDefaultDoc.querySelectorAll('DataTypeTemplates > *[id]')),
			};

			const { edits, effectiveRootIds } = service.applyPlans([plan]);

			expect(effectiveRootIds.get('DOType:Measurement')).toBe('db-root');
			expect(edits.length).toBeGreaterThan(0);

			applyEdits(edits);

			expect(doc.getElementById('db-root')).not.toBeNull();
			expect(doc.getElementById('db-member')).not.toBeNull();

			const privateEl = doc.querySelector('SCL > Private[type="compas:default-type-info"]');
			expect(privateEl).not.toBeNull();

			const defaultTypeEl = Array.from(privateEl?.children ?? []).find((child) => {
				const localName = (child.localName || child.tagName).toLowerCase();
				return localName === 'default-type' && child.getAttribute('instance') === 'Measurement';
			});

			expect(defaultTypeEl).not.toBeUndefined();
			expect(defaultTypeEl?.getAttribute('kind')).toBe('DOType');
			expect(defaultTypeEl?.getAttribute('rootId')).toBe('db-root');
			expect(defaultTypeEl?.getAttribute('version')).toBe('1.0.0');

			const trackedTypeIds = Array.from(defaultTypeEl?.children ?? [])
				.filter((child) => {
					const localName = (child.localName || child.tagName).toLowerCase();
					return localName === 'type-element';
				})
				.map((child) => child.getAttribute('id'));

			expect(trackedTypeIds).toEqual(['db-root', 'db-member']);
		});

		test('USE_LOCAL_DEFAULT: returns local root mapping and no edits', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="local-root" version="1.0.0" id="local-v1">
							<compas:type-element id="local-root"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="local-root" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const detachedElement = doc.createElement('DOType');
			detachedElement.setAttribute('id', 'must-not-be-imported');

			const { edits, effectiveRootIds } = service.applyPlans([
				{
					key: { kind: 'DOType', instance: 'Measurement' },
					scenario: 'USE_LOCAL_DEFAULT',
					effectiveRootId: 'local-root',
					localBefore: {
						kind: 'DOType',
						instance: 'Measurement',
						resourceId: 'local-v1',
						rootId: 'local-root',
						version: '1.0.0',
						typeElementIds: ['local-root'],
					},
					dbBefore: null,
					typeElementsToImport: [detachedElement],
				},
			]);

			expect(edits).toEqual([]);
			expect(effectiveRootIds.get('DOType:Measurement')).toBe('local-root');
			expect(doc.getElementById('must-not-be-imported')).toBeNull();
		});

		test('UPGRADE_TO_DB_DEFAULT: imports db elements and appends new metadata version', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="old-root" version="1.0.0" id="local-v1">
							<compas:type-element id="old-root"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="old-root" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const dbDefaultDoc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="db-root" cdc="SPS"/>
						<DAType id="db-member" bType="INT16"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const dbDefault: DefaultTypeDetails = {
				id: 'db-v2',
				kind: 'DOType',
				instance: 'Measurement',
				version: '2.0.0',
				dataCompatibilityVersion: '1.0.0',
				rootId: 'db-root',
				updatedAt: new Date(),
				doc: dbDefaultDoc,
			};

			const service = new DefaultTypeManagerService(doc, {} as never);
			const { edits, effectiveRootIds } = service.applyPlans([
				{
					key: { kind: 'DOType', instance: 'Measurement' },
					scenario: 'UPGRADE_TO_DB_DEFAULT',
					effectiveRootId: 'db-root',
					localBefore: {
						kind: 'DOType',
						instance: 'Measurement',
						resourceId: 'local-v1',
						rootId: 'old-root',
						version: '1.0.0',
						typeElementIds: ['old-root'],
					},
					dbBefore: dbDefault,
					typeElementsToImport: Array.from(dbDefaultDoc.querySelectorAll('DataTypeTemplates > *[id]')),
				},
			]);

			expect(effectiveRootIds.get('DOType:Measurement')).toBe('db-root');

			applyEdits(edits);

			expect(doc.getElementById('db-root')).not.toBeNull();
			expect(doc.getElementById('db-member')).not.toBeNull();

			const privateEl = doc.querySelector('SCL > Private[type="compas:default-type-info"]');
			const defaultTypeEls = Array.from(privateEl?.children ?? []).filter((child) => {
				const localName = (child.localName || child.tagName).toLowerCase();
				return localName === 'default-type' && child.getAttribute('instance') === 'Measurement';
			});

			expect(defaultTypeEls).toHaveLength(2);
			expect(defaultTypeEls.some((el) => el.getAttribute('version') === '1.0.0')).toBe(true);
			expect(defaultTypeEls.some((el) => el.getAttribute('version') === '2.0.0')).toBe(true);
		});

		test('REMOVE_LOCAL_DEFAULT: removes matching local metadata and returns null effective root', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-a" version="1.0.0" id="db-1">
							<compas:type-element id="root-a"/>
						</compas:default-type>
						<compas:default-type kind="LNodeType" instance="LLN0" rootId="root-b" version="1.0.0" id="db-2">
							<compas:type-element id="root-b"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const { edits, effectiveRootIds } = service.applyPlans([
				{
					key: { kind: 'DOType', instance: 'Measurement' },
					scenario: 'REMOVE_LOCAL_DEFAULT',
					effectiveRootId: null,
					localBefore: {
						kind: 'DOType',
						instance: 'Measurement',
						resourceId: 'db-1',
						rootId: 'root-a',
						version: '1.0.0',
						typeElementIds: ['root-a'],
					},
					dbBefore: null,
					typeElementsToImport: [],
				},
			]);

			expect(effectiveRootIds.get('DOType:Measurement')).toBeNull();
			expect(edits).toHaveLength(1);

			applyEdits(edits);

			const privateEl = doc.querySelector('SCL > Private[type="compas:default-type-info"]');
			const defaultTypeEls = Array.from(privateEl?.children ?? []).filter((child) => {
				const localName = (child.localName || child.tagName).toLowerCase();
				return localName === 'default-type';
			});

			expect(defaultTypeEls).toHaveLength(1);
			expect(defaultTypeEls[0].getAttribute('instance')).toBe('LLN0');
		});
	});

	describe('buildUpdateToLatestEditsByTypeId', () => {
		test('imports newer DB default, replaces references, and removes old default metadata/type elements when edits are applied', async () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="old-root" version="1.0.0" id="local-v1">
							<compas:type-element id="old-root"/>
							<compas:type-element id="old-member"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="old-root" cdc="SPS"/>
						<DAType id="old-member" bType="INT32"/>
						<LNodeType id="consumer-ln" lnClass="LLN0">
							<DO name="stVal" type="old-root"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			const dbDefaultDoc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="db-root" cdc="SPS"/>
						<DAType id="db-member" bType="INT16"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const dbDefault: DefaultTypeDetails = {
				id: 'db-v2',
				kind: 'DOType',
				instance: 'Measurement',
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
			const { edits, newRootId } = await service.buildUpdateToLatestEditsByTypeId('old-root');

			expect(edits.length).toBeGreaterThan(0);
			expect(newRootId).toBe('db-root');

			applyEdits(edits);

			expect(doc.getElementById('old-root')).toBeNull();
			expect(doc.getElementById('old-member')).toBeNull();
			expect(doc.getElementById('db-root')).not.toBeNull();
			expect(doc.getElementById('db-member')).not.toBeNull();

			const updatedReference = doc.querySelector('LNodeType[id="consumer-ln"] > DO[name="stVal"]');
			expect(updatedReference?.getAttribute('type')).toBe('db-root');

			const defaultTypeInfo = doc.querySelector('SCL > Private[type="compas:default-type-info"]');
			const defaultTypeElements = Array.from(defaultTypeInfo?.children ?? []).filter((child) => {
				const localName = (child.localName || child.tagName).toLowerCase();
				return localName === 'default-type';
			});
			const defaultTypeV1 = defaultTypeElements.find((el) => el.getAttribute('version') === '1.0.0');
			const defaultTypeV2 = defaultTypeElements.find((el) => el.getAttribute('version') === '2.0.0');

			expect(defaultTypeV1).toBeUndefined();
			expect(defaultTypeV2).not.toBeNull();
			expect(defaultTypeV2?.getAttribute('rootId')).toBe('db-root');
		});

		test('returns no edits when local default is already latest', async () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="local-root" version="1.0.0" id="local-v1">
							<compas:type-element id="local-root"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="local-root" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const mockService = createMockDefaultTypeService({
				getLatestByKindAndInstance: vi.fn().mockResolvedValue(null),
			});

			const service = new DefaultTypeManagerService(doc, mockService);
			const { edits, newRootId } = await service.buildUpdateToLatestEditsByTypeId('local-root');

			expect(edits).toEqual([]);
			expect(newRootId).toBeNull();
		});
	});

	describe('buildRenameTypeIdEdits', () => {
		test('returns empty array when id is not tracked in metadata', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="tracked-root" version="1.0.0" id="db-1">
							<compas:type-element id="tracked-root"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const edits = service.buildRenameTypeIdEdits('unknown-id', 'new-id');

			expect(edits).toEqual([]);
		});

		test('returns empty array when Private section does not exist', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B"/>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const edits = service.buildRenameTypeIdEdits('any-id', 'new-id');

			expect(edits).toEqual([]);
		});

		test('updates type-element id when id is a non-root tracked member', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-id" version="1.0.0" id="db-1">
							<compas:type-element id="root-id"/>
							<compas:type-element id="member-id"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const edits = service.buildRenameTypeIdEdits('member-id', 'member-id-new');

			// Only the type-element id edit, no rootId update
			expect(edits).toHaveLength(1);
			const typeElementEdit = edits[0];
			expect(typeElementEdit.attributes).toEqual({ id: 'member-id-new' });
			expect((typeElementEdit.element as Element).getAttribute('id')).toBe('member-id');
		});

		test('updates type-element id and rootId when id matches the rootId', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-id" version="1.0.0" id="db-1">
							<compas:type-element id="root-id"/>
							<compas:type-element id="member-id"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const edits = service.buildRenameTypeIdEdits('root-id', 'root-id-new');

			// type-element id edit + rootId attribute edit
			expect(edits).toHaveLength(2);
			const typeElementEdit = edits.find((e) => (e.element as Element).getAttribute('id') === 'root-id');
			expect(typeElementEdit?.attributes).toEqual({ id: 'root-id-new' });

			const defaultTypeEdit = edits.find((e) => (e.element as Element).getAttribute('rootId') === 'root-id');
			expect(defaultTypeEdit?.attributes).toEqual({ rootId: 'root-id-new' });
		});

		test('applies edits and reflects changes in the document', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-id" version="1.0.0" id="db-1">
							<compas:type-element id="root-id"/>
							<compas:type-element id="member-id"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const edits = service.buildRenameTypeIdEdits('root-id', 'root-id-new');

			applyEdits(edits);

			const defaultTypeEl = doc.querySelector('SCL > Private[type="compas:default-type-info"] > *');
			expect(defaultTypeEl?.getAttribute('rootId')).toBe('root-id-new');

			const typeElements = Array.from(defaultTypeEl?.children ?? []);
			const renamedTypeEl = typeElements.find((el) => {
				const localName = (el.localName || el.tagName).toLowerCase();
				return localName === 'type-element';
			});
			expect(renamedTypeEl?.getAttribute('id')).toBe('root-id-new');
		});

		test('only updates the matching default-type block when multiple exist', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-a" version="1.0.0" id="db-1">
							<compas:type-element id="root-a"/>
						</compas:default-type>
						<compas:default-type kind="LNodeType" instance="LLN0" rootId="root-b" version="1.0.0" id="db-2">
							<compas:type-element id="root-b"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const edits = service.buildRenameTypeIdEdits('root-a', 'root-a-new');

			applyEdits(edits);

			const privateEl = doc.querySelector('SCL > Private[type="compas:default-type-info"]');
			const defaultTypeEls = Array.from(privateEl?.children ?? []);
			const measurementEl = defaultTypeEls.find((el) => el.getAttribute('instance') === 'Measurement');
			const lln0El = defaultTypeEls.find((el) => el.getAttribute('instance') === 'LLN0');

			expect(measurementEl?.getAttribute('rootId')).toBe('root-a-new');
			expect(lln0El?.getAttribute('rootId')).toBe('root-b');
		});
	});

	describe('buildDeleteLocalDefaultEditsByTypeId', () => {
		test('removes matching local default metadata block when detaching by root type id', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-a" version="1.0.0" id="db-1">
							<compas:type-element id="root-a"/>
							<compas:type-element id="member-a"/>
						</compas:default-type>
						<compas:default-type kind="LNodeType" instance="LLN0" rootId="root-b" version="1.0.0" id="db-2">
							<compas:type-element id="root-b"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="root-a" cdc="SPS"/>
						<DAType id="member-a" bType="INT32"/>
						<LNodeType id="root-b" lnClass="LLN0"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const edits = service.buildDeleteLocalDefaultEditsByTypeId('root-a');

			expect(edits).toHaveLength(1);
			applyEdits(edits);

			const privateEl = doc.querySelector('SCL > Private[type="compas:default-type-info"]');
			const remainingDefaultTypeEls = Array.from(privateEl?.children ?? []).filter((child) => {
				const localName = (child.localName || child.tagName).toLowerCase();
				return localName === 'default-type';
			});

			expect(remainingDefaultTypeEls).toHaveLength(1);
			expect(remainingDefaultTypeEls[0].getAttribute('rootId')).toBe('root-b');
			expect(doc.getElementById('root-a')).not.toBeNull();
			expect(doc.getElementById('member-a')).not.toBeNull();
		});

		test('removes matching local default metadata block when detaching by nested type id', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-a" version="1.0.0" id="db-1">
							<compas:type-element id="root-a"/>
							<compas:type-element id="member-a"/>
						</compas:default-type>
					</Private>
				</SCL>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);
			const edits = service.buildDeleteLocalDefaultEditsByTypeId('member-a');

			expect(edits).toHaveLength(1);
			applyEdits(edits);

			const privateEl = doc.querySelector('SCL > Private[type="compas:default-type-info"]');
			const remainingDefaultTypeEls = Array.from(privateEl?.children ?? []).filter((child) => {
				const localName = (child.localName || child.tagName).toLowerCase();
				return localName === 'default-type';
			});

			expect(remainingDefaultTypeEls).toHaveLength(0);
		});

		test('throws when type is not part of any local default metadata', () => {
			const doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B"/>
			`);

			const service = new DefaultTypeManagerService(doc, {} as never);

			expect(() => service.buildDeleteLocalDefaultEditsByTypeId('unknown-id')).toThrow(
				'Type unknown-id is not part of a local default type',
			);
		});
	});
});