// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import { parseProcessesXml, parseXmlString } from './xml-parser';

describe('process XML parsing', () => {
  it('preserves stable plugin catalog IDs', () => {
    const xml = parseXmlString(`
      <engineering-processes>
        <process>
          <id>process-1</id>
          <version>1.0.0</version>
          <name>Process</name>
          <description>Process description</description>
          <plugins-sequence>
            <plugin>
              <id>plugin-ied</id>
              <catalogId>org.openscd.ied</catalogId>
              <name>IED</name>
              <src type="internal">/plugins/ied.js</src>
            </plugin>
          </plugins-sequence>
        </process>
      </engineering-processes>
    `);

    expect(parseProcessesXml(xml)[0].pluginGroups?.[0].plugins?.[0]).toMatchObject({
      id: 'plugin-ied',
      catalogId: 'org.openscd.ied',
    });
  });
});
