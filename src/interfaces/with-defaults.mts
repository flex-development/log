/**
 * @file Interfaces - WithDefaults
 * @module log/interfaces/WithDefaults
 */

import type { InputLogObject, Logger } from '@flex-development/log'

/**
 * Create a new logger with the specified default log object properties.
 */
interface WithDefaults {
  /**
   * @see {@linkcode InputLogObject}
   *
   * @param {InputLogObject | null | undefined} [defaults]
   *  Default properties to apply to any log reported from the new logger
   * @return {Logger}
   *  The new logger
   */
  (defaults?: InputLogObject | null | undefined): Logger
}

export type { WithDefaults as default }
