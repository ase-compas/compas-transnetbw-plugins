import {
  LNodeTypeSpecification,
  TypeSpecification,
} from '../domain';
import { cdcData, lnClassData } from '../../data/nsdToJson/testNsdJson';
import { DataTypeKind } from '../domain';

export interface ITypeSpecificationService {
  /**
   * Retrieves the type specification for a given data type and ID.
   * @param typeKind The type of data to search for.
   * @param instanceType The ID of type of the data type, e.g. cdc of DataObject Types and lnClass for LNodeTypes.
   * @returns The type specification or null if not found.
   */
  getTypeSpecification(
    typeKind: DataTypeKind,
    instanceType: string
  ): TypeSpecification | null;

  /**
   * Retrieves the LNodeType specification for a given lnClass.
   * @param lnClass The lnClass of the LNodeType.
   * @returns The LNodeType specification or null if not found.
   */
  getLNodeTypeSpecification(lnClass: string): LNodeTypeSpecification | null;

  /**
   * Retrieves the DOType specification for a given cdc.
   * @param cdc
   */
  getDOTypeSpecification?(cdc: string): TypeSpecification | null;
}

interface SclLibSpecsSchema {
  tagName: string;
  name: string;
  presCond: 'M' | 'C' | 'O';
  mandatory?: boolean;
  type?: string;
  typeKind?: string;
}

export class TypeSpecificationService implements ITypeSpecificationService {
  getTypeSpecification(
    typeKind: DataTypeKind,
    instanceType: string
  ): TypeSpecification | null {
    if (typeKind === DataTypeKind.LNodeType) {
      return this.getLNodeTypeSpecification(instanceType);
    } else if (typeKind === DataTypeKind.DOType) {
      return this.getDOTypeSpecification(instanceType);
    }
    return null;
  }

  getLNodeTypeSpecification(lnClass: string): LNodeTypeSpecification | null {
    const classData = lnClassData[lnClass];
    if (!classData) return null;
    return Object.values(classData).map((child: SclLibSpecsSchema) => ({
      name: child.name,
      tagName: child.tagName,
      isMandatory: child.presCond === 'M' || child.mandatory === true,
      requiresReference: true,
      objectType: child.type,
      refTypeKind: DataTypeKind.DOType,
    }));
  }

  getDOTypeSpecification(cdc: string): TypeSpecification | null {
    const cdcSpec = cdcData[cdc]
    if(!cdcSpec) return null;


    return Object.values(cdcSpec).map((child: SclLibSpecsSchema) => {
      let refTypeKind: DataTypeKind | undefined = undefined;
      if(child.tagName === 'SDO') {
        refTypeKind = DataTypeKind.DOType;
      } else if(child?.typeKind === 'CONSTRUCTED') {
       refTypeKind = DataTypeKind.DAType;
      } else if (child?.typeKind === 'ENUMERATED') {
        refTypeKind = DataTypeKind.EnumType;
      }

      return {
        name: child.name,
        tagName: child.tagName,
        isMandatory: child.presCond === 'M' || child.mandatory === true,
        requiresReference: child.tagName === 'SDO' || child.typeKind === 'CONSTRUCTED' || child.typeKind === 'ENUMERATED',
        objectType: child.type,
        refTypeKind: refTypeKind,
      }
    });
  }
}
