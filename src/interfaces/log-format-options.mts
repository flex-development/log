/**
 * @file Interfaces - LogFormatOptions
 * @module log/interfaces/LogFormatOptions
 */

/**
 * Log formatting options.
 */
interface LogFormatOptions {
  /**
   * Use color.
   *
   * @default isColorSupported()
   */
  colors?: boolean | null | undefined

  /**
   * Maximum number of columns to output.
   *
   * @default process.stdout.columns
   */
  columns?: number | null | undefined

  /**
   * Whether to include timestamp information in log messages.
   *
   * @default true
   */
  date?: boolean | undefined

  /**
   * Display icon?
   *
   * @default true
   */
  icon?: boolean | null | undefined
}

export type { LogFormatOptions as default }
