import type { IdFormat } from '@oscd-transnet-plugins/oscd-services/id-generator';

export interface IdFormatDefinition {
  id: string;
  description?: string;
  format: IdFormat;
}

export interface IdFormatRepository {
  getFormat(id: string): IdFormat;
  setFormat(id: string, format: IdFormat): void;
}

export class InMemoryIdFormatRepository implements IdFormatRepository {
  private formats = new Map<string, IdFormat>();

  constructor(definitions: IdFormatDefinition[]) {
    definitions.forEach(d => this.formats.set(d.id, d.format));
  }

  getFormat(id: string): IdFormat {
    const format = this.formats.get(id);
    if (!format) throw new Error(`Unknown ID format: ${id}`);
    return format;
  }

  setFormat(id: string, format: IdFormat): void {
    this.formats.set(id, format);
  }
}

export class LocalStorageIdFormatRepository implements IdFormatRepository {
  private storageKeyPrefix = 'id-format-';

  getFormat(id: string): IdFormat {
    const item = localStorage.getItem(this.storageKeyPrefix + id);
    if (!item) throw new Error(`Unknown ID format: ${id}`);
    return JSON.parse(item) as IdFormat;
  }

  setFormat(id: string, format: IdFormat): void {
    localStorage.setItem(this.storageKeyPrefix + id, JSON.stringify(format));
  }
}
