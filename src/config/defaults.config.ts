import type { FlogOptions } from '@flog/interfaces'

/**
 * @file Configuration - Default Options
 * @module config/defaults
 */

export default Object.freeze({
  bold: { args: true, data: false },
  color: { data: 'white' },
  level: 'DEBUG'
}) as Readonly<Required<Pick<FlogOptions, 'bold' | 'color' | 'level'>>>
