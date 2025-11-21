import type { TemplateResult } from 'lit';

export type CoMPASPlugin = {
  active: boolean;
  activeByDefault?: boolean;
  content: TemplateResult;
  icon: string;
  name: string;
  requireDoc: boolean;
  src: string;
};
