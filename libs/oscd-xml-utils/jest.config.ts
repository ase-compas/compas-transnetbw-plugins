/* eslint-disable */
export default {
  displayName: 'oscd-xml-utils',
  preset: '../../jest.preset.js',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/oscd-xml-utils',
};
