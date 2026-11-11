import argparse
import json
from pathlib import Path
import xml.etree.ElementTree as ET


XS = "{http://www.w3.org/2001/XMLSchema}"
TARGET_NAMESPACE = "http://www.iec.ch/61850/2003/SCL"
OUTPUT = (
    Path(__file__).resolve().parents[1]
    / "apps/engineering-wizard/src/features/plugins/validation/scl-schema.ts"
)


def generate(schema_path):
    schemas = {}

    def load(path):
        path = path.resolve()
        if path in schemas:
            return
        root = ET.parse(path).getroot()
        if root.get("targetNamespace") != TARGET_NAMESPACE:
            raise ValueError(f"Unexpected schema namespace: {path}")
        if root.get("version") != "2007B4":
            raise ValueError(f"Expected SCL 2007B4 schema: {path}")
        schemas[path] = root
        for include in root.findall(f"{XS}include"):
            load(path.parent / include.attrib["schemaLocation"])

    load(schema_path)

    def declarations(tag):
        result = {}
        for root in schemas.values():
            for node in root.findall(f"{XS}{tag}"):
                name = node.attrib["name"]
                if name in result:
                    raise ValueError(f"Duplicate {tag}: {name}")
                result[name] = node
        return result

    types = declarations("complexType")
    simple_types = declarations("simpleType")
    elements = declarations("element")
    attribute_groups = declarations("attributeGroup")

    def local(name):
        return name.split(":")[-1]

    def content(node, ancestors=(), inherited_attrs=()):
        if node in ancestors:
            raise ValueError("Cyclic type or attribute group inheritance")
        ancestors = (*ancestors, node)
        children, attrs = [], list(inherited_attrs)
        for child in node:
            tag = child.tag.removeprefix(XS)
            if tag == "element":
                element = elements[local(child.attrib["ref"])] if "ref" in child.attrib else child
                if element.attrib["name"] != "Private":
                    children.append(element)
            elif tag == "attribute":
                name = child.attrib["name"]
                if child.get("use") == "prohibited":
                    attrs = [attr for attr in attrs if attr != name]
                elif name not in attrs:
                    attrs.append(name)
            elif tag == "attributeGroup":
                _, attrs = content(attribute_groups[local(child.attrib["ref"])], ancestors, attrs)
            elif tag in (
                "sequence", "choice", "all", "complexContent", "simpleContent",
                "extension", "restriction",
            ):
                if tag in ("extension", "restriction"):
                    base = child.attrib["base"]
                    if local(base) in types:
                        inherited_children, inherited_attrs = content(types[local(base)], ancestors)
                        children.extend(inherited_children)
                        attrs.extend(attr for attr in inherited_attrs if attr not in attrs)
                    elif not base.startswith("xs:") and local(base) not in simple_types:
                        raise ValueError(f"Unresolved base type: {base}")
                nested_children, attrs = content(child, ancestors, attrs)
                children.extend(nested_children)
            elif tag not in (
                "annotation", "simpleType", "any", "anyAttribute",
                "pattern", "minLength", "maxLength",
            ):
                raise ValueError(f"Unsupported XSD construct: {tag}")
        return children, attrs

    definitions = {}
    seen = set()
    pending = [elements["SCL"]]
    while pending:
        element = pending.pop(0)
        if element in seen:
            continue
        seen.add(element)
        if "type" in element.attrib:
            name = element.attrib["type"]
            node = types.get(local(name))
            if node is None and not name.startswith("xs:") and local(name) not in simple_types:
                raise ValueError(f"Unresolved element type: {name}")
        else:
            node = element.find(f"{XS}complexType")
        children, attrs = content(node) if node is not None else ([], [])
        definition = {
            "attrs": attrs,
            "children": list(dict.fromkeys(child.attrib["name"] for child in children)),
        }
        name = element.attrib["name"]
        if name in definitions and definitions[name] != definition:
            raise ValueError(f"Context-dependent definition for element: {name}")
        definitions[name] = definition
        pending.extend(children)

    header = """/**
 * Generated from IEC 61850-6 Ed. 2.1, SCL 2007B4.
 * Regenerate: python3 tools/generate-scl-schema.py /path/to/SCL.xsd
 * Format the generated file with the repository's Prettier.
 *
 * Includes inherited attributes and all standard child elements except Private.
 * Foreign-namespace extensions are intentionally not included.
 */

export type SclNodeDef = {
  attrs: string[];
  children: string[];
};

export const SCL_SCHEMA: Record<string, SclNodeDef> = """
    footer = """;

/** Returns valid standard child element names, excluding Private. */
export function getChildElements(parentName: string): string[] {
  return SCL_SCHEMA[parentName]?.children ?? [];
}

/** Returns valid attribute names (without @) for a given element name. */
export function getElementAttrs(elementName: string): string[] {
  return SCL_SCHEMA[elementName]?.attrs ?? [];
}

/** All supported standard SCL element names. */
export const ALL_SCL_ELEMENTS: string[] = Object.keys(SCL_SCHEMA);
"""
    return header + json.dumps(dict(sorted(definitions.items())), indent=2) + footer


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate the validation editor's SCL schema.")
    parser.add_argument("schema", type=Path, help="Path to the IEC SCL.xsd entry point")
    args = parser.parse_args()
    OUTPUT.write_text(generate(args.schema), encoding="utf-8")
