/**
 * @file Internal - normalizeLevel
 * @module log/internal/normalizeLevel
 */

import clamp from '#internal/clamp'
import type {
  InputLogObject,
  LogLevel,
  LogLevelMap,
  LogLevelOption,
  LogType,
  Logger
} from '@flex-development/log'

/**
 * Format a log level.
 *
 * @internal
 *
 * @param {Pick<Logger, 'levels' | 'types'>} logger
 *  Logger object
 * @param {number | string | null | undefined} level
 *  Log level or type
 * @return {LogLevel}
 *  Normalized log level
 */
function normalizeLevel(
  logger: Pick<Logger, 'levels' | 'types'>,
  level: number | string | null | undefined
): LogLevel {
  /**
   * Log level map.
   *
   * @const {LogLevelMap} levels
   */
  const levels: LogLevelMap = logger.levels

  if (typeof level === 'number') {
    return clamp(level, levels.silent, levels.verbose)
  } else if (level === 'silent') {
    return levels.silent
  } else if (typeof level === 'string') {
    /**
     * Map defining the log configuration for each log type.
     *
     * @const {Record<LogType, InputLogObject>} types
     */
    const types: Record<LogType, InputLogObject> = logger.types

    // `level` is a known log type
    if (level in types) {
      /**
       * Normalized log level.
       *
       * @const {LogLevelOption} n
       */
      const n: LogLevelOption = types[level as LogType].level ?? levels.info

      if (typeof n === 'number') return n
    }
  }

  // `level` is `null`, `undefined`, or an unknown log type
  return levels.info
}

export default normalizeLevel
