/**
 * @file Type Aliases - LogLevel
 * @module log/types/LogLevel
 */

import type { LogLevelMap } from '@flex-development/log'

/**
 * Union of log levels.
 *
 * To register custom log levels, augment {@linkcode LogLevelMap}. They will be
 * added to this union automatically.
 */
type LogLevel = LogLevelMap[keyof LogLevelMap]

export type { LogLevel as default }
