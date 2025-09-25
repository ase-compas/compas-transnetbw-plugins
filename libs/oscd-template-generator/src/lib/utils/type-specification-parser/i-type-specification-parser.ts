import { type ObjectSpecification } from '../../domain';

export type TypeSpecMap = Record<string, Record<string, ObjectSpecification>>;

export type TypeSpecifications = {
  lNodeType: TypeSpecMap,
  doType: TypeSpecMap,
  daType: TypeSpecMap,
  enumType: TypeSpecMap,
}

export interface ITypeSpecificationParser {
  parseFromString(xmlString: string): TypeSpecifications;
  parseFromStrings(xmlStrings: string[]): TypeSpecifications;
  parseFromDocument(xmlStrings: Document): TypeSpecifications;
  parseFromDocuments(xmlStrings: Document[]): TypeSpecifications;
}
