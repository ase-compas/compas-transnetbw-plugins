import type { EnumType } from '../domain';
import { EnumTypeRepository } from '../repositories';

export class EnumTypeService {
  constructor(private repo: EnumTypeRepository) {}

  findAll(): EnumType[] {
    return this.repo.findAll();
  }

  findById(id: string): EnumType | null {
    return this.repo.findById(id);
  }

  create(node: EnumType): void {
    this.repo.insert(node);
  }

  update(id: string, updated: Partial<EnumType>): void {
    const existing = this.repo.findById(id);
    if (!existing) throw new Error(`EnumType with id ${id} not found`);

    const merged = { ...existing, ...updated };
    this.repo.update(merged);
  }

  delete(id: string): void {
    this.repo.delete(id);
  }
}
