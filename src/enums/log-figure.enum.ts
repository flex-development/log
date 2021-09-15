import figures from 'figures'
import type { LogLevel } from './log-level.enum'

/**
 * @file Enums - LogFigure
 * @module log/enums/LogFigure
 */

/**
 * Log levels mapped to [figures][1].
 *
 * [1]: https://github.com/sindresorhus/figures
 *
 * @readonly
 * @enum {string}
 */
export const LogFigure: Readonly<Record<keyof typeof LogLevel, string>> =
  Object.freeze({
    DEBUG: '',
    ERROR: figures.cross,
    INFO: figures.info,
    SUCCESS: figures.tick,
    WARN: '!'
  })
