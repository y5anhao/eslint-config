import type { Awaitable, FlatConfigItem } from './types'

export async function combine(...configs: Awaitable<FlatConfigItem | FlatConfigItem[]>[]): Promise<FlatConfigItem[]> {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m
  return (resolved as any).default || resolved
}
