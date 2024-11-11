import { FilterType } from '../../../libs/oscd-component/src/oscd-filter-box/interfaces';

const filterTypes: FilterType[] = [
  {
    id: 1,
    label: 'Filename',
    inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
    allowedOperations: ['=']
  },
  {
    id: 2,
    label: 'UUID',
    inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
    allowedOperations: ['=']
  },
  {
    id: 3,
    label: 'Type',
    inputType: {
      id: 2, type: 'select', validatorFn: () => true, options: [
        { value: 'SSD', label: 'SSD' },
        { value: 'IID', label: 'IID' },
        { value: 'ICD', label: 'ICD' },
        { value: 'SCD', label: 'SCD' },
        { value: 'CID', label: 'CID' },
        { value: 'SED', label: 'SED' },
        { value: 'ISD', label: 'ISD' },
        { value: 'STD', label: 'STD' }
      ]
    },
    allowedOperations: ['=']
  },
  {
    id: 4,
    label: 'Author',
    inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
    allowedOperations: ['=']
  },
  {
    id: 5,
    label: 'From',
    inputType: { id: 3, type: 'timepicker', validatorFn: () => true, options: [] },
    allowedOperations: ['=']
  },
  {
    id: 5,
    label: 'To',
    inputType: { id: 3, type: 'timepicker', validatorFn: () => true, options: [] },
    allowedOperations: ['=']
  }
];
