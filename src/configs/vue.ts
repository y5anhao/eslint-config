import { GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'
import type { FlatConfigItem } from '../types'

export async function vue(): Promise<FlatConfigItem[]> {
  const vue = await interopDefault(import('eslint-plugin-vue'))
  const parser = await interopDefault(import('vue-eslint-parser'))
  const tseslint = await interopDefault(import('typescript-eslint'))

  return [
    {
      files: [GLOB_VUE],
      plugins: {
        '@typescript-eslint': tseslint.plugin,
        vue,
      },
      processor: vue.processors['.vue'],
      languageOptions: {
        parser,
        parserOptions: {
          parser: '@typescript-eslint/parser',
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
        },
      },
      rules: {
        ...vue.configs.base.rules,
        ...vue.configs['vue3-essential'].rules,
        ...vue.configs['vue3-strongly-recommended'].rules,
        ...vue.configs['vue3-recommended'].rules,

        'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/eqeqeq': ['error', 'smart'],
        'vue/html-self-closing': [
          'error',
          {
            html: {
              component: 'always',
              normal: 'always',
              void: 'any',
            },
            math: 'always',
            svg: 'always',
          },
        ],
        'vue/max-attributes-per-line': 'off',

        'vue/multi-word-component-names': 'off',
        'vue/no-constant-condition': 'warn',
        'vue/no-empty-pattern': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-useless-v-bind': 'error',

        'vue/no-v-html': 'off',
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        'vue/one-component-per-file': 'off',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-template': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
      },
    },
  ]
}
