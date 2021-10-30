import type ch from 'chalk'

/**
 * @file Interfaces - LogOptionsColor
 * @module log/interfaces/LogOptionsColor
 */

/**
 * `log` color options.
 */
export interface LogOptionsColor {
  /**
   * Set log arguments color.
   *
   * @default 'white'
   */
  args?: typeof ch.Color

  /**
   * Set log data color.
   *
   * @default 'white'
   */
  data?: typeof ch.Color

  /**
   * Override the log figure color set by `LogOptions.level`/
   */
  figure?: typeof ch.Color
}
