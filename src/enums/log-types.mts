/**
 * @file Enums - logTypes
 * @module log/enums/logTypes
 */

import type { LogType } from '@flex-development/log'

/**
 * Log function names.
 *
 * @internal
 *
 * @enum {LogType | 'inspect' | 'silent'}
 */
enum logTypes {
  debug = 'debug',
  error = 'error',
  fail = 'fail',
  fatal = 'fatal',
  info = 'info',
  inspect = 'inspect',
  log = 'log',
  ready = 'ready',
  silent = 'silent',
  start = 'start',
  success = 'success',
  trace = 'trace',
  verbose = 'verbose',
  warn = 'warn'
}

export default logTypes
