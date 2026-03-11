import { TypeKind, type SimpleDataType } from "./model";

const TYPE_KIND_SORT_INDEX: Record<TypeKind, number> = {
    [TypeKind.LNodeType]: 0,
    [TypeKind.DOType]: 1,
    [TypeKind.DAType]: 2,
    [TypeKind.EnumType]: 3,
};

export function sortSimpleDataTypes(dataTypes: SimpleDataType[]): SimpleDataType[] {
    return [...dataTypes].sort((a, b) => {
        const typeKindOrderDiff = TYPE_KIND_SORT_INDEX[a.typeKind] - TYPE_KIND_SORT_INDEX[b.typeKind];
        if (typeKindOrderDiff !== 0) {
            return typeKindOrderDiff;
        }

        const instanceTypeDiff = (a.instanceType || "").localeCompare(b.instanceType || "");
        if (instanceTypeDiff !== 0) {
            return instanceTypeDiff;
        }

        return a.id.localeCompare(b.id);
    });
}

export function isTypeAssignable(
    expected: TypeKind,
    expectedInstance: string | undefined,
    toRefernece: SimpleDataType
): boolean {
    if (!toRefernece) {
        return false;
    }

    return toRefernece.typeKind === expected && (!expectedInstance || expectedInstance === toRefernece.instanceType || toRefernece.instanceType === undefined);
}