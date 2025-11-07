import { type DefaultReference, type DefaultType  } from '../domain/default.model';
import {
  type LNodeType,
  DataTypeKind,
  type ObjectReference,
  type DOType,
  type DAType,
  type DataTypes, type DataType, type ObjectReferenceDetails, type EnumType
} from '../domain/core.model';

export class DefaultTypeMapper {


  static mapDefaultTypeToDataType(defaultType: DefaultType, objRefDetails: ObjectReferenceDetails[]) {
    if(defaultType.kind === DataTypeKind.LNodeType) {
      return {
        id: defaultType.id,
        lnClass: defaultType.instanceType,
        children: objRefDetails,
      } as LNodeType;
    } else if (defaultType.kind === DataTypeKind.DOType) {
      return {
        id: defaultType.id,
        cdc: defaultType.instanceType,
        children: objRefDetails
      } as DOType;
    } else if (defaultType.kind === DataTypeKind.DAType) {
      return {
        id: defaultType.id,
        instanceType: defaultType.instanceType,
        children: objRefDetails
      } as DAType;
    } else if (defaultType.kind === DataTypeKind.EnumType) {
      return {
        id: defaultType.id,
        instanceType: defaultType.instanceType,
        children: objRefDetails
      } as EnumType;
    }
    throw new Error(`Unsupported DataTypeKind: ${defaultType.kind}`);
  }

  static mapDataTypeToDefaultType(dataType: DataType, typeKind: DataTypeKind): DefaultType {
    if(typeKind === DataTypeKind.LNodeType) {
      return this.mapLNodeTypeToDefaultType(dataType as LNodeType);
    } else if (typeKind === DataTypeKind.DOType) {
      return this.mapDOTypeToDefaultType(dataType as DOType);
    } else if (typeKind === DataTypeKind.DAType) {
      return this.mapDataAttributeToDefaultType(dataType as DAType);
    } else if (typeKind === DataTypeKind.EnumType) {
      return this.mapEnumTypeToDefaultType(dataType as DAType);
    } else {
      throw new Error(`Unsupported DataTypeKind: ${typeKind}`);
    }
  }

  static mapLNodeTypeToDefaultType(lNodeType: LNodeType): DefaultType {
    return {
      id: lNodeType.id,
      kind: DataTypeKind.LNodeType,
      instanceType: lNodeType.lnClass,
      children: DefaultTypeMapper.mapObjRefsToDefaultRefs(lNodeType.children)
    }
  }

  static mapDOTypeToDefaultType(doType: DOType): DefaultType {
    return {
      id: doType.id,
      kind: DataTypeKind.DOType,
      instanceType: doType.cdc,
      children: DefaultTypeMapper.mapObjRefsToDefaultRefs(doType.children)
    }
  }

  static mapDataAttributeToDefaultType(daType: DAType): DefaultType {
    return {
      id: daType.id,
      kind: DataTypeKind.DAType,
      instanceType: daType.instanceType,
      children: DefaultTypeMapper.mapObjRefsToDefaultRefs(daType.children)
    }
  }

  static mapEnumTypeToDefaultType(enumType: DAType): DefaultType {
    return {
      id: enumType.id,
      kind: DataTypeKind.EnumType,
      instanceType: enumType.instanceType,
      children: enumType.children.map(c => ({ name: c.name }))
    }
  }

  static mapDataTypesToDefaultTypes(dataTypes: DataTypes): DefaultType[] {
    const result: DefaultType[] = [];
    dataTypes.lNodeTypes.forEach((node) => {
      result.push(DefaultTypeMapper.mapLNodeTypeToDefaultType(node))
    });

    dataTypes.dataObjectTypes.forEach((dataObject) => {
      result.push(DefaultTypeMapper.mapDOTypeToDefaultType(dataObject));
    });

    dataTypes.dataAttributeTypes.forEach((dataAttribute) => {
      result.push(DefaultTypeMapper.mapDataAttributeToDefaultType(dataAttribute));
    });

    dataTypes.enumTypes.forEach((enumType) => {
      result.push(DefaultTypeMapper.mapEnumTypeToDefaultType(enumType));
    });

    return result;
  }


  static mapObjRefsToDefaultRefs(refs: ObjectReference[]): DefaultReference[] {
    return refs.map(c => ({ name: c.name, typeRef: c.typeRef }))
  }
}
