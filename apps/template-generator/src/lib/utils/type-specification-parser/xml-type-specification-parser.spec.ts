import { beforeEach, describe, expect } from 'vitest';
import { XMLTypeSpecificationParser } from './xml-type-specification-parser';
import { DataTypeKind } from '../../domain';

const LN_CLASS_ONLY_NSD = `
     <LNClasses>
     <AbstractLNClass name="BaseConductorLN"
                 titleID="IEC61850_7_4.TestAbstractLNsGroup::BaseConductorLN.cl.title">
    <DataObject name="Abstract1"
                type="ASG"
                descID="IEC61850_7_4.TestAbstractLNsGroup::BaseConductorLN.ZPs.desc"
                presCond="M"
                dsPresCond="F"/>
</AbstractLNClass>

<AbstractLNClass name="ExtendedConductorLN"
                 titleID="IEC61850_7_4.TestAbstractLNsGroup::ExtendedConductorLN.cl.title"
                 base="BaseConductorLN">
    <DataObject name="Abstract2"
                type="ASG"
                descID="IEC61850_7_4.TestAbstractLNsGroup::ExtendedConductorLN.RPs.desc"
                presCond="O"
                dsPresCond="F"/>
</AbstractLNClass>

<LNClass name="TestLPHD"
         titleID="IEC61850_7_4.TestLNGroup::TestLPHD.cl.title"
         base="ExtendedConductorLN">
    <DataObject name="NamPlt"
                type="LPL"
                descID="IEC61850_7_4.TestLNGroup::TestLPHD.NamPlt.desc"
                presCond="MOTest"
                dsPresCond="na"/>
    <DataObject name="PhyHealth"
                type="ENS"
                underlyingType="HealthKind"
                descID="IEC61850_7_4.TestLNGroup::TestLPHD.PhyHealth.desc"
                presCond="M"
                dsPresCond="na"/>
    <DataObject name="Abc"
                deprecated="true"
                type="ENS"
                underlyingType="HealthKind"
                descID="IEC61850_7_4.TestLNGroup::TestLPHD.PhyHealth.desc"
                presCond="M"
                dsPresCond="na"/>
    <DataObject name="OutOv"
                type="SPS"
                descID="IEC61850_7_4.TestLNGroup::TestLPHD.OutOv.desc"
                presCond="O"
                dsPresCond="na"/>
    </LNClass>

</LNClasses>
`;

const DO_TYPE_ONLY_NSD = `
<CDCs>
  <CDC name="DEL"
           titleID="IEC61850_7_3.CDCAnalogueInfo::DEL.cl.title"
           statistics="true">
            <SubDataObject name="phsAB"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::DEL.phsAB.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <SubDataObject name="phsBC"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::DEL.phsBC.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <DataAttribute name="angRef"
                        fc="CF"
                        type="PhaseAngleReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::DEL.angRef.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.d.desc"
                        presCond="O"/>
  </CDC>
   <CDC name="SPC" titleID="IEC61850_7_3.CDCControl::SPC.cl.title">
            <DataAttribute name="origin"
                        fc="ST"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::SPC.origin.desc"
                        presCond="O"/>
            <DataAttribute name="ctlNum"
                        fc="ST"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCControl::SPC.ctlNum.desc"
                        presCond="M"/>
   </CDC>
</CDCs>
`;

describe('XMLTypeSpecificationParser', () => {
  let specParser: XMLTypeSpecificationParser;

  beforeEach(() => {
    specParser = new XMLTypeSpecificationParser();
  });

  describe('LNodeType parsing', () => {
    it('should parse abstract logical node type specs', () => {
      const lnTypeSpecs = specParser.parseFromString(LN_CLASS_ONLY_NSD);
      expect(lnTypeSpecs).toBeDefined();
      expect(Object.values(lnTypeSpecs?.lNodeType).length).toBe(1);
      expect(Object.values(lnTypeSpecs?.doType).length).toBe(0);
      expect(Object.values(lnTypeSpecs?.daType).length).toBe(0);
      expect(Object.values(lnTypeSpecs?.enumType).length).toBe(0);

      const lnSpec = lnTypeSpecs.lNodeType?.TestLPHD;
      expect(lnSpec).toBeDefined();

      const abstract1 = lnSpec?.Abstract1;
      expect(abstract1).toBeDefined();
      expect(abstract1.name).toBe('Abstract1');
      expect(abstract1.tagName).toBe('DO');
      expect(abstract1.isMandatory).toBe(true);
      expect(abstract1.requiresReference).toBe(true);
      expect(abstract1.objectType).toBe('ASG');
      expect(abstract1.refTypeKind).toBe(DataTypeKind.DOType);

      const abstract2 = lnSpec?.Abstract2;
      expect(abstract2).toBeDefined();
      expect(abstract2.name).toBe('Abstract2');
      expect(abstract2.tagName).toBe('DO');
      expect(abstract2.isMandatory).toBe(false);
      expect(abstract2.requiresReference).toBe(true);
      expect(abstract2.objectType).toBe('ASG');
      expect(abstract2.refTypeKind).toBe(DataTypeKind.DOType);

      const namPlt = lnSpec?.NamPlt;
      expect(namPlt).toBeDefined();
      expect(namPlt?.name).toBe('NamPlt');
      expect(namPlt?.tagName).toBe('DO');
      expect(namPlt?.isMandatory).toBe(false);
      expect(namPlt?.requiresReference).toBe(true);
      expect(namPlt?.objectType).toBe('LPL');
      expect(namPlt?.refTypeKind).toBe(DataTypeKind.DOType);

      const phyHealth = lnSpec?.PhyHealth;
      expect(phyHealth).toBeDefined();
      expect(phyHealth?.name).toBe('PhyHealth');
      expect(phyHealth?.tagName).toBe('DO');
      expect(phyHealth?.isMandatory).toBe(true);
      expect(phyHealth?.requiresReference).toBe(true);
      expect(phyHealth?.objectType).toBe('ENS');
      expect(phyHealth?.refTypeKind).toBe(DataTypeKind.DOType);

      const outOv = lnSpec?.OutOv;
      expect(outOv).toBeDefined();
      expect(outOv?.name).toBe('OutOv');
      expect(outOv?.tagName).toBe('DO');
      expect(outOv?.isMandatory).toBe(false);
      expect(outOv?.requiresReference).toBe(true);
      expect(outOv?.objectType).toBe('SPS');
      expect(outOv?.refTypeKind).toBe(DataTypeKind.DOType);
    });

    it('should ignore deprecated elements', () => {
      const lnTypeSpecs = specParser.parseFromString(LN_CLASS_ONLY_NSD);
      expect(lnTypeSpecs).toBeDefined();
      expect(Object.values(lnTypeSpecs?.lNodeType).length).toBe(1);
      expect(Object.values(lnTypeSpecs?.doType).length).toBe(0);
      expect(Object.values(lnTypeSpecs?.daType).length).toBe(0);
      expect(Object.values(lnTypeSpecs?.enumType).length).toBe(0);

      const lnSpec = lnTypeSpecs.lNodeType?.TestLPHD;
      expect(lnSpec).toBeDefined();
      expect(lnSpec?.Abc).toBeUndefined();
    });

    it('should return empty specs for empty input', () => {
      const lnTypeSpecs = specParser.parseFromString('');
      expect(lnTypeSpecs).toBeDefined();
      expect(Object.values(lnTypeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(lnTypeSpecs?.doType).length).toBe(0);
      expect(Object.values(lnTypeSpecs?.daType).length).toBe(0);
      expect(Object.values(lnTypeSpecs?.enumType).length).toBe(0);
    });
  });

  describe('DOType parsing', () => {
    it('should parse data object type specs', () => {
      const typeSpecs = specParser.parseFromString(DO_TYPE_ONLY_NSD);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(2);
      expect(Object.values(typeSpecs?.daType).length).toBe(0);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);

      const delSpec = typeSpecs.doType?.DEL;
      expect(delSpec).toBeDefined();

      const phsAB = delSpec?.phsAB;
      expect(phsAB).toBeDefined();
      expect(phsAB.name).toBe('phsAB');
      expect(phsAB.tagName).toBe('SDO');
      expect(phsAB.isMandatory).toBe(false);
      expect(phsAB.requiresReference).toBe(true);
      expect(phsAB.objectType).toBe('CMV');
      expect(phsAB.refTypeKind).toBe(DataTypeKind.DOType);

      const phsBC = delSpec?.phsBC;
      expect(phsBC).toBeDefined();
      expect(phsBC.name).toBe('phsBC');
      expect(phsBC.tagName).toBe('SDO');
      expect(phsBC.isMandatory).toBe(false);
      expect(phsBC.requiresReference).toBe(true);
      expect(phsBC.objectType).toBe('CMV');
      expect(phsBC.refTypeKind).toBe(DataTypeKind.DOType);

      const angRef = delSpec?.angRef;
      expect(angRef).toBeDefined();
      expect(angRef.name).toBe('angRef');
      expect(angRef.tagName).toBe('DA');
      expect(angRef.isMandatory).toBe(false);
      expect(angRef.requiresReference).toBe(true);
      expect(angRef.objectType).toBe('PhaseAngleReferenceKind');
      expect(angRef.refTypeKind).toBe(DataTypeKind.EnumType);
      expect(angRef.attributes).toBeDefined();
      expect(angRef.attributes?.fc).toBe('CF');
      expect(angRef.attributes?.bType).toBe('Enum');
      expect(angRef.attributes?.dchg).toBe('true');

      const d = delSpec?.d;
      expect(d).toBe;
      expect(d.name).toBe('d');
      expect(d.tagName).toBe('DA');
      expect(d.isMandatory).toBe(false);
      expect(d.requiresReference).toBe(false);
      expect(d.objectType).toBe('VisString255');
      expect(d.refTypeKind).toBeUndefined();
      expect(d.attributes).toBeDefined();
      expect(d.attributes?.fc).toBe('DC');
      expect(d.attributes?.bType).toBe('VisString255');
    });

    it('should parse SubDataObject elements as SDO', () => {
      const nsd = `
        <CDCs>
          <CDC name="DEL"
            titleID="IEC61850_7_3.CDCAnalogueInfo::DEL.cl.title"
            statistics="true">
            <SubDataObject name="phsAB"
              type="CMV"
              descID="IEC61850_7_3.CDCAnalogueInfo::DEL.phsAB.desc"
              presCond="AtLeastOne"
              presCondArgs="1"/>
           </CDC>
        </CDCs>`;

      const typeSpecs = specParser.parseFromString(nsd);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(1);
      expect(Object.values(typeSpecs?.daType).length).toBe(0);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);

      const delSpec = typeSpecs.doType?.DEL;
      expect(delSpec).toBeDefined();

      const phsAB = delSpec?.phsAB;
      expect(phsAB).toBeDefined();
      expect(phsAB.name).toBe('phsAB');
      expect(phsAB.tagName).toBe('SDO');
      expect(phsAB.isMandatory).toBe(false);
      expect(phsAB.requiresReference).toBe(true);
      expect(phsAB.objectType).toBe('CMV');
      expect(phsAB.refTypeKind).toBe(DataTypeKind.DOType);
    });

    it('should parse basic DataAttribute', () => {
      const nsd = `
        <CDCs>
          <CDC name="SPC" titleID="IEC61850_7_3.CDCControl::SPC.cl.title">
            <DataAttribute name="ctlNum"
              fc="ST"
              type="INT8U"
              descID="IEC61850_7_3.CDCControl::SPC.ctlNum.desc"
              presCond="M"/>
          </CDC>
        </CDCs>`;

      const typeSpecs = specParser.parseFromString(nsd);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(1);
      expect(Object.values(typeSpecs?.daType).length).toBe(0);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);

      const spcSpec = typeSpecs.doType?.SPC;
      expect(spcSpec).toBeDefined();

      const ctlNum = spcSpec?.ctlNum;
      expect(ctlNum).toBeDefined();
      expect(ctlNum.name).toBe('ctlNum');
      expect(ctlNum.tagName).toBe('DA');
      expect(ctlNum.isMandatory).toBe(true);
      expect(ctlNum.requiresReference).toBe(false); // basic types dont require a reference
      expect(ctlNum.objectType).toBe('INT8U');
      expect(ctlNum.refTypeKind).toBeUndefined();
      expect(ctlNum.attributes).toBeDefined();
      expect(ctlNum.attributes?.fc).toBe('ST');
      expect(ctlNum.attributes?.bType).toBe('INT8U');
    });

    it('should parse DataAttribute with ENUMERATED typeKind', () => {
      const nsd = `
        <CDCs>
          <CDC name="SPC" titleID="IEC61850_7_3.CDCControl::SPC.cl.title">
            <DataAttribute name="origin"
              fc="ST"
              type="Originator"
              typeKind="ENUMERATED"
              descID="IEC61850_7_3.CDCControl::SPC.origin.desc"
              presCond="O"/>
          </CDC>
        </CDCs>`;

      const typeSpecs = specParser.parseFromString(nsd);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(1);
      expect(Object.values(typeSpecs?.daType).length).toBe(0);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);

      const spcSpec = typeSpecs.doType?.SPC;
      expect(spcSpec).toBeDefined();

      const origin = spcSpec?.origin;
      expect(origin).toBeDefined();
      expect(origin.name).toBe('origin');
      expect(origin.tagName).toBe('DA');
      expect(origin.isMandatory).toBe(false);
      expect(origin.requiresReference).toBe(true); // always true for ENUMERATED
      expect(origin.objectType).toBe('Originator');
      expect(origin.refTypeKind).toBe(DataTypeKind.EnumType); // refTypeKind is EnumType for ENUMERATED
      expect(origin.attributes).toBeDefined();
      expect(origin.attributes?.fc).toBe('ST');
      expect(origin.attributes?.bType).toBe('Enum'); // set bType for ENUMERATED
    });

    it('should parse DataAttribute with CONSTRUCTED typeKind', () => {
      const nsd = `
        <CDCs>
          <CDC name="SPC" titleID="IEC61850_7_3.CDCControl::SPC.cl.title">
            <DataAttribute name="origin"
              fc="ST"
              type="Originator"
              typeKind="CONSTRUCTED"
              descID="IEC61850_7_3.CDCControl::SPC.origin.desc"
              presCond="O"/>
          </CDC>
        </CDCs>`;

      const typeSpecs = specParser.parseFromString(nsd);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(1);
      expect(Object.values(typeSpecs?.daType).length).toBe(0);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);

      const spcSpec = typeSpecs.doType?.SPC;
      expect(spcSpec).toBeDefined();

      const origin = spcSpec?.origin;
      expect(origin).toBeDefined();
      expect(origin.name).toBe('origin');
      expect(origin.tagName).toBe('DA');
      expect(origin.isMandatory).toBe(false);
      expect(origin.requiresReference).toBe(true); // always true for CONSTRUCTED
      expect(origin.objectType).toBe('Originator');
      expect(origin.refTypeKind).toBe(DataTypeKind.DAType); // refTypeKind is DAType for CONSTRUCTED
      expect(origin.attributes).toBeDefined();
      expect(origin.attributes?.fc).toBe('ST');
      expect(origin.attributes?.bType).toBe('Struct'); // set bType for CONSTRUCTED
    });

    it('should return empty specs for empty input', () => {
      const typeSpecs = specParser.parseFromString('');
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(0);
      expect(Object.values(typeSpecs?.daType).length).toBe(0);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);
    });
  });


  describe('DataAttribute parsing', () => {
    it('should ignore deprecated DataAttribute elements', () => {
      const nsd = `
         <ConstructedAttributes>
         <ConstructedAttribute name="Originator"
                            titleID="IEC61850_7_2.DomainTypesGeneral::S_Originator.cl.title">
            <SubDataAttribute name="orCat"
                           deprecated="true"
                           type="OriginatorCategoryKind"
                           typeKind="ENUMERATED"
                           descID="IEC61850_7_2.DomainTypesGeneral::S_Originator.orCat.desc"
                           presCond="M"/>
            <SubDataAttribute name="orIdent"
                           type="Octet64"
                           descID="IEC61850_7_2.DomainTypesGeneral::S_Originator.orIdent.desc"
                           presCond="M"/>
         </ConstructedAttribute>
      </ConstructedAttributes>
      `;

      const typeSpecs = specParser.parseFromString(nsd);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(0);
      expect(Object.values(typeSpecs?.daType).length).toBe(1);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);

      const originatorSpec = typeSpecs.daType?.Originator;
      expect(originatorSpec).toBeDefined();

      expect(originatorSpec?.orCar).toBeUndefined(); // deprecated DA should be ignored
      expect(originatorSpec?.orIdent).toBeDefined();
    });


    it('should parse basic SubDataAttribute elements as BDA', () => {
      const nsd = `
         <ConstructedAttributes>
         <ConstructedAttribute name="Originator"
                            titleID="IEC61850_7_2.DomainTypesGeneral::S_Originator.cl.title">
            <SubDataAttribute name="orIdent"
                           type="Octet64"
                           descID="IEC61850_7_2.DomainTypesGeneral::S_Originator.orIdent.desc"
                           presCond="O"/>
         </ConstructedAttribute>
      </ConstructedAttributes>
      `;

      const typeSpecs = specParser.parseFromString(nsd);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(0);
      expect(Object.values(typeSpecs?.daType).length).toBe(1);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);

      const originatorSpec = typeSpecs.daType?.Originator;
      expect(originatorSpec).toBeDefined();

      const orIdent = originatorSpec?.orIdent;
      expect(orIdent).toBeDefined();
      expect(orIdent.name).toBe('orIdent');
      expect(orIdent.tagName).toBe('BDA');
      expect(orIdent.isMandatory).toBe(false);
      expect(orIdent.requiresReference).toBe(false);
      expect(orIdent.objectType).toBe('Octet64');
      expect(orIdent.refTypeKind).toBeUndefined();
      expect(orIdent.attributes).toBeDefined();
      expect(orIdent.attributes?.bType).toBe('Octet64');
    });

    it('should parse CONSTRUCTED SubDataAttribute elements as BDA', () => {
      const nsd = `
         <ConstructedAttributes>
         <ConstructedAttribute name="Originator"
                            titleID="IEC61850_7_2.DomainTypesGeneral::S_Originator.cl.title">
            <SubDataAttribute name="orIdent"
                            type="Originator"
                            typeKind="CONSTRUCTED"
                            descID="IEC61850_7_2.DomainTypesGeneral::S_Originator.orIdent.desc"
                            presCond="O"/>
         </ConstructedAttribute>
      </ConstructedAttributes>
      `;

      const typeSpecs = specParser.parseFromString(nsd);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(0);
      expect(Object.values(typeSpecs?.daType).length).toBe(1);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);

      const originatorSpec = typeSpecs.daType?.Originator;
      expect(originatorSpec).toBeDefined();

      const orIdent = originatorSpec?.orIdent;
      expect(orIdent).toBeDefined();
      expect(orIdent.name).toBe('orIdent');
      expect(orIdent.tagName).toBe('BDA');
      expect(orIdent.isMandatory).toBe(false);
      expect(orIdent.requiresReference).toBe(true);
      expect(orIdent.objectType).toBe('Originator');
      expect(orIdent.refTypeKind).toBe(DataTypeKind.DAType);
      expect(orIdent.attributes).toBeDefined()
      expect(orIdent.attributes?.bType).toBe('Struct');
    });

    it('should parse ENUMERATED SubDataAttribute elements as BDA', () => {
      const nsd = `
         <ConstructedAttributes>
         <ConstructedAttribute name="Originator"
                            titleID="IEC61850_7_2.DomainTypesGeneral::S_Originator.cl.title">
            <SubDataAttribute name="orCat"
                            type="OriginatorCategoryKind"
                            typeKind="ENUMERATED"
                            descID="IEC61850_7_2.DomainTypesGeneral::S_Originator.orCat.desc"
                            presCond="M"/>
         </ConstructedAttribute>
      </ConstructedAttributes>
      `;

      const typeSpecs = specParser.parseFromString(nsd);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(0);
      expect(Object.values(typeSpecs?.daType).length).toBe(1);
      expect(Object.values(typeSpecs?.enumType).length).toBe(0);

      const originatorSpec = typeSpecs.daType?.Originator;
      expect(originatorSpec).toBeDefined();

      const orCat = originatorSpec?.orCat;
      expect(orCat).toBeDefined();
      expect(orCat.name).toBe('orCat');
      expect(orCat.tagName).toBe('BDA');
      expect(orCat.isMandatory).toBe(true);
      expect(orCat.requiresReference).toBe(true);
      expect(orCat.objectType).toBe('OriginatorCategoryKind');
      expect(orCat.refTypeKind).toBe(DataTypeKind.EnumType);
      expect(orCat.attributes).toBeDefined()
      expect(orCat.attributes?.bType).toBe('Enum');
    });
  });


  describe('EnumType parsing', () => {

    it('should parse EnumType specs', () => {
      const nsd = `
       <Enumerations>
         <Enumeration name="AngleReferenceKind"
                   titleID="IEC61850_7_3.DAEnums::AngleReferenceKind.cl.title">
            <Literal name="V" literalVal="0"/>
            <Literal name="A" literalVal="1"/>
         </Enumeration>
         <Enumeration name="CtlModelKind"
                   titleID="IEC61850_7_3.DAEnums::CtlModelKind.cl.title">
            <Literal name="status-only"
                  literalVal="0"
                  descID="IEC61850_7_3.DAEnums::CtlModelKind.status-only.desc"/>
         </Enumeration>
       </Enumerations>
     `;

      const typeSpecs = specParser.parseFromString(nsd);
      expect(typeSpecs).toBeDefined();
      expect(Object.values(typeSpecs?.lNodeType).length).toBe(0);
      expect(Object.values(typeSpecs?.doType).length).toBe(0);
      expect(Object.values(typeSpecs?.daType).length).toBe(0);
      expect(Object.values(typeSpecs?.enumType).length).toBe(2);

      const angleRefKind = typeSpecs.enumType?.AngleReferenceKind;
      expect(angleRefKind).toBeDefined();
      const angleLiterals = Object.values(angleRefKind);
      expect(angleLiterals.length).toBe(2);

      const V = angleLiterals.find(lit => lit.name === 'V');
      expect(V).toBeDefined();
      expect(V?.name).toBe('V');
      expect(V?.tagName).toBe('EnumVal');
      expect(V?.isMandatory).toBe(false);
      expect(V?.requiresReference).toBe(false);
      expect(V?.objectType).toBeUndefined();
      expect(V?.refTypeKind).toBeUndefined();
      expect(V?.attributes).toBeDefined();
      expect(V?.attributes?.literalValue).toBe('0');

      const A = angleLiterals.find(lit => lit.name === 'A');
      expect(A).toBeDefined();
      expect(A?.name).toBe('A');
      expect(A?.tagName).toBe('EnumVal');
      expect(A?.isMandatory).toBe(false);
      expect(A?.requiresReference).toBe(false);
      expect(A?.objectType).toBeUndefined();
      expect(A?.refTypeKind).toBeUndefined();
      expect(A?.attributes).toBeDefined();
      expect(A?.attributes?.literalValue).toBe('1');


      const ctlModelKind = typeSpecs.enumType?.CtlModelKind;
      expect(ctlModelKind).toBeDefined();
      const ctlLiterals = Object.values(ctlModelKind);
      expect(ctlLiterals.length).toBe(1);

      const statusOnly = ctlLiterals.find(lit => lit.name === 'status-only');
      expect(statusOnly).toBeDefined();
      expect(statusOnly?.name).toBe('status-only');
      expect(statusOnly?.tagName).toBe('EnumVal');
      expect(statusOnly?.isMandatory).toBe(false);
      expect(statusOnly?.requiresReference).toBe(false);
      expect(statusOnly?.objectType).toBeUndefined();
      expect(statusOnly?.refTypeKind).toBeUndefined();
      expect(statusOnly?.attributes).toBeDefined();
      expect(statusOnly?.attributes?.literalValue).toBe('0');
    });
  });


});
