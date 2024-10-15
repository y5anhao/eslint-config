import { comments, disables, ignores, imports, javascript, jsonc, stylistic, typescript, unicorn, vue } from './configs'
import type { FlatConfigItem } from './types'

export async function presets({
  vue: enableVue = false,
  typescript: enableTypeScript = true,
}: Partial<{
  vue: boolean
  stylistic: boolean
  typescript: boolean
}> = {}): Promise<FlatConfigItem[]> {
  const configs = [
    ignores(),
    javascript(),
    comments(),
    imports(),
    unicorn(),
    stylistic(),
    jsonc(),
  ]

  if (enableTypeScript) {
    configs.push(typescript())
  }

  if (enableVue) {
    configs.push(vue())
  }

  configs.push(disables())

  return (await Promise.all(configs)).flat()
}
