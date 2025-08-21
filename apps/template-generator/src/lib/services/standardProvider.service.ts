export interface StandardNode {
  tagName: string;
  name: string;
  type?: string;
  typeKind?: string;
  mandatory?: boolean;
  children?: Record<string, StandardNode>;
  descID?: string;
  [key: string]: any; // additional metadata
}

export interface IStandardProviderService {
  getDefinitionFor(path: string[]): StandardNode | undefined;

  getLNodeTypeStandard(
    lnClass: string
  ): Record<string, StandardNode> | undefined;

  getCcdStandard(cdc: string): Record<string, StandardNode> | undefined;
}

export class StandardProviderService implements IStandardProviderService {
  constructor(
    private readonly lnClassData: Record<string, StandardNode>,
    private readonly cdcData: Record<string, StandardNode>
  ) {}

  getDefinitionFor(path: string[]): StandardNode | undefined {
    if (!path || path.length === 0) return undefined;

    let currentNode: StandardNode | undefined = this.lnClassData[path[0]];
    if (!currentNode) return undefined;

    for (let i = 1; i < path.length; i++) {
      if (!currentNode.children || !currentNode.children[path[i]]) {
        return undefined;
      }
      currentNode = currentNode.children[path[i]];
    }

    return currentNode;
  }

  getLNodeTypeStandard(
    lnClass: string
  ): Record<string, StandardNode> | undefined {
    return this.lnClassData[lnClass];
  }

  getCcdStandard(cdc: string): Record<string, StandardNode> | undefined {
    return this.cdcData[cdc];
  }
}
