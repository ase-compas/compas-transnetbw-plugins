import { LNodeTypeSpecification } from '../domain/type-specification.model';
import { lnClassData } from '../../data/nsdToJson/testNsdJson';
import { DataTypeKind, TypeSpecification } from '../domain/core.model';


export interface ITypeSpecificationService {
  /**
   * Retrieves the type specification for a given data type and ID.
   * @param dataType The type of data to search for.
   * @param instanceType The ID of type of the data type, e.g. cdc of DataObjec Types and lnClass for LNodeTypes.
   * @returns The type specification or null if not found.
   */
  getTypeSpecification(typeKind: DataTypeKind, instanceType: string): TypeSpecification | null;

  /**
   * Retrieves the LNodeType specification for a given lnClass.
   * @param lnClass The lnClass of the LNodeType.
   * @returns The LNodeType specification or null if not found.
   */
  getLNodeTypeSpecification(lnClass: string): LNodeTypeSpecification | null;
}

interface SclLibSpecsSchema {
  tagName: string;
  name: string;
  presCond: 'M' | 'C' | 'O';
  mandatory?: boolean;
  type?: string;
}

export class TypeSpecificationService implements ITypeSpecificationService {

  getTypeSpecification(typeKind: DataTypeKind, instanceType: string): TypeSpecification | null {
    if(typeKind === DataTypeKind.LNodeType) {
      return this.getLNodeTypeSpecification(instanceType);
    }
    return null
  }

  getLNodeTypeSpecification(lnClass: string): LNodeTypeSpecification | null {
    const classData = lnClassData[lnClass];
    if(!classData) return null;
    return Object.values(classData).map((child: SclLibSpecsSchema) => ({
      tagName: child.tagName,
      name: child.name,
      isMandatory: child.presCond === 'M' || child.mandatory === true,
      requiredRefType: child.type
    }))
  }
}
