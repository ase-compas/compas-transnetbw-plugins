/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { adoptPropertiesSetBeforeUpgrade } from './adoptPropertiesSetBeforeUpgrade';

class PluginHost extends HTMLElement {
  docValue: unknown = 'constructor-doc';
  editCountValue = -1;
  removedValue: unknown = 'constructor-removed';

  set doc(value: unknown) {
    this.docValue = value;
  }

  set editCount(value: number) {
    this.editCountValue = value;
  }

  set removed(value: unknown) {
    this.removedValue = value;
  }
}

function shadow(host: object, name: string, value: unknown) {
  Object.defineProperty(host, name, {
    value,
    writable: true,
    configurable: true,
    enumerable: true,
  });
}

function createHost(): PluginHost {
  const host = Object.create(PluginHost.prototype) as PluginHost;
  host.docValue = 'constructor-doc';
  host.editCountValue = -1;
  host.removedValue = 'constructor-removed';
  return host;
}

describe('adoptPropertiesSetBeforeUpgrade', () => {
  it('replays an own property through its setter and leaves unset properties', () => {
    const host = createHost();
    const doc = { nodeName: 'SCL' };
    shadow(host, 'doc', doc);

    adoptPropertiesSetBeforeUpgrade(host);

    expect(host.docValue).toBe(doc);
    expect(host.editCountValue).toBe(-1);
    expect(Object.hasOwn(host, 'doc')).toBe(false);
  });

  it('replays setters from the class and its superclass', () => {
    class Child extends PluginHost {
      docNameValue = '';

      set docName(value: string) {
        this.docNameValue = value;
      }
    }
    const host = Object.create(Child.prototype) as Child;
    host.docValue = 'constructor-doc';
    host.docNameValue = '';
    shadow(host, 'doc', 'from-parent');
    shadow(host, 'docName', 'from-child');

    adoptPropertiesSetBeforeUpgrade(host);

    expect(host.docValue).toBe('from-parent');
    expect(host.docNameValue).toBe('from-child');
  });

  it('leaves an own property whose setter was removed', () => {
    const host = createHost();
    const descriptor = Object.getOwnPropertyDescriptor(
      PluginHost.prototype,
      'removed',
    );
    delete PluginHost.prototype.removed;
    shadow(host, 'removed', 'kept');

    try {
      adoptPropertiesSetBeforeUpgrade(host);
      expect(Object.hasOwn(host, 'removed')).toBe(true);
      expect(host.removedValue).toBe('constructor-removed');
    } finally {
      if (descriptor) {
        Object.defineProperty(PluginHost.prototype, 'removed', descriptor);
      }
    }
  });

  it('does not replay setters declared on HTMLElement', () => {
    const host = createHost();
    shadow(host, 'id', 'stay');

    adoptPropertiesSetBeforeUpgrade(host);

    expect(Object.hasOwn(host, 'id')).toBe(true);
    expect(host.id).toBe('stay');
  });
});
