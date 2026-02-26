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

  private segmentId = 0;
  private exampleContexts = [
    { instance: 'LLN0', reference: 'Beh' },        // Logical node behavior
    { instance: 'SPS', reference: 'Health' },      // Single point status for health
    { instance: 'XCBR1', reference: 'Pos' },       // Circuit breaker position
    { instance: 'CSWI', reference: 'St' },        // Switch status
    { instance: 'MMXU1', reference: 'Aphs' }      // Measurement unit: phase current
  ];

  // state
  components: IdComponent[] = $state([
    { id: '2', description: 'A random 12-character UUID',segment: {type: 'UUID'} },
    { id: '3', description: 'Instance of the data type (e.g. LLN0, ENS, ...)', segment: {type: 'VARIABLE', value: 'instance'} },
    { id: '4', description: 'References the parent object (e.g., adding a Health reference while in LLN0)',segment: {type: 'VARIABLE', value: 'reference'} },
    { id: '5', segment: {type: 'DASH'}},
    { id: '6', segment: {type: 'UNDERSCORE'}},
  ]);

  segments: IdSegmentRef[] = $state([]);

  // derived
  idFormat: IdFormat = $derived.by(() => ({
    segments: this.segments.map(s => s.segment)
  }));

  // functions
  setIdFormat(format: IdFormat) {
    this.segments = format.segments.map(s => ({
      id: this.segmentId++,
      segment: s
    }));
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
