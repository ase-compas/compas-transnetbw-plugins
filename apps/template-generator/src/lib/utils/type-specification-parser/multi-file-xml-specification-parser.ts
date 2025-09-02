import { ITypeSpecificationParser, TypeSpecifications } from './i-type-specification-parser';
import { XMLTypeSpecificationParser } from './xml-type-specification-parser';

export class MultiFileXMLSpecificationParser implements ITypeSpecificationParser {


  constructor(private xmlStrings: string[]) {
  }

  public parse(): TypeSpecifications {
    const combinedSpecs: TypeSpecifications = {
      lNodeType: {},
      doType: {},
      daType: {},
      enumType: {},
    };

    this.xmlStrings.forEach(xml => {
      const parser = new XMLTypeSpecificationParser(xml);
      const specs = parser.parse();

      // Merge lNodeType
      Object.entries(specs.lNodeType).forEach(([key, value]) => {
        if (!combinedSpecs.lNodeType[key]) {
          combinedSpecs.lNodeType[key] = {};
        }
        Object.assign(combinedSpecs.lNodeType[key], value);
      });

      // Merge doType
      Object.entries(specs.doType).forEach(([key, value]) => {
        if (!combinedSpecs.doType[key]) {
          combinedSpecs.doType[key] = {};
        }
        Object.assign(combinedSpecs.doType[key], value);
      });

      // Merge daType
      Object.entries(specs.daType).forEach(([key, value]) => {
        if (!combinedSpecs.daType[key]) {
          combinedSpecs.daType[key] = {};
        }
        Object.assign(combinedSpecs.daType[key], value);
      });

      // Merge enumType
      Object.entries(specs.enumType).forEach(([key, value]) => {
        if (!combinedSpecs.enumType[key]) {
          combinedSpecs.enumType[key] = {};
        }
        Object.assign(combinedSpecs.enumType[key], value);
      });
    });

    return combinedSpecs;
  }

}
