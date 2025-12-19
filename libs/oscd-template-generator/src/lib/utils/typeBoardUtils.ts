import { type ObjectReferenceState } from '../stores';
import { type TItem } from '../components';
import { mapDataTypeToItem, mapObjectReferenceStateToTItem } from '../mappers';
import { type BasicType, DataTypeKind, type ObjectReferenceDetails } from '../domain';
import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
import type { IDataTypeService, IDefaultService } from '../services';

/**
 * Converts an array of BasicType objects into TItem objects for display.
 * The resulting array is sorted first by `instanceType` (if present) and then by `id`.
 *
 * @param {BasicType[]} types - The array of BasicType objects to convert.
 * @param {boolean} canEdit - Flag indicating if the resulting items should be editable.
 * @returns {TItem[]} An array of TItem objects mapped from the input types, sorted for display.
 */
export function getDisplayDataTypeItems(types: BasicType[], canEdit: boolean): TItem[] {
  return [...types]
    .sort((a, b) => {
      // Compare instanceType, treating undefined as greater (so it comes last)
      if (a.instanceType && b.instanceType) {
        const instanceCompare = a.instanceType.localeCompare(b.instanceType);
        if (instanceCompare !== 0) return instanceCompare;
      } else if (a.instanceType) {
        return -1; // a comes before b
      } else if (b.instanceType) {
        return 1; // b comes before a
      }

      // If instanceType is equal or both undefined, sort by id
      return a.id.localeCompare(b.id);
    })
    .map(type => mapDataTypeToItem(type, canEdit));
}

export function getDisplayReferenceItems(
  items: ObjectReferenceState[],
  isEditMode: boolean,
  acceptDrop
): TItem[] {
  return [...items]
    .filter((item) => isEditMode || item.meta.isConfigured)
    .map((item) => mapObjectReferenceStateToTItem(item, isEditMode, acceptDrop))
    .sort((a: TItem, b: TItem) => {
      // Sort by mandatory first, then selected, then alphabetically
      const groupA = a.isMandatory ? 0 : a.selected ? 1 : 2;
      const groupB = b.isMandatory ? 0 : b.selected ? 1 : 2;
      if (groupA !== groupB) return groupA - groupB;
      return a.title.localeCompare(b.title);
    });
}


/**
 * Determines if a given type can be assigned to an object reference.
 * Checks if the object reference requires a reference, matches the type kind,
 * and (if specified) matches the instance type.
 *
 * @param objRef The object reference details to check against.
 * @param type The type to be assigned.
 * @returns True if the type can be assigned to the object reference, otherwise false.
 */
export function canAssignTypeToObjectReference(
  objRef: ObjectReferenceDetails,
  type: BasicType
) {
  return canAssignTypeToObjectReferenceParams(
    objRef.meta.requiresReference,
    objRef.meta.refTypeKind,
    objRef.meta.objectType,
    type.typeKind,
    type.instanceType
  );
}

/**
 * Function to determine if a type can be assigned to an object reference
 * based only on primitive parameters, not on specific type objects.
 *
 * Assignment is possible if:
 *  - The object reference requires a reference,
 *  - The required type kind matches the candidate type kind,
 *  - The required instance type is not specified, or the candidate instance type is not specified, or both instance types match.
 *
 * @param refRequiresReference Whether the object reference requires a reference.
 * @param refRequiredTypeKind The expected type kind for the object reference.
 * @param refRequiredInstanceType The expected instance type for the object reference.
 * @param candidateTypeKind The type kind of the candidate type to assign.
 * @param candidateInstanceType The instance type of the candidate type to assign.
 * @returns True if the candidate type can be assigned, otherwise false.
 */
export function canAssignTypeToObjectReferenceParams(
  refRequiresReference: boolean,
  refRequiredTypeKind: string,
  refRequiredInstanceType: string | undefined,
  candidateTypeKind: string,
  candidateInstanceType?: string
): boolean {
  return (
    refRequiresReference &&
    refRequiredTypeKind === candidateTypeKind &&
    (!refRequiredInstanceType || !candidateInstanceType || refRequiredInstanceType === candidateInstanceType)
  );
}

/**
 * Set given type with id and kind as default. Asks for confirmation if a default type is already set for (kind, instanceType).
 * @returns true if the default type was set, if the user cancelled the action.
 * @throws error if defualt type throws an error
 */
export async function setTypeAsDefaultWithConfirmation(
  defaultTypeService: IDefaultService,
  dataTypeService: IDataTypeService,
  kind: DataTypeKind,
  instanceType: string,
  id: string
): Promise<boolean> {
  // check if already a type for this kind and instanceType exists to resolve conflict
  const defaultType = await defaultTypeService.getDefault({kind: kind, instanceType: instanceType});
  const exists = defaultType !== undefined;
  if(exists) {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Replace Existing Default?',
      message: `A default type "${defaultType.rootType.id}" is already set for type kind "${kind}" and instance type "${instanceType}". Do you want to replace it with the new default?`,
      confirmActionText: 'Yes, Replace',
      cancelActionText: 'No, Keep Existing',
    });
    if (result?.type !== 'confirm') return false;
  }
  await dataTypeService.setDefaultType(kind, id); // throws error
  return true;
}

export async function setTypeAsDefaultWithConfirmationForBasicType(defaultTypeService: IDefaultService, dataTypeService: IDataTypeService, type: BasicType): Promise<boolean> {
  return await setTypeAsDefaultWithConfirmation(defaultTypeService, dataTypeService, type.typeKind, type.instanceType, type.id);
}
