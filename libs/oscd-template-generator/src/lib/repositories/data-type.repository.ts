import { findElementByTagAndId } from '../utils/scdUtils';
import {
  type ChildNameFilter, type DataType,
  DataTypeKind,
  type DataTypeMap,
  type DataTypes,
  type DAType,
  type DOType,
  type EnumType,
  type LNodeType
} from '../domain';
import {
  buildInsert,
  buildRemove,
  createAndDispatchEditEvent,
  dispatchEditEvent,
  type EditV2,
} from '@oscd-transnet-plugins/oscd-event-api';
import {
  DATypeMapperV,
  DOTypeMapperV,
  EnumTypeMapperV,
  LNodeTypeMapperV,
  type TypeMapper,
} from '../mappers';
import { TypeTraverser } from '../utils/typeTraverser';
import { PRIVATE_INSTANCE_TYPE_NS, SCL_NAMESPACE_PREFIX } from '../constants';

export interface IDataTypeRepository {
  /**
   * Finds referenced types by ID. If the ID does not exist, returns empty arrays for each type.
   * @param dataTypeKind The type of data to search for.
   * @param id The ID of the data type.
   * @param childNameFilter Optional filter for child names.
   * @returns An object containing arrays of referenced types (null if not found).
   */
  findReferencedTypesById(dataTypeKind: DataTypeKind, id: string, childNameFilter?: ChildNameFilter): DataTypes | null;

  /**
   * Finds a data type by ID. Returns null if not found.
   * @param dataTypeKind The type of data to search for.
   * @param id The ID of the data type.
   * @returns The found DataType or null if not found.
   */
  findDataTypeById<K extends DataTypeKind>(
    dataTypeKind: K,
    id: string
  ): DataTypeMap[K] | null;

  /**
   * Finds data types by kind and optional filtered by instance type. Returns an empty array if none found.
   * @param dataTypeKind
   * @param instanceType
   */
  findAllDataTypesByKind<K extends DataTypeKind>(
    dataTypeKind: K,
    instanceType?: string
  ): DataTypeMap[K][];

  /**
   * Finds data types by kind without filtering by instance type. Returns an empty array if none found.
   * @param dataTypeKind
   */
  findAllDataTypesWithoutInstanceType<K extends DataTypeKind>(
    dataTypeKind: K
  ): DataTypeMap[K][];

  /**
   * Deletes a data type by ID. Returns true if deleted, false if not found.
   * @param dataTypeKind The type of data to delete.
   * @param id The ID of the data type.
   * @returns True if deleted, false if not found.
   */
  deleteDataTypeById(dataTypeKind: DataTypeKind, id: string): boolean;

  /**
   * Creates or updates a data type. Throws an error if data is invalid.
   * @param dataTypeKind The type of data to upsert.
   * @param data The data to upsert.
   * @returns The upserted DataType.
   */
  upsertDataType<K extends DataTypeKind>(
    dataTypeKind: K,
    data: DataTypeMap[K]
  ): DataTypeMap[K];

  applyDataTypeChanges<K extends DataTypeKind>(
    editInputs: {
      creates?: { kind: K; dataType: DataTypeMap[K] }[],
      updates?: { kind: K; dataType: DataTypeMap[K] }[]
    }
  ): boolean;
}


export class DataTypeRepository implements IDataTypeRepository {
  private static rootElementTagName = 'DataTypeTemplates';
  private static typeMapperRegistry: {
    [K in DataTypeKind]: TypeMapper<DataTypeMap[K]>;
  } = {
    [DataTypeKind.LNodeType]: new LNodeTypeMapperV(),
    [DataTypeKind.DOType]: new DOTypeMapperV(),
    [DataTypeKind.DAType]: new DATypeMapperV(),
    [DataTypeKind.EnumType]: new EnumTypeMapperV(),
  };
  private static typeOrder: DataTypeKind[] = [
    DataTypeKind.LNodeType,
    DataTypeKind.DOType,
    DataTypeKind.DAType,
    DataTypeKind.EnumType,
  ];

  constructor(private doc: XMLDocument, private hostElement: HTMLElement) {}

  findReferencedTypesById(dataTypeKind: DataTypeKind, id: string, childNameFilter: ChildNameFilter = []): DataTypes | null {
    // Find the element by tag and id
    const typeElement = findElementByTagAndId(this.doc, dataTypeKind, id);
    if (!typeElement) return null;

    const referencedDataTypes: DataTypes = {
      lNodeTypes: [],
      dataObjectTypes: [],
      dataAttributeTypes: [],
      enumTypes: [],
    };

    function addReferenceDataType(kind: DataTypeKind, el: Element) {
      const mapper = DataTypeRepository.typeMapperRegistry[kind];
      const dataType = mapper.fromElement(el);
      if (!dataType) return;

      if (kind === DataTypeKind.LNodeType) referencedDataTypes.lNodeTypes.push(dataType as LNodeType);
      else if (kind === DataTypeKind.DOType) referencedDataTypes.dataObjectTypes.push(dataType as DOType);
      else if (kind === DataTypeKind.DAType) referencedDataTypes.dataAttributeTypes.push(dataType as DAType);
      else if (kind === DataTypeKind.EnumType) referencedDataTypes.enumTypes.push(dataType as EnumType);
    }

    new TypeTraverser(this.doc)
      .traverse(dataTypeKind, id, addReferenceDataType, false, childNameFilter);

    return referencedDataTypes
  }

  findDataTypeById<K extends DataTypeKind>(dataTypeKind: K, id: string): DataTypeMap[K] | null {
    const typeElement = findElementByTagAndId(this.doc, dataTypeKind, id);
    if (!typeElement) return null;
    const mapper = DataTypeRepository.typeMapperRegistry[dataTypeKind];
    return mapper.fromElement(typeElement);
  }

  findAllDataTypesByKind<K extends DataTypeKind>(dataTypeKind: K, instanceType?: string): DataTypeMap[K][] {
    const selector = instanceType ? this.getTypeKindAndInstanceTypeXPath(dataTypeKind, instanceType) : `//${SCL_NAMESPACE_PREFIX}:DataTypeTemplates/${SCL_NAMESPACE_PREFIX}:${dataTypeKind}`;

    const mapper = DataTypeRepository.typeMapperRegistry[dataTypeKind];
    return this.evaluateXPath(selector)
      .map(el => mapper.fromElement(el))
      .filter((dt): dt is DataTypeMap[K] => dt !== null);
  }

  findAllDataTypesWithoutInstanceType<K extends DataTypeKind>(dataTypeKind: K): DataTypeMap[K][] {
    const selector = this.getTypeKindAndInstanceTypeXPath(dataTypeKind);
    const mapper = DataTypeRepository.typeMapperRegistry[dataTypeKind];
    return this.evaluateXPath(selector)
      .map(el => mapper.fromElement(el))
      .filter((dt): dt is DataTypeMap[K] => dt !== null);
  }

  deleteDataTypeById(dataTypeKind: DataTypeKind, id: string): boolean {
    const el = findElementByTagAndId(this.doc, dataTypeKind, id);
    if (!el) return false;

    const edit = buildRemove(el);
    createAndDispatchEditEvent(this.hostElement, edit);
    return true;
  }

  upsertDataType<K extends DataTypeKind>(dataTypeKind: K, data: DataTypeMap[K]): DataTypeMap[K] {
    if (!data.id) {
      throw new Error(`Upsert failed: DataType of kind "${dataTypeKind}" is missing an "id"`);
    }

    createAndDispatchEditEvent(
      this.hostElement,
      this.buildUpsertEdit(dataTypeKind, data),
    );

    return data;
  }

  applyDataTypeChanges<K extends DataTypeKind>(
    editInputs: {
      creates?: { kind: K; dataType: DataTypeMap[K] }[],
      updates?: { kind: K; dataType: DataTypeMap[K] }[]
    }
  ): boolean {
    const edits: {kind: DataTypeKind, edits: EditV2[]}[] = [];
    const root = this.ensureRootElement();

    // Handle Creates
    // skips create if type already exists
    for (const create of editInputs.creates ?? []) {
      const { kind, dataType } = create;
      if (!dataType.id) {
        console.error(`Create skipped: ${kind} is missing an "id"`);
        continue;
      }

      const existing = findElementByTagAndId(this.doc, kind, dataType.id);
      if (existing) {
        console.warn(`Create skipped: ${kind} with id "${dataType.id}" already exists`);
        continue;
      }

      const mapper = DataTypeRepository.typeMapperRegistry[kind];
      const newEl = mapper.toElement(dataType, this.doc);
      const reference = this.findInsertionReference(root, kind);
      edits.push({kind: kind, edits: [buildInsert(root, newEl, reference)]});
    }

    //  Handle Updates
    // overwrites existing types, creates if not existing
    for (const update of editInputs.updates ?? []) {
      const { kind, dataType } = update;
      edits.push({kind: kind, edits: this.buildUpsertEdit(kind, dataType)});
    }

    // Dispatch once if any edits
    if (edits.length > 0) {
      // sort by hierarchy to avoid dependency issues
      edits.sort((a, b) => {
        return DataTypeRepository.typeOrder.indexOf(a.kind) - DataTypeRepository.typeOrder.indexOf(b.kind);
      });

      const flatEdits = edits.flatMap(e => e.edits);
      dispatchEditEvent(this.hostElement, flatEdits);
      return true;
    }

    return false;
  }

  /** Sets a new XML document. */
  public setDocument(doc: XMLDocument): void {
    this.doc = doc;
  }

  // ==== Edit API Builders ====
  private buildUpsertEdit<K extends DataTypeKind>(kind: K, data: DataTypeMap[K]): EditV2[] {
    const mapper = DataTypeRepository.typeMapperRegistry[kind];
    const root = this.ensureRootElement();
    const newEl = mapper.toElement(data, this.doc);
    const existing = findElementByTagAndId(this.doc, kind, data.id);

    return existing
      ? this.buildReplaceEdit(existing, newEl)
      : [buildInsert(root, newEl, this.findInsertionReference(root, kind))];
  }

  private buildReplaceEdit(oldEl: Element, newEl: Element): EditV2[] {
    const parent = oldEl.parentNode;
    if (!parent) {
      throw new Error(`Replace failed: old element has no parent`);
    }

    return [
      buildRemove(oldEl),
      buildInsert(parent, newEl, oldEl.nextSibling)
    ]
  }

  // ===== Private Helpers =====

  private getTypeKindAndInstanceTypeXPath(
    dataTypeKind: DataTypeKind,
    instanceType?: string
  ): string {
    switch (dataTypeKind) {
      case DataTypeKind.LNodeType:
        return instanceType
          ? `//${SCL_NAMESPACE_PREFIX}:DataTypeTemplates/${SCL_NAMESPACE_PREFIX}:LNodeType[@lnClass="${instanceType}"]`
          : `//${SCL_NAMESPACE_PREFIX}:DataTypeTemplates/${SCL_NAMESPACE_PREFIX}:LNodeType[not(@lnClass)]`;

      case DataTypeKind.DOType:
        return instanceType
          ? `//${SCL_NAMESPACE_PREFIX}:DataTypeTemplates/${SCL_NAMESPACE_PREFIX}:DOType[@cdc="${instanceType}"]`
          : `//${SCL_NAMESPACE_PREFIX}:DataTypeTemplates/${SCL_NAMESPACE_PREFIX}:DOType[not(@cdc)]`;

      case DataTypeKind.DAType:
      case DataTypeKind.EnumType:
        return instanceType
          ? `//${SCL_NAMESPACE_PREFIX}:DataTypeTemplates/${SCL_NAMESPACE_PREFIX}:${dataTypeKind}[${SCL_NAMESPACE_PREFIX}:Private[@type="${PRIVATE_INSTANCE_TYPE_NS}" and normalize-space(.)="${instanceType}"]]`
          : `//${SCL_NAMESPACE_PREFIX}:DataTypeTemplates/${SCL_NAMESPACE_PREFIX}:${dataTypeKind}[not(${SCL_NAMESPACE_PREFIX}:Private[@type="${PRIVATE_INSTANCE_TYPE_NS}"])]`;

      default:
        throw new Error(`Unsupported data type kind: ${dataTypeKind}`);
    }
  }


  private nsResolver = (prefix?: string | null) => {
    if (prefix === SCL_NAMESPACE_PREFIX || prefix == null) return this.doc.documentElement.namespaceURI;
    return null;
  };

  private evaluateXPath(xpath: string): Element[] {
    const result: Element[] = [];
    const iterator = this.doc.evaluate(
      xpath,
      this.doc,
      this.nsResolver,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );

    let node = iterator.iterateNext();
    while (node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        result.push(node as Element);
      }
      node = iterator.iterateNext();
    }

    return result;
  }


  /** Ensures <DataTypeTemplates> exists, creates if missing */
  private ensureRootElement(): Element {
    let root: Element = this.doc.querySelector(DataTypeRepository.rootElementTagName);
    if (!root) {
      root = this.doc.createElementNS(this.doc.documentElement.namespaceURI, DataTypeRepository.rootElementTagName);
      this.doc.documentElement.appendChild(root);
    }
    return root;
  }

  private replaceElement(oldEl: Element, newEl: Element): void {
    const parent = oldEl.parentNode;
    if (!parent) {
      throw new Error(`Replace failed: old element has no parent`);
    }

    const editEvents: EditV2[] = [
      buildRemove(oldEl),
      buildInsert(parent, newEl, oldEl.nextSibling)
    ];

    dispatchEditEvent(this.hostElement, editEvents);
  }

  /** Find where to insert a new DataType, respecting order and siblings */
  private findInsertionReference(root: Element, kind: DataTypeKind): Element | null {
    // 1. if siblings of same kind exist -> insert before first one
    const ref = root.querySelector(kind);
    if (ref) {
      return ref;
    }

    // 2️. else -> insert before first element of later kind in canonical order
    const order = DataTypeRepository.typeOrder;
    const index = order.indexOf(kind);

    for (let i = index + 1; i < order.length; i++) {
      const nextEl = root.querySelector(order[i]);
      if (nextEl) return nextEl;
    }

    // 3. nothing found → append at end
    return null;
  }

}
