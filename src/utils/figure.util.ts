import type { NullishString } from '@flex-development/tutils'
import defaults from '@log/config/defaults.config'
import { LogColor } from '@log/enums/log-color.enum'
import { LogFigure } from '@log/enums/log-figure.enum'
import { LogLevel as LL } from '@log/enums/log-level.enum'
import type { LogOptions, LogOptionsColor } from '@log/interfaces'
import type { Level } from '@log/types'
import ch from 'chalk'
import figs from 'figures'
import normalizeOptions from './normalize-options.util'

/**
 * @file Utility - figure
 * @module log/utils/figure
 */

/**
 * Selects and colors a log figure. An empty string will be returned if:
 *
 * - `options.level.toLowerCase() === 'debug' && !options.figure`
 * - `options.figure && options.figure.trim() === ''`
 * - `options.figure === null`
 *
 * The figure and figure color are pre-determined by `options.level`, but can be
 * overridden using `options.figure` and `options.color.figure`, respectively.
 *
 * @param {LogOptions} [options=defaults] - `log` options
 * @param {LogOptionsColor} [options.color={figure:undefined}] - Override color
 * @param {keyof typeof figs | NullishString} [options.figure] - Override figure
 * @param {Level} [options.level=LogLevel.DEBUG] - Log level
 * @return {string} Colorized log figure or empty string
 */
const figure = (options: LogOptions = defaults): string => {
  // Spread options
  const {
    color,
    figure: fig,
    level = defaults.level
  } = normalizeOptions(options)

  // Omit if in in debug mode
  if (level.toLowerCase() === LL.DEBUG && !fig) return ''

  // Omit if figure is null or an empty string
  if (fig === null || fig === '' || (fig && fig.trim() === '')) return ''

  return ch.bold[color?.figure ?? LogColor[level]](fig || LogFigure[level])
}

export default figure
