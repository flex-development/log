/**
 * @file Interfaces - InspectOptions
 * @module log/interfaces/InspectOptions
 */

import type * as util from 'node-inspect-extracted'

/**
 * Options for using {@linkcode util.inspect} on a value.
 *
 * @see {@linkcode util.InspectOptions}
 *
 * @extends {Omit<util.InspectOptions,'colors'>}
 */
interface InspectOptions extends Omit<util.InspectOptions, 'colors'> {
  /**
   * Use color.
   *
   * @default isColorSupported()
   */
  colors?: boolean | null | undefined
}

export type { InspectOptions as default }
