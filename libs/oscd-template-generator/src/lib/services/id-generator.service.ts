import type { IdFormatRepository } from '../repositories';
import { type IdFormat, OscdIdGenerator } from '@oscd-transnet-plugins/oscd-services/id-generator';
import {
  OSCD_INSTANCE_PREFIX_ID_FORMAT,
  OSCD_REFERENCE_PREFIX_ID_FORMAT,
} from '../utils/id-formats';

export class IdGeneratorService {

  static readonly GENERAL_FORMAT_ID = 'GENERAL-FORMAT';
  static readonly REFERENCE_FORMAT_ID = 'REFERENCE-FORMAT';

  constructor(private idFormatRepository: IdFormatRepository) {}

  setGeneralIdFormat(format: IdFormat): void {
    this.idFormatRepository.setFormat(IdGeneratorService.GENERAL_FORMAT_ID, format);
  }

  generateGeneralId(instance: string): string {
    let format: IdFormat;
    try {
      format = this.idFormatRepository.getFormat(
        IdGeneratorService.GENERAL_FORMAT_ID,
      );
    } catch (error) {
      format = OSCD_INSTANCE_PREFIX_ID_FORMAT;
    }
    const generator = new OscdIdGenerator(format);
    return generator.generateId({ variables: { instance } });
  }

  getGeneralIdFormat(): IdFormat {
    try {
      return this.idFormatRepository.getFormat(IdGeneratorService.GENERAL_FORMAT_ID);
    } catch (error) {
      return OSCD_INSTANCE_PREFIX_ID_FORMAT;
    }
  }

  setReferenceFormatId(format: IdFormat): void {
    this.idFormatRepository.setFormat(IdGeneratorService.REFERENCE_FORMAT_ID, format);
  }

  generateReferenceId(instance: string, reference: string): string {
    let format: IdFormat;
    try {
      format = this.idFormatRepository.getFormat(
        IdGeneratorService.REFERENCE_FORMAT_ID,
      );
    } catch (error) {
      format = OSCD_INSTANCE_PREFIX_ID_FORMAT;
    }
    const generator = new OscdIdGenerator(format);
    return generator.generateId({ variables: { instance, reference } });
  }

  getReferenceIdFormat(): IdFormat {
    try {
      return this.idFormatRepository.getFormat(IdGeneratorService.REFERENCE_FORMAT_ID);
    } catch {
      return OSCD_REFERENCE_PREFIX_ID_FORMAT;
    }
  }

  generateCustomId(formatId: string, variables: Record<string, string | number>): string {
    const format = this.idFormatRepository.getFormat(formatId);
    const generator = new OscdIdGenerator(format);
    return generator.generateId({ variables });
  }
}





