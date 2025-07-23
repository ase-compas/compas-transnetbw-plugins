import { Item } from './types';
export const hierarchy: Item[] = [
    {
      id: 1,
      name: 'L Node Type 1',
      type: 'folder',
      item: null,
      children: [
        {
          id: 2,
          name: 'DO 1',
          type: 'folder',
          item: null,
          children: [
            {
              id: 3,
              name: 'DA 2',
              type: 'file',
              item: { content: 'Content of File A' }
            },
            {
              id: 4,
              name: 'DA 3',
              type: 'file',
              item: { content: 'Content of File B' }
            }
          ]
        },
        {
          id: 5,
          name: 'DO 2',
          type: 'folder',
          item: null,
          children: [
            {
              id: 6,
              name: 'DA 5',
              type: 'file',
              item: { content: 'Content of File C' },
              children: [
                {
                  id: 8,
                  name: 'DA 5.1',
                  type: 'file',
                  item: { content: 'Content of File C.1' }
                },
                {
                  id: 9,
                  name: 'Enum 5.1',
                  type: 'file',
                  item: { content: 'Content of File C.2' }
                }
              ]
            }
          ]
        },
        {
          id: 7,
          name: 'DO 3',
          type: 'file',
          item: { content: 'Content of File D' }
        }
      ]
    }
  ];


