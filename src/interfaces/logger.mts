/**
 * @file Interfaces - Logger
 * @module log/interfaces/Logger
 */

import type { Colors } from '@flex-development/colors'
import type {
  Create,
  InputLogObject,
  LogFormatOptions,
  LogFunctions,
  LogLevel,
  LogLevelMap,
  LogLevelOption,
  LogType,
  WithDefaults,
  WithTag,
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
   * Whether the logger is operating in a browser environment.
   *
   * @readonly
   */
  readonly browser: boolean

  /**
   * Whether color logs are enabled.
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
   * Create a new logger, inheriting options from the current instance, with
   * possible overrides.
   *
   * @see {@linkcode Create}
   */
  create: Create

  /**
   * Properties to apply to all logs, regardless of log type or level.
   *
   * Defaults are overridden per log type using {@linkcode types}.
   *
   * @see {@linkcode InputLogObject}
   */
  defaults: InputLogObject

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
   * Get the current log level.
   *
   * @see {@linkcode LogLevel}
   *
   * @return {LogLevel}
   *  Current log level
   */
  get level(): LogLevel

  /**
   * Set the maximum log level to output.
   *
   * @see {@linkcode LogLevelOption}
   *
   * @param {LogLevelOption | null | undefined} level
   *  Maximum log level (inclusive)
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
   *
   * @readonly
   */
  readonly reporters: Set<Reporter>

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
   * Map defining the log configuration for each log type.
   *
   * @see {@linkcode InputLogObject}
   * @see {@linkcode LogType}
   */
  types: Record<LogType, InputLogObject>

  /**
   * Whether unicode is supported.
   */
  unicode: boolean

  /**
   * Create a new logger with the specified default log object properties.
   *
   * @see {@linkcode WithDefaults}
   */
  withDefaults: WithDefaults

  /**
   * Create a new logger with the specified tag.
   *
   * The tag will be included in any logs sent from the new logger.
   *
   * @see {@linkcode WithTag}
   */
  withTag: WithTag
}

export type { Logger as default }
