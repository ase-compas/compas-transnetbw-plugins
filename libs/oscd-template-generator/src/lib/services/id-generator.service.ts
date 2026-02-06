import type { IdFormatRepository } from '../repositories';
import { type IdFormat, OscdIdGenerator } from '@oscd-transnet-plugins/oscd-services/id-generator';

export class IdGeneratorService {

  static readonly DEFAULT_FORMAT_ID = 'DEFAULT-FORMAT';

  constructor(private idFormatRepository: IdFormatRepository) {}

  getFormat(formatId: string): IdFormat | null {
    try {
      return this.idFormatRepository.getFormat(formatId);
    } catch (error) {
      return null;
    }
  }

  setDefaultFormat(format: IdFormat): void {
    this.idFormatRepository.setFormat(IdGeneratorService.DEFAULT_FORMAT_ID, format);
  }

  generateDefaultId(instance: string, reference?: string): string {
    if (reference === undefined)  {
      reference = instance;
    }

    const format = this.idFormatRepository.getFormat(IdGeneratorService.DEFAULT_FORMAT_ID);
    const generator = new OscdIdGenerator(format);
    return generator.generateId({ variables: { instance, reference } });
  }

  generateInstancePrefixId(instance: string): string {
    const format = this.idFormatRepository.getFormat('INSTANCE-PREFIX-UUID');
    const generator = new OscdIdGenerator(format);
    return generator.generateId({ variables: { instance } });
  }

  generateReferencePrefixId(reference: string): string {
    const format = this.idFormatRepository.getFormat('REFERENCE-PREFIX-UUID');
    const generator = new OscdIdGenerator(format);
    return generator.generateId({ variables: { reference } });
  }

  generateCustomId(formatId: string, variables: Record<string, string | number>): string {
    const format = this.idFormatRepository.getFormat(formatId);
    const generator = new OscdIdGenerator(format);
    return generator.generateId({ variables });
  }
}





