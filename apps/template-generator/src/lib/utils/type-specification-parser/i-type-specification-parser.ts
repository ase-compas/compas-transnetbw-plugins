import { ObjectSpecification } from '../../domain';

export type TypeSpecMap = Record<string, Record<string, ObjectSpecification>>;

export type TypeSpecifications = {
  lNodeType: TypeSpecMap,
  doType: TypeSpecMap,
  daType: TypeSpecMap,
  enumType: TypeSpecMap,
}

export interface ITypeSpecificationParser {
  parse(): TypeSpecifications;
}
