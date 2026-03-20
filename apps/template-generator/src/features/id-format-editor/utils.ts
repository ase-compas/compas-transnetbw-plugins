import type { IdSegment } from '@oscd-transnet-plugins/oscd-services/id-generator';

export function label(segment: IdSegment): string {
  switch (segment.type) {
    case 'DASH': return 'DASH(-)';
    case 'UNDERSCORE': return 'UNDERSCORE(_)';
    case 'VARIABLE': return segment.value.toUpperCase();
    case 'UUID': return 'UUID';
    case 'SEQUENCE': return 'SEQ';
    case 'TIMESTAMP': return 'TIMESTAMP';
    case 'TEXT': return `"${segment.value}"`;
    default: return 'UNKNOWN';
  }
}
