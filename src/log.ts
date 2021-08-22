import type { NullishString } from '@flex-development/tutils'
import defaults from '@log/config/defaults.config'
import type { Level } from '@log/enums/log-level.enum'
import type {
  LogOptions,
  LogOptionsBold,
  LogOptionsColor
} from '@log/interfaces'
import type { Color } from 'chalk'
import figs from 'figures'
import merge from 'lodash.merge'
import format from './utils/format.util'

/**
 * @file Log Method
 * @module log/log
 */

/**
 * Console and terminal logger. To log to the terminal, install [`shelljs`][1]
 * and set `options.shell` to `true`.
 *
 * [1]: https://github.com/shelljs/shelljs
 * [2]: https://github.com/shelljs/shelljs#echooptions-string--string-
 *
 * @param {any} data - Log data
 * @param {LogOptions} [options=defaults] - `log` options
 * @param {any[]} [options.args=[]] - Log arguments
 * @param {LogOptionsBold} [options.bold={args:true}] - Bold logs
 * @param {boolean} [options.bold.args=true] - Bold log arguments
 * @param {boolean} [options.bold.data] - Bold log data
 * @param {LogOptionsColor} [options.color={args:'white'}] - Override colors
 * @param {typeof Color} [options.color.args='white'] - Set log arguments color
 * @param {typeof Color} [options.color.data] - Set log data color
 * @param {typeof Color} [options.color.figure] - Set log figure color
 * @param {keyof typeof figs | NullishString} [options.figure] - Override figure
 * @param {Level} [options.level='DEBUG'] - Log level
 * @param {boolean} [options.shell] - Use [`echo`][2] instead of `console.log`
 * @param {boolean} [options.silent] - Do not log any output
 * @return {string} Formatted log entry
 */
const log = (data: any, options: LogOptions = defaults): string => {
  // Merge options with defaults
  const $options = merge({}, defaults, options)

  // Create formatted log entry
  const entry = format(data, $options)

  // Log entry
  if (!options.silent) {
    options.shell ? require('shelljs').default.echo(entry) : console.log(entry)
  }

  return entry
}

export default log
