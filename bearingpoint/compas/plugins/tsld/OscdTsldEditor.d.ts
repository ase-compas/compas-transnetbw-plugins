import { default as Cytoscape } from 'cytoscape';
import { LitElement, TemplateResult } from 'lit';

export default class OscdTsldEditor extends LitElement {
    static styles: import('lit').CSSResult;
    constructor();
    doc: XMLDocument;
    header: string;
    cy: Cytoscape.Core | undefined;
    namespace: string;
    static getIcon(condEq: string): TemplateResult;
    protected firstUpdated(): void;
    initializeCytoscape(): void;
    createNodesEdges(): {
        nodes: Cytoscape.NodeDefinition[];
        edges: Cytoscape.EdgeDefinition[];
    };
    saveIEDPositions(): void;
    static createIEDDict(nodeListLNode: NodeListOf<Element>, nodeListIED: NodeListOf<Element>): Record<string, string[]>;
    static createLDDict(nodeListLNode: NodeListOf<Element>, nodeListIED: NodeListOf<Element>): Record<string, string[]>;
    static lookupBaseX(nodeListCE: NodeListOf<Element>, nms: string | null, offsetX: number, furthestIedX: number): number;
    static findCordAttribute(substationElement: Element): string;
    render(): TemplateResult;
}
