/**
 * @file Interfaces - Logger
 * @module log/interfaces/Logger
 */

import type { Colors } from '@flex-development/colors'
import type {
  InputLogObject,
  LogFormatOptions,
  LogFunctions,
  LogLevel,
  LogLevelMap,
  LogLevelOption,
  LogType,
  WriteStream
} from '@flex-development/log'
import type { Reporter } from '@flex-development/log/reporters'

/**
 * Logger API.
 *
 * @see {@linkcode LogFunctions}
 *
 * @extends {LogFunctions}
 */
interface Logger extends LogFunctions {
  /**
   * Browser logger?
   *
   * @readonly
   */
  readonly browser: boolean

  /**
   * Color logs enabled?
   *
   * @return {boolean}
   *  `true` if color is enabled, `false` otherwise
   */
  get color(): boolean

  /**
   * Enable or disable color logs.
   *
   * > 👉 **Note**: Even if color logs are enabled, they will be disabled if
   * > color is not supported.
   *
   * @param {boolean | null | undefined} color
   *  Color logs enabled?
   */
  set color(color: boolean | null | undefined)

  /**
   * Get a colorizer based on the current {@linkcode color} configuration.
   *
   * @see {@linkcode Colors}
   *
   * @return {Colors}
   *  Colorizer object
   */
  get colors(): Colors

  /**
   * New line character(s).
   */
  eol: string

  /**
   * Formatting options.
   *
   * @see {@linkcode LogFormatOptions}
   */
  format: LogFormatOptions

  /**
   * Get the minimum log level to output.
   *
   * @see {@linkcode LogLevel}
   *
   * @return {LogLevel}
   *  Current log level
   */
  get level(): LogLevel

  /**
   * Set the minimum log level to output.
   *
   * @see {@linkcode LogLevelOption}
   *
   * @param {LogLevelOption | null | undefined} level
   *  New log level
   */
  set level(level: LogLevelOption | null | undefined)

  /**
   * Log level map.
   *
   * @see {@linkcode LogLevelMap}
   *
   * @readonly
   */
  readonly levels: Readonly<LogLevelMap>

  /**
   * List of reporter instances used to handle and output log messages.
   *
   * @see {@linkcode Reporter}
   */
  reporters: Reporter[]

  /**
   * The writeable stream for standard error output.
   *
   * @see {@linkcode WriteStream}
   */
  stderr: WriteStream

  /**
   * The writeable stream for standard output.
   *
   * @see {@linkcode WriteStream}
   */
  stdout: WriteStream

  /**
   * Get a map defining the log configuration for each log type.
   *
   * @see {@linkcode InputLogObject}
   * @see {@linkcode LogType}
   *
   * @return {Record<LogType, InputLogObject>}
   *  Log type to configuration map
   */
  get types(): Record<LogType, InputLogObject>

  /**
   * Unicode supported?
   */
  unicode: boolean
}

export type { Logger as default }
