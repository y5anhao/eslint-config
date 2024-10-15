import { interopDefault } from '../utils'
import type { FlatConfigItem } from '../types'

export async function stylistic(): Promise<FlatConfigItem[]> {
  const stylistic = await interopDefault(import('@stylistic/eslint-plugin'))

  return [
    {
      name: 'stylistic',
      plugins: {
        '@stylistic': stylistic,
      },
      rules: {
        ...stylistic.configs.customize({
          flat: true,
          braceStyle: '1tbs',
          indent: 2,
          quotes: 'single',
          semi: false,
          jsx: true,
        }).rules,
      },
    },
  ]
}
