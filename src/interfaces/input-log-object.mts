/**
 * @file Interfaces - InputLogObject
 * @module log/interfaces/InputLogObject
 */

import type { Color } from '@flex-development/colors'
import type {
  LogFormatOptions,
  LogLevelOption,
  LogType
} from '@flex-development/log'

/**
 * Input log data object.
 */
interface InputLogObject {
  /**
   * An additional line, or list of lines, to be logged with the message.
   */
  additional?: string | string[] | null | undefined

  /**
   * Format arguments.
   */
  args?: unknown[] | null | undefined

  /**
   * Color associated with the log.
   *
   * @see {@linkcode Color}
   */
  color?: Color | null | undefined

  /**
   * Timestamp.
   */
  date?: Date | null | undefined

  /**
   * Format options.
   *
   * @see {@linkcode LogFormatOptions}
   */
  format?: LogFormatOptions | null | undefined

  /**
   * Icon to display.
   */
  icon?: string | null | undefined

  /**
   * Log level.
   *
   * @see {@linkcode LogLevelOption}
   */
  level?: LogLevelOption | null | undefined

  /**
   * Log message.
   *
   * > 👉 **Note**: Inserted into {@linkcode args} as the first format argument
   * > if defined.
   */
  message?: unknown

  /**
   * Stack trace.
   */
  stack?: string | null | undefined

  /**
   * A string to categorize or identify the log.
   */
  tag?: string | null | undefined

  /**
   * Log type.
   *
   * @see {@linkcode LogType}
   */
  type?: LogType | null | undefined
}

export type { InputLogObject as default }
