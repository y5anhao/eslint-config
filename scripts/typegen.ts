import fs from 'node:fs/promises'

import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'

import { combine, comments, disables, ignores, imports, javascript, regex, stylistic, typescript, unicorn, vue } from '../src'

const configs = await combine(
  {
    plugins: {
      '': {
        rules: Object.fromEntries(builtinRules.entries()),
      },
    },
  },
  stylistic(),
  typescript(),
  vue(),
  unicorn(),
  regex(),
  comments(),
  javascript(),
  imports(),
  disables(),
  ignores(),
)

const dts = await flatConfigsToRulesDTS(
  configs,
  { includeAugmentation: true, exportTypeName: 'Rules' },
)

await fs.writeFile('src/typegen.d.ts', dts)
