import { interopDefault } from '../utils'
import type { FlatConfigItem } from '../types'

export async function regex(): Promise<FlatConfigItem[]> {
  const { configs } = await interopDefault(import('eslint-plugin-regexp'))

  return [configs['flat/recommended']]
}
