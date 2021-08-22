import type { NullishString } from '@flex-development/tutils'
import defaults from '@log/config/defaults.config'
import { LogColor } from '@log/enums/log-color.enum'
import { LogFigure } from '@log/enums/log-figure.enum'
import type { Level } from '@log/enums/log-level.enum'
import type { LogOptions, LogOptionsColor } from '@log/interfaces'
import ch from 'chalk'
import figs from 'figures'

/**
 * @file Utility - figure
 * @module log/utils/figure
 */

/**
 * Selects and colors a log figure. An empty string will be returned if:
 *
 * - `options.level === 'DEBUG' && !options.figure`
 * - `options.figure === null`
 *
 * The figure and figure color are pre-determined by `options.level`, but can be
 * overridden using `options.figure` and `options.color.figure`, respectively.
 *
 * @param {LogOptions} [options=defaults] - `log` options
 * @param {LogOptionsColor} [options.color={figure:undefined}] - Override color
 * @param {keyof typeof figs | NullishString} [options.figure] - Override figure
 * @param {Level} [options.level='DEBUG'] - Log level
 * @return {string} Colorized log figure or empty string
 */
const figure = (options: LogOptions = defaults): string => {
  // Spread options
  const { color = defaults.color, figure, level = defaults.level } = options

  // Omit figure
  if ((level === 'DEBUG' && !figure) || figure === null) return ''

  // Select figure
  const fig = figure || LogFigure[level]

  return ch.bold[color?.figure ?? LogColor[level]](fig)
}

export default figure
