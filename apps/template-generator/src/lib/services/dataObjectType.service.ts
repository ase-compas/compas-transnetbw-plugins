import type { DOType, ReferencedTypes } from '../domain';
import { DataObjectTypeRepository } from '../repositories';

export class DataObjectTypeService {
  constructor(private repo: DataObjectTypeRepository) {}

  findAll(): DOType[] {
    return this.repo.findAll();
  }

  findById(id: string): DOType | null {
    return this.repo.findById(id);
  }

  public findReferencedTypesById(id: string, childNameFilter: string[] = []): ReferencedTypes | null {
    return this.repo.findReferencedTypesById(id, childNameFilter);
  }

    create(node: DOType): void {
    this.repo.insert(node);
  }

  update(id: string, updated: Partial<DOType>): void {
    const existing = this.repo.findById(id);
    if (!existing) throw new Error(`DataObjectType with id ${id} not found`);

    const merged = { ...existing, ...updated };
    this.repo.update(merged);
  }

  delete(id: string): void {
    this.repo.delete(id);
  }
}
