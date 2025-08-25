/**
 * @file Interfaces - InspectOptions
 * @module log/interfaces/InspectOptions
 */

import type * as util from 'node-inspect-extracted'

/**
 * Options for inspecting a value.
 *
 * @see {@linkcode util.InspectOptions}
 *
 * @extends {Omit<util.InspectOptions,'colors'>}
 */
interface InspectOptions extends Omit<util.InspectOptions, 'colors'> {
  /**
   * Whether to use color.
   *
   * @default isColorSupported()
   */
  colors?: boolean | null | undefined
}

export type { InspectOptions as default }
