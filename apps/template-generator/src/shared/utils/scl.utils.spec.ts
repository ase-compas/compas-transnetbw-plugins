import { SCL_PRIVATE_TYPE_INSTANCE_TYPE } from '../constants';
import { TypeKind } from '../model';
import {
  collectReachableTypeIds,
  createElementInDefaultNS,
  createEmptySCLDocument,
  elementToSimpleDataType,
  findDataTypeInsertReferenceElement,
  findDataTypeElement,
  findDataTypeTemplatesElement,
  getDataTypeBaseInfo,
  getDocumentDefaultNamespace,
  insertTypeElements,
  listDataTypeElements,
} from './scl.utils';

function parseScl(xml: string): XMLDocument {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const root = doc.documentElement as Element & {
    lookupNamespaceURI?: (prefix: string | null) => string | null;
  };

  // happy-dom in tests may not implement lookupNamespaceURI on Element.
  if (typeof root.lookupNamespaceURI !== 'function') {
    root.lookupNamespaceURI = (_prefix: string | null) => root.namespaceURI;
  }

  return doc;
}

function applyInsertEdits(edits: { parent: Node; node: Node; reference: Node | null }[]): void {
  edits.forEach((edit) => {
    edit.parent.insertBefore(edit.node, edit.reference);
  });
}

describe('scl.utils', () => {
  test('findDataTypeElement returns element by id', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <DOType id="DO_1" cdc="SPS" />
        </DataTypeTemplates>
      </SCL>
    `);

    const element = findDataTypeElement(doc, 'DO_1');

    expect(element.tagName).toBe('DOType');
    expect(element.getAttribute('id')).toBe('DO_1');
  });

  test('findDataTypeElement throws when id does not exist', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates />
      </SCL>
    `);

    expect(() => findDataTypeElement(doc, 'MISSING')).toThrow(
      'DataType with id MISSING not found',
    );
  });

  test('listDataTypeElements returns only data type template children with id', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <LNodeType id="LN_1" lnClass="LLN0" />
          <DOType id="DO_1" cdc="SPS" />
          <DOType cdc="SPS" />
        </DataTypeTemplates>
      </SCL>
    `);

    const elements = listDataTypeElements(doc);

    expect(elements.map((el) => el.getAttribute('id'))).toEqual(['LN_1', 'DO_1']);
  });

  test('getDataTypeBaseInfo resolves id, kind, and instanceType for all type kinds', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <LNodeType id="LN_1" lnClass="LLN0" />
          <DOType id="DO_1" cdc="SPS" />
          <DAType id="DA_1">
            <Private type="${SCL_PRIVATE_TYPE_INSTANCE_TYPE}">Quality</Private>
          </DAType>
          <EnumType id="EN_1">
            <Private type="${SCL_PRIVATE_TYPE_INSTANCE_TYPE}">CtlModelKind</Private>
          </EnumType>
        </DataTypeTemplates>
      </SCL>
    `);

    expect(getDataTypeBaseInfo(findDataTypeElement(doc, 'LN_1'))).toEqual({
      id: 'LN_1',
      typeKind: TypeKind.LNodeType,
      instanceType: 'LLN0',
    });

    expect(getDataTypeBaseInfo(findDataTypeElement(doc, 'DO_1'))).toEqual({
      id: 'DO_1',
      typeKind: TypeKind.DOType,
      instanceType: 'SPS',
    });

    expect(getDataTypeBaseInfo(findDataTypeElement(doc, 'DA_1'))).toEqual({
      id: 'DA_1',
      typeKind: TypeKind.DAType,
      instanceType: 'Quality',
    });

    expect(getDataTypeBaseInfo(findDataTypeElement(doc, 'EN_1'))).toEqual({
      id: 'EN_1',
      typeKind: TypeKind.EnumType,
      instanceType: 'CtlModelKind',
    });
  });

  test('elementToSimpleDataType maps element and excludes Private children from references count', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <DOType id="DO_1" cdc="SPS">
            <Private type="${SCL_PRIVATE_TYPE_INSTANCE_TYPE}">SPS</Private>
            <DA name="stVal" type="DA_1" />
            <DA name="q" type="DA_2" />
          </DOType>
        </DataTypeTemplates>
      </SCL>
    `);

    const simple = elementToSimpleDataType(findDataTypeElement(doc, 'DO_1'));

    expect(simple).toEqual({
      id: 'DO_1',
      typeKind: TypeKind.DOType,
      instanceType: 'SPS',
      references: 2,
    });
  });

  test('getDocumentDefaultNamespace returns default namespace URI', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <Header id="H1" />
      </SCL>
    `);

    expect(getDocumentDefaultNamespace(doc)).toBe('http://www.iec.ch/61850/2003/SCL');
  });

  test('createElementInDefaultNS creates element in document default namespace', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <Header id="H1" />
      </SCL>
    `);

    const el = createElementInDefaultNS(doc, 'DOType');

    expect(el.tagName).toBe('DOType');
    expect(el.namespaceURI).toBe('http://www.iec.ch/61850/2003/SCL');
  });

  test('findDataTypeTemplatesElement returns DataTypeTemplates when present', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <DOType id="DO_1" cdc="SPS" />
        </DataTypeTemplates>
      </SCL>
    `);

    const dataTypeTemplates = findDataTypeTemplatesElement(doc);

    expect(dataTypeTemplates).not.toBeNull();
    expect(dataTypeTemplates?.tagName).toBe('DataTypeTemplates');
  });

  test('findDataTypeTemplatesElement returns null when missing', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <Header id="H1" />
      </SCL>
    `);

    expect(findDataTypeTemplatesElement(doc)).toBeNull();
  });

  test('findDataTypeInsertReferenceElement returns first element of next kind in order', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <LNodeType id="LN_1" lnClass="LLN0" />
          <DOType id="DO_1" cdc="SPS" />
          <DAType id="DA_1">
            <Private type="${SCL_PRIVATE_TYPE_INSTANCE_TYPE}">Quality</Private>
          </DAType>
          <EnumType id="EN_1">
            <Private type="${SCL_PRIVATE_TYPE_INSTANCE_TYPE}">CtlModelKind</Private>
          </EnumType>
        </DataTypeTemplates>
      </SCL>
    `);

    const referenceForDoType = findDataTypeInsertReferenceElement(doc, TypeKind.DOType);
    const referenceForDaType = findDataTypeInsertReferenceElement(doc, TypeKind.DAType);
    const referenceForEnumType = findDataTypeInsertReferenceElement(doc, TypeKind.EnumType);

    expect(referenceForDoType?.getAttribute('id')).toBe('DA_1');
    expect(referenceForDaType?.getAttribute('id')).toBe('EN_1');
    expect(referenceForEnumType).toBeNull();
  });

  test('findDataTypeInsertReferenceElement skips missing intermediate kinds', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <LNodeType id="LN_1" lnClass="LLN0" />
          <EnumType id="EN_1">
            <Private type="${SCL_PRIVATE_TYPE_INSTANCE_TYPE}">CtlModelKind</Private>
          </EnumType>
        </DataTypeTemplates>
      </SCL>
    `);

    const referenceForDoType = findDataTypeInsertReferenceElement(doc, TypeKind.DOType);

    expect(referenceForDoType?.getAttribute('id')).toBe('EN_1');
  });

  test('insertTypeElements creates DataTypeTemplates when missing and preserves kind order', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <Header id="H1" />
      </SCL>
    `);

    const doType = createElementInDefaultNS(doc, 'DOType');
    doType.setAttribute('id', 'DO_1');
    doType.setAttribute('cdc', 'SPS');

    const enumType = createElementInDefaultNS(doc, 'EnumType');
    enumType.setAttribute('id', 'EN_1');

    const lNodeType = createElementInDefaultNS(doc, 'LNodeType');
    lNodeType.setAttribute('id', 'LN_1');
    lNodeType.setAttribute('lnClass', 'LLN0');

    const edits = insertTypeElements(doc, [enumType, doType, lNodeType]);

    applyInsertEdits(edits as { parent: Node; node: Node; reference: Node | null }[]);

    const inserted = listDataTypeElements(doc).map((el) => el.tagName);
    expect(inserted).toEqual(['LNodeType', 'DOType', 'EnumType']);
  });

  test('insertTypeElements respects order when only later-kind reference exists', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <EnumType id="EN_EXISTING">
            <Private type="${SCL_PRIVATE_TYPE_INSTANCE_TYPE}">CtlModelKind</Private>
          </EnumType>
        </DataTypeTemplates>
      </SCL>
    `);

    const daType = createElementInDefaultNS(doc, 'DAType');
    daType.setAttribute('id', 'DA_1');
    const doType = createElementInDefaultNS(doc, 'DOType');
    doType.setAttribute('id', 'DO_1');
    doType.setAttribute('cdc', 'SPS');

    const edits = insertTypeElements(doc, [daType, doType]);

    applyInsertEdits(edits as { parent: Node; node: Node; reference: Node | null }[]);

    const idsInOrder = listDataTypeElements(doc).map((el) => el.getAttribute('id'));
    expect(idsInOrder).toEqual(['DO_1', 'DA_1', 'EN_EXISTING']);
  });

  test('insertTypeElements skips elements whose id already exists in target document', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <DOType id="DO_1" cdc="SPS" />
        </DataTypeTemplates>
      </SCL>
    `);

    const duplicateDoType = createElementInDefaultNS(doc, 'DOType');
    duplicateDoType.setAttribute('id', 'DO_1');
    duplicateDoType.setAttribute('cdc', 'DPC');

    const enumType = createElementInDefaultNS(doc, 'EnumType');
    enumType.setAttribute('id', 'EN_1');

    const edits = insertTypeElements(doc, [duplicateDoType, enumType]);

    applyInsertEdits(edits as { parent: Node; node: Node; reference: Node | null }[]);

    const ids = listDataTypeElements(doc).map((el) => el.getAttribute('id'));
    expect(ids).toEqual(['DO_1', 'EN_1']);
    expect(doc.querySelectorAll(`${'DataTypeTemplates'} > [id="DO_1"]`).length).toBe(1);
  });

  test('collectReachableTypeIds traverses type graph from root and handles cycles', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <LNodeType id="LN_1" lnClass="LLN0">
            <DO name="st" type="DO_1" />
          </LNodeType>
          <DOType id="DO_1" cdc="SPS">
            <Private type="ORPHAN">DO_NOT_TRAVERSE</Private>
            <DA name="stVal" type="DA_1" />
          </DOType>
          <DAType id="DA_1">
            <Private type="${SCL_PRIVATE_TYPE_INSTANCE_TYPE}">Quality</Private>
            <BDA name="q" type="DA_2" />
          </DAType>
          <DAType id="DA_2">
            <Private type="${SCL_PRIVATE_TYPE_INSTANCE_TYPE}">Quality</Private>
            <BDA name="back" type="DO_1" />
          </DAType>
          <DOType id="ORPHAN" cdc="SPS" />
        </DataTypeTemplates>
      </SCL>
    `);

    const reachable = collectReachableTypeIds(doc, 'LN_1');

    expect(Array.from(reachable).sort()).toEqual(['DA_1', 'DA_2', 'DO_1', 'LN_1']);
  });

  test('collectReachableTypeIds returns empty set for empty root id', () => {
    const doc = parseScl(`
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL">
        <DataTypeTemplates>
          <DOType id="DO_1" cdc="SPS" />
        </DataTypeTemplates>
      </SCL>
    `);

    const reachable = collectReachableTypeIds(doc, '');

    expect(reachable.size).toBe(0);
  });

  test('createEmptySCLDocument creates SCL document with Header id', () => {
    const doc = createEmptySCLDocument('default-header');

    expect(doc.documentElement.tagName).toBe('SCL');
    expect(doc.querySelector('Header')?.getAttribute('id')).toBe('default-header');
  });
});
