import {
  buildInsert,
  buildRemove,
  buildSetTextContent,
  dispatchEditEvent,
} from '@oscd-transnet-plugins/oscd-event-api';
import type { EditV2 } from '@oscd-transnet-plugins/oscd-event-api';

const PRIVATE_NS_PREFIX = 'compas';
export const PRIVATE_WORKFLOW_PROCESS_ID = `${PRIVATE_NS_PREFIX}:workflowProcessId`;
export const PRIVATE_WORKFLOW_LAST_PLUGIN_ID = `${PRIVATE_NS_PREFIX}:workflowLastPluginId`;

export type EngineeringWorkflowState = {
  processId: string | null;
  lastPluginId: string | null;
};

function root(doc: XMLDocument): Element {
  return doc.documentElement;
}

function findHeader(doc: XMLDocument): Element | null {
  return root(doc).querySelector(':scope > Header');
}

function findPrivate(doc: XMLDocument, type: string): Element | null {
  return root(doc).querySelector(`:scope > Private[type="${type}"]`);
}

function createPrivate(doc: XMLDocument, type: string, value: string): Element {
  const el = doc.createElementNS(root(doc).namespaceURI, 'Private');
  el.setAttribute('type', type);
  el.textContent = value;
  return el;
}

function upsertPrivate(
  doc: XMLDocument,
  edits: EditV2[],
  type: string,
  value: string | null | undefined,
) {
  const existing = findPrivate(doc, type);
  const text = (value ?? '').trim();

  if (!text) {
    if (existing) edits.push(buildRemove(existing));
    return;
  }

  if (existing) {
    edits.push(buildSetTextContent(existing, text));
  } else {
    const header = findHeader(doc);
    edits.push(buildInsert(root(doc), createPrivate(doc, type, text), header));
  }
}

export function readEngineeringWorkflowState(
  doc: XMLDocument,
): EngineeringWorkflowState {
  const read = (type: string) =>
    findPrivate(doc, type)?.textContent?.trim() || null;
  return {
    processId: read(PRIVATE_WORKFLOW_PROCESS_ID),
    lastPluginId: read(PRIVATE_WORKFLOW_LAST_PLUGIN_ID),
  };
}

export function writeEngineeringWorkflowState(
  doc: XMLDocument,
  host: HTMLElement,
  patch: Partial<EngineeringWorkflowState>,
): boolean {
  const edits: EditV2[] = [];

  if ('processId' in patch)
    upsertPrivate(doc, edits, PRIVATE_WORKFLOW_PROCESS_ID, patch.processId);
  if ('lastPluginId' in patch)
    upsertPrivate(
      doc,
      edits,
      PRIVATE_WORKFLOW_LAST_PLUGIN_ID,
      patch.lastPluginId,
    );

  return edits.length ? dispatchEditEvent(host, edits) : false;
}
