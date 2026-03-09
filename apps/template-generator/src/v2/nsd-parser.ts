import { TypeKind } from './model';
import type { NsdSchemaTable, NsdTypeDefinition } from './nsd-schema-registry';

/**
 * Parses a Name Space Definition (NSD) XML string of an IEC 61850 data model
 * and extracts all type specifications.
 *
 * Produces a normalized structure containing LNodeType, DOType, DAType,
 * and EnumType definitions.
 */
export class NsdParser {

  public parseFromString(xmlString: string): NsdSchemaTable {
    const doc = new DOMParser().parseFromString(xmlString, "text/xml");
    return this.parseFromDocument(doc);
  }

  public parseFromStrings(xmlStrings: string[]): NsdSchemaTable {
    const docs = xmlStrings.map(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"));
    return this.parseFromDocuments(docs);
  }

  public parseFromDocument(doc: Document): NsdSchemaTable {
    return {
      LNodeType: this.parseLNodeTypeSpecs(doc),
      DOType: this.parseDOTypeSpecs(doc),
      DAType: this.parseDATypeSpecs(doc),
      EnumType: this.parseEnumTypeSpecs(doc),
    };
  }

  public parseFromDocuments(docs: Document[]): NsdSchemaTable {
    const combinedSpecs: NsdSchemaTable = {
      LNodeType: {},
      DOType: {},
      DAType: {},
      EnumType: {},
    };

    docs.forEach(doc => {
      const specs = this.parseFromDocument(doc);
      this.mergeSpecs(combinedSpecs, specs);
    });

    return combinedSpecs;
  }

  private mergeSpecs(target: NsdSchemaTable, source: NsdSchemaTable) {
    for (const key of ['LNodeType', 'DOType', 'DAType', 'EnumType'] as const) {
      for (const [subKey, value] of Object.entries(source[key])) {
        if (!target[key][subKey]) target[key][subKey] = {};
        Object.assign(target[key][subKey], value);
      }
    }
  }

  /**
   * Parses LNodeType specifications.
   */
  private parseLNodeTypeSpecs(doc: Document): Record<string, Record<string, NsdTypeDefinition> > {
    const result: Record<string, Record<string, NsdTypeDefinition> > = {};
    const lnClasses = doc.querySelectorAll("LNClass");
    lnClasses.forEach((lnClass) => this.parseLNodeTypeSpecFromElement(lnClass, undefined, result, doc));
    return result;
  }

  /**
   * Parses a single LNClass element and its DataObjects.
   * If it has a base (abstract lnClass) attribute, it recursively parses the base LNClass first.
   */
  private parseLNodeTypeSpecFromElement(
    lnElement: Element,
    subElement: string | undefined,
    result: Record<string, Record<string, NsdTypeDefinition> >,
    doc: Document
  ): void {
    const lnClassName = subElement ?? lnElement.getAttribute("name");
    if (!lnClassName) return;
    if (!result[lnClassName]) result[lnClassName] = {};
    const base = lnElement.getAttribute("base");
    if (base) {
      const abstractLnClass = doc.querySelector(`AbstractLNClass[name="${base}"]`);
      if (abstractLnClass) this.parseLNodeTypeSpecFromElement(abstractLnClass, lnClassName, result, doc);
    }
    Array.from(lnElement.children)
      .filter(el => el.tagName === 'DataObject')
      .forEach((dataObject) => {
        if (dataObject.getAttribute('deprecated') === 'true') return;
        const spec = this.parseDataObject(dataObject, 'DO');
        if (spec?.name) result[lnClassName][spec.name] = spec;
      });
  }

  /**
   * Parses DOType specifications (CDC elements).
   */
  private parseDOTypeSpecs(doc: Document): Record<string, Record<string, NsdTypeDefinition> > {
    const result: Record<string, Record<string, NsdTypeDefinition> > = {};
    const cdcs = doc.querySelectorAll("CDC");
    cdcs.forEach((cdc) => {
      const cdcName = cdc.getAttribute("name");
      if (!cdcName) return;
      if (!result[cdcName]) result[cdcName] = {};
      Array.from(cdc.children)
        .filter(el => el.tagName === "SubDataObject")
        .forEach((dataObject) => {
          if (dataObject.getAttribute('deprecated') === 'true') return;
          const spec = this.parseDataObject(dataObject, 'SDO');
          if (spec?.name) result[cdcName][spec.name] = spec;
        });
      Array.from(cdc.children)
        .filter(el => el.tagName === "DataAttribute")
        .forEach((dataAttribute) => {
          if (dataAttribute.getAttribute('deprecated') === 'true') return;
          const spec = this.parseDataAttribute(dataAttribute, 'DA');
          if (spec?.name) result[cdcName][spec.name] = spec;
        });
    });
    return result;
  }

  /**
   * Parses DAType specifications (ConstructedAttribute elements).
   */
  private parseDATypeSpecs(doc: Document): Record<string, Record<string, NsdTypeDefinition> > {
    const result: Record<string, Record<string, NsdTypeDefinition> > = {};
    const attributes = doc.querySelectorAll("ConstructedAttribute");
    attributes.forEach((attribute) => {
      const attributeName = attribute.getAttribute("name");
      if (!attributeName) return;
      if (!result[attributeName]) result[attributeName] = {};
      Array.from(attribute.children)
        .filter(el => el.tagName === 'SubDataAttribute')
        .forEach((subDataAttribute) => {
          if (subDataAttribute.getAttribute('deprecated') === 'true') return;
          const spec = this.parseDataAttribute(subDataAttribute, 'BDA');
          if (spec?.name) result[attributeName][spec.name] = spec;
        });
    });
    return result;
  }

  /**
   * Parses EnumType specifications (Enumeration elements).
   */
  private parseEnumTypeSpecs(doc: Document): Record<string, Record<string, NsdTypeDefinition> > {
    const result: Record<string, Record<string, NsdTypeDefinition> > = {};
    const enumeration = doc.querySelectorAll("Enumeration");
    enumeration.forEach((enumeration) => {
      const name = enumeration.getAttribute("name");
      if (!name) return;
      if (!result[name]) result[name] = {};
      Array.from(enumeration.children)
        .filter(el => el.tagName === 'Literal')
        .forEach((dataAttribute) => {
          if (dataAttribute.getAttribute('deprecated') === 'true') return;
          const literalName = dataAttribute.getAttribute("name");
          const literalValue = dataAttribute.getAttribute("literalVal");
          if (literalName) {
            result[name][literalName] = {
              name: literalName,
              tagName: 'EnumVal',
              isMandatory: false,
              requiresReference: false,
              objectType: undefined,
              refTypeKind: undefined,
              attributes: { literalValue },
            };
          }
        });
    });
    return result;
  }

  /**
   * Parses a DataAttribute element into an ObjectSpecification.
   * Skips if deprecated.
   * Only parases fc, dchg, qchg and dupd attributes for DA elements.
   */
  private parseDataAttribute(dataAttribute: Element, tagName: 'DA' | 'BDA'): NsdTypeDefinition | null {
    if (dataAttribute.getAttribute('deprecated') === 'true') return null;

    const name = dataAttribute.getAttribute('name');
    const type = dataAttribute.getAttribute('type');
    const presCond = dataAttribute.getAttribute('presCond');
    const typeKind = dataAttribute.getAttribute('typeKind');
    if (!name || !presCond) return null;

    // Collect additional attributes
    const attributes: Record<string, string> = {};
    if(tagName === 'DA') {
      ['fc', 'dchg', 'qchg', 'dupd'].forEach(attr => this.addAttributeIfExists(dataAttribute, attributes, attr));
    }

    // Determine reference type and base type
    let refTypeKind: TypeKind | undefined = undefined;
    let bType = type ? type : undefined;
    let requiresReference = false;
    if (typeKind === 'ENUMERATED') {
      refTypeKind = TypeKind.EnumType;
      bType = 'Enum';
      requiresReference = true;
    } else if (typeKind === 'CONSTRUCTED') {
      refTypeKind = TypeKind.DAType;
      bType = 'Struct';
      requiresReference = true;
    }
    if (bType) attributes.bType = bType;

    return {
      name,
      tagName: tagName,
      isMandatory: presCond === 'M',
      requiresReference,
      objectType: type,
      refTypeKind,
      attributes,
    };
  }

  /**
   * Parses a DataObject element into an ObjectSpecification.
   */
  private parseDataObject(dataObject: Element, tagName: 'DO' | 'SDO'): NsdTypeDefinition | null {
    if (dataObject.getAttribute('deprecated') === 'true') return null;
    const name = dataObject.getAttribute('name');
    const type = dataObject.getAttribute('type');
    const presCond = dataObject.getAttribute('presCond');
    const underlyingType = dataObject.getAttribute('underlyingType');
    if (!name || !type || !presCond) return null;
    return {
      name: name,
      tagName: tagName,
      isMandatory: presCond === 'M',
      requiresReference: true,
      objectType: type,
      refTypeKind: TypeKind.DOType,
      underlyingType: underlyingType ? underlyingType : undefined,
    };
  }

  /**
   * Adds an attribute to the attributes object if it exists on the element.
   */
  private addAttributeIfExists(element: Element, attributes: Record<string, string>, attrName: string): void {
    const value = element.getAttribute(attrName);
    if (value) attributes[attrName] = value;
  }
}
