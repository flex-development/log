import LogLevel from '@log/enums/log-level.enum'
import type { LogOptions } from '@log/interfaces'

/**
 * @file Configuration - Default Options
 * @module config/defaults
 */

export default Object.freeze({
  args: [],
  bold: { args: true, data: false },
  color: {},
  level: LogLevel.DEBUG
}) as Readonly<Required<Pick<LogOptions, 'args' | 'bold' | 'color' | 'level'>>>
