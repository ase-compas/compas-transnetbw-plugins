export interface CoMPASPlugin {
  active: boolean;
  activeByDefault: boolean;
  catalogId?: string;
  content?: { tag?: string };
  kind: string;
  name: string;
  requiresDoc: boolean;
  src: string;
}
