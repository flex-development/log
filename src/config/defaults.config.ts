import type { FlogOptions } from '@flog/interfaces'

/**
 * @file Configuration - Default Options
 * @module config/defaults
 */

export default Object.freeze({
  args: [],
  bold: { args: true, data: false },
  color: {},
  level: 'DEBUG'
}) as Readonly<Required<Pick<FlogOptions, 'args' | 'bold' | 'color' | 'level'>>>
