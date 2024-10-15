import type { Rules } from './typegen'
import type { Linter } from 'eslint'

export type Awaitable<T> = T | Promise<T>

export type FlatConfigItem = Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'> & {
  plugins?: Record<string, any>
}
