/**
 * @file Type Aliases - LogType
 * @module log/types/LogType
 */

import type { LogTypeMap } from '@flex-development/log'

/**
 * Union of log types.
 *
 * To register custom log types, augment {@linkcode LogTypeMap}. They will be
 * added to this union automatically.
 */
type LogType = LogTypeMap[keyof LogTypeMap]

export type { LogType as default }
