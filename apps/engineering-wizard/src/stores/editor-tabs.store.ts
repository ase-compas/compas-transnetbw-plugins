import { writable } from 'svelte/store';
import { setEditorTabsVisibility } from '../services/engineering-workflow.service';

// Global reactive store for the editor tabs visibility across the app.
// Defaults to visible; views can set it as needed.
export const editorTabsVisible = writable<boolean>(true);

// Side-effect: propagate visibility changes to the host layout via the existing service.
editorTabsVisible.subscribe((visible) => {
  setEditorTabsVisibility(visible);
});

