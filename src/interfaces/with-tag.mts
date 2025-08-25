/**
 * @file Interfaces - WithTag
 * @module log/interfaces/WithTag
 */

import type { Logger } from '@flex-development/log'

/**
 * Create a new logger with the specified `tag`.
 *
 * The tag will be included in any logs sent from the new logger.
 *
 * > 👉 **Note**: Other options (i.e. `format`, `level`) are inherited from
 * > the current logger.
 */
interface WithTag {
  /**
   * @param {string} tag
   *  The tag to include in each log reported from the new logger
   * @param {string | null | undefined} [separator=':']
   *  The string to used separate tags
   * @return {Logger}
   *  The new logger
   */
  (tag: string, separator?: string | null | undefined): Logger
}

export type { WithTag as default }
