import type { NullishString } from '@flex-development/tutils'
import defaults from '@flog/config/defaults.config'
import type { Level } from '@flog/enums/log-level.enum'
import type {
  FlogOptions,
  FlogOptionsBold as OBold,
  FlogOptionsColor as OColor
} from '@flog/interfaces'
import type { Color } from 'chalk'
import figs from 'figures'
import merge from 'lodash.merge'
import format from './utils/format.util'

/**
 * @file Log Method
 * @module flog/flog
 */

/**
 * Console and terminal logger. To log to the terminal, install [`shelljs`][1]
 * and set `options.shell` to `true`.
 *
 * [1]: https://github.com/shelljs/shelljs
 * [2]: https://github.com/shelljs/shelljs#echooptions-string--string-
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
 * @param {boolean} [options.shell] - Use [`echo`][2] instead of `console.log`
 * @param {boolean} [options.silent] - Do not log any output
 * @return {string} Formatted log entry
 */
const flog = (
  data: any,
  args: any[] = [],
  options: FlogOptions = defaults
): string => {
  // Merge options with defaults
  const $options = merge({}, defaults, options)

  // Create formatted log entry
  const entry = format(data, args, $options)

  // Log entry
  if (!options.silent) {
    options.shell ? require('shelljs').default.echo(entry) : console.log(entry)
  }

  return entry
}

export default flog
