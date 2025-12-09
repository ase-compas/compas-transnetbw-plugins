module.exports = {
  extends: ['../../.eslintrc.json', 'plugin:svelte/recommended'],
  ignorePatterns: ['!**/*', 'vite.config.ts'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
        },
        extraFileExtensions: ['.svelte'],
      },
      rules: {},
    },
  ],
};
