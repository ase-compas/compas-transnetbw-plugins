export function getValidationsByPluginAndProcess(
  pluginId: string,
  processId: string,
) {
  return (entry: { processId: string; pluginId: string }) =>
    entry.pluginId === pluginId && entry.processId === processId;
}
