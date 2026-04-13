import { TypeKind, type SimpleDataType } from '../model';
import { isTypeAssignable, sortSimpleDataTypes } from './data-type.utils';

function dt(
  id: string,
  typeKind: TypeKind,
  instanceType?: string,
  references = 0,
): SimpleDataType {
  return { id, typeKind, instanceType, references };
}

describe('data-type.utils', () => {
  describe('sortSimpleDataTypes', () => {
    test('sorts by type kind order, then instance type, then id', () => {
      const input: SimpleDataType[] = [
        dt('en2', TypeKind.EnumType, 'CtlModelKind'),
        dt('doB', TypeKind.DOType, 'INS'),
        dt('da2', TypeKind.DAType, 'Quality'),
        dt('lnA', TypeKind.LNodeType, 'LLN0'),
        dt('doA', TypeKind.DOType, 'SPS'),
        dt('da1', TypeKind.DAType, 'Quality'),
        dt('lnB', TypeKind.LNodeType, 'XSWI'),
        dt('en1', TypeKind.EnumType, 'CtlModelKind'),
      ];

      const sorted = sortSimpleDataTypes(input);

      expect(sorted.map((item) => item.id)).toEqual([
        'lnA',
        'lnB',
        'doB',
        'doA',
        'da1',
        'da2',
        'en1',
        'en2',
      ]);
    });

    test('treats missing instanceType as empty string during comparison', () => {
      const input: SimpleDataType[] = [
        dt('doWithInstance', TypeKind.DOType, 'SPS'),
        dt('doNoInstance', TypeKind.DOType),
      ];

      const sorted = sortSimpleDataTypes(input);

      expect(sorted.map((item) => item.id)).toEqual(['doNoInstance', 'doWithInstance']);
    });

    test('does not mutate original array', () => {
      const input: SimpleDataType[] = [
        dt('b', TypeKind.DOType, 'INS'),
        dt('a', TypeKind.DOType, 'INS'),
      ];

      const originalIds = input.map((item) => item.id);
      const sorted = sortSimpleDataTypes(input);

      expect(input.map((item) => item.id)).toEqual(originalIds);
      expect(sorted.map((item) => item.id)).toEqual(['a', 'b']);
    });
  });

  describe('isTypeAssignable', () => {
    test('returns false for undefined-like reference object', () => {
      expect(
        isTypeAssignable(TypeKind.DOType, 'SPS', undefined as unknown as SimpleDataType),
      ).toBe(false);
    });

    test('returns false when type kind does not match', () => {
      const target = dt('da1', TypeKind.DAType, 'Quality');

      expect(isTypeAssignable(TypeKind.DOType, 'SPS', target)).toBe(false);
    });

    test('returns true when type kind matches and expected instance is undefined', () => {
      const target = dt('do1', TypeKind.DOType, 'SPS');

      expect(isTypeAssignable(TypeKind.DOType, undefined, target)).toBe(true);
    });

    test('returns true when type and instance match exactly', () => {
      const target = dt('do1', TypeKind.DOType, 'SPS');

      expect(isTypeAssignable(TypeKind.DOType, 'SPS', target)).toBe(true);
    });

    test('returns true when expected instance is set but target has no instance', () => {
      const target = dt('do1', TypeKind.DOType);

      expect(isTypeAssignable(TypeKind.DOType, 'SPS', target)).toBe(true);
    });

    test('returns false when type matches but instance mismatches and target has an instance', () => {
      const target = dt('do1', TypeKind.DOType, 'INS');

      expect(isTypeAssignable(TypeKind.DOType, 'SPS', target)).toBe(false);
    });
  });
});
