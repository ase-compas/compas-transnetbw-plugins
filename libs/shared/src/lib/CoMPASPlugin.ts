export interface CoMPASPlugin {
    active: boolean;
    activeByDefault: boolean;
    kind: string;
    name: string;
    requiresDoc: boolean;
    src: string;
}