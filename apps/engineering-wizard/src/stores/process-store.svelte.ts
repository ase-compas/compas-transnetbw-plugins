import type { Process } from '@oscd-transnet-plugins/shared';

export const selectedProcessState = $state<{ process: Process }>({
  process: null,
});

