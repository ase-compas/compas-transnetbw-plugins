import type { IdFormatRepository } from '../repositories';
import { OscdIdGenerator } from '@oscd-transnet-plugins/oscd-services/id-generator';

export class IdGeneratorService {
  constructor(private idFormatRepository: IdFormatRepository) {}

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





