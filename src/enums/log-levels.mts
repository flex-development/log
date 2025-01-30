/**
 * @file Enums - logLevels
 * @module log/enums/logLevels
 */

import type { LogLevel } from '@flex-development/log'

/**
 * Log levels.
 *
 * @internal
 *
 * @enum {LogLevel}
 */
const logLevels = Object.freeze({
  silent: -1,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  debug: 4,
  trace: 5,
  verbose: 999
} as const)

export default logLevels
