/**
 * @file Enums - logTypes
 * @module log/enums/logTypes
 */

import type { LogType } from '@flex-development/log'

/**
 * Log types.
 *
 * @internal
 *
 * @enum {LogType}
 */
enum logTypes {
  debug = 'debug',
  error = 'error',
  fail = 'fail',
  info = 'info',
  inspect = 'inspect',
  log = 'log',
  ready = 'ready',
  start = 'start',
  success = 'success',
  trace = 'trace',
  verbose = 'verbose',
  warn = 'warn'
}

export default logTypes
