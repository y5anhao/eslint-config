import { interopDefault } from '../utils'
import type { FlatConfigItem } from '../types'

export async function comments(): Promise<FlatConfigItem[]> {
  // @ts-expect-error miss type
  const comments = await interopDefault(import('@eslint-community/eslint-plugin-eslint-comments'))

  return [
    {
      plugins: {
        '@eslint-community/eslint-comments': comments,
      },
      rules: {
        ...comments.recommended,
        '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
      },
    },
  ]
}
