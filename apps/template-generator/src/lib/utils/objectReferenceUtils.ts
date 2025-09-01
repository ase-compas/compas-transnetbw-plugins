import { ObjectReferenceState } from '../stores';
import { TItem } from '../components/tboard/types';
import { mapObjectReferenceStateToTItem } from '../mappers';
import { BasicType, ObjectReferenceDetails } from '../domain';

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
    (!candidateInstanceType || refRequiredInstanceType === candidateInstanceType)
  );
}
