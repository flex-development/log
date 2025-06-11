/**
 * @file Enums - logLevels
 * @module log/enums/logLevels
 */

import type { LogLevel, LogType } from '@flex-development/log'

/**
 * Map where each key is a log type ({@linkcode LogType}) and each value is a
 * log level ({@linkcode LogLevel}).
 *
 * @enum {LogLevel}
 */
const logLevels = Object.freeze({
  silent: -1,
  error: 0,
  fatal: 0,
  warn: 1,
  log: 2,
  fail: 3,
  info: 3,
  ready: 3,
  start: 3,
  success: 3,
  debug: 4,
  trace: 5,
  verbose: 999
} as const)

export default logLevels
