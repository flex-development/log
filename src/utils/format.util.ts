import type { NullishString } from '@flex-development/tutils'
import defaults from '@flog/config/defaults.config'
import type { Level } from '@flog/enums/log-level.enum'
import type {
  FlogOptions,
  FlogOptionsBold as OBold,
  FlogOptionsColor as OColor
} from '@flog/interfaces'
import type { Color } from 'chalk'
import ch from 'chalk'
import figs from 'figures'
import util from 'util'
import figure from './figure.util'

/**
 * @file Utility - format
 * @module flog/utils/format
 */

/**
 * Formats log data and arguments.
 *
 * @param {any} data - Log data
 * @param {any[]} [args=[]] - Log arguments
 * @param {FlogOptions} [options=defaults] - `flog` options
 * @param {OBold} [options.bold={args:true}] - Bold logs
 * @param {boolean} [options.bold.args=true] - Bold log arguments
 * @param {boolean} [options.bold.data] - Bold log data
 * @param {OColor} [options.color={args:'white',data:'white'}] - Override colors
 * @param {typeof Color} [options.color.args='white'] - Set log arguments color
 * @param {typeof Color} [options.color.data='white'] - Set log data color
 * @param {typeof Color} [options.color.figure] - Set log figure color
 * @param {keyof typeof figs | NullishString} [options.figure] - Override figure
 * @param {Level} [options.level='DEBUG'] - Log level
 * @return {string} Log data and arguments as string
 */
const format = (
  data: any,
  args: any[] = [],
  options: FlogOptions = defaults
): string => {
  /**
   * Returns true if `value` is a function or object.
   *
   * @param {any} value - Value to check
   * @return {boolean} true if `value` is a function or object
   */
  const isFunctionOrObject = (value: any): boolean => {
    return typeof value === 'function' || typeof value === 'object'
  }

  // Inspect log data if data is function or object
  if (isFunctionOrObject(data)) data = util.inspect(data, false, null)

  // Add log color
  if (options.color?.data) data = ch[options.color.data](data)

  // Bold log
  if (options.bold?.data) data = ch.bold(data)

  // Stringify arguments
  args = args.map(arg => {
    // Inspect log argument if argument is function or object
    if (isFunctionOrObject(arg)) arg = util.inspect(arg, false, null)

    // Add log argument color
    if (options.color?.args) arg = ch[options.color.args](arg)

    // Bold log argument
    if (options.bold?.args) arg = ch.bold(arg)

    return arg
  })

  // Return formatted log
  // eslint-disable-next-line prefer-spread
  return `${figure(options)} ${data} ${util.format.apply(util, args)}`.trim()
}

export default format
