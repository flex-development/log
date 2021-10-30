import type { NullishString } from '@flex-development/tutils'
import defaults from '@log/config/defaults.config'
import LogColor from '@log/enums/log-color.enum'
import type {
  LogOptions,
  LogOptionsBold,
  LogOptionsColor
} from '@log/interfaces'
import type { Level } from '@log/types'
import ch from 'chalk'
import figs from 'figures'
import util from 'util'
import figure from './figure.util'
import inspectable from './inspectable.util'
import normalizeOptions from './normalize-options.util'

/**
 * @file Utility - format
 * @module log/utils/format
 */

/**
 * Formats log data and arguments.
 *
 * @param {any} data - Log data
 *
 * @param {LogOptions} [options=defaults] - `log` options
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
 * @return {string} Log data and arguments as string
 */
const format = (data: any, options: LogOptions = defaults): string => {
  // Normalize options
  options = normalizeOptions(options)

  // Inspect log data if data is function or object
  if (inspectable(data)) data = util.inspect(data, false, null)

  // Add log color
  if (options.level === 'DEBUG') {
    data = ch[options.color?.data ?? LogColor[options.level]](data)
  } else if (options.color?.data) data = ch[options.color?.data](data)

  // Bold log
  if (options.bold?.data) data = ch.bold(data)

  // Stringify arguments
  const args = (options.args as any[]).map(arg => {
    // Inspect log argument if argument is function or object
    if (inspectable(arg)) arg = util.inspect(arg, false, null)

    // Add log argument color
    if (options.level === 'DEBUG') {
      arg = ch[options.color?.args ?? LogColor[options.level]](arg)
    } else if (options.color?.args) arg = ch[options.color?.args](arg)

    // Bold log argument
    if (options.bold?.args) arg = ch.bold(arg)

    return arg
  })

  // Return formatted log
  // eslint-disable-next-line prefer-spread
  return `${figure(options)} ${data} ${util.format.apply(util, args)}`.trim()
}

export default format
