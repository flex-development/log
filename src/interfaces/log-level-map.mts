/**
 * @file Interfaces - LogLevelMap
 * @module log/interfaces/LogLevelMap
 */

/**
 * Registry of log levels.
 *
 * This interface can be augmented to register custom log levels.
 *
 * @example
 *  declare module '@flex-development/log' {
 *    interface LogLevelMap {}
 *  }
 */
interface LogLevelMap {
  debug: 4
  error: 0
  fail: 3
  fatal: 0
  info: 3
  log: 2
  ready: 3
  silent: -1
  start: 3
  success: 3
  trace: 5
  verbose: 999
  warn: 1
}

export type { LogLevelMap as default }
