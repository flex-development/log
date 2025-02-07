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
   * Display log type as badge?
   */
  badge?: boolean | null | undefined

  /**
   * Maximum number of columns to output.
   */
  columns?: number | null | undefined

  /**
   * Whether to include timestamp information in log messages.
   */
  date?: boolean | null | undefined

  /**
   * Display icon?
   */
  icon?: boolean | null | undefined
}

export type { LogFormatOptions as default }
