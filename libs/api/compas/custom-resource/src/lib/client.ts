import { Configuration, PluginsCustomResourcesApi } from '../generated';

export function createCustomResourceClient(baseUrl: string): PluginsCustomResourcesApi {
  return new PluginsCustomResourcesApi(
    new Configuration({
      basePath: baseUrl
    })
  )
}
