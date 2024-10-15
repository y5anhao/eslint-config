import { interopDefault } from '../utils'
import type { FlatConfigItem } from '../types'

export async function imports(): Promise<FlatConfigItem[]> {
  const imports = await interopDefault(import('eslint-plugin-import-x'))
  const perfectionist = await interopDefault(import('eslint-plugin-perfectionist'))

  return [
    {
      plugins: {
        import: imports,
      },
      rules: {
        'import/first': 'error',
        'import/no-default-export': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/newline-after-import': ['error', { count: 1 }],
      },
    },
    {
      plugins: {
        perfectionist,
      },
      rules: {
        'perfectionist/sort-imports': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'internal-type',
              'parent',
              'parent-type',
              'sibling',
              'sibling-type',
              'index',
              'index-type',
              'object',
              'type',
              'side-effect',
              'side-effect-style',
            ],
            internalPattern: ['~/**', '@/**', '#**'],
            newlinesBetween: 'ignore',
          },
        ],
        'perfectionist/sort-named-exports': [
          'warn',
          { groupKind: 'values-first' },
        ],
        'perfectionist/sort-named-imports': [
          'warn',
          { groupKind: 'values-first' },
        ],
      },
    },
  ]
}
