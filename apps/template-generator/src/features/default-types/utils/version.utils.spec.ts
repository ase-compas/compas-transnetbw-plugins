import {
  compareVersions,
  isVersionGreater,
  mapDefaulTypesListToVersions,
  sortByVersionDescending,
} from './version.utils';
import { TypeKind } from '../../../shared/model';
import type { DefaultType, DefaultTypeList } from '../types';

function createDefaultType(id: string, version: string): DefaultType {
  return {
    id,
    kind: TypeKind.DOType,
    instance: 'SPS',
    version,
    description: '',
    dataCompatibilityVersion: '1.0.0',
    updatedAt: new Date('2026-01-01T00:00:00Z'),
  };
}

describe('version.utils', () => {
  test('compareVersions returns positive when first version is newer', () => {
    expect(compareVersions('2.0.0', '1.9.9')).toBeGreaterThan(0);
  });

  test('compareVersions returns negative when first version is older', () => {
    expect(compareVersions('1.2.3', '1.2.4')).toBeLessThan(0);
  });

  test('compareVersions returns zero for equal versions', () => {
    expect(compareVersions('1.2.3', '1.2.3')).toBe(0);
  });

  test('isVersionGreater returns true only for newer versions', () => {
    expect(isVersionGreater('1.0.1', '1.0.0')).toBe(true);
    expect(isVersionGreater('1.0.0', '1.0.1')).toBe(false);
    expect(isVersionGreater('1.0.0', '1.0.0')).toBe(false);
  });

  test('sortByVersionDescending sorts versions newest to oldest without mutating input', () => {
    const input = [
      createDefaultType('c', '1.0.0'),
      createDefaultType('a', '2.0.0'),
      createDefaultType('b', '1.2.0'),
    ];

    const originalOrder = input.map((item) => item.id);
    const sorted = sortByVersionDescending(input);

    expect(sorted.map((item) => item.version)).toEqual(['2.0.0', '1.2.0', '1.0.0']);
    expect(input.map((item) => item.id)).toEqual(originalOrder);
  });

  test('mapDefaulTypesListToVersions maps sorted versions with latest/locked flags', () => {
    const list: DefaultTypeList = {
      content: [
        createDefaultType('a', '1.0.0'),
        createDefaultType('b', '2.1.0'),
        createDefaultType('c', '2.0.5'),
      ],
      totalElements: 3,
      totalPages: 1,
      page: 0,
      size: 3,
    };

    const mapped = mapDefaulTypesListToVersions(list);

    expect(mapped).toEqual([
      { version: '2.1.0', latest: true, locked: false, secondaryText: undefined },
      { version: '2.0.5', latest: false, locked: true, secondaryText: 'Read-only' },
      { version: '1.0.0', latest: false, locked: true, secondaryText: 'Read-only' },
    ]);
  });

  test('mapDefaulTypesListToVersions returns empty array for missing content', () => {
    expect(mapDefaulTypesListToVersions({})).toEqual([]);
  });
});
