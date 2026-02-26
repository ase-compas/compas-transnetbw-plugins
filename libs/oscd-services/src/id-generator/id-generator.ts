/**
 * Represents the types of segments that can compose an ID.
 */
export type SegmentType =
  | 'TEXT'        // Static text segment
  | 'VARIABLE'    // Value taken from the context (like a variable)
  | 'UUID'        // Randomly generated UUID segment (max length limited by idLength)
  | 'SEQUENCE'    // Numeric sequence segment
  | 'TIMESTAMP'   // Current timestamp in milliseconds (13 digits)
  | 'DASH'        // A dash separator (-)
  | 'UNDERSCORE';  // A underline separator (_)

/**
 * Represents a segment of an ID.
 */
export interface IdSegment {
  type: SegmentType;
  value?: string;
}

/**
 * Represents the format of an ID composed of multiple segments.
 */
export interface IdFormat {
  segments: IdSegment[];
}

/**
 * Context information required to generate an ID.
 */
export interface IdContext {
  /** Optional map of variable names for VARIABLE segments */
  variables?: Record<string, string | number>;

  sequence?: number;
}

/**
 * Interface for ID generators.
 */
export interface IdGenerator {
  /**
   * Generates an ID based on the provided context.
   * @param ctx The context for ID generation.
   * @returns The generated ID as a string.
   */
  generateId(ctx: IdContext): string;
}

/**
 * Implementation of the IdGenerator that generates IDs based on a specified format.
 * @example
 * const generator = new OscdIdGenerator({
 *   segments: [
 *     { type: 'TEXT', value: '$' },
 *     { type: 'VARIABLE', value: 'instnace' },
 *     { type: 'TEXT', value: '_$' },
 *     { type: 'UUID' }
 *  ]
 *  });
 *
 * const id = generator.generateId({
 *  variabels: { instance: 'LNN0' }
 *  });
 *
 */
export class OscdIdGenerator implements IdGenerator {
  /**
   * @param format ID format describing the segments
   * @param idLength Optional length for UUID and HASH segments (default: 12)
   */
  constructor(
    private readonly format: IdFormat,
    private readonly idLength = 12,
  ) {}

  generateId(ctx: IdContext): string {
    return this.format.segments
      .map((s) => this.resolveSegment(s, ctx))
      .join('');
  }

  /**
   * Resolves a single segment based on its type and the provided context.
   * @param segment The segment to resolve.
   * @param ctx The context for ID generation.
   */
  private resolveSegment(segment: IdSegment, ctx: IdContext): string {
    switch (segment.type) {
      case 'TEXT':
        return segment.value || '';
      case 'DASH':
        return '-';
      case 'UNDERSCORE':
        return '_';
      case 'VARIABLE':
        if (!segment.value) throw new Error('Variable name missing');
        if (!ctx.variables || !ctx.variables[segment.value]) {
          throw new Error(`Variable ${segment.value} missing in context`);
        }
        return String(ctx.variables[segment.value]);
      case 'UUID':
        return generateUUID().replace(/-/g, '').slice(0, this.idLength); // shorter UUID
      case 'SEQUENCE':
        if (ctx.sequence == null) throw new Error('Sequence missing');
        return String(ctx.sequence);
      case 'TIMESTAMP':
        return Date.now().toString();
      default:
        throw new Error(`Unknown segment type: ${segment.type}`);
    }
  }
}

/**
 * Generates a random UUID (version 4).
 * @returns A randomly generated UUID string.
 */
export function generateUUID(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  } else {
    // Fallback for environments without crypto.randomUUID
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === "x" ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
