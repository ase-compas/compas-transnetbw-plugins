import type { XPathValidation } from './XPathValidation';

export type PluginType = 'internal' | 'external';

export type Plugin = {
  id: string;
  name: string;
  src?: string;
  sourceUrl?: string;
  type: PluginType;
  validations?: XPathValidation[];
};
