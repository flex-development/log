/**
 * @file Interfaces - LogObject
 * @module log/interfaces/LogObject
 */

import type {
  InputLogObject,
  LogFormatOptions,
  LogLevel,
  LogType
} from '@flex-development/log'

/**
 * Log data object.
 *
 * @see {@linkcode InputLogObject}
 *
 * @extends {InputLogObject}
 */
interface LogObject extends InputLogObject {
  /**
   * Additional lines to be logged with the message.
   *
   * @override
   */
  additional: string[]

  /**
   * Message arguments.
   *
   * @override
   */
  args: unknown[]

  /**
   * Timestamp.
   *
   * @override
   */
  date: Date

  /**
   * Formatting options.
   *
   * @see {@linkcode LogFormatOptions}
   *
   * @override
   */
  format: LogFormatOptions

  /**
   * Log level.
   *
   * @see {@linkcode LogLevel}
   *
   * @override
   */
  level: LogLevel

  /**
   * Log message.
   *
   * @override
   */
  message?: null | undefined

  /**
   * Log type.
   *
   * @see {@linkcode LogType}
   *
   * @override
   */
  type: LogType
}

export type { LogObject as default }
