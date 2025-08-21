import { DAType, DODetails, DOType, LNodeTypeDetails } from '../domain';
import { IStandardProviderService } from './standardProvider.service';

export interface IDefaultGeneratorService {
  generateDefaultLNodeType(lnClass: string, desc: string | undefined): LNodeTypeDetails | undefined
  generateDefaultDOType(id: string | undefined, cdc: string): DOType | undefined
  generateDefaultDAType(id: string | undefined, cdc: string, name: string): DAType | undefined
  generateDefaultDO(lnClass: string, name: string): DODetails | undefined
}

export class DefaultGeneratorService implements IDefaultGeneratorService {
  constructor(private readonly standardProvider: IStandardProviderService) {
  }

  // ##### Types #####

  generateDefaultLNodeType(lnClass: string, desc: string | undefined = undefined): LNodeTypeDetails {
    const lnClassDefinition = this.standardProvider.getLNodeTypeStandard(lnClass);
    if(!lnClassDefinition) return undefined;

    const dataObjects: DODetails[] = Object.values(lnClassDefinition)
      .map(doDefinition => this.generateDefaultDO(lnClass, doDefinition.name))
      .filter(Boolean) as DODetails[];

    return { id: undefined, lnClass: lnClass, desc, dataObjects: dataObjects };
  }

  generateDefaultDOType(id: string | undefined, cdc: string): DOType {
    return undefined;
  }

  generateDefaultDAType(id: string | undefined, cdc: string, name: string): DAType {
    return undefined;
  }

  // ##### Children #####

  generateDefaultDO(lnClass: string, name: string): DODetails {
    const lnClassDefinition = this.standardProvider.getLNodeTypeStandard(lnClass);
    const doDefinition = lnClassDefinition?.[name];
    if (!doDefinition || doDefinition.tagName !== "DataObject") return undefined;
    return { name: name, type: '', metadata: {isMandatory: doDefinition.mandatory ?? false, isConfigured: false}, cdc: doDefinition.type };
  }

}
