export const documentStore = $state<{
  doc: XMLDocument | null;
  revision: number;
}>({
  doc: null,
  revision: 0,
});

let previousDocument: XMLDocument | null = null;
let previousEditCount: number | undefined;
const pendingWorkflowStateEdits: Array<ReturnType<typeof setTimeout>> = [];

export function markWorkflowStateEdit(): void {
  const timeout = setTimeout(() => {
    const index = pendingWorkflowStateEdits.indexOf(timeout);
    if (index !== -1) pendingWorkflowStateEdits.splice(index, 1);
  }, 1000);
  pendingWorkflowStateEdits.push(timeout);
}

export function updateDocumentStore(
  document: XMLDocument | null,
  editCount: number | undefined,
): void {
  if (document !== previousDocument || editCount !== previousEditCount) {
    const workflowStateEdit = pendingWorkflowStateEdits.shift();
    if (workflowStateEdit) {
      clearTimeout(workflowStateEdit);
    } else {
      documentStore.revision += 1;
    }
    previousDocument = document;
    previousEditCount = editCount;
  }

  documentStore.doc = document;
}
