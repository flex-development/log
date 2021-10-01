import type LogLevel from '@log/enums/log-level.enum'

/**
 * @file Type Definitions - Level
 * @module log/types/Level
 */

/**
 * Log levels.
 */
export type Level = keyof typeof LogLevel | LogLevel
