/**
 * @file Interfaces - LoggerOptions
 * @module log/interfaces/LoggerOptions
 */

import type {
  InputLogObject,
  LogFormatOptions,
  LogLevelOption,
  LogType,
  ReportersOption,
  WriteStream
} from '@flex-development/log'

/**
 * Logger configuration options.
 */
interface LoggerOptions {
  /**
   * Properties to apply to all logs, regardless of log type or level.
   *
   * Defaults can be overridden per log type using {@linkcode types}.
   *
   * @see {@linkcode InputLogObject}
   */
  defaults?: InputLogObject | null | undefined

  /**
   * The character, or characters, used to signify the end of a line.
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
   * The maximum log level to output.
   *
   * > 👉 **Note**: Log types will be converted to log levels.
   *
   * @see {@linkcode LogLevelOption}
   *
   * @default 'info'
   */
  level?: LogLevelOption | null | undefined

  /**
   * Reporter instances used to handle and output log messages.
   *
   * @see {@linkcode ReportersOption}
   *
   * @default []
   */
  reporters?: ReportersOption | null | undefined

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
