module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['../../.eslintrc.json', 'plugin:svelte/recommended'],
  ignorePatterns: ['!**/*', 'vite.config.ts'],
  overrides: [
    {
      files: ['**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.svelte']
      },
      rules: {}
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {}
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {}
    }
  ]
};
