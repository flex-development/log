const { overrides, rules } = require('./.eslintrc.base.cjs')

/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

const RULES_SPELLCHECKER = rules['spellcheck/spell-checker']

module.exports = {
  root: true,
  extends: ['./.eslintrc.base.cjs'],
  rules: {
    'spellcheck/spell-checker': [
      RULES_SPELLCHECKER[0],
      {
        ...RULES_SPELLCHECKER[1],
        skipWords: [
          ...RULES_SPELLCHECKER[1].skipWords,
          'ansi',
          'enum',
          'enums',
          'inspectable',
          'nullish',
          'unicode'
        ]
      }
    ]
  },
  overrides: [
    ...overrides,
    {
      files: [
        'src/interfaces/log-options-color.interface.ts',
        'src/main.ts',
        'src/utils/__tests__/format.util.functional.spec.ts',
        'src/utils/format.util.ts',
        'src/utils/normalize-options.util.ts'
      ],
      rules: {
        'unicorn/import-style': [
          0,
          {
            styles: {
              chalk: false
            }
          }
        ]
      }
    },
    {
      files: ['src/main.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        'unicorn/prefer-module': 0
      }
    },
    {
      files: ['src/utils/__tests__/format.util.functional.spec.ts'],
      rules: {
        'unicorn/import-style': [
          0,
          {
            styles: {
              util: false
            }
          }
        ]
      }
    }
  ]
}
