import type { LNodeType, ReferencedTypes } from '../domain';
import type { LNodeTypeRepository } from '../repositories';

export class LNodeTypeService {
  constructor(private repo: LNodeTypeRepository) {}

  findAll(): LNodeType[] {
    return this.repo.findAll();
  }

  findById(id: string): LNodeType | null {
    return this.repo.findById(id);
  }

  findReferencedTypesById(id: string): ReferencedTypes {
    return this.repo.findReferencedTypesById(id);
  }

  isIdTaken(id: string): boolean {
    return this.findById(id) !== null;
  }

  duplicate(id: string): LNodeType | null {
    const existing = this.repo.findById(id);
    if (!existing) return null;

    const newId = this.generateUniqueId(existing.id);
    const duplicate: LNodeType = {
      ...existing,
      id: newId,
    };

    this.repo.insert(duplicate);
    return duplicate;
  }

  create(node: LNodeType): void {
    this.repo.insert(node);
  }

  update(id: string, updated: Partial<LNodeType>): void {
    const existing = this.repo.findById(id);
    if (!existing) throw new Error(`LNodeType with id ${id} not found`);

    const merged = { ...existing, ...updated };
    this.repo.update(merged);
  }

  delete(id: string): void {
    this.repo.delete(id);
  }

  private generateUniqueId(baseId: string): string {
    let newId = `${baseId}_copy`;
    let counter = 2;

    while (this.repo.findById(newId)) {
      newId = `${baseId}_copy${counter}`;
      counter++;
    }

    return newId;
  }
}
