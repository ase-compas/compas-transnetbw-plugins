import {css, html, LitElement, TemplateResult} from 'lit';
import {property} from 'lit/decorators.js';
import Cytoscape, {
  ElementsDefinition,
  NodeDefinition,
  EdgeDefinition,
} from 'cytoscape';
import {
  circuitBreakerIcon,
  earthSwitchIcon,
  voltageTransformerIcon,
  currentTransformerIcon,
  disconnectorIcon,
  generalConductingEquipmentIcon,
} from './icons';

const typeIcons: Partial<Record<string, TemplateResult>> = {
  CBR: circuitBreakerIcon,
  DIS: disconnectorIcon,
  CTR: currentTransformerIcon,
  VTR: voltageTransformerIcon,
  ERS: earthSwitchIcon,
};

export default class OscdTsldEditor extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--oscd-tsld-editor-text-color, #000);
    }

  ,
  #cy {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
  }
  `;

  constructor() {
    super();
  }

  @property({type: Object})
  doc!: XMLDocument;

  @property({type: String}) header = 'oscd-tsld-editor';

  @property() cy: Cytoscape.Core | undefined;
  @property({type: String}) namespace = '';

  static getIcon(condEq: string) {
    return typeIcons[condEq] ?? generalConductingEquipmentIcon;
  }

  protected override firstUpdated() {
    this.initializeCytoscape();
  }

  initializeCytoscape(): void {
    const graph = this.createNodesEdges();
    const {nodes} = graph;
    const {edges} = graph;

    this.cy = Cytoscape({
      container: this.shadowRoot?.getElementById('cy') as HTMLElement,
      elements: {
        nodes,
        edges,
      } as ElementsDefinition,
      style: [
        {
          selector: 'node',
          style: {
            label: 'data(label)',
            'text-valign': 'top',
            'text-halign': 'center',
          },
        },
        {
          selector: 'node[backgroundImage]',
          style: {
            shape: 'rectangle',
            'background-image': 'data(backgroundImage)',
            'background-opacity': 0,
            'background-height': '42px',
            'background-width': '42px',
            'text-valign': 'top',
            'text-halign': 'left',
          },
        },
        {
          selector: 'node[nodeType = "cnNode"]',
          style: {
            height: '10px',
            width: '10px',
            'background-color': '#000',
          },
        },
        {
          selector: 'node[nodeType = "iedNode"]',
          style: {
            shape: 'rectangle',
          },
        },
        {
          selector: 'node[nodeType = "iedLnNode"]',
          style: {
            shape: 'rectangle',
            height: '30px',
            width: '80px',
            'text-valign': 'center',
            'text-halign': 'center',
          },
        },
        {
          selector: 'edge',
          style: {
            width: 4,
            'line-color': '#000',
          },
        },
        {
          selector: 'edge[type = "ceEdge"]',
          style: {
            width: 4,
            'curve-style': 'taxi',
            'line-style': 'solid',
            'line-color': '#000',
            'source-endpoint': 'outside-to-node',
            'target-endpoint': 'outside-to-node',
          },
        },
        {
          selector: 'edge[type = "busBarEdge"]',
          style: {
            width: 4,
            'curve-style': 'taxi',
            'line-style': 'solid',
            'line-color': '#000',
            'taxi-turn': '0%',
          },
        },
        {
          selector: 'edge[type = "iedEdge"]',
          style: {
            width: 4,
            'curve-style': 'taxi',
            'line-style': 'dashed',
            'line-color': '#000',
            'taxi-direction': 'horizontal',
          },
        },
      ],
      layout: {
        name: 'preset',
      },
    });

    this.cy.on('free', 'node', (item => {
        const node = item.target

        if (node.data('nodeType') === 'iedNode') {
          this.saveIEDPositions()
        }
      })
    )
  }

  createNodesEdges() {
    const substations = this.doc.querySelectorAll('Substation');
    const nodeListIED = this.doc.querySelectorAll('IED');

    const substationElement = substations.item(0);
    const nsAttribute = OscdTsldEditor.findCordAttribute(substationElement);
    this.namespace = this.doc.lookupNamespaceURI(nsAttribute) as string;
    const nms = this.namespace

    const nodes: NodeDefinition[] = [];
    const edges: EdgeDefinition[] = [];

    let offsetX = 0;
    let offsetY = 0;
    substations.forEach(substationNode => {
      const substationName = substationNode.getAttribute('name') as string;
      nodes.push({
        data: {
          id: substationName,
          label: substationName,
          nodeType: 'sbsNode',
        },
        locked: true
      });

      const sbsX: number = substationNode.getAttributeNS(
        nms,
        'x',
      ) as unknown as number;
      const sbsY: number = substationNode.getAttributeNS(
        nms,
        'y',
      ) as unknown as number;

      offsetX += +sbsX;
      offsetY += +sbsY;

      const voltageLevelList = substationNode.querySelectorAll('VoltageLevel');
      voltageLevelList.forEach(voltageLevelNode => {
        let baseY = 0;

        const voltageLevelName = voltageLevelNode.getAttribute(
          'name',
        ) as string;
        const vlX: number = voltageLevelNode.getAttributeNS(
          nms,
          'x',
        ) as unknown as number;
        const vlY: number = voltageLevelNode.getAttributeNS(
          nms,
          'y',
        ) as unknown as number;

        const bayList = voltageLevelNode.querySelectorAll('Bay');
        if (bayList && bayList.length === 0) {
          const xCordVL = (+offsetX + +vlX) * 50;
          const yCordVL = (+offsetY + +vlY) * 50;

          nodes.push({
            data: {
              id: voltageLevelName,
              label: voltageLevelName,
              parent: substationName,
              nodeType: 'vlNode',
            },
            position: {x: xCordVL, y: yCordVL},
            locked: true
          });
        } else {
          nodes.push({
            data: {
              id: voltageLevelName,
              label: voltageLevelName,
              parent: substationName,
              nodeType: 'vlNode',
            },
            locked: true
          });
        }

        offsetX += +vlX;
        offsetY += +vlY;
        let busBarName: string;
        bayList.forEach((bayNode, indexBay) => {
          const bayName = bayNode.getAttribute('name') as string;
          const nodeListCE = bayNode.querySelectorAll('ConductingEquipment');
          const bayX = bayNode.getAttributeNS(nms, 'x') as unknown as number;
          const bayY = bayNode.getAttributeNS(nms, 'y') as unknown as number;

          offsetX += +bayX;
          offsetY += +bayY;
          let furthestIedX = 0;
          let furthestCnX = 0;

          const baseX = OscdTsldEditor.lookupBaseX(
            nodeListCE,
            nms,
            offsetX,
            furthestIedX,
          );
          if (nodeListCE && nodeListCE.length === 0) {
            const xCordBay = offsetX + bayX + furthestIedX + indexBay * 100;

            nodes.push({
              data: {
                id: bayName,
                label: bayName,
                parent: voltageLevelName,
                nodeType: 'bayNode',
              },
              locked: true,
              position: {x: xCordBay, y: baseY},
            });
          } else {
            nodes.push({
              data: {
                id: bayName,
                label: bayName,
                parent: voltageLevelName,
                nodeType: 'bayNode',
              },
              locked: true
            });
          }

          if (bayName.toLowerCase().includes('bb')) {
            const busBar = bayNode.querySelectorAll('ConnectivityNode');

            busBar.forEach(busBarNode => {
              let xCordBB = bayNode.getAttributeNS(
                nms,
                'x',
              ) as unknown as number;
              let yCordBB = bayNode.getAttributeNS(
                nms,
                'y',
              ) as unknown as number;
              const busBarId = busBarNode.getAttribute('name') as string;
              xCordBB = (+xCordBB + +offsetX) * 50;
              yCordBB = (+yCordBB + +offsetY) * 50;

              nodes.push({
                data: {
                  id: busBarId,
                  label: '',
                  parent: bayName,
                  nodeType: 'cnNode',
                },
                position: {x: xCordBB, y: yCordBB},
                locked: true
              });

              busBarName = busBarId;
            });

            return;
          }

          const grounds: Record<string, number[]> = {};
          const busBarConnectorCoordinates: number[] = [];
          const busBarConnectorIds: string[] = [];
          nodeListCE.forEach(ceNode => {
            const nodeId = `${ceNode.getAttribute('name')}_${bayName}`;
            const nodeName = ceNode.getAttribute('name') as string;
            const desc = ceNode.getAttribute('type') as string;
            const icon = OscdTsldEditor.getIcon(desc);

            let iconString: string;
            let xCordCe = ceNode.getAttributeNS(nms, 'x') as unknown as number;
            let yCordCe = ceNode.getAttributeNS(nms, 'y') as unknown as number;
            xCordCe = (+xCordCe + +offsetX) * 50 + furthestIedX;
            yCordCe = (+yCordCe + +offsetY) * 50;

            if (xCordCe === baseX && baseY === 0) {
              baseY = yCordCe;
            } else if (baseY > yCordCe) {
              baseY = yCordCe;
            }

            if (baseX > xCordCe) {
              const rotateDegree = 90;
              iconString = `data:image/svg+xml;utf8,${encodeURIComponent(
                // SVGs need explicit height and with for zoom to work
                icon.strings[0]
                  .replace(
                    '<svg',
                    `<svg transform="rotate(${rotateDegree})" width="24" height="24"`,
                  )
                  .replace('\n', ''),
              )}`;
            } else if (baseX < xCordCe) {
              const rotateDegree = 90;
              iconString = `data:image/svg+xml;utf8,${encodeURIComponent(
                // SVGs need explicit height and with for zoom to work
                icon.strings[0]
                  .replace(
                    '<svg',
                    `<svg transform="rotate(${rotateDegree})" width="24" height="24"`,
                  )
                  .replace('\n', ''),
              )}`;
            } else {
              const rotateDegree = 0;
              iconString = `data:image/svg+xml;utf8,${encodeURIComponent(
                // SVGs need explicit height and with for zoom to work
                icon.strings[0]
                  .replace(
                    '<svg',
                    `<svg transform="rotate(${rotateDegree})" width="24" height="24"`,
                  )
                  .replace('\n', ''),
              )}`;
            }

            nodes.push({
              data: {
                id: nodeId,
                label: nodeName,
                backgroundImage: iconString,
                parent: bayName,
                nodeType: 'ceNode',
              },
              position: {x: xCordCe, y: yCordCe},
              locked: true
            });

            const edgeList = ceNode.querySelectorAll('Terminal');
            edgeList.forEach(edge => {
              let targetId = edge.getAttribute('cNodeName') as string;

              if (targetId === 'grounded') {
                targetId = `${targetId}-${Object.keys(grounds).length}`;

                if (baseX < xCordCe) {
                  xCordCe += 50;
                } else if (baseX > xCordCe) {
                  xCordCe -= 50;
                } else {
                  yCordCe += 50;
                }

                grounds[targetId] = [xCordCe, yCordCe];

                edges.push({
                  data: {source: nodeId, target: targetId, type: 'ceEdge'},
                });
              } else if (targetId.includes('Busbar')) {
                let busBarY = ceNode.getAttributeNS(
                  nms,
                  'y',
                ) as unknown as number;
                busBarY = +busBarY + +offsetY;
                busBarConnectorCoordinates.push(busBarY);
                busBarConnectorIds.push(nodeId);
              } else {
                edges.push({
                  data: {source: nodeId, target: targetId, type: 'ceEdge'},
                });
              }
            });
          });

          let smallestY = 0;
          busBarConnectorCoordinates.forEach(connector => {
            if (+connector * 50 < smallestY || smallestY === 0) {
              smallestY = +connector * 50;
            }
          });

          nodes.push({
            data: {
              id: `busBarConnector-${bayName}`,
              label: '',
              nodeType: 'cnNode',
              parent: bayName,
            },
            position: {x: baseX, y: smallestY},
            locked: true
          });

          busBarConnectorIds.forEach(connectorId => {
            edges.push({
              data: {
                source: `busBarConnector-${bayName}`,
                target: connectorId,
                type: 'ceEdge',
              },
            });
          });
          edges.push({
            data: {
              source: `busBarConnector-${bayName}`,
              target: busBarName,
              type: 'busBarEdge',
            },
          });

          const nodeListCN = bayNode.querySelectorAll('ConnectivityNode');
          nodeListCN.forEach(cnNode => {
            const cnId = cnNode.getAttribute('name') as string;

            let yCordCN = 0;
            let xCordCN = 0;

            if (cnId !== 'grounded') {
              const coordinatesX: string[] = [];
              const coordinatesY: string[] = [];
              bayNode.querySelectorAll('Terminal').forEach(terminal => {
                if (terminal.getAttribute('cNodeName') === cnId) {
                  const parentNode = terminal.parentElement;

                  if (parentNode === null) {
                    throw new Error();
                  } else {
                    const x = parentNode.getAttributeNS(nms, 'x') as string;
                    const y = parentNode.getAttributeNS(nms, 'y') as string;
                    coordinatesX.push(x);
                    coordinatesY.push(y);
                  }
                }
              });

              if (coordinatesX.length > 2) {
                xCordCN += +coordinatesX.filter((item, ind) =>
                  coordinatesX.some(
                    (elem, idx) => elem === item && idx !== ind,
                  ),
                )[0];
                coordinatesY.forEach(i => {
                  yCordCN += +i;
                });
              } else {
                coordinatesX.forEach(i => {
                  xCordCN += +i;
                });
                coordinatesY.forEach(i => {
                  yCordCN += +i;
                });
                xCordCN /= coordinatesX.length;
              }

              yCordCN /= coordinatesY.length;

              xCordCN = (+xCordCN + +offsetX) * 50;
              yCordCN = (+yCordCN + +offsetY) * 50;

              if (xCordCN > furthestCnX) {
                furthestCnX = xCordCN;
              }

              nodes.push({
                data: {
                  id: cnId,
                  label: '',
                  nodeType: 'cnNode',
                  parent: bayName,
                },
                position: {x: xCordCN, y: yCordCN},
                locked: true
              });
            } else {
              Object.keys(grounds).forEach(key => {
                nodes.push({
                  data: {
                    id: key,
                    label: '',
                    nodeType: 'cnNode',
                    parent: bayName,
                  },
                  position: {
                    x: grounds[key].at(0) as number,
                    y: grounds[key].at(1) as number,
                  },
                  locked: true
                });
                if (grounds[key][0] > furthestCnX) {
                  furthestCnX = grounds[key].at(0) as number;
                }
              });
            }
          });

          furthestCnX += 300;
          const nodeListLNode = bayNode.querySelectorAll('LNode');
          const nodeDictIED = OscdTsldEditor.createIEDDict(
            nodeListLNode,
            nodeListIED,
          );
          const nodeDictLD = OscdTsldEditor.createLDDict(
            nodeListLNode,
            nodeListIED,
          );

          Object.keys(nodeDictIED).forEach((iedKey, indexIED) => {
            nodes.push({
              data: {
                id: iedKey,
                label: iedKey,
                nodeType: 'iedNode',
                parent: bayName,
              },
            });

            nodeDictIED[iedKey].forEach((nodeLD, indexLD) => {
              nodes.push({
                data: {
                  id: nodeLD,
                  label: nodeLD,
                  nodeType: 'iedNode',
                  parent: iedKey,
                },
              });

              nodeListIED.forEach(iedNode => {
                if (iedNode.getAttribute('name') === iedKey) {
                  const nodeListLD = iedNode.querySelectorAll('LDevice');
                  nodeListLD.forEach(ldNode => {
                    if (Object.keys(nodeDictLD).includes(nodeLD)) {
                      nodeDictLD[nodeLD].forEach((l, indexL) => {
                        const nodeListLN = ldNode.querySelectorAll('LN');
                        nodeListLN.forEach(lnNode => {
                          const nameLN = `${lnNode.getAttribute('lnClass')} ${lnNode.getAttribute('inst')}`;
                          if (l === nameLN) {
                            let xCordLN: number;
                            let yCordLN: number;
                            if (
                              lnNode.getAttributeNS(nms, 'x') !== null &&
                              lnNode.getAttributeNS(nms, 'y') !== null
                            ) {
                              xCordLN = lnNode.getAttributeNS(
                                nms,
                                'x',
                              ) as unknown as number;
                              xCordLN = +xCordLN;
                              yCordLN = lnNode.getAttributeNS(
                                nms,
                                'y',
                              ) as unknown as number;
                              yCordLN = +yCordLN;
                            } else {
                              xCordLN = furthestCnX;
                              yCordLN =
                                baseY +
                                indexL * 30 +
                                indexLD * 70 +
                                indexIED * 200;
                            }

                            if (furthestIedX < xCordLN) {
                              furthestIedX = xCordLN;
                            }

                            nodes.push({
                              data: {
                                id: `${nameLN}-${nodeLD}`,
                                label: nameLN,
                                nodeType: 'iedLnNode',
                                parent: nodeLD,
                              },
                              position: {x: xCordLN, y: yCordLN},
                            });
                          }
                        });
                      });
                    }
                  });
                }
              });
            });
          });

          furthestIedX += 200;
          nodeListLNode.forEach(lnNode => {
            const lnNodeParent = lnNode.parentElement as HTMLElement;

            const nodeLnName = `${lnNode.getAttribute('lnClass')} ${lnNode.getAttribute('lnInst')}`;

            const nodeListLNE = this.doc.querySelectorAll('LN');
            nodeListLNE.forEach(lneNode => {
              const nameLNE = `${lneNode.getAttribute('lnClass')} ${lneNode.getAttribute('inst')}`;

              if (nameLNE === nodeLnName) {
                const parentLD = lneNode.parentElement as HTMLElement;
                const parentName = parentLD.getAttribute('inst') as string;

                const targetLN = `${nodeLnName}-${parentName}`;
                const sourceCE = `${lnNodeParent.getAttribute('name')}_${bayName}`;
                edges.push({
                  data: {
                    source: sourceCE,
                    target: targetLN,
                    type: 'iedEdge',
                  },
                });
              }
            });
          });
        });
      });
    });

    return {nodes, edges};
  }

  saveIEDPositions() {
    this.cy?.nodes().forEach((node) => {
      if (node.data('nodeType') === 'iedLnNode') {
        const position = node.position()
        const id = node.data('id');
        const ld = id.split('-')[1]
        const name = id.split('-')[0]

        const iedList = this.doc.querySelectorAll('IED');
        iedList.forEach((ied) => {
          const ldList = ied.querySelectorAll('LDevice');
          ldList.forEach((ldevice) => {
            const lnList = ldevice.querySelectorAll('LN');
            const ldname = ldevice.getAttribute('inst');
            if (ld === ldname) {
              lnList.forEach((ln) => {
                const lnName = `${ln.getAttribute('lnClass')} ${ln.getAttribute('inst')}`;
                if (name === lnName) {
                  ln.setAttributeNS(this.namespace, 'x', `${position.x}`)
                  ln.setAttributeNS(this.namespace, 'y', `${position.y}`)
                }
              });
            }
          });
        });

      }
    });
  }

  static createIEDDict(
    nodeListLNode: NodeListOf<Element>,
    nodeListIED: NodeListOf<Element>,
  ) {
    const iedDict: Record<string, string[]> = {};

    nodeListLNode.forEach(lnNode => {
      const iedName = lnNode.getAttribute('iedName') as string;
      const lnName = `${lnNode.getAttribute('lnClass')} ${lnNode.getAttribute('lnInst')}`;

      if (Object.keys(iedDict).includes(iedName)) {
        nodeListIED.forEach(iedNode => {
          if (iedNode.getAttribute('name') === iedName) {
            const nodeListLD = iedNode.querySelectorAll('LDevice');
            nodeListLD.forEach(ldNode => {
              const ldName = ldNode.getAttribute('inst') as string;
              const nodeListLN = ldNode.querySelectorAll('LN');
              nodeListLN.forEach(ln => {
                if (
                  `${ln.getAttribute('lnClass')} ${ln.getAttribute('inst')}` ===
                  lnName &&
                  !iedDict[iedName].includes(ldName)
                ) {
                  iedDict[iedName].push(ldName);
                }
              });
            });
          }
        });
      } else {
        const ldList: string[] = [];
        nodeListIED.forEach(iedNode => {
          if (iedNode.getAttribute('name') === iedName) {
            const nodeListLD = iedNode.querySelectorAll('LDevice');
            nodeListLD.forEach(ldNode => {
              const ldName = ldNode.getAttribute('inst') as string;
              const nodeListLN = ldNode.querySelectorAll('LN');
              nodeListLN.forEach(ln => {
                if (
                  `${ln.getAttribute('lnClass')} ${ln.getAttribute('inst')}` ===
                  lnName &&
                  !ldList.includes(ldName)
                ) {
                  ldList.push(ldName);
                }
              });
            });
          }
        });
        iedDict[iedName] = ldList;
      }
    });

    return iedDict;
  }

  static createLDDict(
    nodeListLNode: NodeListOf<Element>,
    nodeListIED: NodeListOf<Element>,
  ): Record<string, string[]> {
    const ldDict: Record<string, string[]> = {};

    nodeListLNode.forEach(lnNode => {
      const iedName = lnNode.getAttribute('iedName') as string;
      const lnName = `${lnNode.getAttribute('lnClass')} ${lnNode.getAttribute('lnInst')}`;

      nodeListIED.forEach(ied => {
        const nameIED = ied.getAttribute('name') as string;
        if (nameIED === iedName) {
          const ldList = ied.querySelectorAll('LDevice');
          ldList.forEach(ld => {
            const nameLD = ld.getAttribute('inst') as string;
            const lnList = ld.querySelectorAll('LN');

            lnList.forEach(ln => {
              const nameLN = `${ln.getAttribute('lnClass')} ${ln.getAttribute('inst')}`;

              if (nameLN === lnName) {
                if (Object.keys(ldDict).includes(nameLD)) {
                  ldDict[nameLD].push(nameLN);
                } else {
                  ldDict[nameLD] = [nameLN];
                }
              }
            });
          });
        }
      });
    });

    Object.keys(ldDict).forEach(ldKey => {
      ldDict[ldKey].sort();
    });

    return ldDict;
  }

  static lookupBaseX(
    nodeListCE: NodeListOf<Element>,
    nms: string | null,
    offsetX: number,
    furthestIedX: number,
  ): number {
    let baseX: number = 0;
    const coordinateDict: Record<string, string[]> = {};

    nodeListCE.forEach(nodeCE => {
      const currentX = nodeCE.getAttributeNS(nms, 'x') as string;
      const currentName = nodeCE.getAttribute('name') as string;

      if (Object.keys(coordinateDict).includes(currentX)) {
        coordinateDict[currentX].push(currentName);
      } else {
        coordinateDict[currentX] = [currentName];
      }
    });

    let coordinateLength = 0;
    let keyList = Object.keys(coordinateDict) as unknown as number[];
    Object.keys(coordinateDict).forEach(key => {
      if (coordinateLength < coordinateDict[key].length) {
        coordinateLength = coordinateDict[key].length;
        baseX = +key;
      } else if (coordinateLength === coordinateDict[key].length) {
        keyList = keyList.sort();
        const arthMid = (+keyList[0] + +keyList[-1]) / 2;

        let lowestSq = 0;
        keyList.forEach(listKey => {
          if (lowestSq > (+listKey - +arthMid) ** 2) {
            lowestSq = (+listKey - +arthMid) ** 2;
            baseX = +listKey;
          }
        });
      }
    });

    return (+baseX + +offsetX + +furthestIedX) * 50;
  }

  static findCordAttribute(substationElement: Element) {
    const regex = /[se](xy|sld):x|x/y;
    const regexY = /[se](xy|sld):y|y/y;
    const matchx = Array.from(substationElement.attributes).find(i =>
      regex.test(i.name),
    );
    const matchy = Array.from(substationElement.attributes).find(i =>
      regexY.test(i.name),
    );

    if (matchx === undefined || matchy === undefined) {
      throw new Error('one of the x/y attributes is undefined');
    } else {
      return matchx.name.split(':')[0];
    }
  }

  override render(): TemplateResult {
    // full height for canvas minus tab and header height
    return html`
      <p>test</p>
      <div>
        <div
          id="cy"
          style="height: calc(calc(100vh - var(--mdc-tab-height, 48px) - 64px)); position: relative;"
        ></div>
      </div>`;
  }
}

customElements.define('test-component', OscdTsldEditor);
