import type { IdComponent } from './types';
import  {
  type IdFormat,
  type IdSegment, OscdIdGenerator,
} from '@oscd-transnet-plugins/oscd-services/id-generator';
import { getContext, setContext } from 'svelte';

interface IdSegmentRef {
  id: number;
  segment: IdSegment;
}

class IdBuilderState {

  private componentId = 6
  private segmentId = 0;
  private exampleContexts = [
    { instance: 'LLN0', reference: 'Beh' },        // Logical node behavior
    { instance: 'SPS', reference: 'Health' },      // Single point status for health
    { instance: 'XCBR1', reference: 'Pos' },       // Circuit breaker position
    { instance: 'CSWI', reference: 'St' },         // Switch status
    { instance: 'MMXU1', reference: 'Aphs' }      // Measurement unit: phase current
  ];

  components: IdComponent[] = $state([
    { id: '2', segment: {type: 'UUID'} },
    { id: '3', segment: {type: 'VARIABLE', value: 'instance'} },
    { id: '4', segment: {type: 'VARIABLE', value: 'reference'} },
    { id: '5', segment: {type: 'DASH'}},
    { id: '6', segment: {type: 'UNDERSCORE'}},
  ]);

  segments: IdSegmentRef[] = $state([]);

  idFormat: IdFormat = $derived.by(() => ({
    segments: this.segments.map(s => s.segment)
  }))

  baseComponents = $derived.by(() =>
    this.components.filter(c => c.segment.type !== 'TEXT')
  );

  textComponents = $derived.by(() =>
    this.components.filter(c => c.segment.type === 'TEXT')
  );

  addTextComponent(text: string) {
    this.components.push({
      id: (this.componentId++).toString(),
      segment: { type: 'TEXT', value: text }
    });
  }

  addSegment(component: IdComponent) {
    this.segments.push({
      id: this.segmentId++,
      segment: component.segment,
    });
  }

  addTextSegment(text: string) {
    this.segments.push({
      id: this.segmentId++,
      segment: { type: 'TEXT', value: text },
    });
  }

  removeSegment(segmentId: number) {
    this.segments = this.segments.filter(s => s.id !== segmentId);
  }

  previewIds = $derived.by(() => {
    if(!this.segments || this.segments.length === 0) {
      return [];
    }
    const generator = new OscdIdGenerator(this.idFormat);
    return this.exampleContexts.map(ctx => generator.generateId({variables: ctx}));
  });
}

const ID_BUILDER_KEY = 'ID-BUILDER-STATE';

export function setIdBuilderState() {
  return setContext(ID_BUILDER_KEY, new IdBuilderState());
}

export function getIdBuilderState() {
  return getContext<ReturnType<typeof setIdBuilderState>>(ID_BUILDER_KEY);
}
