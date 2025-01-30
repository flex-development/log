/**
 * @file Interfaces - InputLogObject
 * @module log/interfaces/InputLogObject
 */

import type { Color } from '@flex-development/colors'
import type {
  LogFormatOptions,
  LogLevel,
  LogType
} from '@flex-development/log'

/**
 * Input log data object.
 */
interface InputLogObject {
  /**
   * Additional text or texts to be logged with the message.
   */
  additional?: string[] | string | null | undefined

  /**
   * Additional arguments to be logged with the message.
   */
  args?: unknown[] | null | undefined

  /**
   * Color function name.
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
   * @see {@linkcode LogLevel}
   */
  level?: LogLevel | null | undefined

  /**
   * Log message.
   */
  message?: string | null | undefined

  /**
   * Stack trace.
   */
  stack?: string | null | undefined

  /**
   * Log type.
   *
   * @see {@linkcode LogType}
   */
  type?: LogType | null | undefined
}

export type { InputLogObject as default }
