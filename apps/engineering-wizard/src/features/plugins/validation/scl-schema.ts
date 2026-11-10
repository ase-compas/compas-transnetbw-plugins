/**
 * Generated from IEC 61850-6 Ed. 2.1, SCL 2007B4.
 * Regenerate: python3 tools/generate-scl-schema.py /path/to/SCL.xsd
 * Format the generated file with the repository's Prettier.
 *
 * Includes inherited attributes and all standard child elements except Private.
 * Foreign-namespace extensions are intentionally not included.
 */

export type SclNodeDef = {
  attrs: string[];
  children: string[];
};

export const SCL_SCHEMA: Record<string, SclNodeDef> = {
  AccessControl: {
    attrs: [],
    children: [],
  },
  AccessPoint: {
    attrs: ['desc', 'name', 'router', 'clock', 'kdc'],
    children: [
      'Text',
      'Server',
      'LN',
      'ServerAt',
      'Services',
      'GOOSESecurity',
      'SMVSecurity',
    ],
  },
  Address: {
    attrs: [],
    children: ['P'],
  },
  Association: {
    attrs: [
      'desc',
      'iedName',
      'ldInst',
      'prefix',
      'lnClass',
      'lnInst',
      'kind',
      'associationID',
    ],
    children: [],
  },
  Authentication: {
    attrs: ['none', 'password', 'weak', 'strong', 'certificate'],
    children: [],
  },
  BDA: {
    attrs: [
      'desc',
      'name',
      'sAddr',
      'bType',
      'valKind',
      'type',
      'count',
      'valImport',
    ],
    children: ['Text', 'Val'],
  },
  Bay: {
    attrs: ['name', 'desc'],
    children: [
      'Text',
      'LNode',
      'PowerTransformer',
      'GeneralEquipment',
      'ConductingEquipment',
      'ConnectivityNode',
      'Function',
    ],
  },
  BitRate: {
    attrs: ['unit', 'multiplier'],
    children: [],
  },
  ClientLN: {
    attrs: [
      'desc',
      'iedName',
      'ldInst',
      'prefix',
      'lnClass',
      'lnInst',
      'apRef',
    ],
    children: [],
  },
  ClientServices: {
    attrs: [
      'goose',
      'gsse',
      'bufReport',
      'unbufReport',
      'readLog',
      'sv',
      'supportsLdName',
      'maxAttributes',
      'maxReports',
      'maxGOOSE',
      'maxSMV',
      'rGOOSE',
      'rSV',
      'noIctBinding',
    ],
    children: ['TimeSyncProt', 'McSecurity'],
  },
  CommProt: {
    attrs: ['ipv6'],
    children: [],
  },
  Communication: {
    attrs: ['desc'],
    children: ['Text', 'SubNetwork'],
  },
  ConductingEquipment: {
    attrs: ['name', 'desc', 'virtual', 'type'],
    children: ['Text', 'LNode', 'Terminal', 'SubEquipment', 'EqFunction'],
  },
  ConfDataSet: {
    attrs: ['max', 'maxAttributes', 'modify'],
    children: [],
  },
  ConfLNs: {
    attrs: ['fixPrefix', 'fixLnInst'],
    children: [],
  },
  ConfLdName: {
    attrs: [],
    children: [],
  },
  ConfLogControl: {
    attrs: ['max'],
    children: [],
  },
  ConfReportControl: {
    attrs: ['max', 'bufMode', 'bufConf', 'maxBuf'],
    children: [],
  },
  ConfSG: {
    attrs: ['resvTms'],
    children: [],
  },
  ConfSigRef: {
    attrs: ['max'],
    children: [],
  },
  ConnectedAP: {
    attrs: ['desc', 'iedName', 'apName', 'redProt'],
    children: ['Text', 'Address', 'GSE', 'SMV', 'PhysConn'],
  },
  ConnectivityNode: {
    attrs: ['name', 'desc', 'pathName'],
    children: ['Text', 'LNode'],
  },
  DA: {
    attrs: [
      'desc',
      'name',
      'sAddr',
      'bType',
      'valKind',
      'type',
      'count',
      'valImport',
      'dchg',
      'qchg',
      'dupd',
      'fc',
    ],
    children: ['Text', 'Val', 'ProtNs'],
  },
  DAI: {
    attrs: ['desc', 'name', 'sAddr', 'valKind', 'ix', 'valImport'],
    children: ['Text', 'Val'],
  },
  DAType: {
    attrs: ['id', 'desc', 'iedType'],
    children: ['Text', 'BDA', 'ProtNs'],
  },
  DO: {
    attrs: ['desc', 'name', 'type', 'accessControl', 'transient'],
    children: ['Text'],
  },
  DOI: {
    attrs: ['desc', 'name', 'ix', 'accessControl'],
    children: ['Text', 'SDI', 'DAI'],
  },
  DOType: {
    attrs: ['id', 'desc', 'iedType', 'cdc'],
    children: ['Text', 'SDO', 'DA'],
  },
  DataObjectDirectory: {
    attrs: [],
    children: [],
  },
  DataSet: {
    attrs: ['desc', 'name'],
    children: ['Text', 'FCDA'],
  },
  DataSetDirectory: {
    attrs: [],
    children: [],
  },
  DataTypeTemplates: {
    attrs: [],
    children: ['LNodeType', 'DOType', 'DAType', 'EnumType'],
  },
  DynAssociation: {
    attrs: ['max'],
    children: [],
  },
  DynDataSet: {
    attrs: ['max', 'maxAttributes'],
    children: [],
  },
  EnumType: {
    attrs: ['id', 'desc'],
    children: ['Text', 'EnumVal'],
  },
  EnumVal: {
    attrs: ['ord', 'desc'],
    children: [],
  },
  EqFunction: {
    attrs: ['name', 'desc', 'type'],
    children: ['Text', 'LNode', 'GeneralEquipment', 'EqSubFunction'],
  },
  EqSubFunction: {
    attrs: ['name', 'desc', 'type'],
    children: ['Text', 'LNode', 'GeneralEquipment', 'EqSubFunction'],
  },
  ExtRef: {
    attrs: [
      'desc',
      'iedName',
      'ldInst',
      'prefix',
      'lnClass',
      'lnInst',
      'doName',
      'daName',
      'intAddr',
      'serviceType',
      'srcLDInst',
      'srcPrefix',
      'srcLNClass',
      'srcLNInst',
      'srcCBName',
      'pServT',
      'pLN',
      'pDO',
      'pDA',
    ],
    children: [],
  },
  FCDA: {
    attrs: [
      'ldInst',
      'prefix',
      'lnClass',
      'lnInst',
      'doName',
      'daName',
      'fc',
      'ix',
    ],
    children: [],
  },
  FileHandling: {
    attrs: ['mms', 'ftp', 'ftps'],
    children: [],
  },
  Function: {
    attrs: ['name', 'desc', 'type'],
    children: [
      'Text',
      'LNode',
      'SubFunction',
      'GeneralEquipment',
      'ConductingEquipment',
    ],
  },
  GOOSE: {
    attrs: ['max', 'fixedOffs', 'goose', 'rGOOSE'],
    children: [],
  },
  GOOSESecurity: {
    attrs: ['name', 'desc', 'xferNumber', 'serialNumber'],
    children: ['Text', 'Subject', 'IssuerName'],
  },
  GSE: {
    attrs: ['desc', 'ldInst', 'cbName'],
    children: ['Text', 'Address', 'MinTime', 'MaxTime'],
  },
  GSEControl: {
    attrs: [
      'desc',
      'name',
      'datSet',
      'confRev',
      'type',
      'appID',
      'fixedOffs',
      'securityEnable',
    ],
    children: ['Text', 'IEDName', 'Protocol'],
  },
  GSEDir: {
    attrs: [],
    children: [],
  },
  GSESettings: {
    attrs: ['cbName', 'datSet', 'appID', 'dataLabel', 'kdaParticipant'],
    children: ['McSecurity'],
  },
  GSSE: {
    attrs: ['max'],
    children: [],
  },
  GeneralEquipment: {
    attrs: ['name', 'desc', 'virtual', 'type'],
    children: ['Text', 'LNode', 'EqFunction'],
  },
  GetCBValues: {
    attrs: [],
    children: [],
  },
  GetDataObjectDefinition: {
    attrs: [],
    children: [],
  },
  GetDataSetValue: {
    attrs: [],
    children: [],
  },
  GetDirectory: {
    attrs: [],
    children: [],
  },
  Header: {
    attrs: ['id', 'version', 'revision', 'toolID', 'nameStructure'],
    children: ['Text', 'History'],
  },
  History: {
    attrs: [],
    children: ['Hitem'],
  },
  Hitem: {
    attrs: ['version', 'revision', 'when', 'who', 'what', 'why'],
    children: [],
  },
  IED: {
    attrs: [
      'desc',
      'name',
      'type',
      'manufacturer',
      'configVersion',
      'originalSclVersion',
      'originalSclRevision',
      'originalSclRelease',
      'engRight',
      'owner',
    ],
    children: ['Text', 'Services', 'AccessPoint', 'KDC'],
  },
  IEDName: {
    attrs: ['apRef', 'ldInst', 'prefix', 'lnClass', 'lnInst'],
    children: [],
  },
  Inputs: {
    attrs: ['desc'],
    children: ['Text', 'ExtRef'],
  },
  IssuerName: {
    attrs: ['commonName', 'idHierarchy'],
    children: [],
  },
  KDC: {
    attrs: ['iedName', 'apName'],
    children: [],
  },
  LDevice: {
    attrs: ['desc', 'inst', 'ldName'],
    children: ['Text', 'LN0', 'LN', 'AccessControl'],
  },
  LN: {
    attrs: ['desc', 'lnType', 'prefix', 'lnClass', 'inst'],
    children: [
      'Text',
      'DataSet',
      'ReportControl',
      'LogControl',
      'DOI',
      'Inputs',
      'Log',
    ],
  },
  LN0: {
    attrs: ['desc', 'lnType', 'lnClass', 'inst'],
    children: [
      'Text',
      'DataSet',
      'ReportControl',
      'LogControl',
      'DOI',
      'Inputs',
      'Log',
      'GSEControl',
      'SampledValueControl',
      'SettingControl',
    ],
  },
  LNode: {
    attrs: [
      'desc',
      'iedName',
      'ldInst',
      'prefix',
      'lnClass',
      'lnInst',
      'lnType',
    ],
    children: ['Text'],
  },
  LNodeType: {
    attrs: ['id', 'desc', 'iedType', 'lnClass'],
    children: ['Text', 'DO'],
  },
  Line: {
    attrs: ['name', 'desc', 'type', 'nomFreq', 'numPhases'],
    children: [
      'Text',
      'LNode',
      'GeneralEquipment',
      'Function',
      'Voltage',
      'ConductingEquipment',
      'ConnectivityNode',
    ],
  },
  Log: {
    attrs: ['desc', 'name'],
    children: ['Text'],
  },
  LogControl: {
    attrs: [
      'desc',
      'name',
      'datSet',
      'intgPd',
      'ldInst',
      'prefix',
      'lnClass',
      'lnInst',
      'logName',
      'logEna',
      'reasonCode',
      'bufTime',
    ],
    children: ['Text', 'TrgOps'],
  },
  LogSettings: {
    attrs: ['cbName', 'datSet', 'logEna', 'trgOps', 'intgPd'],
    children: [],
  },
  MaxTime: {
    attrs: ['unit', 'multiplier'],
    children: [],
  },
  McSecurity: {
    attrs: ['signature', 'encryption'],
    children: [],
  },
  MinTime: {
    attrs: ['unit', 'multiplier'],
    children: [],
  },
  NeutralPoint: {
    attrs: [
      'desc',
      'name',
      'connectivityNode',
      'processName',
      'substationName',
      'voltageLevelName',
      'bayName',
      'cNodeName',
      'lineName',
    ],
    children: ['Text'],
  },
  OptFields: {
    attrs: [
      'seqNum',
      'timeStamp',
      'dataSet',
      'reasonCode',
      'dataRef',
      'entryID',
      'configRef',
      'bufOvfl',
    ],
    children: [],
  },
  P: {
    attrs: ['type'],
    children: [],
  },
  PhysConn: {
    attrs: ['desc', 'type'],
    children: ['Text', 'P'],
  },
  PowerTransformer: {
    attrs: ['name', 'desc', 'virtual', 'type'],
    children: [
      'Text',
      'LNode',
      'TransformerWinding',
      'SubEquipment',
      'EqFunction',
    ],
  },
  Process: {
    attrs: ['name', 'desc', 'type'],
    children: [
      'Text',
      'LNode',
      'GeneralEquipment',
      'Function',
      'ConductingEquipment',
      'Substation',
      'Line',
      'Process',
    ],
  },
  ProtNs: {
    attrs: ['type'],
    children: [],
  },
  Protocol: {
    attrs: ['mustUnderstand'],
    children: [],
  },
  ReadWrite: {
    attrs: [],
    children: [],
  },
  RedProt: {
    attrs: ['hsr', 'prp', 'rstp'],
    children: [],
  },
  ReportControl: {
    attrs: [
      'desc',
      'name',
      'datSet',
      'intgPd',
      'rptID',
      'confRev',
      'buffered',
      'bufTime',
      'indexed',
    ],
    children: ['Text', 'TrgOps', 'OptFields', 'RptEnabled'],
  },
  ReportSettings: {
    attrs: [
      'cbName',
      'datSet',
      'rptID',
      'optFields',
      'bufTime',
      'trgOps',
      'intgPd',
      'resvTms',
      'owner',
    ],
    children: [],
  },
  RptEnabled: {
    attrs: ['desc', 'max'],
    children: ['Text', 'ClientLN'],
  },
  SCL: {
    attrs: ['version', 'revision', 'release'],
    children: [
      'Text',
      'Header',
      'Substation',
      'Communication',
      'IED',
      'DataTypeTemplates',
      'Line',
      'Process',
    ],
  },
  SDI: {
    attrs: ['desc', 'name', 'ix', 'sAddr'],
    children: ['Text', 'SDI', 'DAI'],
  },
  SDO: {
    attrs: ['desc', 'name', 'type', 'count'],
    children: ['Text'],
  },
  SGEdit: {
    attrs: ['resvTms'],
    children: [],
  },
  SMV: {
    attrs: ['desc', 'ldInst', 'cbName'],
    children: ['Text', 'Address'],
  },
  SMVSecurity: {
    attrs: ['name', 'desc', 'xferNumber', 'serialNumber'],
    children: ['Text', 'Subject', 'IssuerName'],
  },
  SMVSettings: {
    attrs: [
      'cbName',
      'datSet',
      'svID',
      'optFields',
      'smpRate',
      'samplesPerSec',
      'pdcTimeStamp',
      'synchSrcId',
      'nofASDU',
      'kdaParticipant',
    ],
    children: ['SmpRate', 'SamplesPerSec', 'SecPerSamples', 'McSecurity'],
  },
  SMVsc: {
    attrs: ['max', 'delivery', 'deliveryConf', 'sv', 'rSV'],
    children: [],
  },
  SampledValueControl: {
    attrs: [
      'desc',
      'name',
      'datSet',
      'confRev',
      'smvID',
      'multicast',
      'smpRate',
      'nofASDU',
      'smpMod',
      'securityEnable',
    ],
    children: ['Text', 'IEDName', 'SmvOpts', 'Protocol'],
  },
  SamplesPerSec: {
    attrs: [],
    children: [],
  },
  SecPerSamples: {
    attrs: [],
    children: [],
  },
  Server: {
    attrs: ['desc', 'timeout'],
    children: ['Text', 'Authentication', 'LDevice', 'Association'],
  },
  ServerAt: {
    attrs: ['desc', 'apName'],
    children: ['Text'],
  },
  Services: {
    attrs: ['nameLength'],
    children: [
      'DynAssociation',
      'SettingGroups',
      'GetDirectory',
      'GetDataObjectDefinition',
      'DataObjectDirectory',
      'GetDataSetValue',
      'SetDataSetValue',
      'DataSetDirectory',
      'ConfDataSet',
      'DynDataSet',
      'ReadWrite',
      'TimerActivatedControl',
      'ConfReportControl',
      'GetCBValues',
      'ConfLogControl',
      'ReportSettings',
      'LogSettings',
      'GSESettings',
      'SMVSettings',
      'GSEDir',
      'GOOSE',
      'GSSE',
      'SMVsc',
      'FileHandling',
      'ConfLNs',
      'ClientServices',
      'ConfLdName',
      'SupSubscription',
      'ConfSigRef',
      'ValueHandling',
      'RedProt',
      'TimeSyncProt',
      'CommProt',
    ],
  },
  SetDataSetValue: {
    attrs: [],
    children: [],
  },
  SettingControl: {
    attrs: ['desc', 'numOfSGs', 'actSG', 'resvTms'],
    children: ['Text'],
  },
  SettingGroups: {
    attrs: [],
    children: ['SGEdit', 'ConfSG'],
  },
  SmpRate: {
    attrs: [],
    children: [],
  },
  SmvOpts: {
    attrs: [
      'refreshTime',
      'sampleSynchronized',
      'sampleRate',
      'dataSet',
      'security',
      'timestamp',
      'synchSourceId',
    ],
    children: [],
  },
  SubEquipment: {
    attrs: ['name', 'desc', 'phase', 'virtual'],
    children: ['Text', 'LNode', 'EqFunction'],
  },
  SubFunction: {
    attrs: ['name', 'desc', 'type'],
    children: [
      'Text',
      'LNode',
      'GeneralEquipment',
      'ConductingEquipment',
      'SubFunction',
    ],
  },
  SubNetwork: {
    attrs: ['name', 'desc', 'type'],
    children: ['Text', 'BitRate', 'ConnectedAP'],
  },
  Subject: {
    attrs: ['commonName', 'idHierarchy'],
    children: [],
  },
  Substation: {
    attrs: ['name', 'desc'],
    children: [
      'Text',
      'LNode',
      'PowerTransformer',
      'GeneralEquipment',
      'VoltageLevel',
      'Function',
    ],
  },
  SupSubscription: {
    attrs: ['maxGo', 'maxSv'],
    children: [],
  },
  TapChanger: {
    attrs: ['name', 'desc', 'type', 'virtual'],
    children: ['Text', 'LNode', 'SubEquipment', 'EqFunction'],
  },
  Terminal: {
    attrs: [
      'desc',
      'name',
      'connectivityNode',
      'processName',
      'substationName',
      'voltageLevelName',
      'bayName',
      'cNodeName',
      'lineName',
    ],
    children: ['Text'],
  },
  Text: {
    attrs: ['source'],
    children: [],
  },
  TimeSyncProt: {
    attrs: ['sntp', 'iec61850_9_3', 'c37_238', 'other'],
    children: [],
  },
  TimerActivatedControl: {
    attrs: [],
    children: [],
  },
  TransformerWinding: {
    attrs: ['name', 'desc', 'virtual', 'type'],
    children: [
      'Text',
      'LNode',
      'Terminal',
      'SubEquipment',
      'TapChanger',
      'NeutralPoint',
      'EqFunction',
    ],
  },
  TrgOps: {
    attrs: ['dchg', 'qchg', 'dupd', 'period', 'gi'],
    children: [],
  },
  Val: {
    attrs: ['sGroup'],
    children: [],
  },
  ValueHandling: {
    attrs: ['setToRO'],
    children: [],
  },
  Voltage: {
    attrs: ['unit', 'multiplier'],
    children: [],
  },
  VoltageLevel: {
    attrs: ['name', 'desc', 'nomFreq', 'numPhases'],
    children: [
      'Text',
      'LNode',
      'PowerTransformer',
      'GeneralEquipment',
      'Voltage',
      'Bay',
      'Function',
    ],
  },
};

/** Returns valid standard child element names, excluding Private. */
export function getChildElements(parentName: string): string[] {
  return SCL_SCHEMA[parentName]?.children ?? [];
}

/** Returns valid attribute names (without @) for a given element name. */
export function getElementAttrs(elementName: string): string[] {
  return SCL_SCHEMA[elementName]?.attrs ?? [];
}

/** All supported standard SCL element names. */
export const ALL_SCL_ELEMENTS: string[] = Object.keys(SCL_SCHEMA);
