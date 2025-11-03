import { DataTypeKind, type ObjectSpecification } from '../../domain';
import { type ITypeSpecificationParser, type TypeSpecifications, type TypeSpecMap } from './i-type-specification-parser';

/**
 * Parses a Name Space Definition (NSD) XML string of an IEC 61850 data model
 * and extracts all type specifications.
 *
 * Produces a normalized structure containing LNodeType, DOType, DAType,
 * and EnumType definitions.
 */
export class XMLTypeSpecificationParser implements ITypeSpecificationParser {

  public parseFromString(xmlString: string): TypeSpecifications {
    const doc = new DOMParser().parseFromString(xmlString, "text/xml");
    return this.parseFromDocument(doc);
  }

  public parseFromStrings(xmlStrings: string[]): TypeSpecifications {
    const docs = xmlStrings.map(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"));
    return this.parseFromDocuments(docs);
  }

  public parseFromDocument(doc: Document): TypeSpecifications {
    return {
      lNodeType: this.parseLNodeTypeSpecs(doc),
      doType: this.parseDOTypeSpecs(doc),
      daType: this.parseDATypeSpecs(doc),
      enumType: this.parseEnumTypeSpecs(doc),
    };
  }

  public parseFromDocuments(docs: Document[]): TypeSpecifications {
    const combinedSpecs: TypeSpecifications = {
      lNodeType: {},
      doType: {},
      daType: {},
      enumType: {},
    };

    docs.forEach(doc => {
      const specs = this.parseFromDocument(doc);
      // Merge lNodeType
      this.mergeSpecs(combinedSpecs, specs);
    });

    return combinedSpecs;
  }

  private mergeSpecs(target: TypeSpecifications, source: TypeSpecifications) {
    for (const key of ['lNodeType','doType','daType','enumType'] as const) {
      for (const [subKey, value] of Object.entries(source[key])) {
        if (!target[key][subKey]) target[key][subKey] = {};
        Object.assign(target[key][subKey], value);
      }
    }
  }

  /**
   * Parses LNodeType specifications.
   */
  private parseLNodeTypeSpecs(doc: Document): TypeSpecMap {
    const result: TypeSpecMap = {};
    const lnClasses = doc.querySelectorAll("LNClass");
    lnClasses.forEach((lnClass) => this.parseLNodeTypeSpecFromElement(lnClass, undefined, result, doc));
    return result;
  }

  /**
   * Parses a single LNClass element and its DataObjects.
   * If it has a base (abstract lnClass) attribute, it recursively parses the base LNClass first.
   */
  private parseLNodeTypeSpecFromElement(lnElement: Element, subElement: string | undefined, result: TypeSpecMap, doc: Document): void {
    const lnClassName = subElement ?? lnElement.getAttribute("name");
    if (!lnClassName) return;
    if (!result[lnClassName]) result[lnClassName] = {};
    const base = lnElement.getAttribute("base");
    if (base) {
      const abstractLnClass = doc.querySelector(`AbstractLNClass[name="${base}"]`);
      if (abstractLnClass) this.parseLNodeTypeSpecFromElement(abstractLnClass, lnClassName, result, doc);
    }
    Array.from(lnElement.children)
      .filter(el => el.tagName === 'DataObject' )
      .forEach((dataObject) => {
      if (dataObject.getAttribute('deprecated') === 'true') return;
      const spec = this.parseDataObject(dataObject, 'DO');
      if (spec?.name) result[lnClassName][spec.name] = spec;
    });
  }

  /**
   * Parses DOType specifications (CDC elements).
   */
  private parseDOTypeSpecs(doc: Document): TypeSpecMap {
    const result: TypeSpecMap = {};
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
  private parseDATypeSpecs(doc: Document): TypeSpecMap {
    const result: TypeSpecMap = {};
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
  private parseEnumTypeSpecs(doc: Document): TypeSpecMap {
    const result: TypeSpecMap = {};
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
  private parseDataAttribute(dataAttribute: Element, tagName: 'DA' | 'BDA'): ObjectSpecification | null {
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
    let refTypeKind: DataTypeKind | undefined = undefined;
    let bType = type ? type : undefined;
    let requiresReference = false;
    if (typeKind === 'ENUMERATED') {
      refTypeKind = DataTypeKind.EnumType;
      bType = 'Enum';
      requiresReference = true;
    } else if (typeKind === 'CONSTRUCTED') {
      refTypeKind = DataTypeKind.DAType;
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
  private parseDataObject(dataObject: Element, tagName: 'DO' | 'SDO'): ObjectSpecification | null {
    if (dataObject.getAttribute('deprecated') === 'true') return null;
    const name = dataObject.getAttribute('name');
    const type = dataObject.getAttribute('type');
    const presCond = dataObject.getAttribute('presCond');
    if (!name || !type || !presCond) return null;
    return {
      name: name,
      tagName: tagName,
      isMandatory: presCond === 'M',
      requiresReference: true,
      objectType: type,
      refTypeKind: DataTypeKind.DOType,
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
