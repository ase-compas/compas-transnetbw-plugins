import type { ValidationEntry } from './types';
import { validations } from './stores.svelte';

export function addValidationEntry(entry: ValidationEntry) {
  validations.validationEntries = [
    ...(validations.validationEntries ?? []),
    entry,
  ];
}
