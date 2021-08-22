import type { Color } from 'chalk'

/**
 * @file Interfaces - FlogOptionsColor
 * @module flog/interfaces/FlogOptionsColor
 */

/**
 * `flog` color options.
 */
export interface FlogOptionsColor {
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
   * Override the log figure color set by `FlogOptions.level`/
   */
  figure?: typeof Color
}
