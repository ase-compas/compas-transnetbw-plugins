import processesUrl from '../../assets/processes.xml?url';
import type { PluginType } from '@oscd-transnet-plugins/shared';

export const PROCESSES_SOURCE_URL = processesUrl;

export const ENGINEERING_PROCESSES_STORAGE_KEY = 'engineeringWizardProcesses';

export const DEFAULT_PLUGIN_SRC_TYPE: PluginType = 'external';
