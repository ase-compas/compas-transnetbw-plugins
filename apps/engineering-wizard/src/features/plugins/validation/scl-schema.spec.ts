import { describe, expect, it } from 'vitest';
import {
  ALL_SCL_ELEMENTS,
  getChildElements,
  getElementAttrs,
} from './scl-schema';

describe('SCL rule navigation', () => {
  it.each([
    'SCL/Communication/SubNetwork/ConnectedAP/Address/P',
    'SCL/Communication/SubNetwork/ConnectedAP/GSE/MinTime',
    'SCL/Communication/SubNetwork/ConnectedAP/PhysConn/P',
    'SCL/IED/AccessPoint/Server/LDevice/LN0/DOI/SDI/SDI/DAI/Val',
    'SCL/IED/AccessPoint/Server/LDevice/LN/ReportControl/RptEnabled/ClientLN',
    'SCL/IED/AccessPoint/Server/LDevice/LN0/SampledValueControl/SmvOpts',
    'SCL/IED/AccessPoint/Server/LDevice/LN/Inputs/ExtRef',
    'SCL/IED/Services/SettingGroups/SGEdit',
    'SCL/IED/AccessPoint/Services/SMVSettings/McSecurity',
    'SCL/DataTypeTemplates/DOType/DA/ProtNs',
    'SCL/DataTypeTemplates/DAType/BDA/Val',
    'SCL/Process/Process/Substation/VoltageLevel/Bay/PowerTransformer/TransformerWinding/NeutralPoint/Text',
  ])('supports every step of %s', (path) => {
    const nodes = path.split('/');
    for (let index = 1; index < nodes.length; index++) {
      expect(getChildElements(nodes[index - 1])).toContain(nodes[index]);
    }
  });

  it('resolves every offered child and excludes Private throughout the graph', () => {
    const reached = new Set<string>();
    const pending = ['SCL'];
    for (const name of pending) {
      if (reached.has(name)) continue;
      reached.add(name);
      expect(ALL_SCL_ELEMENTS).toContain(name);
      expect(getChildElements(name)).not.toContain('Private');
      pending.push(...getChildElements(name));
    }
    expect([...reached].sort()).toEqual([...ALL_SCL_ELEMENTS].sort());
    expect(ALL_SCL_ELEMENTS).not.toContain('Private');
  });

  it('offers BitRate as a child rather than an attribute of SubNetwork', () => {
    expect(getChildElements('SubNetwork')).toContain('BitRate');
    expect(getElementAttrs('SubNetwork')).not.toContain('BitRate');
    expect(getElementAttrs('BitRate')).toEqual(['unit', 'multiplier']);
  });

  it.each([
    [
      'ReportControl',
      ['desc', 'name', 'datSet', 'rptID', 'confRev', 'buffered'],
    ],
    [
      'ClientLN',
      ['desc', 'iedName', 'ldInst', 'prefix', 'lnClass', 'lnInst', 'apRef'],
    ],
    ['DA', ['name', 'bType', 'valKind', 'count', 'fc', 'dchg', 'qchg', 'dupd']],
    [
      'ExtRef',
      ['serviceType', 'srcLDInst', 'srcCBName', 'pServT', 'pLN', 'pDO', 'pDA'],
    ],
    ['OptFields', ['seqNum', 'timeStamp', 'dataSet', 'configRef', 'bufOvfl']],
    ['SGEdit', ['resvTms']],
    ['Text', ['source']],
  ])(
    'resolves inherited, grouped and inline attributes for %s',
    (name, attrs) => {
      expect(getElementAttrs(name)).toEqual(expect.arrayContaining(attrs));
    },
  );

  it('does not offer inherited attributes or children on unrelated types', () => {
    expect(getElementAttrs('LN0')).not.toContain('prefix');
    expect(getChildElements('LN0')).not.toContain('SCLControl');
    expect(getChildElements('Services')).not.toContain('Text');
    expect(getChildElements('Text')).toEqual([]);
    expect(getChildElements('P')).toEqual([]);
  });
});
