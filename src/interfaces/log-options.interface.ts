import type { NullishString } from '@flex-development/tutils'
import type { Level } from '@log/enums/log-level.enum'
import figures from 'figures'
import type { LogOptionsBold } from './log-options-bold.interface'
import type { LogOptionsColor } from './log-options-color.interface'

/**
 * @file Interfaces - LogOptions
 * @module log/interfaces/LogOptions
 */

/**
 * `log` options.
 */
export interface LogOptions {
  /**
   * Log arguments.
   *
   * @default []
   */
  args?: any[]

  /**
   * Bold log arguments **and/or** log data.
   *
   * @default {args:true}
   */
  bold?: LogOptionsBold

  /**
   * Set log color, and/or override the log figure color set by `level`.
   *
   * @default {args:'white'}
   */
  color?: LogOptionsColor

  /**
   * Override the log figure set by `level`, or omit it altogether.
   */
  figure?: keyof typeof figures | NullishString

  /**
   * Log level.
   *
   * @default 'DEBUG'
   */
  level?: Level

  /**
   * Use [`echo`][1] instead of `console.log`. Requires [`shelljs`][2].
   *
   * [1]: https://github.com/shelljs/shelljs#echooptions-string--string-
   * [2]: https://github.com/shelljs/shelljs
   */
  shell?: boolean

  /**
   * If `true`, do not log any output.
   */
  silent?: boolean
}
