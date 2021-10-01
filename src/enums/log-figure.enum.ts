import figures from 'figures'
import type Level from './log-level.enum'

/**
 * @file Enums - LogFigure
 * @module log/enums/LogFigure
 */

/**
 * Log levels mapped to [figures][1].
 *
 * [1]: https://github.com/sindresorhus/figures
 *
 * @enum {string}
 */
const LogFigure: Readonly<Record<keyof typeof Level, string>> = Object.freeze({
  DEBUG: '',
  ERROR: figures.cross,
  INFO: figures.info,
  SUCCESS: figures.tick,
  WARN: '!'
})

export default LogFigure
