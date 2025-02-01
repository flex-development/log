/**
 * @file Interfaces - LogFunction
 * @module log/interfaces/LogFunction
 */

import type { InputLogObject } from '@flex-development/log'

/**
 * Log function.
 */
interface LogFunction {
  /**
   * @see {@linkcode InputLogObject}
   *
   * @param {InputLogObject | string} message
   *  The message to write
   * @param {unknown[]} args
   *  Message arguments
   * @return {undefined | void}
   */
  (message: InputLogObject | string, ...args: unknown[]): undefined | void

  /**
   * @param {unknown} message
   *  The message to write
   * @param {unknown[]} args
   *  Message arguments
   * @return {undefined | void}
   */
  (message: unknown, ...args: unknown[]): undefined | void
}

export type { LogFunction as default }
