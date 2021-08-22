import type { Color } from 'chalk'

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
  args?: typeof Color

  /**
   * Set log data color.
   *
   * @default 'white'
   */
  data?: typeof Color

  /**
   * Override the log figure color set by `LogOptions.level`/
   */
  figure?: typeof Color
}
