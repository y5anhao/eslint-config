import { GLOB_TS, GLOB_TSX } from '../globs'
import { interopDefault } from '../utils'
import type { Rules } from '../typegen'
import type { FlatConfigItem } from '../types'

export async function typescript(): Promise<FlatConfigItem[]> {
  const tseslint = await interopDefault(import('typescript-eslint'))

  const config = tseslint.config({
    files: [GLOB_TS, GLOB_TSX],
    extends: [...tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow-as-parameter',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': [
        'error',
        { allowBitwiseExpressions: true },
      ],
    } satisfies Rules,
  }) as FlatConfigItem[]

  return [
    ...config,
  ]
}
