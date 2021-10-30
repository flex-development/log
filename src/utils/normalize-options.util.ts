import type { NullishString } from '@flex-development/tutils'
import defaults from '@log/config/defaults.config'
import type {
  LogOptions,
  LogOptionsBold,
  LogOptionsColor
} from '@log/interfaces'
import type { Level } from '@log/types'
import type ch from 'chalk'
import figs from 'figures'
import merge from 'lodash.merge'

/**
 * @file Utility - normalizeOptions
 * @module log/utils/normalizeOptions
 */

/**
 * Merges default options and normalizes resulting options.
 *
 * @param {LogOptions} [options={}] - `log` options
 * @param {any[]} [options.args=[]] - Log arguments
 * @param {LogOptionsBold} [options.bold={args:true}] - Bold logs
 * @param {boolean} [options.bold.args=true] - Bold log arguments
 * @param {boolean} [options.bold.data] - Bold log data
 * @param {LogOptionsColor} [options.color={args:'white'}] - Override colors
 * @param {typeof ch.Color} [options.color.args='white'] - Log arguments color
 * @param {typeof ch.Color} [options.color.data] - Log data color
 * @param {typeof ch.Color} [options.color.figure] - Log figure color
 * @param {keyof typeof figs | NullishString} [options.figure] - Override figure
 * @param {Level} [options.level=LogLevel.DEBUG] - Log level
 * @param {boolean} [options.shell] - Use [`echo`][2] instead of `console.log`
 * @param {boolean} [options.silent] - Do not log any output
 * @return {LogOptions} Normalized log level
 */
const normalizeOptions = (options: LogOptions = {}): LogOptions => {
  // Merge options with defaults
  const opts: LogOptions = merge({}, defaults, options)

  // Normalize options.level
  if (opts.level) opts.level = opts.level.toUpperCase() as Level

  // Return normalized options
  return opts
}

export default normalizeOptions
