/**
 * @file Enums - LogLevel
 * @module log/enums/LogLevel
 */

/**
 * Log levels.
 */
export enum LogLevel {
  DEBUG = 'debug',
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARN = 'warning'
}

export type Level = keyof typeof LogLevel
