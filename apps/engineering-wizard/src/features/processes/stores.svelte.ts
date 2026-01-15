import type { CoMPASPlugin, Process } from '@oscd-transnet-plugins/shared';
import { ENGINEERING_PROCESSES_STORAGE_KEY } from './config';

export const engineeringProcesses = $state<{ processes: Process[] }>({
  processes: [],
});

export const engineeringProcessesStatus = $state<{
  loading: boolean;
  error: string;
}>({
  loading: false,
  error: '',
});

export const selectedEngineeringProcess = $state<{ process: Process | null }>({
  process: null,
});

export const engineeringProcessEditing = $state<{ isEditing: boolean }>({
  isEditing: false,
});

export const runningEngineeringProcess = $state<{
  process: Process | null;
  lastSelectedPluginId: string | null;
}>({
  process: null,
  lastSelectedPluginId: null,
});

export const corePlugins = $state<{ plugins: CoMPASPlugin[] }>({
  plugins: [],
});

function hydrateFromLocalStorage() {
  if (typeof localStorage === 'undefined') return;

  const saved = localStorage.getItem(ENGINEERING_PROCESSES_STORAGE_KEY);
  if (!saved) return;

  try {
    const parsed: unknown = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      engineeringProcesses.processes = parsed as any;
    }
  } catch {
    // ignore
  }
}

function persistToLocalStorage() {
  // Touch nested arrays so snapshot tracks deep changes
  engineeringProcesses.processes.forEach((proc) => {
    proc.pluginGroups?.forEach((g) => g.plugins?.length);
  });

  const snapshot = $state.snapshot(engineeringProcesses.processes);

  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(
      ENGINEERING_PROCESSES_STORAGE_KEY,
      JSON.stringify(snapshot),
    );
  } catch {
    // ignore
  }
}

// --- module init (runs once per bundle import) ---
hydrateFromLocalStorage();

$effect.root(() => {
  $effect(() => {
    console.log('[processes] persistence module loaded');
    persistToLocalStorage();
  });
});
