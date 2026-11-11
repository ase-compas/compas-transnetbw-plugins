import { describe, expect, it } from 'vitest';
import type { Process } from '@oscd-transnet-plugins/shared';
import { classifyProcessImport } from './processImport';

const process: Process = {
  id: 'engineering',
  name: 'Engineering',
  version: '1.0.0',
  description: '',
  pluginGroups: [
    {
      title: 'Configuration',
      plugins: [
        {
          id: 'editor',
          name: 'Editor',
          type: 'internal',
          validations: [
            {
              id: 'rule-1',
              title: 'Name required',
              description: '',
              context: '//SCL',
              assert: '@name',
            },
          ],
        },
      ],
    },
  ],
};

function copy(): Process {
  return structuredClone(process);
}

describe('process import classification', () => {
  it('accepts a process with no matching ID and recognizes identical records', () => {
    expect(classifyProcessImport(process, [])).toEqual({ status: 'new' });
    expect(
      classifyProcessImport({ ...process, id: 'different-id' }, [process]),
    ).toEqual({ status: 'new' });
    expect(classifyProcessImport(copy(), [process])).toEqual({
      status: 'already-present',
    });
  });

  it('normalizes optional fields and ignores legacy rule-ID migration without modifying inputs', () => {
    const incoming = copy();
    const plugin = incoming.pluginGroups[0].plugins[0];
    plugin.src = '';
    plugin.icon = '';
    plugin.catalogId = '';
    plugin.sourceUrl = '';
    const rule = plugin.validations?.[0];
    if (!rule) throw new Error('Missing fixture rule.');
    delete rule.id;
    rule.message = '';
    const before = JSON.stringify(incoming);

    expect(classifyProcessImport(incoming, [process])).toEqual({
      status: 'already-present',
    });
    expect(JSON.stringify(incoming)).toBe(before);
  });

  it.each(['0.9.0', '2.0.0'])(
    'reports version %s as a conflict, not an update',
    (version) => {
      expect(classifyProcessImport({ ...process, version }, [process])).toEqual(
        {
          status: 'conflict',
          reason: `Existing version "1.0.0" differs from imported version "${version}".`,
        },
      );
    },
  );

  it.each(['description', 'name'] as const)(
    'reports changed %s at the same version as a conflict',
    (field) => {
      expect(
        classifyProcessImport({ ...process, [field]: 'Changed' }, [process]),
      ).toMatchObject({ status: 'conflict' });
    },
  );

  it('compares rule identity and content when both records have persistent rule IDs', () => {
    const incoming = copy();
    const rule = incoming.pluginGroups[0].plugins[0].validations?.[0];
    if (!rule) throw new Error('Missing fixture rule.');
    rule.id = 'different-rule';
    expect(classifyProcessImport(incoming, [process])).toMatchObject({
      status: 'conflict',
    });
    rule.id = 'rule-1';
    rule.assert = '@desc';
    expect(classifyProcessImport(incoming, [process])).toMatchObject({
      status: 'conflict',
    });
  });

  it('preserves workflow ordering and checks both local and remote records', () => {
    const existing = copy();
    existing.pluginGroups.push({ title: 'Second step', plugins: [] });
    const reordered = structuredClone(existing);
    reordered.pluginGroups.reverse();
    expect(classifyProcessImport(reordered, [existing])).toMatchObject({
      status: 'conflict',
    });
    expect(
      classifyProcessImport(process, [
        process,
        { ...process, description: 'Local changes' },
      ]),
    ).toMatchObject({ status: 'conflict' });
  });
});
