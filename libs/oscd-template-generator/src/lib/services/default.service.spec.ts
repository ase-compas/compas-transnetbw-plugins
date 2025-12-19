import { type DefaultConfig } from '../domain/default.model';
import { IDefaultService, InMemoryDefaultService, LocalStorageDefaultService } from './default.service';
import { DataTypeKind } from '../domain/core.model';

describe('InMemoryDefaultService', () => {
  defaultServiceTests(() => new InMemoryDefaultService());
});

describe('LocalStorageDefaultService', () => {
  beforeEach(() => localStorage.clear()); // ensure fresh storage
  defaultServiceTests(() => new LocalStorageDefaultService());
});


function defaultServiceTests(createService: () => IDefaultService) {
  describe('DefaultService contract', () => {
    let service: IDefaultService;

    beforeEach(() => {
      service = createService();
    });

    const defaultConfig: DefaultConfig = {
      key: { kind: DataTypeKind.DOType, instanceType: 'SPS' },
      description: 'Default DOType SPS',
      rootType: {
        id: 'DO1',
        kind: DataTypeKind.DOType,
        instanceType: 'SPS',
        children: [
          { name: 'stVal', typeRef: 'DA1' },
          { name: 'q', typeRef: 'DA2' }
        ]
      },
      referencedTypes: [
        { id: 'DA1', kind: DataTypeKind.DAType, instanceType: 'SPS', children: [] },
        { id: 'DA2', kind: DataTypeKind.DAType, instanceType: 'SPS', children: [] }
      ]
    };

    it('stores and retrieves a default', async () => {
      await service.setDefault(defaultConfig);
      const retrieved = await service.getDefault({ kind: DataTypeKind.DOType, instanceType: 'SPS' });
      expect(retrieved).toBeDefined();
      expect(retrieved?.rootType.id).toBe('DO1');
    });

    it('clears a default', async () => {
      await service.setDefault(defaultConfig);
      await service.clearDefault({ kind: DataTypeKind.DOType, instanceType: 'SPS' });
      const retrieved = await service.getDefault({ kind: DataTypeKind.DOType, instanceType: 'SPS' });
      expect(retrieved).toBeUndefined();
    });

    it('throws if rootType missing required attributes', async () => {
      const invalid = { ...defaultConfig, rootType: { ...defaultConfig.rootType, id: '' } };
      await expect(service.setDefault(invalid))
        .rejects
        .toThrow('rootType must have id, kind, and instanceType defined.');
    });

    it('throws if typeRef does not exist', async () => {
      const invalid = { ...defaultConfig, rootType: { ...defaultConfig.rootType, children: [{ name: 'bad', typeRef: 'X' }] } };
      await expect(service.setDefault(invalid)).rejects.toThrow('Child "bad" references unknown typeRef "X".');
    });
  });
}
