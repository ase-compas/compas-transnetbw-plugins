import { describe, test, expect, beforeEach, vi } from 'vitest';
import { DataTypeService } from './type.service';
import { handleEditV2, type EditV2 } from '@oscd-transnet-plugins/oscd-event-api';
import { TypeKind } from '../../../shared/model';
import type { DefaultManagerService } from './default-manager-service';
import { DefaultMetadataService } from './default-metadata-service';

function parseScl(xml: string): XMLDocument {
	return new DOMParser().parseFromString(xml, 'application/xml');
}

// Mock service factories for dependency injection
function createMockDefaultMService(overrides?: Partial<DefaultManagerService>): DefaultManagerService {
	return {
		batchApply: vi.fn().mockResolvedValue({ edits: [], effectiveRootIds: new Map() }),
		batchUpgrade: vi.fn().mockResolvedValue({ edits: [], effectiveRootIds: new Map() }),
		getDefaultInfo: vi.fn().mockResolvedValue({ isLocalLatest: false, isAvailable: false, latestVersion: undefined }),
		getLatestDefaultInfo: vi.fn().mockResolvedValue(null),
		getLatestDefaults: vi.fn().mockResolvedValue(new Map()),
		invalidateLatestDefaultsCache: vi.fn(),
		...overrides,
	} as unknown as DefaultManagerService;
}

// Mock createAndDispatchEditEvent to capture edits for testing
let capturedEdits: EditV2[] = [];

vi.mock('@oscd-transnet-plugins/oscd-event-api', async () => {
	const actual = await vi.importActual('@oscd-transnet-plugins/oscd-event-api');
	return {
		...actual,
		createAndDispatchEditEvent: vi.fn((hostElement: HTMLElement, edits: EditV2[], options?: any) => {
			capturedEdits.push(...edits);
		}),
	};
});

describe('DataTypeService', () => {
	let service: DataTypeService;
	let doc: XMLDocument;
	let hostElement: HTMLElement;
	let mockDefaultMService: DefaultManagerService;
	let metadataService: DefaultMetadataService;

	beforeEach(() => {
		capturedEdits = [];
		hostElement = document.createElement('div');
		mockDefaultMService = createMockDefaultMService();
		metadataService = new DefaultMetadataService();
	});

	describe('rename', () => {
		test('generates SetAttributesV2 edits for type element and references', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="old-id" cdc="SPS"/>
						<LNodeType id="consumer" lnClass="LLN0">
							<DO name="ref1" type="old-id"/>
							<DO name="ref2" type="old-id"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.rename('old-id', 'new-id');

			// Verify edits were captured
			expect(capturedEdits).toHaveLength(3); // 1 type + 2 refs
			expect(capturedEdits[0]).toHaveProperty('element');
			expect(capturedEdits[0]).toHaveProperty('attributes');

			// Apply edits and verify they work
			capturedEdits.forEach(edit => handleEditV2(edit));
			expect(doc.getElementById('new-id')).not.toBeNull();
			expect(doc.querySelectorAll('[type="new-id"]')).toHaveLength(2);
		});

		test('throws error when renaming to an ID that already exists', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="old-id" cdc="SPS"/>
						<DOType id="existing-id" cdc="DPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			expect(() => service.rename('old-id', 'existing-id')).toThrow(
				'DataType with id existing-id already exists'
			);
		});

		test('returns early when renaming to the same ID without dispatching event', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="test-id" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.rename('test-id', 'test-id');

			expect(capturedEdits).toHaveLength(0);
		});

		test('includes metadata edits when renaming a type that is a rootId', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="old-root" version="1.0.0" id="db-1">
							<compas:type-element id="old-root"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="old-root" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.rename('old-root', 'new-root');

			// Should have edits for type element + metadata updates (type-element id + rootId)
			expect(capturedEdits.length).toBeGreaterThan(1);

			// Apply and verify metadata was updated
			capturedEdits.forEach(edit => handleEditV2(edit));
			const defaultTypeEl = doc.querySelector('[instance="Measurement"]');
			expect(defaultTypeEl?.getAttribute('rootId')).toBe('new-root');
		});

		test('updates all references when renaming a type with multiple usages', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="old-id" cdc="SPS"/>
						<LNodeType id="ln1" lnClass="LLN0">
							<DO name="do1" type="old-id"/>
						</LNodeType>
						<LNodeType id="ln2" lnClass="XCBR">
							<DO name="do2" type="old-id"/>
						</LNodeType>
						<DAType id="da1" bType="Struct">
							<BDA name="bda1" type="old-id"/>
						</DAType>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.rename('old-id', 'new-id');

			// 1 type element + 3 references
			expect(capturedEdits).toHaveLength(4);
			
			capturedEdits.forEach(edit => handleEditV2(edit));
			expect(doc.querySelectorAll('[type="new-id"]')).toHaveLength(3);
		});
	});

	describe('exists', () => {
		test('returns true for existing type', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="existing" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			expect(service.exists('existing')).toBe(true);
		});

		test('returns false for non-existing type', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="existing" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			expect(service.exists('nonexistent')).toBe(false);
		});

		test('returns false for empty string', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates/>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			expect(service.exists('')).toBe(false);
		});
	});

	describe('delete', () => {
		test('generates RemoveV2 and SetAttributesV2 edits to remove type and clear references', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="to-delete" cdc="SPS"/>
						<LNodeType id="consumer" lnClass="LLN0">
							<DO name="do1" type="to-delete"/>
							<DO name="do2" type="to-delete"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.delete('to-delete');

			// Should have edits for removal and reference clearing
			expect(capturedEdits.length).toBeGreaterThan(0);

			// Apply edits
			capturedEdits.forEach(edit => handleEditV2(edit));

			// Verify type was removed
			expect(doc.getElementById('to-delete')).toBeNull();

			// Verify references were cleared
			const refs = Array.from(doc.querySelectorAll('[type="to-delete"]'));
			expect(refs.every(ref => ref.getAttribute('type') === '')).toBe(true);
		});

		test('cascades deletion for root type of a default group, deleting sub-types and metadata', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-a" version="1.0.0" id="db-1">
							<compas:type-element id="root-a"/>
							<compas:type-element id="sub-a"/>
							<compas:type-element id="sub-b"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="root-a" cdc="SPS"/>
						<DOType id="sub-a" cdc="DPS"/>
						<DOType id="sub-b" cdc="ACD"/>
						<LNodeType id="consumer" lnClass="LLN0">
							<DO name="do1" type="root-a"/>
							<DO name="do2" type="sub-a"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.delete('root-a');

			// Apply edits
			capturedEdits.forEach(edit => handleEditV2(edit));

			// Verify root type was removed
			expect(doc.getElementById('root-a')).toBeNull();

			// Verify sub-types were removed
			expect(doc.getElementById('sub-a')).toBeNull();
			expect(doc.getElementById('sub-b')).toBeNull();

			// Verify metadata was removed
			expect(doc.querySelector('[instance="Measurement"]')).toBeNull();

			// Verify all references were cleared
			const refs = Array.from(doc.querySelectorAll('[type="root-a"],[type="sub-a"]'));
			expect(refs.every(ref => ref.getAttribute('type') === '')).toBe(true);
		});

		test('deletes metadata for root type of a default group even when there are no sub-types', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-only" version="1.0.0" id="db-1">
							<compas:type-element id="root-only"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="root-only" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.delete('root-only');

			capturedEdits.forEach(edit => handleEditV2(edit));

			expect(doc.getElementById('root-only')).toBeNull();
			expect(doc.querySelector('[instance="Measurement"]')).toBeNull();
		});
	});

	describe('getDeletePlan', () => {
		test('returns hasDefaultMetadata=true and sub-type IDs for root type of a default group', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-a" version="1.0.0" id="db-1">
							<compas:type-element id="root-a"/>
							<compas:type-element id="sub-a"/>
							<compas:type-element id="sub-b"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="root-a" cdc="SPS"/>
						<DOType id="sub-a" cdc="DPS"/>
						<DOType id="sub-b" cdc="ACD"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			const plan = service.getDeletePlan('root-a');

			expect(plan.hasDefaultMetadata).toBe(true);
			expect(plan.trackedSubTypeIds).toEqual(['root-a', 'sub-a', 'sub-b']);
		});

		test('returns hasDefaultMetadata=false for non-default types', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="regular-type" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			const plan = service.getDeletePlan('regular-type');

			expect(plan.hasDefaultMetadata).toBe(false);
			expect(plan.trackedSubTypeIds).toEqual([]);
		});

		test('returns hasDefaultMetadata=true for tracked sub-types (non-root)', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
					<Private type="compas:default-type-info">
						<compas:default-type kind="DOType" instance="Measurement" rootId="root-a" version="1.0.0" id="db-1">
							<compas:type-element id="root-a"/>
							<compas:type-element id="sub-a"/>
						</compas:default-type>
					</Private>
					<DataTypeTemplates>
						<DOType id="root-a" cdc="SPS"/>
						<DOType id="sub-a" cdc="DPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			const plan = service.getDeletePlan('sub-a');

			// sub-a is tracked but not a root, so no cascade
			expect(plan.hasDefaultMetadata).toBe(true);
			expect(plan.trackedSubTypeIds).toEqual(['root-a', 'sub-a']); 
		});
	});

	describe('duplicate', () => {
		test('generates insert edit with auto-generated copy ID', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="original" cdc="SPS">
							<DA name="da1" bType="BOOLEAN"/>
						</DOType>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.duplicate('original');

			// Should generate an insert edit
			expect(capturedEdits.length).toBeGreaterThan(0);

			// Apply edits
			capturedEdits.forEach(edit => handleEditV2(edit));

			// Verify a copy was created with "copy" in the ID
			const copies = Array.from(doc.querySelectorAll('DOType')).filter(el =>
				el.getAttribute('id')?.includes('copy')
			);
			expect(copies.length).toBeGreaterThan(0);
		});

		test('generates insert edit with specified copy ID with no id format configured', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="original" cdc="SPS">
							<DA name="da1" bType="BOOLEAN"/>
						</DOType>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.duplicate('original', 'custom-copy-id');

			// Should generate an insert edit
			expect(capturedEdits.length).toBeGreaterThan(0);

			// Apply edits
			capturedEdits.forEach(edit => handleEditV2(edit));

			// Verify the copy exists with the specified ID
			expect(doc.getElementById('custom-copy-id')).not.toBeNull();
			expect(doc.getElementById('custom-copy-id')?.getAttribute('cdc')).toBe('SPS');
		});
	});

	describe('list', () => {
		test('filters by query across id, type kind, and instance type', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="do-meas" cdc="SPS"/>
						<LNodeType id="ln-lln0" lnClass="LLN0"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			expect(service.list({ query: 'meas' })).toHaveLength(1);
			expect(service.list({ query: 'lnodetype' })).toHaveLength(1);
			expect(service.list({ query: 'lln0' })).toHaveLength(1);
		});

		test('filters by type kind and instance type', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="do-sps" cdc="SPS"/>
						<DOType id="do-dps" cdc="DPS"/>
						<LNodeType id="ln-lln0" lnClass="LLN0"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			const byKind = service.list({ typeKind: TypeKind.DOType });
			expect(byKind).toHaveLength(2);

			const byKindAndInstance = service.list({ typeKind: TypeKind.DOType, instanceType: 'DPS' });
			expect(byKindAndInstance).toHaveLength(1);
			expect(byKindAndInstance[0].id).toBe('do-dps');
		});
	});

	describe('clearReference', () => {
		test('generates edit to clear member type attribute', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<LNodeType id="consumer" lnClass="LLN0">
							<DO name="do1" type="ref-type"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.clearReference('consumer', 'do1');

			expect(capturedEdits).toHaveLength(1);
			capturedEdits.forEach(edit => handleEditV2(edit));

			expect(doc.querySelector('[name="do1"]')?.getAttribute('type')).toBe('');
		});

		test('throws when member does not exist', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<LNodeType id="consumer" lnClass="LLN0"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			expect(() => service.clearReference('consumer', 'missing')).toThrow(
				'Member with name missing not found in DataType consumer'
			);
		});
	});

	describe('create', () => {
		test('creates DataTypeTemplates when missing and inserts first type', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B"/>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			(service as any).nsdSchemaRegistry = {
				getTypeDefinition: vi.fn(() => ({})),
				listInstanceTypes: vi.fn(() => []),
			};

			service.create(TypeKind.DOType, 'SPS', 'new-do');

			expect(capturedEdits).toHaveLength(1);
			capturedEdits.forEach(edit => handleEditV2(edit));

			expect(doc.querySelector('DataTypeTemplates > DOType[id="new-do"]')).not.toBeNull();
			expect(doc.querySelector('DOType[id="new-do"]')?.getAttribute('cdc')).toBe('SPS');
		});
	});

	describe('updateInstanceType', () => {
		test('replaces element with updated instance type in-place', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="do-a" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			(service as any).nsdSchemaRegistry = {
				getTypeDefinition: vi.fn(() => ({})),
				listInstanceTypes: vi.fn(() => []),
			};

			service.updateInstanceType('do-a', 'DPS');

			expect(capturedEdits).toHaveLength(2);
			capturedEdits.forEach(edit => handleEditV2(edit));

			expect(doc.querySelector('DOType[id="do-a"]')?.getAttribute('cdc')).toBe('DPS');
		});

		test('returns early when instance type is unchanged', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="do-a" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);
			service.updateInstanceType('do-a', 'SPS');

			expect(capturedEdits).toHaveLength(0);
		});
	});

	describe('applyDefaultTypes', () => {
		test('applies resolved default and sets member references', async () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<LNodeType id="ln-consumer" lnClass="LLN0">
							<DO name="stVal"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			// Configure mock to return default type with root ID
			mockDefaultMService.batchApply = vi.fn().mockResolvedValue({
				edits: [],
				effectiveRootIds: new Map([['DOType:SPS', 'default-root-id']]),
			});

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			(service as any).nsdSchemaRegistry = {
				getTypeDefinition: vi.fn(() => ({
					stVal: {
						tagName: 'DO',
						name: 'stVal',
						requiresReference: true,
						refTypeKind: TypeKind.DOType,
						objectType: 'SPS',
						isMandatory: true,
						attributes: {},
					},
				})),
				listInstanceTypes: vi.fn(() => []),
			};

			await service.applyDefaultTypes('ln-consumer', ['stVal']);

			expect(mockDefaultMService.batchApply).toHaveBeenCalledTimes(1);
			expect(capturedEdits.length).toBeGreaterThan(0);

			capturedEdits.forEach(edit => handleEditV2(edit));
			expect(doc.querySelector('LNodeType[id="ln-consumer"] > DO[name="stVal"]')?.getAttribute('type')).toBe('default-root-id');
		});

		test('does nothing when no referenced members are provided', async () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<LNodeType id="ln-consumer" lnClass="LLN0"/>
					</DataTypeTemplates>
				</SCL>
			`);

			mockDefaultMService.batchApply = vi.fn().mockResolvedValue({
				edits: [],
				effectiveRootIds: new Map(),
			});

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			(service as any).nsdSchemaRegistry = {
				getTypeDefinition: vi.fn(() => ({})),
				listInstanceTypes: vi.fn(() => []),
			};

			await service.applyDefaultTypes('ln-consumer', ['missing']);

			expect(mockDefaultMService.batchApply).not.toHaveBeenCalled();
			expect(capturedEdits).toHaveLength(0);
		});
	});

	describe('upgradeAppliedDefaultsBatch', () => {
		test('returns 0 when targets array is empty', async () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates/>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			const result = await service.upgradeAppliedDefaultsBatch([]);

			expect(result).toBe(0);
			expect(mockDefaultMService.batchUpgrade).not.toHaveBeenCalled();
			expect(capturedEdits).toHaveLength(0);
		});

		test('returns 0 when doc is missing', async () => {
			doc = null as any;

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			const result = await service.upgradeAppliedDefaultsBatch([
				{
					key: { kind: TypeKind.DOType, instance: 'SPS' },
					version: '1.0.0',
					rootId: 'old-root',
				},
			]);

			expect(result).toBe(0);
			expect(mockDefaultMService.batchUpgrade).not.toHaveBeenCalled();
		});

		test('returns upgraded count and dispatches edits when upgrade is successful', async () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="old-root" cdc="SPS"/>
						<LNodeType id="consumer" lnClass="LLN0">
							<DO name="do1" type="old-root"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			const mockUpgradeEdits = [
				{
					element: doc.querySelector('DOType'),
					attributes: { id: 'new-root' },
				} as any,
			];

			mockDefaultMService.batchUpgrade = vi.fn().mockResolvedValue({
				edits: mockUpgradeEdits,
				effectiveRootIds: new Map([['DOType:SPS', 'new-root']]),
			});

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			const result = await service.upgradeAppliedDefaultsBatch([
				{
					key: { kind: TypeKind.DOType, instance: 'SPS' },
					version: '1.0.0',
					rootId: 'old-root',
				},
			]);

			expect(result).toBe(1);
			expect(mockDefaultMService.batchUpgrade).toHaveBeenCalledTimes(1);
			// Should have upgrade edits + reference rewrite edits
			expect(capturedEdits.length).toBeGreaterThan(0);
		});

		test('includes reference rewrite edits when effective root ID differs from original', async () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="old-root" cdc="SPS"/>
						<LNodeType id="consumer" lnClass="LLN0">
							<DO name="do1" type="old-root"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			const mockUpgradeEdits = [
				{
					element: doc.querySelector('DOType'),
					attributes: { id: 'new-root' },
				} as any,
			];

			mockDefaultMService.batchUpgrade = vi.fn().mockResolvedValue({
				edits: mockUpgradeEdits,
				effectiveRootIds: new Map([['DOType:SPS', 'new-root']]),
			});

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			const result = await service.upgradeAppliedDefaultsBatch([
				{
					key: { kind: TypeKind.DOType, instance: 'SPS' },
					version: '1.0.0',
					rootId: 'old-root',
				},
			]);

			expect(result).toBe(1);
			// Should have upgrade edits + reference rewrite edits
			expect(capturedEdits.length).toBeGreaterThan(0);

			capturedEdits.forEach(edit => handleEditV2(edit));
			expect(doc.querySelector('LNodeType > DO')?.getAttribute('type')).toBe('new-root');
		});

		test('deduplicates targets by key and version', async () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="root1" cdc="SPS"/>
						<DOType id="root2" cdc="SPS"/>
					</DataTypeTemplates>
				</SCL>
			`);

			const mockUpgradeEdits = [
				{
					element: doc.querySelector('DOType[id="root1"]'),
					attributes: { id: 'root-upgraded' },
				} as any,
			];

			mockDefaultMService.batchUpgrade = vi.fn().mockResolvedValue({
				edits: mockUpgradeEdits,
				effectiveRootIds: new Map([['DOType:SPS', 'root-upgraded']]),
			});

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			const result = await service.upgradeAppliedDefaultsBatch([
				{
					key: { kind: TypeKind.DOType, instance: 'SPS' },
					version: '1.0.0',
					rootId: 'root1',
				},
				{
					key: { kind: TypeKind.DOType, instance: 'SPS' },
					version: '1.0.0',
					rootId: 'root2',
				},
				{
					key: { kind: TypeKind.DOType, instance: 'SPS' },
					version: '1.0.0',
					rootId: 'root1',
				},
			]);

			expect(result).toBe(1);
			// Should only call batchUpgrade once with deduplicated list
			expect(mockDefaultMService.batchUpgrade).toHaveBeenCalledWith(
				doc,
				expect.arrayContaining([
					{
						key: { kind: TypeKind.DOType, instance: 'SPS' },
						version: '1.0.0',
					},
				])
			);
		});

		test('does not include reference rewrites when effective root ID matches original', async () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="same-root" cdc="SPS"/>
						<LNodeType id="consumer" lnClass="LLN0">
							<DO name="do1" type="same-root"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			const mockUpgradeEdits = [];

			mockDefaultMService.batchUpgrade = vi.fn().mockResolvedValue({
				edits: mockUpgradeEdits,
				effectiveRootIds: new Map([['DOType:SPS', 'same-root']]),
			});

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			const result = await service.upgradeAppliedDefaultsBatch([
				{
					key: { kind: TypeKind.DOType, instance: 'SPS' },
					version: '1.0.0',
					rootId: 'same-root',
				},
			]);

			expect(result).toBe(0);
			expect(capturedEdits).toHaveLength(0);
		});

		test('handles multiple upgrades with mixed root ID changes', async () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="sps-old" cdc="SPS"/>
						<DOType id="dps-old" cdc="DPS"/>
						<LNodeType id="consumer" lnClass="LLN0">
							<DO name="do1" type="sps-old"/>
							<DO name="do2" type="dps-old"/>
						</LNodeType>
					</DataTypeTemplates>
				</SCL>
			`);

			mockDefaultMService.batchUpgrade = vi.fn().mockResolvedValue({
				edits: [],
				effectiveRootIds: new Map([
					['DOType:SPS', 'sps-new'],
					['DOType:DPS', 'dps-old'], // No change for this one
				]),
			});

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			const result = await service.upgradeAppliedDefaultsBatch([
				{
					key: { kind: TypeKind.DOType, instance: 'SPS' },
					version: '1.0.0',
					rootId: 'sps-old',
				},
				{
					key: { kind: TypeKind.DOType, instance: 'DPS' },
					version: '2.0.0',
					rootId: 'dps-old',
				},
			]);

			expect(result).toBe(2);
			// Should have one rewrite edit for SPS (changed) and none for DPS (unchanged)
			expect(capturedEdits.length).toBeGreaterThan(0);

			capturedEdits.forEach(edit => handleEditV2(edit));
			expect(doc.querySelector('LNodeType > DO[name="do1"]')?.getAttribute('type')).toBe('sps-new');
			expect(doc.querySelector('LNodeType > DO[name="do2"]')?.getAttribute('type')).toBe('dps-old');
		});

		test('returns 0 and does not dispatch when batchUpgrade produces no edits', async () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates/>
				</SCL>
			`);

			mockDefaultMService.batchUpgrade = vi.fn().mockResolvedValue({
				edits: [],
				effectiveRootIds: new Map([['DOType:SPS', null]]),
			});

			service = new DataTypeService(doc, hostElement, metadataService, mockDefaultMService);

			const result = await service.upgradeAppliedDefaultsBatch([
				{
					key: { kind: TypeKind.DOType, instance: 'SPS' },
					version: '1.0.0',
					rootId: 'old-root',
				},
			]);

			expect(result).toBe(0);
			expect(capturedEdits).toHaveLength(0);
		});
	});
});
