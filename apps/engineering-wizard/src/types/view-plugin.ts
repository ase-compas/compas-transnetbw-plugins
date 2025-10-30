import type { Plugin as BasePlugin } from '@oscd-transnet-plugins/shared';

export type ViewPlugin = BasePlugin & { src: string };
