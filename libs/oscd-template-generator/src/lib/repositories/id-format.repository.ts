import type { IdFormat } from '@oscd-transnet-plugins/oscd-services/id-generator';

export interface IdFormatDefinition {
  id: string;
  description?: string;
  format: IdFormat;
}

export interface IdFormatRepository {
  getFormat(id: string): IdFormat;
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
}
