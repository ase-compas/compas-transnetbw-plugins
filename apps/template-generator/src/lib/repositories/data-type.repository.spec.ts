import { beforeEach, describe, expect } from 'vitest';
import { DataTypeRepository } from './data-type.repository';
import { DataTypeKind } from '../domain';

const SCL = `
<?xml version="1.0" encoding="UTF-8"?>
<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
  <Header id="project"/>
  <DataTypeTemplates>
   <LNodeType id="same-id" lnClass="LLN0">
      <DO name="Beh" type="do1"/>
    </LNodeType>
    <LNodeType id="lnode1" lnClass="LLN0">
      <DO name="Beh" type="do1"/>
    </LNodeType>
    <LNodeType id="lnode2" lnClass="LPHD">
      <DO name="PhyNam" type="do5"/>
      <DO name="PhyHealth" type="do1"/>
      <DO name="Proxy" type="do3"/>
      <DO name="Sim" type="do2"/>
    </LNodeType>
    <DOType id="do1" cdc="ENS">
      <DA name="q" fc="ST" qchg="true" bType="Quality"/>
      <DA name="t" fc="ST" bType="Timestamp"/>
      <DA name="blkEna" fc="BL" bType="BOOLEAN"/>
      <DA name="cdcName" fc="EX" bType="VisString255"/>
    </DOType>
    <DOType id="same-id" cdc="ENS">
      <DA name="q" fc="ST" qchg="true" bType="Quality"/>
      <DA name="t" fc="ST" bType="Timestamp"/>
      <DA name="blkEna" fc="BL" bType="BOOLEAN"/>
      <DA name="cdcName" fc="EX" bType="VisString255"/>
    </DOType>
    <DOType id="do2" cdc="SPC">
      <DA name="origin" type="da1" fc="ST" bType="Struct"/>
      <DA name="ctlModel" type="enum1" fc="CF" dchg="true" bType="Enum"/>
    </DOType>
    <DOType id="do3" cdc="SPS">
      <DA name="stVal" fc="ST" dchg="true" bType="BOOLEAN"/>
      <DA name="q" fc="ST" qchg="true" bType="Quality"/>
      <DA name="t" fc="ST" bType="Timestamp"/>
    </DOType>
    <DOType id="do4" cdc="SPS">
      <DA name="stVal" fc="ST" dchg="true" bType="BOOLEAN"/>
      <DA name="q" fc="ST" qchg="true" bType="Quality"/>
      <DA name="t" fc="ST" bType="Timestamp"/>
    </DOType>
    <DOType id="do5" cdc="DPL">
      <DA name="vendor" fc="DC" bType="VisString255"/>
    </DOType>
    <DAType id="da1">
      <BDA name="orCat" type="enum2" bType="Enum"/>
      <BDA name="orIdent" bType="Octet64"/>
      <Private type="be-template-generator:instanceType">Originator</Private>
    </DAType>
    <EnumType id="enum1">
      <EnumVal ord="0">status-only</EnumVal>
      <EnumVal ord="1">direct-with-normal-security</EnumVal>
      <EnumVal ord="2">sbo-with-normal-security</EnumVal>
      <EnumVal ord="3">direct-with-enhanced-security</EnumVal>
      <EnumVal ord="4">sbo-with-enhanced-security</EnumVal>
      <Private type="be-template-generator:instanceType">CtlModelKind</Private>
    </EnumType>
    <EnumType id="enum2">
      <EnumVal ord="0">not-supported</EnumVal>
      <EnumVal ord="1">bay-control</EnumVal>
      <EnumVal ord="2">station-control</EnumVal>
      <EnumVal ord="3">remote-control</EnumVal>
      <EnumVal ord="4">automatic-bay</EnumVal>
      <EnumVal ord="5">automatic-station</EnumVal>
      <EnumVal ord="6">automatic-remote</EnumVal>
      <EnumVal ord="7">maintenance</EnumVal>
      <EnumVal ord="8">process</EnumVal>
      <Private type="be-template-generator:instanceType">OriginatorCategoryKind</Private>
    </EnumType>
  </DataTypeTemplates>
</SCL>
`;

describe('DataTypeRepository', () => {

  let doc: XMLDocument;
  let host: HTMLElement;
  let repo: DataTypeRepository;

  beforeEach(() => {
    doc = new DOMParser().parseFromString(SCL, 'application/xml') as XMLDocument;
    host = document.createElement('div');
    repo = new DataTypeRepository(doc, host);
  });


  describe('findDataTypeById', () => {

    it('should find logical node type by id when present', () => {
      const lnodeType = repo.findDataTypeById(DataTypeKind.LNodeType, 'lnode1');
      expect(lnodeType).toBeDefined();
      expect(lnodeType?.id).toBe('lnode1');
      expect(lnodeType?.lnClass).toBe('LLN0');
      expect(lnodeType.children).toBeDefined();
      expect(lnodeType.children.length).toBe(1);
      const children = lnodeType.children;
      expect(children[0].name).toBe('Beh');
      expect(children[0]?.typeRef).toBe('do1');
    });

    it('should find data object type by id when present', () => {
      const doType = repo.findDataTypeById(DataTypeKind.DOType, 'do2');
      expect(doType).toBeDefined();
      expect(doType?.id).toBe('do2');
      expect(doType?.cdc).toBe('SPC');
      expect(doType.children).toBeDefined();
      expect(doType.children.length).toBe(2);

      const children = doType.children;

      expect(children[0].name).toBe('origin');
      expect(children[0]?.typeRef).toBe('da1');
      expect(children[0]?.attributes?.bType).toBe('Struct');

      expect(children[1].name).toBe('ctlModel');
      expect(children[1]?.typeRef).toBe('enum1');
      expect(children[1]?.attributes?.fc).toBe('CF');
      expect(children[1]?.attributes?.dchg).toBe('true');
      expect(children[1]?.attributes?.bType).toBe('Enum');
    });

    it('should find data attribute type by id when present', () => {
      /**
       *  <DAType id="da1">
       *       <BDA name="orCat" type="enum2" bType="Enum"/>
       *       <BDA name="orIdent" bType="Octet64"/>
       *       <Private type="be-template-generator:instanceType">Originator</Private>
       *     </DAType>
       */
      const daType = repo.findDataTypeById(DataTypeKind.DAType, 'da1');
      expect(daType).toBeDefined();
      expect(daType?.id).toBe('da1');
      expect(daType?.instanceType).toBe('Originator');
      expect(daType.children).toBeDefined();
      expect(daType.children.length).toBe(2);

      const children = daType.children;

      expect(children[0].name).toBe('orCat');
      expect(children[0]?.typeRef).toBe('enum2');
      expect(children[0]?.attributes?.bType).toBe('Enum');

      expect(children[1].name).toBe('orIdent');
      expect(children[1]?.attributes?.bType).toBe('Octet64');
    });

    it('should find enum type by id when present', () => {
      const enumType = repo.findDataTypeById(DataTypeKind.EnumType, 'enum1');
      expect(enumType).toBeDefined();
      expect(enumType?.id).toBe('enum1');
      expect(enumType?.instanceType).toBe('CtlModelKind')

      // Children are EnumVal elements
      expect(enumType.children).toBeDefined();
      expect(enumType.children.length).toBe(5);
    });

    it('should find right data type by id if multiple items share the same id', () => {
      const lnodeType = repo.findDataTypeById(DataTypeKind.LNodeType, "same-id");
      expect(lnodeType).toBeDefined();
      expect(lnodeType?.id).toBe('same-id');
      expect(lnodeType?.lnClass).toBe('LLN0');

      const doType = repo.findDataTypeById(DataTypeKind.DOType, "same-id");
      expect(doType).toBeDefined();
      expect(doType?.id).toBe('same-id');
      expect(doType?.cdc).toBe('ENS');
    });

    it('should return null if the id does not exist', () => {
      const result = repo.findDataTypeById(DataTypeKind.LNodeType, "nonexistent");
      expect(result).toBeNull();
    });
  });

  describe('deleteDataTypeById', () => {
    it('should delete existing DOType', () => {
      const spy = vi.spyOn(host, 'dispatchEvent');

      const deleted = repo.deleteDataTypeById(DataTypeKind.DOType, 'do1');
      expect(deleted).toBe(true);

      const event: CustomEvent = spy.mock.calls[0][0] as CustomEvent;
      expect(event.type).toBe('oscd-edit-v2');
    });

    it('should return false if data type does not exist', () => {
      const deleted = repo.deleteDataTypeById(DataTypeKind.DOType, 'nonexistent');
      expect(deleted).toBe(false);
    });
  });

  describe('upsertDataType', () => {
    it('should insert a new LNodeType', () => {
      const spy = vi.spyOn(host, 'dispatchEvent');

      const newNode = { id: 'lnode-new', lnClass: 'XYZ', children: [] };
      const inserted = repo.upsertDataType(DataTypeKind.LNodeType, newNode as any);
      expect(inserted).toEqual(newNode);

      const event: CustomEvent = spy.mock.calls[0][0] as CustomEvent;
      expect(event.type).toBe('oscd-edit-v2');
    });

    it('should update an existing DOType', () => {
      const spy = vi.spyOn(host, 'dispatchEvent');

      const existing = repo.findDataTypeById(DataTypeKind.DOType, 'do2');
      const updated = { ...existing, cdc: 'UPDATED' };
      const result = repo.upsertDataType(DataTypeKind.DOType, updated);
      expect(result).toEqual(updated);

      const event: CustomEvent = spy.mock.calls[0][0] as CustomEvent;
      expect(event.type).toBe('oscd-edit-v2');
    });

    it('should throw an error if data is missing id', () => {
      expect(() => repo.upsertDataType(DataTypeKind.LNodeType, { lnClass: 'XYZ'} as any)).toThrow();
    });
  });

  describe('findReferencedTypesById', () => {
    it('should return null if id does not exist', () => {
      const result = repo.findReferencedTypesById(DataTypeKind.LNodeType, 'nonexistent');
      expect(result).toBeNull();
    });

    it('should return all referenced types for a valid id', () => {
      const result = repo.findReferencedTypesById(DataTypeKind.LNodeType, 'lnode1');
      expect(result).toBeDefined();
      expect(result?.lNodeTypes.length).toBe(0);
      expect(result?.dataAttributeTypes.length).toBe(0);
      expect(result?.enumTypes.length).toBe(0);

      expect(result?.dataObjectTypes.length).toBe(1); // 'do1' referenced by 'Beh'
      expect(result?.dataObjectTypes[0].id).toBe('do1');
      expect(result?.dataObjectTypes[0].cdc).toBe('ENS');
    });

    it('should return all referenced types for a valid id test 2', () => {
    /*
    lnode2
     ├─ do5
     ├─ do1
     ├─ do3
     ├─ do2
     │    ├─ da1
     │        └─ enum2
     │    ├─ enum1
     */
      const result = repo.findReferencedTypesById(DataTypeKind.LNodeType, 'lnode2');
      expect(result).toBeDefined();

      expect(result?.lNodeTypes.length).toBe(0);
      expect(result?.dataObjectTypes.length).toBe(4);
      expect(result?.dataAttributeTypes.length).toBe(1);
      expect(result?.enumTypes.length).toBe(2);

      const doIds = result?.dataObjectTypes.map(doType => doType.id);
      expect(doIds).toContain('do5');
      expect(doIds).toContain('do1');
      expect(doIds).toContain('do3');
      expect(doIds).toContain('do2');

      expect(result?.dataAttributeTypes[0].id).toBe('da1');

      const enumIds = result?.enumTypes.map(e => e.id);
      expect(enumIds).toContain('enum1');
      expect(enumIds).toContain('enum2');
    });
  });
});
