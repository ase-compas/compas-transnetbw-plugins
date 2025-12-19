import {
  DataTypeKind,
  type ObjectReferenceDetails,
  type ObjectSpecification,
  type SimpleReference
} from '../../domain';

export function groupObjectTypeByTypeKind(requiredSpecs: ObjectSpecification[]): Map<DataTypeKind, Set<string>> {
  return requiredSpecs.reduce((acc, spec) => {
    // skip those without refTypeKind
    if (!spec.refTypeKind) return acc;

    if (!acc.has(spec.refTypeKind)) {
      acc.set(spec.refTypeKind, new Set<string>());
    }

    acc.get(spec.refTypeKind)?.add(spec.objectType);

    return acc;
  }, new Map<DataTypeKind, Set<string>>());
}

export function specsToObjectReferenceDetails(typeSpecification: ObjectSpecification[], references: SimpleReference[]): ObjectReferenceDetails[] {
  return typeSpecification.map(spec => {
    const existingRefObj = references.find(objRef => objRef.name === spec.name);
    return {
      name: spec.name,
      tagName: spec.tagName,
      typeRef: existingRefObj?.typeRef,
      attributes: spec.attributes,
      meta: {
        isMandatory: !!spec.isMandatory,
        isConfigured: !!spec.isMandatory || !!existingRefObj,
        requiresReference: !!spec.requiresReference,
        objectType: spec.objectType,
        refTypeKind: spec.refTypeKind
      }
    } as ObjectReferenceDetails;
  });
}
