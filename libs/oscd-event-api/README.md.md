# OSCD Edit Event API

A small utility library to help construct and dispatch `oscd-edit-v2` events for OpenSCD-based plugins. This library provides helpers to build standard OpenSCD edit operations (`InsertV2`, `RemoveV2`, etc.) and dispatch them correctly through the event-based editing API.

## Usage

```
createAndDispatchEditEvent(host: HTMLElement, edit: EditV2, options?: EditEventOptionsV2): boolean;
```

Creates and immediately dispatches an oscd-edit-v2 event on the provided host element.

- `host`: The root HTMLElement of your plugin, usually the custom element that wraps your plugin's view. It is passed to your plugin by the OpenSCD plugin loader. Events must be dispatched on this element so that OpenSCD can intercept and apply edits correctly.
- `edit`: One EditV2 objects that describe the intended change(s) to the XMLDocument.

You can use the provided helper functions to build valid EditV2 objects defined in `edit-helpers.ts`:

- `buildInsert(...)`
- `buildRemove(...)`
- `buildSetAttributes(...)`
- `buildSetTextContent(...)`

## Examples

### Remove a node

```ts
  const element = doc.querySelector(`[id="${id}"]`);
  if (!element) return;

  const edit = buildRemove(element);
  createAndDispatchEditEvent(host, edit);
}
```

### Insert a node

```ts
/**
 * Creates and inserts a new element under a given parent node.
 */
function insertNewElement(host: HTMLElement, doc: XMLDocument): void {
  const parent = doc.querySelector('Substation');
  if (!parent) return;

  // Create a new LN element (example)
  const newElement = doc.createElement('LNode');
  newElement.setAttribute('lnClass', 'PDIF');
  newElement.setAttribute('inst', '1');
  newElement.setAttribute('lnType', 'SomeLNodeTypeId');

  const edit = buildInsert(parent, newElement);
  createAndDispatchEditEvent(host, edit);
}
```
