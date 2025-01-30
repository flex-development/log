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
  info: 3
  log: 2
  silent: -1
  trace: 5
  verbose: 999
  warn: 1
}

export type { LogLevelMap as default }
