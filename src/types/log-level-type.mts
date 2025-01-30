/**
 * @file Type Aliases - LogLevelType
 * @module log/types/LogLevelType
 */

import type { LogLevelMap } from '@flex-development/log'

/**
 * Union of log level types.
 *
 * To register custom log level types, augment {@linkcode LogLevelMap}. They
 * will be added to this union automatically.
 */
type LogLevelType = Extract<keyof LogLevelMap, string>

export type { LogLevelType as default }
