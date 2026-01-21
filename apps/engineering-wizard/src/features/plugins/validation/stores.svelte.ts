import type { ValidationEntry } from './types';

export const validations = $state<{
  validationEntries: ValidationEntry[]
}>({
  validationEntries: []
});

