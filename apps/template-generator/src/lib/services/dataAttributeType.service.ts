import type { DAType } from '../domain';
import { DataAttributeTypeRepository } from '../repositories';

export class DataAttributeTypeService {
  constructor(private repo: DataAttributeTypeRepository) {}

  findAll(): DAType[] {
    return this.repo.findAll();
  }

  findById(id: string): DAType | null {
    return this.repo.findById(id);
  }

  create(node: DAType): void {
    this.repo.insert(node);
  }

  update(id: string, updated: Partial<DAType>): void {
    const existing = this.repo.findById(id);
    if (!existing) throw new Error(`DataAttributeType with id ${id} not found`);

    const merged = { ...existing, ...updated };
    this.repo.update(merged);
  }

  delete(id: string): void {
    this.repo.delete(id);
  }
}
