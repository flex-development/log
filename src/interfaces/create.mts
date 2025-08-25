/**
 * @file Interfaces - Create
 * @module log/interfaces/Create
 */

import type { Logger, LoggerOptions } from '@flex-development/log'

/**
 * Create a new logger, inheriting options from the current instance, with
 * possible overrides.
 *
 * > 👉 **Note**: Plain objects (i.e. `options.format`, `options.types`) are
 * > merged recursively.
 */
interface Create {
  /**
   * @see {@linkcode Logger}
   * @see {@linkcode LoggerOptions}
   *
   * @param {LoggerOptions | null | undefined} [options]
   *  Overrides for the new logger
   * @return {Logger}
   *  The new logger
   */
  (options?: LoggerOptions | null | undefined): Logger
}

export type { Create as default }
