/**
 * SCL 2007B4 element schema derived from IEC 61850-6 XSD files
 * (IEC_61850-6.2018.SCL.2007B4.full).
 *
 * Attributes and child elements are resolved by flattening the XSD
 * inheritance chain (tBaseElement → tNaming → tLNodeContainer → … → concrete type).
 *
 * Notes:
 * - `Text` and `Private` are valid children of every element (from tBaseElement)
 *   but are omitted here because they're not useful for XPath navigation.
 * - IED, Communication, and DataTypeTemplates sections are simplified skeletons;
 *   the full IED schema is very large and rarely needed for substation validation.
 */

export type SclNodeDef = {
  /** Valid XML attribute names (without @) for this element */
  attrs: string[];
  /** Valid child element names useful for XPath navigation / validation */
  children: string[];
};

export const SCL_SCHEMA: Record<string, SclNodeDef> = {
  // ── Root ──────────────────────────────────────────────────────────────────
  SCL: {
    attrs: ['version', 'revision', 'release'],
    children: ['Header', 'Substation', 'Communication', 'IED', 'DataTypeTemplates', 'Line', 'Process'],
  },
  Header: {
    attrs: ['id', 'version', 'revision', 'toolID', 'nameStructure'],
    children: ['History'],
  },
  History: {
    attrs: [],
    children: ['Hitem'],
  },
  Hitem: {
    attrs: ['version', 'revision', 'when', 'who', 'what', 'why'],
    children: [],
  },

  // ── Substation hierarchy ──────────────────────────────────────────────────
  // tSubstation extends tEquipmentContainer (tPowerSystemResource → tLNodeContainer → tNaming)
  Substation: {
    attrs: ['name', 'desc'],
    children: ['LNode', 'PowerTransformer', 'GeneralEquipment', 'VoltageLevel', 'Function'],
  },
  // tVoltageLevel extends tEquipmentContainer
  VoltageLevel: {
    attrs: ['name', 'desc', 'nomFreq', 'numPhases'],
    children: ['LNode', 'PowerTransformer', 'GeneralEquipment', 'Voltage', 'Bay', 'Function'],
  },
  // tBay extends tEquipmentContainer
  Bay: {
    attrs: ['name', 'desc'],
    children: ['LNode', 'PowerTransformer', 'GeneralEquipment', 'ConductingEquipment', 'ConnectivityNode', 'Function'],
  },
  // tConductingEquipment extends tAbstractConductingEquipment extends tEquipment
  ConductingEquipment: {
    attrs: ['name', 'desc', 'type', 'virtual'],
    children: ['LNode', 'Terminal', 'SubEquipment', 'EqFunction'],
  },
  // tConnectivityNode extends tLNodeContainer
  ConnectivityNode: {
    attrs: ['name', 'desc', 'pathName'],
    children: ['LNode'],
  },
  // tTerminal extends tUnNaming
  Terminal: {
    attrs: ['name', 'desc', 'connectivityNode', 'processName', 'substationName', 'voltageLevelName', 'bayName', 'cNodeName', 'lineName'],
    children: [],
  },
  // tLNode extends tUnNaming
  LNode: {
    attrs: ['desc', 'iedName', 'ldInst', 'prefix', 'lnClass', 'lnInst', 'lnType'],
    children: [],
  },
  // tFunction extends tPowerSystemResource
  Function: {
    attrs: ['name', 'desc', 'type'],
    children: ['LNode', 'SubFunction', 'GeneralEquipment', 'ConductingEquipment'],
  },
  // tSubFunction extends tPowerSystemResource
  SubFunction: {
    attrs: ['name', 'desc', 'type'],
    children: ['LNode', 'GeneralEquipment', 'ConductingEquipment', 'SubFunction'],
  },
  // tPowerTransformer extends tEquipment
  PowerTransformer: {
    attrs: ['name', 'desc', 'type', 'virtual'],
    children: ['LNode', 'TransformerWinding', 'SubEquipment', 'EqFunction'],
  },
  // tTransformerWinding extends tAbstractConductingEquipment extends tEquipment
  TransformerWinding: {
    attrs: ['name', 'desc', 'type', 'virtual'],
    children: ['LNode', 'Terminal', 'SubEquipment', 'TapChanger', 'NeutralPoint', 'EqFunction'],
  },
  // NeutralPoint is tTerminal (same attributes)
  NeutralPoint: {
    attrs: ['name', 'desc', 'connectivityNode', 'processName', 'substationName', 'voltageLevelName', 'bayName', 'cNodeName', 'lineName'],
    children: [],
  },
  // tTapChanger extends tPowerSystemResource
  TapChanger: {
    attrs: ['name', 'desc', 'type', 'virtual'],
    children: ['LNode', 'SubEquipment', 'EqFunction'],
  },
  // tSubEquipment extends tPowerSystemResource
  SubEquipment: {
    attrs: ['name', 'desc', 'phase', 'virtual'],
    children: ['LNode', 'EqFunction'],
  },
  // tGeneralEquipment extends tEquipment
  GeneralEquipment: {
    attrs: ['name', 'desc', 'type', 'virtual'],
    children: ['LNode', 'EqFunction'],
  },
  // tEqFunction extends tAbstractEqFuncSubFunc extends tPowerSystemResource
  EqFunction: {
    attrs: ['name', 'desc', 'type'],
    children: ['LNode', 'GeneralEquipment', 'EqSubFunction'],
  },
  // tEqSubFunction extends tAbstractEqFuncSubFunc
  EqSubFunction: {
    attrs: ['name', 'desc', 'type'],
    children: ['LNode', 'GeneralEquipment', 'EqSubFunction'],
  },
  // tVoltage (simpleContent with unit/multiplier)
  Voltage: {
    attrs: ['unit', 'multiplier'],
    children: [],
  },

  // ── Line ──────────────────────────────────────────────────────────────────
  // tLine extends tGeneralEquipmentContainer extends tPowerSystemResource
  Line: {
    attrs: ['name', 'desc', 'type', 'nomFreq', 'numPhases'],
    children: ['LNode', 'GeneralEquipment', 'Function', 'Voltage', 'ConductingEquipment', 'ConnectivityNode'],
  },

  // ── Process ───────────────────────────────────────────────────────────────
  // tProcess extends tGeneralEquipmentContainer
  Process: {
    attrs: ['name', 'desc', 'type'],
    children: ['LNode', 'GeneralEquipment', 'Function', 'ConductingEquipment', 'Substation', 'Line', 'Process'],
  },

  // ── IED (simplified skeleton — full IED schema is very large) ─────────────
  IED: {
    attrs: ['name', 'desc', 'type', 'manufacturer', 'configVersion', 'engRight', 'owner',
            'originalSclVersion', 'originalSclRevision', 'originalSclRelease'],
    children: ['Services', 'AccessPoint', 'KDC'],
  },
  AccessPoint: {
    attrs: ['name', 'desc', 'router', 'clock', 'kdc'],
    children: ['Server', 'LN', 'ServerAt', 'GOOSESecurity', 'SMVSecurity'],
  },
  Server: {
    attrs: ['timeout', 'desc'],
    children: ['Authentication', 'LDevice', 'Association'],
  },
  LDevice: {
    attrs: ['inst', 'ldName', 'desc'],
    children: ['LN0', 'LN'],
  },
  LN0: {
    attrs: ['desc', 'lnClass', 'lnType', 'inst', 'prefix'],
    children: ['DataSet', 'ReportControl', 'LogControl', 'DOI', 'Inputs', 'Log', 'SettingControl', 'SCLControl', 'SampledValueControl', 'GSEControl'],
  },
  LN: {
    attrs: ['desc', 'lnClass', 'lnType', 'inst', 'prefix'],
    children: ['DataSet', 'ReportControl', 'LogControl', 'DOI', 'Inputs', 'Log'],
  },

  // ── Communication (simplified skeleton) ───────────────────────────────────
  Communication: {
    attrs: ['desc'],
    children: ['SubNetwork'],
  },
  SubNetwork: {
    attrs: ['name', 'desc', 'type', 'BitRate'],
    children: ['ConnectedAP'],
  },
  ConnectedAP: {
    attrs: ['iedName', 'apName', 'desc', 'redProt'],
    children: ['Address', 'GSE', 'SMV', 'PhysConn'],
  },

  // ── DataTypeTemplates (simplified skeleton) ────────────────────────────────
  DataTypeTemplates: {
    attrs: ['desc'],
    children: ['LNodeType', 'DOType', 'DAType', 'EnumType'],
  },
  LNodeType: {
    attrs: ['id', 'desc', 'lnClass', 'iedType'],
    children: ['DO'],
  },
  DOType: {
    attrs: ['id', 'desc', 'cdc', 'iedType'],
    children: ['DA', 'SDO'],
  },
  DAType: {
    attrs: ['id', 'desc', 'iedType'],
    children: ['BDA'],
  },
  EnumType: {
    attrs: ['id', 'desc', 'iedType'],
    children: ['EnumVal'],
  },
};

/** Returns valid child element names for a given parent element name. */
export function getChildElements(parentName: string): string[] {
  return SCL_SCHEMA[parentName]?.children ?? [];
}

/** Returns valid attribute names (without @) for a given element name. */
export function getElementAttrs(elementName: string): string[] {
  return SCL_SCHEMA[elementName]?.attrs ?? [];
}

/** All known SCL element names. */
export const ALL_SCL_ELEMENTS: string[] = Object.keys(SCL_SCHEMA);
