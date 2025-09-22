import { beforeEach, describe, expect } from 'vitest';
import { TypeTraverser } from './typeTraverser';
import { DataTypeKind } from '../domain';

const SCL = `
<?xml version="1.0" encoding="UTF-8"?>
<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
  <Header id="project"/>
  <DataTypeTemplates>
   <LNodeType id="n1" lnClass="LLN0">
      <DO name="Beh" type="do1"/>
    </LNodeType>
    <LNodeType id="n2" lnClass="LLN0">
      <DO name="Beh" type="do1"/>
    </LNodeType>
    <LNodeType id="n3" lnClass="LPHD">
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
    <DOType id="do2" cdc="SPC">
      <DA name="origin" type="da1" fc="ST" bType="Struct"/>
      <DA name="ctlModel" type="enum1" fc="CF" dchg="true" bType="Enum"/>
    </DOType>
    <DOType id="do3" cdc="SPS">
      <DA name="stVal" fc="ST" dchg="true" bType="BOOLEAN"/>
      <DA name="q" fc="ST" qchg="true" bType="Quality"/>
      <DA name="t" fc="ST" bType="Timestamp"/>
      <SDO name="phsA" type="do1" />
    </DOType>
    <DOType id="do4" cdc="SPS">
      <DA name="stVal" fc="ST" dchg="true" bType="BOOLEAN"/>
      <DA name="q" fc="ST" qchg="true" bType="Quality"/>
      <DA name="t" fc="ST" bType="Timestamp"/>
    </DOType>
    <DOType id="do5" cdc="DPL">
      <DA name="vendor" fc="DC" bType="VisString255"/>
      <DA name="model" fc="DC" bType="Enum" type="enum2"/>
      <DA name="orCat" fc="DC" bType="Struct" type="da1"/>
    </DOType>
    <DAType id="da1">
      <BDA name="orCat" type="enum2" bType="Enum"/>
      <BDA name="orIdent" bType="Octet64"/>
      <Private type="be-template-generator:instanceType">Originator</Private>
    </DAType>
    <DOType id="do-loop1">
      <SDO name="loop1" type="do-loop1"/>
    </DOType>
    <DAType id="da2">
      <BDA name="orCat" type="enum2" bType="Enum"/>
      <BDA name="orIdent" type="da3" bType="Struct"/>
      <Private type="be-template-generator:instanceType">Originator</Private>
    </DAType>
    <DAType id="da3">
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

describe('TypeTraverser', () => {
  let doc: XMLDocument;
  let traverser: TypeTraverser;

  beforeEach(() => {
    doc = new DOMParser().parseFromString(SCL, 'application/xml');
    traverser = new TypeTraverser(doc);
  });

  it('should only visit LNodeType references in childNameFilter', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.LNodeType, "n3", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true, ['PhyHealth', 'PhyNam']);

    expect(visited).toHaveLength(5);
    expect(visited).toContain('LNodeType:n3');
    expect(visited).toContain('DOType:do1');
    expect(visited).toContain('DOType:do5');
    expect(visited).toContain('EnumType:enum2');
    expect(visited).toContain('DAType:da1');
  })

  it('should traverse all LNodeType references', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.LNodeType, "n3", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true);
    expect(visited).toHaveLength(8);
    expect(visited).toContain('LNodeType:n3');

    expect(visited).toContain('DOType:do5');
    expect(visited).toContain('EnumType:enum2'); // reference form do5
    expect(visited).toContain('DAType:da1'); // reference form do5 and do 2

    expect(visited).toContain('DOType:do1');

    expect(visited).toContain('DOType:do2');
    expect(visited).toContain('EnumType:enum1'); // reference from do3

    expect(visited).toContain('DOType:do3');
  });

  it('should visit LogicalNodeType references', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.LNodeType, "n1", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true);
    expect(visited).toHaveLength(2);
    expect(visited).toContain('LNodeType:n1');
    expect(visited).toContain('DOType:do1');
  });

  it('should not get stuck in circular references', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DOType, "do-loop1", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true);
    expect(visited).toHaveLength(1);
    expect(visited).toContain('DOType:do-loop1');
  });


  it('should not visit the same type multiple times', () => {
    // do5 references da1 and enum2
    // da1 references enum2
    // So we should visit do5, da1, and enum2 only once each
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DOType, "do5", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true);
    expect(visited).toHaveLength(3);
    expect(visited).toContain('DOType:do5');
    expect(visited).toContain('DAType:da1');
    expect(visited).toContain('EnumType:enum2');
  });

  it('only visits DataObjectType references specified in childNameFilter', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DOType, "do2", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true, ['ctlModel']);
    expect(visited).toHaveLength(2);
    expect(visited).toContain('DOType:do2');
    expect(visited).toContain('EnumType:enum1');
  });

  it('visits DataObjectType with Enum, and Struct references', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DOType, "do2", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true);
    expect(visited).toHaveLength(4);
    expect(visited).toContain('DOType:do2');
    expect(visited).toContain('DAType:da1');
    expect(visited).toContain('EnumType:enum1');
    expect(visited).toContain('EnumType:enum2');
  });

  it('does not visit of DataObjectType if none are present', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DOType, "do4", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, false);

    expect(visited).toEqual([])
  });

  it('visits DataObjectType references, when includeSelf is false', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DOType, "do3", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, false);

    expect(visited).toEqual(['DOType:do1']);
  });

  it('visits DataObjectType SDO references', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DOType, "do3", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true);

    expect(visited).toHaveLength(2);
    expect(visited).toContain('DOType:do3');
    expect(visited).toContain('DOType:do1');
  });

  it('visits DataAttributeType, Enum and Struct references', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DAType, "da2", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true);

    expect(visited).toHaveLength(3);
    expect(visited).toContain('DAType:da2');
    expect(visited).toContain('EnumType:enum2');
    expect(visited).toContain('DAType:da3');
  });

  it('visits DataAttributeType references, when includeSelf is false', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DAType, "da1", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, false);

    expect(visited).toEqual(['EnumType:enum2']);
  });

  it('visits DataAttributeType and its references', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.DAType, "da1", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true);

    expect(visited).toHaveLength(2);
    expect(visited).toContain('DAType:da1');
    expect(visited).toContain('EnumType:enum2');
  });

  it('does not visit the EnumType when includeSelf is false', () => {
    // EnumTypes don't have any references to other types
    const visited: string[] = []
    traverser.traverse(DataTypeKind.EnumType, "enum1", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, false);
    expect(visited).toEqual([]);
  });

  it('visits the EnumType itself when includeSelf is true', () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.EnumType, "enum1", (typeKind, element) => {
      visited.push(`${typeKind}:${element.getAttribute('id')}`);
    }, true); // includeSelf = true

    expect(visited).toEqual(['EnumType:enum1']);
  });

  it(('returns empty array if type with id does not exist'), () => {
    const visited: string[] = [];
    traverser.traverse(DataTypeKind.EnumType, "nonexistent", (typeKind, element) => {
      pushVisited(visited, typeKind, element);
    }, true);
    expect(visited).toEqual([]);
  })
});

function pushVisited(visited: string[], typeKind: DataTypeKind, element: Element) {
  visited.push(`${typeKind}:${element.getAttribute('id')}`);
}
