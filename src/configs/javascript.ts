import globals from 'globals'
import { interopDefault } from '../utils'
import type { FlatConfigItem } from '../types'

export async function javascript(): Promise<FlatConfigItem[]> {
  const unusedImports = await interopDefault(import('eslint-plugin-unused-imports'))
  // @ts-expect-error miss type
  const js = await interopDefault(import('@eslint/js'))

  return [
    {
      rules: {
        ...js.configs.recommended.rules,
      },
    },
    {
      languageOptions: {
        globals: {
          ...globals.es2021,
          ...globals.browser,
          ...globals.node,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      plugins: {
        'unused-imports': unusedImports,
      },
      rules: {
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'dot-notation': 'warn',
        'eqeqeq': ['error', 'smart'],
        'no-alert': 'warn',
        'no-console': ['warn', { allow: ['warn', 'error', 'info', 'clear'] }],
        'no-debugger': 'warn',
        'no-duplicate-imports': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-fallthrough': [
          'warn',
          { commentPattern: String.raw`break[\s\w]*omitted` },
        ],
        'no-inner-declarations': 'error',
        'no-lonely-if': 'error',
        'no-multi-str': 'error',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true,
          },
        ],
        'no-unused-vars': 'off',
        'no-void': 'error',
        'object-shorthand': [
          'error',
          'always',
          { avoidQuotes: true, ignoreConstructors: false },
        ],
        'prefer-arrow-callback': [
          'error',
          { allowNamedFunctions: false, allowUnboundThis: true },
        ],
        'prefer-const': [
          'warn',
          { destructuring: 'all', ignoreReadBeforeAssign: true },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-await': 'error',
        'unicode-bom': ['error', 'never'],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          { args: 'after-used', ignoreRestSiblings: true },
        ],
        'use-isnan': [
          'error',
          { enforceForIndexOf: true, enforceForSwitchCase: true },
        ],
        'valid-typeof': ['error', { requireStringLiterals: true }],
        'vars-on-top': 'error',
      },
    },
  ]
}
