/**
 * @file Interfaces - LogFunctions
 * @module log/interfaces/LogFunctions
 */

import type { Inspect, LogTypeFunctions } from '@flex-development/log'

/**
 * Registry of log functions.
 *
 * @see {@linkcode LogTypeFunctions}
 *
 * @extends {LogTypeFunctions}
 */
interface LogFunctions extends LogTypeFunctions {
  /**
   * Use `util.inspect` on a value and print its string representation.
   *
   * @see {@linkcode Inspect}
   */
  inspect: Inspect
}

export type { LogFunctions as default }
