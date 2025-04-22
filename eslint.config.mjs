/**
 * @file eslint
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import fldv from '@flex-development/eslint-config'

/**
 * eslint configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...fldv.configs.node,
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
