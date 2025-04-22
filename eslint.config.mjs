/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import fldv from '@flex-development/eslint-config'

/**
 * Root eslint configuration object.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...fldv.configs.node,
  {
    ignores: [
      '**/.vitest-reports/'
    ]
  },
  {
    files: ['src/enums/log-levels.mts'],
    rules: {
      'sort-keys': 0
    }
  },
  {
    files: ['src/interfaces/log-function.mts'],
    rules: {
      '@typescript-eslint/unified-signatures': 0
    }
  }
]
