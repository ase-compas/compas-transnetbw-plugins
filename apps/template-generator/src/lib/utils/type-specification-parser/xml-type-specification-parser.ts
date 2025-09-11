import { DataTypeKind, ObjectSpecification } from '../../domain';
import { ITypeSpecificationParser, TypeSpecifications, TypeSpecMap } from './i-type-specification-parser';

/**
 * Parses XML type specifications for LNodeType, DOType, DAType, and EnumType.
 */
export class XMLTypeSpecificationParser implements ITypeSpecificationParser {
  private doc: Document;

  constructor(xmlString: string) {
    this.doc = new DOMParser().parseFromString(xmlString, "text/xml");
  }

  /**
   * Parses all type specifications from the XML document.
   */
  public parse(): TypeSpecifications {
    return {
      lNodeType: this.parseLNodeTypeSpecs(),
      doType: this.parseDOTypeSpecs(),
      daType: this.parseDATypeSpecs(),
      enumType: this.parseEnumTypeSpecs(),
    };
  }

  /**
   * Parses LNodeType specifications.
   */
  private parseLNodeTypeSpecs(): TypeSpecMap {
    const result: TypeSpecMap = {};
    const lnClasses = this.doc.querySelectorAll("LNClass");
    lnClasses.forEach((lnClass) => this.parseLNodeTypeSpecFromElement(lnClass, undefined, result));
    return result;
  }

  /**
   * Parses a single LNClass element and its DataObjects.
   * If it has a base (abstract lnClass) attribute, it recursively parses the base LNClass first.
   */
  private parseLNodeTypeSpecFromElement(lnElement: Element, subElement: string | undefined, result: TypeSpecMap): void {
    const lnClassName = subElement ?? lnElement.getAttribute("name");
    if (!lnClassName) return;
    if (!result[lnClassName]) result[lnClassName] = {};
    const base = lnElement.getAttribute("base");
    if (base) {
      const abstractLnClass = this.doc.querySelector(`AbstractLNClass[name="${base}"]`);
      if (abstractLnClass) this.parseLNodeTypeSpecFromElement(abstractLnClass, lnClassName, result);
    }
    lnElement.querySelectorAll(":scope > DataObject").forEach((dataObject) => {
      if (dataObject.getAttribute('deprecated') === 'true') return;
      const spec = this.parseDataObject(dataObject, 'DO');
      if (spec?.name) result[lnClassName][spec.name] = spec;
    });
  }

  /**
   * Parses DOType specifications (CDC elements).
   */
  private parseDOTypeSpecs(): TypeSpecMap {
    const result: TypeSpecMap = {};
    const cdcs = this.doc.querySelectorAll("CDC");
    cdcs.forEach((cdc) => {
      const cdcName = cdc.getAttribute("name");
      if (!cdcName) return;
      if (!result[cdcName]) result[cdcName] = {};
      cdc.querySelectorAll(":scope > SubDataObject").forEach((dataObject) => {
        if (dataObject.getAttribute('deprecated') === 'true') return;
        const spec = this.parseDataObject(dataObject, 'SDO');
        if (spec?.name) result[cdcName][spec.name] = spec;
      });
      cdc.querySelectorAll(":scope > DataAttribute").forEach((dataAttribute) => {
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
  private parseDATypeSpecs(): TypeSpecMap {
    const result: TypeSpecMap = {};
    const attributes = this.doc.querySelectorAll("ConstructedAttribute");
    attributes.forEach((attribute) => {
      const attributeName = attribute.getAttribute("name");
      if (!attributeName) return;
      if (!result[attributeName]) result[attributeName] = {};
      attribute.querySelectorAll(":scope > SubDataAttribute").forEach((subDataAttribute) => {
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
  private parseEnumTypeSpecs(): TypeSpecMap {
    const result: TypeSpecMap = {};
    const enumeration = this.doc.querySelectorAll("Enumeration");
    enumeration.forEach((enumeration) => {
      const name = enumeration.getAttribute("name");
      if (!name) return;
      if (!result[name]) result[name] = {};
      enumeration.querySelectorAll(":scope > Literal").forEach((dataAttribute) => {
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
    if (!name || !type || !presCond) return null;

    // Collect additional attributes
    const attributes: Record<string, string> = {};
    if(tagName === 'DA') {
      ['fc', 'dchg', 'qchg', 'dupd'].forEach(attr => this.addAttributeIfExists(dataAttribute, attributes, attr));
    }

    // Determine reference type and base type
    let refTypeKind: DataTypeKind | undefined = undefined;
    let bType = type;
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
