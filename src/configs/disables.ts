import { GLOB_SRC_EXT } from '../globs'
import { interopDefault } from '../utils'
import type { FlatConfigItem } from '../types'

export async function disables(): Promise<FlatConfigItem[]> {
  return [
    {
      files: ['**/*.d.?([cm])ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: [`**/*.config.${GLOB_SRC_EXT}`, `**/*.config.*.${GLOB_SRC_EXT}`],
      plugins: {
        import: await interopDefault(import('eslint-plugin-import-x')),
      },
      rules: {
        'no-console': 'off',
        'import/no-default-export': 'off',
      },
    },
  ]
}
