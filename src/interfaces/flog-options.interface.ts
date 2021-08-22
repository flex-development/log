import type { NullishString } from '@flex-development/tutils'
import type { Level } from '@flog/enums/log-level.enum'
import figures from 'figures'
import type { FlogOptionsBold } from './flog-options-bold.interface'
import type { FlogOptionsColor } from './flog-options-color.interface'

/**
 * @file Interfaces - FlogOptions
 * @module flog/interfaces/FlogOptions
 */

/**
 * `flog` options.
 */
export interface FlogOptions {
  /**
   * Bold log arguments **and/or** log data.
   *
   * @default {args:true}
   */
  bold?: FlogOptionsBold

  /**
   * Set log color, and/or override the log figure color set by `level`.
   *
   * @default {args:'white',data:'white'}
   */
  color?: FlogOptionsColor

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
