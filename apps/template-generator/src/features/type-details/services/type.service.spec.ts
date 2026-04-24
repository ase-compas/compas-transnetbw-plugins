import { describe, test, expect, beforeEach, vi } from 'vitest';
import { DataTypeService } from './type.service';
import { handleEditV2, type EditV2 } from '@oscd-transnet-plugins/oscd-event-api';

function parseScl(xml: string): XMLDocument {
	return new DOMParser().parseFromString(xml, 'application/xml');
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

	beforeEach(() => {
		capturedEdits = [];
		hostElement = document.createElement('div');
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

			service = new DataTypeService(doc, hostElement);
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

			service = new DataTypeService(doc, hostElement);

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

			service = new DataTypeService(doc, hostElement);
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

			service = new DataTypeService(doc, hostElement);
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

			service = new DataTypeService(doc, hostElement);
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

			service = new DataTypeService(doc, hostElement);
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

			service = new DataTypeService(doc, hostElement);
			expect(service.exists('nonexistent')).toBe(false);
		});

		test('returns false for empty string', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates/>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement);
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

			service = new DataTypeService(doc, hostElement);
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

			service = new DataTypeService(doc, hostElement);
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

		test('generates insert edit with specified copy ID', () => {
			doc = parseScl(`
				<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
					<DataTypeTemplates>
						<DOType id="original" cdc="SPS">
							<DA name="da1" bType="BOOLEAN"/>
						</DOType>
					</DataTypeTemplates>
				</SCL>
			`);

			service = new DataTypeService(doc, hostElement);
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
});
