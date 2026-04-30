/**
 * Represents the state of an SCL document within a plugin context.
 *
 * Used in two ways:
 *  1. Module-level singleton (`docState`) — kept in sync by App.svelte via `$effect`.
 *  2. Local instance in DefaultTypeDetails — tracks an isolated sub-document
 *     for default-type editing.
 */
export class DocState {
  doc: XMLDocument | null = $state(null);
  editCount: number = $state(-1);

  setDoc(newDoc: XMLDocument): void {
    this.doc = newDoc;
  }

  setEditCount(newCount: number): void {
    this.editCount = newCount;
  }
}

export const docState = new DocState();