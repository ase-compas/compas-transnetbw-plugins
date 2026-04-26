import type { CoMPASPlugin, Process } from '@oscd-transnet-plugins/shared';

// ---------------------------------------------------------------------------
// Source of truth — the full list of processes.
// ---------------------------------------------------------------------------

export const engineeringProcesses = $state<{ processes: Process[] }>({
  processes: [],
});

export const engineeringProcessesStatus = $state<{
  loading: boolean;
  error: string;
  saving: boolean;
  saveError: string;
}>({
  loading: false,
  error: '',
  saving: false,
  saveError: '',
});

// ---------------------------------------------------------------------------
// Selected & running process — stored as IDs so derived objects never go
// stale after a mutation. Exposed as reactive objects with `.process` getters
// that always resolve from the live process list.
// ---------------------------------------------------------------------------

function findProcess(id: string | null): Process | null {
  if (!id) return null;
  return engineeringProcesses.processes?.find((p) => p.id === id) ?? null;
}

class SelectedProcessState {
  #id = $state<string | null>(null);

  get process(): Process | null {
    return findProcess(this.#id);
  }
  set process(p: Process | null) {
    this.#id = p?.id ?? null;
  }
}

class EditingState {
  isEditing = $state(false);
}

class RunningProcessState {
  #id = $state<string | null>(null);
  lastSelectedPluginId = $state<string | null>(null);

  get process(): Process | null {
    return findProcess(this.#id);
  }
  set process(p: Process | null) {
    this.#id = p?.id ?? null;
  }
}

export const selectedEngineeringProcess = new SelectedProcessState();
export const engineeringProcessEditing = new EditingState();
export const runningEngineeringProcess = new RunningProcessState();

export const corePlugins = $state<{ plugins: CoMPASPlugin[] }>({
  plugins: [],
});
