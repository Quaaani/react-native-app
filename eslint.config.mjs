import jsPlugin from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'
import tsEslint from 'typescript-eslint'
import expoConfig from 'eslint-config-expo'

/** @type {import('eslint').Linter.Config[]} */
export default tsEslint.config(
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  },
  jsPlugin.configs.recommended,
  ...tsEslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  {
    extends: {
      expo: expoConfig,
    },
  },
)
