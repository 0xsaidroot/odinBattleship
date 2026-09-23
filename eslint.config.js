import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/', 'dist/'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  eslintConfigPrettier,
];
/*  "lint": "eslint .", //Only checks for error starting in the current file
    "lint:fix": "eslint . --fix",// checks entire code + fix
    "format": "prettier . --write",// format of whole document
    "format:check": "prettier . --check",//verify if format was appplied
    "arrange": "eslint . --fix && prettier . --write", //Apply eslint and prettier everywhere
*/
