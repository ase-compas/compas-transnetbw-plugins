import { v4 as uuid } from 'uuid';
import {
  toStoredValidation,
  type XPathValidation,
} from '@oscd-transnet-plugins/shared';

export type IdentifiedValidation = XPathValidation & { id: string };

export type ValidationImportResult = {
  added: IdentifiedValidation[];
  skipped: number;
  renamed: { from: string; to: string }[];
};

export function ensureValidationId(validation: XPathValidation): string {
  return (validation.id ??= uuid());
}

export function createValidation(
  validation: XPathValidation,
): IdentifiedValidation {
  return {
    ...toStoredValidation(validation),
    id: validation.id ?? uuid(),
  };
}

export function compareValidationTitles(
  a: XPathValidation,
  b: XPathValidation,
): number {
  return a.title.localeCompare(b.title);
}

export function createValidationCopyTitle(
  title: string,
  existing: ReadonlySet<string>,
): string {
  const base = title.replace(/ \(copy(?: \d+)?\)$/, '');
  let copy = `${base} (copy)`;
  for (let n = 2; existing.has(copy); n++) copy = `${base} (copy ${n})`;
  return copy;
}

export function prepareValidationImport(
  existing: readonly XPathValidation[],
  incoming: readonly XPathValidation[],
): ValidationImportResult {
  const ids = new Set(existing.map(({ id }) => id));
  const titles = new Set(existing.map(({ title }) => title));
  const result: ValidationImportResult = { added: [], skipped: 0, renamed: [] };

  for (const validation of incoming) {
    if (validation.id !== undefined && ids.has(validation.id)) {
      result.skipped++;
      continue;
    }

    const stored = createValidation(validation);
    if (titles.has(stored.title)) {
      const title = createValidationCopyTitle(stored.title, titles);
      result.renamed.push({ from: stored.title, to: title });
      stored.title = title;
    }
    ids.add(stored.id);
    titles.add(stored.title);
    result.added.push(stored);
  }

  return result;
}
