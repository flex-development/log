/**
 * @file Interfaces - LogTypeMap
 * @module log/interfaces/LogTypeMap
 */

/**
 * Registry of log types.
 *
 * This interface can be augmented to register custom log types.
 *
 * @example
 *  declare module '@flex-development/log' {
 *    interface LogTypeMap {
 *      box: 'box'
 *    }
 *  }
 */
interface LogTypeMap {
  debug: 'debug'
  error: 'error'
  fail: 'fail'
  info: 'info'
  inspect: 'inspect'
  log: 'log'
  ready: 'ready'
  start: 'start'
  success: 'success'
  trace: 'trace'
  verbose: 'verbose'
  warn: 'warn'
}

export type { LogTypeMap as default }
