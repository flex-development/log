/**
 * @file Internal - isLogObject
 * @module log/internal/isLogObject
 */

import type { InputLogObject } from '@flex-development/log'

/**
 * Check if `value` **looks** like an {@linkcode InputLogObject}.
 *
 * > 👉 **Note**: Only the `args` and `message` fields are checked.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The value to check
 * @return {value is InputLogObject}
 *  `true` if `value` is looks like `InputLogObject`, `false` otherwise
 */
function isLogObject(this: void, value: unknown): value is InputLogObject {
  return (
    typeof value === 'object' &&
    value !== null &&
    (
      'args' in value && Array.isArray(value.args) ||
      'message' in value && typeof value.message === 'string'
    )
  )
}

export default isLogObject
