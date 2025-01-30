/**
 * @file Type Aliases - LogFunctions
 * @module log/types/LogFunctions
 */

import type { LogFunction, LogType } from '@flex-development/log'

/**
 * Record, where each key is a log type and each value is a log function.
 *
 * @see {@linkcode LogFunction}
 * @see {@linkcode LogType}
 */
type LogFunctions = { [T in LogType]: LogFunction }

export type { LogFunctions as default }
