/**
 * @file Interfaces - LogFormatOptions
 * @module log/interfaces/LogFormatOptions
 */

import type { InspectOptions } from '@flex-development/log'

/**
 * Log formatting options.
 *
 * @see {@linkcode InspectOptions}
 *
 * @extends {InspectOptions}
 */
interface LogFormatOptions extends InspectOptions {
  /**
   * Whether to display the log type as a badge.
   */
  badge?: boolean | null | undefined

  /**
   * The maximum number of columns to output.
   */
  columns?: number | null | undefined

  /**
   * Whether to include timestamp information in log messages.
   */
  date?: boolean | null | undefined

  /**
   * Whether to display the icon associated with the log.
   */
  icon?: boolean | null | undefined
}

export type { LogFormatOptions as default }
