/**
 * @file Type Aliases - LogTypeFunctions
 * @module log/types/LogTypeFunctions
 */

import type { LogFunction, LogType, LogTypeMap } from '@flex-development/log'

/**
 * Dictionary of log type functions.
 *
 * To register custom log type functions, augment {@linkcode LogTypeMap}. They
 * will be added to this union automatically.
 *
 * @see {@linkcode LogFunction}
 * @see {@linkcode LogType}
 */
type LogTypeFunctions = { [T in LogType]: LogFunction }

export type { LogTypeFunctions as default }
