/**
 * @file Interfaces - LogFunctions
 * @module log/interfaces/LogFunctions
 */

import type { InspectOptions, LogTypeFunctions } from '@flex-development/log'
import type * as util from 'node-inspect-extracted'

/**
 * Registry of log functions.
 *
 * @see {@linkcode LogTypeFunctions}
 *
 * @extends {LogTypeFunctions}
 */
interface LogFunctions extends LogTypeFunctions {
  /**
   * Use {@linkcode util.inspect} on `value` and print its string
   * representation.
   *
   * @see {@linkcode InspectOptions}
   *
   * @this {void}
   *
   * @param {unknown} value
   *  The thing to inspect
   * @param {InspectOptions | null | undefined} [options]
   *  Inspect options
   * @return {undefined}
   */
  inspect(
    this: void,
    value: unknown,
    options?: InspectOptions | null | undefined
  ): undefined
}

export type { LogFunctions as default }
