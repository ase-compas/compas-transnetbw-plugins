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
// Selected & running process — stored as IDs.
// The actual Process objects are always derived from `engineeringProcesses`
// so they can never go stale after a mutation.
// ---------------------------------------------------------------------------

const _selectedProcessId = $state<{ value: string | null }>({ value: null });
const _isEditing = $state<{ value: boolean }>({ value: false });

const _runningProcessId = $state<{ value: string | null }>({ value: null });
const _lastSelectedPluginId = $state<{ value: string | null }>({ value: null });

function findProcess(id: string | null): Process | null {
  if (!id) return null;
  return engineeringProcesses.processes?.find((p) => p.id === id) ?? null;
}

// ---------------------------------------------------------------------------
// Read  `.process`  → always resolves from the process list (never stale).
// Write `.process`  → sets the underlying ID.
// ---------------------------------------------------------------------------

class ProcessRef {
  get process(): Process | null {
    return findProcess(_selectedProcessId.value);
  }
  set process(p: Process | null) {
    _selectedProcessId.value = p?.id ?? null;
  }
}

class RunningProcessRef {
  get process(): Process | null {
    return findProcess(_runningProcessId.value);
  }
  set process(p: Process | null) {
    _runningProcessId.value = p?.id ?? null;
  }
  get lastSelectedPluginId(): string | null {
    return _lastSelectedPluginId.value;
  }
  set lastSelectedPluginId(id: string | null) {
    _lastSelectedPluginId.value = id;
  }
}

class EditingRef {
  get isEditing(): boolean {
    return _isEditing.value;
  }
  set isEditing(v: boolean) {
    _isEditing.value = v;
  }
}

export const selectedEngineeringProcess = new ProcessRef();
export const engineeringProcessEditing = new EditingRef();
export const runningEngineeringProcess = new RunningProcessRef();

export const corePlugins = $state<{ plugins: CoMPASPlugin[] }>({
  plugins: [],
});

