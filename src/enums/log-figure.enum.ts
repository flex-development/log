import figures from 'figures'
import type { Level } from './log-level.enum'

/**
 * @file Enums - LogFigure
 * @module flog/enums/LogFigure
 */

/**
 * Log levels mapped to [figures][1].
 *
 * [1]: https://github.com/sindresorhus/figures
 *
 * @readonly
 * @enum {string}
 */
export const LogFigure: Readonly<Record<Level, string>> = Object.freeze({
  DEBUG: '',
  ERROR: figures.cross,
  INFO: figures.info,
  SUCCESS: figures.tick,
  WARN: '!'
})
