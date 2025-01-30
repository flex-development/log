/**
 * @file Internal - normalizeOptions
 * @module log/internal/normalizeOptions
 */

import type { LogLevelOption, LoggerOptions } from '@flex-development/log'

/**
 * Format logger options.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {LogLevelOption | LoggerOptions | null | undefined} options
 *  Log level or configuration options
 * @return {LoggerOptions}
 *  Logger options object
 */
function normalizeOptions(
  this: void,
  options?: LogLevelOption | LoggerOptions | null | undefined
): LoggerOptions {
  options ??= {}
  if (typeof options !== 'object') options = { level: options }
  return options
}

export default normalizeOptions
