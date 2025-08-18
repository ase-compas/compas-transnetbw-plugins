import { DataObjectTypeService, DataAttributeTypeService, EnumTypeService } from './';
import { DA, DataTypes, DAType, DO, DOType, EnumType, SDO } from '../domain';
import { cdcData } from '../../data/nsdToJson/testNsdJson';
import { OscdDefaultTypeService } from './oscdDefaultType.service';

export class ReferenceAssignmentService {
  constructor(
    private dataObjectTypeService: DataObjectTypeService,
    private dataAttributeTypeService: DataAttributeTypeService,
    private enumTypeService: EnumTypeService,
    private defaultTypeService: OscdDefaultTypeService
  ) {}

  getAssignableTypesForDOType(
    sdoRefs: SDO[],
    daRefs: DA[],
    cdc?: string
  ): DataTypes {
    const compatibleDOTypes = this.getCompatibleDOTypesForSDORefs(sdoRefs, cdc);
    const compatibleDATypes = this.getCompatibleDATypesForDARefs(daRefs, cdc);
    const compatibleEnumTypes = this.getCompatibleEnumTypesForDARefs(daRefs, cdc);

    return {
      dataObjectTypes: compatibleDOTypes,
      dataAttributeTypes: compatibleDATypes,
      enumTypes: compatibleEnumTypes
    };
  }

  canAssignDOTypeToSDOReference(reference: SDO, doType: DOType, cdc?: string): boolean {
    if (!reference || !doType) return false;

    const referenceCdc = this.getCDCForSDO(reference, cdc);
    if (!referenceCdc) return true;
    const doTypeCdc = doType.cdc;

    return referenceCdc && doTypeCdc && referenceCdc === doTypeCdc;
  }

  canAssignDATypeToDAReference(reference: DA, daType: DAType, cdc?: string): boolean {
    if (!reference || !daType) return false;
    return true;
  }

  canAssignEnumTypeToDAReference(reference: DA, enumType: EnumType, cdc?: string): boolean {
    if (!reference || !enumType) return false;

    const referenceCdc = cdcData[cdc]?.[reference.name];
    if(!referenceCdc) return true;
    return this.defaultTypeService.enumTypeMatchesStandard(referenceCdc, enumType);
  }

  // -----------------------
  // Private helpers
  // -----------------------
  private getCompatibleDOTypesForSDORefs(sdoRefs: SDO[], cdc?: string): DOType[] {
    if (!sdoRefs || sdoRefs.length === 0) return [];

    if (!cdc) return this.dataObjectTypeService.findAll();

    const cdcs = this.getValidCDCsForSDORefs(sdoRefs, cdc);
    return this.dataObjectTypeService.findAllByCdc(cdcs);
  }

  private getCompatibleDATypesForDARefs(daRefs: DA[], cdc?: string): DAType[] {
    const structDARefs = daRefs.filter(da => da.bType === 'Struct');
    if (!structDARefs || structDARefs.length === 0) return [];

    if( !cdc || !cdcData[cdc]) return this.dataAttributeTypeService.findAll();


    return this.dataAttributeTypeService.findAll().filter(daType => {
      return structDARefs.some(da =>this.defaultTypeService.dataAttributeTypeMatchesStandard(cdc ? cdcData[cdc]?.[da.name] : undefined, daType));
    });
  }

  private getCompatibleEnumTypesForDARefs(daRefs: DA[], cdc?: string): EnumType[] {
    if (!daRefs || daRefs.length === 0) return this.enumTypeService.findAll();

    if( !cdc || !cdcData[cdc]) return this.enumTypeService.findAll();

    return this.enumTypeService.findAll().filter(enumType =>
      daRefs.some(da =>
        this.defaultTypeService.enumTypeMatchesStandard(cdc ? cdcData[cdc]?.[da.name] : undefined, enumType)
      )
    );
  }

  private getCDCForSDO(sdo: SDO, cdc: string): string {
    return cdcData[cdc]?.[sdo.name]?.type ?? '';
  }

  private getCDCForDO(doRef: DO, cdc: string): string {
    return cdcData[cdc]?.[doRef.name]?.type ?? '';
  }

  private getValidCDCsForSDORefs(sdoRefs: SDO[], cdc?: string): string[] {
    return [...new Set(sdoRefs.map(s => this.getCDCForSDO(s, cdc)).filter(Boolean))];
  }
}
