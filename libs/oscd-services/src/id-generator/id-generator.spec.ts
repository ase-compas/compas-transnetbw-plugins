import { OscdIdGenerator } from './id-generator';

describe('IdGeneratorService', () => {
  it('should generate id', () => {
    const generator = new OscdIdGenerator({
      segments: [
        { type: 'TEXT', value: 'kind-' },
        { type: 'VARIABLE', value: 'kind' },
        { type: 'TEXT', value: '-instance-' },
        { type: 'VARIABLE', value: 'instance' },
        { type: 'TEXT', value: '-uuid-' },
        { type: 'UUID' },
      ],
    });

    const id = generator.generateId({
      variables: {
        kind: 'EnumType',
        instance: 'MyInstance',
      }
    });

    expect(id).toMatch(/^kind-EnumType-instance-MyInstance-uuid-[a-f0-9]{12}$/);
  });

  it('should throw error if sequence segment is missing in context', () => {
    const generator = new OscdIdGenerator({
      segments: [{ type: 'TEXT', value: 'seq-' }, { type: 'SEQUENCE' }],
    });

    expect(() => {
      generator.generateId({});
    }).toThrowError('Sequence missing');
  });

  it('should generate id with sequence', () => {
    const generator = new OscdIdGenerator({
      segments: [{ type: 'TEXT', value: 'seq-' }, { type: 'SEQUENCE' }],
    });

    const id = generator.generateId({
      sequence: 42,
    });
    expect(id).toBe('seq-42');
  });

  it('should generate id with timestamp', () => {
    const generator = new OscdIdGenerator({
      segments: [{ type: 'TEXT', value: 'ts-' }, { type: 'TIMESTAMP' }],
    });

    const id = generator.generateId({});
    expect(id).toMatch(/^ts-\d{13}$/);
  });

  it('should generate id with variable', () => {
    const generator = new OscdIdGenerator({
      segments: [{ type: 'TEXT', value: 'var-' }, { type: 'VARIABLE', value: 'myVar' }],
    });

    const id = generator.generateId({ variables: { myVar: 'VariableValue' } });
    expect(id).toBe('var-VariableValue');
  });
});

