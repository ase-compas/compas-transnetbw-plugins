import type { TBoardItemContext, TItem } from './types';

/**
 * Checks if the target item can accept a drop from the candidate item.
 *
 * @param target - The item that is the potential drop target.
 * @param candidate - The item that is being dragged and considered for dropping.
 * @returns {boolean} - Returns true if the target can accept the drop, false otherwise.
 */
export function isDragTarget(target: TItem, candidate: TBoardItemContext | null): boolean {
  return !!candidate && typeof target.acceptDrop === "function";
}

/**
 * Checks if the target item can accept a drop from the candidate item.
 *
 * @param target - The item that is the potential drop target.
 * @param candidate - The item that is being dragged and considered for dropping.
 * @returns {boolean} - Returns true if the target can accept the drop, false otherwise.
 */
export function isDroppable(target: TItem, candidate: TBoardItemContext | null): boolean {
  return isDragTarget(target, candidate) && target.acceptDrop(candidate);
}
