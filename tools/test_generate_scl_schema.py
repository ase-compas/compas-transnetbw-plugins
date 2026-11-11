import json
from pathlib import Path
import runpy
import unittest
from unittest.mock import patch
import xml.etree.ElementTree as ET


generate = runpy.run_path(
    str(Path(__file__).with_name("generate-scl-schema.py"))
)["generate"]


class AttributeRestrictionTest(unittest.TestCase):
    def schema_for(self, element_type):
        root = ET.fromstring(f"""
            <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
                targetNamespace="http://www.iec.ch/61850/2003/SCL"
                version="2007B4">
                <xs:attributeGroup name="Common">
                    <xs:attribute name="mode" type="xs:string"/>
                    <xs:attribute name="unit" type="xs:string"/>
                </xs:attributeGroup>
                <xs:complexType name="Base">
                    <xs:simpleContent>
                        <xs:extension base="xs:string">
                            <xs:attributeGroup ref="Common"/>
                        </xs:extension>
                    </xs:simpleContent>
                </xs:complexType>
                <xs:complexType name="Restricted">
                    <xs:simpleContent>
                        <xs:restriction base="Base">
                            <xs:attribute name="mode" use="prohibited"/>
                        </xs:restriction>
                    </xs:simpleContent>
                </xs:complexType>
                <xs:complexType name="Extended">
                    <xs:simpleContent>
                        <xs:extension base="Restricted">
                            <xs:attribute name="source" type="xs:string"/>
                        </xs:extension>
                    </xs:simpleContent>
                </xs:complexType>
                <xs:element name="SCL" type="{element_type}"/>
            </xs:schema>
        """)
        with patch.object(ET, "parse", return_value=ET.ElementTree(root)):
            output = generate(Path("SCL.xsd"))
        schema = output.split(
            "export const SCL_SCHEMA: Record<string, SclNodeDef> = ", 1
        )[1].split(";", 1)[0]
        return json.loads(schema)

    def test_removes_prohibited_attributes_inherited_from_attribute_groups(self):
        self.assertEqual(self.schema_for("Restricted")["SCL"]["attrs"], ["unit"])

    def test_keeps_prohibited_attributes_removed_in_further_derived_types(self):
        self.assertEqual(
            self.schema_for("Extended")["SCL"]["attrs"], ["unit", "source"]
        )


if __name__ == "__main__":
    unittest.main()
