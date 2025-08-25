/**
 * @file Type Aliases - Inspect
 * @module log/types/Inspect
 */

import type { InspectOptions } from '@flex-development/log'
import type * as util from 'node-inspect-extracted'

/**
 * Use {@linkcode util.inspect} on `value` and print its string
 * representation.
 *
 * @see {@linkcode InspectOptions}
 *
 * @param {unknown} value
 *  The thing to inspect
 * @param {InspectOptions | null | undefined} [options]
 *  Inspection options
 * @return {undefined}
 */
type Inspect = (
  value: unknown,
  options?: InspectOptions | null | undefined
) => undefined

export type { Inspect as default }
