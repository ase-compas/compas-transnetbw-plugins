export type InsertV2 = {
  parent: Node;
  node: Node;
  reference: Node | null;
};

/** Intent to remove a `node` from its `ownerDocument` */
export type RemoveV2 = {
  node: Node;
};

/** Intent to set the `textContent` of `element` */
export type SetTextContentV2 = {
  element: Element;
  textContent: string;
};

export type SetAttributesV2 = {
  element: Element;
  attributes: Partial<Record<string, string | null>>;
  attributesNS: Partial<Record<string, Partial<Record<string, string | null>>>>;
};

export type EditV2 =
  | InsertV2
  | SetAttributesV2
  | SetTextContentV2
  | RemoveV2
  | EditV2[];

export type EditDetailV2<E extends EditV2 = EditV2> = EditEventOptionsV2 & {
  edit: E;
};

export type EditEventV2<E extends EditV2 = EditV2> = CustomEvent<
  EditDetailV2<E>
>;

type BaseEditEventOptionsV2 = {
  title?: string;
  squash?: boolean;
};

export type EditEventOptionsV2 = BaseEditEventOptionsV2 & {
  createHistoryEntry?: boolean;
};
