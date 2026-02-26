import type { IdSegment } from '@oscd-transnet-plugins/oscd-services/id-generator';

export interface IdComponent {
  id: string;
  description?: string;
  segment: IdSegment;
}
