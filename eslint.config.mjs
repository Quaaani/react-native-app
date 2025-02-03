import globals from 'globals'

import eslint from '@eslint/js'

import reactRecommendedConfig from 'eslint-plugin-react/configs/recommended.js'
import importRecommendedConfig from 'eslint-plugin-import/config/flat/recommended.js'
import prettierConfig from 'eslint-config-prettier'

import importPlugin from 'eslint-plugin-import'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import babelParser from '@babel/eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [].concat(
  eslint.configs.recommended,
  {
    name: 'Common ESLint Config',
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    ignores: ['**/*.d.ts'],
  },
  {
    name: 'JS ESLint Config',
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser,
    },
  },
  {
    ...reactRecommendedConfig,
    ...importRecommendedConfig,
    ...prettierConfig,
    name: 'TS ESLint Config',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: './',
      },
    },
    plugins: {
      'react-hooks': reactHooksPlugin,
      'import': importPlugin,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/order': [
        'warn',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
)
