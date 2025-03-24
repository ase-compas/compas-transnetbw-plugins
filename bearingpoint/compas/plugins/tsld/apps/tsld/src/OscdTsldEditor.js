var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var OscdTsldEditor_exports = {};
__export(OscdTsldEditor_exports, {
  default: () => OscdTsldEditor
});
module.exports = __toCommonJS(OscdTsldEditor_exports);
var import_lit = require("lit");
var import_decorators = require("lit/decorators.js");
var import_cytoscape = __toESM(require("cytoscape"));
var import_icons = require("./icons");
const typeIcons = {
  CBR: import_icons.circuitBreakerIcon,
  DIS: import_icons.disconnectorIcon,
  CTR: import_icons.currentTransformerIcon,
  VTR: import_icons.voltageTransformerIcon,
  ERS: import_icons.earthSwitchIcon
};
const _OscdTsldEditor = class _OscdTsldEditor extends import_lit.LitElement {
  constructor() {
    super();
    this.header = "oscd-tsld-editor";
    this.namespace = "";
  }
  static {
    this.styles = import_lit.css`
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
  }
  static getIcon(condEq) {
    return typeIcons[condEq] ?? import_icons.generalConductingEquipmentIcon;
  }
  firstUpdated() {
    this.initializeCytoscape();
  }
  initializeCytoscape() {
    const graph = this.createNodesEdges();
    const { nodes } = graph;
    const { edges } = graph;
    this.cy = (0, import_cytoscape.default)({
      container: this.shadowRoot?.getElementById("cy"),
      elements: {
        nodes,
        edges
      },
      style: [
        {
          selector: "node",
          style: {
            label: "data(label)",
            "text-valign": "top",
            "text-halign": "center"
          }
        },
        {
          selector: "node[backgroundImage]",
          style: {
            shape: "rectangle",
            "background-image": "data(backgroundImage)",
            "background-opacity": 0,
            "background-height": "42px",
            "background-width": "42px",
            "text-valign": "top",
            "text-halign": "left"
          }
        },
        {
          selector: 'node[nodeType = "cnNode"]',
          style: {
            height: "10px",
            width: "10px",
            "background-color": "#000"
          }
        },
        {
          selector: 'node[nodeType = "iedNode"]',
          style: {
            shape: "rectangle"
          }
        },
        {
          selector: 'node[nodeType = "iedLnNode"]',
          style: {
            shape: "rectangle",
            height: "30px",
            width: "80px",
            "text-valign": "center",
            "text-halign": "center"
          }
        },
        {
          selector: "edge",
          style: {
            width: 4,
            "line-color": "#000"
          }
        },
        {
          selector: 'edge[type = "ceEdge"]',
          style: {
            width: 4,
            "curve-style": "taxi",
            "line-style": "solid",
            "line-color": "#000",
            "source-endpoint": "outside-to-node",
            "target-endpoint": "outside-to-node"
          }
        },
        {
          selector: 'edge[type = "busBarEdge"]',
          style: {
            width: 4,
            "curve-style": "taxi",
            "line-style": "solid",
            "line-color": "#000",
            "taxi-turn": "0%"
          }
        },
        {
          selector: 'edge[type = "iedEdge"]',
          style: {
            width: 4,
            "curve-style": "taxi",
            "line-style": "dashed",
            "line-color": "#000",
            "taxi-direction": "horizontal"
          }
        }
      ],
      layout: {
        name: "preset"
      }
    });
    this.cy.on(
      "free",
      "node",
      (item) => {
        const node = item.target;
        if (node.data("nodeType") === "iedNode") {
          this.saveIEDPositions();
        }
      }
    );
  }
  createNodesEdges() {
    const substations = this.doc.querySelectorAll("Substation");
    const nodeListIED = this.doc.querySelectorAll("IED");
    const substationElement = substations.item(0);
    const nsAttribute = _OscdTsldEditor.findCordAttribute(substationElement);
    this.namespace = this.doc.lookupNamespaceURI(nsAttribute);
    const nms = this.namespace;
    const nodes = [];
    const edges = [];
    let offsetX = 0;
    let offsetY = 0;
    substations.forEach((substationNode) => {
      const substationName = substationNode.getAttribute("name");
      nodes.push({
        data: {
          id: substationName,
          label: substationName,
          nodeType: "sbsNode"
        },
        locked: true
      });
      const sbsX = substationNode.getAttributeNS(
        nms,
        "x"
      );
      const sbsY = substationNode.getAttributeNS(
        nms,
        "y"
      );
      offsetX += +sbsX;
      offsetY += +sbsY;
      const voltageLevelList = substationNode.querySelectorAll("VoltageLevel");
      voltageLevelList.forEach((voltageLevelNode) => {
        let baseY = 0;
        const voltageLevelName = voltageLevelNode.getAttribute(
          "name"
        );
        const vlX = voltageLevelNode.getAttributeNS(
          nms,
          "x"
        );
        const vlY = voltageLevelNode.getAttributeNS(
          nms,
          "y"
        );
        const bayList = voltageLevelNode.querySelectorAll("Bay");
        if (bayList && bayList.length === 0) {
          const xCordVL = (+offsetX + +vlX) * 50;
          const yCordVL = (+offsetY + +vlY) * 50;
          nodes.push({
            data: {
              id: voltageLevelName,
              label: voltageLevelName,
              parent: substationName,
              nodeType: "vlNode"
            },
            position: { x: xCordVL, y: yCordVL },
            locked: true
          });
        } else {
          nodes.push({
            data: {
              id: voltageLevelName,
              label: voltageLevelName,
              parent: substationName,
              nodeType: "vlNode"
            },
            locked: true
          });
        }
        offsetX += +vlX;
        offsetY += +vlY;
        let busBarName;
        bayList.forEach((bayNode, indexBay) => {
          const bayName = bayNode.getAttribute("name");
          const nodeListCE = bayNode.querySelectorAll("ConductingEquipment");
          const bayX = bayNode.getAttributeNS(nms, "x");
          const bayY = bayNode.getAttributeNS(nms, "y");
          offsetX += +bayX;
          offsetY += +bayY;
          let furthestIedX = 0;
          let furthestCnX = 0;
          const baseX = _OscdTsldEditor.lookupBaseX(
            nodeListCE,
            nms,
            offsetX,
            furthestIedX
          );
          if (nodeListCE && nodeListCE.length === 0) {
            const xCordBay = offsetX + bayX + furthestIedX + indexBay * 100;
            nodes.push({
              data: {
                id: bayName,
                label: bayName,
                parent: voltageLevelName,
                nodeType: "bayNode"
              },
              locked: true,
              position: { x: xCordBay, y: baseY }
            });
          } else {
            nodes.push({
              data: {
                id: bayName,
                label: bayName,
                parent: voltageLevelName,
                nodeType: "bayNode"
              },
              locked: true
            });
          }
          if (bayName.toLowerCase().includes("bb")) {
            const busBar = bayNode.querySelectorAll("ConnectivityNode");
            busBar.forEach((busBarNode) => {
              let xCordBB = bayNode.getAttributeNS(
                nms,
                "x"
              );
              let yCordBB = bayNode.getAttributeNS(
                nms,
                "y"
              );
              const busBarId = busBarNode.getAttribute("name");
              xCordBB = (+xCordBB + +offsetX) * 50;
              yCordBB = (+yCordBB + +offsetY) * 50;
              nodes.push({
                data: {
                  id: busBarId,
                  label: "",
                  parent: bayName,
                  nodeType: "cnNode"
                },
                position: { x: xCordBB, y: yCordBB },
                locked: true
              });
              busBarName = busBarId;
            });
            return;
          }
          const grounds = {};
          const busBarConnectorCoordinates = [];
          const busBarConnectorIds = [];
          nodeListCE.forEach((ceNode) => {
            const nodeId = `${ceNode.getAttribute("name")}_${bayName}`;
            const nodeName = ceNode.getAttribute("name");
            const desc = ceNode.getAttribute("type");
            const icon = _OscdTsldEditor.getIcon(desc);
            let iconString;
            let xCordCe = ceNode.getAttributeNS(nms, "x");
            let yCordCe = ceNode.getAttributeNS(nms, "y");
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
                icon.strings[0].replace(
                  "<svg",
                  `<svg transform="rotate(${rotateDegree})" width="24" height="24"`
                ).replace("\n", "")
              )}`;
            } else if (baseX < xCordCe) {
              const rotateDegree = 90;
              iconString = `data:image/svg+xml;utf8,${encodeURIComponent(
                // SVGs need explicit height and with for zoom to work
                icon.strings[0].replace(
                  "<svg",
                  `<svg transform="rotate(${rotateDegree})" width="24" height="24"`
                ).replace("\n", "")
              )}`;
            } else {
              const rotateDegree = 0;
              iconString = `data:image/svg+xml;utf8,${encodeURIComponent(
                // SVGs need explicit height and with for zoom to work
                icon.strings[0].replace(
                  "<svg",
                  `<svg transform="rotate(${rotateDegree})" width="24" height="24"`
                ).replace("\n", "")
              )}`;
            }
            nodes.push({
              data: {
                id: nodeId,
                label: nodeName,
                backgroundImage: iconString,
                parent: bayName,
                nodeType: "ceNode"
              },
              position: { x: xCordCe, y: yCordCe },
              locked: true
            });
            const edgeList = ceNode.querySelectorAll("Terminal");
            edgeList.forEach((edge) => {
              let targetId = edge.getAttribute("cNodeName");
              if (targetId === "grounded") {
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
                  data: { source: nodeId, target: targetId, type: "ceEdge" }
                });
              } else if (targetId.includes("Busbar")) {
                let busBarY = ceNode.getAttributeNS(
                  nms,
                  "y"
                );
                busBarY = +busBarY + +offsetY;
                busBarConnectorCoordinates.push(busBarY);
                busBarConnectorIds.push(nodeId);
              } else {
                edges.push({
                  data: { source: nodeId, target: targetId, type: "ceEdge" }
                });
              }
            });
          });
          let smallestY = 0;
          busBarConnectorCoordinates.forEach((connector) => {
            if (+connector * 50 < smallestY || smallestY === 0) {
              smallestY = +connector * 50;
            }
          });
          nodes.push({
            data: {
              id: `busBarConnector-${bayName}`,
              label: "",
              nodeType: "cnNode",
              parent: bayName
            },
            position: { x: baseX, y: smallestY },
            locked: true
          });
          busBarConnectorIds.forEach((connectorId) => {
            edges.push({
              data: {
                source: `busBarConnector-${bayName}`,
                target: connectorId,
                type: "ceEdge"
              }
            });
          });
          edges.push({
            data: {
              source: `busBarConnector-${bayName}`,
              target: busBarName,
              type: "busBarEdge"
            }
          });
          const nodeListCN = bayNode.querySelectorAll("ConnectivityNode");
          nodeListCN.forEach((cnNode) => {
            const cnId = cnNode.getAttribute("name");
            let yCordCN = 0;
            let xCordCN = 0;
            if (cnId !== "grounded") {
              const coordinatesX = [];
              const coordinatesY = [];
              bayNode.querySelectorAll("Terminal").forEach((terminal) => {
                if (terminal.getAttribute("cNodeName") === cnId) {
                  const parentNode = terminal.parentElement;
                  if (parentNode === null) {
                    throw new Error();
                  } else {
                    const x = parentNode.getAttributeNS(nms, "x");
                    const y = parentNode.getAttributeNS(nms, "y");
                    coordinatesX.push(x);
                    coordinatesY.push(y);
                  }
                }
              });
              if (coordinatesX.length > 2) {
                xCordCN += +coordinatesX.filter(
                  (item, ind) => coordinatesX.some(
                    (elem, idx) => elem === item && idx !== ind
                  )
                )[0];
                coordinatesY.forEach((i) => {
                  yCordCN += +i;
                });
              } else {
                coordinatesX.forEach((i) => {
                  xCordCN += +i;
                });
                coordinatesY.forEach((i) => {
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
                  label: "",
                  nodeType: "cnNode",
                  parent: bayName
                },
                position: { x: xCordCN, y: yCordCN },
                locked: true
              });
            } else {
              Object.keys(grounds).forEach((key) => {
                nodes.push({
                  data: {
                    id: key,
                    label: "",
                    nodeType: "cnNode",
                    parent: bayName
                  },
                  position: {
                    x: grounds[key].at(0),
                    y: grounds[key].at(1)
                  },
                  locked: true
                });
                if (grounds[key][0] > furthestCnX) {
                  furthestCnX = grounds[key].at(0);
                }
              });
            }
          });
          furthestCnX += 300;
          const nodeListLNode = bayNode.querySelectorAll("LNode");
          const nodeDictIED = _OscdTsldEditor.createIEDDict(
            nodeListLNode,
            nodeListIED
          );
          const nodeDictLD = _OscdTsldEditor.createLDDict(
            nodeListLNode,
            nodeListIED
          );
          Object.keys(nodeDictIED).forEach((iedKey, indexIED) => {
            nodes.push({
              data: {
                id: iedKey,
                label: iedKey,
                nodeType: "iedNode",
                parent: bayName
              }
            });
            nodeDictIED[iedKey].forEach((nodeLD, indexLD) => {
              nodes.push({
                data: {
                  id: nodeLD,
                  label: nodeLD,
                  nodeType: "iedNode",
                  parent: iedKey
                }
              });
              nodeListIED.forEach((iedNode) => {
                if (iedNode.getAttribute("name") === iedKey) {
                  const nodeListLD = iedNode.querySelectorAll("LDevice");
                  nodeListLD.forEach((ldNode) => {
                    if (Object.keys(nodeDictLD).includes(nodeLD)) {
                      nodeDictLD[nodeLD].forEach((l, indexL) => {
                        const nodeListLN = ldNode.querySelectorAll("LN");
                        nodeListLN.forEach((lnNode) => {
                          const nameLN = `${lnNode.getAttribute("lnClass")} ${lnNode.getAttribute("inst")}`;
                          if (l === nameLN) {
                            let xCordLN;
                            let yCordLN;
                            if (lnNode.getAttributeNS(nms, "x") !== null && lnNode.getAttributeNS(nms, "y") !== null) {
                              xCordLN = lnNode.getAttributeNS(
                                nms,
                                "x"
                              );
                              xCordLN = +xCordLN;
                              yCordLN = lnNode.getAttributeNS(
                                nms,
                                "y"
                              );
                              yCordLN = +yCordLN;
                            } else {
                              xCordLN = furthestCnX;
                              yCordLN = baseY + indexL * 30 + indexLD * 70 + indexIED * 200;
                            }
                            if (furthestIedX < xCordLN) {
                              furthestIedX = xCordLN;
                            }
                            nodes.push({
                              data: {
                                id: `${nameLN}-${nodeLD}`,
                                label: nameLN,
                                nodeType: "iedLnNode",
                                parent: nodeLD
                              },
                              position: { x: xCordLN, y: yCordLN }
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
          nodeListLNode.forEach((lnNode) => {
            const lnNodeParent = lnNode.parentElement;
            const nodeLnName = `${lnNode.getAttribute("lnClass")} ${lnNode.getAttribute("lnInst")}`;
            const nodeListLNE = this.doc.querySelectorAll("LN");
            nodeListLNE.forEach((lneNode) => {
              const nameLNE = `${lneNode.getAttribute("lnClass")} ${lneNode.getAttribute("inst")}`;
              if (nameLNE === nodeLnName) {
                const parentLD = lneNode.parentElement;
                const parentName = parentLD.getAttribute("inst");
                const targetLN = `${nodeLnName}-${parentName}`;
                const sourceCE = `${lnNodeParent.getAttribute("name")}_${bayName}`;
                edges.push({
                  data: {
                    source: sourceCE,
                    target: targetLN,
                    type: "iedEdge"
                  }
                });
              }
            });
          });
        });
      });
    });
    return { nodes, edges };
  }
  saveIEDPositions() {
    this.cy?.nodes().forEach((node) => {
      if (node.data("nodeType") === "iedLnNode") {
        const position = node.position();
        const id = node.data("id");
        const ld = id.split("-")[1];
        const name = id.split("-")[0];
        const iedList = this.doc.querySelectorAll("IED");
        iedList.forEach((ied) => {
          const ldList = ied.querySelectorAll("LDevice");
          ldList.forEach((ldevice) => {
            const lnList = ldevice.querySelectorAll("LN");
            const ldname = ldevice.getAttribute("inst");
            if (ld === ldname) {
              lnList.forEach((ln) => {
                const lnName = `${ln.getAttribute("lnClass")} ${ln.getAttribute("inst")}`;
                if (name === lnName) {
                  ln.setAttributeNS(this.namespace, "x", `${position.x}`);
                  ln.setAttributeNS(this.namespace, "y", `${position.y}`);
                }
              });
            }
          });
        });
      }
    });
  }
  static createIEDDict(nodeListLNode, nodeListIED) {
    const iedDict = {};
    nodeListLNode.forEach((lnNode) => {
      const iedName = lnNode.getAttribute("iedName");
      const lnName = `${lnNode.getAttribute("lnClass")} ${lnNode.getAttribute("lnInst")}`;
      if (Object.keys(iedDict).includes(iedName)) {
        nodeListIED.forEach((iedNode) => {
          if (iedNode.getAttribute("name") === iedName) {
            const nodeListLD = iedNode.querySelectorAll("LDevice");
            nodeListLD.forEach((ldNode) => {
              const ldName = ldNode.getAttribute("inst");
              const nodeListLN = ldNode.querySelectorAll("LN");
              nodeListLN.forEach((ln) => {
                if (`${ln.getAttribute("lnClass")} ${ln.getAttribute("inst")}` === lnName && !iedDict[iedName].includes(ldName)) {
                  iedDict[iedName].push(ldName);
                }
              });
            });
          }
        });
      } else {
        const ldList = [];
        nodeListIED.forEach((iedNode) => {
          if (iedNode.getAttribute("name") === iedName) {
            const nodeListLD = iedNode.querySelectorAll("LDevice");
            nodeListLD.forEach((ldNode) => {
              const ldName = ldNode.getAttribute("inst");
              const nodeListLN = ldNode.querySelectorAll("LN");
              nodeListLN.forEach((ln) => {
                if (`${ln.getAttribute("lnClass")} ${ln.getAttribute("inst")}` === lnName && !ldList.includes(ldName)) {
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
  static createLDDict(nodeListLNode, nodeListIED) {
    const ldDict = {};
    nodeListLNode.forEach((lnNode) => {
      const iedName = lnNode.getAttribute("iedName");
      const lnName = `${lnNode.getAttribute("lnClass")} ${lnNode.getAttribute("lnInst")}`;
      nodeListIED.forEach((ied) => {
        const nameIED = ied.getAttribute("name");
        if (nameIED === iedName) {
          const ldList = ied.querySelectorAll("LDevice");
          ldList.forEach((ld) => {
            const nameLD = ld.getAttribute("inst");
            const lnList = ld.querySelectorAll("LN");
            lnList.forEach((ln) => {
              const nameLN = `${ln.getAttribute("lnClass")} ${ln.getAttribute("inst")}`;
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
    Object.keys(ldDict).forEach((ldKey) => {
      ldDict[ldKey].sort();
    });
    return ldDict;
  }
  static lookupBaseX(nodeListCE, nms, offsetX, furthestIedX) {
    let baseX = 0;
    const coordinateDict = {};
    nodeListCE.forEach((nodeCE) => {
      const currentX = nodeCE.getAttributeNS(nms, "x");
      const currentName = nodeCE.getAttribute("name");
      if (Object.keys(coordinateDict).includes(currentX)) {
        coordinateDict[currentX].push(currentName);
      } else {
        coordinateDict[currentX] = [currentName];
      }
    });
    let coordinateLength = 0;
    let keyList = Object.keys(coordinateDict);
    Object.keys(coordinateDict).forEach((key) => {
      if (coordinateLength < coordinateDict[key].length) {
        coordinateLength = coordinateDict[key].length;
        baseX = +key;
      } else if (coordinateLength === coordinateDict[key].length) {
        keyList = keyList.sort();
        const arthMid = (+keyList[0] + +keyList[-1]) / 2;
        let lowestSq = 0;
        keyList.forEach((listKey) => {
          if (lowestSq > (+listKey - +arthMid) ** 2) {
            lowestSq = (+listKey - +arthMid) ** 2;
            baseX = +listKey;
          }
        });
      }
    });
    return (+baseX + +offsetX + +furthestIedX) * 50;
  }
  static findCordAttribute(substationElement) {
    const regex = /[se](xy|sld):x|x/y;
    const regexY = /[se](xy|sld):y|y/y;
    const matchx = Array.from(substationElement.attributes).find(
      (i) => regex.test(i.name)
    );
    const matchy = Array.from(substationElement.attributes).find(
      (i) => regexY.test(i.name)
    );
    if (matchx === void 0 || matchy === void 0) {
      throw new Error("one of the x/y attributes is undefined");
    } else {
      return matchx.name.split(":")[0];
    }
  }
  render() {
    return import_lit.html`
      <div>
        <div
          id="cy"
          style="height: calc(calc(100vh - var(--mdc-tab-height, 48px) - 64px)); position: relative;"
        ></div>
      </div>`;
  }
};
__decorateClass([
  (0, import_decorators.property)({ type: Object })
], _OscdTsldEditor.prototype, "doc", 2);
__decorateClass([
  (0, import_decorators.property)({ type: String })
], _OscdTsldEditor.prototype, "header", 2);
__decorateClass([
  (0, import_decorators.property)()
], _OscdTsldEditor.prototype, "cy", 2);
__decorateClass([
  (0, import_decorators.property)({ type: String })
], _OscdTsldEditor.prototype, "namespace", 2);
let OscdTsldEditor = _OscdTsldEditor;
customElements.define("test-component", OscdTsldEditor);
