/**
 * @file Internal - normalizeLevel
 * @module log/internal/normalizeLevel
 */

import type {
  InputLogObject,
  LogLevel,
  LogLevelMap,
  LogType,
  Logger
} from '@flex-development/log'
import { clamp } from '@flex-development/tutils'

/**
 * Format a log level.
 *
 * @internal
 *
 * @this {Pick<Logger, 'levels' | 'types'>}
 *
 * @param {number | string | null | undefined} level
 *  Log level or type
 * @return {LogLevel}
 *  Normalized log level
 */
function normalizeLevel(
  this: Pick<Logger, 'levels' | 'types'>,
  level: number | string | null | undefined
): LogLevel {
  /**
   * Log level map.
   *
   * @const {LogLevelMap} levels
   */
  const levels: LogLevelMap = this.levels

  if (typeof level === 'number') {
    return clamp(level, levels.silent, levels.verbose) as LogLevel
  } else if (typeof level === 'string') {
    /**
     * Map defining the log configuration for each log type.
     *
     * @const {Record<LogType, InputLogObject>} types
     */
    const types: Record<LogType, InputLogObject> = this.types

    // `level` is a known log type
    if (level in types) return types[level as LogType].level ?? levels.info
  }

  // `level` is `null`, `undefined`, or an unknown log type
  return levels.info
}

export default normalizeLevel
