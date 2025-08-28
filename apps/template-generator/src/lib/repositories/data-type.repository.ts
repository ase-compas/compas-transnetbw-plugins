import { findElementByTagAndId } from '../utils/scdUtils';
import { ChildNameFilter, DataTypeKind, DataTypeMap, DataTypes } from '../domain/core.model';
import {
  buildInsert,
  buildRemove,
  createAndDispatchEditEvent,
  dispatchEditEvent,
  type EditV2
} from '@oscd-transnet-plugins/oscd-event-api';
import {
  LNodeTypeMapperV,
  DOTypeMapperV,
  DATypeMapperV,
  EnumTypeMapperV, TypeMapper
} from '../mappers';

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
  private static instanceTypeRegistry = {
    [DataTypeKind.LNodeType]: 'lnClass',
    [DataTypeKind.DOType]: 'cdc',
    [DataTypeKind.DAType]: undefined,
    [DataTypeKind.EnumType]: undefined,
  }

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

    //TODO: implement

    return referencedDataTypes
  }

  findDataTypeById<K extends DataTypeKind>(dataTypeKind: K, id: string): DataTypeMap[K] | null {
    const typeElement = findElementByTagAndId(this.doc, dataTypeKind, id);
    if (!typeElement) return null;
    const mapper = DataTypeRepository.typeMapperRegistry[dataTypeKind];
    return mapper.fromElement(typeElement);
  }

  findAllDataTypesByKind<K extends DataTypeKind>(dataTypeKind: K, instanceType?: string): DataTypeMap[K][] {
    const attr = DataTypeRepository.instanceTypeRegistry[dataTypeKind];
    const selector = attr && instanceType ? `${dataTypeKind}[${attr}="${instanceType}"]` : dataTypeKind;

    const mapper = DataTypeRepository.typeMapperRegistry[dataTypeKind];
    return Array.from(this.doc.querySelectorAll(selector))
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

  // Overloads for upsertDataType
  upsertDataType<K extends DataTypeKind>(dataTypeKind: K, data: DataTypeMap[K]): DataTypeMap[K] {
    const mapper = DataTypeRepository.typeMapperRegistry[dataTypeKind];
    if (!data.id) {
      throw new Error(
        `Upsert failed: DataType of kind "${dataTypeKind}" is missing an "id"`
      );
    }

    const newElement = mapper.toElement(data, this.doc);
    const root = this.ensureRootElement();

    const existing = findElementByTagAndId(this.doc, dataTypeKind, data.id);
    if (existing) {
      this.replaceElement(existing, newElement);
      return data;
    }

    const reference = this.findInsertionReference(root, dataTypeKind);
    createAndDispatchEditEvent(
      this.hostElement,
      buildInsert(root, newElement, reference)
    );
    return data;
  }

  /** Sets a new XML document. */
  public setDocument(doc: XMLDocument): void {
    this.doc = doc;
  }

  // ===== Private Helpers =====

  /** Ensures <DataTypeTemplates> exists, creates if missing */
  private ensureRootElement(): Element {
    let root: Element = this.doc.querySelector(DataTypeRepository.rootElementTagName);
    if (!root) {
      root = this.doc.createElement(DataTypeRepository.rootElementTagName);
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
    // 1. if siblings of same kind exist → insert after last one
    const sameTagEls = Array.from(root.querySelectorAll(kind));
    if (sameTagEls.length > 0) {
      return sameTagEls[sameTagEls.length - 1].nextSibling as Element;
    }

    // 2️. else -> insert before first element of later kind in canonical order
    const order: DataTypeKind[] = [
      DataTypeKind.LNodeType,
      DataTypeKind.DOType,
      DataTypeKind.DAType,
      DataTypeKind.EnumType,
    ];
    const index = order.indexOf(kind);

    for (let i = index + 1; i < order.length; i++) {
      const nextEl = root.querySelector(order[i]);
      if (nextEl) return nextEl;
    }

    // 3. nothing found → append at end
    return null;
  }

}
