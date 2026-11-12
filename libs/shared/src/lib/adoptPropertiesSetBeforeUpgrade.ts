/**
 * Replays values that were assigned before the custom element upgraded.
 *
 * Only an own property whose setter still exists is deleted and assigned again.
 * A property the host never set stays at its constructor value.
 *
 * @example
 * // Before: element.doc is an own property, element.editCount was never set.
 * adoptPropertiesSetBeforeUpgrade(element);
 * // After: the doc setter ran and _props.doc is that document.
 * // editCount is unchanged.
 */
export function adoptPropertiesSetBeforeUpgrade(host: object): void {
  const record = host as unknown as Record<string, unknown>;
  for (const name of setterNames(host)) {
    if (!Object.hasOwn(record, name)) continue;
    const value = record[name];
    delete record[name];
    record[name] = value;
  }
}

/**
 * Names of setters on the prototype chain, stopping before `HTMLElement`.
 *
 * A removed setter is absent. The host does not have to provide every name.
 *
 * @example
 * // Class declares set doc, set docName, and set editCount.
 * setterNames(element);
 * // ['doc', 'docName', 'editCount']
 */
function setterNames(host: object): string[] {
  const names: string[] = [];
  let prototype = Object.getPrototypeOf(host) as object | null;
  while (prototype && prototype !== HTMLElement.prototype) {
    for (const name of Object.getOwnPropertyNames(prototype)) {
      if (Object.getOwnPropertyDescriptor(prototype, name)?.set) {
        names.push(name);
      }
    }
    prototype = Object.getPrototypeOf(prototype) as object | null;
  }
  return names;
}
