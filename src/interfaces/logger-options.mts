/**
 * @file Interfaces - LoggerOptions
 * @module log/interfaces/LoggerOptions
 */

import type {
  InputLogObject,
  LogFormatOptions,
  LogLevelOption,
  LogType,
  WriteStream
} from '@flex-development/log'
import type { Reporter } from '@flex-development/log/reporters'

/**
 * Logger configuration options.
 */
interface LoggerOptions {
  /**
   * New line character(s).
   *
   * @default '\n'
   */
  eol?: string | null | undefined

  /**
   * Formatting options.
   *
   * @see {@linkcode LogFormatOptions}
   *
   * @default
   *  {
   *    colors: isColorSupported(),
   *    columns: process.stdout.columns,
   *    date: true,
   *    icon: true
   *  }
   */
  format?: LogFormatOptions | null | undefined

  /**
   * The minimum log level to output.
   *
   * > 👉 **Note**: Log types will be converted to log levels.
   *
   * @see {@linkcode LogLevelOption}
   *
   * @default 'info'
   */
  level?: LogLevelOption | null | undefined

  /**
   * List of reporter instances used to handle and output log messages.
   *
   * @see {@linkcode Reporter}
   *
   * @default []
   */
  reporters?: Set<Reporter> | readonly Reporter[] | null | undefined

  /**
   * The writeable stream for standard error output.
   *
   * @see {@linkcode WriteStream}
   *
   * @default process.stderr
   */
  stderr?: WriteStream | null | undefined

  /**
   * The writeable stream for standard output.
   *
   * @see {@linkcode WriteStream}
   *
   * @default process.stdout
   */
  stdout?: WriteStream | null | undefined

  /**
   * Record, where each key is a log type and each value is an input log object
   * defining the log configuration for the log type.
   *
   * @see {@linkcode InputLogObject}
   * @see {@linkcode LogType}
   */
  types?: Partial<Record<LogType, InputLogObject>> | null | undefined
}

export type { LoggerOptions as default }
