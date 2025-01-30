/**
 * @file Type Aliases - LogLevelOption
 * @module log/types/LogLevelOption
 */

import type { LogLevel, LogLevelType } from '@flex-development/log'

/**
 * Union of log level options.
 *
 * @see {@linkcode LogLevelType}
 * @see {@linkcode LogLevel}
 */
type LogLevelOption = LogLevel | LogLevelType

export type { LogLevelOption as default }
