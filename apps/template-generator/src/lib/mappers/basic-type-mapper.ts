import { BasicType, BasicTypes, DataTypeKind, DataTypes, DAType, DOType, EnumType, LNodeType } from '../domain';

export class BasicTypeMapper {
  static mapLNodeTypeToBasicType(lNodeType: LNodeType): BasicType {
    return {
      id: lNodeType.id,
      typeKind: DataTypeKind.LNodeType,
      instanceType: lNodeType.lnClass,
      references: lNodeType.children ? lNodeType.children.length : 0,
    };
  }

  static mapDOTypeToBasicType(doType: DOType): BasicType {
    return {
      id: doType.id,
      typeKind: DataTypeKind.DOType,
      instanceType: doType.cdc,
      references: doType.children.length,
    };
  }

  static mapDATypeToBasicType(daType: DAType): BasicType {
    return {
      id: daType.id,
      typeKind: DataTypeKind.DAType,
      references: daType.children ? daType.children.length : 0,
    };
  }

  static mapEnumTypeToBasicType(enumType: EnumType): BasicType {
    return {
      id: enumType.id,
      typeKind: DataTypeKind.EnumType,
      references: enumType.children ? enumType.children.length : 0,
    };
  }

  static mapDataTypesToBasicTypes(dataTypes: DataTypes): BasicTypes {
    return {
      lNodeTypes: dataTypes.lNodeTypes.map(this.mapLNodeTypeToBasicType),
      dataObjectTypes: dataTypes.dataObjectTypes.map(this.mapDOTypeToBasicType),
      dataAttributeTypes: dataTypes.dataAttributeTypes.map(this.mapDATypeToBasicType),
      enumTypes: dataTypes.enumTypes.map(this.mapEnumTypeToBasicType),
    };
  }
}
