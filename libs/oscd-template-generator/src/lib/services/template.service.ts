import { TemplateStore } from '../store/'
import { type SimpleLogicalNodeTypeListItem } from '../domain';

export class TemplateService {
  private static instance: TemplateService;
  private readonly templateStore: TemplateStore;

  private constructor() {
    this.templateStore = TemplateStore.getInstance();
  }

  public static getInstance(): TemplateService {
    if (!TemplateService.instance) {
      TemplateService.instance = new TemplateService();
    }
    return TemplateService.instance;
  }

  private get doc(): XMLDocument {
    const doc = this.templateStore.getDoc();
    if (!doc) throw new Error('No XMLDocument set in TemplateStore.');
    return doc;
  }

  public getAllLogicalNodeTypes(): SimpleLogicalNodeTypeListItem[]{
    const result: SimpleLogicalNodeTypeListItem[] = [];
    const dataTypeTemplates = this.doc.querySelector('DataTypeTemplates');
    if (!dataTypeTemplates) return result;

    const lNodeTypes = dataTypeTemplates.querySelectorAll('LNodeType');
    lNodeTypes.forEach(lNodeType => {
      const id = lNodeType.getAttribute('id') || '';
      const refCount = this.doc.querySelectorAll(`[lnType="${id}"]`).length;
      result.push({
        id: id,
        lnClass: lNodeType.getAttribute('lnClass') || '',
        references: refCount
      });
    });

    return result;
  }
}
