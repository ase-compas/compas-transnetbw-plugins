import { OscdIdGenerator, type IdFormat, type IdSegment } from "@oscd-transnet-plugins/oscd-services/id-generator";
import type { IdComponent } from "./types";
import { getContext, setContext } from "svelte";

interface IdSegmentRef {
  id: number;
  segment: IdSegment;
}


class IdFormatEditorState {

  private segmentId = 0;
  private exampleContexts = [];


  components: IdComponent[] = $state([]);
  segments: IdSegmentRef[] = $state([]);

  idFormat: IdFormat = $derived.by(() => ({
    segments: this.segments.map(s => s.segment)
  }));

  public initState(components: IdComponent[], initialFormat: IdFormat, exampleContexts?: any[]) {
    this.components = components;
    this.exampleContexts = exampleContexts || [];

    if (!initialFormat || !initialFormat.segments || initialFormat.segments.length === 0) {
      return;
    }

    this.segments = initialFormat.segments.map(s => ({
      id: this.segmentId++,
      segment: s
    }));
  }

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
    if (!this.segments || this.segments.length === 0) {
      return [];
    }
    const generator = new OscdIdGenerator(this.idFormat);
    return this.exampleContexts.map(ctx => generator.generateId({ variables: ctx }));
  });

}

const ID_FORMAT_EDITOR_KEY = 'ID-FORMAT-EDITOR-STATE';

export function setIdFormatEditorState() {
  return setContext(ID_FORMAT_EDITOR_KEY, new IdFormatEditorState());
}

export function getIdFormatEditorState() {
  return getContext<ReturnType<typeof setIdFormatEditorState>>(ID_FORMAT_EDITOR_KEY);
}
