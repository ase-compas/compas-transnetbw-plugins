import {
  getElementById,
  queryElementsByTagName,
  querySelectorAll,
  getElementByIdAndTagName,
  queryElementsByAttr,
  getChildElements,
} from './query';

const xmlString = `
<root>
  <item id="foo" data-type="test">Hello</item>
  <item id="bar" data-type="example">World</item>
  <group>
    <child id="child1" />
    <child id="child2" />
  </group>
</root>`;

const parser = new DOMParser();
const doc = parser.parseFromString(xmlString, 'application/xml');

describe('oscd-xml-utils query functions', () => {
  test('getElementById should return element with matching id', () => {
    const el = getElementById(doc, 'foo');
    expect(el?.tagName).toBe('item');
  });

  test('queryElementsByTagName should return all elements by tag', () => {
    const items = queryElementsByTagName(doc, 'item');
    expect(items).toHaveLength(2);
  });

  test('querySelectorAll should find elements by selector', () => {
    const items = querySelectorAll(doc, 'item[data-type]');
    expect(items.length).toBe(2);
  });

  test('getElementByIdAndTagName should return correct element', () => {
    const el = getElementByIdAndTagName(doc, 'foo', 'item');
    expect(el).not.toBeNull();
  });

  test('queryElementsByAttr should return elements with a specific attribute', () => {
    const elements = queryElementsByAttr(doc, 'data-type', 'test');
    expect(elements.length).toBe(1);
    expect(elements[0].getAttribute('id')).toBe('foo');
  });

  test('getChildElements should return only child elements', () => {
    const group = doc.querySelector('group');
    const children = group ? getChildElements(group) : [];
    expect(children.map(el => el.tagName)).toEqual(['child', 'child']);
  });
});
