export interface LocalStoredPlugin {
  name?: string;
  kind?: string;
  src?: string;
  sourceUrl?: string;
  [key: string]: unknown;
}
